import { getPostBySlug, getAllPosts } from "@/utils/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";

export function generateStaticParams() {
    return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const { data, content } = getPostBySlug(slug);
    const formattedDate = new Date(data.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    return (
        <div className="max-w-xl text-neutral-800 dark:text-neutral-200 mx-auto px-10 py-20 space-y-12 font-light text-sm">
            <Link href="/blog" className="underline decoration-2 decoration-neutral-300 hover:text-neutral-500 dark:decoration-neutral-700 dark:hover:text-neutral-400">
                ← Back
            </Link>
            <div className="flex flex-col gap-5">
                <p className="text-xl font-bold">{data.title}</p>
                <p className="text-neutral-500 dark:text-neutral-400">{formattedDate}</p>
                <div className="prose prose-neutral dark:prose-invert prose-sm">
                    <MDXRemote source={content} />
                </div>
            </div>
        </div>
    );
}
