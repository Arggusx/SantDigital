import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Feedback from './components/Feedback';
import Misterio from './pages/Misterios';
import Leituras from './pages/Leituras';
import Tutorial from './pages/Tutorial';
import Oracoes from './pages/Oracoes';
import Footer from './components/Footer';

function App() {

  return (
    <Router>
      <Header/> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home/misterio" element={<Misterio />} />
        <Route path="/home/leituras" element={<Leituras />} />
        <Route path="/home/tutorial" element={<Tutorial />} />
        <Route path="/home/oracoes" element={<Oracoes />} />
      </Routes>
      <Feedback/>
      <Footer/>
    </Router>
  )
}

export default App
