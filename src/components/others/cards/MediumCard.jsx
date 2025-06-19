import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'




function MediumCard() {


useGSAP(()=>{
  const tl = gsap.timeline();
  tl.from(".card",{
    opacity:0,
    x:0,
    y:-10,
    height:10,
    delay:1.2,

  })
  tl.from(".card-text",{
    opacity:0,
    y:20,
    delay:0.2,

  })


})



  return (
   <>
   <div className=" ">
       <div className="card w-98 h-[60vh] rounded-b-2xl  overflow-hidden relative bottom-30 left-40 ">
        <img src="https://images.unsplash.com/photo-1625672970327-606c5c5c20fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsJTIwYm95fGVufDB8MXwwfHx8MA%3D%3D" className=' ' alt="" />
       </div>
   </div>
   

       <h1 className='text-white card-text tracking-tighter whitespace-nowrap text-7xl relative font-bold top-67 right-[20%] '>Ryan Baser</h1>
   </>
  )
}

export default MediumCard