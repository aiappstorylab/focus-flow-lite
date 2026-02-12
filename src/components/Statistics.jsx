import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import useTimerStore from '../store/timerStore';
import './Statistics.css';

const Statistics = () => {
    const {
        getWeeklyStats,
        getTotalFocusTime,
        getLongestStreak,
        todayFocusTime
    } = useTimerStore();

    const weeklyData = getWeeklyStats();
    const totalTime = getTotalFocusTime();
    const longestStreak = getLongestStreak();

    // Format date for display
    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return `${date.getMonth() + 1}/${date.getDate()}`;
    };

    // Determine today's flow level
    const getTodayFlowLevel = () => {
        const todayMinutes = Math.floor(todayFocusTime / 60);
        if (todayMinutes >= 120) return '최상';
        if (todayMinutes >= 60) return '좋음';
        if (todayMinutes >= 25) return '보통';
        return '시작';
    };

    return (
        <div className="statistics-container">
            {/* Stats Cards */}
            <div className="stats-cards">
                <div className="stat-card glass-panel">
                    <h3 className="stat-label">총 몰입 시간</h3>
                    <p className="stat-value">{totalTime}분</p>
                </div>

                <div className="stat-card glass-panel">
                    <h3 className="stat-label">오늘의 몰입도</h3>
                    <p className="stat-value">{getTodayFlowLevel()}</p>
                </div>

                <div className="stat-card glass-panel">
                    <h3 className="stat-label">최장 연속 몰입일</h3>
                    <p className="stat-value">{longestStreak}일</p>
                </div>
            </div>

            {/* Weekly Chart */}
            <div className="chart-container glass-panel">
                <h2 className="chart-title">지난 7일간의 몰입 기록</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={weeklyData}>
                        <XAxis
                            dataKey="date"
                            tickFormatter={formatDate}
                            stroke="rgba(255, 255, 255, 0.3)"
                            style={{ fontSize: '0.875rem' }}
                        />
                        <YAxis
                            stroke="rgba(255, 255, 255, 0.3)"
                            style={{ fontSize: '0.875rem' }}
                            label={{ value: '분', angle: -90, position: 'insideLeft', fill: 'rgba(255, 255, 255, 0.5)' }}
                        />
                        <Tooltip
                            contentStyle={{
                                background: 'rgba(10, 12, 18, 0.9)',
                                border: '1px solid rgba(43, 108, 238, 0.3)',
                                borderRadius: '8px',
                                color: 'white'
                            }}
                            labelFormatter={formatDate}
                        />
                        <Bar
                            dataKey="minutes"
                            fill="url(#colorGradient)"
                            radius={[8, 8, 0, 0]}
                        />
                        <defs>
                            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#4fd1c5" stopOpacity={0.8} />
                                <stop offset="100%" stopColor="#2b6cee" stopOpacity={0.6} />
                            </linearGradient>
                        </defs>
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Encouragement Message */}
            <div className="encouragement-message">
                <p>몰입의 기록이 쌓이고 있습니다. 당신의 성장을 응원합니다.</p>
            </div>
        </div>
    );
};

export default Statistics;
