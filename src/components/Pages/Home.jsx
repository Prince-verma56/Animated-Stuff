import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../Navbar'
import Threads from '../Threads/Threads'

import MediumCard from '../others/cards/MediumCard'
import SquareCard from '../others/cards/SquareCard'
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { CiPlay1 } from "react-icons/ci";
import SpotlightCard from '../SpotlightCard/SpotlightCard';
import { PiMedalDuotone } from "react-icons/pi"
import { AiOutlineRead } from "react-icons/ai"
import { SlEnvolopeLetter } from "react-icons/sl";
import { IoMdPeople } from "react-icons/io";
import CircularGallery from '../CircularGallery/CircularGallery';


import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CgIndieHackers } from "react-icons/cg";
import { FaMediumM } from "react-icons/fa";

import Lenis from 'lenis';
import { useGSAP } from '@gsap/react'


import gsap from 'gsap'

function Home() {
    
    
    const ScrollRef = useRef()
    const ShopRef = useRef()



    const videoRef = useRef(null);
    const [isPaused, setIsPaused] = useState(true);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPaused(false);
        }
    };

    // To toggle play button if video is paused/resumed manually
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handlePause = () => setIsPaused(true);
        const handlePlayEvent = () => setIsPaused(false);

        video.addEventListener('pause', handlePause);
        video.addEventListener('play', handlePlayEvent);

        return () => {
            video.removeEventListener('pause', handlePause);
            video.removeEventListener('play', handlePlayEvent);
        };
    }, []);




    // GSAP Animation Part

useGSAP(() => {
  const tl = gsap.timeline();

  tl.from(".card-container", {
    opacity: 0,
    z: 10,
    rotateY: 45,
    rotateX: 45,
    duration: 1.2,
    delay: 0.7,
    stagger: true
  });

  tl.from(".arrow-area", {
    opacity: 0,
    y: -10,
    z: 10,
    rotateY: 45,
    rotateX: 45,
    duration: 1.2,
    delay: 0.7,
    stagger: true
  });

  // ✅ FIXED THIS BLOCK: no space before comma, use common class or separate cleanly
  tl.from([".card-para", ".btn-cont"], {
    opacity: 0,
    y: -10,
    z: 10,
    height: 10,
    rotateY: 45,
    rotateX: 45,
    duration: 1,
    delay: 0.1,
    stagger: 0.2
  }, "start");

        gsap.from(".page2-head", {
            opacity: 0,
            x: 50,
            y: -10,
            z: 10,
            height: 10,
            rotateY: 45,
            rotateX: 45,
            duration: 1.3,
            delay: 0.4,
            stagger: true,
            scrollTrigger: {
                trigger: ".page2-head",      // This is the element to animate
                scroller: "body",          // ❌ 'scroll' should be 'scroller' if you have a custom scroller
                // markers: true,               // Shows start/end markers
                start: "top 80%",            // Animation starts when .page2-head’s top hits 80% of viewport height
                end: "top 40%",              // Ends earlier for snappier animations
                toggleActions: "play none none reverse", // (optional) Controls animation behavior
            }
        }, "start");

        gsap.from(".company-logos", {
            opacity: 0,
            y: -10,
            x: -50,
            z: 10,
            width: 10,
            rotateY: 45,
            rotateX: 45,
            duration: 2.3,
            delay: 0.4,
            stagger: true,
            scrollTrigger: {
                trigger: ".company-logos",      // This is the element to animate
                scroller: "body",          // ❌ 'scroll' should be 'scroller' if you have a custom scroller
                // markers: true,               // Shows start/end markers
                start: "top 75%",            // Animation starts when .page2-head’s top hits 80% of viewport height
                end: "top 40%",              // Ends earlier for snappier animations
                toggleActions: "play none none reverse", // (optional) Controls animation behavior
            }
        }, "start");

        gsap.from(".video-area", {
            opacity: 0,
            y: -10,

            height: 10,
            rotateY: 45,
            rotateX: 45,
            duration: 1.3,

            stagger: true,
            scrollTrigger: {
                trigger: ".video-area",      // This is the element to animate
                scroller: "body",          // ❌ 'scroll' should be 'scroller' if you have a custom scroller
                // markers: true,               // Shows start/end markers
                start: "top 70%",            // Animation starts when .page2-head’s top hits 80% of viewport height
                end: "top 40%",              // Ends earlier for snappier animations
                toggleActions: "play none none reverse", // (optional) Controls animation behavior
            }

        })


        gsap.from(".page3-left-h1 , .page3-para", {
            opacity: 0,
            x: -40,
            y: -10,

            height: 10,
            rotateX: 90,
            duration: 1.3,
            ease:"power3.inOut",

            stagger: true,
            scrollTrigger: {
                trigger: ".page3-left-h1",           // This is the element to animate
                scroller: "body",            // ❌ 'scroll' should be 'scroller' if you have a custom scroller
                              // Shows start/end markers
                start: "top 72%",            // Animation starts when .page2-head’s top hits 80% of viewport height
                end: "top 40%",    
                          // Ends earlier for snappier animations
                toggleActions: "play none none reverse", // (optional) Controls animation behavior
            }

        })


        gsap.from(".page3-cards", {
            opacity: 0,
            scale:0.4,
            x: 100,
            

            height: 10,
            rotateX: 45,
            rotateY: 40,
            z:30,
            duration: 0.5,
            delay:0.1,
         ease: "slow(0.7,0.7,false)",
            stagger: 0.4,
            scrollTrigger: {
                trigger: ".page3-cards",           // This is the element to animate
                scroller: "body",            
                // markers: true,               // Shows start/end markers
                start: "top 80%",            // Animation starts when .page2-head’s top hits 80% of viewport height
                end: "top 65%",    
                          // Ends earlier for snappier animations
                // toggleActions: "play none none reverse", // (optional) Controls animation behavior
            }})
      
        
        gsap.from(".grade-slider  , .content-of-gradeslider", {
            opacity: 0,
            scaleX:0,
            y: 100,
            width: 10,
            // rotateX: 90,
            duration: 1.5,
           ease: "power3.inOut",
            stagger: true,
            scrollTrigger: {
                trigger: ".grade-slider",          
                scroller: "body",            
                // markers: true,               
                start: "top 70%",            
                end: "top 40%",    
                         
                // toggleActions: "play none none reverse", 
            }})
        
   gsap.from(".slider-bottom-area .text-area .first , .second ,.third", {
  opacity: 0,
  y: 80,           
  rotateX: 45,       
  transformOrigin: "top center",  
  scaleY: -0.1,       
  duration: 1.2,
  ease: "power4.out",
  stagger: 0.2,      
  scrollTrigger: {
    trigger: ".slider-bottom-area",   
    scroller: "body",
    start: "top 70%",
    end: "top 30%",
    // markers: true, // Turn off in production
    toggleActions: "play none none reverse",
    
  }
});


   gsap.from(".page5 .f-left h1 ,.f-left p", {
  opacity: 0,
  y: 80,     
  x:-40,   
  rotateZ:"45", 
//   rotateY: 45,       
  transformOrigin: "top left",  
  scaleY: -0.1,       
  duration: 1.2,
  ease: "power4.out",
  stagger: 0.2,      
  scrollTrigger: {
    trigger: ".page5",   
    scroller: "body",
    start: "top 80%",
    end: "top 50%",
    // markers: true, // Turn off in production
    toggleActions: "play none none reverse",
    
  }
});





   gsap.from(".page5 .f-left .social-cards-cont", {
  opacity: 0,
  y: 80,     
  x:-40,   
  rotateZ:"45", 
//   rotateY: 45,       
  transformOrigin: "top left",  
  scaleY: -0.1,       
  duration: 1.5,
  ease: "power3.out",
       
  scrollTrigger: {
    trigger: ".page5 ",   
    scroller: "body",
    start: "top 70%",
    end: "top 40%",
    // markers: true, // Turn off in production
    toggleActions: "play none none reverse",
    
  }
});


    })



    function useLenis() {
        useEffect(() => {
            const lenis = new Lenis({
                duration: 4.5,
                lerp: 22,
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






    useLenis();

    return (
        <>
            <div className="page1 bg-[#12141D]  w-full h-full p-10">
                <Navbar />

                <div className="hero h-[100%] w-full ">
                    <div className="card-container  w-full h-[60%] mt-15 flex justify-between">
                        <SquareCard />
                        <MediumCard />
                        <SquareCard />
                    </div>

                    <div className="bottom-area w-full h-[50%] bg-[#12141D] px-20 flex py-5 justify-around">

                        <div className="arrow-area h-auto  ">
                            <div id="arrow hire "  onClick={()=>ScrollRef.current.scrollIntoView({ behavior: 'smooth' })} className=' cursor-pointer w-28 h-28 bg-transparent border-2 border-zinc-200 p-10 rounded-full flex justify-center items-center '>
                                <FaArrowDown size={32} color='white' />
                            </div>

                        </div>

                        <div className="para card-para p-5 w-[50%] flex items-start">
                            <p className='w-[75%] relative right-20 text-zinc-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium deserunt tempore error doloremque! Asperiores magni voluptas labore perspiciatis debitis odio animi quisquam numquam repudiandae deserunt odit, corporis aperiam maxime saepe.</p>
                        </div>
                    </div>
                </div>

                <div className="navigater w-full h-[20%]  flex justify-center items-centerr">

                    <div className="btn-cont w-1/2 h-full flex justify-end items-center">
                        <button className='border-2 text-white border-zinc-300 transition-all text-3xl cursor-pointer rounded-3xl px-5 py-2 hover:bg-zinc-300 hover:text-zinc-800'  onClick={()=>ShopRef.current.scrollIntoView({ behavior: 'smooth' })}>Shop Now</button>
                    </div>




                    <div className="arrow-cont w-1/2 h-full  flex justify-end gap-5 group ">
                        <div className="left w-24 h-24 bg-transparent border-2 border-zinc-200 p-10 rounded-full flex justify-center items-center hover:bg-cyan-100 cursor-pointer   hover:text-zinc-700"> <FaArrowLeft size={29} color='white' className='group-hover:text-zinc-500' /></div>
                        <div className="right w-24 h-24 bg-transparent border-2 border-zinc-200 p-10 rounded-full flex justify-center items-center  hover:bg-cyan-100 cursor-pointer  hover:text-zinc-700"> <FaArrowRight size={29} color='white' className='group-hover:text-zinc-500' /></div>
                    </div>
                </div>


            </div>


            <div className="page2 bg-[#12141D] page1 w-full h-screen p-10 px-20  ">
                <h4 className='text-white page2-head text-2xl'>Hired by the most prestigious companies</h4>
                <hr className='text-white mt-2' />

                <div className="company-logos w-full h-[25%] b mt-3 bg-[url(../src/assets/comp-logos.png)] bg-cover bg-no-repeat"></div>

                {/* ✅ Updated Video Section */}
                <div className="video-area w-full object-cover rounded-lg h-[60%] bg-zinc-300 mt-3 flex items-center justify-center relative">
                    <video
                        ref={videoRef}
                        // src="../src/assets/cards imgs/video1.mp4"
                        src="https://cdn.pixabay.com/video/2023/01/31/148746-794599341_tiny.mp4"
                        loop
                        muted
                        controls
                        className="w-full h-full object-cover rounded-lg"
                    ></video>

                    {isPaused && (
                        <div
                            onClick={handlePlay}
                            className="group absolute video-play w-24 h-24 bg-transparent border-2 border-zinc-200 p-5 rounded-full flex justify-center items-center hover:bg-zinc-200  cursor-pointer"
                        >
                            <CiPlay1 size={30} className="text-white group-hover:text-cyan-400 transition-all duration-300" />
                        </div>
                    )}
                </div>
            </div>


            <div className="page3 bg-[#12141D] page1 w-full h-screen p-10 px-20  ">
                {/* Text Area */}
                <div className="text-area w-full h-[45%] flex flex-col justify-center items-center text-center px-10  ">
                    <h1 className="text-5xl font-bold text-white mb-6 page3-left-h1 ">
                        Speakers
                        <span className="right-h1 ml-4 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text text-transparent">
                            Worth Booking
                        </span>
                    </h1>
                    <p className="text-lg page3-para text-zinc-300 mb-4 w-[70%]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dolor turpis, dictum a efficitur in, aliquam eget velit.                    </p>

                </div>


                {/* Cards Area */}

                <div className=" w-full h-[60%] flex justify-around  items-center ">
                    <SpotlightCard title="Thought leaders" head="Donec a neque a ligula" className="custom-spotlight-card h-full w-75 page3-card1 page3-cards" spotlightColor="rgba(0, 229, 255, 0.2)">
                        <div className="upper w-full px-5 flex items-center justify-between gap-7">
                            <div className="logo border-2 border-zinc-200 rounded-full p-2"><PiMedalDuotone size={30} color="white" /></div>
                            <h1 className="text-white text-3xl font-bold"> Thought leaders </h1>

                        </div>

                        <div className="down w-full h-full mt-2 text-white px-3">
                            <h4 className="text-xl mt-6">Donec a neque a ligula</h4>
                            <p className="text-zinc-400 ext-md tracking-tighter mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni odio velit adipisci cupiditate! Atque, reiciendis cum. Ipsa modi ducimus tenetur</p>
                        </div></SpotlightCard>

                    <SpotlightCard title="Thought leaders" head="Donec a neque a ligula" className="custom-spotlight-card h-full w-75 page3-card2 page3-cards" spotlightColor="rgba(0, 229, 255, 0.2)">
                        <div className="upper w-full px-5 flex items-center justify-between gap-7">
                            <div className="logo border-2 border-zinc-200 rounded-full p-2"><AiOutlineRead size={30} color="white" /></div>
                            <h1 className="text-white text-3xl font-bold"> Story tellers</h1>

                        </div>

                        <div className="down w-full h-full mt-2 text-white px-3">
                            <h4 className="text-xl mt-6">Donec a neque a ligula</h4>
                            <p className="text-zinc-400 ext-md tracking-tighter mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni odio velit adipisci cupiditate! Atque, reiciendis cum. Ipsa modi ducimus tenetur</p>
                        </div></SpotlightCard>


                    <SpotlightCard title="Thought leaders" head="Donec a neque a ligula" className="custom-spotlight-card h-full w-75 page3-card3 page3-cards" spotlightColor="rgba(0, 229, 255, 0.2)">
                        <div className="upper w-full px-5 flex items-center justify-between gap-7">
                            <div className="logo border-2 border-zinc-200 rounded-full p-2"><IoMdPeople size={30} color="white" /></div>
                            <h1 className="text-white text-3xl font-bold"> Big audiences</h1>

                        </div>

                        <div className="down w-full h-full mt-2 text-white px-3">
                            <h4 className="text-xl mt-6">Donec a neque a ligula</h4>
                            <p className="text-zinc-400 ext-md tracking-tighter mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni odio velit adipisci cupiditate! Atque, reiciendis cum. Ipsa modi ducimus tenetur</p>
                        </div></SpotlightCard>

                </div>



            </div>


            <div className="page4  w-full h-screen p-10 px-20 border border-zinc-300 ">

                <div className="slider-bg-area h-[56%] w-full   flex items-center shadow-2xl">
                    <div className="grade-slider w-full h-40 bg-gradient-to-r from-pink-500 via-orange-500 00 to-green-400 flex justify-center items-center ">
                        <div className="content-of-gradeslider w-3/4 h-1/2 flex justify-center items-center gap-5">
                            <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center "><SlEnvolopeLetter size={20} /></div>
                            <h1 className='text-3xl font-bold uppercase text-white'>Hire your dream speaker</h1>
                            <button className='border-2 text-white text-light border-zinc-100 px-4 py-2 rounded-full text-2xl '>Contact us</button>


                        </div>
                    </div>
                </div>

                <div className="slider-bottom-area h-[50%] w-full">


                    <div className="text-area w-full h-full flex">
                        <div className="first  h-full w-1/3  flex items-center justify-center">
                            <h1 className='text-5xl  font-bold text-white'>Meet the glide <br /> <span className='bg-gradient-to-r from-pink-500 via-orange-400 to-green-400 bg-clip-text text-transparent '>speakers team</span></h1>
                        </div>


                        <div className="second  h-full w-1/3   flex items-center justify-center">
                            <p className='w-[90%] text-md tracking-tight text-zinc-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, euismod felis, eros mi purus in est. Vitae sodales tellus vitae, tincidunt in sed orci.</p>
                        </div>
                        <div className="third  h-full w-1/3 flex items-center justify-center">
                            <button className='border-2 border-zinc-100 px-4 py-2 rounded-full text-xl font-light text-white '>Learn more about us</button>

                        </div>
                    </div>




                </div>

            </div>

            <div className="gallery-area" >
                <div ref={ShopRef}  style={{ height: '600px', position: 'relative' }}> 
                    <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
                </div>
            </div>

{/* page5 f-left h1 p*/}
            <div ref={ScrollRef} className="page5 built-future mt-10 w-full h-[130vh] p-10 px-20 ">
                <div className="full-cont w-full h-[110vh] bg-[#1E2029] flex">
                    <div className="f-left w-1/2 h-9/10  p-10">
                        <div className="text-area h-1/2 w-full ">
                            <h1 className='text-6xl  font-bold text-white'>Built for the future</h1>
                            <p className='mt-15  font-semibold text-zinc-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec aliquet odio. Cras convallis eget elit et efficitur. Pellentesque non risus sed elit iaculis tincidunt ac dictum lorem. Aliquam in pulvinar lectus. Integer id condimentum libero, a sagittis lacus. Nunc vitae metus libero. Proin pellentesque, diam non fermentum varius, erat diam suscipit eros, ut dignissim quam nisl at lectus. Donec a neque a ligula iaculis iaculis. Sed mattis vehicula dapibus. Sed blandit libero ut turpis maximus, ut luctus arcu imperdiet. Ut eget lacinia velit.</p>

                        </div>

                        <div className="social-cards-cont w-full h-[50vh] grid grid-rows-2 grid-cols-2 gap-[0.9px] mt-10">
 
                            <div className=" bg-gradient-to-br from-purple-400 via-blue-400  to-pink-400 blur-[0.04em]  w-full h-full object-cover flex justify-center items-center"><FaTwitter size={30} color='white' /></div>
                            <div className=" bg-gradient-to-tr from-purple-400 via-blue-400  to-pink-400 blur-[0.04em] w-full h-full object-cover flex justify-center items-center"><FaLinkedinIn size={30} color='white' /></div>
                            <div className=" bg-gradient-to-br from-purple-400 via-blue-400  to-pink-400 blur-[0.04em] w-full h-full object-cover flex justify-center items-center"><CgIndieHackers size={30} color='white' /></div>
                            <div className=" bg-gradient-to-tr from-purple-400 via-blue-400  to-pink-400 blur-[0.04em] w-full h-full object-cover flex justify-center items-center"><FaMediumM size={30} color='white' /></div>

                        </div>

                    </div>


                    {/* Right Part */}

                    <div className="f-right w-1/2 h-9/10  p-10">
                        <div className="grid grid-cols-2 grid-rows-3 gap-4 h-full">

                            {/* Top image (span 2 columns) */}
                            <div className="col-span-2">
                                <img src="https://images.unsplash.com/photo-1672917187338-7f81ecac3d3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVldGluZyUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" alt="Top" className="w-full h-full object-cover rounded-lg" />
                            </div>

                            {/* Left image in second row */}
                            <div>
                                <img src="https://images.unsplash.com/photo-1538688423619-a81d3f23454b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fG1lZXRpbmclMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D" alt="Left" className="w-full h-full object-cover rounded-lg" />
                            </div>

                            {/* Right image in second row */}
                            <div>
                                <img src="https://images.unsplash.com/photo-1677078610152-8a627d8ced8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVldGluZyUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" alt="Right" className="w-full h-full object-cover rounded-lg" />
                            </div>

                            {/* Bottom image (span 2 columns) */}
                            <div className="col-span-2">
                                <img src="https://images.unsplash.com/photo-1716703435453-a7733d600d68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lZXRpbmclMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D" alt="Bottom" className="w-full h-full object-cover rounded-lg" />
                            </div>

                        </div>
                    </div>
                </div>

            </div>


            <div className="footer w-full h-[40vh]  mt-5 px-20 flex items-center py-15 text-white ">
                <div className="footer-left w-1/2 h-full mt-25  ">
                    <div className="logo mb-5"><h1 className='text-3xl font-bold text-[2.2em]'>GLIDE<span className='font-light'>SPEAKERS</span></h1></div>
                    {["Terms & Conditions", "Privacy Policy", "Cookie Policy"].map((elem) => (
                        <React.Fragment key={elem}><a className='cursor-pointer'>{elem}</a> <br /></React.Fragment>
                    ))}


                </div>


                <div className="footer-right  w-1/2 h-full text-2xl font-semibold  mt-25 relative left-[25%]  ">
                    {["Home", "About", "Contact us"].map((elem) => (
                        <React.Fragment key={elem}><a className='cursor-pointer'>{elem}</a> <br /></React.Fragment>
                    ))}
                </div>





            </div>
            {/* <div className='overflow-x-hidden h-[20vh] ' style={{ width: '100%', height: '400px', position: 'relative' }}>
                        <Threads
                            amplitude={1}
                            distance={0}
                            enableMouseInteraction={true}
                        />
                    </div>
 */}


        </>
    )
}

export default Home