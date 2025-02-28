import React from "react";
import { InstagramIcon } from "../icons/InstagramIcon";
import { SoundCloudIcon } from "../icons/SoundCloudIcon";
import { YouTubeIcon } from "../icons/YouTubeIcon";
import { LinkedInIcon } from "../icons/LinkedInIcon";

interface SocialBtnProps {
    content: "Instagram" | "SoundCloud" | "YouTube";
}

export const SocialBtn = ({ content }: SocialBtnProps) => {
    return (
        <a
            href={
                content === "SoundCloud"
                    ? "https://soundcloud.com/kasiop"
                    : content === "YouTube"
                    ? "https://www.youtube.com/@kasiopmusic/videos"
                    : "https://www.instagram.com/rekkiomusique/"
            }
        >
            <button className="bg-white text-black p-2 rounded-full hover:text-white hover:bg-transparent transition-all duration-300">
                {content === "Instagram" ? (
                    <InstagramIcon />
                ) : content === "SoundCloud" ? (
                    <SoundCloudIcon />
                ) : content === "YouTube" ? (
                    <YouTubeIcon />
                ) : (
                    <LinkedInIcon />
                )}
            </button>
        </a>
    );
};
