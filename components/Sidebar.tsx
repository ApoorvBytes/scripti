import {
  MessageSquarePlus,
  Code2
} from "lucide-react";

type Props = {

  onClearChat: () => void;

  onPromptClick:
  (prompt: string) => void;
};

export default function Sidebar({

  onClearChat,
  onPromptClick

}: Props) {

  const topics = [

    "Explain inheritance in C#",

    "Write bubble sort in C#",

    "Explain LINQ",

    "Explain ADO.NET",

    "Explain multithreading",

    "Explain delegates"
  ];

  return (

    <aside className="
      w-[260px]
      border-r
      border-gray-200
      bg-white
      flex
      flex-col
      justify-between
      p-5
    ">

      <div>

        <div className="
          flex
          items-center
          gap-3
          mb-8
        ">

          <div className="
            w-11
            h-11
            rounded-2xl
            bg-black
            flex
            items-center
            justify-center
            text-white
          ">

            <Code2 size={20} />

          </div>

          <div>

            <h1 className="
              text-2xl
              font-semibold
              text-black
            ">
              Scripti
            </h1>

            <p className="
              text-sm
              text-gray-600
            ">
              C# AI Assistant
            </p>

          </div>

        </div>

        <button

          onClick={onClearChat}

          className="
            w-full
            bg-black
            text-white
            py-3
            rounded-2xl
            flex
            items-center
            justify-center
            gap-2
            hover:bg-gray-900
            transition
            mb-10
          "
        >

          <MessageSquarePlus
            size={18}
          />

          New Chat

        </button>

        <div>

          <p className="
            text-xs
            font-semibold
            tracking-wide
            text-gray-500
            mb-4
          ">
            SUGGESTED TOPICS
          </p>

          {topics.map((item) => (

            <div

              key={item}

              onClick={() =>
                onPromptClick(item)
              }

              className="
                text-black
                py-3
                px-3
                rounded-xl
                hover:bg-gray-100
                cursor-pointer
                transition
                text-[15px]
              "
            >

              {item}

            </div>

          ))}

        </div>

      </div>

      <div className="
        border
        border-gray-200
        rounded-2xl
        p-4
      ">

        <p className="
          font-semibold
          text-black
          mb-2
        ">
          Scripti AI
        </p>

        <p className="
          text-sm
          text-gray-600
          leading-6
        ">

          Specialized AI assistant
          for C# practicals,
          debugging,
          viva preparation,
          and .NET learning.

        </p>

      </div>

    </aside>
  );
}