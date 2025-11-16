import logo from './logo.svg';
import './App.css';
import { EventHandler } from './EventHandler';
import { use, useState } from 'react';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function App() {

  const[filter, setFilter] = useState(false);
  const[style, setStyle] = useState(null);

  let filteredEvents = [];
  const events=[
    {
      key: 1,
      title: "bailalo",
      date: '2025-11-29',
      style: "kizomba, bachata",
      location: "ssd"
    },
    {
      key: 2,
      title: "Alma",
      date: '2025-11-08',
      style: "kizomba, bachata",
      location: "ssd"
    },
    {
      key: 3,
      title: "Kizmania",
      date: '2025-11-24',
      style: "kizomba",
      location: "Epic"
    },
    {
      key: 4,
      title: "Studio salsa",
      date: '2025-11-14',
      style: "bachata, salsa, reggaeton",
      location: "Colloseum"
    },
    {
      key: 5,
      title: "bailalo",
      date: '2025-11-29',
      style: "kizomba, bachata",
      location: "ssd"
    }
  ] 

  const filterOption=["bachata", "kizomba", "salsa"];

  function showEvents(event){
    return<div>
      <br/>
      {event.title}
      <br/>
      {event.date.toDateString()}
      <br/>
      {event.style}
      <br/>
      {event.location}
      <br/>
    </div>
  }
  
  function filterOptions(){
    setFilter(true);
  }

  function filterStyle(event){
    console.log(event.target.innerText);   
    setStyle(event.target.innerText);  
  }


  if(style != null){
    filteredEvents = events.filter((element) => {return element.style.includes(style)});
  } 

  
  
  return (

    <div className="App">
      <header className="header">
        <h1>Dance Calendar</h1>
      </header>

      
      <button onClick={filterOptions}>filter</button>
      
      {filter === true && (
        <div>
        <h3>Filter:</h3>

        <h4>Dance style</h4>
        <button onClick={filterStyle}>{filterOption[0]}</button>
        <button onClick={filterStyle}>{filterOption[1]}</button>
        <button onClick={filterStyle}>{filterOption[2]}</button>

        <h4>Date</h4>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      
            <DatePicker label="Basic date picker" />
       
        </LocalizationProvider>

      </div>  
      )}
      

      {(style !== null && (filteredEvents.map((event) => <EventHandler event={event}/>))) || events.map((event) => <EventHandler event={event}/>) }
      
     

        <footer>
          dancecalendar.com
        </footer>
    </div>
  );
}

export default App;
