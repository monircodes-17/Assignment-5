🚀 Dev Stack Builder

A modern and responsive Dev Stack Builder website built with React.js, TypeScript, Tailwind CSS, React Toastify, Vite, and JSON data. Users can explore different technologies and build their own development stack.

🌐 Live Site

View Live Site

📦 GitHub Repository

View Repository

✨ Features
📱 Fully responsive design for mobile, tablet, and desktop
🧑‍💻 Browse technologies from local JSON data
➕ Add technologies to your development stack
🚫 Prevent duplicate technologies from being added
🗑️ Remove individual technologies
🧹 Remove all selected technologies at once
🔢 Display the total number of selected technologies
🔔 Toast notifications using React Toastify
⏳ Loading state while technology data is being loaded
📭 Empty stack state
🧩 Reusable React components
🔷 TypeScript interfaces for type safety
🎨 Shared orange → pink → violet gradient design
🛠️ Technologies Used
React.js
TypeScript
Tailwind CSS
React Toastify
Vite
JSON Data
📖 Project Overview

Dev Stack Builder helps developers explore popular development technologies and create a personalized technology stack.

Technology information is stored in a local JSON file and loaded dynamically using React's useEffect. Users can add technologies to their stack, remove individual items, or clear the entire stack.

The project focuses on responsive UI, reusable components, TypeScript type safety, state management, and a clean user experience.

📂 Project Structure
Assignment-5/
├── public/
│   └── technologies.json
│
├── src/
│   ├── assets/
│   │   └── logo-text.png
│   │
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── TechnologyCard.tsx
│   │   ├── StackSidebar.tsx
│   │   └── Footer.tsx
│   │
│   ├── types/
│   │   └── technology.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── index.html
├── package.json
├── vite.config.ts
└── README.md
⚙️ Installation & Setup

Clone the repository:

git clone https://github.com/monircodes-17/Assignment-5.git

Go to the project directory:

cd Assignment-5

Install dependencies:

npm install

Run the development server:

npm run dev

Build the project:

npm run build
⚛️ React Questions & Answers
1. What is JSX, and why is it used?

JSX stands for JavaScript XML. It allows us to write HTML-like syntax inside JavaScript or TypeScript.

It makes React components easier to write and understand.

const App = () => {
  return <h1>Hello React</h1>;
};
2. What is the difference between Props and State?

Props are used to pass data from a parent component to a child component. Props are read-only.

State is used to store and manage data that can change inside a component.

Props → Parent → Child
State → Data managed inside a component
3. What is the useState hook and where is it used?

useState is a React Hook used to create and manage state in a functional component.

In this project, it is used to manage:

Technology data
Selected stack
Loading state

Example:

const [stack, setStack] = useState<Technology[]>([]);
4. What is the useEffect hook and why is it used to load JSON data?

useEffect is a React Hook used for performing side effects.

In this project, useEffect is used to fetch technology data from the local JSON file when the application loads.

useEffect(() => {
  fetch(`${import.meta.env.BASE_URL}technologies.json`)
    .then((response) => response.json())
    .then((data) => setTechnologies(data));
}, []);
5. Why is a unique key required when rendering a list in React?

React uses a unique key to identify individual elements in a list.

It helps React efficiently update only the elements that have changed.

Example:

{technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))}

Here, technology.id is used as the unique key.

6. How can you conditionally render something in React?

Conditional rendering means displaying different UI based on a condition.

For example:

{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <p>{stack.length} technologies selected.</p>
)}

If the stack is empty, the first message is displayed. Otherwise, the selected technology count is displayed.

7. How do you pass data from a parent component to a child component? And how does a child component communicate with its parent?

A parent component can pass data to a child component using props.

<TechnologyCard
  technology={technology}
  selected={selected}
  onAdd={handleAdd}
/>

The child can communicate back to the parent by receiving a callback function through props and calling it.

onAdd(technology);

Here, App.tsx passes handleAdd to TechnologyCard, and TechnologyCard calls it when the user clicks Add to Stack.

❓ FAQ
Can this project be deployed anywhere?

Yes. The project can be deployed on platforms such as Netlify, Vercel, or GitHub Pages with the appropriate Vite configuration.

Is TypeScript required?

TypeScript is used in this project for better type safety and developer experience, but the same project concept can also be implemented using JavaScript.

Can the title, logo, and colors be changed?

Yes. The title, logo, typography, colors, and other UI elements can be customized according to the project requirements.

Where are the technology icons from?

The technology icons are loaded using Simple Icons CDN.

👨‍💻 Developer

Md. Mehidy Hasan Monir

Built as a Programming Hero Assignment 5 — Dev Stack Builder project.

📄 License

This project was created as part of a Programming Hero assignment for educational purposes.