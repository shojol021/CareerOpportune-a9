import React from 'react';
import Hero from './Hero';
import Category from './Category';
import Featured from './Featured';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Category></Category>
            <Featured></Featured>
            <Footer></Footer>
        </div>
    );
};

export default Home;