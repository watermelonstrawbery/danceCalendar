import logo from './logo.svg';
import './App.css';
import { EventHandler } from './EventHandler';
import { use, useState } from 'react';
import { EventDetails } from './EventDetails';
import { events } from './events';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function App() {

  const[filter, setFilter] = useState(false);
  const[style, setStyle] = useState(null);
  const[date, setDate] = useState(null);
  const[searchTerm, setSearchTerm] = useState(null);

  const filterOption=["bachata", "kizomba", "salsa"];


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
    filteredEvents = events.filter((element) => {return element.style.toLocaleLowerCase().includes(style)});
  } 

  if(date != null){       
    filteredEvents = filteredEvents.filter((element) => {return element.date.toString().includes(date)}); 
  }

  if(searchTerm != null){
    filteredEvents = filteredEvents.filter((element) => {
      return element.title.toLocaleLowerCase().includes(searchTerm) || element.style.toLocaleLowerCase().includes(searchTerm) || element.location.toLocaleLowerCase().includes(searchTerm) || element.date.toString().toLocaleLowerCase().includes(searchTerm)
    })
  }
  


  console.log(searchTerm);
  
  
  return (
    <div className="App">
      <header className="header">
        <h1>Dance Calendar</h1>
      </header>

      <form class="nosubmit">
        <input class="nosubmit" type="search" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>         
      </form>

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
        filter === true || searchTerm !== null? 
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
