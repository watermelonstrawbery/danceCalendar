export function EventHandler(props){
  return<div>
      <br/>
      {props.event.title}
      <br/>
      {props.event.date}
      <br/>
      {props.event.style}
      <br/>
      {props.event.location}
      <br/>
    </div>
}