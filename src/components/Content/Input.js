import React, { Component } from 'react'
import './Content.css'
import '../../shared.css'

class Input extends Component{
    render(){
        return(
            <div id="container-options">
                <input type="text" />
                <button className="submit-button"
                        type="submit">Submit</button>
            </div>
        )
    }
}

export default Input