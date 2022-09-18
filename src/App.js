import { useTimer } from 'react-timer-hook';

import './App.css';

import {TimerDisplay} from "./components/TimerDisplay";


function App() {
  const time = new Date();
  time.setMinutes(time.getMinutes() + 20);
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({expiryTimestamp: time});

  return (
    <div className="App">
      <header className="App-header">
      <h1>react-timer-hook </h1>
      <p>Timer Demo</p>
      <TimerDisplay className="Timer" days={days} hours={hours} minutes={minutes} seconds={seconds} />
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button onClick={() => {
        // Restarts to 20 minute timer
        const time = new Date();
        time.setMinutes(time.getMinutes() + 20);
        restart(time)
      }}>Restart</button>
      </header>
    </div>
  );
}

export default App;
