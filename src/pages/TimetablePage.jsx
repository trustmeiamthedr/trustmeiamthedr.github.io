import React from 'react';
import './TimetablePage.css';
import Breadcrumbs from '../components/Breadcrumbs';

const TimetablePage = () => {
    const year = 2026;
    const month = 1; // January (1-indexed for display, but Date uses 0-indexed)

    // Helper to get days in month
    const getDaysInMonth = (y, m) => new Date(y, m, 0).getDate();

    // Helper to get day of week for 1st of month (0=Sun, 6=Sat)
    const getFirstDayOfMonth = (y, m) => new Date(y, m - 1, 1).getDay();

    const totalDays = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);

    // Generate calendar cells
    const days = [];

    // Empty cells for previous month
    for (let i = 0; i < firstDay; i++) {
        days.push({ type: 'empty', key: `empty-${i}` });
    }

    // Today's date check
    const todayDate = new Date();
    const isCurrentMonth = todayDate.getFullYear() === year && (todayDate.getMonth() + 1) === month;
    const currentDay = todayDate.getDate();

    // Days for current month
    for (let d = 1; d <= totalDays; d++) {
        const date = new Date(year, month - 1, d);
        const dayOfWeek = date.getDay(); // 0 is Sunday

        let info = [];
        let status = 'normal'; // normal, holiday, closed
        const isToday = isCurrentMonth && d === currentDay;

        // Logic
        if (d === 1) { // Jan 1 New Year
            info.push({ text: '새해', type: 'holiday', time: '휴진' });
            status = 'holiday';
        } else if (d === 30) { // Jan 30 Special Closing
            info.push({ text: '휴진', type: 'closed', time: '휴무' });
            status = 'closed';
        } else if (dayOfWeek === 0) { // Sunday
            status = 'closed';
        } else if (dayOfWeek === 6) { // Saturday
            // Specific schedule for Jan 2026
            const openSaturdays = [3, 17, 24];
            if (openSaturdays.includes(d)) {
                info.push({ text: '진료', type: 'open', time: '10:00 - 12:00' });
            } else {
                info.push({ text: '휴진', type: 'closed', time: '휴무' });
                status = 'closed';
            }
        } else {
            // Mon-Fri
            // Add schedule
            info.push({ text: '진료', type: 'open', time: '09:30 - 19:00' });
        }

        days.push({
            type: 'day',
            key: `day-${d}`,
            day: d,
            dayOfWeek,
            info,
            status,
            isToday
        });
    }

    const dayNames = ['일', '월', '화', '수', '목', '금', '토'];

    return (
        <>
            <div className="page-hero">
                <div className="container">
                    <h1>진료 시간표</h1>
                    <p>환자분의 편안한 내원을 위해 진료 시간을 안내해 드립니다.</p>
                </div>
            </div>
            <Breadcrumbs title="Timetable" />
            <div className="timetable-container">
                <div className="timetable-header">
                    <h2>{year}년 {month}월</h2>
                    {/* <div className="timetable-controls">
                    <button className="timetable-btn">&lt;</button>
                    <button className="timetable-btn">오늘 정상진료</button>
                    <button className="timetable-btn">&gt;</button>
                </div> */}
                </div>

                <div className="calendar-grid">
                    {/* Headers */}
                    {dayNames.map((name, i) => (
                        <div key={name} className={`calendar-header-cell ${i === 0 ? 'sunday' : ''} ${i === 6 ? 'saturday' : ''}`}>
                            {name}
                        </div>
                    ))}

                    {/* Days */}
                    {days.map(item => {
                        if (item.type === 'empty') {
                            return <div key={item.key} className="calendar-day-cell empty"></div>;
                        }

                        const isSunday = item.dayOfWeek === 0;
                        const isSaturday = item.dayOfWeek === 6;

                        return (
                            <div key={item.key} className={`calendar-day-cell ${isSunday ? 'sunday' : ''} ${isSaturday ? 'saturday' : ''} ${item.isToday ? 'today' : ''}`} data-dayname={dayNames[item.dayOfWeek]}>
                                <div className="day-number">{item.day}일</div>
                                <div className="day-content">
                                    {item.info.map((event, idx) => (
                                        <div key={idx} className="schedule-info">
                                            {event.type === 'holiday' && (
                                                <span className="holiday-badge">{event.text}</span>
                                            )}

                                            {event.type !== 'holiday' && (
                                                <div className="schedule-row">
                                                    <span className={`schedule-dot ${event.type}`}></span>
                                                    <span className="schedule-text">{event.text}</span>
                                                    {event.time && <span className="schedule-time">{event.time}</span>}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div style={{ marginTop: '20px', fontSize: '14px', color: '#666', lineHeight: '1.6' }}>
                    <p>※ 점심시간 없이 진료합니다.</p>
                    <p>※ 일요일 및 공휴일은 휴진입니다.</p>
                    <p>※ 토요일은 격주 진료합니다. 미리 확인/예약해주세요. (070-7759-7779)</p>
                </div>
            </div>
        </>
    );
};

export default TimetablePage;
