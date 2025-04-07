import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export const IntroSection = () => {
    return (
        <section className="relative z-10 flex flex-col md:flex-row gap-8 items-center w-5/6 lg:w-3/4 m-auto backdrop-blur-lg bg-white/5 rounded-3xl shadow-xl">
            <Image
                src="/profile.jpg"
                alt="Photo de Quentin Lebreton, fondateur de Rekkio"
                width={350}
                height={350}
                className="rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none w-full md:w-2/5 lg:h-3/4 sm:h-[800px] sm:object-cover"
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
                    Je suis producteur de musiques électroniques depuis 10 ans.
                    Je suis également diplômé d’état d’éducateur spécialisé
                    depuis 2019. Au travers de{" "}
                    <span className="font-semibold">REKKIO</span>, je souhaite
                    permettre à quiconque de pouvoir aborder le processus de
                    création musicale afin de plonger dans la création
                    artistique, d’en percevoir l’essence et de favoriser
                    l’ouverture culturelle.
                </p>
                <p>
                    Ces ateliers ont également pour but de favoriser un travail
                    collaboratif, dans le respect des envies et des influences
                    de chacun. Au travers de la pratique artistique, ces espaces
                    de libertés visent également à offrir à tous la possibilité
                    de s’aborder soi-même d’une autre façon.
                </p>
            </motion.div>
        </section>
    );
};
