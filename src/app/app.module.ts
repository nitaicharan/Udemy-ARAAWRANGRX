import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppState } from './app-state.model';
import { AppComponent } from './app.component';
import { ProductActionType, ProductActionUnion } from './product.actions';
import { Product } from './product.model';

const productsReducer = (state: Product[] = [], action: ProductActionUnion) => {
  switch (action.type) {
    case ProductActionType.Create: return [...state, { ...action.payload }];

    case ProductActionType.Delete: return state.filter(p => p.id !== action.payload.id);

    case ProductActionType.Update: {
      const old = state.find(p => action.payload.id === p.id);
      const product = { ...old, ...action.payload };
      const products = state.filter(p => action.payload.id !== p.id);
      return [product, ...products];
    }

    default: return state;
  }
};

const countersReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD': return [...state, { ...action.payload }];
  }
};

const reducers: ActionReducerMap<AppState> = {
  counter: countersReducer,
  products: productsReducer,
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(reducers),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
