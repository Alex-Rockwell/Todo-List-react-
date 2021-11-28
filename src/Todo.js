import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
      text: this.props.text
    }
    this.handleRemove = this.handleRemove.bind(this)
    this.toggleForm = this.toggleForm.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
  }
  handleRemove() {
    this.props.removeItem(this.props.id)
  }
  toggleForm() {
    this.setState({isEditing: !this.state.isEditing})
  }
  handleUpdate(evt) {
    evt.preventDefault()
    this.props.updateItem(this.props.id, this.state.text)
    this.toggleForm()
  }
  handleChange(evt) {
    this.setState({[evt.target.name]: evt.target.value})
  }
  handleToggle(evt) {
    this.props.toggleComplition(this.props.id)
  }
  render() {
    let result
    if (this.state.isEditing) {
      result = <div className="Todo">
        <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
          <input type="text" name="text" value={this.state.text} onChange={this.handleChange}/>
          <button>Save</button>
        </form>
      </div>
    } else {
      result = <div className="Todo" >
        <li 
          className={`Todo-task ${(this.props.complited) ? 'completed' : ''}`} 
          onClick={this.handleToggle}
        >
            {this.props.text} 
        </li>
        <div className="Todo-buttons">
          <button onClick={this.toggleForm}><i className="fas fa-pen" /></button>
          <button onClick={this.handleRemove}><i className="fas fa-trash" /></button>
        </div>
      </div>
    }
    return result
  }
}

export default Todo