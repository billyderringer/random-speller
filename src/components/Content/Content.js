import React, { Component } from 'react'
import './Content.css'
import WordOptions from "./WordOptions"
import Input from "./Input";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guessCorrect: ""
        }
        this.containerResponse = this.containerResponse.bind(this)
        this.getSpellingGuess = this.getSpellingGuess.bind(this)
    }

    containerResponse() {
        if(this.state.guessCorrect === ""){
            return <p id="instruction-intro">Click icon & spell the word.
                <br /><br />Good luck!</p>
        }
        else if(this.state.guessCorrect === true){
            window.responsiveVoice.speak("Correct! Click new word.",
                this.props.voice, {rate: this.props.rate})
            return <p id="guess-correct">Correct!</p>
        }else if(this.state.guessCorrect === false){
            window.responsiveVoice.speak("Incorrect, please try again",
                this.props.voice, {rate: this.props.rate})
            return <p id="guess-incorrect">Incorrect. Please try again.</p>
        }
    }

    getSpellingGuess(result) {
        this.setState({
            guessCorrect: result
        })
    }

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
                               this.props.voice, {rate: this.props.rate})
                       }}
                       className="fas fa-volume-up" />
                    {this.containerResponse()}
                </div>
                <WordOptions definition={this.props.definition}
                             getNewWord={this.props.getNewWord}/>

                <Input getSpellingGuess={this.getSpellingGuess}
                       word={this.props.word}
                       containerResponse={this.containerResponse} />
            </section>
        )
    }
}

export default Content