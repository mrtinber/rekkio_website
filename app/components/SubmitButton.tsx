import React, { ReactNode } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

interface ButtonProps {
    children: ReactNode;
}

export const SubmitButton = ({ children }: ButtonProps) => {
    return (
        <button
            type="submit"
            className="relative flex flex-row items-center lg:justify-center group w-44 sm:w-80"
            aria-label="Soumettre le formulaire"
        >
            <div className="bg-white w-12 h-12 flex items-center rounded-full group-hover:w-full group-focus:w-full lg:absolute top-0 left-0 lg:translate-y-1/2 transition-all duration-700 group-focus:outline-none group-focus:ring-4 group-focus:ring-[#FA852D] group-focus:ring-opacity-50">
            <FaArrowRightLong className="text-black/70 z-50 absolute left-6 -translate-x-1/2 group-hover:left-7 transition-all duration-300" />
            <p className="absolute left-16 uppercase text-nowrap font-semibold group-hover:bg-transparent group-focusbg-transparent group-hover:text-black/60 group-focus:text-black/60 text-white transition-all duration-300">
                {children}
            </p>
            </div>
        </button>
    );
};
