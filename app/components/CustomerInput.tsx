import React from "react";

interface CustomerInputProps {
    name: string;
    type: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required: boolean;
    label: string;
}

export const CustomerInput = ({
    name,
    type,
    onChange,
    required,
    label,
}: CustomerInputProps) => {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                id={name}
                name={name}
                required={required}
                onChange={onChange}
                className="text-black px-2 p-1 rounded-md md:w-64"
            />
        </div>
    );
};
