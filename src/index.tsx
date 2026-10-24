import React from 'react';

export interface MyButtonProps {
  label: string;
  onClick?: () => void;
}

export function MyButton({ label, onClick }: MyButtonProps) {
  return (
    <button 
      onClick={onClick}
      style={{ padding: '8px 16px', background: '#000', color: '#fff', borderRadius: '4px' }}
    >
      {label}
    </button>
  );
}