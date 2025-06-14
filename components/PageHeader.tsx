import React from 'react';

interface PageHeaderProps {
  title: string;
  count: number;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, count }) => {
  return (
    <div className="flex justify-between items-center px-4 py-4 bg-gray-900 text-white">
      <h1 className="text-2xl font-bold">{title}</h1>
      <span className="text-xl font-semibold">{count}</span>
    </div>
  );
};

export default PageHeader;