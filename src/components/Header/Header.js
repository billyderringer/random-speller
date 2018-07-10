import React, { Component } from 'react'
import './Header.css'
import '../../shared.css'

class Header  extends Component {
    render(){
        return(
            <section id="banner"
                     className="center-all-flex">
                <h1>Random Speller</h1>
            </section>
        )
    }
}

export default Header