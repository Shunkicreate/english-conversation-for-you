import { useEffect, useRef, useState } from "react";
import { GetVttFile } from "../functions/GetVttFile";
import { ShowSubtitles } from "./ShowSubtitles";
import axios from 'axios';
import { GetYouTubeVideoId } from "../functions/GetYouTubeVideoId";
import { subtitlesObjListType } from "../types/subtitlesObjListType"
import { MakeSubtitlesObj } from "../functions/MakeSubtitlesObj";
import { useStopwatch } from "react-timer-hook";
import '../stylesheets/WatchTogether.css'
import '../stylesheets/Input.css'
import { idText } from "typescript";
import { ShowYoutube } from "./ShowYoutube";
export const WatchTogether = () => {
    const [isThumbnail, setIsThumbnail] = useState(true);
    // const [VttData, setVttData] = useState("")
    const [InputUrl, setInputUrl] = useState("")
    const [InputData, setInputData] = useState("")
    const [YoutubeId, setYoutubeId] = useState("iFg-bFAu2AU")
    const [Now, setNow] = useState(0)
    const [subtitlesObjList, setsubtitlesObjList] = useState<subtitlesObjListType[]>([])
    const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
        useStopwatch({ autoStart: false });
    useEffect(() => {
        if (InputUrl !== "") {
            var data = {
                "url": InputUrl
            };
            var config = {
                method: 'post',
                url: 'http://ec2-13-112-150-63.ap-northeast-1.compute.amazonaws.com:8080/youtubeDlSubtitles',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': 'ec2-13-112-150-63.ap-northeast-1.compute.amazonaws.com'
                },
                data: data
            };
            axios(config)
                .then(function (response) {
                    const VttData = JSON.stringify(response.data)
                    const preList = MakeSubtitlesObj(VttData)
                    setsubtitlesObjList(preList)
                    start()
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }, [InputUrl])

    useEffect(() => {
        setYoutubeId(GetYouTubeVideoId(InputUrl))
    }, [InputData, InputUrl])
    useEffect(() => {
        if (subtitlesObjList.length > 0) {
            setIsThumbnail(false)
        }
    }, [subtitlesObjList])

    const timeDelay = 2

    useEffect(() => {
        setNow(seconds + 60 * (minutes + 60 * (hours + 24 * days)) - timeDelay)
    }, [days, hours, minutes, seconds])

    const YoutubeArea = useRef<HTMLIFrameElement>()

    useEffect(() => {
        const handleClick = () => {
            console.log('Button clicked');
        };

        if (YoutubeArea && YoutubeArea.current) {
            // Passing the same reference
            YoutubeArea.current.addEventListener('click', handleClick)
        }
        return () => {
            // Passing the same reference
            if (YoutubeArea.current) {
                YoutubeArea.current.removeEventListener('click', handleClick)
            }
        }
    }, []);

    const observeYoutube = () => {
        if (isRunning) {
            pause()
        }
        else {
            start()
        }
    }

    return (
        <div className="WatchTogether">
            <div className="InputArea">
                <div className="InputWrap">
                    <input className="Input" type="text"
                        defaultValue={"https://www.youtube.com/watch?v=6Dh-RL__uN4"}
                        onChange={(e) => {
                            setInputData(e.target.value)
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                setInputUrl(InputData)
                            }
                        }} />

                </div>
            </div>
            <div className="ShowArea">
                <div>
                    <ShowYoutube />
                </div>
                {isThumbnail ? (
                    <div>
                        {YoutubeId === "" ? (
                            <div>none</div>
                        ) : (
                            <img
                                src={`https://img.youtube.com/vi/${YoutubeId}/maxresdefault.jpg`}
                                onClick={() => setIsThumbnail(false)}
                                alt="サムネイル"
                            />
                        )}

                    </div>
                ) : (
                    <div>
                        <iframe
                            src={`https://www.youtube.com/embed/${YoutubeId}?autoplay=1`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            onClick={observeYoutube}
                        ></iframe>
                        <div className="YoutubeArea" onClick={observeYoutube}>
                        </div>
                        <div>
                            <div style={{ textAlign: "center" }}>
                                <div>
                                    <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
                                    <span>{seconds}</span>
                                </div>
                                <button className="button" onClick={start}>Start</button>
                                <button className="button" onClick={pause}>Pause</button>
                                <button className="button"
                                    onClick={reset as unknown as React.MouseEventHandler<HTMLButtonElement>}
                                >
                                    Reset
                                </button>
                            </div>
                            <ShowSubtitles subtitlesObjList={subtitlesObjList}
                                Now={Now}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>

    );

}