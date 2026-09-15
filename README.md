# 🚀 Dev Stack Builder

A modern and responsive **Dev Stack Builder** website built with React, TypeScript, and Tailwind CSS. Users can explore different developer tools and build their preferred development stack.

## 🌐 Live Site

[View Live Site](https://cosmic-froyo-663eb3.netlify.app/)

## 📦 GitHub Repository

[View Repository](https://github.com/monircodes-17/Assignment-5)

---

## 🛠️ Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- React Toastify
- Vite
- JSON Data

---

## ✨ Features

- Responsive design for mobile, tablet, and desktop devices
- Browse different developer technologies
- Add technologies to a personal development stack
- Prevent duplicate technologies from being added
- Remove individual technologies from the stack
- Remove all selected technologies at once
- Display the number of selected technologies
- Toast notifications for user actions
- Loading state while fetching JSON data
- Empty stack state
- Reusable React components
- Type-safe development using TypeScript
- Data management using local JSON files

---

## 📋 Project Overview

The **Dev Stack Builder** helps developers explore useful development technologies and create their own customized development stack.

Users can:

1. Explore available developer technologies.
2. View technology information.
3. Add preferred technologies to their stack.
4. Remove technologies from their stack.
5. Clear their selected stack easily.

---

## 💻 Run the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/monircodes-17/Assignment-5.git
2. Go to the project folder
cd Assignment-5
3. Install dependencies
npm install
4. Start the development server
npm run dev

Now open the local development URL shown in the terminal.

5. Build for production
npm run build
📁 Project Structure
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
❓ React Questions and Answers
1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript.

It is used in React because it makes UI code easier to read and write.

2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component.

State is used to store and manage data inside a component. When state changes, React updates the UI.

3. What does the useState hook do, and where did you use it in this project?

useState is a React Hook used to create and manage state in a functional component.

In this project, it is used in App.tsx to manage:

Technology data
Selected stack
Loading state

It is also used in Navbar.tsx to manage the mobile menu.

Example:

const [stack, setStack] = useState<Technology[]>([]);
4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is used to perform side effects in a React component.

In this project, useEffect is used to load the technology data from the local JSON file when the component is mounted.

Example:

useEffect(() => {
  fetch(`${import.meta.env.BASE_URL}technologies.json`)
    .then((response) => response.json())
    .then((data) => {
      setTechnologies(data);
    });
}, []);
5. Why does every item in a .map() list need a unique key prop?

React uses the key prop to identify each item in a list.

A unique and stable key helps React efficiently update, add, or remove list items.

Example:

{technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))}
6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI based on a condition.

In this project, the stack displays an empty message when no technology has been selected.

Example:

{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <div>
    {/* Selected technologies */}
  </div>
)}
7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child component through props.

In this project, App.tsx passes the technology data and the onAdd function to TechnologyCard.

<TechnologyCard
  technology={technology}
  selected={...}
  onAdd={handleAdd}
/>

The child component can send information back to the parent by calling a function received through props.

onClick={() => onAdd(technology)}

Here, TechnologyCard calls the onAdd function defined in App.tsx.

❔ Frequently Asked Questions
Is this project responsive?

Yes. The website is designed to work on mobile, tablet, and desktop devices.

Can users create their own development stack?

Yes. Users can add and remove technologies to create a customized development stack.

Is TypeScript used in this project?

Yes. TypeScript is used for type safety and better code maintainability.

Is the project deployed online?

Yes. The project is deployed on Netlify.

👨‍💻 Developer

Md. Mehidy Hasan Monir

Aspiring Web Developer

Learning modern web development with React, TypeScript, and modern frontend technologies.

📄 License

This project was created as part of a Programming Hero assignment for educational purposes.