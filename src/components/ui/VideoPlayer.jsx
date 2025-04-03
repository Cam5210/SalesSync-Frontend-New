import React, { useState, useRef, useEffect } from 'react';

const VideoPlayer = ({
  src,
  poster,
  title = '',
  autoPlay = false,
  muted = false,
  controls = true,
  className = '',
  ...props
}) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  
  // Handle fullscreen toggle
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen()
          .then(() => setIsFullScreen(true))
          .catch(err => setError(`Could not enable full-screen mode: ${err.message}`));
      } else if (containerRef.current.webkitRequestFullscreen) { /* Safari */
        containerRef.current.webkitRequestFullscreen();
        setIsFullScreen(true);
      } else if (containerRef.current.msRequestFullscreen) { /* IE11 */
        containerRef.current.msRequestFullscreen();
        setIsFullScreen(true);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
          .then(() => setIsFullScreen(false))
          .catch(err => setError(`Could not exit full-screen mode: ${err.message}`));
      } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
        setIsFullScreen(false);
      } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
        setIsFullScreen(false);
      }
    }
  };
  
  // Handle play/pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  // Watch for fullscreen change
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };
    
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);
    
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);
  
  // Handle video events
  const handleLoadedData = () => {
    setIsLoading(false);
  };
  
  const handleError = (e) => {
    setIsLoading(false);
    setError('Error loading video');
    console.error('Video error:', e);
  };

  return (
    <div 
      ref={containerRef}
      className={`
        relative overflow-hidden rounded-lg bg-black
        ${isFullScreen ? 'fixed inset-0 z-50 w-screen h-screen' : 'w-full aspect-video'}
        ${className}
      `}
      {...props}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-contain"
        autoPlay={autoPlay}
        muted={muted}
        controls={controls}
        onLoadedData={handleLoadedData}
        onError={handleError}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      
      {/* Loading Indicator */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      )}
      
      {/* Error Message */}
      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-80 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-500 mb-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <p className="text-lg font-semibold">{error}</p>
        </div>
      )}
      
      {/* Custom Controls (shown when browser controls are disabled) */}
      {!controls && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent px-4 py-3 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center justify-between">
            <button 
              onClick={togglePlay}
              className="text-white p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              )}
            </button>
            
            <button 
              onClick={toggleFullScreen}
              className="text-white p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors"
              aria-label={isFullScreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
            >
              {isFullScreen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 100-4 2 2 0 000 4zm9-6a4 4 0 100 8 4 4 0 000-8zm0 6a2 2 0 100-4 2 2 0 000 4zM5 19a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 100-4 2 2 0 000 4zm9-6a4 4 0 100 8 4 4 0 000-8zm0 6a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          </div>
        </div>
      )}
      
      {/* Always show fullscreen button even with native controls */}
      {controls && (
        <button 
          onClick={toggleFullScreen}
          className="absolute top-2 right-2 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-colors z-10"
          aria-label={isFullScreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
        >
          {isFullScreen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 4a1 1 0 00-1 1v4a1 1 0 01-2 0V4a3 3 0 013-3h4a1 1 0 010 2H5zm10 4a1 1 0 011-1h4a1 1 0 010 2h-4a1 1 0 01-1-1zM5 12a1 1 0 00-1 1v4a1 1 0 01-2 0v-4a3 3 0 013-3h4a1 1 0 110 2H5zm14-2a1 1 0 00-1 1v4a1 1 0 01-2 0v-4a3 3 0 013-3h4a1 1 0 010 2h-4z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      )}
      
      {/* Video Title */}
      {title && (
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black to-transparent px-4 py-3 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-white font-semibold truncate">{title}</h3>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
