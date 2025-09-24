import React from 'react';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';

interface DataTableToolbarProps {
  value: string;
  onChange: (v: string) => void;
  onRefresh?: () => void;
  children?: React.ReactNode;
}

export const DataTableToolbar: React.FC<DataTableToolbarProps> = ({ value, onChange, onRefresh, children }) => {
  return (
    <div className="flex items-center justify-between gap-2 py-2">
      <div className="flex items-center gap-2">
        <Input
          placeholder="Search..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-9 w-64"
          aria-label="Search"
        />
      </div>
      <div className="flex items-center gap-2">
        {children}
        <Button variant="outline" size="sm" onClick={onRefresh} aria-label="Refresh table">
          Refresh
        </Button>
      </div>
    </div>
  );
};