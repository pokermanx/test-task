import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { DataService } from '../services/data.service'


@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.scss'],
  providers: [DataService]
})
export class ShoplistComponent implements OnInit {

  items: Item[] = [];

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.items = this.dataservice.getData();
  }

}
