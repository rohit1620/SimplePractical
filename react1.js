/* ✅ REACT PRACTICAL CHEATSHEET */

// 1. Basic Functional Component
function Hello() {
  return <h1>Hello World</h1>;
}

// 2. Props Usage
function Welcome(props) {
  return <h1>Welcome, {props.name}</h1>;
}

// 3. useState Hook
import { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}

// 4. useEffect Hook
import { useEffect } from 'react';
function Timer() {
  useEffect(() => {
    console.log('Component mounted');
  }, []);
  return <p>Timer running...</p>;
}

// 5. useRef Hook
import { useRef } from 'react';
function InputFocus() {
  const inputRef = useRef(null);
  return (
    <>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </>
  );
}

// 6. useContext Hook
const ThemeContext = React.createContext();
function ThemedButton() {
  const theme = React.useContext(ThemeContext);
  return <button style={{ background: theme }}>Click Me</button>;
}

// 7. Conditional Rendering
function LoginStatus({ isLoggedIn }) {
  return isLoggedIn ? <p>Welcome Back</p> : <p>Please Log In</p>;
}

// 8. List Rendering
const users = ['John', 'Jane', 'Alice'];
function UserList() {
  return (
    <ul>
      {users.map(user => <li key={user}>{user}</li>)}
    </ul>
  );
}

// 9. Form Handling
function MyForm() {
  const [value, setValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}

// 10. Fetch API Data
import { useEffect, useState } from 'react';
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);
  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}

// 11. Inline and Module CSS
function Styled() {
  return <div style={{ color: 'blue' }}>Styled Text</div>;
}
// CSS Modules example (Styled.module.css)
// .highlight { color: red; }
// import styles from './Styled.module.css';
// <div className={styles.highlight}>Red Text</div>

// 12. React Router Basics
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function Home() { return <h2>Home</h2>; }
function About() { return <h2>About</h2>; }
function AppRouter() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

// 13. Redux Toolkit Basics
// store.js
// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './counterSlice';
// export const store = configureStore({ reducer: { counter: counterReducer } });

// counterSlice.js
// import { createSlice } from '@reduxjs/toolkit';
// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: { value: 0 },
//   reducers: {
//     increment: (state) => { state.value += 1; },
//     decrement: (state) => { state.value -= 1; }
//   }
// });
// export const { increment, decrement } = counterSlice.actions;
// export default counterSlice.reducer;

// 14. Lazy Loading Components
import { lazy, Suspense } from 'react';
const LazyComponent = lazy(() => import('./LazyComponent'));
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}

// 15. Code Splitting by Route
// Use lazy + Suspense with React Router routes
// see example in #14 above

// 16. Error Boundaries
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return <h1>Something went wrong.</h1>;
    return this.props.children;
  }
}
