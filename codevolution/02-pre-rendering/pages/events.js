import { useRouter } from "next/router";
import { useState } from "react"


function EventList({eventList}){
    const [events, setEvents] = useState(eventList);
    const router = useRouter()

    const fetchSportsEvents = async()=>{
        const resp = await fetch(`http://localhost:4000/events?category=sports`)
        const data = await resp.json()
        setEvents(data)
        router.push('/events?category=sports', undefined, {shallow : true})
    }

    return <>
        <button onClick={fetchSportsEvents}>Sports Events</button>
        <h1>List of Events</h1>
        {
            events.map(event =>{
                return <div key={event.id}>
                    <h2>{event.id} {event.title} {event.date} | {event.category}</h2>
                    <p>{event.description}</p>
                      <hr />
                </div>
            })
        }
    </>
}
export default EventList

export async function getServerSideProps(context){
    const { query } = context
    const { category } = query
    const queryString = category ? 'category=sports':''
    const resp = await fetch(`http://localhost:4000/events?${queryString}`)
    const data = await resp.json()

    return {
        props:{
            eventList: data
        }
    }
}