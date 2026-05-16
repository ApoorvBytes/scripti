"use client";

import { useState } from "react";

import Sidebar from "./Sidebar";
import ChatWindow from "./ChatWindow";

export type MessageType = {

  role:
  "user" | "assistant";

  content: string;
};

const defaultMessage: MessageType = {

  role: "assistant",

  content:
`# Hello 👋

I am **Scripti**.

Your AI-powered C# assistant.

Ask me anything about C# and .NET.`
};

export default function ChatLayout() {

  const [messages, setMessages] =
  useState<MessageType[]>([
    defaultMessage
  ]);

  function clearChat() {

    setMessages([
      defaultMessage
    ]);

    localStorage.removeItem(
      "scripti_messages"
    );
  }

  function addPrompt(
    prompt: string
  ) {

    setMessages(prev => [

      ...prev,

      {
        role: "user",
        content: prompt
      }
    ]);
  }

  return (

    <main className="
      h-screen
      flex
      bg-[#f8fafc]
    ">

      <Sidebar

        onClearChat={
          clearChat
        }

        onPromptClick={
          addPrompt
        }

      />

      <ChatWindow

        messages={messages}

        setMessages={setMessages}

      />

    </main>
  );
}