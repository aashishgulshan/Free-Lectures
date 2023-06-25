import React from 'react'
import '../App.css';
import Typewriter from "typewriter-effect";
function Heros() {
  return (
    <div>
    <div style={{ backgroundImage: `url("https://picsum.photos/1920/1080/?blur=5")`, backgroundRepeat: "no-repeat", height: "600px", backgroundSize:"cover", backgroundPosition: 'center'}}>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className='text-center text-white font-bold mx-auto py-5' >
        <b className='mt-5'>Hi ! This is</b>
        <h1 className='lg:text-5xl md:text-4xl sm:text-3xl mti5'>Free Lectures</h1>
        <Typewriter options={{ strings: ['MERN-Stack Developer', 'MEAN-Stack Developer'], autoStart: true, loop: true,}}/>
      </div>

    </div>
    </div >
  )
}
export default Heros