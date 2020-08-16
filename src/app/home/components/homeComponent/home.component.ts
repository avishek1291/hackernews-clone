import { Component, ViewEncapsulation, OnInit, Input, OnChanges, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit, OnChanges{
  @Input() newsPost: any;
  title = 'hacker-news-clone';
  @Output()
  hidePostClicked: EventEmitter<any> =  new EventEmitter();
  @Output()
  nextPage: EventEmitter<any> =  new EventEmitter();
  @Output()
  previousPage: EventEmitter<any> =  new EventEmitter();
  @Output()
  upVotePostClicked: EventEmitter<any> =  new EventEmitter();

  count = 1;
  constructor() {}

  ngOnInit(){
  }
  ngOnChanges(){
  if (this.newsPost){
    localStorage.setItem('posts', JSON.stringify(this.newsPost));
  }
 }

 diff_hours(dt1)
 {
  const yearDiff =  new Date().getFullYear() - new Date(dt1).getFullYear();
  const monthDiff =  new Date().getMonth() - new Date(dt1).getMonth();
  const dayDiff =  new Date().getDate() -  new Date(dt1).getDate();
  if (yearDiff > 1){
    return `${yearDiff} years ago`;
  }else if (monthDiff > 1){
    return `${monthDiff} months ago`;
  }else if (dayDiff > 1){
      return `${dayDiff} days ago`;
  }
 }

 hidePost(Id){
  console.log('hide post clicked');
  this.hidePostClicked.emit(Id);
 }

 upVote(Id){
console.log('upvote clicked');
this.upVotePostClicked.emit(Id);
 }

 nextCliked(){
   this.nextPage.emit(this.count + 1);
   this.count = this.count + 1;
 }

 previousClicked() {
   this.previousPage.emit(this.count - 1);
   this.count = this.count - 1 ;
 }
}
