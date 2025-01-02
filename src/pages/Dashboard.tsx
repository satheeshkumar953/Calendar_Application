// import React from 'react';
// import { useStore } from '../store/useStore';
// import { format } from 'date-fns';

// export function Dashboard() {
//   const { companies, communications } = useStore();

//   const getLastFiveCommunications = (companyId: string) => {
//     return communications
//       .filter((comm) => comm.companyId === companyId)
//       .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
//       .slice(0, 5);
//   };

//   const getNextScheduledCommunication = (companyId: string) => {
//     return communications
//       .filter(
//         (comm) => comm.companyId === companyId && !comm.completed && new Date(comm.date) > new Date()
//       )
//       .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())[0];
//   };

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
//       </div>

//       <div className="overflow-hidden rounded-lg bg-white shadow">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Company
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Last Five Communications
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Next Scheduled
//               </th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {companies.map((company) => {
//               const lastFive = getLastFiveCommunications(company.id);
//               const nextScheduled = getNextScheduledCommunication(company.id);

//               return (
//                 <tr key={company.id}>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm font-medium text-gray-900">
//                       {company.name}
//                     </div>
//                   </td>
//                   <td className="px-6 py-4">
//                     <div className="flex space-x-2">
//                       {lastFive.map((comm) => (
//                         <div
//                           key={comm.id}
//                           className="px-2 py-1 bg-gray-100 rounded text-xs"
//                           title={comm.notes}
//                         >
//                           {format(new Date(comm.date), 'MMM d')}
//                         </div>
//                       ))}
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     {nextScheduled && (
//                       <div className="text-sm text-gray-900">
//                         {format(new Date(nextScheduled.date), 'MMM d, yyyy')}
//                       </div>
//                     )}
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import { useStore } from '../store/useStore';
import { format } from 'date-fns';

export function Dashboard() {
  const { companies, communications } = useStore();

  const getLastFiveCommunications = (companyId: string) => {
    return communications
      .filter((comm) => comm.companyId === companyId)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 5);
  };

  const getNextScheduledCommunication = (companyId: string) => {
    return communications
      .filter(
        (comm) => comm.companyId === companyId && !comm.completed && new Date(comm.date) > new Date()
      )
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())[0];
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-purple-800">Dashboard</h1>
      </div>

      <div className="overflow-hidden rounded-lg bg-yellow-100 shadow-md transition-all duration-500">
        <table className="min-w-full divide-y divide-orange-400">
          <thead className="bg-orange-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-orange-900 uppercase tracking-wider">
                Company
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-orange-900 uppercase tracking-wider">
                Last Five Communications
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-orange-900 uppercase tracking-wider">
                Next Scheduled
              </th>
            </tr>
          </thead>
          <tbody className="bg-yellow-50 divide-y divide-orange-300">
            {companies.map((company, companyIndex) => {
              const lastFive = getLastFiveCommunications(company.id);
              const nextScheduled = getNextScheduledCommunication(company.id);

              return (
                <tr
                  key={company.id}
                  className={`transition-transform duration-300 ${
                    companyIndex % 2 === 0 ? "bg-green-100" : "bg-green-200"
                  } hover:scale-[1.02]`}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-purple-900">
                      {company.name}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      {lastFive.map((comm, commIndex) => (
                        <div
                          key={comm.id}
                          className={`px-2 py-1 rounded text-xs ${
                            commIndex % 2 === 0
                              ? "bg-blue-200 text-blue-900"
                              : "bg-pink-200 text-pink-900"
                          } animate-slide-in`}
                          title={comm.notes}
                        >
                          {format(new Date(comm.date), 'MMM d')}
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {nextScheduled && (
                      <div className="text-sm text-purple-800">
                        {format(new Date(nextScheduled.date), 'MMM d, yyyy')}
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
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
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-in-out;
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
}
