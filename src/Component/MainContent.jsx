import React from 'react'
import Header from './Header'
import Tracker from './Tracker'


function MainContent() {
  
  return (
    <div className='bg-[#e9e9ff] py-2  '>
       
        <Header/>
        <div className='flex justify-between m-2 '>
       
        <p className='text-[#010066] font-bold text-lg'>Track your fleet</p>
        <div className='flex'>
            <p>Branch:</p>
            <select name="All" value="All" id="">
                <option value="">Branch 1</option>
                <option value="">Branch 2</option>
                <option value="">Branch 3</option>
                </select>
        </div>
        </div>
        <Tracker ></Tracker>
        
    </div>
  )
}

export default MainContent