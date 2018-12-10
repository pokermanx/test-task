import {Routes} from '@angular/router';
import { ItemPageComponent } from './item-page/item-page.component'

export const appRoutes: Routes =[
    { path: 'item/:id', component: ItemPageComponent},
  ];