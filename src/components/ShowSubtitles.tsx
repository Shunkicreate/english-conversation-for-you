import { subtitlesObjListType } from "../types/subtitlesObjListType"
import { useEffect, useState, FC } from "react";
type Props = {
    subtitlesObjList: subtitlesObjListType[];
    Now: number;
};
export const ShowSubtitles: FC<Props> = ({ subtitlesObjList, Now }) => {
    const [Index, setIndex] = useState(0)
    useEffect(() => {
        if (subtitlesObjList.length > 0) {
            if (Now > subtitlesObjList[Index].start) {
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

    }, [Now, Index, subtitlesObjList])

    return (
        <div>
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