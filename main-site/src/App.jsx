import React, { useState } from 'react';
import SplashScreen from './components/pages/SplashScreen';
import HomePage from './components/pages/HomePage';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="App">
      {showSplash ? (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      ) : (
        <HomePage />
      )}
    </div>
  );
}

export default App;