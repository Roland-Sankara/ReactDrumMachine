import React, {useState} from "react";
import Drumbox from './Drumbox';
import Display from './Display';

import '../Styles/App.css';

const pads = [
    {key:'Q',keyCode:81,clip:'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',clipName:'Heater-1'},
    {key:'W',keyCode:87,clip:'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',clipName:'Heater-2'},
    {key:'E',keyCode:69,clip:'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',clipName:'Heater-3'},
    {key:'A',keyCode:65,clip:'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',clipName:'Heater-4_1'},
    {key:'S',keyCode:83,clip:'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',clipName:'Heater-6'},
    {key:'D',keyCode:68,clip:'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',clipName:'Dsc_Oh'},
    {key:'Z',keyCode:90,clip:'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',clipName:'Kick_n_Hat'},
    {key:'X',keyCode:88,clip:'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',clipName:'RP4_KICK_1'},
    {key:'C',keyCode:67,clip:'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',clipName:'Cev_H2'}
];

function App(){
    const [text,setText] = useState("-- Click & Display --");

    function handleChange(clipName){
        setText(clipName);
    }

    return(
        <div id="drum-machine">
            <Display text={text}/>
            <Drumbox textFunc={handleChange} clips={pads} />
        </div>
    );
};


export default App;