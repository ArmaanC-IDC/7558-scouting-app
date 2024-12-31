import QrCodePage from './pages/QrCodePage';
import PreMatchPage from './pages/PreMatch';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem('data');
    if (JSON.parse(savedData)){
      return JSON.parse(savedData);
    }
    return {};
  });

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
    console.log(JSON.stringify(data))
  }, [data]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/QrCodeGenerator" element={<QrCodePage data={JSON.stringify(data)}/>}/>
        <Route path="/PreMatch" element={<PreMatchPage updateData={setData} data={data}/>}/>
        <Route path="/*" element={<p>HIHIHI</p>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
