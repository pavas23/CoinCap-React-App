
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


export default function App(){
  // document.body.style.background = "linear-gradient(120deg,#233A4E, #9C6DB0)"
  document.body.style.backgroundColor = "black";
  document.body.style.overflowX="hidden";
  document.body.style.overscrollBehaviorX = "none";
  var amt_arr = new Array(50).fill(0);
  var name_arr =  [];

  return(
    <>
    <BrowserRouter>
    <Navbar/>
    <Carousel/>
    <main>
      <div id = "left">
        <Routes>
          <Route path = "/" element = { <Home start = "0" end = "18" amt_arr = {amt_arr} name_arr ={name_arr} key ="one"/>} />
          <Route path = "/two" element = { <Home start = "18"  amt_arr = {amt_arr} name_arr ={name_arr} end = "36" key ="two"/>} />
        </Routes>
      </div>
      <div id = "right">
        <Sidebar/>
      </div>
    </main>
    </BrowserRouter>
    </>
  );
}

 