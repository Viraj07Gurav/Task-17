import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BottomNavigation from './Component/BottomNavigation'
import Header from './Component/Header'
import Tracker from './Component/Tracker'
import LiveHealth from './Component/LiveHealth'
import MainContent from './Component/MainContent'

function App() {
  return (
    <div className="flex flex-col gap-[2rem]">
      <div className="flex items-center justify-center min-h-screen border-2">
        <div className="w-full max-w-md min-h-screen relative flex flex-col">
          <MainContent />
          <LiveHealth />

          {/* Chatbot Button inside container */}
          <div className="relative w-full">
            <button
              type="button"
              className="z-20 text-white flex flex-col  justify-around 
              fixed bottom-25 right-5 rounded-lg"
            >
              <div className="p-3 rounded-full border-4 border-white bg-green-600">
                <svg
                  className="w-6 h-6 lg:w-6 lg:h-6 xl:w-10 xl:h-10"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </button>
          </div>

          {/* Bottom Navigation inside container */}
          <div className="sticky bottom-0 left-0 right-0">
            <BottomNavigation />
          </div>

        </div>
      </div>
    </div>
  )
}

export default App;
