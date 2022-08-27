import { FC } from "react"
import { TextUploaderType } from "../types/TextUploaderType";
import { db } from "./Firebase";
import { ref, set } from "firebase/database";
import { CurrentTimeDataType } from "../types/CurrentTimeDataType";
import { GetCurrentTime } from "./GetCurrentTime";
export const TextUploader: FC<TextUploaderType> = ({ ChatDatas, Uid }) => {
    console.log("ChatDatas in text uploader", ChatDatas)
    const currenttimedata: CurrentTimeDataType = GetCurrentTime()
    set(ref(db, 'uids/' + Uid), {
        currenttimedata
    }).then((result)=>{
        console.log(result)
    }).catch((e)=>{
        console.log(e)
    })
    return null;
};
