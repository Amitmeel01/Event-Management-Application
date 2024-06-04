import React from 'react'
import './EventCard.css'
import { Link } from 'react-router-dom';


function EventCard({id,heading,img,date,location}) {
  const {year,month}=date;
  console.log(id)
  return (
    <Link to={`/events/${id}`}>
    <div className='card' style={{cursor:"pointer"}}>
       
          <div className='card-content'>
        <h3>{heading}</h3>
        
        <p>
          <span>Year:{year}</span>
          <span>Month:{month}</span>
        </p>
        <p>location:{location}</p>
        </div>
        
        <div className='card-image-wrapper'>
          <img src={img} alt="" />
        </div>

    </div>
    </Link>
  )
}

export default EventCard