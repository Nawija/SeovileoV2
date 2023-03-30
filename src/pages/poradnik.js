import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

import { Link } from "gatsby";

const Poradnik = () => (
    <Layout>
        <section className="text-gray-600 body-font max-w-screen-2xl mx-auto">
            <h2 className=" capitalize font-extrabold text-emerald-600 text-center text-sm md:text-base ">
                Strony przyjazne dla SEO
            </h2>
            <h1 className="uppercase text-gray-700 font-semibold text-center text-2xl ">
                zamówienie strony internetowej
            </h1>
            <div className="container px-5 mt-8 pb-24 mx-auto flex flex-wrap">
                <div className="flex flex-wrap w-full">
                    <div className="md:w-1/2 md:pr-10 md:py-2">
                        <div className="flex relative pb-12">
                            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                            </div>
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-tl from-red-500 to-red-700 shadow-lg shadow-red-500 inline-flex items-center justify-center text-white relative z-10">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                </svg>
                            </div>
                            <div className="flex-grow pl-4">
                                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                                    KROK 1
                                </h2>
                                <h3 className="text-gray-900 capitalize font-medium">
                                    Określ swoje cele:
                                </h3>
                                <p className="leading-relaxed">
                                    Przygotuj się do rozmowy, określając, co
                                    chcesz osiągnąć za pomocą swojej strony
                                    internetowej. Czy chcesz sprzedawać swoje
                                    produkty lub usługi, czy może szukasz
                                    sposobu na zwiększenie zasięgu swojej marki?
                                    Określenie celów pomoże Ci wybrać
                                    odpowiednią ofertę.
                                </p>
                            </div>
                        </div>
                        <div className="flex relative pb-12">
                            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                            </div>
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-tl from-red-500 to-red-700 shadow-lg shadow-red-500 inline-flex items-center justify-center text-white relative z-10">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                            </div>
                            <div className="flex-grow pl-4">
                                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                                    KROK 2
                                </h2>
                                <h3 className="text-gray-900 capitalize font-medium">
                                    Ustal wymagania:
                                </h3>
                                <p className="leading-relaxed">
                                    Określ wymagania dotyczące Twojej strony
                                    internetowej. Obejmują one m.in.
                                    funkcjonalności, wygląd, układ i treści
                                </p>
                            </div>
                        </div>
                        <div className="flex relative pb-12">
                            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                            </div>
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-tl from-red-500 to-red-700 shadow-lg shadow-red-500 inline-flex items-center justify-center text-white relative z-10">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <circle cx="12" cy="5" r="3"></circle>
                                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                                </svg>
                            </div>
                            <div className="flex-grow pl-4">
                                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                                    KROK 3
                                </h2>
                                <h3 className="text-gray-900 capitalize font-medium">
                                    Zatwierdź Projekt:{" "}
                                </h3>
                                <p className="leading-relaxed">
                                    Na podstawie ustalonych wymagań stworzę{" "}
                                    <strong className="font-medium">
                                        projekt strony internetowej
                                    </strong>
                                    , Upewnij się, że jesteś zadowolony z
                                    projektu i zgłoś wszelkie uwagi
                                </p>
                            </div>
                        </div>
                        <div className="flex relative pb-12">
                            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                            </div>
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-tl from-red-500 to-red-700 shadow-lg shadow-red-500 inline-flex items-center justify-center text-white relative z-10">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div className="flex-grow pl-4">
                                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                                    KROK 4
                                </h2>
                                <h3 className="text-gray-900 capitalize font-medium">
                                    Wdrożenie:
                                </h3>
                                <p className="leading-relaxed">
                                    Kiedy projekt strony internetowej jest
                                    zaakceptowany, przystępujemy do budowania
                                </p>
                            </div>
                        </div>
                        <div className="flex relative">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-tl from-green-500 to-green-700 shadow-lg shadow-green-500 inline-flex items-center justify-center text-white relative z-10">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                            </div>
                            <div className="flex-grow pl-4">
                                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                                    FINISH
                                </h2>
                                <h3 className="text-gray-900 capitalize font-medium">
                                    Ciesz się stroną internetową:
                                </h3>
                                <p className="leading-relaxed">
                                    Po wdrożeniu Twojej strony internetowej
                                    upewnij się, że wszystkie elementy strony
                                    działają poprawnie, a treści są poprawnie
                                    sformatowane, ciesz się jej efektami,
                                    Pozyskuj nowych klientów
                                </p>
                            </div>
                        </div>
                    </div>
                    <StaticImage
                        loading="eager"
                        className="md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
                        src="https://images.unsplash.com/photo-1516383607781-913a19294fd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80"
                        alt="step"
                    />
                </div>
            </div>
        </section>

        <div className="w-full flex items-center justify-center">
            <Link
                to="/"
                className="py-3 mx-auto text-gray-100 m-0 px-5 bg-gradient-to-tl from-red-500 to-red-700 rounded-lg shadow-lg shadow-red-500"
            >
                Strona Główna
            </Link>
        </div>
    </Layout>
);

export const Head = () => <Seo title="Poradnik" />;

export default Poradnik;
