'use client';

import '../styles/styles.css'; // Import your CSS file with the necessary styles

import figure1 from '../public/assets/img/GTA4-1-figure-removebg-preview.png'
import figure2 from '../public/assets/img/bald.png';
import gtaPoster from '../public/assets/img/gtaposter.jpg';
import yo_jj from '../public/assets/img/yo-jj.png';
import asset1 from '../public/assets/img/project-img1.jpg'
import asset2 from '../public/assets/img/project-img2.jpg'
import asset3 from '../public/assets/img/project-img3.jpg'


const audioUrl = "/assets/music/gta4-theme.mp3";

import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import useSound from "use-sound"; 

import {Disc3, MoveRight, Music, Pause, Play, SkipBack, SkipForward } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';


export default function Home() {
  const [imageState, setImageState] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [progress, setProgress] = useState(13)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasClicked, setHasClicked] = useState(false);
  const [isIconClicked, setIsIconClicked] = useState(false);
  const [isClickClicked, setIsClickClicked] = useState(false);

  // Get all proj-card elements
const projCards = document.querySelectorAll('.proj-card');

// Attach event listeners to each proj-card
projCards.forEach(projCard => {
  projCard.addEventListener('mouseover', handleCardHover);
  projCard.addEventListener('mouseout', handleCardLeave);
});

// Function to handle hover
function handleCardHover() {
  // Get the data-color attribute value from the hovered card
  const color = this.getAttribute('data-color');

  // Change the body background color based on the card's color
  if (color === 'blue') {
    document.body.style.backgroundColor = 'rgb(92, 191, 249)';
  } else if (color === 'green') {
    document.body.style.backgroundColor = 'rgb(125, 161, 35)';
  } else if (color === 'brown') {
    document.body.style.backgroundColor = 'rgb(127, 46, 23)';
  }
}

// Function to handle leave (reset background color)
function handleCardLeave() {
  // Reset the body background color
  document.body.style.backgroundColor = ''; // or any default color you want
}

  const toggleClickIcon = () => {
    setIsClickClicked(true)
  }
  
  const toggleIcon = () => {
    setIsIconClicked(!isIconClicked)
  }

  // const toggleMoveClass = (className) => {
  //   const card = document.querySelector(`.${className}`);
  //   card.classList.toggle(`move`);
  // };

  const [play, { pause, duration, sound }] = useSound(audioUrl);

  // const [isMounted, setIsMounted] = useState(false);

  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  // if (!isMounted) {
  //   return null;
  // }

  const playingButton = () => {
    if (isPlaying) {
      pause(); // this will pause the audio
      setIsPlaying(false);
    } else {
      play(); // this will play the audio
      setIsPlaying(true);
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  }

  const handleStartAudio = () => {
    play();
    setHasClicked(true);
  };


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


  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 1500)
    return () => clearTimeout(timer)
  }, [])

  // const handleMusic = () => {
  //   return (
  //     console.log("CLicked Bruv")
  //   )
  // }

  


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black wholebg" >
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
            <h6 className="gta-text mx-6 text-white links"><Link href='https://www.linkedin.com/in/yusif-ahmedov/'>Linkedin</Link></h6>
            <h6 className="gta-text mx-6 text-white links"><Link href='https://github.com/glaucc'>Work</Link></h6>
            <h6 className="gta-text mx-6 text-white links"><Link href='https://github.com/glaucc'>Projects</Link></h6>
            <h6 className="gta-text mx-6 text-white links"><Link href='https://github.com/glaucc'>About</Link></h6>
            <h6 className="gta-text mx-6 text-white links"><Link href='https://github.com/glaucc'>Contact</Link></h6>
          </nav>
        </div>
      </div>

      {/* Music Player */}

      <div className='musicPlayer flex w-[440px]'>

        
                    <div className='gta-text flex flex-row items-center h-10 min-w-full firstplay-text'>

                    {!hasClicked && (
                      <div className='flex items-center first-play'>
                      <p className="text-white ml-[-40px] w-[380px]">First Play the music</p><Disc3/><MoveRight size={32} className='mr-6 ml-5'/>
                      </div>)}
                    </div>
                  <Popover>
                    <PopoverTrigger>
                      <div>
                      <Button variant='outline' className='hover:bg-gray-300'>
                      <Music color='black' onClick={togglePopup} />
                      </Button>
                      </div>
                    </PopoverTrigger>
                    <PopoverContent className="poster-popup w-80">
                    <div className="gap-4">
                        <div className='background-block rounded p-4 h-4/6'>
                        <Image className="music-poster" width={300} height={300} src={gtaPoster} alt="Jofevn" />
                        <div className='play-icons mt-6 ml-8'>

                        <SkipBack size={50} className='mr-4 cursor-pointer music-icons'/>
                        
                        {isPlaying ?
                        <Pause size={50} className='mr-4 cursor-pointer music-icons' onClick={playingButton}/>  :
                        <Play size={50} className='mr-4 cursor-pointer music-icons' onClick={playingButton}/>}

                      <SkipForward size={50} className='mr-4 cursor-pointer music-icons'/>

                      </div>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                  
      </div>


      {isLoading ? (
        <>
        <div className="gta-text loading-bar mx-6 text-white">Loading...</div>
        <Progress value={progress} className="w-[20%]" />
        </>
      ) : (
        <div className="container">
          <div className='bg-image-container'>
          <div className="content with-background-image">
            {/* Your component content here */}
            <div className="intro">
              <div className="intro-texts w-[40vw]">
                <h6 className="gta-intro-text gta-intro-text1 mx-6 ml-[4vw] links text-white cursor-pointer">Represents</h6>
                <h6 className="gta-intro-text gta-intro-text2 mx-6 ml-[4vw] links text-white cursor-pointer">Jofevn Studios</h6>
              </div>

              <div className="nico">
                {imageState === 2 ? (
                  <Image className="figureImg2" width={1000} height={1000} src={figure2} alt="Jofevn" />
                ) : (
                  <Image className="figureImg1" width={700} height={700} src={figure1} alt="Jofevn" />
                )}
              </div>
            </div>
          </div>
          </div>


          {/* End of content with animated figure and background image */}

          
        </div>
      )}

      {/* Gta Theme Audio */}
       
       <div>
            <audio className="gta-audio" loop controls autoPlay preload='auto'>
              <source src={audioUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
      </div>

      {/* Separator */}

      <Separator className="mt-[150px]" />


    {/* Introfuction */}
      
      <div className='introduction-main flex flex-row mt-[200px]'>
        
        <div className='int-text-sec mr-[10vw]  flex flex-col'>
            <div className='int-header gta-text links'>Hello There👋</div>
            <div className='gta-small-text int-text1 my-8 max-w-2xl links-horizontal'>Welcome to my digital universe, where pixels come alive and ideas take shape! I am the architect of imagination, the weaver of digital dreams, and the creator of captivating experiences. With a touch of creativity and a sprinkle of innovation, I craft digital wonders that transcend the ordinary.</div>
            <div className='gta-small-text int-text2 my-8 max-w-2xl links-horizontal'>Join me on a journey through the symphony of code and design, where each project is a story waiting to be told, and every line of code is a brushstroke on the canvas of the digital realm. Together, let's explore the boundless possibilities and unlock the magic of the digital world.</div>
          </div>
        <div className='int-img'>
        <Image className="figureImg3 ml-[240px]" width={500} height={500} src={yo_jj} alt="Jofevn" />
        </div>
      
      </div>
      <Separator className="mt-[80px]" />



      {/* Skills */}



      <div className='skills-main mb-[8vw]'>
                  
      {isIconClicked ? 

        <div className='cards-firstrow'>
          <div className='cards1 sk1'><h2>Next.js</h2></div>
          <div className='cards1 sk2'><h2>React.js</h2></div>
          <div className='cards1 sk3'><h2>Javascript</h2></div>
          <div className='cards1 sk4'><h2>Typescript</h2></div>
          <div className='cards1 sk5'><h2>Redux</h2></div>
          <div className='cards1 sk6'><h2>Zustand</h2></div>
          <div className='cards1 sk7'><h2>Prisma</h2></div>
        </div>
      
      : ""} 


          <div className='skills-icon flex justify-center'>
            {isIconClicked ? <div color='white' size={75} className='cursor-pointer hover:scale-110 text-white skill-click2 links' onClick={toggleIcon}><h2 className='ml-[12vh] mt-[12vh]'>Close</h2></div> : 
            
              <div 
              size={75} className='cursor-pointer text-white hover:scale-110 skill-click1' 
              onClick={() => {
                toggleIcon();
                toggleClickIcon();
                
              }
                }
              ><h2 className='ml-[12vh] mt-[12vh] links'>Click</h2></div>}
          </div>


          {isIconClicked ? 

            <div className='cards-secondrow'>
              <div className='cards2 sk8'><h2>React Query</h2></div>
              <div className='cards2 sk9'><h2>Node.js</h2></div>
              <div className='cards2 sk10'><h2>Python</h2></div>
              <div className='cards2 sk11'><h2>Tailwind CSS</h2></div>
              <div className='cards2 sk12'><h2>CI/CD (Jest, ESlint)</h2></div>
              <div className='cards2 sk13'><h2>Cloud (AWS, GCP, Vercel, Firebase)</h2></div>
              <div className='cards2 sk14'><h2>Security (Networking, Pentesting)</h2></div>

            </div>

            : ""}


      </div>

      <Separator className="mt-[150px]" />


      <div className='experience-main'>

          <div className='gta-text exp-text links'>My <span className='lineargd-exp-text'>Experience</span></div>

            <div className='exp-cards'>

            
            <div className='exp-card'>
              <div className='text-white text-3xl roboto-only-text'>Front End Developer</div>
              <div className='mb-[0.7vw] roboto-only-text'>
                <div className='text-white text-xl'>Your Company</div>
                <div className='text-white text-lg'>Present - Future</div>
              </div>
              <div className='roboto-only-text text-xl'>
                <div className='text-white'>• Changed everyone's life</div>
                <div className='text-white'>• Saved the world</div>
                <div className='text-white'>• Cured cancer</div>
                <div className='text-white'>• Went to Mars for work</div>
                <div className='text-white'>• Won the fight against Bond</div>
              </div>
            </div>


            <div className='exp-card exp-card-right'>
            <div className='text-white text-3xl roboto-only-text'>Front End Developer</div>
              <div className='mb-[0.7vw] roboto-only-text'>
                <div className='text-white text-xl'>Sferex Agency</div>
                <div className='text-white text-lg'>Aug 2021 - Present (2 years 3 months)</div>
              </div>
              <div className='roboto-only-text text-xl'>
                <div className='text-white'>• Developed 20+ Apps with React.js, Next.js, Typescript tech stack</div>
                <div className='text-white'>• Designed 5+ interactive games on the web and making the project memory-friendly</div>
                <div className='text-white'>• Maked Saas apps, E-commerce 1000+ people used daily</div>
                <div className='text-white'>• Improved performance more than 40%, Improved SEO to get 20% more traffic</div>
              </div>
            </div>
            
            
            <div className='exp-card'>
            <div className='text-white text-3xl roboto-only-text'>Front End Developer</div>
              <div className='mb-[0.7vw] roboto-only-text'>
                <div className='text-white text-xl'>Bruto Azerbaijan</div>
                <div className='text-white text-lg'>Nov 2022 - Oct 2023 (1 year)</div>
              </div>
              <div className='roboto-only-text text-xl'>
                <div className='text-white'>• Building 10+ Next.js & React.js projects from scratch and building and adding features on existing
projects based on customer feedbacks</div>
                <div className='text-white'>• Debugged and solved all problems and improved speed by 35%</div>
                <div className='text-white'>• Added Terminal, User Performance Analyzer and 30+ more unique interactive functionalities</div>
                
              </div>
            </div>
            
            
            <div className='exp-card exp-card-right'>
            <div className='text-white text-3xl roboto-only-text'>Web Technical Assistant</div>
              <div className='mb-[0.7vw] roboto-only-text'>
                <div className='text-white text-xl'>Caspian One</div>
                <div className='text-white text-lg'>Jan 2020 - June 2020 (6 months)</div>
              </div>
              <div className='roboto-only-text text-xl'>
                <div className='text-white'>• Builded and contributed 5+ React.js projects and added 10+ advanced CSS features such as advanced
animations, story features and more</div>
                <div className='text-white'>• Worked and built 10+ websites on Webflow and WordPress</div>
                <div className='text-white'>• Contributed to 3+ projects with more than 400+ people used daily</div>

              </div>
            </div>

            
            </div>
      </div>

      <Separator className="mt-[150px]" />


      <div className='projects-main'>

      <div className='gta-text exp-text links'>My <span className='lineargd-proj-text'>Portfolio</span></div>

          {/* <Cards image={asset1} image2={asset2} image3={asset3}/> */}
          {/* <Image className="" width={400} height={400} alt='project-image' src={asset10} />
          <Image className="figureImg3 ml-[240px]" width={500} height={500} src={yo_jj} alt="Jofevn" /> */}

<div className='proj-htmlBody'>
    <div className='proj-body'>
  <div id="proj-cards" className='proj-cards'>
  <div className="proj-card flex flex-col" data-color="blue">
    <Image className="card-front-image card-image" width={400} height={400} alt='project-image' src={asset1} />
    <div className="card-faders">
      <Image className="card-fader card-image" width={400} height={400} alt='project-image' src={asset1}/>
      <Image className="card-fader card-image" width={400} height={400} alt='project-image' src={asset1}/>
      <Image className="card-fader card-image" width={400} height={400} alt='project-image' src={asset1}/>
      <Image className="card-fader card-image" width={400} height={400} alt='project-image' src={asset1}/>
      <Image className="card-fader card-image" width={400} height={400} alt='project-image' src={asset1}/>
      <Image className="card-fader card-image" width={400} height={400} alt='project-image' src={asset1}/>
      <Image className="card-fader card-image" width={400} height={400} alt='project-image' src={asset1}/>
      <Image className="card-fader card-image" width={400} height={400} alt='project-image' src={asset1}/>
    </div>
  </div>
  <div className="proj-card" data-color="green">
    <Image className="card-front-image card-image" width={400} height={400} alt='project-image' src={asset2}/>
    <div className="card-faders">
      <Image className="card-fader card-image" width={400} height={400} alt='project-image' src={asset2}/>
      <Image className="card-fader card-image" width={400} height={400} alt='project-image' src={asset2}/>
      <Image className="card-fader card-image" width={400} height={400} alt='project-image' src={asset2}/>
      <Image className="card-fader card-image" width={400} height={400} alt='project-image' src={asset2}/>
      <Image className="card-fader card-image" width={400} height={400} alt='project-image' src={asset2}/>
      <Image className="card-fader card-image" width={400} height={400} alt='project-image' src={asset2}/>
      <Image className="card-fader card-image" width={400} height={400} alt='project-image' src={asset2}/>
      <Image className="card-fader card-image" width={400} height={400} alt='project-image' src={asset2}/>
    </div>
  </div>
  <div className="proj-card" data-color="brown">
    <Image className="card-front-image card-image" width={400} height={400} alt='project-image' src={asset3}/>
    <div className="card-faders">
      <Image className="card-fader card-image" width={400} height={400} alt='project-image' src={asset3}/>
      <Image className="card-fader card-image" width={400} height={400} alt='project-image' src={asset3}/>
      <Image className="card-fader card-image" width={400} height={400} alt='project-image' src={asset3}/>
      <Image className="card-fader card-image" width={400} height={400} alt='project-image' src={asset3}/>
      <Image className="card-fader card-image" width={400} height={400} alt='project-image' src={asset3}/>
      <Image className="card-fader card-image" width={400} height={400} alt='project-image' src={asset3}/>
      <Image className="card-fader card-image" width={400} height={400} alt='project-image' src={asset3}/>
      <Image className="card-fader card-image" width={400} height={400} alt='project-image' src={asset3}/>
    </div>
  </div>
  </div>
  </div>
  </div>


      </div>

      <Separator className="mt-[150px]" />


      <div className='projects-contact'>

      </div>
      <Separator className="mt-[150px]" />

{/* Footer */}

    </div>

  );
}
