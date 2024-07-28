import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }){
    const timer = useRef();
    const dialog = useRef();
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    function handelStart(){
        timer.current = setTimeout(() => {
            setTimerExpired(true);
            dialog.current.open();
        }, targetTime * 1000);
        
        setTimerStarted(true);
    }
    function handelStop(){
        clearTimeout(timer.current);
    }
    
    return(
        <>
            <ResultModal ref={dialog} result="Lost" targetTime={targetTime}/>
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's': ''}
                </p>
                <p>
                    <button onClick={timerStarted ? handelStop: handelStart}>
                        {timerStarted ? 'stop': 'start'} challenge
                    </button>
                </p>
                <p className={timerStarted ? 'active': undefined}>
                    {timerStarted ? 'time is running': 'timer inactive'}
                </p>
            </section>
        </>
    );
}
