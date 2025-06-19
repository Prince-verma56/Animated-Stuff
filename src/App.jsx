import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';

 function useLenis() {
        useEffect(() => {
            const lenis = new Lenis({
                duration: 3.2,
                lerp:11,
                smooth: true,
            });

            function raf(time) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);

            return () => {
                lenis.destroy();
            };
        }, []);
    }






    
    
    function App() {
      
      useLenis();
  return (
    <>

    
      {/* <Home /> */}

<div className="page1  w-full h-auto bg-[#12141D] overflow-x-hidden">
  <Home/>
  </div>
  
    </>
  );
}

export default App;