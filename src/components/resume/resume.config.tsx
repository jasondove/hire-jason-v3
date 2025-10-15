type ResumeJob = {
    title: string;
    company: string;
    yearStart: number;
    yearEnd: number;
    techs: Array<string>;
    bullets: Array<string>;
};

const resumeData: Array<ResumeJob> = [
    {
        title: '',
        company: 'Docler Holding Luxembourg',
        yearStart: 0,
        yearEnd: 0,
        techs: [],
        bullets: [],
    },
    {
        title: '',
        company: 'The Relationship Corp',
        yearStart: 0,
        yearEnd: 0,
        techs: [],
        bullets: [],
    },
    {
        title: '',
        company: 'Inuvo, Inc',
        yearStart: 0,
        yearEnd: 0,
        techs: [],
        bullets: [],
    },
    {
        title: '',
        company: 'The Public Theater',
        yearStart: 0,
        yearEnd: 0,
        techs: [],
        bullets: [],
    },
];

export { resumeData, type ResumeJob };
