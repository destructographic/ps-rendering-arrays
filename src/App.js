// App.js

import React, { useState } from 'react';
import './App.css';
import learnersData from './learnersData';
import Learner from './components/Learner';


function App() {
  const [learners, setLearners] = useState(learnersData);

  return (
    <div className="App">
      {learners.map((learner, index) => (
        <Learner key={index} learner={learner} />
      ))}
    </div>
  );
}

export default App;
