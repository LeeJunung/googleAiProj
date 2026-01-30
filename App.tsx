
import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import LogViewer from './components/LogViewer';
import Verification from './components/Verification';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.LOGIN);
  const [user, setUser] = useState<string | null>(null);

  // Simple route handling via hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '');
      if (hash === 'log-viewer') setCurrentPage(Page.LOG_VIEWER);
      else if (hash === 'verification') setCurrentPage(Page.VERIFICATION);
      else if (hash === 'login' || !hash) setCurrentPage(Page.LOGIN);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: Page) => {
    window.location.hash = `#/${page}`;
  };

  const handleLogin = (username: string) => {
    setUser(username);
    navigateTo(Page.LOG_VIEWER);
  };

  const handleLogout = () => {
    setUser(null);
    navigateTo(Page.LOGIN);
  };

  if (currentPage === Page.LOGIN) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white flex flex-col font-sans text-sm">
      {/* Header */}
      <header className="h-12 border-b border-gray-800 flex items-center justify-between px-4 bg-[#0d0d0d] shrink-0">
        <button 
          onClick={handleLogout}
          className="flex items-center space-x-4 hover:opacity-80 transition-opacity focus:outline-none text-left"
          aria-label="ロゴをクリックしてログイン画面に戻る"
        >
          <div className="text-[#ff0000] font-black text-xl italic tracking-tighter">TOSHIBA</div>
          <div className="text-gray-300 font-medium">東芝エネルギーシステムズ株式会社</div>
        </button>
        <div className="flex items-center space-x-6 text-xs text-gray-400">
          <div className="text-sm font-bold text-gray-200">東芝AC（実証専用環境）システム</div>
          <div>2026/1/30 13:33:47</div>
          <div className="flex items-center space-x-2 border border-gray-700 px-2 py-0.5 bg-gray-800/50 rounded">
            <span>{user || 'user001'}</span>
            <button onClick={handleLogout} className="hover:text-white">ログアウト</button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="h-10 bg-[#1a1a1a] flex items-center px-4 space-x-1 border-b border-gray-800 shrink-0">
        <button
          onClick={() => navigateTo(Page.LOG_VIEWER)}
          className={`px-4 h-full text-xs font-bold transition-colors ${
            currentPage === Page.LOG_VIEWER 
            ? 'bg-[#2a2a2a] text-white border-b-2 border-blue-500' 
            : 'text-gray-500 hover:text-gray-300'
          }`}
        >
          ログ確認画面
        </button>
        <button
          onClick={() => navigateTo(Page.VERIFICATION)}
          className={`px-4 h-full text-xs font-bold transition-colors ${
            currentPage === Page.VERIFICATION 
            ? 'bg-[#2a2a2a] text-white border-b-2 border-blue-500' 
            : 'text-gray-500 hover:text-gray-300'
          }`}
        >
          実証確認画面
        </button>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 overflow-hidden">
        {currentPage === Page.LOG_VIEWER && <LogViewer />}
        {currentPage === Page.VERIFICATION && <Verification />}
      </main>

      {/* Footer */}
      <footer className="h-8 border-t border-gray-800 bg-[#0d0d0d] flex items-center justify-end px-4 text-[10px] text-gray-500 shrink-0">
        Copyright © 2026 TOSHIBA ENERGY SYSTEMS & SOLUTIONS CORPORATION, All Rights Reserved.
      </footer>
    </div>
  );
};

export default App;
