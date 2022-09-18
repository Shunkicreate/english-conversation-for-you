import { PasteClipboardType } from '../types/PasteClipboardType';
import { useState, FC } from 'react';
import { GetYouTubeVideoId } from "../functions/GetYouTubeVideoId";

export const PasteClipboard: FC<PasteClipboardType> = ({ setInputUrl }) => {
    const [Text, setText] = useState("")
    const handleClick = () => {
        navigator.clipboard.readText().then(function (data) {
            console.log("Your string: ", data);
            setText(data)
            setInputUrl(data)
        });
    }
    return (
        <div className='PasteClipboard'>
            <div className="button" onClick={() => { handleClick() }}>
                <div>
                    Click to Paste YouTube link
                </div>
                <div className="setsumei" style={{fontSize: 1 , }}>
                    共有からではなくURLの入力
                </div>
                <div>
                    id: {GetYouTubeVideoId(Text)}
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}