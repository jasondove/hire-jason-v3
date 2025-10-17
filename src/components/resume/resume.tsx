import React from 'react';

import { resumeData } from './resume.config.tsx';

const Resume: React.FunctionComponent<T> = () => {
    return (
        <div>
            {resumeData.map((item) => {
                return (
                    <div key={item.company} className="mb-2 p-2">
                        <div className="flex mb-2">
                            <span className="mr-auto text-base">{item.title}</span>
                            <span className="italic text-sm">
                                <span>{item.company}, </span>
                                <span>{item.yearStart} - {item.yearEnd}</span>
                            </span>
                        </div>
                        <ul className="text-sm">
                            {item.bullets.map((bullet) => {
                                return (
                                    <li key={bullet} className="mb-1">{bullet}</li>
                                );
                            })}
                        </ul>
                    </div>
                );
            })}
        </div>
    );
};

export default Resume;
