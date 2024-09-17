import React from 'react';
import './EnergySolutions.css';

const EnergySolutions = () => {
    return (
        <section className="energy-solutions">
            <h2>Clean and Affordable Energy Solutions</h2>
            <p className="subtitle">
                Harnessing solar power is now more accessible than ever. At Quicken Solar we utilize cutting-edge technology to deliver clean, reliable, and environmentally friendly power to your home or business. With our streamlined process, we make going solar a no-brainer for you.
            </p>

            <div className="cards-container">
                <div className="card" style={{ backgroundImage: `url(${require('../../assets/man_solar.png')})` }}>
                    <div className="card-content">
                        <h3>Residential</h3>
                        <p>Solar For Your Home</p>
                    </div>
                </div>

                <div className="card" style={{ backgroundImage: `url(${require('../../assets/solar_charge.png')})` }}>
                    <div className="card-content">
                        <h3>Commercial</h3>
                        <p>Solar For Your Business</p>
                    </div>
                </div>

                <div className="card" style={{ backgroundImage: `url(${require('../../assets/home_solar.png')})` }}>
                    <div className="card-content">
                        <h3>Battery Storage</h3>
                        <p>For Your Energy Independence</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EnergySolutions;
