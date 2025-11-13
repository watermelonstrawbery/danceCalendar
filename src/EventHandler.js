import './App.css';

export function EventHandler(props){
  return<div>
      <br/>
      Event name:
      {props.event.title}
      <br/>
      Date:
      {props.event.date}
      <br/>
      Style:
      {props.event.style}
      <br/>
      Location:
      {props.event.location}
      <br/>
    </div>
}

