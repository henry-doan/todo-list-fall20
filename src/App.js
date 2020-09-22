import React, { Component } from 'react';
import List from './components/todos/List';
import TodoForm from './components/todos/TodoForm';

class App extends Component {
  state = { todos: [
    { id: 1, title: "Learn Rails", complete: true },
    { id: 2, title: "Learn React", complete: false },
    { id: 3, title: "Learn Router", complete: false },
  ]}

  // renderTodos = () => {
  //   const { todos } = this.state
  //   return todos.map( todo => {
  //     return ( 
  //       <li key={todo.id}>{todo.title}</li>
  //     )
  //   })
  // }

  getUniqId = () => {
    //NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
          //  { title: 'test', complete: false}
  addTodo = (incomingTodo) => {
    const { todos } = this.state
    const newTodo = { id: this.getUniqId(), ...incomingTodo }
    // const newTodo = { id: this.getUniqId(), title: incomingTodo.title, complete: incomingTodo.complete }
    this.setState({ todos: [ ...todos, newTodo ]})
  }

  render() {
    const { todos } = this.state
    return(
      <div>
        <ul>
          <TodoForm addTodo={this.addTodo} />
          {/* { this.renderTodos() } */}
          <List todos={todos} title='Learning List'/>
        </ul>
      </div>
    )
  }
}

export default App;
