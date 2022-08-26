import { useState } from 'react'

//Create a custom hook function
//Add in stateful logic
//Return things used within the component from the hook
//Connect the hook to the component
const useForm = (initialValues) => {
   const [values, setValues] = useState(initialValues);

   const handleChanges = e => {
      setValues(e.target.value);
   };

   const clearForm = e => {
      e.preventDefault();
      setValues(initialValues);
   };

   return ([handleChanges, clearForm, values])
}

export default useForm