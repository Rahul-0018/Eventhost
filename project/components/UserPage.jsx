import React, { useEffect , useState } from "react";
import axios from "axios";
import Navbar from "./navbar";
import Footer from "./Footer";
import './UserPage.css';
const UserPage = () => {
    const [data , setData] = useState([]);
    const [datas , setDatas] = useState([]);

    const [name , setName] = useState("");
    const [eventid , setEventId] = useState("");
    const [nop , setNop] = useState("");

    let userToken = "";
    try {
        const userInfo = JSON.parse(localStorage.getItem('user-info'));
        userToken = userInfo.emailc;
      } catch (error) {
        console.error('Error parsing userInfo:', error);
      }
    console.log(userToken);
    
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
    }

    useEffect(() => {
        axios.get('http://localhost:8429/showEvents')
            .then(res => {
                setData(res.data.data);
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }, []);


    useEffect(() => {
        axios.get('http://localhost:8429/showBooking')
            .then(res => {
                setDatas(res.data.data);
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    async function addBooking(){
        console.warn(eventid , name , nop)

        let item = {eventid , name , nop};

        let result = await fetch("http://localhost:8429/addBooking",{
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json'
            }
        });
        result = await result.json();
        console.log(result);
        window.location.reload();
    }

    async function updateBooking(){
        console.warn(eventid , name , nop)

        let items = {eventid , name , nop};

        let results = await fetch("http://localhost:8429/updateBooking",{
            method: 'PUT',
            body: JSON.stringify(items),
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json'
            }
        });
        results = await results.json();
        console.log(results);
        window.location.reload();
    }

    async function deleteBooking(eventid){
        let result = await fetch("http://localhost:8429/deleteBooking/"+ eventid ,{
            method: 'DELETE'
        });
        result = await result.json();
        window.location.reload();
    }

    return(
        <>
            <Navbar/>
            <h3>User</h3>
            <h2>Show Events</h2>
            {
                data.map((d) => (
                    <div className="fetchbox" key={d.eventid}>
                        <div> 
                            <p>{d.id}</p>   
                            <p>{d.eventname}</p>
                            <p>{d.eventid}
                            <button onClick={() => copyToClipboard(d.eventid)}>Copy</button>
                            </p>
                            <p>{d.date}</p>
                            <p>{d.location}</p>
                            <p>{d.available}</p>
                            <p>{d.organiser}</p>
                        </div>
                    </div>
                ))
            }
            <h2>Add Bookings</h2>
            <div>
                <input type="text" placeholder="eventid" onChange={(e)=>setEventId(e.target.value)}></input><br/>
                <input type="text" placeholder="name" onChange={(e)=>setName(e.target.value)}></input><br/>
                <input type="number" placeholder="nop" onChange={(e)=>setNop(e.target.value)}></input><br/>
                <button onClick={addBooking}>Add Booking</button>
            </div>
            <h2>update Booking</h2>
            <div>
                <input type="text" placeholder="Eventid" onChange={(e)=>setEventId(e.target.value)}></input><br/>
                <input type="text" placeholder="name" onChange={(e)=>setName(e.target.value)}></input><br/>
                <input type="number" placeholder="nop" onChange={(e)=>setNop(e.target.value)}></input><br/>
                <button onClick={updateBooking}>update Booking</button>
            </div>
            <h3>Show Bookings</h3>
                {
                    datas && datas.length > 0 ? (
                        datas.map((d) => (
                            <div className="fetchbox" key={d.id}>
                                <div> 
                                    <p>{d.eventid}
                                    <button onClick={() => copyToClipboard(d.eventid)}>Copy</button>
                                    </p>   
                                    <p>{d.eventname}</p>
                                    <p>{d.name}</p>
                                    <p>{d.date}</p>
                                    <p>{d.location}</p>
                                    <p>{d.nop}</p>
                                    {
                                        d.validcheck == 0 ? (
                                            <p className="reed">Inprogress</p>
                                        ) : d.validcheck === 1 ? (
                                            <p className="greeen">Accepted</p>
                                        ) : null
                                    }
                                    <button onClick={()=>deleteBooking(d.eventid)}>Delete</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No bookings available.</p>
                    )
                }
            <Footer/>
        </>
        )
}
export default UserPage;