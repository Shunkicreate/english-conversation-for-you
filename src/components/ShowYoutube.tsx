import YouTube from "react-youtube"
import { FC } from "react";
import { ShowYouTubeType } from "../types/ShowYouTubeType";
import { useWindowSize, calWidth, calHeight } from "../functions/useWindowSize";
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

    const [width] = useWindowSize();

    const opts = {
        width: calWidth(width),
        height: calHeight(width),
        playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
            cc_load_policy: 0,
            controls: 0,
            disablekb: 1,
            fs: 0,
            iv_load_policy: 3,
            modestbranding: 1,
            playsinline: 1,
            rel: 0,
            // mute: true,
        },
    }

    return (
            <YouTube
                videoId={YoutubeId}
                opts={opts}
                onStateChange={(e) => { onPlayerStateChange(e.data);console.log(e.data) }}
            />
    )

}