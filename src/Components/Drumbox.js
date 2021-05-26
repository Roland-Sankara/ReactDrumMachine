import React from 'react';
import Drumpad from './Drumpad';

function Drumbox(){
    const pads = [{key:'Q',clip:''},{key:'W',clip:''},{key:'E',clip:''},{key:'A',clip:''},{key:'S',clip:''},{key:'D',clip:''},{key:'Z',clip:''},{key:'X',clip:''},{key:'C',clip:''}];
    return(
        <div id="drum-box">
            {pads.map((pad)=><Drumpad key={pads.indexOf(pad)} drum={pad}/>)}
        </div>
    )
};

export default Drumbox;