// import React from 'react';
// import { useStore } from '../../store/useStore';
// import { CompanyRow } from './CompanyRow';

// export function CompanyList() {
//   const { companies } = useStore();

//   return (
//     <div className="overflow-hidden bg-white shadow sm:rounded-lg">
//       <table className="min-w-full divide-y divide-gray-200">
//         <thead className="bg-gray-50">
//           <tr>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Periodicity</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//           {companies.map((company) => (
//             <CompanyRow key={company.id} company={company} />
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

import React from 'react';
import { useStore } from '../../store/useStore';
import { CompanyRow } from './CompanyRow';

export function CompanyList() {
  const { companies } = useStore();

  return (
    <div className="overflow-hidden bg-blue-100 shadow-lg sm:rounded-lg animate-fade-in">
      <table className="min-w-full divide-y divide-yellow-300">
        <thead className="bg-yellow-200">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-yellow-900 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-yellow-900 uppercase tracking-wider">
              Location
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-yellow-900 uppercase tracking-wider">
              Periodicity
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-yellow-900 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-blue-50 divide-y divide-yellow-300">
          {companies.map((company, index) => (
            <tr
              key={company.id}
              className={`transition-all duration-300 ${
                index % 2 === 0 ? 'bg-green-100' : 'bg-green-200'
              } hover:scale-[1.02]`}
            >
              <CompanyRow key={company.id} company={company} />
            </tr>
          ))}
        </tbody>
      </table>
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
