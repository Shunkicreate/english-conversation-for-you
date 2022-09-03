import { subtitlesObjListType } from "../types/subtitlesObjListType"
import { useStopwatch } from "react-timer-hook";
import { useEffect, useState, FC } from "react";
type Props = {
    subtitles: string;
};
export const ShowSubtitles: FC<Props> = ({ subtitles }) => {
    const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
        useStopwatch({ autoStart: true });
    // var subtitles = "WEBVTT\n\ncue-id-0\n0:00:04.360000 --> 0:00:13.960000\n[Music] God's country\n\ncue-id-1\n0:00:08.010000 --> 0:00:16.690000\nhas changed for\n\ncue-id-2\n0:00:13.960000 --> 0:00:20.670000\nthousands of years,\n\ncue-id-3\n0:00:16.690000 --> 0:00:20.670000\nbut it is\n\ncue-id-4\n0:00:21.390000 --> 0:00:31.030000\nfar from NOW\n\ncue-id-5\n0:00:25.830000 --> 0:00:34.210000\nThe dream of\n\ncue-id-6\n0:00:31.030000 --> 0:00:37.310000\nthe phantom shuoyu\n\ncue-id-7\n0:00:34.210000 --> 0:00:39.390000\ndistrict is obsessive\n\ncue-id-8\n0:00:37.310000 --> 0:00:41.480000\n In some\n\ncue-id-9\n0:00:39.390000 --> 0:00:44.450000\nsense, strange craving,\n\ncue-id-10\n0:00:41.480000 --> 0:00:47.040000\nthe school of\n\ncue-id-11\n0:00:44.450000 --> 0:00:51.899000\nlearning, the white\n\ncue-id-12\n0:00:47.040000 --> 0:00:51.899000\nstrong shogun Naoi\n\ncue-id-13\n0:00:53.300000 --> 0:00:58.660000\nNancan NANCAN Eaen\n\ncue-id-14\n0:00:59.500000 --> 0:01:02.630000\nall the closest\n\ncue-id-15\n0:01:01.550000 --> 0:01:06.159000\nto Tenri, yeah\n\ncue-id-16\n0:01:02.630000 --> 0:01:07.530000\nyeah yeah yeah\n\ncue-id-17\n0:01:06.159000 --> 0:01:11.560000\nyeah yeah yeah\n\ncue-id-18\n0:01:07.530000 --> 0:01:14.100000\nyeah yeah yeah\n\ncue-id-19\n0:01:11.560000 --> 0:01:15.420000\nyeah yeahThe attributes\n\ncue-id-20\n0:01:14.100000 --> 0:01:17.450000\nwere not limited\n\ncue-id-21\n0:01:15.420000 --> 0:01:17.450000\n[Music] ME2D E\n\ncue-id-22\n0:01:17.600000 --> 0:01:21.170000\nF vision and\n\ncue-id-23\n0:01:22.090000 --> 0:01:28.960000\nthe silence that\n\ncue-id-24\n0:01:24.940000 --> 0:01:33\nexists only in\n\ncue-id-25\n0:01:28.960000 --> 0:01:33\nthe essence of\n\ncue-id-26\n0:01:33.350000 --> 0:01:36.310000\nthe essence AOA\n\ncue-id-27\n0:01:34.650000 --> 0:01:39.180000\nyeah yeah yeah\n\ncue-id-28\n0:01:36.310000 --> 0:01:42.200000\nyeah yeah, yeah\n\ncue-id-29\n0:01:39.180000 --> 0:01:42.200000\nyeah yeah yeah\n\ncue-id-30\n0:01:43.150000 --> 0:01:47.890000\nyeahMusic] [Music] Watching\n\ncue-id-31\n0:01:44.850000 --> 0:01:50.890000\nyour mouth is\n\ncue-id-32\n0:01:47.890000 --> 0:01:50.890000\na drinking shop\n\ncue-id-33\n0:01:53.200000 --> 0:01:59.800000\ndream \n\ncue-id-34\n0:01:55.490000 --> 0:01:59.800000\n\n\ncue-id-35\n0:02:02.290000 --> 0:02:05.389000\n\n\ncue-id-36\n0:02:11.610000 --> 0:02:24.569000\n\n\ncue-id-37\n0:02:21.069000 --> 0:02:26.670000\n\n\ncue-id-38\n0:02:24.569000 --> 0:02:29.140000\n\n\ncue-id-39\n0:02:26.670000 --> 0:02:32.670000\n\n\ncue-id-40\n0:02:29.140000 --> 0:02:32.670000\n\n\n"
    subtitles = subtitles.replace('\n\n\n', '\n\n')
    var subtitlesObj = subtitles.split('\n\n')
    subtitlesObj = subtitlesObj.slice(1)
    if (subtitlesObj[subtitlesObj.length - 1] === "\n") {
        subtitlesObj = subtitlesObj.slice(0, -1)
    }
    var subtitlesObjList: subtitlesObjListType[] = []
    for (var i of subtitlesObj) {
        // debugger
        if (i.slice(0, 2) === '\n') {
            i = i.slice(2)
        }
        const dataList = i.split('\n')
        if (dataList.length < 3 || dataList[0] === "") continue
        const curId = dataList[0]
        const strtime = dataList[1]
        var text = dataList[2]
        const re = /\d+:\d+:\d+.\d* /;
        const times = re.exec(strtime)
        var scecond = 0
        if (times) {
            const time = times[0]
            const timeList = time.split(':')
            var alfa = 3600
            for (var j = 0; j < 3; j++) {
                scecond += parseFloat(timeList[j]) * alfa
                alfa /= 60
            }
        }
        const addData: subtitlesObjListType = {
            start: scecond,
            text: text,
            curId: curId
        }
        subtitlesObjList.push(addData)
        console.log(i)
    }
    const [Index, setIndex] = useState(0)
    useEffect(() => {
        const now = seconds + 60 * (minutes + 60 * (hours + 24 * days))
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
            <div>
                {subtitlesObjList[Index].text}
            </div>
            <div>
                {subtitlesObjList.map((obj) => <div>{obj.text}</div>)}
            </div>
        </div>
    )
}