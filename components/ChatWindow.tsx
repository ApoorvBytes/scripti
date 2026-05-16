"use client";

import {
  useEffect,
  useRef,
  useState
} from "react";

import Message from "./Message";
import ChatInput from "./ChatInput";

import {
  MessageType
}
from "./ChatLayout";

type Props = {

  messages:
  MessageType[];

  setMessages:
  React.Dispatch<
    React.SetStateAction<
      MessageType[]
    >
  >;
};

export default function ChatWindow({

  messages,
  setMessages

}: Props) {

  const [loading, setLoading] =
  useState(false);

  const bottomRef =
  useRef<HTMLDivElement>(null);

  useEffect(() => {

    localStorage.setItem(

      "scripti_messages",

      JSON.stringify(messages)

    );

  }, [messages]);

  useEffect(() => {

    bottomRef.current?.scrollIntoView({

      behavior: "smooth"

    });

  }, [messages, loading]);

  async function sendMessage(
    text: string
  ) {

    if (!text.trim()) return;

    setMessages(prev => [

      ...prev,

      {
        role: "user",
        content: text
      }
    ]);

    setLoading(true);

    try {

      const res =
      await fetch("/api/chat", {

        method: "POST",

        headers: {
          "Content-Type":
          "application/json"
        },

        body: JSON.stringify({

          message: text

        })
      });

      const data =
      await res.json();

      setMessages(prev => [

        ...prev,

        {
          role: "assistant",
          content: data.reply
        }
      ]);

    }

    catch(error) {

      setMessages(prev => [

        ...prev,

        {
          role: "assistant",

          content:
          "Error generating AI response."
        }
      ]);
    }

    setLoading(false);
  }

  return (

    <section className="
      flex-1
      flex
      flex-col
      h-screen
      bg-[#f8fafc]
    ">

      <div className="
        flex-1
        overflow-y-auto
        px-10
        py-8
      ">

        <div className="
          max-w-5xl
          mx-auto
          space-y-6
        ">

          {messages.map((msg, index) => (

            <Message
              key={index}
              role={msg.role}
              content={msg.content}
            />

          ))}

          {loading && (

            <div className="
              bg-white
              border
              border-gray-200
              rounded-3xl
              px-6
              py-5
              w-fit
            ">

              Thinking...

            </div>

          )}

          <div ref={bottomRef} />

        </div>

      </div>

      <ChatInput
        onSend={sendMessage}
      />

    </section>
  );
}