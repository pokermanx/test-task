import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './searchbar.style.scss', './toggle.style.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private searchService: SearchService,
              private ref: ChangeDetectorRef ) { }

  sendMessage = (value: string): void => {
    this.searchService.changeMessage(value)
  }

  ngOnInit() {
    this.searchService.currentMessage.subscribe( () => {
      this.ref.markForCheck();
    })
  }
}
