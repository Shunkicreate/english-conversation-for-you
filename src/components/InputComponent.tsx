import { FC, useState } from "react"
import { TextInput } from "./TextInput"
import { VoiceInput } from "./VoiceInput"
import { ChatType } from "../types/ChatType"
import { ShowInputChat } from "./ShowInputChat"
export const InputComponent: FC<{ ChatDatas: ChatType[], setChatDatas: React.Dispatch<React.SetStateAction<ChatType[]>>, DoChat: boolean, setDoChat: React.Dispatch<React.SetStateAction<boolean>> }> = ({ ChatDatas, setChatDatas, DoChat, setDoChat }) => {
    const [InputText, setInputText] = useState("")

    return (
        <div>
            <ShowInputChat InputText={InputText} />
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
                InputText={InputText}
                setInputText={setInputText}
            />
        </div>
    )

}