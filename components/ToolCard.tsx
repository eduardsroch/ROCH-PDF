
import React from 'react';
import type { Tool } from '../types';

interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <a href={`#${tool.id}`} className="block group p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-start space-x-4">
        <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${tool.bgColor} ${tool.color}`}>
          {tool.icon}
        </div>
        <div>
          <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">{tool.title}</h3>
          <p className="mt-1 text-sm text-neutral-text">{tool.description}</p>
        </div>
      </div>
    </a>
  );
};

export default ToolCard;
