import React, { useEffect, useMemo, useState } from "react";

interface OrganicDotProps {
    fillColor: string;
}

export const OrganicDot = ({ fillColor }: OrganicDotProps) => {
    const [randomRotation, setRandomRotation] = useState<number | null>(null);

    useEffect(() => {
        setRandomRotation(Math.random() * 90 - 45);
    }, []);

    if (randomRotation === null) {
        return null; // Retourne null ou un indicateur de chargement si nécessaire
    }

    return (
        <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 flex-shrink-0"
            style={{ transform: `rotate(${randomRotation}deg)` }}
        >
            <path
                fill={fillColor}
                d="M41,-47.4C54.3,-37.8,67,-25.9,71.4,-11.1C75.8,3.8,72,21.6,63.5,37C55,52.4,41.8,65.4,26.7,68.9C11.7,72.4,-5.2,66.5,-19.4,58.9C-33.5,51.3,-45,41.9,-53.6,29.7C-62.3,17.4,-68.1,2.2,-67.8,-14.2C-67.6,-30.6,-61.4,-48.1,-49.1,-57.9C-36.7,-67.7,-18.4,-69.7,-2.2,-67C13.9,-64.4,27.8,-57,41,-47.4Z"
                transform="translate(100 100)"
            />
        </svg>
    );
};
