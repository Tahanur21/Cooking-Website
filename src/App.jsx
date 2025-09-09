import { NavLink, Outlet, useNavigation } from 'react-router'
import  './App.css'


function App() {
  const navigation = useNavigation();

  return (
    <>
      {/* Mother components */}
      <div className='max-w-screen-xl mx-auto p-6'>
        <nav className='flex justify-between mt-8'>
        <div className='w-20'>
          <img src="/src/assets/images/logo.jpg" alt="" />
        </div>
        <div id='nav-link' className='flex gap-4'>
          <NavLink to={'/home'} className="btn bg-yellow-500">Home</NavLink>
          <NavLink to={'/recipie'} className="btn bg-yellow-500">Recipie</NavLink>
          <NavLink to={'/about'} className="btn bg-yellow-500">About</NavLink>
        </div>
      </nav>
            <Outlet />
      </div>
    </>
  )
}

export default App
