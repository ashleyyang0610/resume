import React from 'react';

const About = () => {
    return (<article id="about">
        <h2 className="sub-header">About</h2>
        <hr />
        <section className="about-picture" />
        <section className="about-info">
            <ul className="list-unstyled">
                <li>
                    <h3 className="label-header">About Me</h3>
                    I&apos;m a front-end developer with over 4 years experience in web development.
                    I have worked with ReactJS for at least 2 years.
                    In past 2 years, my main task is participating in a new project independently.
                    I build the project up individually.
                    Further, I also have to co-work with foreign colleagues and be in charge of front-end technique consulting job.
                    I&apos;m an extremely persistent and flexible person.
                    Often raise new ideas for project and take the initiative in filling the gap from orignal structure.
                    Otherwise, I also have lots experience in lagacy code maintenance and refinement.
                    I&apos;m adaptable to handle any situation.
                    I&apos;m a young girl but I always do my best and realize what I&apos;m lack of.
                </li>
                <li>
                    <h3 className="label-header">Name</h3>Ashley Yang
                </li>
                <li>
                    <h3 className="label-header">Gender</h3>Female
                </li>
                <li>
                    <h3 className="label-header">Age</h3>27
                </li>
                <li>
                    <h3 className="label-header">Locations</h3>Taipei City, Taiwan
                </li>
            </ul>
        </section>
    </article>);
};

export default About;