import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { useState } from "react";

import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

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
        setUrlLive("https://nawija.github.io/nazoltej/");
    };
    const web2 = () => {
        setLive(!showLive);
        setBody(!hiddenBody);
        setUrlLive("https://nawija.github.io/nazoltej/");
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
        setChangeWidthLive("h-full max-h-[1024px] p-4 w-full max-w-[770px]");
    };
    const LivePhone = () => {
        setChangeWidthLive("h-full max-h-[736px] p-4 w-full max-w-[414px]");
    };

    return (
        <Layout>
            <div className="top-0 px-2 md:px-4 py-10 md:py-12 flex flex-col items-center justify-center text-center bg-gradient-to-tr from-green-100 to-green-200">
                <h1 className="text-xl capitalize md:text-2xl text-emerald-700 font-bold">
                    Zamówienie strony internetowej
                </h1>
                <h2>
                    Zobacz{" "}
                    <strong className="font-medium">krok po kroku</strong> jak
                    zamówic stronę internetową:
                </h2>
            </div>
            <div
                className={
                    hiddenBody
                        ? "h-[0vh] w-full rounded-xl overflow-hidden"
                        : "overflow-hidden w-full z-10"
                }
            >
                <section class="text-gray-600">
                    <div class="px-5 pt-12 mx-auto">
                        <div class="flex flex-wrap -m-4">
                            {/* web-1 */}
                            <div class=" lg:w-1/4 md:w-1/2 p-4 w-full">
                                <div class="block rounded">
                                    {!showLive ? (
                                        <StaticImage
                                            loading="eager"
                                            alt="ecommerce"
                                            quality={100}
                                            className="object-cover object-center w-full h-full block"
                                            src="../assets/portfolio/mac1.png"
                                            placeholder="blurred"
                                        />
                                    ) : (
                                        <div className="absolute flex items-center justify-start flex-col bg-[#eee] top-0 z-[100] left-0 w-screen h-screen">
                                            <Link
                                                to="/"
                                                className="fixed -z-10 right-6 bottom-2 flex items-center py-3 gap-1.5 text-xl font-semibold text-gray-700"
                                                aria-label="logo"
                                            >
                                                <svg
                                                    className="w-9 h-auto"
                                                    width="207"
                                                    height="208"
                                                    viewBox="0 0 207 208"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <mask
                                                        id="path-1-outside-1_751_40"
                                                        maskUnits="userSpaceOnUse"
                                                        x="-0.269043"
                                                        y="0.00244141"
                                                        width="208"
                                                        height="208"
                                                        fill="black"
                                                    >
                                                        <rect
                                                            fill="white"
                                                            x="-0.269043"
                                                            y="0.00244141"
                                                            width="208"
                                                            height="208"
                                                        />
                                                        <path
                                                            fill-rule="evenodd"
                                                            clip-rule="evenodd"
                                                            d="M166.53 3.32598C151.525 -2.9687 133.967 3.96613 127.313 18.8154L111.746 53.5581L63.9271 26.0144C44.2878 14.702 18.7392 21.1801 6.86278 40.4835C-12.4453 71.866 16.8455 109.706 52.9427 100.013L96.1255 88.4176L68.3671 150.366C59.106 171.034 68.5289 194.892 89.4138 203.653C123.718 218.044 158.925 183.43 144.259 149.731L123.991 103.16C121.411 97.2318 120.897 91.0447 122.046 85.2613C136.279 88.3885 147.306 100.887 146.86 116.466L146.623 124.785C145.762 154.88 186.415 165.98 202.392 140.012C210.983 126.05 206.431 108.097 192.225 99.9146L133.916 66.3284C138.461 62.8556 144.046 60.5266 150.32 59.9162L156.928 59.2733C187.608 56.2885 194.671 15.1312 166.53 3.32598Z"
                                                        />
                                                    </mask>
                                                    <path
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M166.53 3.32598C151.525 -2.9687 133.967 3.96613 127.313 18.8154L111.746 53.5581L63.9271 26.0144C44.2878 14.702 18.7392 21.1801 6.86278 40.4835C-12.4453 71.866 16.8455 109.706 52.9427 100.013L96.1255 88.4176L68.3671 150.366C59.106 171.034 68.5289 194.892 89.4138 203.653C123.718 218.044 158.925 183.43 144.259 149.731L123.991 103.16C121.411 97.2318 120.897 91.0447 122.046 85.2613C136.279 88.3885 147.306 100.887 146.86 116.466L146.623 124.785C145.762 154.88 186.415 165.98 202.392 140.012C210.983 126.05 206.431 108.097 192.225 99.9146L133.916 66.3284C138.461 62.8556 144.046 60.5266 150.32 59.9162L156.928 59.2733C187.608 56.2885 194.671 15.1312 166.53 3.32598Z"
                                                        fill="url(#paint0_linear_751_40)"
                                                    />
                                                    <path
                                                        d="M127.313 18.8154L127.131 18.7336L127.313 18.8154ZM166.53 3.32598L166.453 3.51041L166.53 3.32598ZM111.746 53.5581L111.646 53.7314L111.838 53.8419L111.928 53.6399L111.746 53.5581ZM63.9271 26.0144L63.8272 26.1877L63.9271 26.0144ZM6.86278 40.4835L7.03312 40.5883L6.86278 40.4835ZM52.9427 100.013L52.8909 99.8199L52.9427 100.013ZM96.1255 88.4176L96.308 88.4994L96.4801 88.1153L96.0736 88.2244L96.1255 88.4176ZM68.3671 150.366L68.5497 150.448L68.3671 150.366ZM89.4138 203.653L89.4912 203.468L89.4138 203.653ZM144.259 149.731L144.443 149.652L144.259 149.731ZM123.991 103.16L124.174 103.08L123.991 103.16ZM122.046 85.2613L122.089 85.0659L121.89 85.0221L121.85 85.2223L122.046 85.2613ZM146.86 116.466L146.66 116.46L146.86 116.466ZM146.623 124.785L146.423 124.779L146.623 124.785ZM202.392 140.012L202.562 140.117L202.392 140.012ZM192.225 99.9146L192.325 99.7413L192.225 99.9146ZM133.916 66.3284L133.795 66.1694L133.556 66.3518L133.816 66.5017L133.916 66.3284ZM150.32 59.9162L150.339 60.1153L150.32 59.9162ZM156.928 59.2733L156.948 59.4723L156.928 59.2733ZM127.496 18.8971C134.105 4.147 151.548 -2.74227 166.453 3.51041L166.607 3.14155C151.502 -3.19514 133.829 3.78525 127.131 18.7336L127.496 18.8971ZM111.928 53.6399L127.496 18.8971L127.131 18.7336L111.563 53.4763L111.928 53.6399ZM63.8272 26.1877L111.646 53.7314L111.845 53.3848L64.0269 25.8411L63.8272 26.1877ZM7.03312 40.5883C18.8528 21.377 44.2817 14.9293 63.8272 26.1877L64.0269 25.8411C44.2938 14.4747 18.6256 20.9831 6.69243 40.3787L7.03312 40.5883ZM52.8909 99.8199C16.9558 109.469 -12.1733 71.8057 7.03312 40.5883L6.69243 40.3787C-12.7172 71.9263 16.7351 109.943 52.9946 100.206L52.8909 99.8199ZM96.0736 88.2244L52.8909 99.8199L52.9946 100.206L96.1773 88.6108L96.0736 88.2244ZM68.5497 150.448L96.308 88.4994L95.943 88.3358L68.1846 150.284L68.5497 150.448ZM89.4912 203.468C68.7099 194.751 59.3344 171.013 68.5497 150.448L68.1846 150.284C58.8775 171.055 68.348 195.032 89.3365 203.837L89.4912 203.468ZM144.076 149.811C158.665 183.334 123.639 217.794 89.4912 203.468L89.3365 203.837C123.797 218.294 159.185 183.525 144.443 149.652L144.076 149.811ZM123.807 103.24L144.076 149.811L144.443 149.652L124.174 103.08L123.807 103.24ZM121.85 85.2223C120.693 91.0441 121.21 97.2728 123.807 103.24L124.174 103.08C121.611 97.1907 121.101 91.0452 122.243 85.3002L121.85 85.2223ZM147.06 116.472C147.508 100.789 136.407 88.212 122.089 85.0659L122.004 85.4566C136.15 88.565 147.103 100.985 146.66 116.46L147.06 116.472ZM146.823 124.79L147.06 116.472L146.66 116.46L146.423 124.779L146.823 124.79ZM202.222 139.908C194.286 152.806 180.225 156.5 168.246 153.229C156.268 149.958 146.395 139.731 146.823 124.79L146.423 124.779C145.99 139.933 156.013 150.303 168.141 153.615C180.267 156.926 194.521 153.186 202.562 140.117L202.222 139.908ZM192.125 100.088C206.233 108.214 210.753 126.041 202.222 139.908L202.562 140.117C211.212 126.058 206.628 107.98 192.325 99.7413L192.125 100.088ZM133.816 66.5017L192.125 100.088L192.325 99.7413L134.016 66.1551L133.816 66.5017ZM150.3 59.7172C143.988 60.3313 138.368 62.6746 133.795 66.1694L134.037 66.4873C138.554 63.0365 144.103 60.722 150.339 60.1153L150.3 59.7172ZM156.909 59.0742L150.3 59.7172L150.339 60.1153L156.948 59.4723L156.909 59.0742ZM166.453 3.51041C180.427 9.37271 185.659 22.5157 183.59 34.5735C181.52 46.6322 172.15 57.5915 156.909 59.0742L156.948 59.4723C172.386 57.9703 181.887 46.8585 183.984 34.6411C186.081 22.4228 180.774 9.0845 166.607 3.14155L166.453 3.51041Z"
                                                        fill="black"
                                                        mask="url(#path-1-outside-1_751_40)"
                                                    />
                                                    <defs>
                                                        <linearGradient
                                                            id="paint0_linear_751_40"
                                                            x1="207"
                                                            y1="11"
                                                            x2="17.4997"
                                                            y2="103.999"
                                                            gradientUnits="userSpaceOnUse"
                                                        >
                                                            <stop stop-color="#FFB800" />
                                                            <stop
                                                                offset="0.5224"
                                                                stop-color="#F6DAAF"
                                                            />
                                                            <stop
                                                                offset="1"
                                                                stop-color="#FF932F"
                                                            />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                                Seovileo
                                            </Link>
                                            <div className="relative overflow-hidden top-0 flex py-2 lg:py-1 items-center justify-start lg:justify-center w-full bg-gray-200">
                                                <button
                                                    onClick={web1}
                                                    className="absolute top-[50%] md:top-[45%] right-5 -translate-y-1/2 py-1 lg:py-2 text-gray-100 m-0 lg:px-5 px-2 bg-gradient-to-tl from-red-500 to-red-700 rounded-lg shadow-lg shadow-red-500 z-50"
                                                >
                                                    Zamknij
                                                </button>
                                                <p className="relative left-0 text-start text-gray-700 text-xs p-2 w-3/4 lg:hidden">
                                                    Wiecej funkcji na PC
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
                                <div class="flex items-center justify-around pr-1 w-full mt-4">
                                    <p className="text-zinc-700 font-semibold tracking">
                                        #mac-1
                                    </p>
                                    <button
                                        onClick={web1}
                                        className="py-2 text-gray-100 m-0 px-3 bg-gradient-to-tl from-violet-800 to-violet-400 shadow-violet-500 hover:shadow-violet-700 transition-all duration-200 rounded-lg shadow-lg"
                                    >
                                        Zobacz Live
                                    </button>
                                </div>
                            </div>
                            {/* web-2 */}
                            <div class=" lg:w-1/4 md:w-1/2 p-4 w-full overflow-hidden">
                                <div class="block rounded">
                                    {!showLive ? (
                                        <StaticImage
                                            loading="eager"
                                            quality={100}
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
                                <div class="flex items-center justify-around pr-1 w-full mt-4 pb-4">
                                    <p className="text-gray-700 font-semibold tracking">
                                        #mac-2
                                    </p>
                                    <button
                                        onClick={web2}
                                        className="py-2 text-gray-100 m-0 px-3 bg-gradient-to-tl from-violet-800 to-violet-400 shadow-violet-500 hover:shadow-violet-700 transition-all duration-200 rounded-lg shadow-lg"
                                    >
                                        Zobacz Live
                                    </button>
                                </div>
                            </div>

                            {/* web-3 */}
                            <div class=" lg:w-1/4 md:w-1/2 p-4 w-full">
                                <div class="block rounded">
                                    {!showLive ? (
                                        <StaticImage
                                            loading="eager"
                                            quality={100}
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
                                <div class="flex items-center justify-around pr-1 w-full mt-4">
                                    <p className="text-gray-700 font-semibold tracking">
                                        #mac-3
                                    </p>
                                    <button
                                        onClick={web3}
                                        className="py-2 text-gray-100 m-0 px-3 bg-gradient-to-tl from-violet-800 to-violet-400 shadow-violet-500 hover:shadow-violet-700 transition-all duration-200 rounded-lg shadow-lg"
                                    >
                                        Zobacz Live
                                    </button>
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
