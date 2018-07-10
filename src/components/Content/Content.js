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
        this.setShowWord = this.setShowWord.bind(this)
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
        }else if(this.state.guessCorrect === "show"){
            const word = this.props.word.charAt(0).toUpperCase() +
                this.props.word.substr(1)
            window.responsiveVoice.speak(this.props.word + ". Click new word.",
                this.props.voice, {rate: this.props.rate})
            return <p id="guess-incorrect">{word}</p>
        }
    }

    setShowWord(){
        this.setState({
            guessCorrect: "show"
        })
    }

    getSpellingGuess(result) {
        this.setState({
            guessCorrect: result
        })
    }

    render(){

        return(
            <div className="container-main">

                <WordOptions definition={this.props.definition}
                                                         setShowWord={this.setShowWord}
                                                         containerResponse={this.containerResponse}
                                                         getNewWord={this.props.getNewWord}/>

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

                    <Input getSpellingGuess={this.getSpellingGuess}
                           word={this.props.word}
                           containerResponse={this.containerResponse} />
                </section>
            </div>
        )
    }
}

export default Content