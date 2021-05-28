import React from 'react';
import Drumpad from './Drumpad';

function Drumbox(props){
    return(
        <div id="drum-box">
            {props.clips.map((clip)=><Drumpad key={props.clips.indexOf(clip)} audioClip={clip} clipText={props.textFunc}/>)}
        </div>
    )
};

export default Drumbox;