import React from 'react';

const Todo = ({ id, title, complete, updateComplete }) => (
  <li
    style={ complete ? { ...styles.todo, ...styles.complete } : styles.todo }
    onClick={() => updateComplete(id)}
  >
    { title }
  </li>
)

const styles = {
  todo: { cursor: 'pointer' },
  complete: { color: 'grey', textDecoration: 'line-through' },
};

export default Todo;