import * as React from "react";
import { Link } from "gatsby";
import { useState, useEffect } from "react";

import { StaticImage } from "gatsby-plugin-image";

const Messenger = () => {
    const [msg, setMsg] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMsg(true);
        }, 3000);
        return () => timer;
    });

    return (
        <Link
            aria-label="messenger"
            className={
                !msg
                    ? "fixed right-4 bottom-8 transition-transform duration-1000 z-50 translate-x-[200%]"
                    : "fixed right-4 hover:scale-110 bottom-8 translate-x-0 transition-transform duration-500 z-50"
            }
            to="https://www.facebook.com/profile.php?id=100090402000669"
        >
            <StaticImage
                className="h-auto w-12"
                placeholder="blurred"
                quality="100"
                src="../assets/messenger.png"
            />
        </Link>
    );
};

export default Messenger;
