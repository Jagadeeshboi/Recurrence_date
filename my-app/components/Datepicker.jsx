'use client';
import React, { useEffect, useState } from 'react';
import RecurrenceOptions from './RecurrenceOptions';
import CustomRecurrenceForm from './CustomRecurrenceForm';
import CalendarPreview from './CalendarPreview';
import { useGlobalContext } from './Context.js';

const DatePicker = () => {
  const {
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    recurrenceType,
    setRecurrenceType,
    customRecurrence,
    setCustomRecurrence,
  } = useGlobalContext();
  return (
    <div className="date-picker w-full px-5 ">
      <h2 className="text-base font-semibold leading-7 text-gray-900 text-center my-2">
        Select Date
      </h2>
      <div className=" flex justify-between ">
        <div className="flex gap-5 items-center">
          <label
            htmlFor=""
            className="text-sm font-medium leading-6 text-gray-900"
          >
            Present Date
          </label>
          <input
            type="date"
            value={startDate.toISOString().substr(0, 10)}
            onChange={(e) => setStartDate(new Date(e.target.value))}
            className="border-none px-3 py-1 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:outline-none focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md rounded"
          />
        </div>
        <div className="flex gap-5 items-center">
          <label
            htmlFor="Optional End Date"
            className="text-sm font-medium leading-6 text-gray-900"
          >
            End-Date
          </label>
          <input
            type="date"
            value={endDate ? endDate.toISOString().substr(0, 10) : ''}
            onChange={(e) => setEndDate(new Date(e.target.value))}
            placeholder="Optional End Date"
            className={
              'shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:outline-none focus-within:ring-indigo-600 sm:max-w-md px-3 py-1 rounded'
            }
          />
        </div>
      </div>

      <RecurrenceOptions setRecurrenceType={setRecurrenceType} />

      {recurrenceType === 'custom' && (
        <CustomRecurrenceForm setCustomRecurrence={setCustomRecurrence} />
      )}

      <CalendarPreview
        startDate={startDate}
        endDate={endDate}
        recurrenceType={recurrenceType}
        customRecurrence={customRecurrence}
      />
      {recurrenceType === 'none' && (
        <p className="text-center font-bold text-sm text-red-500 mb-2">
          Plaese Select Dates and Recurrence{' '}
        </p>
      )}
    </div>
  );
};

export default DatePicker;
