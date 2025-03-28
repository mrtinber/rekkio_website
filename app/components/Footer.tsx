import React from "react";
import { SocialBtn } from "./SocialBtn";

export const Footer = () => {
    return (
        <footer className="backdrop-blur-3xl relative z-20">
            <div className="flex flex-wrap items-center justify-between w-5/6 md:w-3/4 m-auto py-4 gap-6 md:gap-4">
                <div className="flex flex-col md:flex-row gap-6 md:gap-4 w-full justify-between text-base">
                    <div>
                        <p>Contact: Quentin LEBRETON</p>
                        <a href="mailto:rekkiomusique@gmail.com">
                            @:
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
            </div>
        </footer>
    );
};
