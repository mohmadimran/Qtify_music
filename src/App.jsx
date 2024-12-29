import {Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero_section/heroSection';
import CardSection from "./components/card_data/CardSection";
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
        <Routes>
          <Route path="/" element={<CardSection />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  );
}

export default App;
