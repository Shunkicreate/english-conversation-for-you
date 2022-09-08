import { PasteClipboardType } from '../types/PasteClipboardType';
import { useState, FC } from 'react';
export const PasteClipboard:FC<PasteClipboardType> = ({setInputUrl}) => {
    const [Text, setText] = useState("")
    const handleClick = () => {
        navigator.clipboard.readText().then(function (data) {
            console.log("Your string: ", data);
            setText(data)
            setInputUrl(data)
        });
    }
    return (
        <div className="button" onClick={() => { handleClick() }}>
            Click to Paste YouTube link
            <div>{Text}</div>
        </div>
    )
}