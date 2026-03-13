import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Dog training insights, methodology breakdowns, and tips from Hektor K9 in West Palm Beach.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <section className="border-b border-border pt-16">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="font-mono text-xs tracking-[0.3em] text-kupfer">
            JOURNAL
          </p>
          <h1 className="font-display mt-3 text-4xl font-bold tracking-tight text-weiss md:text-5xl">
            Training notes & insights
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-stahl">
            Methodology breakdowns, training principles, and practical
            guidance from the field.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          {posts.length === 0 ? (
            <p className="text-center text-stahl">
              Coming soon. Follow us on{" "}
              <a
                href="https://instagram.com/hektor_k9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-kupfer"
              >
                Instagram
              </a>{" "}
              for updates.
            </p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block rounded-lg border border-border bg-kohle p-8 no-underline transition-colors hover:border-schiefer"
                >
                  <p className="font-mono text-xs text-kupfer">
                    {post.date}
                    {post.tags?.[0] && ` · ${post.tags[0].toUpperCase()}`}
                  </p>
                  <h2 className="font-display mt-2 text-xl font-semibold text-weiss group-hover:text-kupfer-light">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-nebel">
                    {post.description}
                  </p>
                  <span className="font-display mt-4 inline-block text-xs font-medium tracking-wider text-kupfer">
                    READ &rarr;
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
