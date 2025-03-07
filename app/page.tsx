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
import { TbPhoneRinging } from "react-icons/tb";

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
            <section
                className="min-h-screen relative w-full py-16 bg-[#0F1921]
            "
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute w-full h-screen"
                >
                    <defs>
                        <filter id="goo">
                            <feGaussianBlur
                                in="SourceGraphic"
                                stdDeviation="50"
                                result="blur"
                            />
                            <feColorMatrix
                                in="blur"
                                mode="matrix"
                                values="1 0 0 0 0    0 1 0 0 0   0 0 1 0 0   0 0 0 180 -28"
                                result="goo"
                            />
                            {/* <feBlend in="SourceGraphic" in2="goo" /> */}
                        </filter>
                    </defs>
                </svg>
                <div
                    className="absolute w-full h-full flex items-center justify-center"
                    style={{ filter: "url(#goo)" }}
                >
                    <div className="absolute right-[40%] top-[15%] h-[30%] w-[15%] bg-gradient-to-br from-[#0373A6] via-[#0296C6] to-[#A3DAF1] rounded-full animate-blob blur-[10px]"></div>
                    <div className="absolute left-[40%] top-[20%] h-[40%] w-[20%] bg-gradient-to-br from-[#05739E] via-[#02324C] to-[#0F1921] rounded-full animate-blob-reverse blur-[10px]"></div>
                    <div className="absolute left-[30%] top-[5%] h-[30%] w-[15%] bg-gradient-to-br from-[#FFD8A3] via-[#FA852D] to-[#EA4714] rounded-full animate-blob blur-[10px]"></div>
                </div>

                <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-center mx-8 md:mx-16 bg-white/5 rounded-3xl shadow-xl backdr">
                    <Image
                        src="/profile.jpg"
                        alt="Photo de profil"
                        width={350}
                        height={150}
                        className="rounded-l-3xl"
                    />
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { duration: 1.8 },
                        }}
                        viewport={{ once: true }}
                        className="text-justify flex flex-col gap-4 pr-8 text-base lg:text-xl font-extralight"
                    >
                        <h2 className="text-5xl font-bold">Qui est Quentin?</h2>
                        <p>
                            Je suis producteur de musiques électroniques depuis
                            10 ans. Je suis également diplômé d’état d’éducateur
                            spécialisé depuis 2019. Au travers de REKKIO, je
                            souhaite permettre à quiconque de pouvoir aborder le
                            processus de création musicale afin de plonger dans
                            la création artistique, d’en percevoir l’essence et
                            de favoriser l’ouverture culturelle.
                        </p>
                        <p>
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
                    className="flex flex-col lg:flex-row justify-between gap-8"
                >
                    {projectSteps.map((step, index) => (
                        <ProjectStepCard
                            title={step.title}
                            content={step.content}
                            key={index}
                            bgColor={index}
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
                    className="flex flex-col lg:flex-row justify-between gap-3"
                >
                    {workshopSteps.map((step, index) => (
                        <ProjectStepCard
                            title={step.title}
                            content={step.content}
                            key={index}
                            bgColor={index}
                            itemWidth="lg:w-1/5"
                        />
                    ))}
                </motion.div>
            </section>
            <section
                id="formSection"
                className="relative min-h-screen w-full py-16 px-8 md:px-16 bg-[#5F7B93] flex flex-col gap-8"
            >
                <h2 className="flex items-center gap-4 text-4xl font-bold"><TbPhoneRinging/> Parlons de votre projet</h2>
                <CustomerForm />
            </section>
            <Footer />
        </div>
    );
}
