import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const[people ,setPeople] = useState(data)
  return (
  <maim>
    <section className="container">
      <h1> {people.length} birthdays today</h1>
      <List people={people}/>
      <button onClick ={()=>setPeople([])}>
         Clear All</button>
    </section>

  </maim>
  );
}

export default App;
