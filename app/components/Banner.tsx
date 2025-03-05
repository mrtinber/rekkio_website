import Image from "next/image";
import { motion } from "framer-motion";

export const Banner = () => {
    const scrollToForm = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const anchor = document.getElementById("formSection");
        anchor?.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest",
        });
    };

    return (
        <div className="relative w-full h-[100vh]">
            <Image
                src="/banner.jpg"
                alt="Photo de profil"
                fill
                className="absolute inset-0 z-0 object-cover"
            />
            <div className="absolute right-0 md:right-8 top-1/2 -translate-y-1/3 z-10 flex gap-8 md:gap-12 flex-col text-white p-8 lg:w-2/5 items-end bg-gradient-to-t from-[#0F1921] via-[#0F1921] to-transparent to-[90%] md:bg-transparent">
                <div className="flex flex-col gap-4 items-end">
                    <motion.h1
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1 }}
                        animate={{ x: 0 }}
                        transition={{ ease: "easeOut", duration: 1.2 }}
                        className="font-extrabold text-7xl md:text-8xl"
                    >
                        Rekkio
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1 }}
                        animate={{ x: 0 }}
                        transition={{
                            ease: "easeOut",
                            duration: 1.2,
                            delay: 0.3,
                        }}
                        className="text-right w-full text-sm md:text-base"
                    >
                        REKKIO, c’est la contraction du japonais “TEKIO”, qui
                        signifie “ADAPTATION” et du mot “RECORD” qui signifie
                        “ENREGISTRER”. 
                        L’objectif de REKKIO est de mettre en
                        place des ateliers de production musicale au sein
                        d’entreprises ou de structures sociales, auprès de
                        groupes souhaitant explorer la création musicale.
                    </motion.p>
                </div>
                <motion.button
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        ease: "easeOut",
                        duration: 1.8,
                        delay: 0.6,
                    }}
                    onClick={scrollToForm}
                    className="text-black uppercase font-semibold relative text-nowrap bg-white py-2 px-8 hover:bg-transparent hover:text-white transition-all duration-300"
                >
                    Travailler avec moi
                </motion.button>
            </div>
        </div>
    );
};
