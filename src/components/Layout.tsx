// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Calendar, BarChart3, Building2, LayoutDashboard } from 'lucide-react';

// interface LayoutProps {
//   children: React.ReactNode;
// }

// export function Layout({ children }: LayoutProps) {
//   const location = useLocation();

//   const navigation = [
//     { name: 'Dashboard', href: '/', icon: LayoutDashboard },
//     { name: 'Companies', href: '/companies', icon: Building2 },
//     { name: 'Calendar', href: '/calendar', icon: Calendar },
//     { name: 'Reports', href: '/reports', icon: BarChart3 },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <div className="flex h-screen">
//         {/* Sidebar */}
//         <div className="w-64 bg-white shadow-lg">
//           <div className="flex h-16 items-center justify-center border-b">
//             <h1 className="text-xl font-bold text-gray-900">CommTracker</h1>
//           </div>
//           <nav className="mt-6">
//             <div className="space-y-1 px-2">
//               {navigation.map((item) => {
//                 const isActive = location.pathname === item.href;
//                 return (
//                   <Link
//                     key={item.name}
//                     to={item.href}
//                     className={`group flex items-center rounded-md px-2 py-2 text-sm font-medium ${
//                       isActive
//                         ? 'bg-gray-100 text-gray-900'
//                         : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
//                     }`}
//                   >
//                     <item.icon
//                       className={`mr-3 h-5 w-5 flex-shrink-0 ${
//                         isActive ? 'text-gray-900' : 'text-gray-400'
//                       }`}
//                     />
//                     {item.name}
//                   </Link>
//                 );
//               })}
//             </div>
//           </nav>
//         </div>

//         {/* Main content */}
//         <div className="flex-1 overflow-auto">
//           <main className="p-8">{children}</main>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, BarChart3, Building2, LayoutDashboard } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/', icon: LayoutDashboard },
    { name: 'Companies', href: '/companies', icon: Building2 },
    { name: 'Calendar', href: '/calendar', icon: Calendar },
    { name: 'Reports', href: '/reports', icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-blue-50">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-indigo-700 shadow-lg animate-slide-in">
          <div className="flex h-16 items-center justify-center border-b border-indigo-600">
            <h1 className="text-xl font-bold text-yellow-300">CommTracker</h1>
          </div>
          <nav className="mt-6">
            <div className="space-y-1 px-2">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`group flex items-center rounded-md px-2 py-2 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-indigo-600 text-yellow-300 shadow-md'
                        : 'text-yellow-100 hover:bg-indigo-600 hover:text-yellow-300'
                    }`}
                  >
                    <item.icon
                      className={`mr-3 h-5 w-5 flex-shrink-0 transition-all duration-300 ${
                        isActive ? 'text-yellow-300' : 'text-yellow-100'
                      }`}
                    />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-auto bg-blue-100">
          <main className="p-8 animate-fade-in">{children}</main>
        </div>
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
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-in-out;
        }

        .animate-slide-in {
          animation: slide-in 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}
