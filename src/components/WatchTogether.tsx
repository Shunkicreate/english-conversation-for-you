import { useState } from "react";
import { GetVttFile } from "../functions/GetVttFile";
export const WatchTogether = () => {
    const [isThumbnail, setIsThumbnail] = useState(true);
    const [VttData, setVttData] = useState("")
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
        </div>
    );

}