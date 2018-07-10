import React, { Component } from 'react'
import './Content.css'
import '../../shared.css'

class WordOptions extends Component{

    render(){
        return(
            <div className="center-all-flex"
                 id="word-options">
                <button className="word-button"
                        onClick={() => {
                            window.responsiveVoice.speak(this.props.definition,
                                "US English Female", {rate: .77})
                        }}>
                    Definition
                </button>
                <button className="word-button"
                        onClick={this.props.setShowWord}>
                    Show Word
                </button>
                <button className="word-button"
                        onClick={this.props.getNewWord}>
                    New Word
                </button>
            </div>
        )
    }
}

export default WordOptions