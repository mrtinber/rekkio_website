import React from "react";
import { SocialBtn } from "./SocialBtn";

export const Footer = () => {
    return (
        <footer className="flex flex-wrap items-center justify-between py-4 gap-4 backdrop-blur-3xl relative z-20 w-3/4 m-auto">
            <div className="flex flex-col md:flex-row gap-4 w-full justify-between text-base">
                <div>
                    <p>Contact: Quentin LEBRETON</p>
                    <a href="mailto:rekkiomusique@gmail.com">
                        @:{" "}
                        <span className="hover:underline">
                            rekkiomusique@gmail.com
                        </span>
                    </a>
                </div>
                <div className="flex gap-2">
                    <SocialBtn content="Instagram" />
                    <SocialBtn content="YouTube" />
                    <SocialBtn content="LinkTree" />
                </div>
            </div>
            <div className="flex justify-center w-full text-sm">
                <p>
                    &copy; 2025 REKKIO. Tous droits réservés. &mdash;{" "}
                    <span className="underline cursor-pointer hover:no-underline">
                        Politique des cookies
                    </span>
                </p>
            </div>
        </footer>
    );
};
