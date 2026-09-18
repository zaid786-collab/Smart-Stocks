import React from 'react';
import CopilotChat from '../components/CopilotChat';

export default function Copilot({ onSelectStock }) {
  return (
    <div className="space-y-8 animate-fade-in pb-12 max-w-4xl mx-auto">
      <CopilotChat onSelectStock={onSelectStock} />
    </div>
  );
}
