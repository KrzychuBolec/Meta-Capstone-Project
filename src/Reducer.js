import { useReducer } from "react"
import { fetchAPI, submitAPI } from "./api"

export const useTime = () =>{

    const today = new Date();
    const formattedDate = today.toISOString().slice(0,10)

    const fetchTimes = (date=formattedDate) =>{

        const availableTimes = fetchAPI(date)

        return availableTimes
    }

    const [availableTimes, dispatch] = useReducer(reducerTime,fetchTimes())
    
    function reducerTime(state,action){
    
        switch(action.type){
            case "set":
                return fetchAPI(action.value.date)
        }
    }

    return [availableTimes,dispatch]

}





