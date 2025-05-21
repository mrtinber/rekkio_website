import React, { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    title: string;
    id?: string;
}

export const Section = ({ children, title, id }: SectionProps) => {
    return (
        <section className="w-5/6 lg:w-3/4 m-auto flex flex-col gap-8" id={id}>
            <h2 className="text-5xl md:text-6xl font-vampiro z-20 pl-2 md:pl-0">{title}</h2>
            {children}
        </section>
    );
};
