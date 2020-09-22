import React, { Component } from 'react';

class App extends Component {
  state = { todos: [
    { id: 1, title: "Learn Rails", complete: true },
    { id: 2, title: "Learn React", complete: false },
    { id: 3, title: "Learn Router", complete: false },
  ]}

  renderTodos = () => {
    const { todos } = this.state
    return todos.map( todo => {
      return ( 
        <li key={todo.id}>{todo.title}</li>
      )
    })
  }

  render() {
    return(
      <div>
        <ul>
          { this.renderTodos() }
        </ul>
      </div>
    )
  }
}

export default App;
