import React, { useState } from "react";
import './event.css';
import Navbar from './navbar';
import Footer from './Footer';
import { Link } from "react-router-dom";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const event = () =>{

    const [date, setDate] = useState(new Date());
    const [bookedEvents, setBookedEvents] = useState([]);


    const onChange = (date) => {
        setDate(date);
      };


    const handleBookNow = (topic) => {
        if (!bookedEvents.includes(topic)) {
            setBookedEvents(prevEvents => [...prevEvents, topic]);
        } else {
            alert(`The event "${topic}" is already booked.`);
        }
    };

    const handleDeleteEvent = (topic) => {
        console.log("Deleting event:", topic);
    const updatedEvents = bookedEvents.filter(event => event !== topic);
    console.log("Updated events:", updatedEvents);
    setBookedEvents(updatedEvents);
    };

    return(
        <>
        <Navbar/>
        <div className="evebox">
        <h1>UPCOMING EVENTS</h1>
        <div className="eventcontainer">
        <div className="eventlist1"><h2>Conferences</h2>
            <div class="overlay">
                <p id="loc">Location : Coimbatore</p>
                <p id="pri">Price : 450</p>
                <p id="dat">Date : 25-02-2024</p>
                <div className="text"><button onClick={() => handleBookNow('Conferences')}>Book now</button></div>
            </div>
        </div>
        <div className="eventlist2"><h2>Seminars</h2>
            <div class="overlay">
                <p id="loc">Location : Chennai</p>
                <p id="pri">Price : 800</p>
                <p id="dat">Date : 27-02-2024</p>
                <div class="text"><button onClick={() => handleBookNow('Seminars')}>Book now</button></div>
            </div>
        </div>
        <div className="eventlist3"><h2>Workshops</h2>
            <div class="overlay">
                <p id="loc">Location : Coimbatore</p>
                <p id="pri">Price : 600</p>
                <p id="dat">Date : 29-02-2024</p>
                <div class="text"><button button onClick={() => handleBookNow('Workshops')}>Book now</button></div>
            </div>
            </div>
            <div className="evecontain"><h2 button onClick={() => handleBookNow('Conferences')}>Booked Events</h2>
            {bookedEvents.length === 0 ? (
                <>
                <p className="booked">Oops! No event booked.</p>
                <button className="booknow"><Link className="booknowlink" to="/event">Book Now</Link></button>
                </>
            ) : (
                bookedEvents.map((event, index) => (
                    <div className="evebook" key={index}>
                        {event}
                        <button onClick={() => handleDeleteEvent(event)}>Delete</button>
                    </div>
                ))
            )}
            <div><Calendar onChange={onChange} value={date} /></div>
            </div>
            </div>
            <div className="eventcontainer">
            <div className="eventlist4"><h2>Team Events</h2>
                <div class="overlaay">
                    <p id="loc">Location : Madurai</p>
                    <p id="pri">Price : 1000</p>
                    <p id="dat">Date : 27-02-2024</p>
                    <div class="text"><button button onClick={() => handleBookNow('Team-building Events')}>Book now</button></div>
                </div>
            </div>
            <div className="eventlist5"><h2>Product Launches</h2>
            <div class="overlaay">
                    <p id="loc">Location : Coimbatore</p>
                    <p id="pri">Price : 300</p>
                    <p id="dat">Date : 01-03-2024</p>
                    <div class="text"><button button onClick={() => handleBookNow('Product Launches')}>Book now</button></div>
                </div>
            </div>
            <div className="eventlist6"><h2>Corporate Retreats</h2>
                <div class="overlaay">
                    <p id="loc">Location : Coimbatore</p>
                    <p id="pri">Price : 450</p>
                    <p id="dat">Date : 26-02-2024</p>
                    <div class="text"><button button onClick={() => handleBookNow('Corporate Retreats')}>Book now</button></div>
                </div>
            </div>
        </div>
        <h1 className="get">Ready to manage your events </h1>
        <h1 className="gets">smarter, better?</h1>
        <Link className="getstarted" to="/Signup"><button className="acd">GET STARTED NOW</button></Link>
        </div>
        <Footer/>
        </>
    );
};

export default event;