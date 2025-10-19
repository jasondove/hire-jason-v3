import React from 'react';


const Header: React.FunctionComponent<T> = () => {
    return (
        <header className="md:w-[50%] md:sticky md:top-0 md:max-h-screen md:flex md:flex-col md:py-24">
            <div className="text-4xl mb-3">Jason Dove</div>
            <div className="text-lg mb-3">Web Developer</div>
            <p>pretty cool dude</p>
        </header>
    );
};

export default Header;
