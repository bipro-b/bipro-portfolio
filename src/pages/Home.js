import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Header from './Header';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Projects />
            <Footer />
        </div>
    );
};

export default Home;