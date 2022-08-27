import { FC } from "react"
import { TextUploaderType } from "../types/TextUploaderType";
import { db } from "./Firebase";
import { ref, set, update } from "firebase/database";
import { CurrentTimeDataType } from "../types/CurrentTimeDataType";
import { GetCurrentTime } from "./GetCurrentTime";
import { MakeUploadData } from "./MakeUploadData";
export const TextUploader: FC<TextUploaderType> = ({ ChatDatas, Uid }) => {
    console.log("ChatDatas in text uploader", ChatDatas)
    const currenttimedata: CurrentTimeDataType = GetCurrentTime()
    const uploadData = MakeUploadData( currenttimedata, ChatDatas)
    update(ref(db, 'uids/' + Uid + '/' + Math.trunc(currenttimedata.unix)), {
        uploadData
    }).then((result)=>{
        console.log(result)
    }).catch((e)=>{
        console.log("e", e)
    })
    return null;
};
