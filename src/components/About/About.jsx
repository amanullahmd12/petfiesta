import './About.css'

import {useEffect } from 'react';

function About() {
    useEffect(() => {
        var string = " India's  Largest Pet Lovers Carnival"; /* type your text here */
        var array = string.split("");
        var timer;
        function frameLooper() {
          if (array.length > 0) {
            document.getElementById("text").innerHTML += array.shift();
          } else {
            clearTimeout(timer);
          }
          timer = setTimeout(frameLooper, 60); /* change 70 for speed */
        }
    
        frameLooper();
        return () => {
          clearTimeout(timer);
        };
      }, []);


  return (
  <div className='about'>
    <div className='container d-flex justify-content-center align-items-center'>
        <h1 className='text-white' id="text"></h1>
    </div>
    </div>
    
  )
}

export default About