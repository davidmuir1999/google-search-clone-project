import './App.css';
import Home from './Pages/Home';
import Result from './Pages/SearchResult';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/search" element={<Result/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
