import useLocalStorage from './useLocalStorage';

//Create a custom hook function
//Add in stateful logic
//Return things used within the component from the hook
//Connect the hook to the component
const useForm = (initialValues) => {
   const [values, setValues] = useLocalStorage('form', initialValues);

   const handleChanges = e => {
      setValues({
         ...values,
         [e.target.name]: e.target.value
      });
   };

   const clearForm = e => {
      e.preventDefault();
      setValues(initialValues);
   };

   return ([handleChanges, clearForm, values])
}

export default useForm