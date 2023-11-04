'use client';

import React, { useState } from 'react';

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <button onClick={toggleMusic}>{isPlaying ? 'Pause Music' : 'Play Music'}</button>
      {isPlaying && (
        <audio controls autoPlay>
          <source src="/assets/music/gta4-theme.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
};

export default Home;




