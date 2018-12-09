import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    
  }

  @Input() data;

}
