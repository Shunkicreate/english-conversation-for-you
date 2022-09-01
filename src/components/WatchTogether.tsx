import { useEffect, useState } from "react";
import { GetVttFile } from "../functions/GetVttFile";
import { ShowSubtitles } from "./ShowSubtitles";
import axios from 'axios';

export const WatchTogether = () => {
    const [isThumbnail, setIsThumbnail] = useState(true);
    const [VttData, setVttData] = useState("")
    useEffect(() => {
        var data = {
            "url": "https://www.youtube.com/watch?v=iFg-bFAu2AU"
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
                console.log(JSON.stringify(response.data));
                setVttData(JSON.stringify(response.data))
            })
            .catch(function (error) {
                console.log(error);
            });
    })
    const youtubeId = 'iFg-bFAu2AU';
    return (
        <div className="WatchTogether">
            {isThumbnail ? (
                <img
                    src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
                    onClick={() => setIsThumbnail(false)}
                    alt="サムネイル"
                />
            ) : (
                <div>
                    <iframe
                        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <div>
                        <video src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`} title="YouTube video player">
                            <track default src={VttData} />
                        </video>
                    </div>
                    <ShowSubtitles />
                </div>
            )}
            {/* <div>{VttData}</div> */}
        </div>

    );

}