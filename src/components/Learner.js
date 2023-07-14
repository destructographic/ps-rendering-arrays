// src/components/Learner.js

import Score from './Score';

function Learner({ learner }) {
  return (
    <div className="Learner">
      <h2>{learner.name}</h2>
      <p>{learner.bio}</p>
      {learner.scores.map((score, index) => (
        <Score key={index} score={score} />
      ))}
    </div>
  );
}

export default Learner;
