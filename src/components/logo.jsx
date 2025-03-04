import React from 'react';
import { TrendingUp } from 'lucide-react';

const Logo = () => {
  return (
    <div className="p-4 w-full">
      <div className="flex items-center space-x-2 text-blue-600">
        <TrendingUp className="h-8 w-8" />
      </div>
    </div>
  );
};

export default Logo;
