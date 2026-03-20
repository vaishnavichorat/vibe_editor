# 🧠 Vibecode Editor – AI-Powered Web IDE

Vibecode Editor is a fast and modern **AI-powered web IDE** that runs completely in the browser. It allows developers to write, run, and manage code with real-time execution, AI assistance, and a clean developer-friendly UI.

---

## 🚀 Features

* 🔐 **OAuth Authentication** – Login using Google and GitHub
* 🎨 **Modern UI** – Built with Tailwind CSS and ShadCN UI
* 🌗 **Dark/Light Mode** – Seamless theme switching
* 🧱 **Project Templates** – React, Next.js, Express, Vue, Angular
* 🗂️ **File Explorer** – Create, rename, delete files & folders
* 🖊️ **Monaco Editor Integration** – Syntax highlighting & formatting
* 💡 **AI Code Suggestions** – Smart autocomplete using local LLMs
* ⚙️ **In-Browser Execution** – Run apps using WebContainers
* 💻 **Terminal Support** – Integrated terminal with xterm.js
* 🤖 **AI Chat Assistant** – Get help, explanations, and code refactoring

---

## 🧱 Tech Stack

| Layer          | Technology                       |
| -------------- | -------------------------------- |
| Framework      | Next.js (App Router)             |
| Language       | TypeScript                       |
| Styling        | Tailwind CSS, ShadCN UI          |
| Authentication | NextAuth (Google & GitHub OAuth) |
| Code Editor    | Monaco Editor                    |
| AI             | Ollama (Local LLMs)              |
| Runtime        | WebContainers                    |
| Terminal       | xterm.js                         |
| Database       | MongoDB                          |

---

## 🛠️ Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/vibecode-editor.git
cd vibecode-editor
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Setup Environment Variables

Create a `.env.local` file:

```bash
cp .env.example .env.local
```

Add your credentials:

```env
AUTH_SECRET=your_auth_secret
AUTH_GOOGLE_ID=your_google_client_id
AUTH_GOOGLE_SECRET=your_google_secret
AUTH_GITHUB_ID=your_github_client_id
AUTH_GITHUB_SECRET=your_github_secret
DATABASE_URL=your_mongodb_connection_string
NEXTAUTH_URL=http://localhost:3000
```

---

### 4️⃣ Start AI Model (Ollama)

Make sure Ollama is installed, then run:

```bash
ollama run codellama
```

---

### 5️⃣ Run the App

```bash
npm run dev
```

Visit:
👉 http://localhost:3000

---

## 🎯 Keyboard Shortcuts

| Shortcut     | Action                 |
| ------------ | ---------------------- |
| Ctrl + Space | Trigger AI suggestions |
| Double Enter | Trigger AI suggestions |
| Tab          | Accept AI suggestion   |

---

## 📸 Screenshots


-----

## 📌 Future Improvements

* Multi-user collaboration 👥
* Cloud deployment ☁️
* Plugin system 🔌
* Advanced AI features 🤖

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repo and submit a pull request.

---

## 📜 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgements

* Monaco Editor
* Ollama
* WebContainers
* xterm.js
* NextAuth.js

