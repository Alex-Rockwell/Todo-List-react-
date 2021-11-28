import React, { Component } from 'react'
import './NewTodoForm.css'

class NewTodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(evt) {
    this.setState({[evt.target.name]: evt.target.value})
  }
  handleSubmit(evt) {
    evt.preventDefault()
    this.props.addItem(this.state.text)
    this.setState({text: ''})
  }
  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <label htmlFor="task">New Task</label>
        <input 
          type="text"
          placeholder="New Task"
          id="task"
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
        /> 
        <button>Add Item</button>
      </form>
    )
  }
}

export default NewTodoForm