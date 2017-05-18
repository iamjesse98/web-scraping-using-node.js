import { Component } from '@angular/core';
import * as request from 'request';
import * as cheerio from 'cheerio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  results:any = [];
  scrape(u, s) {
    if(u && s) {
      request ( u, (error, response, body) => {
        let $ = cheerio.load( body );
        let Arr = [];
        $(s).each( ( i, element ) => {
              Arr.push( $( element ).text() )
        } )
        this.results = Arr
        //console.log(this.results)
      } )
    } else {
      console.log('Enter values')
    }
  }
}
