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
            <main className="min-h-screen relative w-full flex flex-col gap-24 lg:gap-32 bg-[#0F1921]">
                <div className="sticky top-0 w-full z-0">
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
                        className="absolute w-full h-screen flex items-center justify-center"
                        style={{ filter: "url(#goo)" }}
                    >
                        <div className="absolute right-[30%] top-[35%] h-[35%] w-[20%] bg-gradient-to-br from-[#0373A6] via-[#0296C6] to-[#A3DAF1] rounded-full animate-blob blur-[10px]"></div>
                        <div className="absolute left-[40%] top-[40%] h-[40%] w-[25%] bg-gradient-to-br from-[#05739E] via-[#02324C] to-[#0F1921] rounded-full animate-blob-reverse blur-[10px]"></div>
                        <div className="absolute left-[30%] top-[25%] h-[35%] w-[20%] bg-gradient-to-br from-[#FFD8A3] via-[#FA852D] to-[#EA4714] rounded-full animate-blob blur-[10px]"></div>
                    </div>
                </div>

                <section className="relative z-10 flex flex-col md:flex-row gap-8 items-center w-5/6 lg:w-3/4 m-auto backdrop-blur-lg bg-white/5 rounded-3xl shadow-xl">
                    <Image
                        src="/profile.jpg"
                        alt="Photo de profil"
                        width={350}
                        height={350}
                        className="rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none w-full md:w-2/5 lg:h-screen sm:h-[800px] sm:object-cover"
                    />
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { duration: 1.8 },
                        }}
                        viewport={{ once: true }}
                        className="lg:text-justify flex flex-col gap-4 px-6 pb-6 lg:py-6 lg:pr-8 text-base lg:text-lg font-extralight"
                    >
                        <h2 className="text-3xl lg:text-4xl font-oi">Qui suis-je?</h2>
                        <p>
                            Je suis producteur de musiques électroniques depuis
                            10 ans. Je suis également diplômé d’état d’éducateur
                            spécialisé depuis 2019. Au travers de{" "}
                            <span className="font-semibold">REKKIO</span>, je
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
                </section>
                <section className="w-5/6 lg:w-3/4 m-auto flex flex-col gap-8">
                    <h2 className="text-4xl font-oi tracking-wide z-20">
                        La mise en place du projet
                    </h2>
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
                </section>

                <section className="w-5/6 lg:w-3/4 m-auto flex flex-col gap-8">
                    <h2 className="text-4xl font-oi tracking-wide z-20">
                        Les ateliers
                    </h2>
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
                </section>
                <section
                    id="formSection"
                    className="relative w-full bg-transparent pb-16"
                >
                    <div className="w-5/6 lg:w-3/4 m-auto flex flex-col gap-8">
                        <h2 className="flex items-center gap-4 text-4xl font-oi tracking-wide">
                            Parlons de votre projet
                        </h2>
                        {/* <TbPhoneRinging className="animate-bounce" /> */}
                        <CustomerForm />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
