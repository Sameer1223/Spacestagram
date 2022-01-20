import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMeteor } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img class="background" src="/images/space.jpg" alt="Bruh"/>
                <div className="content">
                    <FontAwesomeIcon icon={faMeteor} size="4x" color="wheat"/>
                    <h1 className="title">Spacestagram</h1>
                </div>
            </div>
        )
    }
}

export default Header;
