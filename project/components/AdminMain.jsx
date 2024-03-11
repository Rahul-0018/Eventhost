import React, { useEffect, useState } from 'react';
import axios from "axios";
import './AdminMain.css';
import Navbar from './navbar';
import Footer from './Footer';
const AdminMain = () => {
  const [activeTab, setActiveTab] = useState('ShowEvents');
  const [data , setData] = useState([]);
    const [datas , setDatas] = useState([]);
    const [eventname , setEventName] = useState("");
    const [organiser , setOrganiser] = useState("");
    const [location , setLocation] = useState("");
    const [date , setDate] = useState("");
    const [available , setAvilable] = useState("");
    const [id , setEventId] = useState("");

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
  useEffect(() => {
    axios.get('http://localhost:8429/showEvents')
        .then(res => {
            setData(res.data.data);
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


useEffect(() => {
    axios.get('http://localhost:8429/showBook')
        .then(res => {
            setDatas(res.data.data);
            console.log(res.data);
        })
        .catch(err => console.log(err));
}, []);


  useEffect(() => {
    openCity('ShowEvents');
  }, []);

  function openCity(cityName) {
    setActiveTab(cityName);
  }


  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
}

  return (
    <>
    <Navbar/>
    <div>
    <h3 className='adds'>Admin Dashboard</h3>
      <div className="tab">
        <button className={activeTab === 'ShowEvents' ? 'tablinks active' : 'tablinks'} onClick={() => openCity('ShowEvents')}>Events</button>
        <button className={activeTab === 'addevents' ? 'tablinks active' : 'tablinks'} onClick={() => openCity('addevents')}>Add Events</button>
        <button className={activeTab === 'updateevents' ? 'tablinks active' : 'tablinks'} onClick={() => openCity('updateevents')}>Update Events</button>
        <button className={activeTab === 'showbooking' ? 'tablinks active' : 'tablinks'} onClick={() => openCity('showbooking')}>View Bookings</button>
      </div>
      <div id="" className={activeTab === 'ShowEvents' ? 'tabcontent' : 'tabcontent hidden'}>
        <h3></h3>
        {
            data.map((d) => (
                <div className='fetchAdmin'>
                <div className="fetch" key={d.eventid}>
                <div className='eveimg'></div>
                <div className='evecontent'> 
                        <p>{d.id}</p>   
                        <h4>Event Name : {d.eventname}</h4>
                        <h4>Description</h4>
                        <h4>Unique Id : {d.eventid}</h4>
                        <h4>organiser : {d.organiser}</h4>
                        <h4>Location : {d.location}</h4>
                        <h4>Date : {d.date}</h4>
                        <h4>Price</h4>
                        <h4>Avilable Seats : {d.available}</h4>
                        <button onClick={()=>deleteproduct(d.id)} className='evedel'>Delete Event</button>
                </div>
                </div>
                </div>
            ))
        }
      </div>
      <div id="" className={activeTab === 'addevents' ? 'tabcontent' : 'tabcontent hidden'}>
        <div className="event-form">
            <h3>Add Event</h3>
            <input type="text" placeholder="eventname" onChange={(e)=>setEventName(e.target.value)}></input><br/>
            <input type="text" placeholder="organiser" onChange={(e)=>setOrganiser(e.target.value)}></input><br/>
            <input type="text" placeholder="location" onChange={(e)=>setLocation(e.target.value)}></input><br/>
            <input type="date" placeholder="date" onChange={(e)=>setDate(e.target.value)}></input><br/>
            <input type="number" placeholder="Avilable" onChange={(e)=>setAvilable(e.target.value)}></input><br/>
            <button onClick={addproduct}>Add Event</button>
        </div>
      </div>
      <div id="" className={activeTab === 'updateevents' ? 'tabcontent' : 'tabcontent hidden'}>
      <div className='event-form'>
      <h3>update Event</h3>
      <input type="number" placeholder="eventid" onChange={(e)=>setEventId(e.target.value)}></input><br/>
      <input type="text" placeholder="eventname" onChange={(e)=>setEventName(e.target.value)}></input><br/>
      <input type="text" placeholder="organiser" onChange={(e)=>setOrganiser(e.target.value)}></input><br/>
      <input type="text" placeholder="location" onChange={(e)=>setLocation(e.target.value)}></input><br/>
      <input type="date" placeholder="date" onChange={(e)=>setDate(e.target.value)}></input><br/>
      <input type="number" placeholder="Avilable" onChange={(e)=>setAvilable(e.target.value)}></input><br/>
      <button onClick={updateproduct}>update Event</button>
      </div>
      </div>
      <div id="" className={activeTab === 'showbooking' ? 'tabcontent' : 'tabcontent hidden'}>
      <h3></h3>
                {
                    datas && datas.length > 0 ? (
                        datas.map((d) => (
                            <div className='fetchbookbox'>  
                            <div className="fetchbook" key={d.id}>
                            <div className='details'>
                                    <p>Unique Id : {d.eventid}</p>
                                    <p>Event Name :{d.eventname}</p>
                                    <p>Name :{d.name}</p>
                                    <p>Booked Date :{d.date}</p>
                            </div>
                                    {d.validcheck !== 1 && (
                                        <>
                                            <button className='fetchbut' onClick={() => upBook(d)}>Accept</button>
                                        </>
                                    )}
                                    {d.validcheck == 1 ? <p className="greeen">Accepted</p> : <p className="reed">Pending</p>}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No bookings available.</p>
                    )
                }
      </div>
    </div>
    </>
  );
};

export default AdminMain;
