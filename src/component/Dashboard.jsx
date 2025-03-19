import { useLocation } from 'react-router-dom';

const Dashboard = () => {
    const location = useLocation();
    const userName = location.state?.userName || "User";

    return <h1>Welcome, {userName}!</h1>;
};

export default Dashboard;
