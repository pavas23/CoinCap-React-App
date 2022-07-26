
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';

import Home from './components/Home';
import Sidebar from './components/Sidebar';

export default function App(){
  // document.body.style.background = "linear-gradient(120deg,#233A4E, #9C6DB0)"
  document.body.style.backgroundColor = "black"

  return(
    <>
    <Navbar/>
    <Carousel/>
    <main>
      <div id = "left">
        <Home/>
      </div>
      <div id = "right">
        <Sidebar/>
      </div>
    </main>


    </>
  );
}

