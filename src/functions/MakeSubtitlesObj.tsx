import { subtitlesObjListType } from "../types/subtitlesObjListType"
export const MakeSubtitlesObj: (subtitles: string) => subtitlesObjListType[] = (subtitles) => {
    subtitles = subtitles.replaceAll('\\n', '\n')
    subtitles = subtitles.replaceAll('\n\n\n', '\n\n')
    var subtitlesObj = subtitles.split('\n\n')
    subtitlesObj = subtitlesObj.slice(1)
    if (subtitlesObj[subtitlesObj.length - 1] === "\n") {
        subtitlesObj = subtitlesObj.slice(0, -1)
    }
    const subtitlesObjList: subtitlesObjListType[] = []
    for (var i of subtitlesObj) {
        if (i.slice(0, 2) === '\n') {
            i = i.slice(2)
        }
        const dataList = i.split('\n')
        if (dataList.length < 3 || dataList[0] === "") continue
        const curId = dataList[0]
        const strtime = dataList[1]
        var text = dataList[2]
        const re = /\d+:\d+:\d+.\d* /;
        const times = re.exec(strtime)
        var scecond = 0
        if (times) {
            const time = times[0]
            const timeList = time.split(':')
            var alfa = 3600
            for (var j = 0; j < 3; j++) {
                scecond += parseFloat(timeList[j]) * alfa
                alfa /= 60
            }
        }
        const addData: subtitlesObjListType = {
            start: scecond,
            text: text,
            curId: curId
        }
        subtitlesObjList.push(addData)
    }
    return subtitlesObjList
}