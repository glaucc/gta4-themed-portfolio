'use client';

import '../styles/styles.css'; // Import your CSS file with the necessary styles
import figure1 from '../public/assets/img/GTA4-1-figure-removebg-preview.png'
import figure2 from '../public/assets/img/figure2.png';


import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';


export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSecondImage, setShowSecondImage] = useState(false);

  useEffect(() => {
    const container = document.querySelector('.container');
    const nico = document.querySelector('.nico');

    if (container && nico) {
      container.style.transition = 'opacity 0.5s';
      container.style.opacity = 1;
      nico.style.transition = 'opacity 0.5s';
      nico.style.opacity = 1;

      setTimeout(() => {
        container.style.opacity = 0;
        nico.style.opacity = 0;
        setTimeout(() => {
          // Change the nico image
          setShowSecondImage(true);
          container.style.opacity = 1;
          nico.style.opacity = 1;
        }, 500);
      }, 5000);
    }
  }, []);



  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Pricedown:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="w-full absolute top-0 flex items-center justify-between p-4">
        <div className="flex items-center">
          {/* <img src="/path_to_your_logo/logo.png" alt="Logo" className="h-8 mr-2" /> */}
          <nav className="flex items-center">
            <h6 className="gta-text mx-6 text-white">Link 1</h6>
            <h6 className="gta-text mx-6 text-white">Link 2</h6>
            <h6 className="gta-text mx-6 text-white">Work</h6>
            <h6 className="gta-text mx-6 text-white">Projects</h6>
            <h6 className="gta-text mx-6 text-white">About</h6>
            <h6 className="gta-text mx-6 text-white">Contact</h6>
          </nav>
        </div>
      </div>
      {/* <audio controls className="mt-4">
        <source src="/assets/music/GTA-4-Loading-Screen-Theme.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio> */}
      <div className="container">
        
        <div className="content with-background-image">
          {/* Your component content here */}
          
          
          <div className='intro'>
            <div className='intro-texts'>
          <h6 className="gta-intro-text gta-intro-text1 mx-6 text-white">Represents</h6>
          <h6 className="gta-intro-text gta-intro-text2 mx-6 text-white">Jofevn Studios</h6>
            </div>


          <div className="nico">
            <Image className='figureImg' width={700} height={700} src={figure1} alt='Jofevn' />
          </div>


          </div>
          

        </div>

      </div>
    </div>
  );
}
