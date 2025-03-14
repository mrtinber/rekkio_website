"use client";

import React, { useEffect, useRef, useState } from "react";
import { CustomerInput } from "./CustomerInput";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Button } from "./Button";

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
            } catch (error) {
                console.error("FAILED...", error);
                alert("Erreur lors de l'envoi du message.");
            }
        }
    };

    return (
        <form
            ref={form}
            onSubmit={recordCustomer}
            className="flex flex-col gap-4"
        >
            <div className="flex flex-col gap-2">
                <p>Vous êtes: </p>
                <div className="flex gap-4">
                    <button
                        type="button"
                        className={`py-2 px-8 rounded-2xl ${
                            customerType === "particulier"
                                ? "bg-white text-[#5F7B93]"
                                : "bg-transparent border-white border-2 text-white"
                        }`}
                        onClick={() => setCustomerType("particulier")}
                    >
                        un particulier
                    </button>
                    <button
                        type="button"
                        className={`py-2 px-8 rounded-2xl ${
                            customerType === "structure"
                                ? "bg-white text-[#5F7B93]"
                                : "bg-transparent border-white border-2 text-white"
                        }`}
                        onClick={() => setCustomerType("structure")}
                    >
                        une structure
                    </button>
                </div>
            </div>

            <motion.div
                key={customerType} // Change de clé à chaque changement d'état, forçant une réanimation
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-2"
            >
                {customerType === "particulier" ? (
                    <>
                        <div className="flex flex-col md:flex-row gap-2 md:gap-12">
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
                        <div className="flex flex-col md:flex-row gap-2 md:gap-12">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="age">Âge: </label>
                                <select
                                    name="age"
                                    id="age"
                                    className="text-black px-4 p-2 rounded-full md:w-64 appearance-none"
                                    defaultValue=""
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled hidden></option>
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
                        <div className="flex flex-col md:flex-row gap-12">
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
                <div className="flex flex-col md:flex-row gap-2 md:gap-12">
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
                <div className="flex flex-col gap-2">
                    <label htmlFor="message">Message :</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Ecrivez vos demandes particulières ici."
                        onChange={handleChange}
                        className="text-black px-4 p-2 rounded-2xl md:w-64"
                    />
                </div>
            </motion.div>
            <Button />
        </form>
    );
};
