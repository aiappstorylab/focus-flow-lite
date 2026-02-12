import useTimerStore from '../store/timerStore';
import './TimerControls.css';

const TimerControls = () => {
    const {
        isRunning,
        startTimer,
        pauseTimer,
        resetTimer
    } = useTimerStore();

    return (
        <div className="timer-controls">
            <button
                className="control-button secondary"
                onClick={resetTimer}
                aria-label="초기화"
            >
                <span className="material-icons">refresh</span>
            </button>

            <button
                className="control-button primary glow-hover"
                onClick={isRunning ? pauseTimer : startTimer}
                aria-label={isRunning ? "일시정지" : "시작"}
            >
                <span className="material-icons">
                    {isRunning ? 'pause' : 'play_arrow'}
                </span>
            </button>

            <button
                className="control-button secondary"
                onClick={pauseTimer}
                aria-label="일시정지"
                disabled={!isRunning}
            >
                <span className="material-icons">pause</span>
            </button>
        </div>
    );
};

export default TimerControls;
