
import React from 'react';

interface SidebarCalendarProps {
  label: string;
  selectedDate: string;
}

const SidebarCalendar: React.FC<SidebarCalendarProps> = ({ label, selectedDate }) => {
  const days = ['月', '火', '水', '木', '金', '土', '日'];
  const dates = [
    29, 30, 31, 1, 2, 3, 4,
    5, 6, 7, 8, 9, 10, 11,
    12, 13, 14, 15, 16, 17, 18,
    19, 20, 21, 22, 23, 24, 25,
    26, 27, 28, 29, 30, 31, 1
  ];

  return (
    <div className="mb-6">
      <h3 className="text-gray-300 font-bold mb-1 text-[11px]">{label}</h3>
      <div className="text-xs text-gray-400 mb-2">{selectedDate}</div>
      <div className="bg-[#1a1a1a] border border-gray-800 p-2 rounded">
        <div className="flex justify-between items-center mb-2 px-1">
          <button className="text-gray-500 hover:text-white">&lt;</button>
          <div className="text-[10px] font-bold">2026 1月</div>
          <button className="text-gray-500 hover:text-white">&gt;</button>
        </div>
        <div className="grid grid-cols-7 gap-y-1 text-center">
          {days.map(d => (
            <div key={d} className="text-[9px] text-gray-500 font-bold">{d}</div>
          ))}
          {dates.map((d, i) => {
            const isGray = i < 3 || i > 33;
            const isSelected = d === 30 && !isGray;
            const isVerificationSelection = d === 21 && !isGray;
            
            let colorClass = isGray ? 'text-gray-700' : 'text-gray-300';
            let bgClass = '';
            
            // Just for visual demo based on images
            if (label === '日時' && isSelected) bgClass = 'bg-blue-600 text-white rounded-sm';
            if (label === '実証日' && isVerificationSelection) bgClass = 'bg-blue-600 text-white rounded-sm';

            return (
              <div key={i} className={`text-[9px] py-1 cursor-pointer hover:bg-gray-700 ${colorClass} ${bgClass}`}>
                {d}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SidebarCalendar;
