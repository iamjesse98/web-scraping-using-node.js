import React, { Component } from 'react'
//import logo from './logo.svg'
import './App.css'
const request = require('request')
const cheerio = require('cheerio')

class App extends Component {
  constructor() {
	super()
	this.state = {
		texts: []
	}
  }

  scrape() {
	let url = document.querySelector('#url').value.toString()
	let selector = document.querySelector('#selector').value.toString()
	let arr = []
	request( url, ( error, response, body ) => {
		if( error ) throw new Error( error )
		let $ = cheerio.load( body )
		$(selector).each( ( i, element ) => {
			let name = $( element ).text()
			arr.push( name )
		})
		console.log(arr, url, selector)
		this.setState({
			texts: arr
		})
	})
  }  

  render() {
    return (
      <div>
        <input type="text" id="url" placeholder="url"/>
	<input type="text" id="selector" placeholder="selector"/>
	<button onClick={this.scrape.bind(this)}>Scrape</button>
	<ul>
		{this.state.texts.map( t => <li key={t}>{t}</li> )}
	</ul>
      </div>
    )
  }
}

export default App
