import React from "react";
import { SocialBtn } from "./SocialBtn";

export const Footer = () => {
    return (
        <footer className="flex flex-wrap items-center justify-between py-4 px-16">
            <div>
                <p>Contact: Quentin LEBRETON</p>
                <p>@: rekkio@gmail.com</p>
            </div>
            <div className="flex gap-2">
                <SocialBtn content="Instagram" />
                <SocialBtn content="SoundCloud" />
                <SocialBtn content="YouTube" />
            </div>
        </footer>
    );
};
