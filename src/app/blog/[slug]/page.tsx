import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPost, getBlogPosts } from "@/lib/blog";
import { MDXContent } from "@/components/mdx-content";
import { ArticleSchema, BreadcrumbSchema } from "@/components/structured-data";

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
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: ["Charles Broussard"],
      tags: post.tags,
    },
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
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Journal", href: "/blog" },
          { name: post.title, href: `/blog/${slug}` },
        ]}
      />
      <ArticleSchema
        title={post.title}
        description={post.description}
        datePublished={post.date}
        url={`https://hektork9.com/blog/${slug}`}
      />

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
            <p className="mt-3 text-sm text-nebel">
              By{" "}
              <Link href="/about" className="text-kupfer no-underline hover:text-kupfer-light">
                Charles Broussard
              </Link>
              , AKC CGC Evaluator
            </p>
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
