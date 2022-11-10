import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage";
import ImagePage from "./components/ImagePage";
import NewsPage from "./components/NewsPage";
import About from "./components/About"
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/nasa-watch" element={<Homepage />} />
        <Route path="/nasa-watch/images" element={<ImagePage />} />
        <Route path="/nasa-watch/news" element={<NewsPage />} />
        <Route path="/nasa-watch/about" element={<About />} />
        <Route path="/nasa-watch/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
