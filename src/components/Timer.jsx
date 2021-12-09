import React from "react";
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup(moment)

const Timer = ({timerLabel, timeLeft, handleStartStopClick, startStopButtonLabel, handleResetButtonClick}) => {

    const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', {trim: false});

    return (
        <div className={"flex flex-col justify-evenly items-center w-64 h-64 bg-green-900 rounded-full"}>
            <p className={"text-white-900 text-2xl"} id={"timer-label"}>{timerLabel}</p>
            <p className={"font-cool text-4xl font-bold"} id={"time-left"}>{formattedTimeLeft}</p>

            <button className={"text-white-300 font-bold bg-green-900 px-4 py-2 rounded-lg"} id={"start_stop"}
                    onClick={handleStartStopClick}>
                {startStopButtonLabel}
            </button>
            <button className={"border-2 text-white-300 font-semibold rounded border-green-900 border-solid px-4 py-2"} id={"reset"} onClick={handleResetButtonClick}>
                Reset
            </button>
    </div>
    );
};

export default Timer;