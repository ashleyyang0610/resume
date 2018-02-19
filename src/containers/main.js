import React from 'react';
import Ability from './ability';
import About from './about';
import Experience from './experience';
import Footer from './footer';
import Header from './header';

const Main = () => {
    return (<section>
        <Header />
        <About />
        <Ability />
        <Experience />
        <Footer />
    </section>);
};

export default Main;
