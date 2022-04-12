import { useState } from 'react'; 
import Email from './Email';
import Input from './Input';

const BasicForm = (props) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const handleFirstNameChange = (event) => setFirstName(event.target.value); 
  const handleLastNameChange = (event) => setLastName(event.target.value); 
  const handleEmailChange = (event) => setEmail(event.target.value); 

  const submit = (event) => {
    event.preventDefault()
    console.log(firstName, lastName, email)
  }

  return (
    <form onSubmit={submit}>
      <div className='control-group'>
        <Input label='First Name' id='firstName' value={firstName} handler={handleFirstNameChange}/>
        <Input label='Last Name' id='last' value={lastName} handler={handleLastNameChange}/>
      </div>
      <Email label='E-mail' id='email' value={email} handler={handleFirstNameChange}></Email>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
