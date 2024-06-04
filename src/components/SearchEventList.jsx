import React from 'react'
import EventCard from './EventCard'
import { eventList } from '../utils/EventDatabase'
import './SearchEventList.css'

function SearchEventList({monthYear}) {
    const {selectMonth,selectYear}=monthYear;

    const filterEvents=eventList.filter((eventDetails)=>(
        eventDetails.date.year===selectYear && eventDetails.date.month===selectMonth
    ))

    console.log(filterEvents)

    const renderEventCards=()=>{
        return filterEvents.map(({id,heading,date,location,img})=>(
            <EventCard
            key={id}
    heading={heading}
    date={date}
    location={location}
    img={img}/>
        ))
    }
  return (
    <div>
        
        {filterEvents.length>0?renderEventCards():<p>No Events in this date</p>}
    </div>
  )
}

export default SearchEventList