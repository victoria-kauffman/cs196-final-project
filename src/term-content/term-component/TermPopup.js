import React from "react";
import Popup from "reactjs-popup";
import TermCode from "../TermCode";
import 'reactjs-popup/dist/index.css';

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
                    <TermCode language='python' 
                        text='print("Hello, World")'/>
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