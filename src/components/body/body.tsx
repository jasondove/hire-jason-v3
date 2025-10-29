import React from 'react';
import classNames from 'classnames';
import Resume from 'components/resume/resume.tsx';

import { bodyParagraphs } from './body.config.tsx';
import styles from './body.module.scss';

const Body: React.FunctionComponent = () => {
    return (
        <div className="md:w-[50%] md:py-24 bg-slate">
            <section className="px-4 md:px-0 mb-16 text-text-subtle">
                <h3 className="block md:hidden ms-4 mb-4 font-bold text-text">About Me</h3>
                {bodyParagraphs.map((paragraph) => {
                    let key = Array.isArray(paragraph.props.children) ? paragraph.props.children[0] : paragraph.props.children;
                    return (
                        <p key={key} className={classNames("mb-4 ms-4", styles.bodyParagraph)}>{paragraph}</p>
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
