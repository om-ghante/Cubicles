import React from 'react';
import './App.css';
import launchimg from './assets/launch.gif';

function App() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <img src={launchimg} alt="Launching Animation" className="w-auto max-w-full" />
      </div>
    </>
  );
}

export default App;
