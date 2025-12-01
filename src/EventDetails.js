import { useParams } from "react-router";
import { events } from "./events";

export function EventDetails(){

  let event = useParams();
  const eventId = parseInt(event.id);
  const selectedEvent = events.find((e) => e.key === eventId);
  let formatedDate = new Date(selectedEvent.date).toDateString();

  return <div className="App">

      <header className="header">
        <h1>Dance Calendar</h1>
      </header>
      
      <div className='event-details-box'>
        Event details
          Event name:
          {selectedEvent.title}
          <br/>
          Date:
          {formatedDate}
          <br/>
          Style:
          {selectedEvent.style}
          <br/>
          Location:
          {selectedEvent.location}
      </div>

      <footer>
          dancecalendar.com
      </footer>
  </div>
}