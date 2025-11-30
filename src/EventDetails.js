import { useParams } from "react-router";

export function EventDetails(props){

  let eventId = useParams();
  console.log(eventId);
  parseInt(eventId);
  

  
  return <div>
    <h1> event details</h1>
  </div>
}