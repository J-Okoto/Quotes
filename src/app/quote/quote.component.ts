import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {name:'Life is a road with so many signs',
  author:'Carl max',publisher:'Joe'
},
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
