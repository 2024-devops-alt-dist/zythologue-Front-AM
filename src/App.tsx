import './App.css'
import { Routes, Route } from "react-router"
import HomePage from './Pages/HomePage'
import Header from './components/Header'
import Footer from './components/Footer'
import PageBiere from './Pages/PageBiere'
import PageBrasserie from './Pages/PageBrasserie'


function App() {
  return (
    <> 
    <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/PageBiere" element={<PageBiere />} />
        <Route path="/PageBrasserie" element={<PageBrasserie />} />
      </Routes>
    <Footer />
    </>
  );
}



export default App;
