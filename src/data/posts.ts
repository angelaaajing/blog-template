export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  imageUrl?: string;
}

export const posts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with React',
    excerpt: 'Learn the basics of React and how to set up your first project.',
    content: `
# Getting Started with React

React is a JavaScript library for building user interfaces. It's maintained by Facebook and a community of individual developers and companies.

## Why React?

React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

## Creating Your First Component

\`\`\`jsx
function HelloWorld() {
  return <h1>Hello, world!</h1>;
}
\`\`\`

This is a simple React component that renders a heading. React components can be written as functions or classes.
    `,
    date: '2023-05-10',
    author: 'Jane Smith',
    imageUrl: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '2',
    title: 'Working with React Hooks',
    excerpt: 'Explore React Hooks and how they can simplify your code.',
    content: `
# Working with React Hooks

Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

## useState Hook

The useState hook lets you add React state to function components.

\`\`\`jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## useEffect Hook

The useEffect Hook lets you perform side effects in function components.

\`\`\`jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = \`You clicked \${count} times\`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`
    `,
    date: '2023-06-15',
    author: 'John Doe',
    imageUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '3',
    title: 'State Management in React',
    excerpt: 'Different approaches to managing state in your React applications.',
    content: `
# State Management in React

As your application grows, managing state becomes more complex. Here are some approaches to state management in React.

## Context API

React Context provides a way to pass data through the component tree without having to pass props down manually at every level.

\`\`\`jsx
// Create a context
const ThemeContext = React.createContext('light');

// Provider component
function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

// Consumer component
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button theme={theme}>Themed Button</button>;
}
\`\`\`

## Redux

Redux is a predictable state container for JavaScript apps.

\`\`\`jsx
// Action
const increment = () => {
  return {
    type: 'INCREMENT'
  };
};

// Reducer
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
};

// Store
const store = createStore(counterReducer);
\`\`\`
    `,
    date: '2023-07-22',
    author: 'Alex Johnson',
    imageUrl: 'https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  },
]; 