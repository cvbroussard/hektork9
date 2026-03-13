import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPost, getBlogPosts } from "@/lib/blog";
import { MDXContent } from "@/components/mdx-content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return { title: "Not Found" };

  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) return notFound();

  return (
    <>
      <article className="border-b border-border pt-16">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <Link
            href="/blog"
            className="font-mono text-xs text-kupfer no-underline hover:text-kupfer-light"
          >
            &larr; JOURNAL
          </Link>

          <header className="mt-8">
            <p className="font-mono text-xs text-stahl">
              {post.date}
              {post.tags?.map((tag) => (
                <span key={tag}> &middot; {tag.toUpperCase()}</span>
              ))}
            </p>
            <h1 className="font-display mt-3 text-3xl font-bold tracking-tight text-weiss md:text-4xl">
              {post.title}
            </h1>
            {post.description && (
              <p className="mt-4 text-lg text-stahl">{post.description}</p>
            )}
          </header>

          <hr className="my-8" />

          <div className="prose prose-lg max-w-none">
            <MDXContent source={post.content} />
          </div>
        </div>
      </article>

      <section className="bg-kohle">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <p className="text-stahl">
            Questions about training?{" "}
            <Link href="/book" className="text-kupfer">
              Book a consultation
            </Link>{" "}
            or call{" "}
            <a href="tel:+15612318006" className="text-kupfer">
              (561) 231-8006
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
