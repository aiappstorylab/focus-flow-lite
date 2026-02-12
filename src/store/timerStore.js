import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useTimerStore = create(
  persist(
    (set, get) => ({
      // Timer Settings
      workDuration: 1500, // 25 minutes in seconds
      breakDuration: 300, // 5 minutes in seconds

      // Timer State
      timeRemaining: 1500,
      isRunning: false,
      isWorkSession: true,
      currentGoal: '',

      // Notification State
      notification: null,

      // History
      focusHistory: [],
      todayFocusTime: 0,

      // Actions
      setWorkDuration: (duration) => set({ workDuration: duration, timeRemaining: duration }),
      setBreakDuration: (duration) => set({ breakDuration: duration }),
      setCurrentGoal: (goal) => set({ currentGoal: goal }),
      clearNotification: () => set({ notification: null }),

      startTimer: () => set({ isRunning: true }),
      pauseTimer: () => set({ isRunning: false }),

      resetTimer: () => {
        const { workDuration, isWorkSession } = get();
        set({
          timeRemaining: isWorkSession ? workDuration : get().breakDuration,
          isRunning: false
        });
      },

      tick: () => {
        const { timeRemaining, isRunning, isWorkSession, workDuration, breakDuration } = get();

        if (!isRunning) return;

        if (timeRemaining > 0) {
          set({ timeRemaining: timeRemaining - 1 });

          // Update today's focus time if it's a work session
          if (isWorkSession) {
            set({ todayFocusTime: get().todayFocusTime + 1 });
          }
        } else {
          // Session completed - save BEFORE toggling session type
          if (isWorkSession) {
            get().saveFocusSession();
            // Show work session completion notification
            set({
              notification: {
                type: 'work',
                message: '잘하셨습니다! 이제 휴식 시간입니다.'
              }
            });
          } else {
            // Show break completion notification
            set({
              notification: {
                type: 'break',
                message: '다음 집중 세션을 시작할 준비가 되셨나요?'
              }
            });
          }

          // Then toggle session type and reset timer
          set({
            isRunning: false,
            isWorkSession: !isWorkSession,
            timeRemaining: !isWorkSession ? workDuration : breakDuration
          });
        }
      },

      saveFocusSession: () => {
        const { focusHistory, workDuration, currentGoal } = get();
        const today = new Date().toISOString().split('T')[0];

        const existingIndex = focusHistory.findIndex(item => item.date === today);

        if (existingIndex >= 0) {
          const updated = [...focusHistory];
          updated[existingIndex].minutes += Math.floor(workDuration / 60);
          updated[existingIndex].sessions += 1;
          set({ focusHistory: updated });
        } else {
          set({
            focusHistory: [
              ...focusHistory,
              {
                date: today,
                minutes: Math.floor(workDuration / 60),
                sessions: 1,
                goal: currentGoal
              }
            ].slice(-7) // Keep only last 7 days
          });
        }
      },

      // Get statistics
      getWeeklyStats: () => {
        const { focusHistory } = get();
        const last7Days = [];
        const today = new Date();

        for (let i = 6; i >= 0; i--) {
          const date = new Date(today);
          date.setDate(date.getDate() - i);
          const dateStr = date.toISOString().split('T')[0];

          const record = focusHistory.find(item => item.date === dateStr);
          last7Days.push({
            date: dateStr,
            minutes: record?.minutes || 0,
            sessions: record?.sessions || 0
          });
        }

        return last7Days;
      },

      getTotalFocusTime: () => {
        return get().focusHistory.reduce((sum, item) => sum + item.minutes, 0);
      },

      getLongestStreak: () => {
        const { focusHistory } = get();
        let currentStreak = 0;
        let maxStreak = 0;

        const sortedHistory = [...focusHistory].sort((a, b) =>
          new Date(a.date) - new Date(b.date)
        );

        for (let i = 0; i < sortedHistory.length; i++) {
          if (sortedHistory[i].minutes > 0) {
            currentStreak++;
            maxStreak = Math.max(maxStreak, currentStreak);
          } else {
            currentStreak = 0;
          }
        }

        return maxStreak;
      }
    }),
    {
      name: 'focus-flow-storage',
      partialize: (state) => ({
        workDuration: state.workDuration,
        breakDuration: state.breakDuration,
        focusHistory: state.focusHistory,
        todayFocusTime: state.todayFocusTime
      })
    }
  )
);

export default useTimerStore;
