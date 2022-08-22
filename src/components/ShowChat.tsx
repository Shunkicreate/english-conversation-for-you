import { FC, useEffect, useRef } from "react";
import { ShowChatTypes } from "../../types/ShowChatTypes";
import '../stylesheets/ShowChat.css'

const OneChat = (person: string, message: string) => {
    return(
        <div className={`${person}, ${"OneChat"}`}>
            <div className="person">
                {person}
            </div>
            <div className="message">
                {message}
            </div>
        </div>
    )
}

export const ShowChat: FC<ShowChatTypes> = ({ ChatDatas }) => {
    const element = useRef<HTMLDivElement>(null);
    // const scrollDoc =document.getElementById("ShowChat")
    useEffect(() => {
        element?.current?.scrollIntoView();
        console.log(typeof(element))
        // if(element === object){
        //     element.scrollIntoView({behavior:"smooth"}})

        // }
    }, 
    [element])
    // scrollDoc.scrollIntoView({behavior:"smooth"});
  return (
    <div className="ShowChat" ref={element}>
          {ChatDatas.map((ChatData) => (
            OneChat(ChatData.person, ChatData.message)
          ))}
    </div>
  );
};
