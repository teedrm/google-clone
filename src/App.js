import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom';

function App() {
  return (
    // BEM
    <div className="App">
      <Router>
        <Routes>
          <Route path="/search" element={<h1>Search Page</h1>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
