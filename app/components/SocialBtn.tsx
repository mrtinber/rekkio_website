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
        <button className="bg-white text-black p-2 rounded-full">
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
    );
};
