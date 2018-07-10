import React, { Component } from 'react'
import './Content.css'
import '../../shared.css'

class Input extends Component{
    constructor(props) {
        super(props)
        this.state = {value: ''}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()
        let guess = this.state.value.ignoreCase ===
        this.props.word.ignoreCase

        //passed from content component
        this.props.getSpellingGuess(guess)
        this.setState({
            value: ''
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}
                  id="container-options">
                <input type="text"
                       value={this.state.value}
                       onChange={this.handleChange}/>
                <input className="submit-button"
                        value="Submit"
                        type="submit" />
            </form>
        )
    }
}

export default Input