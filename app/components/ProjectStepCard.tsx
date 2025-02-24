import clsx from "clsx";
import React from "react";

interface ProjectStepCardProps {
    title: string;
    content: string;
    stepNumber: number;
    numberColor: string;
}

export const ProjectStepCard = ({
    title,
    content,
    stepNumber,
    numberColor,
}: ProjectStepCardProps) => {
    return (
        <div className="flex flex-col gap-2 w-1/4">
            <div
                className={clsx(
                    `bg-white ${numberColor} rounded-full w-8 flex items-center justify-center px-3 py-1`
                )}
            >
                {stepNumber}
            </div>
            <h3 className="font-semibold text-2xl">{title}</h3>
            <p className="text-justify">{content}</p>
        </div>
    );
};
