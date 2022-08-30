import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Homepage from './components/Homepage';
import ImagePage from './components/ImagePage';
import NewsPage from './components/NewsPage';


function App() {
  return (
    <Router>
      <div className='root-container'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/images" element={<ImagePage />} />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
