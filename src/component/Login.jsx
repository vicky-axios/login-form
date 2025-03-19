import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [isLoginMode, setIsLoginMode] = useState(true);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log("User Data:", data);
        navigate('/dashboard', { state: { userName: data.name || "User" } });
    };

    return (
        <div className='w-[430px] bg-white p-8 rounded-2xl shadow-lg'>
            {/* Header Title Section */}
            <div className='flex justify-center mb-4'>
                <h2 className='text-3xl font-semibold text-center'>{isLoginMode ? "Login" : "Sign Up"}</h2>
            </div>

            {/* Toggle Section */}
            <div className='relative flex h-12 mb-6 border border-gray-300 rounded-full overflow-hidden'>
                <button onClick={() => setIsLoginMode(true)} className={`w-1/2 text-lg font-medium transition-all z-10 ${isLoginMode ? "text-white" : "text-black"}`}>
                    Login
                </button>
                <button onClick={() => setIsLoginMode(false)} className={`w-1/2 text-lg font-medium transition-all z-10 ${!isLoginMode ? "text-white" : "text-black"}`}>
                    Sign Up
                </button>
                <div className={`absolute top-0 h-full w-1/2 rounded-full bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 ${isLoginMode ? "left-0" : "left-1/2"}`}></div>
            </div>

            {/* Form Section */}
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                {/* Name Field Only for Signup */}
                {!isLoginMode && (
                    <>
                        <input type="text" placeholder='Name' {...register("name", { required: !isLoginMode })} className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400' />
                        {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
                    </>
                )}

                {/* Email Field */}
                <input
                    type="email"
                    placeholder="Email Address"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^\S+@\S+$/,
                            message: "Invalid email format"
                        }
                    })}
                    className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400'
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

                {/* Password Field */}
                <input
                    type="password"
                    placeholder="Password"
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters"
                        }
                    })}
                    className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400'
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

                {/* Confirm Password (Only for Signup) */}
                {!isLoginMode && (
                    <>
                        <input
                            type="password"
                            placeholder='Confirm Password'
                            {...register("confirmPassword", {
                                required: "Confirm Password is required",
                                validate: (value) => value === watch("password") || "Passwords do not match"
                            })}
                            className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400'
                        />
                        {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
                    </>
                )}

                {/* Forgot Password (Only for Login) */}
                {isLoginMode && (
                    <div className='text-right'>
                        <p className='text-cyan-600 hover:underline '>Forgot Password?</p>
                    </div>
                )}

                {/* Submit Button */}
                <button type="submit" className='w-full p-3 bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 text-white rounded-full text-lg font-medium hover:opacity-90 transition'>
                    {isLoginMode ? "Login" : "Sign Up"}
                </button>

                {/* Toggle Between Login and Signup */}
                <p className='text-center text-gray-600 '>
                    {isLoginMode ? "Don't have an account?" : "Already have an account?"}
                    <button type="button" onClick={() => setIsLoginMode(!isLoginMode)} className='text-cyan-600 hover:underline ml-1'>
                        {isLoginMode ? "Sign up now" : "Login"}
                    </button>
                </p>
            </form>
        </div>
    );
};

export default Login;
















// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//     const [isLoginMode, setIsLoginMode] = useState(true);
//     const navigate = useNavigate();
    
//     const { 
//         register,
//          handleSubmit,
//           formState: { errors }
//          } = useForm();

//     const onSubmit = (data) => {
//         console.log("User Data:", data);
//         // Redirect to Dashboard with welcome message
//         navigate('/dashboard', { state: { userName: data.name || "User" } });
//     };

//     return (
//         <div className='w-[430px] bg-white p-8 rounded-2xl shadow-lg'>
//             {/* Header Title Section */}
//             <div className='flex justify-center mb-4 '>
//                 <h2 className='text-3xl font-semibold text-center'>{isLoginMode ? "Login " : "Sign Up"}</h2>
//             </div>

//             {/* Toggle Section */}
//             <div className='relative flex h-12 mb-6 border border-gray-300 rounded-full overflow-hidden'>
//                 <button onClick={() => setIsLoginMode(true)} className={`w-1/2 text-lg font-medium transition-all z-10 ${isLoginMode ? "text-white" : "text-black"}`}>
//                     Login
//                 </button>
//                 <button onClick={() => setIsLoginMode(false)} className={`w-1/2 text-lg font-medium transition-all z-10 ${!isLoginMode ? "text-white" : "text-black"}`}>
//                     Sign Up
//                 </button>
//                 <div className={`absolute top-0 h-full w-1/2 rounded-full bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 ${isLoginMode ? "left-0" : "left-1/2"}`}></div>
//             </div>

//             {/* Form Section */}
//             <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
//                 {/* Name Field (Only for Signup) */}
//                 {!isLoginMode && (
//                     <>
//                         <input type="text" placeholder='Name' {...register("name", { required: !isLoginMode })} className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400' />
//                         {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
//                     </>
//                 )}

//                 {/* Email Field */}
//                 <input type="email" placeholder="Email Address" {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/, message: "Invalid email format" } })} className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400' />
//                 {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

//                 {/* Password Field */}
//                 <input type="password" placeholder="Password" {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })} className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400' />
//                 {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

//                 {/* Confirm Password (Only for Signup) */}
//                 {!isLoginMode && (
//                     <>
//                         <input type="password" placeholder='Confirm Password' {...register("confirmPassword", { required: !isLoginMode })} className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400' />
//                         {errors.confirmPassword && <p className="text-red-500 text-sm">Confirm Password is required</p>}
//                     </>
//                 )}

//                 {/* Forgot Password (Only for Login) */}
//                 {isLoginMode && (
//                     <div className='text-right'>
//                         <p className='text-cyan-600 hover:underline '>Forgot Password?</p>
//                     </div>
//                 )}

//                 {/* Submit Button */}
//                 <button type="submit" className='w-full p-3 bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 text-white rounded-full text-lg font-medium hover:opacity-90 transition'>
//                     {isLoginMode ? "Login" : "Sign Up"}
//                 </button>

//                 {/* Toggle Between Login and Signup */}
//                 <p className='text-center text-gray-600 '>
//                     {isLoginMode ? "Don't have an account?" : "Already have an account?"}
//                     <button type="button" onClick={() => setIsLoginMode(!isLoginMode)} className='text-cyan-600 hover:underline ml-1'>
//                         {isLoginMode ? "Sign up now" : "Login"}
//                     </button>
//                 </p>
//             </form>
//         </div>
//     );
// };

// export default Login;

















// import React, { useState } from 'react'

// const Login = () => {

//     const [isLoginMode, setIsLoginMode] = useState(true)
//     return (
//         <div className='w-[430px] bg-white p-8 rounded-2xl shadow-lg'>
//             {/* Header tite Section*/}
//             <div className='flex justify-center mb-4 '>
//                 <h2 className='text-3xl font-semibold text-center'>{isLoginMode ? "Login " : "Sign Up"}</h2>
//             </div>
//             {/* Tap controls Section*/}
//             <div className='relative flex h-12 mb-6 border border-gray-300  rounded-full overflow-hidden '>
//                 <button onClick={() => setIsLoginMode(true)} className={`w-1/2 text-lg font-medium transition-all z-10 ${isLoginMode ? "text-white" : "text-black"}`}>
//                     Login
//                 </button>
//                 <button onClick={() => setIsLoginMode(false)} className={`w-1/2 text-lg font-medium transition-all z-10 ${!isLoginMode ? "text-white" : "text-black"}`}>
//                     Sign Up
//                 </button>
                
//                 <div className={`absolute top-0 h-full w-1/2 rounded-full  bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 ${isLoginMode ? "left-0" : "left-1/2"}`}>
//                 </div>

//             </div>
//             {/* Form Section */}
//             <form className='space-y-4'>
//                 {!isLoginMode && (
//                     <input type="text" placeholder='Name' required className='w-full p-3 border-b-2 border-gray-300  outline-none focus:border-cyan-500 placeholder-gray-400' />
//                 )}

//                 {/* Shared input field  Section*/}
//                 <input type="email" placeholder="Email Address" required className='w-full p-3 border-b-2 border-gray-300  outline-none focus:border-cyan-500 placeholder-gray-400' />
//                 <input type="password" placeholder="Password" required className='w-full p-3 border-b-2 border-gray-300  outline-none focus:border-cyan-500 placeholder-gray-400' />

//                 {/* Signup field Section */}
//                 {!isLoginMode && (
//                     <input type="password" placeholder='Confirm Password' required className='w-full p-3 border-b-2 border-gray-300  outline-none focus:border-cyan-500 placeholder-gray-400' />
//                 )}

//                 {/* Forget password for login  Section */}
//                 {isLoginMode && (
//                     <div className='text-right'>
//                         <p className='text-cyan-600 hover:underline '>Forget Password</p>
//                     </div>
//                 )}
//                 {/* Share button Section*/}

//                 <button className='w-full p-3  bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 text-white rounded-full text-lg font-medium hover:opacity-90 transition'>
//                     {isLoginMode ? "Login" : "SignUp"}
//                 </button>

//                 {/* Switch link Section*/}
//                 <p className='text-center text-gray-600 '>{isLoginMode ? "Don't have an accound" : "Already have an accound"}
//                     <a href="#" onClick={() => setIsLoginMode(!isLoginMode)} className='text-cyan-600 hover:underline'>
//                         {isLoginMode ? "Signup now" : "Login"}
//                     </a>
//                 </p>
//             </form>


//         </div>
//     )
// }

// export default Login