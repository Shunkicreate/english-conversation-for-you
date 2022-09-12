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
import { ChatType } from "../types/ChatType"
export const WatchTogether: FC<WatchTogetherType> = ({ ShowYouTube, ChatDatas, setChatDatas }) => {
    const [isThumbnail, setIsThumbnail] = useState(true);
    const [InputUrl, setInputUrl] = useState("")
    const [YoutubeId, setYoutubeId] = useState("")
    const [Now, setNow] = useState(0)
    const [subtitlesObjList, setsubtitlesObjList] = useState<subtitlesObjListType[]>([])
    const { seconds, minutes, hours, days, start, pause, reset } =
        useStopwatch({ autoStart: false });
    const InputData = useRef<HTMLInputElement>(null!);
    const timeDelay = 2
    const [Index, setIndex] = useState(0)

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
                    const preList = MakeSubtitlesObj(VttData)
                    setsubtitlesObjList(preList)
                    start()
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    useEffect(() => {
        if (InputUrl) {
            let URL = InputUrl
            const VideoId = GetYouTubeVideoId(URL)
            setInputUrl(URL)
            setYoutubeId(VideoId)
            reset()
            pause()
            GetSubTitleObj(URL)
            setIsThumbnail(true)
        }

    }, [InputUrl])

    useEffect(() => {
        setYoutubeId(GetYouTubeVideoId(InputUrl))
        // if(InputData){
        //     InitThisPage()
        // }
    }, [InputData, InputUrl])

    useEffect(() => {
        if (subtitlesObjList.length > 0) {
            setIsThumbnail(false)
        }
    }, [subtitlesObjList])


    useEffect(() => {
        setNow(seconds + 60 * (minutes + 60 * (hours + 24 * days)) - timeDelay)
    }, [days, hours, minutes, seconds])

    useEffect(() => {
        if (subtitlesObjList.length > 0) {
            if (Now > subtitlesObjList[Index].start) {
                if (Index === subtitlesObjList.length - 1) {
                    const addData: subtitlesObjListType = {
                        start: Infinity,
                        text: 'end',
                        curId: 'cur-id-inf'
                    }
                    subtitlesObjList.push(addData)
                }
                const addData: ChatType = {
                    person: "YTfriend",
                    message: subtitlesObjList[Index].text,
                };
                setChatDatas([...ChatDatas, addData]);
                setIndex(Index + 1)
            }
        }
    }, [Now, Index, subtitlesObjList, ChatDatas, setChatDatas])

    return (
        <div className="WatchTogether">
            {ShowYouTube ? (
                // <div className="YouTubeCanvas">
                <div className="ShowArea">
                    {isThumbnail ? (
                        <div>
                            {YoutubeId === "" ? (
                                <div className="Empty">Please Set YouTube URL</div>
                            ) : (
                                <img
                                    src={`https://img.youtube.com/vi/${YoutubeId}/maxresdefault.jpg`}
                                    onClick={() => setIsThumbnail(false)}
                                    alt="サムネイル"
                                />
                            )}
                        </div>
                    ) : (
                        <ShowYoutube
                            start={start}
                            pause={pause}
                            YoutubeId={YoutubeId}
                        />
                    )}
                </div>
                // </div>
            ) : (
                <div className="YouTubeCanvas">
                </div>
            )}
            <div className="InputArea">
                <YouTubeSearch />
                <PasteClipboard
                    setInputUrl={setInputUrl} />
            </div>
        </div>
    );
}