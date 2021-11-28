import React, { Component } from 'react'
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'
import { v4 as uuidv4 } from 'uuid'
import './TodoList.css'
// {text: 'item1', id: uuidv4(), complited: false}, {text: 'item2', id: uuidv4(), complited: false}

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [{text: 'item1', id: uuidv4(), complited: false}, {text: 'item2', id: uuidv4(), complited: false}]
    }
    this.addItem = this.addItem.bind(this)
    this.removeItem = this.removeItem.bind(this)
    this.updateItem = this.updateItem.bind(this)
    this.toggleComplition = this.toggleComplition.bind(this)
  }
  addItem(inpText) {
    let newItem = {text: inpText, id: uuidv4(), complited: false}
    this.setState(st => {
      return {list: [...st.list, newItem]}
    })
  }
  removeItem(id) {
    this.setState(st => {
      return {list: st.list.filter(el => el.id !== id)}
    })
  }
  updateItem(id, updatedText) {
    const updatedList = this.state.list.map(item => {
      if (item.id === id) {
        return {...item, text: updatedText}
      }
      return item
    })
    this.setState({list: updatedList})
  }
  toggleComplition(id) {
    const updatedList = this.state.list.map(item => {
      if (item.id === id) {
        return {...item, complited: !item.complited}
      }
      return item
    })
    this.setState({list: updatedList})
  }
  render() {
    const items = this.state.list.map(item => <Todo 
            text={item.text}
            key={item.id}
            id={item.id}
            removeItem={this.removeItem}
            updateItem={this.updateItem}
            complited={item.complited}
            toggleComplition={this.toggleComplition}            
          />)
    return (
      <div className="TodoList">
        <h1>Todo List! <span>A Simple React Todo List App</span></h1>
        <ul>
          {items}
        </ul>
        <NewTodoForm 
          addItem={this.addItem}
        />
      </div>
    )
  }
}

export default TodoList