Initial Release 2013
  By Facebook 

Tools
  node 
  yarn / npm 

  HTML JS CSS, WEBPACK, BABEL 
  create-react-app
    Boiler plate

    create-react-app my-app
    npm init react-app my-app
    yarn create react-app my-app

  Google Chrome

  React Dev Tools




ReactJS is a library, NPM package
  "Just JavaScript" 



React provides a declarative API complete with 
  state control and 
  lifecycle methods to control the render flow.



What about other solutions:
  Angular
  Ember
  View
  etc...
  




Key Principles 
  Declarative.  
  Composability
  1 Way data flow (props)
  Virtual DOM - in memory cache, computes differences and render on a copy of the DOM 
    - reconciliation 
    - selective rendering for components 
  State - Storage 
  Props - Properties passed down from parent child 
  JSX - JavaScript XML, JS and HTML  

    // React.createelement.ComponentReact.createelement.Component
    // React.createelement.Component(div counter counter div)
  Components









Logical Component ( Stateful component )
  do logic 
  state 
  lifecycle Methods
  class 


Presentational Component ( stateless component )
  displaying onto the screen  
  const



HOC 
  Higher ordered component

State - storage { users: [], firstName: '' }
  JS Object we can store properties in
  Component Storage
  When a value changes in state, render is called


Props 
  Properties passed down parent to child
  One way 
  Read only 

           App color
            \             \
                        Counter
             Counter color



  /*                 Todo List Structure

                          Index
                            |
                          App (todos)(addTodo)     
                           /  \                   \
           (addTodo)TodoForm   List (todos)      Footer
                            |       |     |
                          Todo   Todo   Todo

  */

//  Index
//  |
// App      
//     /  \         \
// Home   List    Footer
//   |
//   Logo  info