import Image from "next/image";
import { motion } from "framer-motion";

export const Banner = () => {
    return (
        <div className="relative w-full h-[100vh]">
            <Image
                src="/banner.jpg"
                alt="Photo de profil"
                fill
                className="absolute inset-0 z-0 object-cover"
            />
            <div className="absolute right-0 top-1/2 -translate-x-1 -translate-y-1/3 z-10 flex gap-12 flex-col text-white p-8 w-2/5 items-end">
                <div className="flex flex-col gap-4 items-end">
                    <motion.h1
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1 }}
                        animate={{ x: 0 }}
                        transition={{ ease: "easeOut", duration: 1.2 }}
                        className="font-extrabold text-8xl"
                    >
                        Rekkio
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1 }}
                        animate={{ x: 0 }}
                        transition={{ ease: "easeOut", duration: 1.2, delay: 0.3 }}
                        className="text-right"
                    >
                        REKKIO, c’est la contraction du japonais “TEKIO”, qui
                        signifie “adaptation” et du mot “Record” qui signifie
                        “enregistrer”. L’objectif de REKKIO est de mettre en
                        place des ateliers de production musicale au sein
                        d’entreprises ou de structures sociales auprès de
                        groupes souhaitant explorer la création musicale.
                    </motion.p>
                </div>
                <motion.button
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 1.8, delay: 0.6 }}
                    className="text-black uppercase font-semibold relative bg-white py-2 px-8 hover:bg-transparent hover:text-white transition-all duration-300"
                >
                    Travailler avec moi
                </motion.button>
            </div>
        </div>
    );
};
