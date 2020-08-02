import { Component, ViewEncapsulation, OnInit, Input, OnChanges } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit, OnChanges{
  @Input() newsPost: any;
  title = 'hacker-news-clone';
  hidePostClicked: EventEmitter =  new EventEmitter();
  constructor() {}

  ngOnInit(){
  }
  ngOnChanges(){
  console.log('news posts', this.newsPost);
 }

 diff_hours(dt1)
 {

  let  diff = (new Date().getTime() - new Date(dt1).getTime()) / 1000;
  diff /= (60 * 60);
  return Math.abs(Math.round(diff));
 }

 hidePost(Id){
  // this.hidePostClicked.emit(Id);
 }
}
