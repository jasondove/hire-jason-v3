import React from 'react';

import { resumeData } from './resume.config.tsx';

const Resume: React.FunctionComponent<T> = () => {
    return (
        <div>
            {resumeData.map((item) => {
                return (
                    <div key={item.company}>
                        <div className="flex">
                            <span className="mr-auto">{item.title}</span>
                            <span>
                                <span>{item.company}, </span>
                                <span>{item.yearStart} - {item.yearEnd}</span>
                            </span>
                        </div>
                        <ul>
                            {item.bullets.map((bullet) => {
                                return (
                                    <li key={bullet}>{bullet}</li>
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
