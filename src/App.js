import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
    constructor(props) {
        super(props);
        this.state= {
            api: "",
            word: ""
        }

        this.getNewWord = this.getNewWord.bind(this)
    }

    componentWillMount(){
        this.getNewWord()
    }

    getNewWord = () => {
        axios({
            method: 'get',
            url:'https://wordsapiv1.p.mashape.com/words/?random=true&letters=4&letterpattern=^[A-z]+$',
            headers: {
                "X-Mashape-Key": "lS563P9svKmshFblGwDm0QmxMQiip16Cf3yjsnwebKjRFbSiM3",
                "X-Mashape-Host": "wordsapiv1.p.mashape.com"
            }
        }).then((res) => {
            console.log(res)
            this.setState({word: res.data.word})
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
    return (
      <div className="App">
          {console.log(this.state.word + " :return")}
      </div>
    )
  }
}

export default App
