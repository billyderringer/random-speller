import React, { Component } from 'react'
import './Content.css'
import '../../shared.css'

class WordOptions extends Component{

    render(){
        return(
            <div id="word-options">
                <button className="word-button"
                        onClick={() => {
                            window.responsiveVoice.speak(this.props.clue,
                                "US English Female")
                        }}>
                    Get A Clue
                </button>
                <button className="word-button">
                    New Word
                </button>
            </div>
        )
    }
}

export default WordOptions