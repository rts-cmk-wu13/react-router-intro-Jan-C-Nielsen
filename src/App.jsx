import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Settings from './pages/settings'
import Myscooter from './pages/myscooter'
//import './App.css'

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "about",
      element: <About/>
    },
    {
      path: "Settings",
      element: <Settings/>
    },
    {
      path: "myscooter",
      element: <Myscooter/>
    }
  ])

  return (
    
      <RouterProvider router={router} />
   
  )
}

export default App
