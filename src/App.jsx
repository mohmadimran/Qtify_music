import {Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/HomeContent';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <Navbar />      
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  );
}

export default App;
