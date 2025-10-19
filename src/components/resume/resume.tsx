import React from 'react';
import classNames from "classnames";

import { resumeData } from './resume.config.tsx';

const Resume: React.FunctionComponent<T> = () => {
    // const hoverItem = React.useRef<number | null>(null);
    const [hoverItem, setHoverItem] = React.useState<number | null>(null);

    return (
        <div>
            {resumeData.map((item, index) => {
                return (
                    <div
                        key={item.company}
                        className={`mb-2 p-2 cursor-pointer rounded-md ${hoverItem !== index && typeof hoverItem === 'number' && 'opacity-25'} transition-opacity duration-400`}
                        onMouseEnter={() => setHoverItem(index)}
                        onMouseLeave={() => setHoverItem(null)}
                    >
                        <div className="flex mb-2">
                            <span className="mr-auto text-base">{item.title}</span>
                            <span className="italic text-sm">
                                <span>{item.company}, </span>
                                <span>{item.yearStart} - {item.yearEnd}</span>
                            </span>
                        </div>
                        <ul className="text-sm list-disc ms-4">
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
