import React from "react";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import { setCodeBlock } from "./TermPopupHelper";

export default function TermPopup(props) {
    return (
        <Popup trigger=
        {<button>{props.name}</button>}
        modal nested>
        {
            close => (
            <div className='Term-Popup'>
                <div className='Popup-Content'>
                    <h1 className='Term'>{props.name}</h1>
                    {code(props.id)}
                    { codeBlock }
                </div>
                <div>
                <button onClick={() => close()}>
                    Close modal
                </button>
                </div>
            </div>
            )
        }
        </Popup>
    )
}

function code(termID) {
    codeText = setCodeBlock(e.target.value, termID);
    return (
        <select
            onChange={e => { setCodeBlock(e.target.value, codeText)} }>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="c++">C++</option>
        </select>
    )
}