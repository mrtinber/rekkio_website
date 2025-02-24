import Image from "next/image";
import React, { FormEvent } from "react";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { ProjectStepCard } from "./components/ProjectStepCard";
import { projectSteps, workshopSteps } from "./data/steps";
import { CustomerForm } from "./components/CustomerForm";

export default function Home() {
    return (
        <div className="min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
            <Banner />
            <section className="min-h-screen relative w-full py-16 bg-[#0F1921]">
                <div className="relative z-10 flex gap-8 items-center px-16">
                    <Image
                        src="/profile.jpg"
                        alt="Photo de profil"
                        width={350}
                        height={150}
                    />
                    <div className="text-justify">
                        <p>
                            Je suis producteur de musiques électroniques depuis
                            10 ans. Je suis également diplômé d’état d’éducateur
                            spécialisé depuis 2019. Au travers de REKKIO, je
                            souhaite permettre à quiconque de pouvoir aborder le
                            processus de création musicale afin de permettre à
                            autrui de plonger dans la création artistique, d’en
                            percevoir l’essence et de favoriser une ouverture
                            culturelle.
                        </p>
                        <p>
                            Je propose des ensembles d’ateliers qui s’adaptent à
                            chaque structure en fonction de leurs objectifs :
                            découverte culturelle, travail sur la vie
                            collective, sur la mixité sociale, etc.
                        </p>
                        <p>
                            Je propose des ensembles de 4 ateliers qui
                            permettent au groupe de créer un morceau de musique
                            complet et d’explorer chaque aspect du processus de
                            création. Cela avec pour objectif que chacun puisse
                            terminer la suite d’atelier en ayant participé à la
                            création du morceau et du processus de diffusion.
                        </p>
                        <p>
                            Je propose également des ateliers uniques sur la
                            manipulation d’instruments analogiques, dans un
                            cadre occupationnel pour des structures de type
                            établissement d'hébergement pour personnes âgées
                            dépendantes ou des structures pour personnes en
                            situation de handicap.
                        </p>
                    </div>
                </div>
            </section>
            <section className="relative min-h-screen w-full py-16 px-16 bg-[#5F7B93] flex flex-col gap-8">
                <h2 className="text-4xl font-bold">
                    Les étapes de la mise en place du projet
                </h2>
                <div className="flex justify-between gap-16">
                    {projectSteps.map((step, index) => (
                        <ProjectStepCard
                            title={step.title}
                            content={step.content}
                            key={index}
                            stepNumber={index + 1}
                            numberColor="text-[#5f7b93]"
                        />
                    ))}
                </div>
            </section>
            <section className="relative min-h-screen w-full py-16 px-16 bg-[#0F1921] flex flex-col gap-8">
                <h2 className="text-4xl font-bold">
                    Les étapes essentielles des ateliers
                </h2>
                <div className="flex justify-between gap-16">
                    {workshopSteps.map((step, index) => (
                        <ProjectStepCard
                            title={step.title}
                            content={step.content}
                            key={index}
                            stepNumber={index + 1}
                            numberColor="text-[#0f1921]"
                        />
                    ))}
                </div>
            </section>
            <section className="relative min-h-screen w-full py-16 px-16 bg-[#5F7B93] flex flex-col gap-8">
                <h2 className="text-4xl font-bold">Formulaire de contact</h2>
                <CustomerForm />
            </section>
            <Footer />
        </div>
    );
}
