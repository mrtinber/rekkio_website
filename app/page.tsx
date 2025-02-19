import Image from "next/image";
import React from "react";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { ProjectStepCard } from "./components/ProjectStepCard";

export default function Home() {
    const projectSteps = [
        {
            title: "Objectifs",
            content:
                "Nous définissons ensemble lors d’un entretien téléphonique ou d’un rendez-vous en présentiel un projet sur la base des objectifs de votre structure afin de déterminer le nombre d’ateliers et leur durée. J’établis un devis que je vous remet sous 48 heures maximum après l’échange.",
        },
        {
            title: "Programmation des ateliers",
            content:
                "Après validation du devis, nous programmons la fréquence des ateliers et la date du premier atelier.",
        },
        {
            title: "Mise en place",
            content:
                "J’interviens au sein de la structure sur les ateliers en présentiel. Il est possible de réajuster la fréquence et la durée des ateliers en fonction du collectif ou du groupe accompagné.",
        },
        {
            title: "Fin des ateliers et remise de la production au groupe",
            content:
                "Les ateliers se clôturent avec la production d’un morceau de musique. Il est possible de programmer un temps de restitution après les ateliers afin de rendre compte de l’expérience vécue et présenter le résultat.",
        },
    ];

    const workshopSteps = [
        {
            title: "Première échéance (Session d’introduction)",
            content:
                "Le premier atelier consiste en la présentation du matériel et du logiciel dans ses grandes lignes. Permettre au groupe de comprendre comment est produit un morceau de musique et avec quel matériel. L’atelier se basera aussi sur un partage d’expérience avec le collectif pour évaluer le niveau du groupe. Si le groupe n’est pas initié du tout aux suites logiciels ou aux théories musicales générales, l’idée sera de prendre un projet type.",
        },
        {
            title: "Deuxième échéance (Début de la composition)",
            content:
                "L’atelier débute avec la présentation globale du logiciel. Cet atelier visera a définir avec le groupe les personnes qui souhaitent travailler sur les différentes parties du morceau de musique (la mélodie, la partie rythmique, etc).",
        },
        {
            title: "Troisième échéance (Fin de la composition)",
            content:
                "Réécoute du projet dans son ensemble, prise en note des idées de chacun sur ce qui fonctionne ou ne fonctionne pas, sur les nouvelles idées potentielles. Structuration du morceau dans son ensemble. Cet atelier vise à obtenir une première version finalisée du morceau de musique.",
        },
        {
            title: "Quatrième échéance (Fin de l’arrangement / mixage / présentation brève du mastering)",
            content:
                "Le quatrième atelier vise à terminer l’arrangement (structure finale du morceau). Une fois une version finalisée validée par le groupe intégralement, début de l’étape de mixage et explications autour de ce concept.",
        },
        {
            title: "Possibilité d’un atelier supplémentaire ou d’un rendez-vous de rendu final",
            content:
                "Il se peut qu’un dernier atelier soit nécessaire a la finalisation du projet si cette option a été validé lors de la mise en place des objectifs avec la structure. Quoi qu’il arrive, le groupe repartira avec une version finalisée d’un morceau de musique que je peux finaliser seul au besoin. En accord avec chaque membre du groupe, le morceau est éventuellement diffusé sur Youtube ou en privé au sein de la structure. Je peux animer ce moment de rendu final.",
        },
    ];

    return (
        <div className="min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
            <Banner />
            <section className="relative w-full py-16 bg-[#0F1921]">
                <div className="relative z-10 flex gap-8 items-center px-16">
                    <Image
                        src="/profile.jpg"
                        alt="Photo de profil"
                        width={350}
                        height={150}
                    />
                    <div>
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
            <section className="relative w-full py-16 px-16 bg-[#5F7B93] flex flex-col gap-8">
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
                        />
                    ))}
                </div>
            </section>
            <section className="relative w-full py-16 px-16 bg-[#0F1921] flex flex-col gap-8">
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
                        />
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
}
