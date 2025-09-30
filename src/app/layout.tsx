import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
    variable: "--font-archivo",
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
            className="bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-200"
        >
            <body className={`${archivo.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
