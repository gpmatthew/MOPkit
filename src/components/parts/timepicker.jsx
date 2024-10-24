import React, { useState, useEffect } from 'react';

const TimePicker = ({ value, changeHandler }) => {
    const [selectedTime, setSelectedTime] = useState(new Date());
    const [hours, setHours] = useState(selectedTime.getHours() % 12 || 12);
    const [minutes, setMinutes] = useState(selectedTime.getMinutes());
    const [period, setPeriod] = useState(selectedTime.getHours() >= 12 ? 'PM' : 'AM');

    useEffect(() => {
        if (value instanceof Date) {
            setSelectedTime(value);
            setHours(value.getHours() % 12 || 12);
            setMinutes(value.getMinutes());
            setPeriod(value.getHours() >= 12 ? 'PM' : 'AM');
        } else {
            const now = new Date();
            setSelectedTime(now);
            setHours(now.getHours() % 12 || 12);
            setMinutes(now.getMinutes());
            setPeriod(now.getHours() >= 12 ? 'PM' : 'AM');
        }
    }, [value]);

    const updateTime = (newHours, newMinutes, newPeriod) => {
        const adjustedHours = newPeriod === 'PM' && newHours !== 12 ? newHours + 12 : newHours === 12 && newPeriod === 'AM' ? 0 : newHours;
        const newDate = new Date(selectedTime);
        newDate.setHours(adjustedHours);
        newDate.setMinutes(newMinutes);
        setSelectedTime(newDate);
        if (changeHandler) {
            changeHandler(newDate);
        }
    };

    const handleHoursChange = (event) => {
        const newHours = parseInt(event.target.value, 10);
        setHours(newHours);
        updateTime(newHours, minutes, period);
    };

    const handleMinutesChange = (event) => {
        const newMinutes = parseInt(event.target.value, 10);
        setMinutes(newMinutes);
        updateTime(hours, newMinutes, period);
    };

    const handlePeriodChange = (event) => {
        const newPeriod = event.target.value;
        setPeriod(newPeriod);
        updateTime(hours, minutes, newPeriod);
    };

    const handleClockClick = (event) => {
        const rect = event.target.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2; // Calculate x position relative to center
        const y = event.clientY - rect.top - rect.height / 2; // Calculate y position relative to center

        // Calculate the angle of the click
        const angle = Math.atan2(y, x);
        const hour = Math.round((angle * (180 / Math.PI) + 360) / 30) % 12 || 12; // Calculate hour from angle
        const minute = Math.round((Math.sqrt(x * x + y * y) / 100) * 60); // Calculate minute (0-60)

        // Update the time based on the clicked position
        updateTime(hour, minute, period);
    };

    const hourDegrees = (hours + (minutes / 60)) * 30; // Hour hand rotation
    const minuteDegrees = minutes * 6; // Minute hand rotation

    return (
        <div className="time-picker-clock">
            <div className="time-picker-select">
                <select value={hours} onChange={handleHoursChange}>
                    {[...Array(12)].map((_, i) => (
                        <option key={i} value={i + 1}>{i + 1}</option>
                    ))}
                </select>
                :
                <select value={minutes} onChange={handleMinutesChange}>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59].map(minute => (
                        <option key={minute} value={minute}>{minute < 10 ? `0${minute}` : minute}</option>
                    ))}
                </select>
                <select value={period} onChange={handlePeriodChange}>
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                </select>
            </div>
            <div className="clock" onClick={handleClockClick}>
                <div className="hand hour-hand" style={{ transform: `rotate(${hourDegrees}deg)` }} />
                <div className="hand minute-hand" style={{ transform: `rotate(${minuteDegrees}deg)` }} />
                <div className="center-dot" />
                {[...Array(12)].map((_, i) => {
                    const angle = (i * 30) * (Math.PI / 180);
                    const x = 100 + 70 * Math.sin(angle);
                    const y = 100 - 70 * Math.cos(angle);
                    return (
                        <div key={i} className="hour-marker" style={{ left: `${x}px`, top: `${y}px` }}>
                            {i === 0 ? 12 : i}
                        </div>
                    );
                })}
            </div>
            <div className="selected-time">
                <label>Selected Time: </label>
                <span>{selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</span>
            </div>
        </div>
    );
};

export default TimePicker;
