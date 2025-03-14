import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

interface ButtonProps {
    textContent: string;
}

export const Button = ({ textContent }: ButtonProps) => {
    return (
        <button
            type="submit"
            className="relative mt-8 flex flex-row items-center group w-80"
        >
            <div className="bg-white  w-12 h-12 flex items-center justify-center rounded-full group-hover:w-full absolute bottom-0 left-0 translate-y-1/2 transition-all duration-700"></div>
            <FaArrowRightLong className="text-[#5F7B93] z-50 absolute left-6 -translate-x-1/2 group-hover:left-7 transition-all duration-300" />
            <p className="absolute left-16 uppercase font-semibold group-hover:bg-transparent group-hover:text-[#5F7B93] text-white transition-all duration-300">
                {textContent}
            </p>
        </button>
    );
};
