import { ChatType } from '../types/ChatType';

export const MakeTweet = (ChatDatas: ChatType[]) => {
    let tweet = ""
    for( let i of ChatDatas){
        tweet = i.person + ": " + i.message + "\n" + tweet
        if(tweet.length > 100){
            break;
        }
    }
    return tweet;
}