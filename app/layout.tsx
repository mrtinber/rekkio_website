import type { Metadata } from "next";
import { Geist, Geist_Mono, Oi } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const oi = Oi({
    weight: "400",
    variable: "--font-oi",
    subsets: ["latin"],
    style: "normal",
});

export const metadata: Metadata = {
    title: "Rekkio - Musique, création & partage",
    description: "Découvrez REKKIO, des ateliers musicaux entre partage et émotion. Contactez Quentin pour vos projets.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${oi.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
