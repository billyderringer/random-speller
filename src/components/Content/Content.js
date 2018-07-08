import React, { Component } from 'react'
import './Content.css'
import '../../shared.css'
import WordOptions from "./WordOptions"
import Input from "./Input";

class Content  extends Component {

    render(){
        return(
            <section id="container-content"
                     className="center-all-flex">
                <div id="container-speaker"
                     className="center-all-flex">
                    <i id="word-clicker"
                       onClick={() => {
                           window.responsiveVoice.speak(this.props.word,
                               "US English Female", {rate: .8})
                       }}
                       className="fas fa-volume-up" />
                    <p>Click to hear the word</p>
                </div>
                <WordOptions clue={this.props.clue}/>

                <Input />
            </section>
        )
    }
}

export default Content