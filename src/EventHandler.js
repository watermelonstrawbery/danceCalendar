import './App.css';

export function EventHandler(props){

  let formatedDate = new Date(props.event.date).toDateString();

  return<div>
      <br/>
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
      <br/>
    </div>
}

