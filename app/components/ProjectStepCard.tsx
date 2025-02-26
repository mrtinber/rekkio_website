import clsx from "clsx";
import React from "react";
import { motion } from "framer-motion";

interface ProjectStepCardProps {
    title: string;
    content: string;
    stepNumber: number;
    numberColor: string;
}

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    // exit: { opacity: 0, y: 50, transition: { duration: 0.3 } },
};

export const ProjectStepCard = ({
    title,
    content,
    stepNumber,
    numberColor,
}: ProjectStepCardProps) => {
    return (
        <motion.div
            variants={itemVariants}
            // exit="hidden"
            className="flex flex-col gap-2 w-1/4"
        >
            <div
                className={clsx(
                    `bg-white ${numberColor} rounded-full w-8 flex items-center justify-center px-3 py-1`
                )}
            >
                {stepNumber}
            </div>
            <h3 className="font-semibold text-2xl">{title}</h3>
            <p className="text-justify">{content}</p>
        </motion.div>
    );
};
