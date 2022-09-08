import { FC } from "react"
import { TextUploaderType } from "../types/TextUploaderType";
import { db } from "./Firebase";
import { ref, update } from "firebase/database";
import { CurrentTimeDataType } from "../types/CurrentTimeDataType";
import { GetCurrentTime } from "./GetCurrentTime";
import { MakeUploadData } from "./MakeUploadData";
export const TextUploader: FC<TextUploaderType> = ({ concattedChatDatas, Uid }) => {
    console.log("ChatDatas in text uploader", concattedChatDatas.slice(-2))
    const currenttimedata: CurrentTimeDataType = GetCurrentTime()
    const uploadData = MakeUploadData( currenttimedata, concattedChatDatas)
    update(ref(db, 'uids/' + Uid + '/' + Math.trunc(currenttimedata.unix)), {
        uploadData
    }).then((result)=>{
        console.log(result)
    }).catch((e)=>{
        console.log("e", e)
    })
    return null;
};
