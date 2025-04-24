import { getLastUpdated } from "@/lib/getLastUpdate";
import React from "react";
import { ExitBtn } from "../components/ExitBtn";

export default function CookiesPage() {
    const lastUpdated = getLastUpdated("app/page.tsx");

    return (
        <main className="min-h-screen relative w-full flex flex-col gap-24 lg:gap-32 bg-[#0F1921] py-8">
            <section className="flex flex-col gap-6 w-5/6 lg:w-3/4 m-auto backdrop-blur-lg bg-white/5 rounded-3xl shadow-xl px-6 md:px-8 py-6">
                <ExitBtn />
                <h1 className="text-2xl font-extrabold">
                    Politique de cookies
                </h1>
                <p className="italic">Dernière mise à jour du site : {lastUpdated}</p>
                <p>
                    Le site Rekkio Musique utilise uniquement des cookies
                    essentiels et fonctionnels afin d’assurer le bon
                    fonctionnement du site et d’améliorer votre expérience
                    utilisateur. Aucun cookie publicitaire ou de suivi n’est
                    utilisé.
                </p>
                <h2 className="text-xl font-bold">
                    1. Qu’est-ce qu’un cookie ?
                </h2>
                <p>
                    Un cookie est un petit fichier texte déposé sur votre
                    appareil (ordinateur, mobile, tablette…) lorsque vous
                    consultez un site internet. Il permet au site de se souvenir
                    de certaines informations pour faciliter votre navigation ou
                    améliorer ses performances.
                </p>
                <h2 className="text-xl font-bold">
                    2. Quels cookies utilisons-nous ?
                </h2>
                <div className="pl-8 flex flex-col gap-8">
                    <div>
                        <h3 className="font-bold">
                            a) Cookies strictement nécessaires
                        </h3>
                        <p>
                            <span className="italic">cookieConsent</span> :Enregistre votre choix d’accepter ou
                            de refuser les cookies lors de votre première
                            visite. Ce cookie est indispensable pour le bon
                            fonctionnement du bandeau de consentement.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold">b) Cookies fonctionnels</h3>{" "}
                        <p>
                            <span className="italic">adobeCleanFontAdded</span> : Permet d’optimiser le
                            chargement des polices Adobe en évitant de les
                            recharger à chaque visite.
                        </p>
                        <p>
                            <span className="italic">formAutoFill</span> (potentiellement activé) : Permet de
                            mémoriser les champs que vous avez remplis dans un
                            formulaire (par exemple : prénom, e-mail) afin de
                            les pré-remplir si vous actualisez la page par inadvertance. Ces informations ne sont ni partagées, ni
                            utilisées à d&apos;autres fins.
                        </p>
                    </div>
                </div>
                <h2 className="text-xl font-bold">3. Consentement</h2>
                <p>
                    Lors de votre première visite, un bandeau vous permet de
                    choisir si vous acceptez ou refusez les cookies non
                    essentiels. Vous pouvez modifier votre choix à tout moment
                    via le lien prévu à cet effet en bas de page.
                </p>
                <h2 className="text-xl font-bold">4. Durée de conservation</h2>
                <p>
                    Les cookies sont conservés pour une durée maximale de 13
                    mois à compter de leur dépôt. Les données éventuellement
                    enregistrées localement (dans le navigateur) sont conservées
                    jusqu’à suppression par l’utilisateur.
                </p>
                <h2 className="text-xl font-bold">5. Gérer les cookies</h2>
                <p>
                    Vous pouvez gérer ou supprimer les cookies depuis les
                    paramètres de votre navigateur à tout moment. Voici quelques
                    liens utiles selon votre navigateur :
                </p>
                <ul className="list-disc list-inside pl-8">
                    <li>
                        Google Chrome:{" "}
                        <a
                            href="https://support.google.com/chrome/answer/95647"
                            className="underline hover:no-underline"
                        >
                            https://support.google.com/chrome/answer/95647
                        </a>
                    </li>
                    <li>
                        Mozilla Firefox:{" "}
                        <a
                            href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies"
                            className="underline hover:no-underline"
                        >
                            https://support.mozilla.org/fr/kb/activer-desactiver-cookies
                        </a>
                    </li>
                    <li>
                        Safari:{" "}
                        <a
                            href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac"
                            className="underline hover:no-underline"
                        >
                            https://support.apple.com/fr-fr/guide/safari/sfri11471/mac
                        </a>
                    </li>
                    <li>
                        Microsoft Edge:{" "}
                        <a
                            href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge"
                            className="underline hover:no-underline"
                        >
                            https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge
                        </a>
                    </li>
                </ul>
                <h2 className="text-xl font-bold">6. Contact</h2>
                <p>
                    Pour toute question concernant notre politique de cookies,
                    vous pouvez nous contacter à l’adresse suivante:{" "}
                    <a
                        href="mailto:rekkiomusique@gmail.com"
                        className="underline hover:no-underline"
                    >
                        rekkiomusique@gmail.com
                    </a>
                </p>
            </section>
        </main>
    );
}
