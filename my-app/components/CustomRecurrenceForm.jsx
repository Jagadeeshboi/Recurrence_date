import React, { useState } from 'react';
import { useGlobalContext } from './Context.js';
const CustomRecurrenceForm = ({ setCustomRecurrence }) => {
  const { recurrenceSettings, setRecurrenceSettings } = useGlobalContext();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setCustomRecurrence({
      interval: recurrenceSettings?.interval,
      daysOfWeek: recurrenceSettings?.daysOfWeek,
      nthDay: recurrenceSettings?.nthDay,
      Year: recurrenceSettings?.Year,
    });
  };

  return (
    <form onSubmit={handleFormSubmit} className="width-full shadow-lg p-4">
      <h1 className="text-center text-sm font-medium leading-6 text-gray-90">
        Custom Page
      </h1>
      <div className="grid grid-cols-2 p-2  items-center text-left">
        <label className="place-self-center py-2">
          Number of days
          <br />
          <input
            type="number"
            value={recurrenceSettings?.interval}
            onChange={(e) =>
              setRecurrenceSettings((prev) => ({
                ...prev,
                interval: Number(e.target.value),
              }))
            }
            className={
              'shadow-sm ring-1 ring-inset ring-gray-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md px-3 py-1 rounded '
            }
          />
        </label>

        <label className="place-self-center py-2">
          number of weeks:
          <br />
          <input
            type="number"
            value={recurrenceSettings.daysOfWeek}
            onChange={(e) =>
              setRecurrenceSettings((prev) => ({
                ...prev,
                daysOfWeek: Number(e.target.value),
              }))
            }
            className={
              'shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:outline-none focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md px-3 py-1 rounded'
            }
          />
        </label>

        <label className="place-self-center py-2">
          Number of months:
          <br />
          <input
            type="number"
            value={recurrenceSettings.nthDay}
            onChange={(e) =>
              setRecurrenceSettings((prev) => ({
                ...prev,
                nthDay: Number(e.target.value),
              }))
            }
            className={
              'shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:outline-none focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md px-3 py-1 rounded '
            }
          />
        </label>

        <label className="place-self-center py-2">
          Number of years:
          <br />
          <input
            type="number"
            value={recurrenceSettings.Year}
            onChange={(e) =>
              setRecurrenceSettings((prev) => ({
                ...prev,
                Year: Number(e.target.value),
              }))
            }
            className={
              'shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:outline-none focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md px-3 py-1 rounded'
            }
          />
        </label>
      </div>

      <div className="w-full mx-auto text-center">
        <button
          type="submit"
          className="bg-blue-500 px-3 py-1 rounded text-stone-100 my-2 cursor-pointer"
        >
          {' '}
          Apply
        </button>
      </div>
    </form>
  );
};

export default CustomRecurrenceForm;
