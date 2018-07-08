import React, { Component } from 'react'
import './Content.css'
import '../../shared.css'

class Content  extends Component {

    render(){
        return(
            <section id="container-content"
                     className="center-all-flex">
                <i id="word-clicker"
                   onClick={() => {
                       window.responsiveVoice.speak(this.props.word, "US English Female")
                   }}
                   className="fas fa-volume-up" />
                <i id="word-clicker"
                   onClick={() => {
                       window.responsiveVoice.speak(this.props.clue, "US English Female")
                   }}
                   className="fas fa-volume-up" />
            </section>
        )
    }
}

export default Content