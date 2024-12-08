import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className=" mx-auto w-full">
      <div className=' sticky top-0 z-[10000]'>
      <Header/>
      </div>
      <Home/>
      <Footer/>
      
    </div>
  );
}

export default App;
