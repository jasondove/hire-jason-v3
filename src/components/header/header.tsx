import React from 'react';
import classNames from 'classnames';
import Typewriter, { TypewriterClass } from 'typewriter-effect';

import { appAdjectives, typewritePauseMs } from './header.config.tsx';
import styles from './header.module.scss';

const Header: React.FunctionComponent = () => {
    const typer = React.useRef<TypewriterClass | null>(null);
    const isTyping = React.useRef<boolean>(false);
    const adjectivesQueue = React.useRef<string[]>([]);

    const getAdjectiveFromQueue = () => {
        if (!adjectivesQueue.current || adjectivesQueue.current.length === 0) {
            adjectivesQueue.current = [...appAdjectives].sort(() => Math.random() - 0.5)
        }

        return adjectivesQueue.current.shift() ?? '';
    };

    const startTyping = () => {
        if (!typer.current || isTyping.current) {
            return;
        }

        isTyping.current = true;
        typer.current
            .typeString(` ${getAdjectiveFromQueue()}.`)
            .pauseFor(typewritePauseMs)
            .deleteAll()
            .callFunction(() => isTyping.current = false)
            .start();
    };

    return (
        <header className="pt-8 px-4 mb-12 md:mb-0 text-center md:text-left md:w-[50%] md:sticky md:top-0 md:max-h-screen md:flex md:flex-col md:py-24">
            <div className="text-4xl md:text-5xl text-text mb-3">Jason Dove</div>
            <div className="text-xl text-text mb-3">Full Stack Engineer</div>
            <p className="cursor-pointer select-none hidden md:block text-text-subtle mb-3" onClick={startTyping}>
                I make web applications
                <span className={classNames(["text-highlight", styles.typewriterWrapper])}>
                    <Typewriter
                        onInit={(typewriter) => {
                            typer.current = typewriter;
                        }}
                    />
                </span>
            </p>
            <a href="https://www.linkedin.com/in/jason-r-dove/" target="_blank">
                <button className={classNames(["py-1 px-12 rounded-md md:py-2 md:px-4 md:rounded-full text-black bg-highlight cursor-pointer", styles.button])}>
                    Get In Touch
                </button>
            </a>
        </header>
    );
};

export default Header;
