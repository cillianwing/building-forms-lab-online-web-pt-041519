// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

	state = {
		name: ''
	}

	handleOnChange = event => {
		this.setState({
			name: event.target.value
		})
	}

	handleOnSubmit = event => {
		event.preventDefault()
		this.props.addBand(this.state)
		this.setState({
			name: ''
		})
	}

  render() {
    return(
      <div>
        <form onSubmit={event => this.handleOnSubmit(event)} >
        	<label>Name: </label>
        	<input onChange={this.handleOnChange} name="name" value={this.state.value} type="text" />
        	<input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
