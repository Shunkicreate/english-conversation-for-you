import "../stylesheets/ShareTwitter.css"
import { FC } from "react";
export const ShareTwitter:FC<{txt:string}> = ({txt}) => {
    const _url = new URL("https://twitter.com/intent/tweet");
    if (txt !== undefined) _url.searchParams.set("text", txt);
    return (
        <div id="widget">
            <div className="btn-o" data-scribe="component:button"><a href={_url.toString()} className="btn" id="b" target="_blank" rel="noopener noreferrer" ><i></i><span className="label" id="l">Share Chat in Twitter</span></a></div>
        </div>
    )
}