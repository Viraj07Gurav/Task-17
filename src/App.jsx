import { useState } from 'react';
import './App.css';
import BottomNavigation from './Component/BottomNavigation';
import MainContent from './Component/MainContent';
import LiveHealth from './Component/LiveHealth';

function App() {
  return (
    <div className="flex flex-col gap-[2rem]">
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md min-h-screen relative flex flex-col">
          {/* Main content and live health */}
          <MainContent />
          <LiveHealth />

          {/* Bottom Navigation inside container */}
          <div className="fixed bottom-0 left-0 right-0 z-10">
            <BottomNavigation />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
