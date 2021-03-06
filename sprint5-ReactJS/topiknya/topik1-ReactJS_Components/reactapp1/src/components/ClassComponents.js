import React from 'react';

class ComponentWithClass extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 0,
      todo: []
    };
  }

  addNum() {
    this.setState(
      {number: this.state.number+1}
    )
  }

  subtractNum() {
    this.setState(
      {number: this.state.number-1}
    )
  }

  addToDo(param) {
    // this.state.todo.push(param)
    this.setState(
      // {todo: this.state.todo}
      (state) => {
        return {todo: [...state.todo, param]};
      }
    )
  }

  subtractToDo(index) {
    this.setState(
      (state) => {
        var newTodo = [...state.todo];
        newTodo.splice(index, 1);
        return {todo: newTodo};
      }
    )
  }

  render() {
    return (
      <div>
        <h1>Ini dari dalam Class Component</h1>
        <p>{this.state.number}</p>
        {this.state.todo.map((e, i) => <li>{e}<button onClick={() => {
          this.subtractToDo(i)
        }}>Delete</button></li>)}
        <button onClick={() => {
          this.addToDo("Test")
        }}>Add To Do</button>
        <button onClick={() => {
          this.addNum()
        }}>Add!</button>
        <button onClick={() => {
          this.subtractNum()
        }}>Subtract!</button>
      </div>
    );
  };
}

export default ComponentWithClass;
