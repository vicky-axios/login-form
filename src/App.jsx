import { Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import Blog from './component/hmf/Blog'
import Pricing from './component/hmf/Pricing'
import Products from './component/hmf/Products';
import ResponsiveAppBar from './component/hmf/Nav'
function App() {
  return (
    <div >
      <div className=''>  {/* grid w-[100%] h-screen place-items-center bg-cyan-400 */}
        <ResponsiveAppBar />

        <Routes >
          <Route path="/" element={<Login />} />
          <Route path="/Blog" element={<Blog/>} />
          <Route path="/Pricing" element={<Pricing/>} />
          <Route path="/Products" element={<Products/>} />
        </Routes>
      </div>

    </div>
  );
}

export default App;












