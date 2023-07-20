import { StTimerList, StTimerNav, StTimerSection, TimerCol } from "./style"

const Timer = () => {
    return <TimerCol>
        <TimerNav/>
        <TimerSection/>
        <TimerList/>
    </TimerCol>
}

const TimerNav = () => {
    return <StTimerNav></StTimerNav>
}

const TimerSection = () => {
    return <StTimerSection></StTimerSection>
}

const TimerList = () => {
    return <StTimerList></StTimerList>
}



export default Timer