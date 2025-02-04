import React from 'react'
import Header from './Header'
import Tracker from './Tracker'


function MainContent() {
  
  return (
    <div className='bg-[#e9e9ff]  pb-2 rounded-b-xl  h-auto'>
       
        <Header/>
        <div className='flex justify-between mx-3 mt-0 '>
       
        <p className='text-[#010066] font-bold text-lg'>Track your fleet</p>
        <div className='inline-flex items-center gap-x-2 '>
            <p className='text-end whitespace-nowrap'>Branch:</p>
            <select name="All" value="" id="" className=' text-sm text-blue-500  font-bold w-12'>
              {/* <option value=""> Branch 1</option>
                <option value=""  className='text-sm font-bold text-blue-600 '>All</option>
                <option value=""  selected className="text-gray-400">
                               All
                            </option> */}
                {/* <option value="" >Branch 2</option>
                <option value="" >Branch 3</option> */}
                 <option value="" disabled selected className="text-gray-400">
                               All
                            </option>
                            <option value="">branch 1</option>
                            <option value="">branch 2</option>
                </select>
        </div>
        </div>
        <Tracker ></Tracker>
        
    </div>
  )
}

export default MainContent