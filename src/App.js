import logo from './logo.svg';
import './App.css';
import { EventHandler } from './EventHandler';


function App() {

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
      title: "Kismania",
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
  

  return (

    <div className="App">
      <header className="App-header">
        {events.map( 
          (event) => <EventHandler event={event}/>
        )}
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
         
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
