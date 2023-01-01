import './App.css';
import { lazy, Suspense } from 'react';
import Header from './Component/Header';
import { Route, Routes } from 'react-router-dom';
import Main from './Component/Main';
import Detail from './Component/Detail';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
