# 🧑‍💻 AI-Powered Research Assistant (Chrome Extension + Spring Boot)

An AI-powered research and coding assistant built as a Chrome Extension with a Spring Boot backend.  
It integrates with **Google Gemini API** to provide intelligent insights, debugging support, and research summarization.

---

## 🚀 Features
- 📑 **Summarize Articles** – Quickly extract key insights from web pages and articles.  
- 🛠 **Code Debugging** – Identify and fix issues in code snippets.  
- 📝 **Code Explanation** – Explain code logic in simple terms.  
- 📚 **Summarization** – Condense long code or research text into short, meaningful summaries.  
- ⚡ **Code Optimization** – Suggest improvements for better performance and readability.  
- ✅ **Test Case Generation** – Automatically create sample test cases for given code.  

---

## 🛠 Tech Stack
- **Backend:** Java, Spring Boot  
- **Frontend:** Chrome Extension (HTML, CSS, JS)  
- **AI Integration:** Google Gemini API  
- **Testing & Debugging:** Postman  

---

## 📂 Project Structure
Research-Assistant/
│── backend/ # Spring Boot backend (REST API + Gemini integration)
│── extension/ # Chrome extension frontend
│── docs/ # Documentation and screenshots
│── README.md # Project documentation


---

## ⚙️ Installation & Setup

### Backend (Spring Boot)
1. Clone the repo:
   ```bash
   git clone https://github.com/ishant212/Research-Assistant.git
   cd Research-Assistant/backend
   gemini.api.url=https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=
   gemini.api.key=YOUR_API_KEY
   mvn spring-boot:run
   Chrome Extension

    Open Chrome → Go to chrome://extensions/.

    Enable Developer Mode (top right).

    Click Load unpacked → Select the extension/ folder.

    Pin the extension for easy access.

    🧪 Usage

    Select a code snippet or article text in your browser.
  
    Open the extension and choose an action: Summarize / Explain / Debug / Optimize / Test Cases.

    The backend (Spring Boot + Gemini API) processes the request and returns results instantly.

👥 Team

This project was developed collaboratively with my friend and colleague Kulin Mathur.

My contributions (Vaayu): Backend development with Spring Boot, REST API design, Gemini API integration.

Kulin's contributions: Chrome Extension frontend development and integration with backend services.

📌 Future Improvements

Add download notes feature to export insights as .txt files.

Support for multi-language programming assistance.

Add user authentication for personalized usage.

📜 License

This project is open-source under the APACHE License.
Feel free to fork and improve! 🚀



