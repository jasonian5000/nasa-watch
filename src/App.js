import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Homepage from './components/Homepage';
import ImagePage from './components/ImagePage';
import NewsPage from './components/NewsPage';
import NotFound from './components/NotFound';


function App() {
  return (
    <Router>
      <div className='root-container'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/images" element={<ImagePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
