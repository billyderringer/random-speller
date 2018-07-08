import React, { Component } from 'react'
import './Header.css'
import '../../shared.css'

class Header  extends Component {
    render(){
        return(
            <nav>
                <section id="banner"
                         className="center-all-flex">
                    <h1>Random Speller</h1>
                </section>
                <section id="menu"
                         className="center-all-flex">
                    <button
                       id="beginner"
                       className="difficulty-button">
                        Beginner
                    </button>
                    <button
                       id="intermediate"
                       className="difficulty-button">
                        Intermediate
                    </button>
                    <button
                       id="advanced"
                       className="difficulty-button">
                        Advanced
                    </button>
                </section>
            </nav>
        )
    }
}

export default Header