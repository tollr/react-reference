import { useState} from 'react';
import Output from './Output';

const Greeting = () => {
  const [changeText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  }

  return (
    <div>
      <h2>Hello world!</h2>
      {!changeText && <Output>it's good to see you</Output>}
      {changeText && <Output>Changed!</Output>}
      <button onClick={changeTextHandler}></button>
    </div>
  );
};

export default Greeting;
