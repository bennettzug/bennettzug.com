import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
    variable: "--font-geist",
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
            <body className={`${geist.variable} antialiased`}>{children}</body>
        </html>
    );
}
