import React, {useEffect} from 'react'

function Drumpad(props){

    function playAudio(event){
        const audioElement = document.querySelector(`#${event.target.innerText}`);
        audioElement.currentTime = 0;
        audioElement.play();
    }

    function displayClickText(event){
        playAudio(event);
        props.clipText(props.audioClip.clipName);
    }

    function handleKeyDown(event){
        const audioElement = document.querySelector(`#${props.audioClip.key}`);
        if(event.keyCode === props.audioClip.keyCode){
            audioElement.currentTime = 0;
            audioElement.play();
        }
    }

    // listen for keydown events then invoke the handleKeyDown function
    useEffect(() => {
        document.addEventListener('keydown',handleKeyDown);
        return()=>{
            document.removeEventListener('keydown',handleKeyDown);
        }
    })

    return(
        <div className="drum-pad" onClick={displayClickText} id={props.audioClip.clipName}>
            {props.audioClip.key}
            <audio src={props.audioClip.clip} className="clip" id={props.audioClip.key}  />
        </div>
    )
};

export default Drumpad;