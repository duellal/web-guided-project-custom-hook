import { useState } from "react";

//set up state:
// if there is a current value in localStorage, put it in our initialState
// otherwise, use the default initialState + put that into localStorage

//if we are updating the state:
// add current update value to localStorage

const useLocalStorage = (key, initialValue) => {
   const [value, setValue] = useState(() => {
      if (localStorage.getItem(key)) {
         return JSON.parse(localStorage.getItem(key))
      }

      localStorage.setItem(key, JSON.stringify(initialValue))
   })

   const setStoredValue = (value) => {
      setValue(value)

      localStorage.setItem(key, JSON.stringify(value))
   }

   return ([value, setStoredValue])
}

export default useLocalStorage