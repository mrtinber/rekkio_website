"use client";

import React, { useEffect, useRef, useState } from "react";
import { CustomerInput } from "./CustomerInput";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { SubmitButton } from "./SubmitButton";

type CustomerData = {
    type: CustomerType;
    firstName: string;
    lastName: string;
    companyName: string;
    age: string;
    city: string;
    email: string;
    phoneNumber?: number;
    message?: string;
};

type CustomerType = "particulier" | "structure";

export const CustomerForm = () => {
    const [customerType, setCustomerType] =
        useState<CustomerType>("particulier");
    const [formData, setFormData] = useState<CustomerData>({
        type: customerType,
        lastName: "",
        firstName: "",
        companyName: "",
        age: "",
        city: "",
        email: "",
        phoneNumber: 0,
        message: "",
    });
    const form = useRef<HTMLFormElement | null>(null);
    const [formSuccess, setFormSuccess] = useState(false);

    const handleChange = (
        event: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    useEffect(() => {
        setFormData((prev) => ({
            ...prev,
            type: customerType,
        }));
    }, [customerType]);

    const recordCustomer = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Enregistrement réussi.", formData);

        if (form.current) {
            try {
                await emailjs.sendForm(
                    "service_0kcylir",
                    "template_z38n158",
                    form.current,
                    {
                        publicKey: "-JT-yKMU32QLJoq9a",
                    }
                );

                form.current?.reset();
                setFormData({
                    type: customerType,
                    lastName: "",
                    firstName: "",
                    companyName: "",
                    age: "",
                    city: "",
                    email: "",
                    phoneNumber: 0,
                    message: "",
                });

                setFormSuccess(true);
            } catch (error) {
                console.error("FAILED...", error);
                alert("Erreur lors de l'envoi du message.");
            }
        }
    };

    return (
        <div className="flex flex-col-reverse xl:flex-row gap-8 backdrop-blur-lg bg-white/5 rounded-3xl shadow-xl p-8">
            <form
                ref={form}
                onSubmit={recordCustomer}
                className="flex flex-col gap-4 "
            >
                <div className="flex flex-col gap-2">
                    <p>Vous êtes: </p>
                    <div className="flex gap-4 text-sm sm:text-base m-auto sm:m-0">
                        <button
                            type="button"
                            aria-pressed={
                                customerType === "particulier"
                                    ? "true"
                                    : "false"
                            }
                            className={`py-2 px-4 md:px-8 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#FA852D] focus:ring-opacity-50 ${
                                customerType === "particulier"
                                    ? "bg-white text-[#0F1921]"
                                    : "bg-transparent border-white border-2 text-white"
                            }`}
                            onClick={() => setCustomerType("particulier")}
                        >
                            un particulier
                        </button>
                        <button
                            type="button"
                            aria-pressed={
                                customerType === "structure" ? "true" : "false"
                            }
                            className={`py-2 px-2 md:px-8 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#FA852D] focus:ring-opacity-50 ${
                                customerType === "structure"
                                    ? "bg-white text-[#0F1921]"
                                    : "bg-transparent border-white border-2 text-white"
                            }`}
                            onClick={() => setCustomerType("structure")}
                        >
                            une structure
                        </button>
                    </div>
                </div>

                <motion.div
                    key={customerType}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col gap-2"
                >
                    {customerType === "particulier" ? (
                        <>
                            <div className="flex flex-col lg:flex-row gap-2 lg:gap-12">
                                <CustomerInput
                                    name="lastName"
                                    type="text"
                                    onChange={handleChange}
                                    label="Nom :"
                                    required
                                />
                                <CustomerInput
                                    name="firstName"
                                    type="text"
                                    onChange={handleChange}
                                    label="Prénom :"
                                    required
                                />
                            </div>
                            <div className="flex flex-col lg:flex-row gap-2 lg:gap-12">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="age">Âge: </label>
                                    <select
                                        name="age"
                                        id="age"
                                        className="text-black px-4 p-2 rounded-full lg:w-64 appearance-none"
                                        defaultValue=""
                                        onChange={handleChange}
                                        required
                                    >
                                        <option
                                            value=""
                                            disabled
                                            hidden
                                        ></option>
                                        <option value="minor">
                                            Moins de 18 ans
                                        </option>
                                        <option value="youngAdult">
                                            18-30 ans
                                        </option>
                                        <option value="olderAdult">
                                            30-45 ans
                                        </option>
                                        <option value="elder">
                                            Plus de 45 ans
                                        </option>
                                    </select>
                                </div>
                                <CustomerInput
                                    name="city"
                                    type="text"
                                    onChange={handleChange}
                                    label="Ville de résidence :"
                                    required
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="flex flex-col lg:flex-row gap-2 lg:gap-12">
                                <CustomerInput
                                    name="companyName"
                                    type="text"
                                    onChange={handleChange}
                                    label="Nom de la structure :"
                                    required
                                />
                                <CustomerInput
                                    name="city"
                                    type="text"
                                    onChange={handleChange}
                                    label="Ville :"
                                    required
                                />
                            </div>
                        </>
                    )}
                    <div className="flex flex-col lg:flex-row gap-2 lg:gap-12">
                        <CustomerInput
                            name="email"
                            type="email"
                            onChange={handleChange}
                            label="Adresse e-mail :"
                            required
                        />
                        <CustomerInput
                            name="phoneNumber"
                            type="tel"
                            onChange={handleChange}
                            label="Numéro de téléphone :"
                            required={false}
                        />
                    </div>
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-stretch lg:items-baseline">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="message">Message :</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Ecrivez vos demandes particulières ici."
                                onChange={handleChange}
                                className="text-black px-4 p-2 rounded-2xl lg:w-64"
                            />
                        </div>
                        <SubmitButton>
                            <span className="hidden sm:inline">
                                Soumettre le formulaire
                            </span>
                            <span className="inline sm:hidden">Envoyer</span>
                        </SubmitButton>
                    </div>
                </motion.div>
            </form>
            <div className="flex flex-col gap-4 md:gap-2 justify-center">
                {customerType === "particulier" ? (
                    <>
                        <h3 className="text-2xl font-semibold">
                            Les ateliers individuels
                        </h3>
                        <p className="text-left md:text-justify font-light">
                            Les ateliers individuels sont facturés{" "}
                            <span className="font-bold">35€/heure</span> par
                            atelier sur la base d’ateliers de 2 heures. <br />
                            En fonction du lieu de déplacement ce tarif peut
                            être amené à être augmenté ou réduit.
                        </p>
                        <div className="flex w-full gap-2 items-end justify-end">
                            <span className="text-5xl font-bold">35€/h.</span>
                        </div>
                    </>
                ) : (
                    <>
                        <h3 className="text-2xl font-semibold">
                            Les ateliers collectifs
                        </h3>
                        <p className="text-left md:text-justify font-light">
                            Les ateliers collectifs sont facturés après
                            évaluation du projet avec la structure, en fonction
                            des objectifs.
                        </p>
                        <div className="flex w-full gap-2 items-end justify-end">
                            <p className="italic text-sm">Sur devis.</p>
                            <span className="text-5xl font-bold">--€/h.</span>
                        </div>
                    </>
                )}
            </div>
            {formSuccess && (
                <p className="absolute italic text-right [#FA852D] right-8 bottom-8">
                    Le formulaire a bien été envoyé, merci !
                </p>
            )}
        </div>
    );
};
