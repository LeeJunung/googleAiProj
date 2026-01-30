
import React, { useState } from 'react';

interface LoginProps {
  onLogin: (username: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('user001');
  const [password, setPassword] = useState('**********');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(username);
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white flex flex-col">
      <header className="p-6 flex items-center space-x-4">
        <div className="text-[#ff0000] font-black text-2xl italic tracking-tighter">TOSHIBA</div>
        <div className="text-gray-300 text-lg">東芝エネルギーシステムズ株式会社</div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center -mt-20">
        <h1 className="text-2xl font-bold mb-12">東芝AC（実証専用環境）システム</h1>
        
        <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-6">
          <div className="flex items-center">
            <label className="w-24 text-gray-400 text-sm">ユーザー</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="flex-1 bg-[#232936] border border-gray-700 px-3 py-2 text-sm focus:outline-none focus:border-blue-500 rounded"
            />
          </div>
          
          <div className="flex items-center">
            <label className="w-24 text-gray-400 text-sm">パスワード</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-1 bg-[#232936] border border-gray-700 px-3 py-2 text-sm focus:outline-none focus:border-blue-500 rounded"
            />
          </div>

          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="bg-[#1a3a5a] border border-[#2a4a6a] hover:bg-[#204060] text-blue-400 px-8 py-1.5 text-xs font-medium rounded transition-colors"
            >
              ログイン
            </button>
          </div>
        </form>
      </main>

      <footer className="p-6 text-right text-[10px] text-gray-500">
        Copyright © 2026 TOSHIBA ENERGY SYSTEMS & SOLUTIONS CORPORATION, All Rights Reserved.
      </footer>
    </div>
  );
};

export default Login;
