import React from 'react'

function Drumpad(props){
    function clickFunctions(e){
        props.play.funcOne(e);
        props.play.funcTwo(props.drum.clipName)
    }
    return(
        <div className="drum-pad" onClick={clickFunctions} id={props.drum.clipName}>
            {props.drum.key}
            <audio src={props.drum.clip} className="clip" id={props.drum.key}  />
        </div>
    )
};

export default Drumpad;