import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': return state + 0;
    default: return state;
  }
}

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD': return [...state, { ...action.payload }];
    case 'REMOVE': return state.filter(p => p.id !== action.payload.id);
    case 'UPDATE': {
      const old = state.find(p => action.payload.id === p.id);
      const product = { ...old, ...action.payload };
      const products = state.filter(p => action.payload.id !== p.id);
      return [product, ...products];
    }
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
    FormsModule,
    StoreModule.forRoot({
      counter: counterReducer,
      products: productsReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
