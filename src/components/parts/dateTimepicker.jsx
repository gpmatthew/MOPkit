import React, { useState, useEffect } from 'react';

const DateTimePicker = ({ value = new Date(), changeHandler }) => {
    const [selectedDate, setSelectedDate] = useState(value);
    const [currentMonth, setCurrentMonth] = useState(value.getMonth());
    const [currentYear, setCurrentYear] = useState(value.getFullYear());
    const [hours, setHours] = useState(value.getHours());
    const [minutes, setMinutes] = useState(value.getMinutes());

    useEffect(() => {
        setSelectedDate(value);
        setCurrentMonth(value.getMonth());
        setCurrentYear(value.getFullYear());
        setHours(value.getHours());
        setMinutes(value.getMinutes());
    }, [value]);

    const handleDateClick = (day) => {
        const newDate = new Date(currentYear, currentMonth, day, hours, minutes);
        setSelectedDate(newDate);
        if (changeHandler) {
            changeHandler(newDate);
        }
    };

    const generateCalendar = () => {
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        const weeks = [];
        let week = Array(7).fill(null);

        for (let day = 1; day <= daysInMonth; day++) {
            week[(firstDay + day - 1) % 7] = day;
            if ((firstDay + day) % 7 === 0 || day === daysInMonth) {
                weeks.push(week);
                week = Array(7).fill(null);
            }
        }

        return weeks;
    };

    const calendarWeeks = generateCalendar();

    const changeMonth = (direction) => {
        if (direction === 'prev') {
            if (currentMonth === 0) {
                setCurrentMonth(11);
                setCurrentYear(currentYear - 1);
            } else {
                setCurrentMonth(currentMonth - 1);
            }
        } else {
            if (currentMonth === 11) {
                setCurrentMonth(0);
                setCurrentYear(currentYear + 1);
            } else {
                setCurrentMonth(currentMonth + 1);
            }
        }
    };

    const formatDate = (date) => {
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const year = date.getFullYear();
        return `${month}/${day}/${year}`;
    };

    const formatTime = (h, m) => {
        const hoursFormatted = String(h).padStart(2, '0');
        const minutesFormatted = String(m).padStart(2, '0');
        return `${hoursFormatted}:${minutesFormatted}`;
    };

    const handleHourChange = (event) => {
        const newHours = parseInt(event.target.value);
        setHours(newHours);
        const newDate = new Date(currentYear, currentMonth, selectedDate.getDate(), newHours, minutes);
        setSelectedDate(newDate);
        if (changeHandler) {
            changeHandler(newDate);
        }
    };

    const handleMinuteChange = (event) => {
        const newMinutes = parseInt(event.target.value);
        setMinutes(newMinutes);
        const newDate = new Date(currentYear, currentMonth, selectedDate.getDate(), hours, newMinutes);
        setSelectedDate(newDate);
        if (changeHandler) {
            changeHandler(newDate);
        }
    };

    return (
        <div className="date-time-picker">
            <div className="calendar">
                <div className="header">
                    <button onClick={() => changeMonth('prev')}>Prev</button>
                    <h2>{`${currentMonth + 1}/${currentYear}`}</h2>
                    <button onClick={() => changeMonth('next')}>Next</button>
                </div>
                <div className="days-of-week">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                        <div key={day} className="day-of-week">{day}</div>
                    ))}
                </div>
                {calendarWeeks.map((week, index) => (
                    <div key={index} className="days">
                        {week.map((day, dayIndex) => (
                            <div
                                key={dayIndex}
                                className={`day ${day ? 'filled' : 'empty'} ${day === selectedDate.getDate() && currentMonth === selectedDate.getMonth() && currentYear === selectedDate.getFullYear() ? 'selected' : ''}`}
                                onClick={() => day && handleDateClick(day)}
                            >
                                {day}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="flex-container">
                <div className="time-picker">
                    <label>Time: </label>
                    <div className="time-container">
                        <select value={hours} onChange={handleHourChange}>
                            {Array.from({ length: 24 }, (_, i) => (
                                <option key={i} value={i}>{String(i).padStart(2, '0')}</option>
                            ))}
                        </select>
                        <span>:</span>
                        <select value={minutes} onChange={handleMinuteChange}>
                            {Array.from({ length: 60 }, (_, i) => (
                                <option key={i} value={i}>{String(i).padStart(2, '0')}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="selected-date">
                    <label>Selected Date: </label>
                    <p>{formatDate(selectedDate)} {formatTime(hours, minutes)}</p>
                </div>
            </div>
        </div>
    );
};

export default DateTimePicker;
