import { useEffect, useRef, useState, FC } from "react";
import { ShowSubtitles } from "./ShowSubtitles";
import axios from 'axios';
import { GetYouTubeVideoId } from "../functions/GetYouTubeVideoId";
import { subtitlesObjListType } from "../types/subtitlesObjListType"
import { MakeSubtitlesObj } from "../functions/MakeSubtitlesObj";
import { useStopwatch } from "react-timer-hook";
import '../stylesheets/WatchTogether.css'
import '../stylesheets/Input.css'
import { ShowYoutube } from "./ShowYoutube";
import { WatchTogetherType } from "../types/WatchTogetherType";
import { YouTubeSearch } from "./YouTubeSearch";
import { PasteClipboard } from "./PasteClipboard";
export const WatchTogether: FC<WatchTogetherType> = ({ ShowYouTube }) => {
    const [isThumbnail, setIsThumbnail] = useState(true);
    const [InputUrl, setInputUrl] = useState("")
    // const [InputData, setInputData] = useState("")
    const [YoutubeId, setYoutubeId] = useState("iFg-bFAu2AU")
    const [Now, setNow] = useState(0)
    const [subtitlesObjList, setsubtitlesObjList] = useState<subtitlesObjListType[]>([])
    const { seconds, minutes, hours, days, start, pause, reset } =
        useStopwatch({ autoStart: false });
    const InputData = useRef<HTMLInputElement>(null!);

    const GetSubTitleObj = (URL: string) => {
        if (URL !== "") {
            var data = {
                "url": URL
            };
            var config = {
                method: 'post',
                url: 'https://english-conversation-for-you-backend.azurewebsites.net/youtubeDlSubtitles',
                // url: 'https://ec2-13-112-150-63.ap-northeast-1.compute.amazonaws.com:8000/youtubeDlSubtitles',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': 'ec2-13-112-150-63.ap-northeast-1.compute.amazonaws.com'
                },
                data: data
            };
            axios(config)
                .then(function (response) {
                    const VttData = JSON.stringify(response.data)
                    // debugger
                    const preList = MakeSubtitlesObj(VttData)
                    setsubtitlesObjList(preList)
                    start()
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    const InitThisPage = () => {
        let URL = InputData.current.value
        const VideoId = GetYouTubeVideoId(URL)
        setInputUrl(URL)
        setYoutubeId(VideoId)
        reset()
        pause()
        GetSubTitleObj(URL)
        setIsThumbnail(true)
    }

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

    return (
        <div className="WatchTogether">
            {ShowYouTube ? (
                // <div className="YouTubeCanvas">
                <div className="ShowArea">
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
                            <div>
                                <ShowYoutube
                                    start={start}
                                    pause={pause}
                                    YoutubeId={YoutubeId}
                                />
                            </div>
                            <div>
                                <ShowSubtitles subtitlesObjList={subtitlesObjList}
                                    Now={Now}
                                />
                            </div>
                        </div>
                    )}
                </div>
                // </div>
            ) : (
                <div className="YouTubeCanvas">
                </div>
            )}
            <div className="InputArea">
                <YouTubeSearch />
                <PasteClipboard setInputUrl={setInputUrl} />
            </div>
        </div>
    );
}