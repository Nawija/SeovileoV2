import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const HeroComponents = () => (
    <section className="text-gray-700 px-3 md:px-12 lg:px-20 pb-20 lg:pb-36 pt-1 lg:pt-20 relative w-full flex items-center overflow-hidden justify-around flex-col md:flex-row mx-auto max-w-[1700px]">
        <div className="bg-[#ff003c] -translate-x-1/2 md:hidden top-[12%] left-0 h-20 w-20 absolute rounded-full blur-3xl" />
        <div className="bg-[#00d5ff] translate-x-1/2 md:hidden top-[22%] right-0 h-20 w-20 absolute rounded-full blur-3xl" />
        <div className="z-10 mb-6 md:mb-0 w-full md:w-3/4 lg:w-1/2">
            <div className="flex flex-col items-center md:items-start text-center md:text-start justify-center text-base md:py-4 mt-1">
                <h2 className=" changeColor capitalize font-extrabold text-green-400 text-xl md:ml-1 xl:text-3xl tracking-wider">
                    Freelancer
                </h2>
                <h3 className="capitalize lg:drop-shadow text-3xl lg:text-5xl xl:text-6xl lg:py-2 font-bold">
                    Stwórz z nami swoja wizytówkę
                </h3>
                <h1 className="capitalize text-base xl:text-xl mt-2">
                    Strona Internetowa za darmo !!
                </h1>
                <p className="text-base xl:text-xl md:w-[90%]">
                    Tak mozna powiedziec porównujac jakość w stosunku do ceny vs
                    konkurencja, Nasze ceny są przystępne dla każdego i
                    dopasowujemy je do indywidualnych potrzeb każdego klienta.
                    Skontaktuj się z nami, aby uzyskać darmową wycenę i
                    rozpocząć współpracę już dziś!
                </p>
                <div className="flex flex-col items-start justify-start mt-3">
                    <div className="flex md:flex-col lg:flex-row items-start justify-start">
                        <div
                            data-sal="zoom-out"
                            data-sal-delay="0"
                            data-sal-duration="600"
                            data-sal-easing="ease"
                            className=" flex items-start justify-start mt-1"
                        >
                            <StaticImage
                                loading="eager"
                                height={30}
                                width={30}
                                src="../../assets/star.png"
                                placeholder="blurred"
                            />
                            <p className="  capitalize text-base md:font-medium xl:text-xl ml-1 font-semibold">
                                50% Szybsza
                            </p>
                        </div>
                        <div
                            data-sal="zoom-out"
                            data-sal-delay="200"
                            data-sal-duration="600"
                            data-sal-easing="ease"
                            className=" flex items-start justify-start mt-1 ml-1 font-semibold sm:ml-3"
                        >
                            <StaticImage
                                height={30}
                                width={30}
                                src="../../assets/star.png"
                                placeholder="blurred"
                            />
                            <p className="  capitalize text-base md:font-medium xl:text-xl ml-1 font-semibold">
                                2x SEO Boost
                            </p>
                        </div>
                    </div>
                    <div className="flex md:flex-col lg:flex-row items-start justify-start">
                        <div
                            data-sal="zoom-out"
                            data-sal-delay="400"
                            data-sal-duration="600"
                            data-sal-easing="ease"
                            className=" flex items-start justify-start mt-1"
                        >
                            <StaticImage
                                height={30}
                                width={30}
                                src="../../assets/star.png"
                                placeholder="blurred"
                            />
                            <p className="  capitalize text-base md:font-medium xl:text-xl ml-1 font-semibold">
                                20x Lżejsza
                            </p>
                        </div>
                        <div
                            data-sal="zoom-out"
                            data-sal-delay="600"
                            data-sal-duration="600"
                            data-sal-easing="ease"
                            className=" flex items-start justify-start mt-1 ml-3 font-semibold sm:ml-3"
                        >
                            <StaticImage
                                height={30}
                                width={30}
                                src="../../assets/star.png"
                                placeholder="blurred"
                            />
                            <p className="  capitalize text-base md:font-medium xl:text-xl ml-1">
                                Od 300zł!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="my-12 text-gray-700">
                    <Link
                        to="/usługi"
                        className="bg-gradient-to-tl from-green-300 to-green-600 lg:text-lg text-base text-gray-100 shadow-xl shadow-green-500 transition-all duration-300 py-3 px-6 -tracking-wide rounded-lg"
                    >
                        Oferta
                    </Link>
                    <Link
                        to="/portfolio"
                        className="bg-gradient-to-tl from-orange-300 to-orange-600 text-slate-100 py-3 px-6 -tracking-wide rounded-lg shadow-xl shadow-orange-500 transition-all duration-300 lg:text-lg text-base md:ml-6 lg:ml-8 ml-4"
                    >
                        Portfolio
                    </Link>
                </div>
            </div>
        </div>
        <div className="absolute sm:scale-110 md:scale-100 bottom-0  w-full md:top-0 md:w-3/4 lg:w-[60%] xl:w-[50%] h-[80%] md:h-full md:right-0">
            <StaticImage
                className="h-full w-auto"
                placeholder="blurred"
                src="../../assets/blurCircle.png"
            />
        </div>
        <div className="relative">
            <div className="text-gray-500 font-medium uppercase">
                <div
                    data-sal="slide-left"
                    data-sal-delay="0"
                    data-sal-duration="700"
                    data-sal-easing="ease"
                    className="realtive card1 top-[20%] left-[5%] bg-white/30 backdrop-blur-2xl rounded-2xl w-60 h-32 lg:w-72 lg:h-44"
                >
                    <div className="flex items-center justify-between p-5">
                        <p className="">Logo</p>
                        <StaticImage
                            height={30}
                            width={30}
                            src="../../assets/premium.png"
                        />
                    </div>
                    <p className="p-4 lg:py-12 ">Zadowolenie klientów</p>
                </div>
                <div className="left-0 h-20 w-20 scale-90 absolute rounded-full bg-gradient-to-bl from-red-500 to-red-300 z-10 border-2 border-red-300 shadow-lg shadow-red-500/70">
                    <div className="text-center w-full h-full flex flex-col items-center justify-center">
                        <p className="text-sm text-yellow-50">50%</p>
                        <p className="uppercase text-sm text-yellow-50">
                            szybciej
                        </p>
                    </div>
                </div>
                <div
                    data-sal="slide-right"
                    data-sal-delay="300"
                    data-sal-duration="700"
                    data-sal-easing="ease"
                    className="realtive card2 top-[20%] left-[5%] bg-white/30 backdrop-blur-2xl rounded-2xl w-60 h-32 lg:w-72 lg:h-44 -mt-4 ml-14"
                >
                    <div className="flex items-center justify-between p-5">
                        <p className="">Technologia</p>
                        <StaticImage
                            height={30}
                            width={30}
                            src="../../assets/premium.png"
                        />
                    </div>
                    <p className="p-4 lg:py-12 ">Zadowolenie klientów</p>
                </div>
                <div
                    data-sal="slide-left"
                    data-sal-delay="600"
                    data-sal-duration="700"
                    data-sal-easing="ease"
                    className="realtive card3 top-[20%] left-[5%] bg-white/30 backdrop-blur-2xl rounded-2xl w-60 h-32 lg:w-72 lg:h-44 -mt-4 ml-2"
                >
                    <div className="flex items-center justify-between p-5">
                        <p className="">Logo</p>
                        <StaticImage
                            height={30}
                            width={30}
                            src="../../assets/premium.png"
                        />
                    </div>
                    <p className="p-4 lg:py-12  w-max">Zadowolenie klientów</p>
                </div>
                <div className="absolute md:top-[60%] top-full left-0 md:-left-[50%] lg:-left-[30%] xl:-left-[60%] shadow-2xl shadow-blue-400/80 bg-white text-gray-500 backdrop-blur-2xl rounded-2xl w-44 h-44 -mt-4 ml-2">
                    <div className="flex flex-col items-center justify-between p-5">
                        <div className="w-full h-3 bg-gradient-to-l from-[#fc8383] to-[#f32121] relative overflow-hidden rounded-3xl">
                            <div className="absolute top-0 left-1/4 w-1/4 h-full bg-gradient-to-l from-[#f8d04c] to-[#f8e44c]" />
                            <div className="absolute top-0 left-2/4 w-1/5 h-full bg-gradient-to-l from-[#4cf888] to-[#4cf869]" />
                            <div className="absolute top-0 left-4/5 w-2/6 h-full bg-gradient-to-l from-[#4cd6f8] to-[#4c9ff8]" />
                        </div>
                        <div className="flex flex-col items-end justify-center text-sm mt-2 font-bold">
                            <p>HTML5</p>
                            <p>CSS</p>
                            <p>JAVASCRIPT</p>
                            <p>TAILWIND CSS</p>
                            <p>GATSBYJS</p>
                            <p>GitHub ACTIONS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default HeroComponents;
