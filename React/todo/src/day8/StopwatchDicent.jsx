import { useRef, useState, useEffect } from "react";

// Function to format time correctly with leading zeros
const fixTimeString = (time) => {
  return time < 10 ? `0${time}` : time;
};

// Function to format the timer as HH:MM:SS.CC (where CC are hundredths of a second)
const formatTimeToString = (time) => {
  const centiseconds = Math.floor((time % 1000) / 10); // Get hundredths of a second
  const seconds = Math.floor(time / 1000) % 60;
  const minutes = Math.floor(time / 60000) % 60;
  const hours = Math.floor(time / 3600000);
  return `${fixTimeString(hours)}:${fixTimeString(minutes)}:${fixTimeString(
    seconds
  )}.${fixTimeString(centiseconds)}`;
};

// Stopwatch component
export const StopwatchDicent = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false); // New state to track if the timer is running or paused
  const [splits, setSplits] = useState([]);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const ref = useRef(null);
  const splitsEndRef = useRef(null);
  const containerRef = useRef(null);

  // Start the stopwatch
  const startStopwatch = () => {
    if (ref.current != null) return;

    const startTime = Date.now() - timer;
    ref.current = setInterval(() => {
      setTimer(Date.now() - startTime);
    }, 10); // Update every 10ms to reflect hundredths of a second
    setIsRunning(true); // Set to true when the timer starts running
  };

  // Pause the stopwatch
  const pauseStopwatch = () => {
    clearInterval(ref.current);
    ref.current = null;
    setIsRunning(false); // Set to false when the timer is paused
  };

  // Reset the stopwatch
  const resetStopwatch = () => {
    pauseStopwatch();
    setTimer(0);
    setSplits([]);
  };

  // Record a split time
  const splitTime = () => {
    setSplits((prevSplits) => [...prevSplits, formatTimeToString(timer)]);
  };

  // Toggle fullscreen mode
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Scroll to the latest split
  useEffect(() => {
    if (splits.length > 0) {
      splitsEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [splits]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearInterval(ref.current);
    };
  }, []);

  return (
    <div
      style={{
        ...styles.container,
        ...(isFullscreen ? styles.fullscreenContainer : {}),
      }}
      ref={containerRef}
    >
      <h1
        style={{
          ...styles.timer,
          ...(isFullscreen ? styles.fullscreenTimer : {}),
        }}
      >
        {formatTimeToString(timer)}
      </h1>
      <div style={styles.buttonContainer}>
        <button
          style={styles.lapButton}
          onClick={splitTime}
        >
          LAP
        </button>
        <button
          style={styles.pauseButton}
          onClick={isRunning ? pauseStopwatch : startStopwatch}
        >
          {isRunning ? "PAUSE" : "START"} {/* Button text toggles based on isRunning state */}
        </button>
        <button
          style={styles.resetButton}
          onClick={resetStopwatch}
        >
          RESET
        </button>
        <button
          style={styles.fullscreenButton}
          onClick={toggleFullscreen}
        >
          ⤢
        </button>
      </div>

      {splits.length > 0 && (
        <div style={styles.splitsContainer}>
          <h2 style={styles.splitsHeader}>Splits:</h2>
          <ul style={styles.splitsList}>
            {splits.map((split, index) => (
              <li style={styles.splitItem} key={index}>
                {split}
              </li>
            ))}
            <div ref={splitsEndRef} />
          </ul>
        </div>
      )}
    </div>
  );
};

// Styles for the Stopwatch component
const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0F172A", // Matches the background color from your screenshot
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "400px",
    margin: "0 auto",
    marginTop: "50px",
  },
  fullscreenContainer: {
    width: "100vw",
    height: "100vh",
    marginTop: "0",
    padding: "0",
    justifyContent: "center",
    borderRadius: "0",
  },
  timer: {
    fontSize: "48px",
    margin: "20px 0",
    color: "#FFFFFF",
    minWidth: "300px", // Set a fixed width to prevent shaking
    textAlign: "center",
    fontFamily: "'Courier New', monospace", // Monospace font for even letter spacing
  },
  fullscreenTimer: {
    fontSize: "15vw", // Dynamically adjust based on the viewport width in fullscreen
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  },
  lapButton: {
    backgroundColor: "transparent",
    border: "2px solid #3B82F6",
    color: "#3B82F6",
    borderRadius: "50px", // Rounded button
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  pauseButton: {
    backgroundColor: "#6366F1", // Button color to match your screenshot
    border: "none",
    color: "#FFFFFF",
    borderRadius: "50%", // Fully rounded for pause/start button
    width: "80px",
    height: "80px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  resetButton: {
    backgroundColor: "#1E293B",
    border: "none",
    color: "#FFFFFF",
    borderRadius: "50px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  fullscreenButton: {
    backgroundColor: "#1E293B",
    border: "none",
    color: "#FFFFFF",
    borderRadius: "50px",
    padding: "10px 15px",
    fontSize: "20px",
    cursor: "pointer",
  },
  splitsContainer: {
    marginTop: "20px",
    width: "100%",
    maxHeight: "150px",
    overflowY: "auto",
    color: "#FFFFFF",
  },
  splitsHeader: {
    textAlign: "center",
    color: "#FFFFFF",
    marginBottom: "10px",
  },
  splitsList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  splitItem: {
    padding: "5px 10px",
    borderBottom: "1px solid #2D3748",
  },
};

