import * as React from "react";
import { Link } from "gatsby";
import { useState, useEffect } from "react";

import { StaticImage } from "gatsby-plugin-image";

const ScrollUpIcon = () => {
    const [ScrollUpIcon, setScrollUp] = useState(false);

    const scrollUp = () => {
        if (window.scrollY >= 1200) {
            setScrollUp(true);
        } else {
            setScrollUp(false);
        }
    };

    useEffect(() => {
        scrollUp();
        window.addEventListener("scroll", scrollUp);
    });

    return (
        <Link
            aria-label="scroll to home"
            className={
                !ScrollUpIcon
                    ? "fixed right-4 bottom-20 transition-transform duration-1000 z-50 translate-x-[200%]"
                    : "fixed right-4 hover:scale-110 bottom-20 translate-x-0 transition-transform duration-500 z-50 "
            }
            to="#"
        >
            <StaticImage
                className="h-auto w-11"
                placeholder="blurred"
                quality="100"
                src="../assets/scrollUp.png"
            />
        </Link>
    );
};

export default ScrollUpIcon;
