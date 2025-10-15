import React from 'react';

import { resumeData } from './resume.config.tsx';

const Resume: React.FunctionComponent<T> = () => {
    return (
        <div>
            {resumeData.map((item) => {
                return (
                    <div key={item.company}>
                        {item.company}
                    </div>
                );
            })}
        </div>
    );
};

export default Resume;
