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
                        className={`mb-2 p-4 cursor-default rounded-md ${hoverItem !== index && typeof hoverItem === 'number' && 'opacity-25'} transition-opacity duration-200 ${hoverItem === index && 'bg-matte/[.4]'}`}
                        onMouseEnter={() => setHoverItem(index)}
                        onMouseLeave={() => setHoverItem(null)}
                    >
                        <div className="flex items-center mb-2">
                            <span className={`text-base ${!item.company && 'mr-auto'} ${hoverItem === index ? 'text-highlight' : 'text-text'} transition-colors duration-200`}>{item.title}</span>
                            {item.company && <span className="mr-1 ml-1 text-text-subtle">&middot;</span>}
                            {item.company && <span className="mr-auto text-sm italic text-text-subtle">{item.company}</span>}
                            <span className="text-sm text-text-subtle">
                                {item.yearStart} - {item.yearEnd}
                            </span>
                        </div>
                        <ul className={`text-sm list-disc ms-4 pe-24 ${hoverItem === index ? 'text-text marker:text-highlight' : 'text-text-subtle'} transition-colors duration-200`}>
                            {item.bullets.map((bullet) => {
                                return (
                                    <li key={bullet} className="mb-2">{bullet}</li>
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
