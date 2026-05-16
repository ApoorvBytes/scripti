"use client";

import ReactMarkdown from
"react-markdown";

type Props = {

  role:
  "user" | "assistant";

  content: string;
};

export default function Message({

  role,
  content

}: Props) {

  const isUser =
  role === "user";

  return (

    <div className={`
      w-full
      flex

      ${isUser
        ? "justify-end"
        : "justify-start"
      }
    `}>

      <div className={`

        max-w-3xl

        px-6
        py-5

        rounded-3xl

        leading-8

        text-[15px]

        ${isUser

          ? "bg-black text-white"

          : "bg-white border border-gray-200 text-black"
        }

      `}>

        <ReactMarkdown>

          {content}

        </ReactMarkdown>

      </div>

    </div>
  );
}