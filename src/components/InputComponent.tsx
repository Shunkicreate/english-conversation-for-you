import { FC } from "react"
import { TextInput } from "./TextInputInput"
import { VoiceInput } from "./VoiceInput"
import { ChatType } from "../types/ChatType"

export const InputComponent: FC<{ ChatDatas: ChatType[], setChatDatas: React.Dispatch<React.SetStateAction<ChatType[]>>, DoChat: boolean, setDoChat: React.Dispatch<React.SetStateAction<boolean>> }> = ({ChatDatas, setChatDatas, DoChat, setDoChat}) => {

    return (
        <div>
            <VoiceInput
                ChatDatas={ChatDatas}
                setChatDatas={setChatDatas}
                DoChat={DoChat}
                setDoChat={setDoChat}
            />
            <TextInput
                ChatDatas={ChatDatas}
                setChatDatas={setChatDatas}
                setDoChat={setDoChat}
            />
        </div>
    )

}