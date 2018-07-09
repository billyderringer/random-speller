import React, { Component } from 'react'
import './Loader.css'

class Loader extends Component{
    render(){
        return(
            <div className="loader center-all-flex">
                <div id="container-eye">
                    <div className="eye" />
                </div>
                <p>Retrieving Word</p>
            </div>
        )
    }
}

export default Loader