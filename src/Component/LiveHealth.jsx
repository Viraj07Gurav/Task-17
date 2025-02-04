import React from 'react'

function LiveHealth() {
    return (
        <div className=' m-2 mt-4 rounded-lg shadow-[1px_4px_6px_rgba(0.1,1,1,0.4)] p-2 '>
            <div className=' '>
            <div className='flex justify-between mb-2'>
                <div  >
                    <p className='font-semibold text-xl text-[#09034D]'>Live Fleet Health</p>
                </div>
                <div>
                    <svg className="w-6 h-6 text-blue dark:text-blue bg-gray-200 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 15 7-7 7 7" />
                    </svg>

                </div>
            </div>
            <div>
                <div className='grid grid-flow-row-dense grid-cols-4 '>
                    <div className=' flex justify-end align-center h-6 '>
                    <p className='  bg-[#ff9f0b] w-12 text-white text-center rounded '>0.00%</p>
                    </div>

                    <div className='col-span-2 flex justify-center align-center'>
                        <div className=' flex flex-col justify-center items-center '>
                        <div className="w-24 h-24 border-15 border-blue-500 rounded-full">
                            </div>
                            <p className='  bg-[#3080e4] w-fit text-white text-center rounded mt-2'>100.00%</p>
                      
                        </div>
                    </div>
                    <div className=' flex justify-start align-center h-6 '>
                    <p className=' bg-red-500 w-12 text-white text-center rounded'>0.00%  </p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default LiveHealth