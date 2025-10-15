import React from 'react';
import Resume from 'components/resume/resume.tsx';


const Body: React.FunctionComponent<T> = () => {
    return (
        <div className="md:w-[50%] md:py-24">
            <div>
                <p>body this is the body look at me i am a body body behavior</p>
                <Resume />
            </div>
        </div>
    );
};

export default Body;
