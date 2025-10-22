import React from 'react';
import classNames from 'classnames';

import styles from './header.module.scss';

const Header: React.FunctionComponent = () => {
    return (
        <header className="pt-8 px-4 mb-12 md:mb-0 text-center md:text-left md:w-[50%] md:sticky md:top-0 md:max-h-screen md:flex md:flex-col md:py-24">
            <div className="text-4xl md:text-5xl text-text mb-3">Jason Dove</div>
            <div className="text-xl text-text mb-3">Full Stack Engineer</div>
            <p className="hidden md:block text-text-subtle mb-3">I make web applications.</p>
            <a href="https://www.linkedin.com/in/jason-r-dove/" target="_blank">
                <button className={classNames(["py-1 px-12 rounded-md md:py-2 md:px-4 md:rounded-full text-black bg-highlight cursor-pointer", styles.button])}>
                    Get In Touch
                </button>
            </a>
        </header>
    );
};

export default Header;
