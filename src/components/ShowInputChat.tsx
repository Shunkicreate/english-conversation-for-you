import { FC } from "react"
import "../stylesheets/ShowChat.css";

export const ShowInputChat: FC<{ InputText: string }> = ({ InputText }) => {
    return (
        <div className="ShowChat InputChat">
            <div className="ChatArea">
                <div className="You OneChat">
                    <div className="person">You</div>
                    <div className="message default">{InputText}</div>
                </div>
            </div>
        </div>
    )
}