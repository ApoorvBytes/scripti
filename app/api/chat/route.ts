import Groq from "groq-sdk";

import programs from
"@/data/programs.json";

const groq = new Groq({

  apiKey:
  process.env.GROQ_API_KEY

});

function findRelevantPrograms(
  query: string
) {

  const lower =
  query.toLowerCase();

  return programs.filter(

    (program: any) =>

      program.title
      .toLowerCase()
      .includes(lower)

      ||

      program.tags.some(
        (tag: string) =>

          lower.includes(
            tag.toLowerCase()
          )
      )

  ).slice(0, 5);
}

export async function POST(
  req: Request
) {

  try {

    const body =
    await req.json();

    const relevantPrograms =
    findRelevantPrograms(
      body.message
    );

    const programContext =

      relevantPrograms
      .map((p: any) =>

`
TITLE:
${p.title}

CODE:
${p.content}
`
      )
      .join("\n\n");

    const completion =
    await groq.chat.completions.create({

      model:
      "llama-3.3-70b-versatile",

      messages: [

        {
          role: "system",

          content:
`
You are Scripti.

You are an expert AI assistant
specialized in:
- C#
- .NET
- practical programs
- debugging
- viva preparation

Use the provided program
examples when relevant.

Always use markdown.

Always wrap C# code inside:

\`\`\`csharp
code
\`\`\`
`
        },

        {
          role: "system",

          content:
`
PROGRAM DATABASE:

${programContext}
`
        },

        {
          role: "user",

          content:
          body.message
        }
      ],

      temperature: 0.4,

      max_tokens: 2000

    });

    return Response.json({

      reply:

      completion
      .choices[0]
      .message
      .content

    });

  }

  catch(error) {

    console.log(error);

    return Response.json({

      reply:
      "Error generating response."
    });
  }
}