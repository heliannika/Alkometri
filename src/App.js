import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { isValidInputTimeValue } from '@testing-library/user-event/dist/utils';

function App() {
  const [weight, setWeight] = useState(0)
  const [bottles, setBottles] = useState(0)
  const [time, setTime] = useState(0)
  const [gender, setGender] = useState(0)
  const [alcoinblood, setAlcoinblood] = useState(0)

  const calculate = (e) => {
    e.preventDefault()
    const genders = document.getElementsByName("gender");
    const checkedGender = Array.from(genders).find((radio) => radio.checked);
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - (burning * time);

    const resultforMale = gramsLeft / (weight * 0.7);
    const resultForFem = gramsLeft / (weight * 0.6);

    if (checkedGender.value == "male") {
      setAlcoinblood(resultforMale);
    } else if (checkedGender.value == "female") {
      setAlcoinblood(resultForFem);
    }

    if (resultforMale <= 0) {
      setAlcoinblood(0);
    } else if (resultForFem <= 0) {
      setAlcoinblood(0);
    }

  }

  return (
    <form onSubmit={calculate}>
      <div>
      <h3>Calculating alcohol blood level</h3>
      </div>
      <div>
        <label>Weight</label>
        <input type="number" value={weight} onChange={e => setWeight(e.target.value)}/>
      </div>
      <div>
        <label>Bottles</label>
        <select value={bottles} id="bottles" onChange={e => setBottles(e.target.value)}>
          <option value="1" onSelect={e => setBottles(e.target.value)}>1</option>
          <option value="2" onSelect={e => setBottles(e.target.value)}>2</option>
          <option value="3" onSelect={e => setBottles(e.target.value)}>3</option>
          <option value="4" onSelect={e => setBottles(e.target.value)}>4</option>
          <option value="5" onSelect={e => setBottles(e.target.value)}>5</option>
        </select>
      </div>
      <div>
        <label>Time</label>
        <select value={time} id="time" onChange={e => setTime(e.target.value)}>
          <option value="1" onSelect={e => setTime(e.target.value)}>1</option>
          <option value="2" onSelect={e => setTime(e.target.value)}>2</option>
          <option value="3" onSelect={e => setTime(e.target.value)}>3</option>
          <option value="4" onSelect={e => setTime(e.target.value)}>4</option>
          <option value="5" onSelect={e => setTime(e.target.value)}>5</option>
        </select>
      </div>
      <div>
        <label>Gender</label>
        <input type="radio" value="male" name="gender" onChange={e => setGender(e.target.value)}/><label>Male</label>
        <input type="radio" value="female" name="gender" onChange={e => setGender(e.target.value)}/><label>Female</label>
      </div>
      <div>
        <output>{alcoinblood.toFixed(2)}</output>
      </div>
      <div>
        <button type="button" onClick={calculate}>Calculate</button>
      </div>
    </form>
  );
}

export default App;
