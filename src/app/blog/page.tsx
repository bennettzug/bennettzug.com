import { getAllPosts } from "@/utils/posts";
import Link from "next/link";

export default function BlogPage() {
    const posts = getAllPosts();
    return (
        <div className="max-w-xl text-neutral-800 dark:text-neutral-200 mx-auto px-10 py-20 space-y-12 font-light text-sm">
            <Link href="/" className="underline decoration-2 decoration-neutral-300 hover:text-neutral-500 dark:decoration-neutral-700 dark:hover:text-neutral-400">
                ← Back
            </Link>
            <div className="flex flex-col gap-5">
                <p className="font-semibold">Blog</p>
                {posts.map((post) => (
                    <div key={post.slug} className="flex flex-col gap-1">
                        <div className="flex gap-2">
                            <Link
                                href={`/blog/${post.slug}`}
                                className="font-medium underline decoration-2 decoration-neutral-300 hover:text-neutral-500 dark:decoration-neutral-700 dark:hover:text-neutral-400"
                            >
                                {post.title}
                            </Link>
                            <p className="text-neutral-500 dark:text-neutral-400">    {new Date(post.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
