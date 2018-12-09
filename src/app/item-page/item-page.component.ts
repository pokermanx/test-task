import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss'],
  providers: [ DataService ]
})
export class ItemPageComponent implements OnInit {

  id: number;
  items: Item[];
  constructor(private dataService: DataService, private activateRoute: ActivatedRoute) {
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.items = this.dataService.getData();
  }

}
