"use client";

import React, { useState } from "react";
import Image from "next/image";
import sendMessageIcon from "@/public/icons/sendBtn.svg";
import ChatMessage from "./ChatMessage";

interface ChatMessage {
  type: string;
  message: string;
}

interface ChatBoxProps {
    selectedLanguage: string;
}

const ChatBox:React.FC<ChatBoxProps> = ({selectedLanguage}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState<string>("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { type: "user", message: input }]);
    console.log(selectedLanguage);
    setInput("");
  };

  return (
    <>
      <div className="w-full max-h-[20rem] overflow-y-auto my-10 flex flex-col gap-3">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            type={message.type}
            message={message.message}
          />
        ))}
      </div>
      <div className="p-3 border border-solid border-gray-500 rounded-md flex flex-row items-center gap-3">
        <input
          type="text"
          placeholder="Chat here..."
          className="w-full focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Image src={sendMessageIcon} className="cursor-pointer" alt="send message" onClick={() => sendMessage()} />
      </div>
    </>
  );
};

export default ChatBox;
