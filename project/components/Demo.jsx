import axios from "axios";
import React, { useEffect, useState } from "react";
import './Demo.css';
import Footer from './Footer';
import Navbar from './navbar';

const Demo = () => {
    const [data , setData] = useState([]);
    const [datas , setDatas] = useState([]);
    const [eventname , setEventName] = useState("");
    const [organiser , setOrganiser] = useState("");
    const [location , setLocation] = useState("");
    const [date , setDate] = useState("");
    const [available , setAvilable] = useState("");
    const [id , setEventId] = useState("");
    
    useEffect(() => {
        axios.get('http://localhost:8429/showEvents')
            .then(res => {
                setData(res.data.data);
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        axios.get('http://localhost:8429/showBook')
            .then(res => {
                setDatas(res.data.data);
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    async function addproduct(){
        console.warn(eventname , organiser , location , date , available)

        let item = { eventname, organiser , location , date , available };

        let result = await fetch("http://localhost:8429/addEvents",{
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
    
    async function updateproduct(){
        console.warn(id , eventname , organiser , location , date , available)

        let items = {id , eventname, organiser , location , date , available };

        let results = await fetch("http://localhost:8429/updateEvents",{
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

    async function deleteproduct(id){
        let result = await fetch("http://localhost:8429/deleteEvents/"+ id ,{
            method: 'DELETE'
        });
        result = await result.json();
        window.location.reload();
    }


    async function upBook(d){
        d.validcheck = 1;
        let results = await fetch("http://localhost:8429/upBook",{
            method: 'PUT',
            body: JSON.stringify({ eventid: d.eventid, validcheck: 1 }),
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json'
            }
        });
        results = await results.json();
        window.location.reload();
    }
    return(
        <>
            <Navbar/>
            <h1>Demo</h1>
            <div>
                <h3>Add Event</h3>
                <input type="text" placeholder="eventname" onChange={(e)=>setEventName(e.target.value)}></input><br/>
                <input type="text" placeholder="organiser" onChange={(e)=>setOrganiser(e.target.value)}></input><br/>
                <input type="text" placeholder="location" onChange={(e)=>setLocation(e.target.value)}></input><br/>
                <input type="date" placeholder="date" onChange={(e)=>setDate(e.target.value)}></input><br/>
                <input type="number" placeholder="Avilable" onChange={(e)=>setAvilable(e.target.value)}></input><br/>
                <button onClick={addproduct}>Add Event</button>
            </div>
            <div>
                <h3>update Event</h3>
                <input type="number" placeholder="eventid" onChange={(e)=>setEventId(e.target.value)}></input><br/>
                <input type="text" placeholder="eventname" onChange={(e)=>setEventName(e.target.value)}></input><br/>
                <input type="text" placeholder="organiser" onChange={(e)=>setOrganiser(e.target.value)}></input><br/>
                <input type="text" placeholder="location" onChange={(e)=>setLocation(e.target.value)}></input><br/>
                <input type="date" placeholder="date" onChange={(e)=>setDate(e.target.value)}></input><br/>
                <input type="number" placeholder="Avilable" onChange={(e)=>setAvilable(e.target.value)}></input><br/>
                <button onClick={updateproduct}>update Event</button>
            </div>
            

            <h3>Events</h3>
            {
                data.map((d) => (
                    <div className="fetchbox" key={d.eventid}>
                        <div> 
                            <p>{d.id}</p>   
                            <p>{d.eventname}</p>
                            <p>{d.eventid}</p>
                            <p>{d.date}</p>
                            <p>{d.location}</p>
                            <p>{d.available}</p>
                            <p>{d.organiser}</p>
                        </div>
                        <button onClick={()=>deleteproduct(d.id)}>Delete</button>
                    </div>
                ))
            }

            <div>
                <h3>Show Bookings</h3>
                {
                    datas && datas.length > 0 ? (
                        datas.map((d) => (
                            <div className="fetchbox" key={d.id}>
                                <div>  
                                    <p>{d.eventid}</p>
                                    <p>{d.eventname}</p>
                                    <p>{d.name}</p>
                                    <p>{d.date}</p>
                                    {d.validcheck !== 1 && (
                                        <>
                                            <button onClick={() => upBook(d)}>Accept</button>
                                        </>
                                    )}
                                    {d.validcheck == 1 ? <p className="green">Accepted</p> : <p className="red">Pending</p>}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No bookings available.</p>
                    )
                }
                <Footer/>
            </div>
        </>
    );
};

export default Demo;
