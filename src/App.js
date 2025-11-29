import logo from './logo.svg';
import './App.css';
import { EventHandler } from './EventHandler';
import { use, useState } from 'react';
import { EventDetails } from './EventDetails';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function App() {

  const[filter, setFilter] = useState(false);
  const[style, setStyle] = useState(null);
  const[date, setDate] = useState(null);

  const filterOption=["bachata", "kizomba", "salsa"];


  const events=[
    {
      key: 1,
      title: "bailalo",
      date: new Date('2025-11-29'),
      style: "kizomba, bachata",
      location: "ssd"
    },
    {
      key: 2,
      title: "Alma",
      date: new Date('2025-11-08'),
      style: "kizomba, bachata",
      location: "ssd"
    },
    {
      key: 3,
      title: "Kizmania",
      date: new Date('2025-11-24'),
      style: "kizomba",
      location: "Epic"
    },
    {
      key: 4,
      title: "Studio salsa",
      date: new Date('2025-11-14'),
      style: "bachata, salsa, reggaeton",
      location: "Colloseum"
    },
    {
      key: 5,
      title: "Alma",
      date: new Date('2025-11-29'),
      style: "kizomba, bachata",
      location: "ssd"
    },
    {
      key: 6,
      title: "Bachata under ground",
      date: new Date('2025-12-06'),
      style: "bachata",
      location: "ssd"
    }
  ] 

  let filteredEvents = events;
  
  function filterOptions(){
    setFilter(true);
  }

  function filterStyle(event){
    console.log(event.target.innerText);   
    setStyle(event.target.innerText);  
  }


  function datePickHandler(date){
    console.log(date.$d);
    let dateData = date.$d;
    let dateModified = dateData.toString().substring(0,14);
    setDate(dateModified);
  }

  if(style != null){
    filteredEvents = events.filter((element) => {return element.style.includes(style)});
  } 

  if(date != null){       
    filteredEvents = filteredEvents.filter((element) => {return element.date.toString().includes(date)}); 
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
            <DatePicker onChange={datePickHandler} label="Choose a date" />      
        </LocalizationProvider>

      </div>  
      )}
      
      {
        filter === true? 
            (filteredEvents.length > 0)? 
              (filteredEvents.map((event) => <EventHandler event={event}/>))
            : (<div> No results matched</div>)
        : events.map((event) => <EventHandler event={event}/>)
      }

      
    
      
      <h2>hejjjj</h2>

      {((filteredEvents.length > 0) && (filteredEvents.map((event) => <EventHandler event={event}/>))) || events.map((event) => <EventHandler event={event}/>) }

        <footer>
          dancecalendar.com
        </footer>
    </div>
  );
}

export default App;
