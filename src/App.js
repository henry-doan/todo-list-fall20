import React, { Component } from 'react';
import List from './components/todos/List';
import TodoForm from './components/todos/TodoForm';
import Footer from './components/todos/Footer';

class App extends Component {
  state = { todos: [
    { id: 1, title: "Learn Rails", complete: true },
    { id: 2, title: "Learn React", complete: false },
    { id: 3, title: "Learn Router", complete: false },
  ],
    filter: 'All'
  }

  setFilter = (filter) => {
    this.setState({ filter })
  }

  visibleItems = () => {
    const { todos, filter } = this.state
    switch(filter) {
      case 'Active':
        return todos.filter( t => !t.complete)
      case 'Complete':
        return todos.filter( t => t.complete)
      default: 
        return todos
    }
  }
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

  updateComplete = (id) => {
    const { todos } = this.state 
    this.setState({
      todos: todos.map( t => {
        if ( t.id === id ) {
          return { ...t, complete: !t.complete }
        }
        return t
      })
    })
  }

  render() {
    const { filter } = this.state
    return(
      <div>
        <ul>
          <Footer filter={filter} setFilter={this.setFilter} />
          <TodoForm addTodo={this.addTodo} />
          {/* { this.renderTodos() } */}
          <List 
            todos={this.visibleItems()} 
            title='Learning List' 
            updateComplete={this.updateComplete} 
          />
        </ul>
      </div>
    )
  }
}

export default App;
