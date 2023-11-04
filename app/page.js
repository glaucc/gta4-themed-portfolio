'use client';

import '../styles/styles.css'; // Import your CSS file with the necessary styles

import figure1 from '../public/assets/img/GTA4-1-figure-removebg-preview.png'
import figure2 from '../public/assets/img/figure3.png';

const audioUrl = "/assets/music/gta4-theme.mp3";

import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import MusicPlayer from '@/components/MusicPlayer';
import { Music } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';


export default function Home() {
  const [imageState, setImageState] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  }

  useEffect(() => {
    let intervalId;
    intervalId = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      clearTimeout(intervalId); // Clear the timeout on component unmount
    };
  }, []);

  useEffect(() => {
    const container = document.querySelector('.container');
    const nico = document.querySelector('.nico');
    let intervalId;

    if (!isLoading && container && nico) {
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
  }, [isLoading, imageState]);

  // const handleMusic = () => {
  //   return (
  //     console.log("CLicked Bruv")
  //   )
  // }


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
            <h6 className="gta-text mx-6 text-white links"><Link href='https://github.com/glaucc'>Github</Link></h6>
            <h6 className="gta-text mx-6 text-white links"><Link href='https://github.com/glaucc'>Linkedin</Link></h6>
            <h6 className="gta-text mx-6 text-white links"><Link href='https://github.com/glaucc'>Work</Link></h6>
            <h6 className="gta-text mx-6 text-white links"><Link href='https://github.com/glaucc'>Projects</Link></h6>
            <h6 className="gta-text mx-6 text-white links"><Link href='https://github.com/glaucc'>About</Link></h6>
            <h6 className="gta-text mx-6 text-white links"><Link href='https://github.com/glaucc'>Contact</Link></h6>
          </nav>
        </div>
      </div>

      {/* Music Player */}

      <div className='musicPlayer flex'>
                  <Popover>
                    <PopoverTrigger>
                      <Button variant='outline' className='hover:bg-gray-300'>
                      <Music color='black' onClick={togglePopup} />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">

                    </PopoverContent>
                  </Popover>
                  {isPopupOpen && (
                    <div>Salam</div>
                  )}
      </div>


      {isLoading ? (
        <div className="gta-text mx-6 text-white">Loading...</div>
      ) : (
        <div className="container">
          <div className="content with-background-image">
            {/* Your component content here */}
            <div className="intro">
              <div className="intro-texts">
                <h6 className="gta-intro-text gta-intro-text1 mx-6 text-white">Represents</h6>
                <h6 className="gta-intro-text gta-intro-text2 mx-6 text-white">Jofevn Studios</h6>
              </div>

              <div className="nico">
                {imageState === 2 ? (
                  <Image className="figureImg2" width={700} height={700} src={figure2} alt="Jofevn" />
                ) : (
                  <Image className="figureImg1" width={700} height={700} src={figure1} alt="Jofevn" />
                )}
              </div>
            </div>
          </div>

          {/* End of content with animated figure and background image */}

          
        </div>
      )}

      {/* Gta Theme Audio */}
       
       <div>
            <audio className="gta-audio" loop controls autoPlay={true} preload='auto'>
              <source src={audioUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
      </div>

      {/* <MusicPlayer /> */}

      

    </div>

  );
}
