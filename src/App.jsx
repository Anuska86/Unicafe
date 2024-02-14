/* eslint-disable react/prop-types */
import { useState } from "react";

const Statistics = (props) => {
  if (props.values.allClicks > 0) {
    return (
      <div>
        <table>
          <tr>
            <h1>Statistics</h1>
          </tr>
          <tr>
            <StatisticLine title="All clicks" value={props.values.allClicks} />
          </tr>
          <tr>
            <StatisticLine title="Average" value={props.values.average} />
          </tr>
          <tr>
            <StatisticLine
              title="Positive"
              value={props.values.good / props.values.allClicks}
            />
          </tr>
        </table>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Statistics</h1>
        <span>No feedback given</span>
      </div>
    );
  }
};

const Button = (props) => {
  return (
    <div>
      <button onClick={props.handle}>{props.name}</button>
      {props.value}
    </div>
  );
};

const StatisticLine = (props) => {
  let formatValue = props.value;
  if (props.title == "Positive") {
    formatValue += "%";
  }
  return (
    <div style={{ color: "green" }}>
      {props.title}: {formatValue}
    </div>
  );
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
    good: good,
  };

  return (
    <div>
      <div>
        <table>
          <tr>
            <th>
              <h1>Feedback</h1>
            </th>
          </tr>

          <tr>
            <Button name="Good" handle={handleGoodClick} value={good} />
          </tr>
          <tr>
            <Button name="Neutral"handle={handleNeutralClick}value={neutral}/>
        </tr>
          <tr>
            <Button name="Bad" handle={handleBadClick} value={bad} />
          </tr>
        </table>
      </div>
      <Statistics values={values} />
    </div>
  );
};

export default App;
