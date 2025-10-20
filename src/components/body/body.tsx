import React from 'react';
import { bodyParagraphs } from './body.config.tsx';
import Resume from 'components/resume/resume.tsx';


const Body: React.FunctionComponent<T> = () => {
    return (
        <div className="md:w-[50%] md:py-24">
            <section className="mb-16 text-text-subtle">
                {bodyParagraphs.map((paragraph) => {
                    return (
                        <p key={paragraph} className="mb-4 ms-2">{paragraph}</p>
                    );
                })}
            </section>
            <section>
                <Resume />
            </section>
        </div>
    );
};

export default Body;
