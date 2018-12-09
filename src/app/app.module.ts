import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { appRoutes } from './routers'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { ShoplistComponent } from './shoplist/shoplist.component';
import { SearchService } from './services/search.service';
import { ItemPageComponent } from './item-page/item-page.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemCardComponent,
    ShoplistComponent,
    ItemPageComponent,
    SubscribeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SearchService],
  bootstrap: [AppComponent],
})

export class AppModule { }
