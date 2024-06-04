import React from 'react'
import {Link} from 'react-router-dom'
import "./Navigation.css"

export default function Navigation() {
  return (
   <nav className='nav'>
    <ul>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/find-events'>Find Events</Link>
        </li>
        
    </ul>
   </nav>
  )
}
