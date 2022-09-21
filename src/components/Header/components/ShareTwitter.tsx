import "./ShareTwitter.css"
import { FC } from "react";
export const ShareTwitter:FC<{txt:string}> = ({txt}) => {
    const _url = new URL("https://twitter.com/intent/tweet");
    if (txt !== undefined) _url.searchParams.set("text", txt);
    _url.searchParams.set("hashtags", "withAI");
    _url.searchParams.set("url", "https://with-ai.netlify.app/");
    return (
        <div id="widget">
            <div className="btn-o" data-scribe="component:button"><a href={_url.toString()} className="btn" id="b" target="_blank" rel="noopener noreferrer" ><i></i><span className="label" id="l">Share</span></a></div>
        </div>
    )
}
//参考: https://blog.stin.ink/articles/put-twitter-share-button