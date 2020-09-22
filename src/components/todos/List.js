import React from 'react';

const List = ({ title, todos}) => (
  <div>
    <h2>{title}</h2>
    <ul>
      { todos.map(t => <li key={t.id}>{t.title}</li>)}
    </ul>
  </div>
)

// {
//   return(

//   )
// }
export default List;