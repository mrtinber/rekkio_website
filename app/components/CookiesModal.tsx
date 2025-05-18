import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";

export const CookiesModal = () => {
    const [isCookiesVisible, setIsCookiesVisible] = useState(false);

    useEffect(() => {
        const userChoice = localStorage.getItem("acceptCookies");
        if (userChoice === null) {
            setIsCookiesVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("acceptCookies", "true");
        setIsCookiesVisible(false);
    };

    const handleReject = () => {
        localStorage.setItem("acceptCookies", "false");
        setIsCookiesVisible(false);
    };

    const handleClose = () => {
        setIsCookiesVisible(false);
    };

    if (!isCookiesVisible) return null;

    return (
        <motion.div className="fixed w-full h-screen flex items-center bg-black/50 z-50">
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
                className="relative flex flex-col gap-8 bg-white w-4/5 md:w-2/3 lg:w-1/2 xl:w-1/3 m-auto rounded-lg p-8 md:p-8 text-center md:text-justify"
            >
                <IoCloseSharp
                    className="text-black absolute right-4 top-4 cursor-pointer hover:scale-125 hover:font-bold transition-all duration-300"
                    onClick={handleClose}
                />
                <p className="text-black text-sm md:text-base pt-4">
                    Nous utilisons des cookies pour améliorer votre expérience
                    sur notre site. En poursuivant votre navigation, vous
                    acceptez l&apos;utilisation des cookies.{"  "}
                    <br/><a href="/cookies" className="underline">
                        En savoir plus
                    </a>
                    .
                </p>
                <div className="w-full text-xs md:text-base">
                    <button
                        className="w-1/2 uppercase py-2 px-4 md:px-8 text-black hover:font-bold transition-all duration-300"
                        onClick={handleReject}
                    >
                        Refuser
                    </button>
                    <button
                        className="w-1/2 uppercase py-2 px-4 md:px-8 bg-black hover:font-bold transition-all duration-300"
                        onClick={handleAccept}
                    >
                        Accepter
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
};
