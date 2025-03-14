import clsx from "clsx";
import React from "react";
import { motion } from "framer-motion";
import { OrganicDot } from "./OrganicDot";

interface ProjectStepCardProps {
    title: string;
    content: string;
    bgColor: number;
    itemWidth: string;
}

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export const ProjectStepCard = ({
    title,
    content,
    bgColor,
    itemWidth,
}: ProjectStepCardProps) => {
    const circleColors = [
        "#FA852D",
        "#05739E",
        "#0296C6",
        "#0F1921",
        "#EA4714",
    ];

    const chooseColor = (bgColor: number) => {
        return circleColors[bgColor] || circleColors[0];
    };

    return (
        <motion.div
            variants={itemVariants}
            className={`flex flex-col gap-2 backdrop-blur-lg bg-white/5 rounded-3xl px-8 py-6 ${itemWidth}`}
        >
            <div className="flex gap-4 items-center">
                <OrganicDot fillColor={chooseColor(bgColor)} />

                <h3 className="font-semibold text-2xl">{title}</h3>
            </div>
            <p className="text-justify font-light">{content}</p>
        </motion.div>
    );
};
