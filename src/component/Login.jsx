import React, { useState } from 'react'

const Login = () => {

    const [isLoginMode, setIsLoginMode] = useState(true)
    return (
        <div className='w-[430px] bg-white p-8 rounded-2xl shadow-lg'>
            {/* Header tite Section*/}
            <div className='flex justify-center mb-4 '>
                <h2 className='text-3xl font-semibold text-center'>{isLoginMode ? "Login " : "Sign Up"}</h2>
            </div>
            {/* Tap controls Section*/}
            <div className='relative flex h-12 mb-6 border border-gray-300  rounded-full overflow-hidden '>
                <button onClick={() => setIsLoginMode(true)} className={`w-1/2 text-lg font-medium transition-all z-10 ${isLoginMode ? "text-white" : "text-black"}`}>
                    Login
                </button>
                <button onClick={() => setIsLoginMode(false)} className={`w-1/2 text-lg font-medium transition-all z-10 ${!isLoginMode ? "text-white" : "text-black"}`}>
                    Sign Up
                </button>
                
                <div className={`absolute top-0 h-full w-1/2 rounded-full  bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 ${isLoginMode ? "left-0" : "left-1/2"}`}>
                </div>

            </div>
            {/* Form Section */}
            <form className='space-y-4'>
                {!isLoginMode && (
                    <input type="text" placeholder='Name' required className='w-full p-3 border-b-2 border-gray-300  outline-none focus:border-cyan-500 placeholder-gray-400' />
                )}

                {/* Shared input field  Section*/}
                <input type="email" placeholder="Email Address" required className='w-full p-3 border-b-2 border-gray-300  outline-none focus:border-cyan-500 placeholder-gray-400' />
                <input type="password" placeholder="Password" required className='w-full p-3 border-b-2 border-gray-300  outline-none focus:border-cyan-500 placeholder-gray-400' />

                {/* Signup field Section */}
                {!isLoginMode && (
                    <input type="password" placeholder='Confirm Password' required className='w-full p-3 border-b-2 border-gray-300  outline-none focus:border-cyan-500 placeholder-gray-400' />
                )}

                {/* Forget password for login  Section */}
                {isLoginMode && (
                    <div className='text-right'>
                        <p className='text-cyan-600 hover:underline '>Forget Password</p>
                    </div>
                )}
                {/* Share button Section*/}

                <button className='w-full p-3  bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 text-white rounded-full text-lg font-medium hover:opacity-90 transition'>
                    {isLoginMode ? "Login" : "SignUp"}
                </button>

                {/* Switch link Section*/}
                <p className='text-center text-gray-600 '>{isLoginMode ? "Don't have an accound" : "Already have an accound"}
                    <a href="#" onClick={() => setIsLoginMode(!isLoginMode)} className='text-cyan-600 hover:underline'>
                        {isLoginMode ? "Signup now" : "Login"}
                    </a>
                </p>
            </form>


        </div>
    )
}

export default Login