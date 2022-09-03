import { subtitlesObjListType } from "../types/subtitlesObjListType"
import { useStopwatch } from "react-timer-hook";
import { useEffect, useState, FC } from "react";
type Props = {
    subtitlesObjList: subtitlesObjListType[];
};
export const ShowSubtitles: FC<Props> = ({ subtitlesObjList }) => {
    // debugger
    const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
        useStopwatch({ autoStart: true });
    const [Index, setIndex] = useState(0)
    useEffect(() => {
        const now = seconds + 60 * (minutes + 60 * (hours + 24 * days))
        if(subtitlesObjList.length > 1){
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
                    <h1>react-timer-hook</h1>
                    <p>Stopwatch Demo</p>
                    <div style={{ fontSize: "100px" }}>
                        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
                        <span>{seconds}</span>
                    </div>
                    <p>{isRunning ? "Running" : "Not running"}</p>
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
                    <div>
                        {subtitlesObjList.map((obj) => <div>{obj.text}</div>)}
                    </div>
                </div>


            )}
        </div>
    )
}