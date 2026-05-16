"use client";

import { useState } from "react";

import { SendHorizontal }
from "lucide-react";

type Props = {
  onSend: (message: string) => void;
};

export default function ChatInput({
  onSend
}: Props) {

  const [text, setText] =
  useState("");

  function handleSend() {

    if (!text.trim()) return;

    onSend(text);

    setText("");
  }

  return (

    <div className="
      px-8
      py-6
      bg-[#f8fafc]
    ">

      <div className="
        max-w-5xl
        mx-auto
        flex
        items-center
        gap-3
        bg-white
        border
        border-gray-200
        rounded-3xl
        px-4
        py-3
      ">

        <input

          value={text}

          onChange={(e) =>
            setText(e.target.value)
          }

          onKeyDown={(e) => {

            if (e.key === "Enter") {
              handleSend();
            }
          }}

          placeholder="
Ask anything about C#...
          "

          className="
            flex-1
            bg-transparent
            outline-none
            text-black
            placeholder:text-gray-500
            text-[15px]
            px-2
          "
        />

        <button

          onClick={handleSend}

          className="
            w-11
            h-11
            rounded-2xl
            bg-black
            text-white
            flex
            items-center
            justify-center
            hover:bg-gray-900
            transition
          "
        >

          <SendHorizontal
            size={18}
          />

        </button>

      </div>

    </div>
  );
}