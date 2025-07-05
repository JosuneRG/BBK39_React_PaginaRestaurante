
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Reserve from './components/Reserve';
import Home from './components/Home';
import Galery from './components/Galery';
import Header from './components/Header';
import SavedData from './components/ShowDataLocalStorage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galery" element={<Galery />} />
          <Route path="/saved" element={<SavedData />} />
          <Route path="/reserve" element={<Reserve />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
