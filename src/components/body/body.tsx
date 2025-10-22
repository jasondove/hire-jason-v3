import React from 'react';
import { bodyParagraphs } from './body.config.tsx';
import Resume from 'components/resume/resume.tsx';


const Body: React.FunctionComponent = () => {
    return (
        <div className="md:w-[50%] md:py-24 bg-slate">
            <section className="px-4 md:px-0 mb-16 text-text-subtle">
                <h3 className="block md:hidden ms-4 mb-4 font-bold text-text">About Me</h3>
                {bodyParagraphs.map((paragraph) => {
                    return (
                        <p key={paragraph} className="mb-4 ms-4">{paragraph}</p>
                    );
                })}
            </section>
            <section className="px-4 md:px-0">
                <h3 className="block md:hidden ms-4 mb-4 font-bold text-text">Experience</h3>
                <Resume />
            </section>
        </div>
    );
};

export default Body;
