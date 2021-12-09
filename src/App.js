import './assets/main.css';
import Break from "./components/Break";
import Session from "./components/Session";
import React, {useEffect, useRef, useState} from "react";
import Timer from "./components/Timer";

function App() {
    const audioElement = useRef(null);
    const [sessionLength, setSessionLength] = useState(1500);


    const [breakLength, setBreakLength] = useState(300);


    const [intervalId, setIntervalId] = useState(null);
    const [currentStateType, setCurrentStateType] = useState('Do Work');

    const [timeLeft, setTimer] = useState(sessionLength);

    useEffect(() => {
        //change timeLeft when sessionLength is updated
        setTimer(sessionLength)
    }, [sessionLength]);

    useEffect(() => {
            if (timeLeft === 0) {
                audioElement.current.play();
                if (currentStateType === 'Session') {
                    setCurrentStateType('Break');
                    setTimer(breakLength);
                } else if (currentStateType === 'Break') {
                    setCurrentStateType('Session');
                    setTimer(sessionLength);
                }
            }
    }, [breakLength, sessionLength, currentStateType, timeLeft])

    const decreaseBreakLength = () => {
        const newBreakLength = breakLength - 60;
        if (newBreakLength >  0) {
            setBreakLength(newBreakLength);
        }
    }

    const increaseBreakLength = () => {
        const newBreakLength = breakLength + 60;
        if (newBreakLength < 60 * 60) {
            setBreakLength(breakLength + 60);
        }
    };

    const decreaseSessionLength = () => {
        const newSessionLength = sessionLength - 60;
        if (newSessionLength > 0) {
            setSessionLength(newSessionLength);
        }
    };
    const increaseSessionLength = () => {
        const newSessionLength = sessionLength + 60;
        if (newSessionLength < 60 * 60) {
            setSessionLength(sessionLength + 60);
        }
    };

    const isStarted = intervalId != null;

    const handleStartStopClick = () => {
        //decrement timeLeft by one every second by using setInterval func
        //when in stopped mode
        if(isStarted) {
            clearInterval(intervalId);
            setIntervalId(null);
        } else {
            const newIntervalId =  setInterval(() => {
                setTimer(prevTimeLeft => prevTimeLeft - 1);
            }, 1000);
            setIntervalId(newIntervalId);
        }
    };

    const handleResetButtonClick = () => {
        //reset audio
        audioElement.current.load();
        //clear timeout interval
        clearInterval(intervalId);
        // set intervalId to null
        setIntervalId(null);
        //set state type to 'Session'
        setCurrentStateType('Do Work');
        //set break length to 5 minutes and session length to 25 minutes
        setSessionLength(60 * 25);
        setBreakLength(60 * 5);
        setTimer(60 * 25);
    }
  return (
    <div className="flex flex-col h-screen items-center justify-center bg-blue-500">
        <div className={"flex w-full justify-around"}>
        <Break
        breakLength={breakLength}
        decreaseBreakLength={decreaseBreakLength}
        increaseBreakLength={increaseBreakLength}
        />
        <Timer
            timerLabel={currentStateType}
            handleStartStopClick = {handleStartStopClick}
            startStopButtonLabel = {isStarted ? "Stop" : "Start"}
            timeLeft = {timeLeft}
            handleResetButtonClick = {handleResetButtonClick}
        />
        <Session
        sessionLength={sessionLength}
        decreaseSessionLength={decreaseSessionLength}
        increaseSessionLength={increaseSessionLength}
        />
        </div>
        <audio id={"beep"} ref={audioElement}>
            <source src={"https://onlineclock.net/audio/options/default.mp3"} type={"audio/mpeg"} />
        </audio>

    </div>
  );
}

export default App;
