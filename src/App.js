import React, { Component } from 'react'
import axios from 'axios'
import Header from "./components/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

//**used to override responsive voice api logs
//console.log = function() {}

class App extends Component {
    constructor(props) {
        super(props);
        this.state= {
            word: "",
            definition: ""
        }

        this.getNewWord = this.getNewWord.bind(this)
    }

    componentWillMount(){
        this.getNewWord()
    }

    //Get random word from words api
    //sent to Content component for voice
    getNewWord = () => {
        axios({
            method: 'get',
            url:'https://wordsapiv1.p.mashape.com/words/?random=true&letters=6&letterpattern=^[A-z]+$',
            headers: {
                "X-Mashape-Key": "lS563P9svKmshFblGwDm0QmxMQiip16Cf3yjsnwebKjRFbSiM3",
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
                             definition={this.state.definition}/>
                    {console.log(this.state.definition)}
                    <Footer/>
                </div>
             : <Loader />
            }
        </div>)
  }
}

/*let test = this.state.data.results[0].definition !== undefined ?
    this.state.data.results[0].definition :
    "No definition available"*/

export default App
