import React from 'react';
import moment from "moment";
import {
    BreakSessionContainer,
    BreakSessionLabel,
    BreakSessionTime, PlusMinusButton,
    PlusMinusButtonContainer
} from "../ui/BreakSessionUI";

const Session = (props) => {
    const {
        sessionLength,
        decreaseSessionLength,
        increaseSessionLength,
    } = props;
    const sessionLengthInMinutes = moment.duration(sessionLength, 's').asMinutes();
    return (
        <BreakSessionContainer>
            <BreakSessionLabel id={"session-label"}>
                Do Work
            </BreakSessionLabel>
            <BreakSessionTime id={"session-length"}>{sessionLengthInMinutes}</BreakSessionTime>

            <PlusMinusButtonContainer>
                <PlusMinusButton id={"session-decrement"} onClick={decreaseSessionLength}>-</PlusMinusButton>
                <PlusMinusButton id={"session-increment"} onClick={increaseSessionLength}>+</PlusMinusButton>

            </PlusMinusButtonContainer>
        </BreakSessionContainer>
    );
};

export default Session;