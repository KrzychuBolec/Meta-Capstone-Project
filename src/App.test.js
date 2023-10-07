import { fireEvent, render, screen } from '@testing-library/react';
import { act } from '@testing-library/react';
import { useTime } from './Reducer';
import { useEffect } from 'react';


import BookingForm from './BookingForm';


const testTimes= ["17:00","18:00"]

test('BookingForm existence', () => {
  const mockSubmit = jest.fn()
  const mockFunc = jest.fn()
  render(<BookingForm availableTimes={testTimes} submitForm={mockSubmit} changeHandler={mockFunc} />);
  const timeElementLabel = screen.getByText(/Choose time/i);
  expect(timeElementLabel).toBeInTheDocument();
});

test("Form submittance",async()=>{

  const mockSubmit = jest.fn()
  const mockFunc = jest.fn()

  const {getByLabelText, getByText, getByRole, container} = render(<BookingForm availableTimes={testTimes} submitForm={mockSubmit} changeHandler={mockFunc}/>);

  fireEvent.change(getByLabelText("Choose date"),{target:{value:"2009-12-12"}})

  fireEvent.change(getByLabelText("Choose time"),{target:{value:"18:00"}})

  fireEvent.change(getByLabelText("Number of guests"),{target:{value:2}})

  fireEvent.change(getByLabelText("Occasion"),{target:{value:"Birthday"}})

  // fireEvent.click(getByRole("button",{name:"Make Your reservation"}));

  const form = container.querySelector('form');
  await act(async () => {
    fireEvent.submit(form);
});
    

  expect(mockSubmit).toHaveBeenCalledWith({
      date:"2009-12-12",
      time:"18:00",
      guests:2,
      occasion:"Birthday"
  })

})

test("Initialize times and dispatch",async()=>{

  let result = []
  function Component(){

      const [initialValues, dispatch] = useTime()

      useEffect(()=>{
        dispatch({
          type:"set",
          value:{
            date:"2009-12-12"
          }
        })
        
      },[])

      result = initialValues

  }
  render(<Component />)
  expect(result.length > 0).toBe(true)

})

test("Checking validation presence",async ()=>{

  const mockSubmit = jest.fn()
  const mockFunc = jest.fn()

  const {getByLabelText, queryByText, getByRole, container} = render(<BookingForm availableTimes={testTimes} submitForm={mockSubmit} changeHandler={mockFunc}/>);

  await act(async ()=>{
    fireEvent.change(getByLabelText("Choose date"),{target:{value:"rrrr-12-12"}})

  })

  await act(async ()=>{

    fireEvent.change(getByLabelText("Choose time"),{target:{value:"18:00"}})
  })

  await act(async ()=>{
    fireEvent.change(getByLabelText("Number of guests"),{target:{value:20}})

  })

  await act(async ()=>{

    fireEvent.change(getByLabelText("Occasion"),{target:{value:"Birthday"}})
  })


  expect(queryByText("Can't book for more than 10 people")).toBeInTheDocument()
  expect(queryByText("Required")).toBeInTheDocument()
  expect(queryByText("Too short")).not.toBeInTheDocument()
  
})


