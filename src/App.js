import './App.css';
// components
import Navbar from './component/Navbar';
import Social from './component/Social';
import Header from './component/Header';
import Features from './component/Features';
import Menu from './component/Menu';
import Category from './component/Category';
import Mobapp from './component/Mobapp';
import Clients from './component/Clients';
import ScrollTop from './component/ScrollTop';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <div className="header-holder">
        <Navbar/>
        <Social/>
        <Header/>
        <Features/>
        <Category/>
        <Menu/>
        <Mobapp/>
        <Clients/>
        <ScrollTop/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
