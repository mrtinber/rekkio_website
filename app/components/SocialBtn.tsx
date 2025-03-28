import React from "react";
import { InstagramIcon } from "../icons/InstagramIcon";
import { SoundCloudIcon } from "../icons/SoundCloudIcon";
import { YouTubeIcon } from "../icons/YouTubeIcon";
import { LinkedInIcon } from "../icons/LinkedInIcon";
import { SiLinktree } from "react-icons/si";

interface SocialBtnProps {
    content: "Instagram" | "LinkTree" | "YouTube";
}

export const SocialBtn = ({ content }: SocialBtnProps) => {
    return (
        <a
            href={
                content === "LinkTree"
                    ? "https://linktr.ee/__kasiop?utm_source=linktree_profile_share&ltsid=0a262498-b02f-414a-8bba-424cad109bca"
                    : content === "YouTube"
                    ? "https://www.youtube.com/@kasiopmusic/videos"
                    : "https://www.instagram.com/rekkiomusique/"
            }
        >
            <button className="bg-white text-[#0a0a0a] p-2 rounded-full hover:text-white hover:bg-transparent transition-all duration-300">
                {content === "Instagram" ? (
                    <InstagramIcon />
                ) : content === "LinkTree" ? (
                    <SiLinktree size={28}/>
                ) : content === "YouTube" ? (
                    <YouTubeIcon />
                ) : (
                    <LinkedInIcon />
                )}
            </button>
        </a>
    );
};
