import React from 'react'

function Drumpad(props){
    return(
        <button className="drum-pad">
            {props.drum.key}
            <audio src={props.drum.clip} className="clip" id={props.drum.key}/>
        </button>
    )
};

export default Drumpad;