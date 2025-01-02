// import React from 'react';
// import { format, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';
// import { useStore } from '../../store/useStore';
// import { CalendarDay } from './CalendarDay';

// export function CalendarGrid() {
//   const [currentDate, setCurrentDate] = React.useState(new Date());
//   const monthStart = startOfMonth(currentDate);
//   const monthEnd = endOfMonth(currentDate);
//   const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

//   return (
//     <div className="bg-white rounded-lg shadow">
//       <div className="p-4 flex items-center justify-between border-b">
//         <h2 className="text-lg font-semibold">{format(currentDate, 'MMMM yyyy')}</h2>
//         <div className="space-x-2">
//           <button
//             onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))}
//             className="px-3 py-1 text-sm border rounded hover:bg-gray-50"
//           >
//             Previous
//           </button>
//           <button
//             onClick={() => setCurrentDate(new Date())}
//             className="px-3 py-1 text-sm border rounded hover:bg-gray-50"
//           >
//             Today
//           </button>
//           <button
//             onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))}
//             className="px-3 py-1 text-sm border rounded hover:bg-gray-50"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//       <div className="grid grid-cols-7 gap-px bg-gray-200">
//         {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
//           <div key={day} className="bg-gray-50 p-2 text-center text-sm font-medium">
//             {day}
//           </div>
//         ))}
//         {days.map((day) => (
//           <CalendarDay key={day.toISOString()} date={day} />
//         ))}
//       </div>
//     </div>
//   );
// }



import React from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';
import { useStore } from '../../store/useStore';
import { CalendarDay } from './CalendarDay';

export function CalendarGrid() {
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  return (
    <div className="bg-blue-100 rounded-lg shadow-lg animate-fade-in">
      <div className="p-4 flex items-center justify-between border-b border-blue-300">
        <h2 className="text-lg font-semibold text-blue-800">{format(currentDate, 'MMMM yyyy')}</h2>
        <div className="space-x-2">
          <button
            onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))}
            className="px-3 py-1 text-sm border rounded bg-yellow-200 text-yellow-800 hover:bg-yellow-300 transition-colors duration-200"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentDate(new Date())}
            className="px-3 py-1 text-sm border rounded bg-green-200 text-green-800 hover:bg-green-300 transition-colors duration-200"
          >
            Today
          </button>
          <button
            onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))}
            className="px-3 py-1 text-sm border rounded bg-yellow-200 text-yellow-800 hover:bg-yellow-300 transition-colors duration-200"
          >
            Next
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-px bg-blue-300">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div
            key={day}
            className="bg-blue-200 p-2 text-center text-sm font-medium text-blue-800 animate-fade-in"
          >
            {day}
          </div>
        ))}
        {days.map((day, index) => (
          <CalendarDay
            key={day.toISOString()}
            date={day}
            className={`bg-green-${index % 2 === 0 ? '100' : '200'} text-green-800`}
          />
        ))}
      </div>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}
