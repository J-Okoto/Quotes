import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  @Output() UpVote = new EventEmitter();
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  
  numberOfLikes = 0;
  numberOfDislikes = 0;
  likeButtonClick() {
    this.UpVote.emit(this.numberOfLikes);
    this.numberOfLikes++;
  }
  
  dislikeButtonClick() {
    this.numberOfDislikes++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
