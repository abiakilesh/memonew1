import React from 'react';
import { Eye } from 'lucide-react';

interface MemoTableProps {
  entries: any[];
}

const MemoTable: React.FC<MemoTableProps> = ({ entries }) => {
  const headers = [
    'NAME1', 'NAME2', 'DATE', 'KMs', 'MILEAGE', 'PLACE', 
    'DISEAL LITER', 'DISEAL AMOUNT', 'LABER CHARGE', 'DR SALARY',
    'RTO/PC', 'TOTAL COLLECTION', 'TOTAL LOSE', 'PROFITE',
    'view details', 'Action'
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {entries.map((entry, index) => (
            <tr key={index}>
              {Object.values(entry).map((value: any, i) => (
                <td key={i} className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                  {value}
                </td>
              ))}
              <td className="px-4 py-3 whitespace-nowrap text-sm">
                <button className="text-green-600 hover:text-green-800">
                  <Eye size={18} />
                </button>
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-sm">
                <div className="space-y-1">
                  <button className="w-full bg-green-500 text-white px-3 py-1 rounded text-xs hover:bg-green-600">
                    Save
                  </button>
                  <button className="w-full bg-gray-200 text-gray-700 px-3 py-1 rounded text-xs hover:bg-gray-300">
                    Cancel
                  </button>
                </div>
              </td>
            </tr>
          ))}
          {entries.length === 0 && (
            <tr>
              <td colSpan={headers.length} className="px-4 py-8 text-center text-gray-500">
                No entries yet. Click "Add New" to create one.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default MemoTable;