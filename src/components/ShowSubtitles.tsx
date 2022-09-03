import { subtitlesObjListType } from "../types/subtitlesObjListType"
import { useStopwatch } from "react-timer-hook";
import { useEffect, useState, FC } from "react";
type Props = {
    subtitlesObjList: subtitlesObjListType[];
};
export const ShowSubtitles: FC<Props> = ({ subtitlesObjList }) => {
    const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
        useStopwatch({ autoStart: true });
    const [Index, setIndex] = useState(0)
    useEffect(() => {
        const now = seconds + 60 * (minutes + 60 * (hours + 24 * days))
        if(subtitlesObjList.length > 0){
            if (now > subtitlesObjList[Index].start) {
                if (Index === subtitlesObjList.length - 1) {
                    const addData: subtitlesObjListType = {
                        start: Infinity,
                        text: 'end',
                        curId: 'cur-id-inf'
                    }
                    subtitlesObjList.push(addData)
                }
                setIndex(Index + 1)
            }
        }

    }, [days, hours, minutes, seconds])

    return (
        <div>
            <div>
                <div style={{ textAlign: "center" }}>
                    <div>
                        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
                        <span>{seconds}</span>
                    </div>
                    <button onClick={start}>Start</button>
                    <button onClick={pause}>Pause</button>
                    <button
                        onClick={reset as unknown as React.MouseEventHandler<HTMLButtonElement>}
                    >
                        Reset
                    </button>
                </div>
            </div>
            {(subtitlesObjList.length === 0) ? (
                <div>no obj</div>
            ) : (
                <div>
                    <div>
                        {subtitlesObjList[Index].text}
                    </div>
                </div>


            )}
        </div>
    )
}