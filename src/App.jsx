import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import Dashboard from './component/Dashboard';

function App() {
    return (
        <Router >
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
}

export default App;










/* import React from 'react'
import Login from './component/Login'

const App = () => {
  return (
    <div className='grid w-[100%] h-screen place-items-center bg-cyan-400'>
      <Login/>
    </div>
  )
}

export default App */