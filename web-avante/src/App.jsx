import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import News from './pages/News';
import Contact from './pages/Contact';
import './styles/global.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/novedades" element={<News />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
