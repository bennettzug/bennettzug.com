import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Bennett Zug",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className="bg-white text-neutral-800 dark:bg-neutral-900 dark:text-neutral-200"
        >
            <body className={`${inter.variable} antialiased`}>{children}</body>
        </html>
    );
}
