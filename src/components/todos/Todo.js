import React from 'react';

const Todo = ({ id, title, complete }) => (
  <li
    style={ complete ? { ...styles.todo, ...styles.complete } : styles.todo }
  >
    { title }
  </li>
)

const styles = {
  todo: { cursor: 'pointer' },
  complete: { color: 'grey', textDecoration: 'line-through' },
};

export default Todo;