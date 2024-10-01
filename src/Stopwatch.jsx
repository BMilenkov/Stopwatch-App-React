import React,{useState,useEffect} from "react"

function Stopwatch(){
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(() => {
        let interval;

        if (isRunning) {
          interval = setInterval(() => {
            setElapsedTime((prevTime) => prevTime + 10);
          }, 10);
        }

        return () => clearInterval(interval);
      }, [isRunning]);

    function start(){
        setIsRunning(true);
    }

    function stop(){
        setIsRunning(false);
    }

    function reset(){
        setIsRunning(false);
        setElapsedTime(0);
    }

    function formatTime(){
        const milliseconds = String((elapsedTime % 1000) / 10).padStart(2,"0");
        const seconds = String(Math.floor((elapsedTime / 1000) % 60)).padStart(2,"0");
        const minutes = String(Math.floor((elapsedTime / 60000) % 60)).padStart(2,"0");

        return `${minutes}:${seconds}:${milliseconds}`;
    }

    return(<div className="stopwatch">
        <div className="clock">🕒Timer</div>
        <div className="display">{formatTime()}</div>
        <div className="controls">
            <button onClick={() => start()} className="start-button">Start</button>
            <button onClick={() => stop()} className="stop-button">Stop</button>
            <button onClick={() => reset()} className="reset-button">Reset</button>
        </div>
    </div>);
}

export default Stopwatch