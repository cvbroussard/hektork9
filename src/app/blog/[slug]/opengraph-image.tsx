import { ImageResponse } from "next/og";
import { getBlogPost, getBlogPosts } from "@/lib/blog";

export const runtime = "nodejs";
export const alt = "Hektor K9 Journal";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  const title = post?.title || "Journal";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#131210",
          fontFamily: "sans-serif",
          padding: 80,
        }}
      >
        <div
          style={{
            fontSize: 18,
            color: "#B87333",
            letterSpacing: "0.3em",
          }}
        >
          HEKTOR K9 JOURNAL
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.2,
            maxWidth: 900,
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 18,
            color: "#8A8D8F",
          }}
        >
          hektork9.com
        </div>
      </div>
    ),
    { ...size }
  );
}
