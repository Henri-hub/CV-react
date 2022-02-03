import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className='home'>
            <Navigation />
            <div className='homeContent'>
                <div className='content'>
                    <h1>Henri NSUKULA</h1>
                    <h2>Développeur web full stack Junior</h2>
                    <div className='pdf'>
                        <a href='./media/CV-Henri-NSUKULA.pdf' target="_blank">Télécharger CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;