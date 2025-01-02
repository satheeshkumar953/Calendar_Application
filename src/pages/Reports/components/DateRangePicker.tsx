import React from 'react';
import { format } from 'date-fns';

interface DateRangePickerProps {
  onChange: (range: { start: Date | null; end: Date | null }) => void;
}

export function DateRangePicker({ onChange }: DateRangePickerProps) {
  return (
    <div className="flex space-x-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Start Date</label>
        <input
          type="date"
          onChange={(e) => onChange({ start: e.target.value ? new Date(e.target.value) : null, end: null })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">End Date</label>
        <input
          type="date"
          onChange={(e) => onChange({ start: null, end: e.target.value ? new Date(e.target.value) : null })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  );
}