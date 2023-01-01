import './App.css';
import { lazy, Suspense } from 'react';
import Header from './Component/Header';
import { Route, Routes } from 'react-router-dom';
import Main from './Component/Main';
import * as React from 'react';
import Detail from './Component/Detail';

// const Detail = lazy(() => import('./Component/Detail').then(({ Detail }: any) => ({ default: Detail })));

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <React.Suspense fallback={<div>...</div>}> */}
        <Route path="/detail/:id" element={<Detail />} />
        {/* </React.Suspense> */}
      </Routes>
    </div>
  );
}

export default App;
