import YouTube from "react-youtube"
export const ShowYoutube = () => {

    const onPlayerReady = () => {
        console.log('onPlayerReady')
    }
    const onPlayerPlaybackQualityChange = () => {
        console.log('onPlayerPlaybackQualityChange')
    }
    const onPlayerStateChange = () => {
        console.log('onPlayerStateChange')
    }
    const onPlayerError = () => {
        console.log('onPlayerError')
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
        },
    }

    return (
        <YouTube
            videoId="1eFq21yT1vE"
            opts={opts}
            onStateChange={(e) => {onPlayerStateChange()}}

        />
    )

}