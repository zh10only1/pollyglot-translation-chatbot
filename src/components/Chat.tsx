import React from "react";
import ChatBanner from "./ChatBanner";
import ChatBox from "./ChatBox";

interface ChatProps {
    selectedLanguage: string;
    setSelectedLanguage: React.Dispatch<React.SetStateAction<string>>;
}

const Chat:React.FC<ChatProps> = ({selectedLanguage, setSelectedLanguage}) => {
  return (
    <div className="w-full bg-white p-5 rounded-b-xl">
      <div className="border-2 border-solid border-black p-8 rounded-lg">
        <ChatBanner />
        <ChatBox selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />
      </div>
    </div>
  );
};

export default Chat;
