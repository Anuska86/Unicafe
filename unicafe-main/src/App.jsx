/* eslint-disable react/prop-types */
import { useState } from "react";

const Statistics = (props) => {
  console.log(props)
  if (props.values.allClicks>0) {
  return (
    <div>
      <h1>Statistics</h1>
      <div>All clicks: {props.values.allClicks}</div>
      <div>Average: {props.values.average}</div>
      <div>Positive: {props.values.good / props.values.allClicks}%</div>
    </div>
  );
  }else{
    return (
      <div>
        <h1>Statistics</h1>
        <span>No feedback given</span>
      </div>
    );
  }
};

const App = () => {
  //save each button clicks in its own state

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allClicks, setAllClicks] = useState(0);
  const [average, setAverage] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
    setAllClicks(allClicks + 1);
    setAverage(average + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    setAllClicks(allClicks + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
    setAllClicks(allClicks + 1);
    setAverage(average - 1);
  };

  const values = {
    allClicks: allClicks,
    average: average,
    good: good
  };

  return (
    <div>
      <div>
        <h1>Feedback</h1>
        <button onClick={handleGoodClick}>Good</button>
        {good}
        <button onClick={handleNeutralClick}>Neutral</button>
        {neutral}
        <button onClick={handleBadClick}>Bad</button>
        {bad}
      </div>
      <Statistics values={values}/>
    </div>
  );
};

export default App;
