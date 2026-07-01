import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.join(process.cwd(), "posts");

export function getAllPosts() {
    return fs
        .readdirSync(postsDir)
        .filter((f) => f.endsWith(".mdx"))
        .map((filename) => {
            const slug = filename.replace(".mdx", "");
            const file = fs.readFileSync(path.join(postsDir, filename), "utf8");
            const { data } = matter(file);
            return { slug, ...data } as { slug: string; title: string; date: string };
        })
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string) {
    const file = fs.readFileSync(path.join(postsDir, `${slug}.mdx`), "utf8");
    const { data, content } = matter(file);
    return { data, content };
}
