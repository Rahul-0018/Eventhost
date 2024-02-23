import React, { useState } from "react";
import './event.css';
import Navbar from './navbar';
import Footer from './Footer';
import { Link } from "react-router-dom";
const event = () =>{

    const [bookedEvents, setBookedEvents] = useState([]);

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
                <p id="loc">Location : Coimbatore</p>
                <p id="pri">Price : 450</p>
                <p id="dat">Date : 25-02-2024</p>
                <div class="text"><button onClick={() => handleBookNow('Seminars')}>Book now</button></div>
            </div>
        </div>
        <div className="eventlist3"><h2>Workshops</h2>
            <div class="overlay">
                <p id="loc">Location : Coimbatore</p>
                <p id="pri">Price : 450</p>
                <p id="dat">Date : 25-02-2024</p>
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
            </div>
            </div>
            <div className="eventcontainer">
            <div className="eventlist1"><h2>Team Events</h2>
                <div class="overlaay">
                    <p id="loc">Location : Coimbatore</p>
                    <p id="pri">Price : 450</p>
                    <p id="dat">Date : 25-02-2024</p>
                    <div class="text"><button button onClick={() => handleBookNow('Team-building Events')}>Book now</button></div>
                </div>
            </div>
            <div className="eventlist2"><h2>Product Launches</h2>
            <div class="overlaay">
                    <p id="loc">Location : Coimbatore</p>
                    <p id="pri">Price : 450</p>
                    <p id="dat">Date : 25-02-2024</p>
                    <div class="text"><button button onClick={() => handleBookNow('Product Launches')}>Book now</button></div>
                </div>
            </div>
            <div className="eventlist3"><h2>Corporate Retreats</h2>
                <div class="overlaay">
                    <p id="loc">Location : Coimbatore</p>
                    <p id="pri">Price : 450</p>
                    <p id="dat">Date : 25-02-2024</p>
                    <div class="text"><button button onClick={() => handleBookNow('Corporate Retreats')}>Book now</button></div>
                </div>
            </div>
        </div>
        </div>
        <Footer/>
        </>
    );
};

export default event;