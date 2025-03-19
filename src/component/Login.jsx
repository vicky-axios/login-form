import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [loginError, setLoginError] = useState("");
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        if (isLoginMode) {
            // Mock login logic (Replace with real authentication logic)
            if (data.email === "test@example.com" && data.password === "password123") {
                console.log("Login successful");
                navigate('/dashboard', { state: { userName: "Test User" } });
            } else {
                setLoginError("Invalid email or password");
            }
        } else {
            // Mock signup logic (Replace with API call to store user data)
            console.log("Signup successful", data);
            navigate('/dashboard', { state: { userName: data.name } });
        }
    };

    return (
        <div className='w-[430px] bg-white p-8 rounded-2xl shadow-lg'>
            <div className='flex justify-center mb-4'>
                <h2 className='text-3xl font-semibold text-center'>{isLoginMode ? "Login" : "Sign Up"}</h2>
            </div>

            <div className='relative flex h-12 mb-6 border border-gray-300 rounded-full overflow-hidden'>
                <button onClick={() => setIsLoginMode(true)} className={`w-1/2 text-lg font-medium transition-all z-10 ${isLoginMode ? "text-white" : "text-black"}`}>Login</button>
                <button onClick={() => setIsLoginMode(false)} className={`w-1/2 text-lg font-medium transition-all z-10 ${!isLoginMode ? "text-white" : "text-black"}`}>Sign Up</button>
                <div className={`absolute top-0 h-full w-1/2 rounded-full bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 ${isLoginMode ? "left-0" : "left-1/2"}`}></div>
            </div>

            {loginError && <p className='text-red-500 text-sm mb-2'>{loginError}</p>}

            <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                {!isLoginMode && (
                    <>
                        <input type="text" placeholder='Name' {...register("name", { required: !isLoginMode })} className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400' />
                        {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
                    </>
                )}

                <input type="email" placeholder="Email Address" {...register("email", {
                    required: "Email is required",
                    pattern: {
                        value: /^\S+@\S+$/,
                        message: "Invalid email format"
                    }
                })} className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400' />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

                <input type="password" placeholder="Password" {...register("password", {
                    required: "Password is required",
                    minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters"
                    }
                })} className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400' />
                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

                {!isLoginMode && (
                    <>
                        <input type="password" placeholder='Confirm Password' {...register("confirmPassword", {
                            required: "Confirm Password is required",
                            validate: (value) => value === watch("password") || "Passwords do not match"
                        })} className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400' />
                        {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
                    </>
                )}

                {isLoginMode && (
                    <div className='text-right'>
                        <p className='text-cyan-600 hover:underline cursor-pointer'>Forgot Password?</p>
                    </div>
                )}

                <button type="submit" className='w-full p-3 bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 text-white rounded-full text-lg font-medium hover:opacity-90 transition'>
                    {isLoginMode ? "Login" : "Sign Up"}
                </button>

                <p className='text-center text-gray-600'>
                    {isLoginMode ? "Don't have an account?" : "Already have an account?"}
                    <button type="button" onClick={() => { setIsLoginMode(!isLoginMode); setLoginError(""); }} className='text-cyan-600 hover:underline ml-1'>
                        {isLoginMode ? "Sign up now" : "Login"}
                    </button>
                </p>
            </form>
        </div>
    );
};

export default Login;