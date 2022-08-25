import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Homepage from './components/Homepage';


function App() {
  return (
    <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
    </Router>
  );
}

export default App;
