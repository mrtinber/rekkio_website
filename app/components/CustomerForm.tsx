"use client";

import React, { useEffect, useState } from "react";
import { CustomerInput } from "./CustomerInput";

type CustomerData = {
    type: CustomerType;
    firstName: string;
    lastName: string;
    companyName: string;
    age: number;
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
        age: 0,
        city: "",
        email: "",
        phoneNumber: 0,
        message: "",
    });

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    useEffect(() => {
        setFormData((prev) => ({
            ...formData,
            type: customerType,
        }));
    }, [customerType]);

    const recordCustomer = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Enregistrement réussi.", formData);
    };

    return (
        <form onSubmit={recordCustomer} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <p>Vous êtes: </p>
                <div className="flex gap-4">
                    <button
                        type="button"
                        className={`py-2 px-8 rounded-md ${
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
                        className={`py-2 px-8 rounded-md ${
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

            {customerType === "particulier" ? (
                <>
                    <div className="flex gap-12">
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
                    <div className="flex gap-12">
                        <CustomerInput
                            name="age"
                            type="number"
                            onChange={handleChange}
                            label="Âge :"
                            required
                        />
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
                    <div className="flex gap-12">
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
            <div className="flex gap-12">
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
                    className="text-black px-2 p-1 rounded-md w-64"
                />
            </div>
            <button
                type="submit"
                className="text-black mt-4 flex-none self-start uppercase font-semibold bg-white py-2 px-8 hover:bg-transparent hover:text-white transition-all duration-300"
            >
                Soumettre le formulaire
            </button>
        </form>
    );
};
