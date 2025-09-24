import React from 'react';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnDef,
  getSortedRowModel,
  SortingState
} from '@tanstack/react-table';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../ui/table';

interface DataTableProps<T extends object> {
  columns: ColumnDef<T, any>[]; // typed column defs
  data: T[];
  isLoading?: boolean;
  emptyMessage?: string;
}

export function DataTable<T extends object>({ columns, data, isLoading, emptyMessage = 'No data.' }: DataTableProps<T>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel()
  });

  return (
    <div className="rounded border bg-white">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((hg) => (
            <TableRow key={hg.id}>
              {hg.headers.map((header) => (
                <TableHead key={header.id} className="select-none cursor-pointer" onClick={header.column.getToggleSortingHandler()} aria-sort={header.column.getIsSorted() ? (header.column.getIsSorted() === 'asc' ? 'ascending' : 'descending') : 'none'}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  {header.column.getIsSorted() === 'asc' && ' ▲'}
                  {header.column.getIsSorted() === 'desc' && ' ▼'}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={columns.length} className="p-6 text-center text-sm">Loading…</TableCell>
            </TableRow>
          ) : data.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="p-6 text-center text-sm text-gray-500">
                {emptyMessage}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}