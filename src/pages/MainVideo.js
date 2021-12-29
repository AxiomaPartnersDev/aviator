import Video from "../video/video.mp4";
import {useEffect, useRef, useState} from "react";
import PlayBtn from "../images/testVideo/play.png";
import PauseBtn from "../images/testVideo/pause.png";
import MutedBtn from "../images/testVideo/mutted.png";
import UnMutedBtn from "../images/testVideo/unmutted.png";



const TestMainVideo = () => {
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(true);
    const [mutted,setMutted] = useState(true)

    const mutHandler = ()=>{
        setMutted(!mutted)
    }
    const videoHandler = (control) => {
        if (control === "play") {
            videoRef.current.play();
            setPlaying(true);
            var vid = document.getElementById("video1");
        } else if (control === "pause") {
            videoRef.current.pause();
            setPlaying(false);
        }
    };
//
// useEffect(()=>{
//     setTimeout(()=>{
//         if(playing === false){
//             setPlaying(true)
//         }
//     },500)
// },[])

    return (
        <div className="app">
            <video  className="video" src={Video} playsInline={true} autoPlay={true} loop muted={mutted}  ref={videoRef}>
            </video>
            <div className="controlsContainer">
                <div className="controls">
                    {playing ? (
                        <img
                            onClick={() => videoHandler("pause")}
                            className="controlsIcon--small"
                            alt=""
                            src={PauseBtn}
                        />
                    ) : (
                        <img
                            onClick={() => videoHandler("play")}
                            className="controlsIcon--small"
                            alt=""
                            src={PlayBtn}
                        />
                    )}
                </div>
                    <img
                        onClick={mutHandler}
                        className="controlsIcon--small"
                        alt=""
                        src={ mutted ? UnMutedBtn : MutedBtn}
                    />
            </div>
        </div>
    );
}


export default TestMainVideo;