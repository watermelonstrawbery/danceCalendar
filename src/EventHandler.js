import './App.css';
import { Link } from 'react-router';
import { EventDetails } from './EventDetails';

export function EventHandler(props){

  let formatedDate = new Date(props.event.date).toDateString();

  return<Link to={`/event-details/${props.event.key}`}>
    <div className='event-box'>
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
    </div>
    </Link>
}

