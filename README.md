# 🚀 Dev Stack Builder

A modern and responsive **Dev Stack Builder** website built with React, TypeScript, and Tailwind CSS. Users can explore different developer tools and build their preferred development stack.

## 🌐 Live Site

[View Live Site](https://iridescent-rugelach-4df55f.netlify.app/)

## 📦 GitHub Repository

[View Repository](https://github.com/monircodes-17/Assignment-5)

---

## 🛠️ Technologies Used

* React.js
* TypeScript
* Tailwind CSS
* Vite
* JSON Data

---

## ✨ Features

* Responsive design for mobile, tablet, and desktop devices
* Browse different developer tools
* Add tools to a personal development stack
* Remove tools from the selected stack
* Remove all selected tools at once
* Display the number of selected technologies
* Clean and user-friendly interface
* Reusable React components
* Type-safe development using TypeScript
* Data management using local JSON files

---

## 📋 Project Overview

The **Dev Stack Builder** helps developers explore useful development technologies and create their own customized development stack.

Users can:

1. Explore available developer technologies.
2. View technology information.
3. Add preferred technologies to their stack.
4. Remove technologies from their stack.
5. Manage their selected development stack easily.

---

## 💻 Run the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/monircodes-17/Assignment-5.git
```

### 2. Go to the project folder

```bash
cd Assignment-5
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Now open the local development URL shown in the terminal.

---

## 📁 Project Structure

```text
src/
├── assets/
├── components/
├── pages/
├── types/
├── data/
├── App.tsx
├── main.tsx
└── index.css
```

---

## ❓ React Questions and Answers

### 1. What is the difference between state and props?

**Props** are used to pass data from a parent component to a child component.

**State** is used to store and manage data inside a component. When state changes, React updates the user interface.

---

### 2. What is the useState hook?

`useState` is a React Hook used to create and manage state in a functional component.

```tsx
const [count, setCount] = useState(0);
```

Here:

* `count` is the current state value.
* `setCount` is the function used to update the state.
* `0` is the initial value.

---

### 3. What is the purpose of useEffect?

`useEffect` is used to perform side effects in a React component.

Examples:

* Fetching data from an API
* Updating the document title
* Working with timers
* Running code when dependencies change

---

### 4. What is conditional rendering?

Conditional rendering means displaying different UI elements based on a condition.

Example:

```tsx
{isLoggedIn ? <p>Welcome User</p> : <p>Please Login</p>}
```

---

### 5. What is prop drilling?

Prop drilling happens when data is passed through several components using props, even when the middle components do not need that data.

It can be avoided by using:

* Context API
* State management libraries
* Better component structure

---

### 6. What is the difference between controlled and uncontrolled components?

A **controlled component** is managed by React state.

An **uncontrolled component** stores its value inside the DOM and is usually accessed with a ref.

Controlled components are commonly used in React forms.

---

### 7. Why are keys important in React?

Keys help React identify which list items have changed, been added, or been removed.

Example:

```tsx
{tools.map((tool) => (
  <ToolCard key={tool.id} tool={tool} />
))}
```

A key should be unique and stable.

---

## ❔ Frequently Asked Questions

### Is this project responsive?

Yes. The website is designed to work on mobile, tablet, and desktop devices.

### Can users create their own development stack?

Yes. Users can add and remove technologies to create a customized development stack.

### Is TypeScript used in this project?

Yes. TypeScript is used for type safety and better code maintainability.

### Is the project deployed online?

Yes. The project is deployed on Netlify.

---

## 👨‍💻 Developer

**Md. Mehidy Hasan Monir**

Aspiring Web Developer

Learning modern web development with React, TypeScript, and other frontend technologies.

---

## 📄 License

This project was created as part of a Programming Hero assignment.
It is designed to enhance practical knowledge and skills in React, TypeScript,
and modern Frontend Development.