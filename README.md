# Scripti

AI-powered C# Assistant for practicals, debugging, viva preparation, and .NET learning.

---

## Overview

Scripti is a modern AI-powered C# assistant built using Next.js, Groq AI, and a custom practical-program knowledge base.

It helps students and developers:

* Learn C# concepts
* Generate practical programs
* Debug errors
* Prepare for vivas
* Understand .NET concepts
* Practice OOP and DSA programs
* Get AI-generated explanations instantly

The project combines:

* AI chat interface
* Markdown rendering
* Syntax-highlighted code blocks
* Persistent chat history
* Program retrieval system
* Modern ChatGPT-style UI

---

## Features

### AI-Powered Chat

* Groq LLM integration
* Real-time AI responses
* C#-focused assistant behavior

### Smart C# Knowledge Base

* Supports 300+ practical programs
* Context-aware program retrieval
* Dynamic prompt injection

### Modern UI

* Clean minimal interface
* Responsive layout
* ChatGPT-inspired design
* Smooth user experience

### Developer Experience

* Markdown support
* Syntax-highlighted code blocks
* Copy-friendly responses
* Persistent local chat history

### Educational Support

* Practical programs
* Viva preparation
* OOP explanations
* LINQ and ADO.NET help
* Debugging assistance

---

## Tech Stack

### Frontend

* Next.js 15
* React
* TypeScript
* TailwindCSS

### AI

* Groq API
* Llama 3.3 70B Versatile

### Libraries

* react-markdown
* react-syntax-highlighter
* lucide-react

---

## Screenshots

Add screenshots here after deployment.

Example:

```md
![Home](./screenshots/home.png)
```

---

## Folder Structure

```text
scripti/
│
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts
│   │
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── ChatInput.tsx
│   ├── ChatLayout.tsx
│   ├── ChatWindow.tsx
│   ├── Message.tsx
│   └── Sidebar.tsx
│
├── data/
│   └── programs.json
│
├── public/
│
├── .env.local
├── package.json
└── README.md
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/scripti.git
```

Go to project directory:

```bash
cd scripti
```

Install dependencies:

```bash
npm install
```

Create environment file:

```env
GROQ_API_KEY=YOUR_API_KEY
```

Run development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Environment Variables

```env
GROQ_API_KEY=YOUR_GROQ_API_KEY
```

---

## Deployment

Deploy easily using:

* Vercel
* Netlify
* Railway

Recommended:

* Vercel

---

## Future Improvements

* Streaming AI responses
* Vector database RAG
* PDF upload support
* Semantic search
* Multi-chat support
* Authentication
* Voice input
* Dark mode
* AI code execution sandbox

---

## Author

Built by Apoorv Khobragade

---

## License

MIT License

---

## Acknowledgements

* Groq
* Next.js
* TailwindCSS
* React Markdown
* Open Source Community
