import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {

  subscribers: string[] = [];
  
  constructor() { }

  ngOnInit() {
  }

  subscribeHandler = () => {
    const input = (<HTMLInputElement>document.getElementById('email')).value
    this.subscribers.push(input);
    console.log(this.subscribers);
  }

}
