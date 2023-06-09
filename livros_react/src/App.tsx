// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-dark bg-dark ">
        <div className="container justify-content-start">
          <Link to="/" className="navbar-brand">Catálogo</Link>
          <Link to="/dados" className="navbar-brand">Novo</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<LivroLista />} />
        <Route path="/dados" element={<LivroDados />} />
      </Routes>
    </Router>
  );
}

export default App;
