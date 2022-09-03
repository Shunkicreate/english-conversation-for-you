export const GetYouTubeVideoId = (url: string) => {
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
    return "";
}