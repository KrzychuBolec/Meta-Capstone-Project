import { useState } from "react";
import { useFormik } from "formik";


function BookingForm({availableTimes}) {

  const formik = useFormik({
    initialValues:{

      date:"",
      time:"17:00",
      guests:1,
      occasion:""
    },
    onSubmit:()=>{
      console.log("sent")
    }
  })

  return (
    <div className='formWrapper row'>
      <form style={{display: "grid", maxWidth: "200px", gap: "20px"}} onSubmit={formik.handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" name="date" value={formik.values.date} onChange={formik.handleChange}></input>
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time " name="time" value={formik.values.time} onChange={formik.handleChange}>
          {availableTimes.map(time=><option>{time}</option>)}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" name="guests" value={formik.values.guests} onChange={formik.handleChange}></input>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" name="occasion" value={formik.values.occasion} onChange={formik.handleChange}>
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