/* eslint-disable react/prop-types */
import { useState } from "react";

const Statistics = (props) => {
  if (props.values.allClicks > 0) {
    return (
      <div>
        <StatisticLine title="All clicks" value={props.values.allClicks} />

        <StatisticLine title="Average" value={props.values.average} />

        <StatisticLine
          title="Positive"
          value={props.values.good / props.values.allClicks}
        />
      </div>
    );
  } else {
    return (
      <div>
        <tr>No feedback given</tr>
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

const points = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0 };

const copy = { ...points };

const App = () => {
  //save each button clicks in its own state
  const [currentVotes, setcurrentVotes] = useState(0);
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allClicks, setAllClicks] = useState(0);
  const [average, setAverage] = useState(0);
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [anecselected, setAnecselected] = useState(0);

  const handlePointsClick = () => {
    copy[anecselected] += 1;
    setcurrentVotes(copy[anecselected]);
    console.log(copy);
    const mostVotes = Math.max(...Object.values(copy));

    console.log(mostVotes);
  };

  const keyWithMoreVotes = Object.keys(copy).reduce((a, b) => copy[a] > copy[b] ? a : b);
  console.log (keyWithMoreVotes)

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

  const handleAnecdotesClick = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    setAnecselected(randomNumber);
    setcurrentVotes(copy[randomNumber]);
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
            <Button
              name="Neutral"
              handle={handleNeutralClick}
              value={neutral}
            />
          </tr>
          <tr>
            <Button name="Bad" handle={handleBadClick} value={bad} />
          </tr>

          <tr>
            <th>
              <h1>Statistics</h1>
            </th>
          </tr>
          <tr>
            <Statistics values={values} />
          </tr>

          <tr>
            <th>
              <h1>Anecdote of the day</h1>
            </th>
          </tr>
          <tr> {anecdotes[anecselected]}</tr>
          <tr>has {currentVotes} votes</tr>
          <tr>
            <Button name="Vote" handle={handlePointsClick} />
          </tr>
          <tr>
            <Button name="Next Anecdote" handle={handleAnecdotesClick} />
          </tr>
          <th>
            <h1>Anecdote with most votes</h1>
          </th>
          <tr>{keyWithMoreVotes[anecdotes]}</tr>
        </table>
      </div>
    </div>
  );
};

export default App;
