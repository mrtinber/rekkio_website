import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },

            fontFamily: {
                sans: "var(--font-geist-sans), sans-serif",
                mono: "var(--font-geist-mono), monospace",
                oi: "var(--font-oi), cursive",
            },

            keyframes: {
                blob: {
                    "0%": {
                        transform: "translate(0, 0) scale(1)",
                        rotate: "0deg",
                    },
                    "10%": {
                        transform: "translate(15px, -30px) scale(1.1)",
                        rotate: "40deg",
                    },
                    "20%": {
                        transform: "translate(-30px, 20px) scale(1.15)",
                        rotate: "40deg",
                    },
                    "30%": {
                        transform: "translate(20px, 30px) scale(1.1)",
                        rotate: "40deg",
                    },
                    "40%": {
                        transform: "translate(-15px, -20px) scale(1.05)",
                        rotate: "40deg",
                    },
                    "50%": {
                        transform: "translate(10px, 30px) scale(1)",
                    },
                    "60%": {
                        transform: "translate(-20px, -20px) scale(0.95)",
                        rotate: "30%",
                    },
                    "70%": {
                        transform: "translate(35px, -25px) scale(0.9)",
                        rotate: "50%",
                    },
                    "80%": {
                        transform: "translate(-20px, 30px) scale(0.85)",
                        rotate: "60%",
                    },
                    "90%": {
                        transform: "translate(25px, -10px) scale(0.9)",
                    },
                    "100%": {
                        transform: "translate(0, 0) scale(1)",
                    },
                },
            },
            animation: {
                blob: "blob 48s infinite ease-in-out",
                "blob-reverse": "blob 40s infinite ease-in-out reverse",
            },
        },
    },
    plugins: [],
} satisfies Config;
