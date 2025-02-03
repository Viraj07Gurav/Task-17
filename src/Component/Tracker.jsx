import { useState } from "react";
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

function Tracker() {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className='mb-10 mt-6  rounded-2xl p-5 mx-2 shadow-lg bg-white'>
            <div >
                <div className="flex justify-between items-center ">
                    <div className="bg-base-200 border border-gray-300 rounded-btn relative flex w-25 rounded-lg">
                        <div
                            className={`rounded-btn rounded-lg absolute h-8 w-12 shadow transition-transform duration-300 ease-in-out ${activeTab === 0 ? 'translate-x-0 bg-[#0a0a5e] text-white' : 'translate-x-full bg-[#0a0a5e] text-white'
                                }`}
                        ></div>

                        <button
                            onClick={() => setActiveTab(0)}
                            className={`rounded-btn text-sm z-[1] h-8 w-15 ${activeTab === 0 ? 'text-white' : 'text-gray-500'}`}
                        >
                            All
                        </button>

                        <button
                            onClick={() => setActiveTab(1)}
                            className={`rounded-btn text-sm z-[1] h-8 w-15 ${activeTab === 1 ? 'text-white' : 'text-gray-500'}`}
                        >
                            On trip
                        </button>
                    </div>


                    <div className=" ">

                        <button className="bg-gradient-to-r from-[#1c3f9a] via-[#0c1067] to-[#0c1067] text-sm text-white  py-2 rounded-md sm:h-12 lg:h-8 shadow w-30 ">
                            <FontAwesomeIcon icon={faMapLocationDot} />
                            Track on Map
                        </button>
                    </div>
                </div>
                <div className='relative mt-2'>
                    <div className='absolute  right-0'>
                        <select name="Search Reg No." id="" className='border border-gray-300 w-30 h-8 rounded-lg text-xs'>
                            <option value="" className='text-xs'>Search Reg No.</option>
                            <option value="">123</option>
                            <option value="">123</option>
                        </select>
                    </div>
                </div>

                <div className='mt-10'>
                    <p>All Vehicles:<span className="font-bold text-lg">36</span></p>
                    <div >
                        <div className='grid grid-cols-3 gap-4'>
                            <div className=' flex flex-col items-center bg-[#e9f2ec] rounded-lg'>
                                <span className="text-lg font-bold">
                                    06
                                </span>
                                <span className="text-xs">
                                    moving
                                </span>
                                <div className="h-2 w-full rounded-b-lg bg-green-500">

                                </div>
                            </div>
                            <div className='bg-[#fed383]  rounded-lg flex flex-col items-center'>
                                <span className="text-lg font-bold">
                                    02
                                </span>
                                <span className="text-xs">
                                    Idling
                                </span>
                                <div className="h-2 w-full rounded-b-lg bg-orange-500">

                                </div>
                            </div>
                            <div className='bg-[#e9c7fb] rounded-lg flex flex-col items-center'>
                                <span className="text-lg font-bold">
                                    24
                                </span>
                                <span className="text-xs">
                                    Stopped
                                </span>
                                <div className="h-2 w-full rounded-b-lg bg-[#9136c2]">

                                </div>
                            </div>
                            <div className='bg-[#dadada] rounded-lg flex flex-col items-center'>
                                <span className="text-lg font-bold">
                                    04
                                </span>
                                <span className="text-xs">
                                    Offline
                                </span>
                                <div className="h-2 w-full rounded-b-lg bg-gray-500">

                                </div>

                            </div>
                            <div className='bg-[#f9d9d9] rounded-lg flex flex-col items-center relative'>
                                <span className="text-lg font-bold">
                                    00
                                </span>
                                <span className="text-xs">
                                    Un-Subscribed
                                </span>
                                <div className="h-2 w-full rounded-b-lg bg-red-700 aboslute bottom-0 top-30">

                                </div>
                            </div>
                            <div className='bg-[#e0f2fb] rounded-lg flex flex-col items-center'>
                                <span className="text-lg font-bold">
                                    07
                                </span>
                                <span className="text-xs">
                                    Geofence
                                </span>
                                <div className="bg-[#319ed6] rounded-b-lg w-full h-2"></div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tracker