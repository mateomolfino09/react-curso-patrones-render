import React from "react";
import { withStorageListener } from "./withStorageListener";
import './ChangeAlert.css';

function ChangeAlert({ show, toggleShow }) {
    if(show) {
        return (
        <div className="ChangeAlert-bg">
            <div className="ChangeAlert-container">
                <p>Hubo cambios</p>
                <p>Quieres sincronizar tus TODOs?</p>
                <button className="TodoForm-button TodoFrom-button--add"
                 onClick={() =>{ 
                    toggleShow(false)
                    
                }}
                >Yes!</button>
            </div>
            
        </div>
        )
       
    }
    else return null;
    
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export {ChangeAlertWithStorageListener} ;