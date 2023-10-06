import { useState } from "react";

function AvailableTimes(){

  const [times, setTimes] = useState(["17:00","18:00","19:00","20:00","21:00","22:00"])

  return times.map(time=><option>{time}</option>)

}

function BookingForm() {

  const [date, setDate] = useState('')
  const [time, setTime] = useState('17:00')
  const [guests, setGuests] = useState(1)
  const [occasion, setOccasion] = useState("")

  return (
    <div className='formWrapper row'>
    
      <form style={{display: "grid", maxWidth: "200px", gap: "20px"}}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={date} onChange={(e)=>setDate(e.target.value)}></input>
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time " value={time} onChange={(e)=>setTime(e.value)}>
            <AvailableTimes />
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e)=>setGuests(e.target.value)}></input>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={(e)=>setOccasion(e.target.value)}>
            <option value="" selected disabled hidden>Occasion</option>
            <option>Birthday</option>
            <option>Engagement</option>
            <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" className='mainButton'></input>
    </form>
    </div>
  );
}

export default BookingForm;
