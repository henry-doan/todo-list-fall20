import React from 'react';
import Todo from './Todo';

const List = ({ title, todos }) => (
  <div>
    <h2>{title}</h2>
    <ul>
                                       {/* title: t.title */}
      { todos.map( t => <Todo key={t.id} {...t} />)}
    </ul>
  </div>
)

// {
//   return(

//   )
// }
export default List;