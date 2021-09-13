import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RowItemComponent } from './components/row-item/row-item.component';
import { ColItemComponent } from './components/col-item/col-item.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    RowItemComponent,
    ColItemComponent,
    GridViewComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
