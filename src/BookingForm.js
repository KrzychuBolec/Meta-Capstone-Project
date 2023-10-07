import { useFormik } from "formik";
import { useEffect } from "react";
import * as Yup from 'yup';
import { ErrorMessage } from "./ErrorMessage";


function BookingForm({availableTimes, changeHandler, submitForm}) {


  const formik = useFormik({
    initialValues:{

      date:"",
      time:"17:00",
      guests:1,
      occasion:""
    },

    onSubmit:(values)=>{
      submitForm(values)
    },

    validationSchema: Yup.object().shape({
      date:Yup.date().required("Required"),
      time:Yup.string().required("Required"),
      guests:Yup.number().min(1, "Can't book for less than 1 person").max(10,"Can't book for more than 10 people").required("Required"),
      occasion:Yup.string().min(2,"Too short").required("Required")
    })
  })

  useEffect(()=>{

    changeHandler({
      type:"set",
      value:{
        date:formik.values.date
      }
    })

  },[formik.values.date])

  return (
    <div className='formWrapper row'>
      <form style={{display: "grid", maxWidth: "200px", gap: "20px"}} onSubmit={formik.handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" name="date" value={formik.values.date} onChange={formik.handleChange}></input>
        {formik.errors.date && <ErrorMessage>{formik.errors.date}</ErrorMessage>}
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" name="time" value={formik.values.time} onChange={formik.handleChange}>
          {availableTimes.map(time=><option key={time}>{time}</option>)}
        </select>
        {formik.errors.time && <ErrorMessage>{formik.errors.time}</ErrorMessage>}
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" name="guests" value={formik.values.guests} onChange={formik.handleChange}></input>
        {formik.errors.guests && <ErrorMessage>{formik.errors.guests}</ErrorMessage>}
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" name="occasion" value={formik.values.occasion} onChange={formik.handleChange}>
            <option value="" disabled hidden>Occasion</option>
            <option>Birthday</option>
            <option>Engagement</option>
            <option>Anniversary</option>
        </select>
        {formik.errors.occasion && <ErrorMessage>{formik.errors.occasion}</ErrorMessage>}
        <input type="submit" name="submit" value="Make Your reservation" className='mainButton' aria-label="On Click"></input>
        </form>
    </div>
  );
}

export default BookingForm;
