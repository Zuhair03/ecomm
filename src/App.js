import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';  // Make sure the filename matches exactly
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
