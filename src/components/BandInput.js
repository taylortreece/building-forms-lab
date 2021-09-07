import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandInput extends Component {

  constructor() {
    super();
    this.state = {
      name: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(event.target.value)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addBand({
      type: "ADD_BAND", 
      payload: this.state
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add Band:</label>
          <input type="text" name="name" onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default connect()(BandInput)
