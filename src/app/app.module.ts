import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': return state + 0;
    default: return state;
  }
}

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD': return [...state, { ...action.payload }];
    default: return state;
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      counter: counterReducer,
      products: productsReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
