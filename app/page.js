'use client';

import '../styles/styles.css'; // Import your CSS file with the necessary styles

import figure1 from '../public/assets/img/GTA4-1-figure-removebg-preview.png'
import figure2 from '../public/assets/img/figure3.png';

import music from '../public/assets/music/gta4-music.mp3'


import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Sound from 'react-sound';


export default function Home(
  handleSongPlaying,
  handleSongLoading,
  handleSongFinishedPlaying
) {
  const [imageState, setImageState] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const container = document.querySelector('.container');
    const nico = document.querySelector('.nico');
    let intervalId;
  
    if (container && nico) {
      container.style.transition = 'opacity 0.5s';
      container.style.opacity = 1;
      nico.style.transition = 'opacity 0.5s';
      nico.style.opacity = 1;
  
      const toggleImages = () => {
        if (imageState === 1) {
          setImageState(2);
        } else {
          setImageState(1);
        }
      };
  
      intervalId = setInterval(() => {
        container.style.opacity = 0;
        nico.style.opacity = 0;
        setTimeout(() => {
          toggleImages();
  
          container.style.opacity = 1;
          nico.style.opacity = 1;
  
          clearInterval(intervalId); // Clear the interval to stop the looping
        }, 5000);
      }, 5000);
    }

    return () => {
      clearInterval(intervalId); // Cleanup the interval on component unmount
    };
  }, [imageState]);




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
            {imageState == '2' ? (
                <Image className='figureImg2' width={700} height={700} src={figure2} alt='Jofevn' />
              ) : (
                <Image className='figureImg1' width={700} height={700} src={figure1} alt='Jofevn' />
              )}
          </div>


          </div>
          

        </div>

        {/* End of content with animated figure and background image */}

       <Sound 
        url={music}
        playStatus={
          isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED
        }
        playFromPosition={0}
        onLoading={handleSongLoading}
        onPlaying={handleSongPlaying}
        onFinishedPlaying={handleSongFinishedPlaying}
        loop={true}
       />
       <button onClick={() => setIsPlaying(!isPlaying)}>
        {!isPlaying ? 'Play' : 'Stop'}
       </button>

      </div>
    </div>

  );
}
