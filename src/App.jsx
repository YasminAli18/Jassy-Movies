import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import './App.css'
import { Provider } from "react-redux";
import store from "./Store/store";
import Login from './Pages/Login/Login'
import Movies from './Pages/Movies/Movies'
import FavMovies from './Pages/Movies/FavMovies'
import NavBar from './Components/NavBar/NavBar'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'
import MovieDetails from './Pages/Movies/MovieDetails'
import Main from './Components/Main/main'
 const route= createBrowserRouter([
  {path:'/',element:<Main/>,children:[ 
    { path:'/', element:<Home/>},
    { path:'/movies', element:<Movies/>},
    {path:'/favmovies' ,element:<FavMovies/>},
    {path:'/movie/:id' ,element:<MovieDetails/>},
     {path:'/login', element:<Login/>}
]},
])
function App() {

  return (
    <>
<Provider store={store}>
    
<RouterProvider router={route}></RouterProvider>
    </Provider>
      {/* <Login/>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/favmovies' element={<FavMovies/>}/>
          <Route path='/movie/:id' element={<MovieDetails/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter> */}
    </>
  )
}

export default App
