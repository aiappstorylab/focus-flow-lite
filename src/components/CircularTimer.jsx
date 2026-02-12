import { useEffect } from 'react';
import useTimerStore from '../store/timerStore';
import './CircularTimer.css';

const CircularTimer = () => {
    const {
        timeRemaining,
        isRunning,
        isWorkSession,
        workDuration
    } = useTimerStore();

    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    // Calculate progress percentage
    const totalDuration = isWorkSession ? workDuration : useTimerStore.getState().breakDuration;
    const progress = ((totalDuration - timeRemaining) / totalDuration) * 100;

    return (
        <div className="circular-timer-container">
            {/* Outer Glow Ring */}
            <div className="outer-glow-ring"></div>

            {/* Liquid Wave Container */}
            <div className="liquid-wave" style={{ '--fill-level': `${100 - progress}%` }}>
                {/* Inner Content */}
                <div className="timer-content">
                    <span className="timer-display">
                        {minutes}분
                    </span>
                    <p className="session-label">
                        {isWorkSession ? '집중 세션' : '휴식 시간'}
                    </p>
                </div>
            </div>

            {/* Ambient Orbs */}
            <div className="ambient-orb orb-1"></div>
            <div className="ambient-orb orb-2"></div>
        </div>
    );
};

export default CircularTimer;
