import './App.css'
import Navigation from './components/Navigation'
import EventDetail from './pages/EventDetail/EventDetail'
import EventList from './pages/EventList/EventList'
import FilterEvent from './pages/filterEvents/FilterEvent'
import {Route, RouterProvider, createBrowserRouter} from 'react-router-dom'

const router=createBrowserRouter([
 
    {path:'/',element:<EventList/>},
    {path:'/events/:id',element:<EventDetail/>},
    {path:'/find-events',element:<FilterEvent/>}
   
])




function App() {
  
 


  return(
    <>
    <RouterProvider router={router}/>
     
    
    
    </>
  )
}

export default App
