import React, { useState } from "react";
import { ReactDOM } from "react-dom/client";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import BlockCode from "../BlockCode";
import { printOptions } from "../Terms/PrintTerm";

export default function TermPopup(props) {
    const [ selectedLanguage, setSelectedLanguage ] = useState("Python");

    return (
        <Popup trigger=
        {<button>{props.name}</button>}
        modal nested>
        {
            close => (
            <div className='Term-Popup'>
                <div className='Popup-Content'>
                    <h1 className='Term'>{props.name}</h1>
                    <select
                        value={selectedLanguage}
                        onChange={e => { setSelectedLanguage(e.target.value) } } >
                        <option value="Python">Python</option>
                        <option value="Java">Java</option>
                        <option value="C++">C++</option>
                    </select>
                    <h3>{ selectedLanguage }</h3>
                    <h4>{ props.options['text'] }</h4>
                    <BlockCode text={props.options[selectedLanguage.replace("++", "pp")]} 
                            language={selectedLanguage} /> 

                </div>
                <div>
                <button onClick={() => close()}>
                    Close
                </button>
                </div>
            </div>
            )
        }
        </Popup>
    )
}