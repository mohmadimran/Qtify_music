import {Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/HomeContent';
import AlbumDetails from "./components/album_details"
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <Navbar />      
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/album/:slug" element={<AlbumDetails/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  );
}

export default App;
