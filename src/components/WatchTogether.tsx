import { useEffect, useState } from "react";
import { GetVttFile } from "../functions/GetVttFile";
import { ShowSubtitles } from "./ShowSubtitles";
import axios from 'axios';
import { GetYouTubeVideoId } from "../functions/GetYouTubeVideoId";
import { subtitlesObjListType } from "../types/subtitlesObjListType"
import { MakeSubtitlesObj } from "../functions/MakeSubtitlesObj";
import { Excomponent } from "./Ex";

export const WatchTogether = () => {
    const [isThumbnail, setIsThumbnail] = useState(true);
    // const [VttData, setVttData] = useState("")
    const [InputUrl, setInputUrl] = useState("")
    const [InputData, setInputData] = useState("")
    const [YoutubeId, setYoutubeId] = useState("iFg-bFAu2AU")
    const [subtitlesObjList, setsubtitlesObjList] = useState<subtitlesObjListType[]>([])
    // var presubtitlesObjList:subtitlesObjListType[] = []
    const funcShowSubtitles = ShowSubtitles({ subtitlesObjList })

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
                    console.log(VttData)
                    // setVttData(JSON.stringify(response.data))
                    // presubtitlesObjList = MakeSubtitlesObj(VttData)
                    const preList = MakeSubtitlesObj(VttData)
                    setsubtitlesObjList(preList)
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

    // const setYoutubeVideoData = () => {
    //     setInputUrl(InputData)
    //     setYoutubeId(GetYouTubeVideoId(InputUrl))
    // }
    const [excount, setExcount] = useState(0)


    return (
        <div className="WatchTogether">
            <div onClick={() => { setExcount(excount + 1) }}>
                excount: {excount}
            </div>
            <Excomponent count={excount} />
            <div>
                <input type="text"
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
            {isThumbnail ? (
                <img
                    src={`https://img.youtube.com/vi/${YoutubeId}/maxresdefault.jpg`}
                    onClick={() => setIsThumbnail(false)}
                    alt="サムネイル"
                />
            ) : (
                <div>
                    <iframe
                        src={`https://www.youtube.com/embed/${YoutubeId}?autoplay=1`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    {`https://www.youtube.com/embed/${YoutubeId}?autoplay=1`}
                    {/* <div>
                        <video src={`https://www.youtube.com/embed/${YoutubeId}?autoplay=1`} title="YouTube video player">
                            <track default src={VttData} />
                        </video>
                    </div> */}
                    <div>
                        <ShowSubtitles subtitlesObjList={subtitlesObjList} />
                        {/* {funcShowSubtitles} */}

                    </div>
                    {subtitlesObjList.length > 0 ? (
                        <div>no video</div>
                    ) : (
                        <div>
                            <ShowSubtitles subtitlesObjList={subtitlesObjList} />
                            {/* {funcShowSubtitles} */}

                        </div>
                    )}
                </div>
            )}
            {/* <div>
                {subtitlesObjList.map((obj) => <div>{obj.text}</div>)}
            </div> */}
            {/* <div>{VttData}</div> */}
        </div>

    );

}