import React, {useEffect} from 'react';
import Drumpad from './Drumpad';

function Drumbox(props){
    const pads = [
        {key:'Q',clip:'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',clipName:'Heater-1'},
        {key:'W',clip:'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',clipName:'Heater-2'},
        {key:'E',clip:'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',clipName:'Heater-3'},
        {key:'A',clip:'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',clipName:'Heater-4_1'},
        {key:'S',clip:'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',clipName:'Heater-6'},
        {key:'D',clip:'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',clipName:'Dsc_Oh'},
        {key:'Z',clip:'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',clipName:'Kick_n_Hat'},
        {key:'X',clip:'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',clipName:'RP4_KICK_1'},
        {key:'C',clip:'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',clipName:'Cev_H2'}
    ];

    function playAudio(event){
        const audioElement = event.target.childNodes[1];
        audioElement.currentTime = 0;
        audioElement.play();
    }

    function handleKeyDown(event){
        const audioPad = document.querySelector(`#${event.key.toUpperCase()}`);
        if(event.key === audioPad.id.toLowerCase()){
            audioPad.currentTime = 0;
            audioPad.play();
        }
    }

    // listen for keydown events then invoke the handleKeyDown function
    useEffect(() => {
        document.addEventListener('keydown',handleKeyDown);
        return()=>{
            document.removeEventListener('keydown',handleKeyDown);
        }
    }, [])


    return(
        <div id="drum-box">
            {pads.map((pad)=><Drumpad key={pads.indexOf(pad)} drum={pad} play={{funcOne:playAudio, funcTwo:props.textFunc, funcThree:handleKeyDown}}/>)}
        </div>
    )
};

export default Drumbox;