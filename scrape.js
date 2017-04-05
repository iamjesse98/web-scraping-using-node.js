const request = require(`request`)
const cheerio = require(`cheerio`)
const fs = require(`fs`)

let url = "https://yts.ag/"

request( url, ( error, response, body ) => {
	if( error ) throw new Error( error )
	let $ = cheerio.load( body )
	let Arr = []
	$(`.browse-movie-title`).each( ( i, element ) => {
		let name = $( element ).text()
		Arr.push( name )
	} )
	fs.writeFile( `names.txt`, Arr.join(`\n`), `utf-8`, () => {
		console.log( Arr.join(`\n`) )
	} )
} )
