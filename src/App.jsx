import { useState } from "react";
import "./App.css";
import BottomNavigation from "./Component/BottomNavigation";
import MainContent from "./Component/MainContent";
import LiveHealth from "./Component/LiveHealth";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col items-center justify-center h-full w-full max-w-md mx-auto lg:border">
        {/* Scrollable Content */}
        <div className="flex-1 w-full overflow-y-auto  pb-20 mb-[2rem] hide-scroll"   style={{
    scrollbarWidth: "none", // Firefox
    msOverflowStyle: "none", // IE & Edge
    WebkitOverflowScrolling: "touch", // Smooth scrolling for mobile
  }}> 
          <MainContent />
          <LiveHealth />
        </div>

        {/* Fixed Bottom Navigation */}
        <div className="relative max-w-md w-full mx-auto z-10">
        <button
              type="button"
              className="z-20 text-white flex flex-col justify-around 
              fixed bottom-20 right-5 rounded-lg"
            >
              <div className="p-3 rounded-full border-4 border-white bg-blue-800">
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
        <div className="fixed bottom-0 left-0 right-0 max-w-md w-full mx-auto z-10 bg-white rounded-t-3xl border-t-0 z-20 ">
          <BottomNavigation />
        </div>
      </div>
    </div>
  );
}

export default App;
