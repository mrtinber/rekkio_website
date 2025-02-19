import Image from "next/image";

export const Banner = () => {
    return (
        <div className="relative w-full h-[100vh]">
            <Image
                src="/banner.jpg"
                alt="Photo de profil"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 z-0"
            />
            <div className="absolute right-0 top-1/2 -translate-x-1 -translate-y-1/3 z-10 flex gap-12 flex-col text-white p-8 w-2/5 items-end">
                <div className="flex flex-col gap-4 items-end">
                    <h1 className="font-extrabold text-8xl">Rekkio</h1>
                    <p className="text-right">
                        REKKIO, c’est la contraction du japonais “TEKIO”, qui
                        signifie “adaptation” et du mot “Record” qui signifie
                        “enregistrer”. L’objectif de REKKIO est de mettre en place
                        des ateliers de production musicale au sein d’entreprises ou
                        de structures sociales auprès de groupes souhaitant explorer
                        la création musicale.
                    </p>
                </div>
                <button className="text-black uppercase font-semibold relative bg-white py-2 px-8 hover:bg-transparent hover:text-white transition-all">
                    Travailler avec moi
                </button>
            </div>
        </div>
    );
};
