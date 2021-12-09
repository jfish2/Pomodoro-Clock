import React from 'react';
import moment from "moment";
import {
    BreakSessionContainer,
    BreakSessionLabel,
    BreakSessionTime, PlusMinusButton,
    PlusMinusButtonContainer
} from "../ui/BreakSessionUI";

const Break= (props) => {
    const {
        breakLength,
        decreaseBreakLength,
        increaseBreakLength,
    } = props

    const breakLengthInMinutes = moment.duration(breakLength, 's').asMinutes();

    return (
        <BreakSessionContainer>
            <BreakSessionLabel id={"break-label"}>
                Break
            </BreakSessionLabel>
            <BreakSessionTime id={"break-length"}>{breakLengthInMinutes}</BreakSessionTime>

            <PlusMinusButtonContainer>
            <PlusMinusButton id={"break-decrement"} onClick={decreaseBreakLength}>-</PlusMinusButton>
            <PlusMinusButton id={"break-increment"} onClick={increaseBreakLength}>+</PlusMinusButton>
            </PlusMinusButtonContainer>
    </BreakSessionContainer>
    );
}

export default Break;