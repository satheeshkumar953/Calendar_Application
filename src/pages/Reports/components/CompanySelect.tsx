import React from 'react';
import { Company } from '../../../types';

interface CompanySelectProps {
  companies: Company[];
  value: string | null;
  onChange: (companyId: string | null) => void;
}

export function CompanySelect({ companies, value, onChange }: CompanySelectProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">Filter by Company</label>
      <select
        value={value || ''}
        onChange={(e) => onChange(e.target.value || null)}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      >
        <option value="">All Companies</option>
        {companies.map((company) => (
          <option key={company.id} value={company.id}>
            {company.name}
          </option>
        ))}
      </select>
    </div>
  );
}