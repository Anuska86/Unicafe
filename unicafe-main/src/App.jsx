import { useState } from "react";

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
      <div>All clicks: {allClicks}</div>
      <div>Average: {average}</div>
      <div>Positive: {good/allClicks}%</div>
    </div>
  );
};

export default App;
