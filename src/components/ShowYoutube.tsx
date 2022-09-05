import YouTube from "react-youtube"
import { FC, useEffect, useRef } from "react";
import { ShowYouTubeType } from "../types/ShowYouTubeType";
export const ShowYoutube: FC<ShowYouTubeType>= ({
    start,
    pause
}) => {

    const onPlayerStateChange = (num: number) => {
        console.log('onPlayerStateChange')
        console.log(num)
        if(num === 1){
            console.log('playing')
            start()
        }
        else if(num === 2){
            console.log('stopping')
            pause()
        }
    }
    const opts = {
        height: '390',
        width: '640',
        playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            cc_load_policy: 0,
            controls: 0,
            disablekb: 1,
            fs: 0,
            iv_load_policy: 3,
            modestbranding: 1,
            playsinline: 1,
            rel: 0,
            mute: true,
        },
    }

    return (
        <YouTube
            videoId="1eFq21yT1vE"
            opts={opts}
            onStateChange={(e) => {onPlayerStateChange(e.data)}}

        />
    )

}