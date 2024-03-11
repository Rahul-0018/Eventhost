import React, { useEffect, useState } from 'react';
import axios from "axios";
import './AdminMain.css';
import './UserMain.css';
import Navbar from './navbar';
import Footer from './Footer';
const UserMain = () => {
  const [activeTab, setActiveTab] = useState('ShowEvents');
  const [data , setData] = useState([]);
    const [datas , setDatas] = useState([]);
    const [eventname , setEventName] = useState("");
    const [organiser , setOrganiser] = useState("");
    const [location , setLocation] = useState("");
    const [date , setDate] = useState("");
    const [available , setAvilable] = useState("");
    const [id , setEventId] = useState("");
    const [name , setName] = useState("");
    const [nop , setNop] = useState("");
    const [eventid , setEventid] = useState("");


    let names = "";
  let userToken = "";

  try {
    const userInfo = JSON.parse(localStorage.getItem('user-info'));
    userToken = userInfo.emailc;
  
    names = userToken.split('@')[0];

  } catch (error) {
    console.error('Error parsing userInfo:', error);
  }
  useEffect(() => {
    axios.get('http://localhost:8429/showEvents')
        .then(res => {
            setData(res.data.data);
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

async function deleteBooking(eventid){
    let result = await fetch("http://localhost:8429/deleteBooking/"+ eventid ,{
        method: 'DELETE'
    });
    result = await result.json();
    window.location.reload();
}
  return (
    <>
    <Navbar/>
    <div>
    <h3 className='adds'>Welcome {names} !!!</h3>
      <div className="tab">
        <button className={activeTab === 'ShowEvents' ? 'tablinks active' : 'tablinks'} onClick={() => openCity('ShowEvents')}>Events</button>
        <button className={activeTab === 'addevents' ? 'tablinks active' : 'tablinks'} onClick={() => openCity('addevents')}>Add Booking</button>
        <button className={activeTab === 'updateevents' ? 'tablinks active' : 'tablinks'} onClick={() => openCity('updateevents')}>Update Booking</button>
        <button className={activeTab === 'showbooking' ? 'tablinks active' : 'tablinks'} onClick={() => openCity('showbooking')}>Show Booking</button>
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
                        <h4>Unique Id : {d.eventid}
                        <button onClick={() => copyToClipboard(d.eventid)}>Copy</button>
                        </h4>
                        <h4>organiser : {d.organiser}</h4>
                        <h4>Location : {d.location}</h4>
                        <h4>Date : {d.date}</h4>
                        <h4>Price</h4>
                        <h4>Avilable Seats : {d.available}</h4>
                </div>
                </div>
                </div>
            ))
        }
      </div>
      <div id="" className={activeTab === 'addevents' ? 'tabcontent' : 'tabcontent hidden'}>
      <div className="event-form">
      <h3>Add Bookings</h3>
        <input type="text" placeholder="eventid" onChange={(e)=>setEventid(e.target.value)}></input><br/>
        <input type="text" placeholder="name" onChange={(e)=>setName(e.target.value)}></input><br/>
        <input type="number" placeholder="nop" onChange={(e)=>setNop(e.target.value)}></input><br/>
        <button onClick={addBooking}>Add Booking</button>
        </div>
      </div>
      <div id="" className={activeTab === 'updateevents' ? 'tabcontent' : 'tabcontent hidden'}>
      <div className='event-form'>
      <h3>update Bookings</h3>
      <input type="text" placeholder="Eventid" onChange={(e)=>setEventId(e.target.value)}></input><br/>
                <input type="text" placeholder="name" onChange={(e)=>setName(e.target.value)}></input><br/>
                <input type="number" placeholder="nop" onChange={(e)=>setNop(e.target.value)}></input><br/>
        <button onClick={updateBooking}>update Booking</button>
      </div>
      </div>
      <div id="" className={activeTab === 'showbooking' ? 'tabcontent' : 'tabcontent hidden'}>
      <h3>Show Bookings</h3>
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
                        {d.validcheck == 1 ? <p className="greeen">Accepted</p> : <p className="reed">In progress...</p>}
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

export default UserMain;
