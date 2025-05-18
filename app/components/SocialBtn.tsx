import React from "react";
import { InstagramIcon } from "../icons/InstagramIcon";
import { YouTubeIcon } from "../icons/YouTubeIcon";
import { SiLinktree } from "react-icons/si";

interface SocialBtnProps {
    content: "Instagram" | "LinkTree" | "YouTube";
}

export const SocialBtn = ({ content }: SocialBtnProps) => {
    const handleNavigation = () => {
        if (content === "LinkTree") {
            window.open(
                "https://linktr.ee/__kasiop?utm_source=linktree_profile_share&ltsid=0a262498-b02f-414a-8bba-424cad109bca",
                "_blank"
            );
        } else if (content === "YouTube") {
            window.open(
                "https://www.youtube.com/@kasiopmusic/videos",
                "_blank"
            );
        } else if (content === "Instagram") {
            window.open("https://www.instagram.com/rekkiomusique/", "_blank");
        }
    };

    return (
        <button
            onClick={handleNavigation}
            className="bg-white text-[#0a0a0a] p-2 md:w-12 flex items-center justify-center rounded-full 
            hover:text-white hover:bg-transparent transition-all duration-300
            focus:outline-none focus:ring-4 focus:ring-[#FA852D] focus:ring-opacity-50"
            aria-label={`Aller à ${content}`}
        >
            {content === "Instagram" ? (
                <InstagramIcon />
            ) : content === "LinkTree" ? (
                <SiLinktree size={28} />
            ) : content === "YouTube" ? (
                <YouTubeIcon />
            ) : null}
        </button>
    );
};
