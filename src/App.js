import React, { useEffect } from 'react';
import './App.css';
import Welcome from './components/welcome';
import { trackPageView } from './utils/monitoring';

function App() {
  useEffect(() => {
    // Track page view when the app loads
    trackPageView(window.location.pathname);
  }, []);

  return (
    <div className="App">
      <Welcome />
    </div>
  );
}

export default App;