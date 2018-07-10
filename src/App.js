import React, { Component } from 'react'
import axios from 'axios'
import Header from "./components/Header"
import Content from "./components/Content/Content"
import Footer from "./components/Footer"
import Loader from "./components/Loader"

//**used to override responsive voice api logs
console.log = function() {}

class App extends Component {
    constructor(props) {
        super(props);
        this.state= {
            word: "",
            definition: "",
            rate: .77,
            voice: "US English Female"
        }

        this.fetchData = this.fetchData.bind(this)
        this.getNewWord = this.getNewWord.bind(this)
    }

    componentWillMount(){
        this.fetchData()
    }

    //get random word from words api
    fetchData(){
        axios({
            method: 'get',
            url:'https://wordsapiv1.p.mashape.com/words/?random=true&hasDetails=definitions&letterPattern=^\\S*$',
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
                }): this.fetchData()
        }).catch(err => {
            console.log(err)
        })
    }

    getNewWord() {
        this.setState({
            word: '',
            definition: ''
        })
        this.fetchData()
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
