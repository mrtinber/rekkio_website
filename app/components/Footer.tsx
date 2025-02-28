import React from "react";
import { SocialBtn } from "./SocialBtn";

export const Footer = () => {
    return (
        <footer className="flex flex-wrap items-center justify-between py-4 px-16">
            <div className="flex w-full justify-between">
                <div>
                    <p>Contact: Quentin LEBRETON</p>
                    <p>@: rekkio@gmail.com</p>
                </div>
                <div className="flex gap-2">
                    <SocialBtn content="Instagram" />
                    <SocialBtn content="SoundCloud" />
                    <SocialBtn content="YouTube" />
                </div>
            </div>
            <div className="flex justify-center w-full">
                <p>&copy; 2025 REKKIO. Tous droits réservés. &mdash; <span className="underline cursor-pointer">Politique des cookies</span></p>
            </div>
        </footer>
    );
};
