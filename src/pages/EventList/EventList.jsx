import React from 'react'
import './EventList.css'
import EventCard from '../../components/EventCard'
import { eventList } from '../../utils/EventDatabase'
import Navigation from '../../components/Navigation'
import { Link } from 'react-router-dom';

function EventList() {

  const renderEventCards=()=>{

  // console.log(eventList[0].id)

  //method-1

  // eventList.map((event)=>(
  //   console.log(event.id)
  // ))

  //method-2

  return eventList.map(({id,heading,date,location,img})=>(
    // console.log(id,heading,date,location)
    <EventCard
    key={id}
    heading={heading}
    date={date}
    location={location}
    img={img}
    id={id}
    
    />
  ))
  }



  
  return (
    <div className='event-list-wrapper'>
       <Navigation/>
      <div className='event-list'>      
      {eventList.length>0?(renderEventCards()):<h3>No Events Avilable</h3>}
      </div>

    </div>
   
  )
}

export default EventList