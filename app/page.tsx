"use client";

import React from "react";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { ProjectStepCard } from "./components/ProjectStepCard";
import { projectSteps, workshopSteps } from "./data/steps";
import { CustomerForm } from "./components/CustomerForm";
import { motion } from "framer-motion";
import { CookiesModal } from "./components/CookiesModal";
import { BackgroundBlob } from "./components/BackgroundBlob";
import { Section } from "./components/Section";
import { IntroSection } from "./components/IntroSection";

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration: 0.8,
            staggerChildren: 0.3,
        },
    },
};

export default function Home() {
    return (
        <div className="min-h-screen gap-16 font-sans">
            <CookiesModal />
            <Banner />
            <main className="min-h-screen relative w-full flex flex-col gap-24 lg:gap-32 bg-[#0F1921] pb-16">
                <BackgroundBlob />
                <IntroSection />
                <Section title="La mise en place du projet">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        variants={containerVariants}
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex flex-col lg:grid lg:grid-cols-2 justify-between gap-6"
                    >
                        {projectSteps.map((step, index) => (
                            <ProjectStepCard
                                title={step.title}
                                content={step.content}
                                key={index}
                                bgColor={index}
                                itemWidth="lg:col-span-1"
                            />
                        ))}
                    </motion.div>
                </Section>
                <Section title="Les ateliers">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex flex-col lg:grid lg:grid-cols-2 justify-between gap-6"
                    >
                        {workshopSteps.map((step, index) => (
                            <ProjectStepCard
                                title={step.title}
                                content={step.content}
                                key={index}
                                bgColor={index}
                                itemWidth={
                                    index === workshopSteps.length - 1 &&
                                    workshopSteps.length % 2 !== 0
                                        ? "lg:col-span-2"
                                        : "lg:col-span-1"
                                }
                            />
                        ))}
                    </motion.div>
                </Section>
                <Section title="Parlons de votre projet" id="formSection">
                    <CustomerForm />
                </Section>
            </main>
            <Footer />
        </div>
    );
}
