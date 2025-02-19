import Image from "next/image";
import React from "react";

interface SectionProps {
    backgroundImage?: string;
}

export const Section = ({ backgroundImage }: SectionProps) => {
    return (
        <>
            {backgroundImage && (
                <Image
                    src={backgroundImage}
                    alt="Photo de profil"
                    layout="fill"
                    objectFit="cover"
                    className="-z-10"
                />
            )}

            <div className="flex gap-4 items-center flex-col">
                <h1>Rekkio</h1>
                <p>
                    REKKIO, c’est la contraction du japonais “TEKIO”, qui
                    signifie “adaptation” et du mot “Record” qui signifie
                    “enregistrer”. L’objectif de REKKIO est de mettre en place
                    des ateliers de production musicale au sein d’entreprises ou
                    de structures sociales auprès de groupes souhaitant explorer
                    la création musicale.
                </p>
            </div>
        </>
    );
};
