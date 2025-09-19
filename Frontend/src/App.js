import { Routes,Route } from "react-router";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import PhotoGallery from "./pages/PhotoGallery";
import Videos from "./pages/Videos";
import Fanwall from "./pages/Fanwall";
import Biography from "./pages/Biography";
import Jigsaw from "./pages/Jigsaw.js";
import Temp from "./components/Temp.js";
import Games from "./pages/Games.js";
import { useState } from "react";
import Timer from "./components/Timer.jsx";
import BirthdayPage from "./pages/BirthdayPage.js";
import NavBar2 from "./components/NavBar2.js";
import { useContext } from "react";
import { CounterContext } from "./context/CounterContext.js";
import { GiHamburgerMenu } from "react-icons/gi";

function App() {
  const {menuClick,setMenuClick,menuHandler} = useContext(CounterContext);
  return (
    <div className="relative">
        <div className='absolute left-5 top-5 text-4xl cursor-pointer z-[200]'>
              {!menuClick &&
                <GiHamburgerMenu onClick={menuHandler} className=""/>
              }
          </div>
        <div className="fixed top-0 left-0 h-screen z-[10000]">
          <NavBar2/>
        </div>
      <div className="flex min-h-screen w-screen overflow-y-auto overflow-x-hidden app">
        <div className="flex flex-col w-full relative">
          <NavBar/>
          
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/biography" element={<Biography/>}/>
              <Route path="/photo-gallery" element={<PhotoGallery/>}/>
              <Route path="/video" element={<Videos/>}/>
              <Route path="/fanwall" element={<Fanwall/>}/>
              <Route path="/birthday" element={<BirthdayPage/>}/>
              <Route path="/fun-zone" element={<Temp/>}>
                <Route index element={<Games />} />          {/* /fun-zone */}
                  <Route path="games">
                    <Route path="jigsaw" element={<Jigsaw/>} /> {/* /fun-zone/game/jigsaw */}
                  </Route>
            </Route>
            </Routes>
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
