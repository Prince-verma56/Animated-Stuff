import React from 'react'
import Navbar from '../Navbar'
import MediumCard from '../others/cards/MediumCard'
import SquareCard from '../others/cards/SquareCard'
import { FaArrowDown } from "react-icons/fa6";

function Home() {
    return (
        <>
            <div className="bg-[#12141D] w-full h-screen p-10">
                <Navbar />



                <div className="hero w-full relative h-[100%]  z-[1] overflow-x-hidden">

                    <div className="cards-container  flex justify-between px-20 items-center h-[65%] w-full ">
                        <SquareCard />

                        <MediumCard />

                             
                        <SquareCard />


                    </div>




                    <div className="bottom-area w-full h-[60%] bg-red-400 px-20 flex py-10 justify-around">

                        <div className="arrow area h-auto  ">
                            <div id="arrow " className='w-28 h-28 bg-transparent border-2 border-zinc-200 p-10 rounded-full flex justify-center items-center '>
                         <FaArrowDown size={32} color='white'/>
                            </div>

                        </div>



                        <div className="para p-10 w-[50%] flex items-start">
                            <p className='w-[75%] relative right-20 text-zinc-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium deserunt tempore error doloremque! Asperiores magni voluptas labore perspiciatis debitis odio animi quisquam numquam repudiandae deserunt odit, corporis aperiam maxime saepe.</p>
                        </div>
                        

                    </div>
                </div>
            </div>





        </>
    )
}

export default Home