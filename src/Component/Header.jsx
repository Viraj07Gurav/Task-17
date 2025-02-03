import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation} from "@fortawesome/free-solid-svg-icons"; 
import { faLightbulb } from "@fortawesome/free-solid-svg-icons"

function Header() {
    return (
        <div>
            <div>
                <div className="h-10 p-3 bg-white shadow-lg rounded-2xl mb-5 h-15">
                    <div className='flex justify-between'>
                        <div>
                            <span className='font-extrabold text-xl'>Fleet Edge</span>
                        </div>
                        <div className='flex'>
                            <div>
                            <FontAwesomeIcon icon={faTriangleExclamation} className="text-xl text-gray-800" />
                            </div>
                            <div>
                            <FontAwesomeIcon icon={faLightbulb} className="text-xl text-gray-800 hover:text-gray-700" />
                            
                            </div>
                            <div><svg className="w-6 h-6 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z" />
                            </svg>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header