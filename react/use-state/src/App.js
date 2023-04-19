import React, { useState } from 'react';
import './App.css';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const handleThemeChange = () => {
    console.log('handleThemeChange called');
    setDarkTheme(!darkTheme);
  }

  const themeClass = darkTheme ? 'dark' : '';
  console.log('darkTheme:', darkTheme);
  console.log('themeClass:', themeClass);

  return (
    <div className={`App ${themeClass}`}>
      <header className="App-header">
        <button onClick={handleThemeChange}>Switch Theme</button>
        <p>
          Hello World.
        </p>
      </header>
    </div>
  );
}

export default App;
