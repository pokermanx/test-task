import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
  providers: [ ModalService ]
})
export class ItemCardComponent implements OnInit {


  constructor(private modal: ModalService) { }

  ngOnInit() {
    
  }

  @Input() data;


}
