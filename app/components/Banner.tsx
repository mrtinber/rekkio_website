import Image from "next/image";
import { motion } from "framer-motion";

export const Banner = () => {
    const scrollToForm = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const anchor = document.getElementById("formSection");
        anchor?.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest",
        });
    };

    return (
        <div className="relative w-full h-[100vh]">
            <Image
                src="/banner.jpg"
                alt=""
                aria-hidden="true"
                fill
                priority
                className="absolute inset-0 z-0 object-cover"
            />
            <div className="absolute right-0 md:right-8 top-1/2 -translate-y-1/3 z-10 flex gap-4 md:gap-8 flex-col text-white p-8 lg:w-2/5 items-end bg-gradient-to-t from-[#0F1921] via-[#0F1921] to-transparent to-[90%] md:bg-transparent">
                <div className="flex flex-col gap-4 items-end">
                    <motion.h1
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1 }}
                        animate={{ x: 0 }}
                        transition={{ ease: "easeOut", duration: 1.2 }}
                        className="font-oi text-5xl md:text-6xl"
                    >
                        Rekkio
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1 }}
                        animate={{ x: 0 }}
                        transition={{
                            ease: "easeOut",
                            duration: 1.2,
                            delay: 0.3,
                        }}
                        className="text-right w-full text-sm md:text-base font-light"
                    >
                        <span className="font-extrabold text-[#FA852D]">
                            REKKIO
                        </span>
                        , c’est la contraction du japonais{" "}
                        <span className="italic font-semibold uppercase">
                            “TEKIō”
                        </span>{" "}
                        (<span className="italic">適応</span>), qui signifie{" "}
                        <span className="italic font-semibold">
                            “ADAPTATION”
                        </span>{" "}
                        et du mot{" "}
                        <span className="italic font-semibold">“RECORD”</span>{" "}
                        qui signifie
                        <span className="italic font-semibold">
                            “ENREGISTRER”
                        </span>
                        . L’objectif de{" "}
                        <span className="font-extrabold text-[#0296C6]">
                            REKKIO
                        </span>{" "}
                        est de mettre en place des ateliers de production
                        musicale au sein d’entreprises ou de structures
                        sociales, auprès de groupes souhaitant explorer la
                        création musicale.
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
                    className="text-black outline outline-4 outline-[#0296C6] border-4 border-[#0F1921] uppercase font-semibold 
                    relative rounded-full text-nowrap bg-white py-2 px-8
                    hover:border-white hover:outline-0 transition-[border] duration-500 ease-in-out 
                    focus:outline-none focus:ring-4 focus:ring-[#FA852D] focus:ring-opacity-50 
                    "
                >
                    Travailler avec moi
                </motion.button>
            </div>
        </div>
    );
};
