import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Navbar from './Components/Navbar/Navbar';

function App() {

  const router = createBrowserRouter([{
      path: '/',
      element: <> <Navbar /> <Home /> </>,
    },
    {
      path: '/login',
      element: <> <Navbar /> <Login /> </>,
    },
    {
      path: '/signup',
      element: <> <Navbar /> <SignUp /> </>,
    },
    {
      path: '/about',
      element: <> <Navbar /> <About /> </>,
    },
  ]);

  return (
    <>
      <div className="container">
        <RouterProvider router = {router} />
      </div>
    </>
  );
}

export default App;
