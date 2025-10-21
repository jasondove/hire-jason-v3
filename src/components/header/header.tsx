import React from 'react';
import classNames from "classnames";

import styles from './header.module.scss';


const Header: React.FunctionComponent<T> = () => {
    return (
        <header className="md:w-[50%] md:sticky md:top-0 md:max-h-screen md:flex md:flex-col md:py-24">
            <div className="text-5xl text-text mb-3">Jason Dove</div>
            <div className="text-xl text-text mb-3">Full Stack Engineer</div>
            <p className="text-text-subtle mb-3">I make web applications.</p>
            <a href="https://www.linkedin.com/in/jason-r-dove/" target="_blank">
                {/*<button className="py-2 px-4 rounded-full text-black bg-highlight cursor-pointer">Get In Touch</button>*/}
                <button className={classNames(["py-2 px-4 rounded-full text-black bg-highlight cursor-pointer", styles.button])}>
                    Get In Touch
                </button>
            </a>
        </header>
    );
};

export default Header;
