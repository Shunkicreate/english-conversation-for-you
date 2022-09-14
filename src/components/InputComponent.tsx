import { FC, useEffect, useState } from "react"
import { TextInput } from "./TextInput"
import { VoiceInput } from "./VoiceInput"
import { ChatType } from "../types/ChatType"
import { ShowInputChat } from "./ShowInputChat"
import "../stylesheets/InputComponent.css"
import Type from "../assets/Type.svg"
import { ShareTwitter } from "./ShareTwitter";
import Speak from "../assets/Speak.svg"
import { MakeTweet } from "../functions/MakeTweet";

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
        if (Submit && InputText !== "") {
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
            <div className="TwitterAndInput">
                <ShareTwitter txt={MakeTweet(ChatDatas)}/>
                <ShowInputChat InputText={InputText} />
            </div>
            <div className="InputComponent">
                <div onClick={ChangeMode}>
                    {Mode === "Voice" ? (
                        <img className="ModeButton" src={Type} alt="Type" />
                    ) : (
                        <img className="ModeButton" src={Speak} alt="Speak" />
                    )}
                </div>
                {Mode === "Voice" ? (

                    <VoiceInput
                        InputText={InputText}
                        setInputText={setInputText}
                        setSubmit={setSubmit}
                    />
                ) : (
                    <TextInput
                        InputText={InputText}
                        setInputText={setInputText}
                        setSubmit={setSubmit}
                    />
                )}
            </div>
        </div>
    )

}