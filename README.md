# 🚀 Dev Stack Builder

A modern and responsive **Dev Stack Builder** built with React, TypeScript, and Tailwind CSS. Explore technologies and build your own development stack.

## 🌐 Live Site

[View Live Site](https://cosmic-froyo-663eb3.netlify.app/)

## 📦 GitHub Repository

[View Repository](https://github.com/monircodes-17/Assignment-5)

---

## ✨ Features

- 📱 Fully responsive design
- 🧑‍💻 Explore different development technologies
- ➕ Add technologies to your stack
- 🚫 Prevent duplicate technologies
- 🗑️ Remove individual technologies
- 🧹 Remove all selected technologies
- 🔢 Show selected technology count
- 🔔 Toast notifications with React Toastify
- ⏳ Loading state for JSON data
- 🧩 Reusable React components
- 🔷 TypeScript type safety

---

## 🛠️ Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- React Toastify
- Vite
- JSON

---

## 📂 Project Structure

```text
src/
├── assets/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── TechnologyCard.tsx
│   ├── StackSidebar.tsx
│   └── Footer.tsx
├── types/
│   └── technology.ts
├── App.tsx
├── main.tsx
└── index.css

public/
└── technologies.json
⚙️ Installation
git clone https://github.com/monircodes-17/Assignment-5.git
cd Assignment-5
npm install
npm run dev
⚛️ React Questions
1. What is JSX, and why is it used?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript. It makes React components easier to write and understand.

2. What is the difference between Props and State?

Props are used to pass data from a parent component to a child component.
State is used to store and manage data that can change inside a component.

3. What is the useState hook and where is it used?

useState is a React Hook used to manage component state. In this project, it manages technologies, selected stack, and loading state.

4. What is the useEffect hook and why is it used to load JSON data?

useEffect is used to handle side effects. Here, it is used to load technology data from the local JSON file when the application starts.

5. Why is a unique key required when rendering a list in React?

A unique key helps React identify each list item and efficiently update the UI when the list changes.

6. How can you conditionally render something in React?

Conditional rendering displays different UI based on a condition.

{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <p>{stack.length} technologies selected.</p>
)}
7. How do you pass data from a parent component to a child component? How does a child communicate with its parent?

A parent passes data and functions to a child through props. The child can communicate with the parent by calling a callback function received through props.

👨‍💻 Developer

Md. Mehidy Hasan Monir

Built as a Programming Hero Assignment 5 project.

📄 License

This project was created for educational purposes as part of a Programming Hero assignment.