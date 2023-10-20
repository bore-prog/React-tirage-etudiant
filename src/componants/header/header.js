import React, { useState } from 'react';
import './header.css';
import Tirage from '../tirage/tirage'
import MissingPeoples from '../missingPeoples/missingPeoples'

function Header() {
    const [activeButton, setActiveButton] = useState('Tirage');
    const [selectedComponent, setSelectedComponent] = useState(<Tirage />);

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
        if (buttonName === 'Tirage') {
            setSelectedComponent(<Tirage />);
        } else {
            setSelectedComponent(<MissingPeoples />);
        }
    };

    return (
        <div className="main-container">
            <header className="header">
                <nav>
                    <button
                        className={`header-button ${activeButton === 'Tirage' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('Tirage')}
                    >
                        Tirage au sort
                    </button>
                    <button
                        className={`header-button ${
                            activeButton === 'Absent.e.s' ? 'active' : ''
                        }`}
                        onClick={() => handleButtonClick('Absent.e.s')}
                    >
                        Absent.e.s
                    </button>
                </nav>
            </header>
            {selectedComponent}
        </div>
    );
}

export default Header;
