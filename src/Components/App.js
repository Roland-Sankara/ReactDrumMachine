import React, {useState} from "react";
import Drumbox from './Drumbox';
import Display from './Display';

import '../Styles/App.css';

function App(){
    const [text,setText] = useState("-- Click & Display --");

    function handleChange(clipName){
        setText(clipName);
    }

    return(
        <div id="drum-machine">
            <Display text={text}/>
            <Drumbox textFunc={handleChange}/>
        </div>
    );
};


export default App;