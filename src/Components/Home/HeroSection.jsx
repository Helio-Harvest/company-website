
import React from 'react';
import './HeroSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faLock, faChartLine, faFileInvoiceDollar, faMoneyBillWave, faLeaf } from '@fortawesome/free-solid-svg-icons';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className="hero-section">
            <h1>The Future Is Solar</h1>
            <p>While we are regularly reminded of the threat of climate change, solar prices are lower than they’ve ever been and it is no surprise that the transition to clean energy continues to rise over the coming decade.</p>
            <p>At Quicken Solar, we guarantee you a quick transition to clean energy.</p>
            <div className="buttonfreeestimate2">
                <a href="#">GET A FREE ESTIMATE</a>
            </div>

            <div className="benefits-section">
                <div className="benefit-card">
                    <FontAwesomeIcon icon={faDollarSign} size="2x" />
                    <p>Lower Your Utility Bill</p>
                </div>
                <div className="benefit-card">
                    <FontAwesomeIcon icon={faLock} size="2x" />
                    <p>Lock-in Your Rates</p>
                </div>
                <div className="benefit-card">
                    <FontAwesomeIcon icon={faChartLine} size="2x" />
                    <p>Increase Home Value</p>
                </div>
                <div className="benefit-card">
                    <FontAwesomeIcon icon={faFileInvoiceDollar} size="2x" />
                    <p>Get Back Federal Tax Incentives</p>
                </div>
                <div className="benefit-card">
                    <FontAwesomeIcon icon={faMoneyBillWave} size="2x" />
                    <p>Costs Have Fallen</p>
                </div>
                <div className="benefit-card">
                    <FontAwesomeIcon icon={faLeaf} size="2x" />
                    <p>Reduce Carbon Footprint</p>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
