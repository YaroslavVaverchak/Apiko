import React from 'react';
import './App.css';


const formatUserName = (firstName, lastName) => {
  return `Welcome to website, ${firstName} ${lastName}.`;
};
function App() {
  const user1 = { firstName: 'Sara', lastName: 'Connor' };
  const user2 = { firstName: 'John', lastName: 'Doe' };
  return (
    <div className="greeting">
      <h1 style={{ fontWeight: 'bold' }}>This test text for homework page</h1>
      <br />
      <h2 className="greeting">{formatUserName(user1.firstName, user1.lastName)}</h2>
      <br />
      <h3>{formatUserName(user2.firstName, user2.lastName)}</h3>
      <p>Here we have the list:</p>
      <ul>
        <li>Just text here</li>
        <li>
          <span>Here we have text and link!</span>
          <a href="https://uk.reactjs.org/docs" target="_blank" rel="noopener noreferrer">
            It is link to our docs
          </a>
        </li>
        <li>
          <span>And the picture!!!</span>
          <img
            src="https://www.rspb.org.uk/globalassets/images/birds-and-wildlife/non-bird-species-illustrations/fox_1200x675.jpg"
            alt="Fox"
            width="300"
          />
        </li>
      </ul>
    </div>
  );

}

export default App;