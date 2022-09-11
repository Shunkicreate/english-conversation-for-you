import { FC, useEffect, useState } from "react"
import { TextInput } from "./TextInput"
import { VoiceInput } from "./VoiceInput"
import { ChatType } from "../types/ChatType"
import { ShowInputChat } from "./ShowInputChat"
import "../stylesheets/InputComponent.css"
export const InputComponent: FC<{ ChatDatas: ChatType[], setChatDatas: React.Dispatch<React.SetStateAction<ChatType[]>>, DoChat: boolean, setDoChat: React.Dispatch<React.SetStateAction<boolean>> }> = ({ ChatDatas, setChatDatas, DoChat, setDoChat }) => {
    const [InputText, setInputText] = useState("")
    const [Mode, setMode] = useState("Voice")
    const [Submit, setSubmit] = useState(false)

    const ChangeMode = () => {
        if (Mode === "Voice") {
            setMode("Type")
        }
        else if (Mode === "Type") {
            setMode("Voice")
        }
    }

    useEffect(() => {
        if (Submit) {
            const addData: ChatType = {
                person: "You",
                message: InputText,
            };
            setChatDatas([...ChatDatas, addData]);
            setSubmit(false)
            setDoChat(true)
            setInputText("")
        }
    }, [Submit])
    return (
        <div>
            <ShowInputChat InputText={InputText} />
            <div className="InputComponent">
                <div onClick={ChangeMode}>
                    change mode
                </div>
                {Mode === "Voice" ? (
                    <VoiceInput
                        // ChatDatas={ChatDatas}
                        // setChatDatas={setChatDatas}
                        // DoChat={DoChat}
                        // setDoChat={setDoChat}
                        InputText={InputText}
                        setInputText={setInputText}
                        setSubmit={setSubmit}
                    />
                ) : (
                    <TextInput
                        // ChatDatas={ChatDatas}
                        // setChatDatas={setChatDatas}
                        // setDoChat={setDoChat}
                        InputText={InputText}
                        setInputText={setInputText}
                        setSubmit={setSubmit}
                    />
                )}

            </div>
        </div>
    )

}