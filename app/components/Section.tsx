import React, { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    title: string;
    id?: string;
}

export const Section = ({ children, title, id }: SectionProps) => {
    return (
        <section className="w-5/6 lg:w-3/4 m-auto flex flex-col gap-8" id={id}>
            <h2 className="text-4xl font-oi tracking-wide z-20">{title}</h2>
            {children}
        </section>
    );
};
