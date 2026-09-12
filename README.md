# Dev Stack

## About

Dev Stack is a modern technology stack management website built with React, TypeScript, Tailwind CSS, and React-Toastify.

Users can explore different technologies and build their own development stack by adding and removing technologies.

## Technologies Used

* React.js
* TypeScript
* Tailwind CSS
* React-Toastify
* JSON
* Vite

## Features

* Explore different technologies with their icon, name, description, category, difficulty, rating, and badge.
* Add technologies to the "Your Stack" section.
* Prevent duplicate technologies from being added.
* Remove individual technologies from the stack.
* Remove all selected technologies at once.
* Show toast notifications for add, duplicate, remove, and remove-all actions.
* Sticky navigation bar.
* Loading state while technology data is being loaded.

## React Questions

### 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript. It makes React components easier to write and understand.

### 2. What is the difference between props and state?

Props are data passed from a parent component to a child component. State is data managed inside a component that can change over time.

### 3. What does the useState hook do, and where did you use it in this project?

useState is used to store and update data inside a React component. In this project, I used useState to manage the technologies selected in the "Your Stack" section.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is used to perform side effects in React, such as fetching data or interacting with external systems.

I did not use useEffect in this project. Instead, I used React's use() API with Suspense to read the Promise containing the technology data from the local JSON file.

### 5. Why does every item in a .map() list need a unique key prop?

React uses the key to identify each item in a list. A unique key helps React efficiently update the correct item when the list changes.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. In this project, the "Your Stack" section shows an empty message when no technology is selected and shows the selected technologies when items are added.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child component using props. A child can send information back to the parent by calling a function that the parent passes as a prop.

## Live Site

https://b14-a05-dev-stack-67uu.vercel.app/

## GitHub Repository

https://github.com/protiva-coders/B14-A05-DevStack
