import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableCells, faCalendarAlt, faChartLine, faLightbulb, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

function BottomNavigation() {
  return (
    <div className='bg-white shadow-lg  px-4 border-t-2 border-gray-200 rounded-t-3xl'>
      {/* Bottom Navigation */}
      <div className="grid grid-cols-5 gap-2 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 gap-4">
        {[
          { label: "Plan", icon: faCalendarAlt },
          { label: "Track", icon: faMapMarkerAlt, active: true },
          { label: "Analyse", icon: faChartLine },
          { label: "Insights", icon: faLightbulb },
          { label: "More", icon: faTableCells },
        ].map((item, index) => (
          <div
            key={index}
            className={`text-center flex flex-col items-center cursor-pointer p-2 rounded-lg transition duration-200 ${
              item.active ? "text-blue-700 font-bold" : "text-gray-500"
            } hover:font-bold hover:text-blue-700`}
          >
            <div className="p-2 rounded-full hover:bg-blue-200 transition duration-200">
              <FontAwesomeIcon icon={item.icon} className="text-xl" />
            </div>
            <p className="text-xs">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BottomNavigation;
