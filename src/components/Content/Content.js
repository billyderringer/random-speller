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

                    {/*Send word to responsive voice*/}
                    <i id="word-clicker"
                       onClick={() => {
                           window.responsiveVoice.speak(this.props.word,
                               "US English Female", {rate: .77})
                       }}
                       className="fas fa-volume-up" />
                    <p>Click to hear the word</p>
                </div>
                <WordOptions definition={this.props.definition}/>

                <Input />
            </section>
        )
    }
}

export default Content