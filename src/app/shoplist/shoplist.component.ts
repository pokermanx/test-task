import { Component, OnInit, NgZone } from '@angular/core';
import { Item } from '../models/item';
import { DataService } from '../services/data.service'
import { PaginationService } from '../services/pagination.service';
import { SearchService } from '../services/search.service';
import * as _ from 'lodash'


@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.scss'],
  providers: [ DataService, PaginationService ],
})


export class ShoplistComponent implements OnInit {

  constructor(private dataservice: DataService, 
              private pagerService: PaginationService,
              private searchService: SearchService,
              private ng: NgZone) {}

  private allItems: Item[];
  private counter: number = 0;
  pager: any = {};
  pagedItems: any[];
  filteredItems: any[];
  input: string;

  ngOnInit() {
    this.allItems = this.dataservice.getData();
    this.searchService.currentMessage.subscribe(message => {
      this.ng.run( () => {
        this.input = message
        this.filteredItems = this.allItems
          .filter(item => {
            return item.title
              .toLowerCase()
              .includes(this.input.toLowerCase()) //||
              // item.description
              //   .toLowerCase()
              //   .includes(this.input.toLowerCase())
          });
        this.setPage(1);
      })
    });
  }

  sortHandler = () => {
    console.log(this.filteredItems)
    if (this.counter != 0) {
      console.log("reversing")
      this.filteredItems = this.filteredItems.reverse()
      this.counter--;
    } else {
      console.log("sorting")
      this.filteredItems = _.sortBy(this.filteredItems, 'date');
      this.counter++;
    }
    console.log(this.filteredItems)
    this.setPage(1);
  }

  setPage = (page: number) => {
    this.pager = this.pagerService.getPager(this.filteredItems.length, page, 8); 
    this.pagedItems = this.filteredItems.slice(this.pager.startIndex, this.pager.endIndex + 1)
  }
}
