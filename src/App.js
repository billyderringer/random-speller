import React, { Component } from 'react'
import axios from 'axios'
import Header from "./components/Header"
import Content from "./components/Content/Content"
import Footer from "./components/Footer"
import Loader from "./components/Loader"
require('dotenv').config()

//**used to override responsive voice api logs
//console.log = function() {}

class App extends Component {
    constructor(props) {
        super(props);
        this.state= {
            word: "",
            definition: "",
            rate: .77,
            voice: "US English Woman"
        }

        this.getNewWord = this.getNewWord.bind(this)
    }

    componentWillMount(){
        this.getNewWord()
    }

    //Get random word from words api
    //sent to Content component for voice
    getNewWord() {
        console.log(process.env)
        axios({
            method: 'get',
            url:'https://wordsapiv1.p.mashape.com/words/?random=true&letterpattern=/^\\S*$/',
            headers: {
                "X-Mashape-Key": process.env.REACT_APP_X_MASHAPE_KEY,
                "X-Mashape-Host": "wordsapiv1.p.mashape.com"
            }
        }).then((res) => {
            //only get word with definitions
            res.data.results ?
            this.setState({
                word: res.data.word,
                definition: res.data.results[0].definition
            }): this.getNewWord()

        }).catch(err => {
            console.log(err)
        })
    }

    render() {
    return (
        <div className="App">
            {this.state.word ?
                <div>
                    <Header />
                    <Content word={this.state.word}
                             definition={this.state.definition}
                             getNewWord={this.getNewWord}
                             rate={this.state.rate}
                             voice={this.state.voice}/>
                    <Footer/>
                </div>
             : <Loader />
            }
        </div>)
  }
}

export default App
