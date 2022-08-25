import "../stylesheets/ShowChat.css";
import { FC, useEffect, useState } from "react";
import { FCOneChatType } from '../../types/FCOneChatType'

export const OneChat = (person: string, message: string) => {
    if (person === "AI" || person === "OpenAI") {
      return (
        <div className="AI OneChat">
          <div className="person">{person}</div>
          <div className="message">{message}</div>
        </div>
      );
    }
    return (
      <div className="You OneChat">
        <div className="person">{person}</div>
        <div className="message">{message}</div>
      </div>
    );
  };

export const FCOneChat: FC<FCOneChatType> = ({person, message}) => {
    useEffect(()=>{
        console.log(message)
    }, [message])
    if (person === "AI" || person === "OpenAI") {
      return (
        <div className="AI OneChat">
          <div className="person">{person}</div>
          <div className="message">{message}</div>
        </div>
      );
    }
    return (
      <div className="You OneChat">
        <div className="person">{person}</div>
        <div className="message">{message}</div>
      </div>
    );
  };