import useTimerStore from '../store/timerStore';
import './GoalInput.css';

const GoalInput = () => {
    const { currentGoal, setCurrentGoal } = useTimerStore();

    return (
        <header className="goal-input-header">
            <div className="goal-input-wrapper">
                <input
                    type="text"
                    className="goal-input"
                    placeholder="지금 무엇에 집중하시겠습니까?"
                    value={currentGoal}
                    onChange={(e) => setCurrentGoal(e.target.value)}
                />
                <div className="goal-input-underline"></div>
            </div>
        </header>
    );
};

export default GoalInput;
