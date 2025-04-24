"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { FaXmark } from "react-icons/fa6";

export const ExitBtn = () => {
    const router = useRouter();

    return (
        <button
            type="button"
            className="absolute right-6 top-6 text-3xl hover:text-[#FA852D] hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#FA852D] focus:ring-opacity-50 transition-all"
            onClick={() => router.push("/")}
            aria-label="Fermer et revenir à l'accueil"
        >
            <FaXmark aria-hidden="true" />
        </button>
    );
};
