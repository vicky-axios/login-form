import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography, Paper } from '@mui/material';

const Dashboard = () => {
    const location = useLocation();
    const userName = location.state?.userName || "User";    

    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
            <Paper elevation={3} sx={{ p: 4, borderRadius: 3, textAlign: 'center', width: 430 }}>
                <Typography variant="h4" fontWeight="bold">
                    Welcome, {userName}!
                </Typography>      
            </Paper>
        </Box>
    );
};

export default Dashboard;
