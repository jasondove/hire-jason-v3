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
        title: 'Senior Frontend Developer',
        company: 'Docler Holding Luxembourg',
        yearStart: 2020,
        yearEnd: 2025,
        techs: [],
        bullets: [
            'Develop mobile-first, reusable frontend components complete with themeable UIs, i18n internationalization, a11y accessibility support, Storybook stories, and functional unit and integration tests.',
            'Ensure speed and stability for several million concurrent users on one of the most high-traffic sites on the internet.',
            'Perform technical investigations and recommendations to determine the viability of architectural improvements.',
            'Act as engineering lead on projects, coordinating cross-discipline teams including business, design, development, and quality assurance from project conception to delivery.',
            'Migrate projects from legacy codebases to improve performance and reduce technical debt.',
            'Create internal NPM packages for better interoperability and maintainability.',
        ],
    },
    {
        title: 'Development Team Lead',
        company: 'The Relationship Corp',
        yearStart: 2013,
        yearEnd: 2020,
        techs: [],
        bullets: [
            'Served dual roles as a frontend developer and the engineering team manager.',
            'Developed new features, performed maintenance, and assisted with product decisions for two dating applications with a combined 30+ million installs and 3 million monthly active users.',
            'Spearheaded development effort to create an entirely new property, which was delivered on schedule.',
            'Created a hackathon project that increased monthly recurring revenue by over $3,000.',
        ],
    },
    {
        title: 'Web Developer',
        company: 'Inuvo, Inc',
        yearStart: 2010,
        yearEnd: 2013,
        techs: [],
        bullets: [
            'Planned and developed new products for approximately ten million users.',
            'Developed several products that integrated third-party APIs (e.g. Facebook, Twitter, eBay, UPS).',
            'Lead initiative that improved and streamlined development and release processes.',
        ],
    },
    {
        title: 'Developer and Database Administrator',
        company: 'The Public Theater',
        yearStart: 2007,
        yearEnd: 2010,
        techs: [],
        bullets: [
            "Developed and maintained high-traffic websites, including the organization's event calendar, ticketing system, and its first ever mobile website.",
            'Wrote scripts for organizing, modifying, and reporting on customer data for over 350,000 active users.',
            'Projects were featured in The New York Post and The Rachael Ray Show.',
        ],
    },
];

export { resumeData, type ResumeJob };
