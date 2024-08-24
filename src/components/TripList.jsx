// style
import './TripList.css'

import { useState, useEffect } from "react"

function TripList() {

    const [trips, setTrips] = useState([])
    const [url, setUrl] = useState("http://localhost:3000/trips")

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setTrips(data))
    }, [url])

    return (
        <div className='trip-list'>
            <h1>Trip List</h1>
            <ul>
                {trips.map((trip) => {
                    return (
                        <li key={trip.id}>
                            <h2>{trip.title}</h2>
                            <p>{trip.price}</p>
                        </li>
                    )
                })}
            </ul>
            <div className="filters">
                <button onClick={() => setUrl('http://localhost:3000/trips?location=Europe')}>European Trips</button>
                <button onClick={() => setUrl('http://localhost:3000/trips')}>All Trips</button>
            </div>
        </div>
    )
}

export default TripList
