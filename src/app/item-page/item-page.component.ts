import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { Item } from '../models/item';
import { ModalService } from '../services/modal.service'

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss'],
  providers: [ DataService, ModalService ]
})
export class ItemPageComponent implements OnInit {

  id: number;
  items: Item[];
  constructor(private dataService: DataService, 
              private activateRoute: ActivatedRoute,
              private modal: ModalService) {
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.items = this.dataService.getData();
    this.modal.hide();
  }

  close = () => {
    this.modal.show();
  }
}
