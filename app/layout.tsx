import type { Metadata } from "next";
import { Geist, Geist_Mono, Oi, Anton, Vampiro_One, Bruno_Ace_SC, Modak } from "next/font/google";
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

const anton = Anton({
    variable: "--font-anton",
    subsets: ["latin"], 
    weight: "400",   
})

const vampiro = Vampiro_One({
    variable: "--font-vampiro",
    weight: "400", 
    subsets: ["latin"],
}) 

const bruno = Bruno_Ace_SC({
    weight: "400", 
    variable: "--font-bruno",
    subsets: ["latin"],
})

const modak = Modak({
    weight: "400", 
    variable: "--font-modak",
    subsets: ["latin"],
})

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
                className={`${geistSans.variable} ${geistMono.variable} ${oi.variable} ${anton.variable} ${vampiro.variable} ${bruno.variable} ${modak.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
