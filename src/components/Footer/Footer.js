import React, { Component } from 'react'
import './Footer.css'
import '../../shared.css'

class Footer extends Component {

    render(){
        return(
            <footer className="center-all-flex">
                <h6>Voice provided by
                    <a href="https://responsivevoice.com/"
                       target="_blank"
                       rel="noopener noreferrer"> Responsive Voice</a>
                </h6>
            </footer>
        )
    }
}

export default Footer