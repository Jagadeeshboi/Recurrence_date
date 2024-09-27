'use client';
import React from 'react';

const RecurrenceOptions = ({ setRecurrenceType }) => {
  return (
    <div className="recurrence-options flex mt-5 gap-8 items-center">
      <h3 className="text-sm font-medium leading-6 text-gray-900">Recurrence</h3>
      <select
        onChange={(e) => setRecurrenceType(e.target.value)}
        className="border border-slate-300 rounded px-2 py-1 focus-within:ring-1 focus-within:ring-inset focus-within:ring-indigo-600 text-stone-500"
      >
        <option value="none" className="text-stone-500">
          None
        </option>
        <option value="daily" className="text-stone-500">Daily</option>
        <option value="weekly" className="text-stone-500">Weekly</option>
        <option value="monthly" className="text-stone-500">Monthly</option>
        <option value="yearly" className="text-stone-500">Yearly</option>
        <option value="custom" className="text-stone-500">Custom</option>
      </select>
    </div>
  );
};

export default RecurrenceOptions;
