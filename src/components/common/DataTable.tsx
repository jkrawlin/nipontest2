import React from 'react';
import { cn } from '../../lib/cn';

export interface DataTableColumn<T> {
  header: string;
  accessor: string;
  cell?: (row: T) => React.ReactNode;
}

interface DataTableProps<T> {
  data: T[];
  columns: DataTableColumn<T>[];
  onRowClick?: (row: T) => void;
  emptyMessage?: string;
}

export function DataTable<T>({ data, columns, onRowClick, emptyMessage='No records found.' }: DataTableProps<T>) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm border-separate border-spacing-y-1">
        <thead>
          <tr className="text-[11px] uppercase tracking-wide text-gray-500">
            {columns.map(col => (
              <th key={col.accessor} className="text-left px-3 py-1 font-medium">{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 && (
            <tr>
              <td colSpan={columns.length} className="px-3 py-6 text-center text-gray-500 text-sm">{emptyMessage}</td>
            </tr>
          )}
          {data.map((row, i) => (
            <tr
              key={i}
              className={cn('bg-white shadow-sm hover:shadow rounded cursor-pointer transition-shadow', onRowClick && 'hover:bg-qatar-maroon/5')}
              onClick={() => onRowClick?.(row)}
            >
              {columns.map(col => (
                <td key={col.accessor} className="px-3 py-2 align-top">{col.cell ? col.cell(row) : (row as any)[col.accessor]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
