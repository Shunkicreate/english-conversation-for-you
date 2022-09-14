import { FC, useEffect, useState } from "react"
import { TextInput } from "./TextInput"
import { VoiceInput } from "./VoiceInput"
import { ChatType } from "../types/ChatType"
import { ShowInputChat } from "./ShowInputChat"
import "../stylesheets/InputComponent.css"
import Type from "../assets/Type.svg"
import { ShareTwitter } from "./ShareTwitter";
import Speak from "../assets/Speak.svg"
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
                <ShareTwitter txt={"hello world"}/>
                <ShowInputChat InputText={InputText} />
            </div>
            <div className="InputComponent">
                <div onClick={ChangeMode}>
                    {Mode === "Voice" ? (
                        <img className="ModeButton" src={Speak} alt="Speak" />
                    ) : (
                        <img className="ModeButton" src={Type} alt="Type" />
                    )}
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
            {/* <div>
                {Submit ? ('speakingtrue') : ('false')}
                <div>
                    {window.speechSynthesis.speaking ? ('true') : ('false')}
                </div>
                <div>
                    {window.speechSynthesis.onvoiceschanged ? ('true') : ('false')}
                </div>
                <div>
                    {window.speechSynthesis.paused ? ('true') : ('false')}
                </div>
                <div>
                    {window.speechSynthesis.pending ? ('true') : ('false')}
                </div>
            </div> */}

        </div>
    )

}