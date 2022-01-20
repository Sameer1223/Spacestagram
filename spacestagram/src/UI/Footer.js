import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="text">
                    <p>Made by Sameer Khan</p>
                    <p> Using the Shopify Polaris Library and NASA APOD API</p>
                </div>
            </div>
        )
    }
}

export default Footer;
