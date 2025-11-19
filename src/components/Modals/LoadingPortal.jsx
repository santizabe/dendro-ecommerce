import React from "react";
import ReactDOM from "react-dom";
import '../../styles/loading-portal.css';

function LoadingPortal() {
    return ReactDOM.createPortal(
        <div className="loading-overlay">
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>,
        document.body);
}


export default LoadingPortal;