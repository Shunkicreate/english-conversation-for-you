import { CurrentTimeDataType } from "../types/CurrentTimeDataType";
export const GetCurrentTime: ()=> CurrentTimeDataType = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const day = now.getDay();
    const returnData: CurrentTimeDataType = {
        year: year,
        month: month,
        date: date,
        hour: hour,
        minutes: minutes,
        day: day,
    }
    return returnData
}