
import React from 'react';
import SidebarCalendar from './SidebarCalendar';

const Verification: React.FC = () => {
  return (
    <div className="h-full flex">
      {/* Sidebar */}
      <aside className="w-60 bg-[#262626] border-r border-gray-800 p-4 flex flex-col shrink-0">
        <SidebarCalendar label="実証日" selectedDate="2026年01月21日" />
        
        <div className="flex flex-col space-y-2 mt-auto">
          <button className="w-full bg-[#0066cc] hover:bg-[#0077ee] text-white py-1.5 text-xs font-bold rounded-sm shadow-md">
            検索
          </button>
          <button className="w-full bg-[#0066cc] hover:bg-[#0077ee] text-white py-1.5 text-xs font-bold rounded-sm shadow-md">
            ダウンロード
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 bg-[#121212] flex flex-col p-4 space-y-6 overflow-y-auto">
        {/* Status Summary Section */}
        <section className="bg-[#1a1a1a] border border-gray-800 rounded-sm">
          <div className="bg-[#2a2a2a] px-3 py-2 text-xs font-bold border-b border-gray-800">
            制御指令受信(WebAPI)と制御指令登録(VTN)
          </div>
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8 text-xs">
            <div className="flex">
              <span className="w-48 text-gray-400">実証日</span>
              <span className="text-white">2026/01/21</span>
            </div>
            <div className="flex">
              <span className="w-48 text-gray-400">制御指令時刻</span>
              <span className="text-white">12:00 ～ 13:00</span>
            </div>
            <div className="flex">
              <span className="w-48 text-gray-400">VENに制御指令時刻</span>
              <span className="text-white">11:00</span>
            </div>
            <div className="flex">
              <span className="w-48 text-gray-400">制御指令に対してVENの応答結果</span>
              <span className="text-white">optIn(recvAckSucceeded)</span>
            </div>
            <div className="flex">
              <span className="w-48 text-gray-400">VENに制御実積報告要求時刻</span>
              <span className="text-white">11:30</span>
            </div>
          </div>
        </section>

        {/* Results Table Section */}
        <section className="bg-[#1a1a1a] border border-gray-800 rounded-sm overflow-hidden">
          <div className="bg-[#2a2a2a] px-3 py-2 text-xs font-bold border-b border-gray-800">
            制御指令と制御実積値
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-[#333333]">
                  <th className="border border-gray-700 p-2 font-normal text-gray-300 w-48">時刻</th>
                  <th className="border border-gray-700 p-2 font-normal text-gray-300 w-48">制御指令 [kWh]</th>
                  <th className="border border-gray-700 p-2 font-normal text-gray-300 w-48">制御実積値 [kWh]</th>
                  <th className="border border-gray-700 p-2 font-normal text-gray-300"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-800/50">
                  <td className="border border-gray-800 p-2 text-center text-gray-300">12:00 ～ 12:30</td>
                  <td className="border border-gray-800 p-2 text-right pr-8 text-gray-300 font-mono">-16.125</td>
                  <td className="border border-gray-800 p-2 text-right pr-8 text-gray-300 font-mono">-18.347</td>
                  <td className="border border-gray-800 p-2"></td>
                </tr>
                <tr className="hover:bg-gray-800/50">
                  <td className="border border-gray-800 p-2 text-center text-gray-300">12:30 ～ 13:00</td>
                  <td className="border border-gray-800 p-2 text-right pr-8 text-gray-300 font-mono">-58.653</td>
                  <td className="border border-gray-800 p-2 text-right pr-8 text-gray-300 font-mono">-60.732</td>
                  <td className="border border-gray-800 p-2"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Verification;
