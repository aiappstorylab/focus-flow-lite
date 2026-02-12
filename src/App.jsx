import { useState, useEffect } from 'react';
import useTimerStore from './store/timerStore';
import GoalInput from './components/GoalInput';
import CircularTimer from './components/CircularTimer';
import TimerControls from './components/TimerControls';
import DurationControl from './components/DurationControl';
import Statistics from './components/Statistics';
import NotificationModal from './components/NotificationModal';
import './App.css';

function App() {
  const [showStats, setShowStats] = useState(false);
  const { isRunning, tick, notification, clearNotification } = useTimerStore();

  // Timer tick effect
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      tick();
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, tick]);

  return (
    <div className="app-container">
      {/* Background Elements */}
      <div className="background-orbs">
        <div className="bg-orb orb-primary"></div>
        <div className="bg-orb orb-teal"></div>
      </div>

      {/* Navigation */}
      <nav className="app-nav">
        <button
          className={`nav-button ${!showStats ? 'active' : ''}`}
          onClick={() => setShowStats(false)}
        >
          타이머
        </button>
        <button
          className={`nav-button ${showStats ? 'active' : ''}`}
          onClick={() => setShowStats(true)}
        >
          통계
        </button>
      </nav>

      {/* Main Content */}
      {!showStats ? (
        <div className="timer-view">
          <GoalInput />

          <main className="timer-main">
            <DurationControl />
            <CircularTimer />
          </main>

          <footer className="timer-footer">
            <TimerControls />
          </footer>
        </div>
      ) : (
        <div className="stats-view">
          <Statistics />
        </div>
      )}

      {/* Notification Modal */}
      <NotificationModal
        isOpen={notification !== null}
        onClose={clearNotification}
        type={notification?.type}
        message={notification?.message}
      />
    </div>
  );
}

export default App;
