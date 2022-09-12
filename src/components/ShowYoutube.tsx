import YouTube from "react-youtube"
import { FC, useLayoutEffect, useState } from "react";
import { ShowYouTubeType } from "../types/ShowYouTubeType";
import { useWindowSize } from "../functions/useWindowSize";
export const ShowYoutube: FC<ShowYouTubeType> = ({
    start,
    pause,
    YoutubeId,
}) => {

    const onPlayerStateChange = (num: number) => {
        if (num === 1) {
            start()
        }
        else if (num === 2) {
            pause()
        }
    }

    const [width, height] = useWindowSize();
    // const width = () => {
    //     if (window.innerWidth > 1280) {
    //         return Math.round(window.innerWidth / 3)
    //     }
    //     return 1280
    // };
    // const height = () => {
    //     if (window.innerHeight > 720) {
    //         return Math.round(window.innerHeight / 3)
    //     }
    //     return 1280
    // };
    const opts = {
        height: width,
        width: height,
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
        <div>
            <div>
                {width}{height}
            </div>
            <YouTube
                videoId={YoutubeId}
                opts={opts}
                onStateChange={(e) => { onPlayerStateChange(e.data) }}
            />

        </div>
    )

}