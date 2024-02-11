import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { useState } from 'react';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  BrowserRouter
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';

    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
              <Route exact path="/"  element={<TextForm heading="Enter the text to analyze" />}>
              </Route>
            </Routes>
        </div>
      </BrowserRouter>


    </>

  );
}

export default App;
