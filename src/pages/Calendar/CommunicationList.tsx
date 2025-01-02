import React from 'react';
import { format } from 'date-fns';
import { useStore } from '../../store/useStore';
import { getCommunicationStatus } from './utils';

export function CommunicationList() {
  const { communications, companies } = useStore();
  const sortedCommunications = [...communications].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">Upcoming Communications</h2>
      </div>
      <div className="divide-y">
        {sortedCommunications.map(comm => {
          const company = companies.find(c => c.id === comm.companyId);
          const status = getCommunicationStatus([comm]);
          
          return (
            <div
              key={comm.id}
              className={`p-4 ${
                status === 'overdue' ? 'bg-red-50' :
                status === 'due' ? 'bg-yellow-50' : ''
              }`}
            >
              <div className="font-medium">{company?.name}</div>
              <div className="text-sm text-gray-500">
                {format(new Date(comm.date), 'MMM d, yyyy')}
              </div>
              <div className="text-sm">{comm.notes}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}