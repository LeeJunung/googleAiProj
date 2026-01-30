
import React from 'react';
import SidebarCalendar from './SidebarCalendar';

const LogViewer: React.FC = () => {
  return (
    <div className="h-full flex">
      {/* Sidebar */}
      <aside className="w-60 bg-[#262626] border-r border-gray-800 p-4 flex flex-col shrink-0 overflow-y-auto">
        <SidebarCalendar label="日時" selectedDate="2026年01月30日" />
        
        <div className="mb-6">
          <h3 className="text-gray-300 font-bold mb-2 text-[11px]">時刻</h3>
          <div className="flex items-center space-x-1">
            <div className="bg-[#1a1a1a] border border-gray-800 px-1 py-1 flex items-center rounded text-[10px] w-20">
              00:00 <span className="ml-auto text-gray-500">🕒</span>
            </div>
            <span className="text-gray-500">～</span>
            <div className="bg-[#1a1a1a] border border-gray-800 px-1 py-1 flex items-center rounded text-[10px] w-20">
              23:59 <span className="ml-auto text-gray-500">🕒</span>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="flex items-center space-x-2 text-[11px] font-bold text-gray-300 cursor-pointer mb-2">
            <input type="radio" name="logType" checked readOnly className="w-3 h-3 bg-blue-500" />
            <span>保存ログ</span>
          </label>
          <div className="pl-4 space-y-1.5">
            <h4 className="text-[10px] text-gray-500 font-bold">ログ区分</h4>
            {[
              '制御命令WebAPI', '制御命令(VTN)', '制御実積値(WebAPI用加工データ)', 
              '制御実積値WebAPI', 'e-mail通知'
            ].map(item => (
              <label key={item} className="flex items-start space-x-2 text-[10px] text-gray-400 cursor-pointer">
                <input type="checkbox" className="mt-0.5 w-3 h-3" />
                <span>{item}</span>
              </label>
            ))}
            <h4 className="text-[10px] text-gray-500 font-bold mt-2">ログレベル</h4>
            {['INFO', 'ERROR'].map(level => (
              <label key={level} className="flex items-center space-x-2 text-[10px] text-gray-400 cursor-pointer">
                <input type="checkbox" className="w-3 h-3" />
                <span>{level}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-8 border-t border-gray-700 pt-3">
          <label className="flex items-center space-x-2 text-[11px] font-bold text-gray-300 cursor-pointer">
            <input type="radio" name="logType" className="w-3 h-3" />
            <span>VTNログ</span>
          </label>
        </div>

        <button className="w-full bg-[#0066cc] hover:bg-[#0077ee] text-white py-1.5 text-xs font-bold rounded-sm shadow-md mt-auto">
          検索
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-1 bg-[#121212] flex flex-col p-4 space-y-4 overflow-hidden">
        {/* Log List Section */}
        <div className="flex-1 flex flex-col min-h-0 border border-gray-800">
          <div className="bg-[#2a2a2a] px-3 py-1.5 text-xs font-bold border-b border-gray-800">ログ一覧</div>
          <div className="flex-1 overflow-auto">
            <table className="w-full text-[11px] border-collapse">
              <thead className="sticky top-0 bg-[#333333] z-10 shadow-sm">
                <tr>
                  <th className="border border-gray-700 p-1.5 font-normal text-gray-400 w-12 text-center">No.</th>
                  <th className="border border-gray-700 p-1.5 font-normal text-gray-400 w-24">日付</th>
                  <th className="border border-gray-700 p-1.5 font-normal text-gray-400 w-20">時刻</th>
                  <th className="border border-gray-700 p-1.5 font-normal text-gray-400 w-32">ログ区分</th>
                  <th className="border border-gray-700 p-1.5 font-normal text-gray-400 w-24">ログレベル</th>
                  <th className="border border-gray-700 p-1.5 font-normal text-gray-400 w-48">ソース情報</th>
                  <th className="border border-gray-700 p-1.5 font-normal text-gray-400 text-left">ログ内容</th>
                </tr>
              </thead>
              <tbody className="bg-[#1a1a1a]">
                {/* Empty state for demo as shown in image */}
                <tr className="h-64">
                   <td colSpan={7} className="text-center text-gray-600">表示するデータがありません</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Log Detail Section */}
        <div className="h-48 border border-gray-800 flex flex-col">
          <div className="bg-[#2a2a2a] px-3 py-1.5 text-xs font-bold border-b border-gray-800">ログ詳細</div>
          <div className="flex-1 bg-[#1a1a1a] p-4 text-xs font-mono text-gray-500">
            {/* Empty detail area */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogViewer;
