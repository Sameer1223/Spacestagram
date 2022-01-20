import React, { useState } from 'react';
import './SharePopUp.css';

function SharePopUp(props) {
    const [copied, setCopied] = useState(false);

    const handleClick = () => {
        navigator.clipboard.writeText(props.url);
        setCopied(true);
    }

    return (props.trigger) ? (
        <div className="popup">
            <div className="popupHeader">
                <h2>Shareable Link</h2>
                <button className="closeButton" onClick={() => {props.setTrigger(false); setCopied(false)}}>x</button>
            </div>
            <div className="popupContent">
                <p className="link">{props.url}</p>
                <button className="copyButton" onClick={() => handleClick()}>{copied? "Copied!" : "Copy Link"}</button>
            </div>
        </div>
    ) : "";
}

export default SharePopUp;
