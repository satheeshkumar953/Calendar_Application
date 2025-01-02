import React from 'react';
import { format, isSameDay } from 'date-fns';
import { useStore } from '../../store/useStore';
import { getCommunicationStatus } from './utils';

interface CalendarDayProps {
  date: Date;
}

export function CalendarDay({ date }: CalendarDayProps) {
  const { communications } = useStore();
  const todaysCommunications = communications.filter(comm => 
    isSameDay(new Date(comm.date), date)
  );
  const status = getCommunicationStatus(todaysCommunications);

  return (
    <div className={`bg-white p-2 min-h-[100px] ${
      status === 'overdue' ? 'bg-red-50' :
      status === 'due' ? 'bg-yellow-50' :
      status === 'completed' ? 'bg-green-50' : ''
    }`}>
      <div className="text-sm font-medium">{format(date, 'd')}</div>
      {todaysCommunications.length > 0 && (
        <div className="mt-1">
          {todaysCommunications.map(comm => (
            <div
              key={comm.id}
              className="text-xs p-1 mb-1 rounded bg-gray-100"
              title={comm.notes}
            >
              {comm.methodId}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}