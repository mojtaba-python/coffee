import './App.css';
import HomePage from './components/Navbar/HomePage.jsx';
import Footer from './components/footer/Footer.jsx';
import 'react-multi-carousel/lib/styles.css';
import AboutPage from './components/aboutPage/AboutPage.jsx';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Navbar/Nav.jsx';
import { useState } from 'react';
import Article from './components/Article/Article.jsx';


const App = () => {

  const [count, setState] = useState(1);

  const inc = ()=>{
   
    setState(count+1);
  };

  const dec = ()=>{
    setState(count-1);
  };

  return (
    <>
    <Nav/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage inc={inc} dec={dec} count={count} />} />
        <Route path='/article' element={<Article/>}  />
      </Routes>
      <Footer />
    </>
  )
}

export default App;

