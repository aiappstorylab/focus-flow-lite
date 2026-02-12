import { useState } from 'react';
import useTimerStore from '../store/timerStore';
import './DurationControl.css';

const DurationControl = () => {
    const { workDuration, setWorkDuration, isRunning } = useTimerStore();
    const [isEditing, setIsEditing] = useState(false);

    const currentMinutes = Math.floor(workDuration / 60);

    const handleDurationChange = (newMinutes) => {
        if (newMinutes >= 1 && newMinutes <= 60) {
            setWorkDuration(newMinutes * 60);
        }
    };

    const incrementDuration = () => {
        if (currentMinutes < 60) {
            handleDurationChange(currentMinutes + 1);
        }
    };

    const decrementDuration = () => {
        if (currentMinutes > 1) {
            handleDurationChange(currentMinutes - 1);
        }
    };

    return (
        <div className="duration-control">
            <button
                className="duration-btn"
                onClick={decrementDuration}
                disabled={isRunning || currentMinutes <= 1}
                aria-label="시간 감소"
            >
                <span className="material-icons">remove</span>
            </button>

            <div className="duration-display">
                {isEditing ? (
                    <input
                        type="number"
                        className="duration-input"
                        value={currentMinutes}
                        onChange={(e) => handleDurationChange(parseInt(e.target.value) || 1)}
                        onBlur={() => setIsEditing(false)}
                        min="1"
                        max="60"
                        disabled={isRunning}
                        autoFocus
                    />
                ) : (
                    <span
                        className="duration-value"
                        onClick={() => !isRunning && setIsEditing(true)}
                    >
                        {currentMinutes}분
                    </span>
                )}
                <span className="duration-label">집중 시간</span>
            </div>

            <button
                className="duration-btn"
                onClick={incrementDuration}
                disabled={isRunning || currentMinutes >= 60}
                aria-label="시간 증가"
            >
                <span className="material-icons">add</span>
            </button>
        </div>
    );
};

export default DurationControl;
