import { useEffect, useRef, useState } from 'react'
import './VideoPlayer.css'

const VideoPlayer = ({ video, loopMode = false }) => {
  const videoPlayer = useRef(null);
  const hideTimeout = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(loopMode ? false : true); // 👈 visible al inicio si no es loop
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // detectar si es móvil
    const checkMobile = () => setIsMobile(/Mobi|Android/i.test(navigator.userAgent));
    checkMobile();
  }, []);

  const togglePlay = () => {
    if (!videoPlayer.current) return;

    if (isPlaying) {
      videoPlayer.current.pause();
    } else {
      videoPlayer.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoPlayer.current) return;
    videoPlayer.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleUserActivity = () => {
    if (!loopMode) {
      setShowControls(true);
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
      hideTimeout.current = setTimeout(() => setShowControls(false), 3000);
    }
  };

  return (
    <div
      className="video-container"
      onMouseMove={!isMobile ? handleUserActivity : undefined} // desktop
      onMouseLeave={!isMobile ? () => setShowControls(false) : undefined}
      onClick={isMobile ? handleUserActivity : undefined} // móvil
    >
      <video
        ref={videoPlayer}
        src={video}
        className="video-element"
        autoPlay={loopMode}
        loop={loopMode}
        muted={loopMode}
        playsInline
        preload="auto"
      />

      {!loopMode && (
        <button
          className={`play-button ${showControls ? 'visible' : 'hidden'}`}
          onClick={togglePlay}
        >
          {isPlaying ? (
            // pause icon
            <svg style={{ width: '3rem' }} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="11"/>
              <line x1="10" y1="9" x2="10" y2="15"/>
              <line x1="14" y1="9" x2="14" y2="15"/>
            </svg>
          ) : (
            // play icon
            <svg style={{ width: '3rem' }} viewBox="0 0 24 24" fill="#fff" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="11" fill="none" stroke="#fff"/>
              <polygon points="10,8 16,12 10,16" fill="#fff"/>
            </svg>
          )}
        </button>
      )}

      <button
        className={`mute-button ${showControls ? 'visible' : 'hidden'}`}
        onClick={toggleMute}
      >
        {isMuted ? (
          // muted icon
          <svg style={{ width: '2rem' }} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 5L6 9H3v6h3l5 4V5z"/>
            <line x1="16" y1="9" x2="22" y2="15"/>
            <line x1="22" y1="9" x2="16" y2="15"/>
          </svg>
        ) : (
          // sound icon
         <svg style={{ width: '2rem' }} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 5L6 9H3v6h3l5 4V5z"/>
          <path d="M15.5 8.5a5 5 0 0 1 0 7"/>
          <path d="M19 6a9 9 0 0 1 0 12"/>
        </svg>
        )}
      </button>
    </div>
  )
}

export default VideoPlayer
