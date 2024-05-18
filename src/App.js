import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/fotter';
import socials from './components/socials';
import Socials from './components/socials';
import Profile from './components/profile';
import About from './components/about';
import SiteRoutes from './routes/siteRoutes';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Projects from './components/projects';
import Products from './components/products';


function App() {
  return (
    <>
    <BrowserRouter><Navbar/>
    <div className='max-w-96 mx-auto bg-white  px-3 pt-3 pb-2 mt-2 rounded-lg'>
      <Routes><Route path="/" element={<Profile />}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/products" element={<Products/>}/></Routes>
      
      
      
      {/*<Profile/>*/}
      {/*<About/>*/}
      <Socials/>
      <Footer/>
    </div>
    </BrowserRouter>
    
    </>
    
    
  );
}

export default App;
