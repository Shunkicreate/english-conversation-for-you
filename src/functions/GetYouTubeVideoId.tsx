export const GetYouTubeVideoId = (url: string) => {
    if ( url.match( /youtu\.be/ )){
        // debugger
    const videoidString = url.substring(17)
    if(videoidString.includes( "?" )){
        const newarray = videoidString.split("?")
        return newarray[0]
    }
    else return videoidString
    // let videoidString = url.substring(17)
    }
    else{
        const name = 'v'
        // debugger
        let queryString = url.split('?');
        if (queryString.length >= 2) {
            let paras = queryString[1].split('&');
            for (let i = 0; i < paras.length; i++) {
                let eachPara = paras[i].split('=');
                if (eachPara[0] === name) return eachPara[1];
            }
        }
    }
    return "";
}