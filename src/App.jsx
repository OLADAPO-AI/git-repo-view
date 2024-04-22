import axios from 'axios'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Error from './pages/Error'
import LandingPage from './pages/Landing'
import About from './pages/About'
import Repo from './pages/Repo'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <Error />,
    children: [
      {
        index: true,

        element: (
          <div>
            <Repo />
          </div>
        ),
      },
      {
        path: 'Error',
        element: (
          <div>
            <Error />
          </div>
        ),
      },

      {
        path: 'About',
        element: (
          <div>
            <About />
          </div>
        ),
      },
    ],
  },
])
function App() {
  return <RouterProvider router={router} />
}

export default App
