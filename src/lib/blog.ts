import fs from "fs";
import path from "path";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  content: string;
}

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

function parseFrontmatter(raw: string): { metadata: Record<string, string | string[]>; content: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { metadata: {}, content: raw };

  const metadata: Record<string, string | string[]> = {};
  for (const line of match[1].split("\n")) {
    const [key, ...rest] = line.split(":");
    if (key && rest.length) {
      const value = rest.join(":").trim();
      if (value.startsWith("[")) {
        metadata[key.trim()] = value
          .replace(/[\[\]]/g, "")
          .split(",")
          .map((s) => s.trim().replace(/['"]/g, ""));
      } else {
        metadata[key.trim()] = value.replace(/['"]/g, "");
      }
    }
  }

  return { metadata, content: match[2].trim() };
}

export async function getBlogPosts(): Promise<Omit<BlogPost, "content">[]> {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));
  const posts: Omit<BlogPost, "content">[] = [];

  for (const file of files) {
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf-8");
    const { metadata } = parseFrontmatter(raw);

    posts.push({
      slug: file.replace(".mdx", ""),
      title: (metadata.title as string) || file.replace(".mdx", ""),
      description: (metadata.description as string) || "",
      date: (metadata.date as string) || "",
      tags: (metadata.tags as string[]) || [],
    });
  }

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { metadata, content } = parseFrontmatter(raw);

  return {
    slug,
    title: (metadata.title as string) || slug,
    description: (metadata.description as string) || "",
    date: (metadata.date as string) || "",
    tags: (metadata.tags as string[]) || [],
    content,
  };
}
