import React, { useState, useEffect } from 'react';

const DatePicker = ({ initialDate = new Date(), onDateChange }) => {
    const [selectedDate, setSelectedDate] = useState(initialDate);
    const [currentMonth, setCurrentMonth] = useState(initialDate.getMonth());
    const [currentYear, setCurrentYear] = useState(initialDate.getFullYear());

    useEffect(() => {
        setSelectedDate(initialDate);
        setCurrentMonth(initialDate.getMonth());
        setCurrentYear(initialDate.getFullYear());
    }, [initialDate]);

    const handleDateClick = (day) => {
        const newDate = new Date(currentYear, currentMonth, day);
        setSelectedDate(newDate);
        if (onDateChange) {
            onDateChange(newDate);
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

    const days = [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat',
    ]

    return (
        <div className="date-picker">
            <div className="calendar">
                <div className="header">
                    <button onClick={() => changeMonth('prev')}>Prev</button>
                    <h2>{`${currentMonth + 1}/${currentYear}`}</h2>
                    <button onClick={() => changeMonth('next')}>Next</button>
                </div>
                <div className="days-of-week">
                    { days && days.map( (day,index)  => <div className="day-of-week" key={index}>{day}</div>)}
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
            <div className="selected-date">
                <label>Selected Date: </label>
                <p>{formatDate(selectedDate)}</p>
            </div>
        </div>
    );
};

export default DatePicker;
