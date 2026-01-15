import React from 'react';
import Hero from '../components/Hero';
import InfoBar from '../components/InfoBar';
import Features from '../components/Features';
import Departments from '../components/Departments';
import Doctors from '../components/Doctors';
import News from '../components/News';

function Home() {
    return (
        <>
            <Hero />
            <InfoBar />
            <Features />
            <Departments />
            <Doctors />
            <News />
        </>
    );
}

export default Home;
