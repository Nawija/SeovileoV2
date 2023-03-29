import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { useState } from "react";

import { StaticImage } from "gatsby-plugin-image";

// svg live iconst desktop tablet and phone
import Desktop from "../assets/liveSvg/desktop.svg";
import Tablet from "../assets/liveSvg/tablet.svg";
import Phone from "../assets/liveSvg/phone.svg";

const Portfolio = () => {
    const [showLive, setLive] = useState(false);
    const [hiddenBody, setBody] = useState(false);
    const [showUrlLive, setUrlLive] = useState();
    const web1 = () => {
        setLive(!showLive);
        setBody(!hiddenBody);
        setUrlLive("https://nazoltej.pl/");
    };
    const web2 = () => {
        setLive(!showLive);
        setBody(!hiddenBody);
        setUrlLive("https://nazoltej.pl/");
    };
    const web3 = () => {
        setLive(!showLive);
        setBody(!hiddenBody);
        setUrlLive("https://nawija.github.io/v1/");
    };

    let [changeWidthLive, setChangeWidthLive] = useState("h-full w-full");

    const LiveDesktop = () => {
        setChangeWidthLive("h-full w-full");
    };
    const LiveTablet = () => {
        setChangeWidthLive("h-full max-h-[1024px] w-full max-w-[770px]");
    };
    const LivePhone = () => {
        setChangeWidthLive("h-full max-h-[736px] w-full max-w-[414px]");
    };

    return (
        <Layout>
            <div
                className={
                    hiddenBody
                        ? "h-[91vh] w-full overflow-hidden"
                        : "overflow-hidden w-full z-10"
                }
            >
                <section class="text-gray-600">
                    <div class="px-5 pt-12 mx-auto">
                        <div class="flex flex-wrap -m-4">
                            {/* web-3 */}
                            <div class=" lg:w-1/4 md:w-1/2 p-4 w-full">
                                <div class="block rounded">
                                    {!showLive ? (
                                        <StaticImage
                                            alt="ecommerce"
                                            className="object-cover object-center w-full h-full block"
                                            src="../assets/portfolio/mac1.png"
                                            placeholder="blurred"
                                        />
                                    ) : (
                                        <div className="absolute flex items-center justify-start flex-col bg-black top-0 z-[100] left-0 w-screen h-screen">
                                            <div className="relative top-0 flex py-1 items-center justify-start lg:justify-center w-full bg-gray-200">
                                                <button
                                                    onClick={web1}
                                                    className="absolute top-[45%] right-5 -translate-y-1/2 py-2 text-gray-100 m-0 px-5 bg-gradient-to-tl from-red-500 to-red-700 rounded-lg shadow-lg shadow-red-500 z-50"
                                                >
                                                    Zamknij
                                                </button>
                                                <p className="relative left-0 text-start text-gray-700 text-xs p-2 w-3/4 lg:hidden">
                                                    Zobacz jak strona wyglada na
                                                    innych uzadzeniach zaloguj
                                                    sie na PC
                                                </p>
                                                <button
                                                    onClick={LiveDesktop}
                                                    className="p-4 hidden lg:flex"
                                                >
                                                    <img
                                                        className="h-6 w-auto"
                                                        src={Desktop}
                                                        alt="PC"
                                                    />
                                                </button>
                                                <button
                                                    onClick={LiveTablet}
                                                    className="p-4 hidden lg:flex"
                                                >
                                                    <img
                                                        className="h-6 w-auto"
                                                        src={Tablet}
                                                        alt="PC"
                                                    />
                                                </button>
                                                <button
                                                    onClick={LivePhone}
                                                    className="p-4 hidden lg:flex"
                                                >
                                                    <img
                                                        className="h-6 w-auto"
                                                        src={Phone}
                                                        alt="PC"
                                                    />
                                                </button>
                                            </div>
                                            <iframe
                                                title="web-3"
                                                className={changeWidthLive}
                                                src={showUrlLive}
                                            />
                                        </div>
                                    )}
                                </div>
                                <div class="flex items-center justify-between pr-1 w-full mt-4">
                                    <button
                                        onClick={web1}
                                        className="py-3 text-gray-100 m-0 px-6 bg-gradient-to-tl from-green-500 to-green-700 shadow-green-500 rounded-lg shadow-lg"
                                    >
                                        Zobacz Live
                                    </button>
                                    <p className="text-zinc-400">#web-1</p>
                                </div>
                            </div>
                            {/* web-2 */}
                            <div class=" lg:w-1/4 md:w-1/2 p-4 w-full overflow-hidden">
                                <div class="block rounded">
                                    {!showLive ? (
                                        <StaticImage
                                            alt="ecommerce"
                                            className="object-cover object-center w-full h-full block"
                                            src="../assets/portfolio/mac1.png"
                                            placeholder="blurred"
                                        />
                                    ) : (
                                        <iframe
                                            title="Mac-1"
                                            className={changeWidthLive}
                                            src={showUrlLive}
                                        />
                                    )}
                                </div>
                                <div class="flex items-center justify-between pr-1 w-full mt-4 pb-4">
                                    <button
                                        onClick={web2}
                                        className="py-3 text-gray-100 m-0 px-6 bg-gradient-to-tl from-green-500 to-green-700 shadow-green-500 rounded-lg shadow-lg"
                                    >
                                        Zobacz Live
                                    </button>
                                    <p className="text-gray-700">#mac-2</p>
                                </div>
                            </div>

                            {/* web-3 */}
                            <div class=" lg:w-1/4 md:w-1/2 p-4 w-full">
                                <div class="block rounded">
                                    {!showLive ? (
                                        <StaticImage
                                            alt="ecommerce"
                                            className="object-cover object-center w-full h-full block"
                                            src="../assets/portfolio/mac3.png"
                                            placeholder="blurred"
                                        />
                                    ) : (
                                        <iframe
                                            title="web-3"
                                            className={changeWidthLive}
                                            src={showUrlLive}
                                        />
                                    )}
                                </div>
                                <div class="flex items-center justify-between pr-1 w-full mt-4">
                                    <button
                                        onClick={web3}
                                        className="py-3 text-gray-100 m-0 px-6 bg-gradient-to-tl from-red-500 to-red-700 shadow-red-500 rounded-lg shadow-lg"
                                    >
                                        Zobacz Live
                                    </button>
                                    <p className="text-gray-700">#mac-3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="h-[200vh]"></div>
            </div>
        </Layout>
    );
};

export const Head = () => <Seo title="Portfolio" />;

export default Portfolio;
