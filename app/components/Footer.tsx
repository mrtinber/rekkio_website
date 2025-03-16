import React from "react";
import { SocialBtn } from "./SocialBtn";

export const Footer = () => {
    return (
        <footer className="flex flex-wrap items-center justify-between py-4 px-8 md:px-16 gap-4 bg-black relative z-20">
            <div className="flex flex-col md:flex-row gap-4 w-full justify-between">
                <div>
                    <p>Contact: Quentin LEBRETON</p>
                    <a href="mailto:rekkiomusique@gmail.com">@: rekkiomusique@gmail.com</a>
                </div>
                <div className="flex gap-2">
                    <SocialBtn content="Instagram" />
                    <SocialBtn content="SoundCloud" />
                    <SocialBtn content="YouTube" />
                </div>
            </div>
            <div className="flex justify-center w-full text-sm">
                <p>
                    &copy; 2025 REKKIO. Tous droits réservés. &mdash;{" "}
                    <span className="underline cursor-pointer">
                        Politique des cookies
                    </span>
                </p>
            </div>
        </footer>
    );
};
