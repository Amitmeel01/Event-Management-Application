import React, { useState } from 'react'
import './FilterEvent.css'
import FilterBox from '../../components/filterbox/FilterBox'
import SearchEventList from '../../components/SearchEventList'
import Navigation from '../../components/Navigation'

function FilterEvent() {
console.log("render")
const [monthYear,setMonthYear]=useState({
  selectMonth:null,
  selectYear:null,
})

  const getMonthYear=(selectMonth,selectYear)=>{
    console.log(selectMonth,selectYear)
        setMonthYear({selectMonth,selectYear})
  }
  return (
    <>
    <div>
    <Navigation/>
    <FilterBox getMonthYear={getMonthYear}/>
    <SearchEventList monthYear={monthYear}/>
    </div>
    </>
  )
}

export default FilterEvent