import React, { Component } from 'react'
import './Content.css'
import '../../shared.css'

class WordOptions extends Component{

    render(){
        return(
            <div id="word-options">
                <button className="word-button"
                        onClick={() => {
                            window.responsiveVoice.speak(this.props.definition,
                                "US English Female", {rate: .77})
                        }}>
                    Definition
                </button>
                <button className="word-button">
                    Show Word
                </button>
                <button className="word-button">
                    New Word
                </button>
            </div>
        )
    }
}

export default WordOptions