import React, {useState} from 'react';

const Calendar = ({ onDateChange, initialDate }) => {
    const [currentDate, setCurrentDate] = useState(initialDate || new Date());
    const [selectedDate, setSelectedDate] = useState(currentDate);

    const prevMonth = () => {
        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);
        setCurrentDate(newDate);
    };

    const nextMonth = () => {
        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);
        setCurrentDate(newDate);
    };

    const selectDate = (date) => {
        setSelectedDate(date);
        if (onDateChange) {
            onDateChange(date);
        }
    };

    const renderCalendar = () => {
        const month = currentDate.getMonth();
        const year = currentDate.getFullYear();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startDay = firstDay.getDay();

        const daysArray = [];
        for (let i = 0; i < startDay; i++) {
            daysArray.push(<div key={`empty-${i}`} className="empty"></div>);
        }
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            daysArray.push(
                <div
                    key={day}
                    className={`day ${selectedDate.toDateString() === date.toDateString() ? 'selected' : ''}`}
                    onClick={() => selectDate(date)}
                >
                    {day}
                </div>
            );
        }

        return daysArray;
    };

    return (
        <div className="calendar">
            <div className="header">
                <button onClick={prevMonth}>Prev</button>
                <h2>{currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}</h2>
                <button onClick={nextMonth}>Next</button>
            </div>
            <div className="days-of-week">
                <div class="day-of-week">Sun</div>
                <div class="day-of-week">Mon</div>
                <div class="day-of-week">Tue</div>
                <div class="day-of-week">Wed</div>
                <div class="day-of-week">Thu</div>
                <div class="day-of-week">Fri</div>
                <div class="day-of-week">Sat</div>
            </div>
            <div className="days">
                {renderCalendar()}
            </div>
        </div>
    );
};


export default Calendar;