import { useReducer, useState } from 'react'; 
import Email from './Email';
import Input from './Input';

const defaultFormState = {
    firstName: 'default',
    lastName: 'default',
    email: 'default@default.com'
}

const formReducer = (state, action) => {
    return {
        ...state,
        ...action.payload
    }
};

const BasicForm = (props) => {
    const [formState, dispatchFormAction] = useReducer(
        formReducer,
        defaultFormState
    );

  const submit = (event) => {
    event.preventDefault()
    console.log(formState)
  }

  const updateForm = (event, name) => {
    const value = event.target.value

    console.log(name, value)
    dispatchFormAction({ type: 'UPDATE', payload: {[name]: value}})
  }

  return (
    <form onSubmit={submit}>
      <div className='control-group'>
        <Input label='First Name' id='firstName' value={formState.firstName} handler={updateForm}/>
        <Input label='Last Name' id='lastName' value={formState.lastName} handler={updateForm}/>
      </div>
      <Email label='E-mail' id='email' value={formState.email} handler={updateForm}></Email>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
