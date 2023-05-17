import { ChatType } from '../../../types/ChatType';

export const MakeTweet = (ChatDatas: ChatType[]) => {
    let tweet = ""
    for( let i = ChatDatas.length - 1; i >= 0; i--){
        tweet = ChatDatas[i].person + ": " + ChatDatas[i].message + "\n" + tweet
        if(tweet.length > 100){
            break;
        }
    }
    return tweet;
}