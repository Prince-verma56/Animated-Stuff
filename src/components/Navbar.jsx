import React, { useState } from 'react'
import Hamburger from 'hamburger-react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import App from '../App';
import { useRef } from 'react';
function Navbar() {
    const [isOpen, setOpen] = useState(false)

const navRef = useRef()
    gsap.registerPlugin(ScrollTrigger)


    useGSAP(() => {
        const tl = gsap.timeline()

        tl.from("nav", {
            // background: "white",
            color: "black",
            y:-15,
            z:-10,
            rotateX:45,
            rotateY:45,
            opacity:0,
            duration:0.7,
         
        })
    })

    return (
        <>

      
            <nav className='text-white z-[2] px-10  flex justify-between fixed top-10 left-0 right-0 '>
                <div className="logo"><h1 className='text-3xl font-bold text-[2.2em]'>GLIDE<span className='font-light'>SPEAKERS</span></h1></div>

                <div className="right flex items-center gap-7 text-[1.2em]">
                    {["Home", "About", "Contact"].map((elem, idx) => {
                        return (
                            <h4 key={idx}>{elem}</h4>
                        )
                    })}


                    <Hamburger color='white' toggled={isOpen} toggle={setOpen} />
                </div>
            </nav>


        </>
    )
}

export default Navbar