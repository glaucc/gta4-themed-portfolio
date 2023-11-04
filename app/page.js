'use client';

import { useState, useEffect } from 'react';
import '../styles/styles.css'; // Import your CSS file with the necessary styles
import Head from 'next/head';
import Image from 'next/image';
import figure from '../public/assets/img/GTA4-1-figure-removebg-preview.png'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const container = document.querySelector('.container');
    const nico = document.querySelector('.nico');

    if (container && nico) {
      // Fading in the container element
      container.style.opacity = 0;
      const fadeInContainer = () => {
        container.style.transition = 'opacity 0.3s';
        container.style.opacity = 1;
      };
      setTimeout(fadeInContainer, 300);

      // Fading in and animating the nico element
      nico.style.opacity = 1;
      let counter = 0;
      const moveNico = setInterval(() => {
        if (counter >= 100) {
          clearInterval(moveNico);
        } else {
          nico.style.bottom = `${-40 + counter * 0.2}px`;
          nico.style.left = `${27 + counter * 0.05}%`;
          counter++;
        }
      }, 50); // Move every 50 milliseconds

      setTimeout(() => {
        nico.style.opacity = 0;
      }, 5000); // Fade out after 5 seconds
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
          </div>

          <div className="nico">
            {/* Use Image component for lazy loading */}
            <div className="figureImg" style={{ position: 'relative', paddingBottom: '100%' }}>
              <Image
                src={figure}
                alt="Jofevn"
                // layout="fill"
                style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                loading="lazy"
              />
              </div>
          </div>

        </div>

      </div>
    </div>
  );
}
