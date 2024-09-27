import React from 'react';
import { generateRecurringDates } from './utils';

const CalendarPreview = ({
  startDate,
  endDate,
  recurrenceType,
  customRecurrence,
}) => {
  const recurringDates = generateRecurringDates(
    startDate,
    endDate,
    recurrenceType,
    customRecurrence
  );

  return (
    <div className="calendar-preview flex flex-col justify-center my-5">
      <h3 className="text-center text-base font-semibold leading-7 text-gray-900">
        Preview
      </h3>
      <ul>
        {recurringDates.map((date, index) => (
          <li key={index} className="shadow-lg py-1 px-2 rounded text-lg">
            {date.toLocaleDateString('en-GB') === 'Invalid Date'
              ? 'Please Apply Button'
              : date.toLocaleDateString('en-GB')}{' '}
            -
            {date.toLocaleDateString('en-Us', { weekday: 'long' }) !=
              'Invalid Date' &&
              (date.toLocaleDateString('en-Us', { weekday: 'long' }) !=
              'Sunday' ? (
                date.toLocaleDateString('en-Us', { weekday: 'long' })
              ) : (
                <span className="text-red-500">
                  {date.toLocaleDateString('en-Us', { weekday: 'long' })}
                </span>
              ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalendarPreview;
