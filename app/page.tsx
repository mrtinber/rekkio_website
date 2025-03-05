"use client";

import Image from "next/image";
import React from "react";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { ProjectStepCard } from "./components/ProjectStepCard";
import { projectSteps, workshopSteps } from "./data/steps";
import { CustomerForm } from "./components/CustomerForm";
import { motion } from "framer-motion";
import { CookiesModal } from "./components/CookiesModal";

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
        <div className="min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
            <CookiesModal />
            <Banner />
            <section className="min-h-screen relative w-full py-16 bg-[#0F1921]">
                <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-center px-8 md:px-16">
                    <Image
                        src="/profile.jpg"
                        alt="Photo de profil"
                        width={350}
                        height={150}
                    />
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { duration: 1.8 },
                        }}
                        viewport={{ once: true }}
                        className="text-justify flex flex-col gap-4"
                    >
                        <p className="text-base lg:text-2xl font-extralight">
                            Je suis producteur de musiques électroniques depuis
                            10 ans. Je suis également diplômé d’état d’éducateur
                            spécialisé depuis 2019. Au travers de REKKIO, je
                            souhaite permettre à quiconque de pouvoir aborder le
                            processus de création musicale afin de plonger dans
                            la création artistique, d’en percevoir l’essence et
                            de favoriser l’ouverture culturelle.
                        </p>
                        <p className="text-base lg:text-2xl font-extralight">
                            Ces ateliers ont également pour but de favoriser un
                            travail collaboratif, dans le respect des envies et
                            des influences de chacun. Au travers de la pratique
                            artistique, ces espaces de libertés visent également
                            à offrir à tous la possibilité de s’aborder soi-même
                            d’une autre façon.
                        </p>
                    </motion.div>
                </div>
            </section>
            <section className="relative min-h-screen w-full py-16 px-8 md:px-16 bg-[#5F7B93] flex flex-col gap-8">
                <h2 className="text-4xl font-bold">
                    Les étapes de la mise en place du projet
                </h2>
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    variants={containerVariants}
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex flex-col lg:flex-row justify-between gap-16"
                >
                    {projectSteps.map((step, index) => (
                        <ProjectStepCard
                            title={step.title}
                            content={step.content}
                            key={index}
                            stepNumber={index + 1}
                            numberColor="text-[#5f7b93]"
                            itemWidth="lg:w-1/4"
                        />
                    ))}
                </motion.div>
            </section>
            <section className="relative min-h-screen w-full py-16 px-8 md:px-16 bg-[#0F1921] flex flex-col gap-8">
                <h2 className="text-4xl font-bold">
                    Les étapes essentielles des ateliers
                </h2>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex flex-col lg:flex-row justify-between gap-16"
                >
                    {workshopSteps.map((step, index) => (
                        <ProjectStepCard
                            title={step.title}
                            content={step.content}
                            key={index}
                            stepNumber={index + 1}
                            numberColor="text-[#0f1921]"
                            itemWidth="lg:w-1/5"
                        />
                    ))}
                </motion.div>
            </section>
            <section
                id="formSection"
                className="relative min-h-screen w-full py-16 px-8 md:px-16 bg-[#5F7B93] flex flex-col gap-8"
            >
                <h2 className="text-4xl font-bold">Formulaire de contact</h2>
                <CustomerForm />
            </section>
            <Footer />
        </div>
    );
}
