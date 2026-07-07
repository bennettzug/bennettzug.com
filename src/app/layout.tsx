import type { Metadata } from "next";
import "./globals.css";

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
            className="bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-200"
        >
            <head>
                <link rel="preconnect" href="https://rsms.me/" />
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
            </head>
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
