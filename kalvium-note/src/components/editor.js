import React, { useState } from "react";
import './editor.css'
export default function Notes(){
    const [notes,setNotes] = useState("")
    const changeText = (event) => {
        setNotes(event.target.value);
      };

    return(
        <>
        <div id="display">
        <div className="column">
           <h2> Input</h2>
            <textarea placeholder="Write your notes here" value={notes} onChange={changeText} id="text-area" cols="80" rows="20"></textarea>
        </div>
        <div className="column">
            <h2>Pro Note</h2>
            <div id="output-div">{notes}</div>
        </div>
        </div>
        </>
    )
}