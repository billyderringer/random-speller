import React, { Component } from 'react'
import axios from 'axios'
import Header from "./components/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer";

//**used to override responsive voice api logs
console.log = function() {}

class App extends Component {
    constructor(props) {
        super(props);
        this.state= {
            word: "",
            clue: "I'm a clue"
        }

        this.getNewWord = this.getNewWord.bind(this)
    }

    componentWillMount(){
        this.getNewWord()
    }

    getNewWord = () => {
        axios({
            method: 'get',
            url:'https://wordsapiv1.p.mashape.com/words/?random=true&letters=6&letterpattern=^[A-z]+$',
            headers: {
                "X-Mashape-Key": "lS563P9svKmshFblGwDm0QmxMQiip16Cf3yjsnwebKjRFbSiM3",
                "X-Mashape-Host": "wordsapiv1.p.mashape.com"
            }
        }).then((res) => {
            this.setState({word: res.data.word})
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
    return (
      <div className="App">
          <Header />
          <Content word={this.state.word}
                   clue={this.state.clue}/>
          <Footer />
      </div>
    )
  }
}

export default App
