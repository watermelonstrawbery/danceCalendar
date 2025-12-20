import './App.css';
import { Link } from 'react-router';
import { EventDetails } from './EventDetails';
import { events } from './events';

export function EventHandler(props){

  let formatedDate = new Date(props.event.date).toDateString();

  return <Link className='event-box' to={`/event-details/${props.event.key}`}>
      Event name:
      {props.event.title}
      <br/>
      Date:
      {formatedDate}
      <br/>
      Style:
      {props.event.style}
      <br/>
      Location:
      {props.event.location}
    </Link>
   
    
}

