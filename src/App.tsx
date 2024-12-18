import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Blog from './pages/blog/Blog'
import RootLayout from './rootLayout/RootLayout'
import Details from './pages/details/Details'
import blogData from './data/BlogData'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='blog' element={<Blog />} />
        <Route path='details/:itemID' element={<Details items={blogData} />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
