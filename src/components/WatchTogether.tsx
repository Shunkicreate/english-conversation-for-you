import { useEffect, useState } from "react";
import { GetVttFile } from "../functions/GetVttFile";
import axios from 'axios';

export const WatchTogether = () => {
    const [isThumbnail, setIsThumbnail] = useState(true);
    const [VttData, setVttData] = useState("")
    useEffect(()=>{
        var data = {
            "url": "https://www.youtube.com/watch?v=i0ShMDZ_q-U"
        };
    
        var config = {
            method: 'post',
            url: 'http://127.0.0.1:5000/youtubeDlSubtitles',
            headers: {
                'Content-Type': 'application/json',
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
    const youtubeId = 'pmG6JxkVzKM';
    return (
        <div className="WatchTogether">
            {isThumbnail ? (
                <img
                    src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
                    onClick={() => setIsThumbnail(false)}
                    alt="サムネイル"
                />
            ) : (
                <iframe
                    src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            )}
            {/* <div>{VttData}</div> */}
        </div>
        
    );

}