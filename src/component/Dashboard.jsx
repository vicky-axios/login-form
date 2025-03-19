import React from 'react';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
    const location = useLocation();
    const userName = location.state?.userName || "User";

    return (
        <div className="text-center mt-10 w-[430px] bg-white p-8 rounded-2xl shadow-lg">
            <div className=''>
                <h1 className="text-4xl font-bold">Welcome, {userName}!</h1>
            </div>

        </div>
    );
};

export default Dashboard;
