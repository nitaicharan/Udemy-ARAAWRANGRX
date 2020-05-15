import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { ProductState } from './product-state.model';
import { listReducer } from './product.reducer';
import { ProductListComponent } from './products-list/products-list.component';

const reducers: ActionReducerMap<ProductState> = {
  list: listReducer,
};

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forFeature('products', reducers),
  ],
  providers: [],
  exports: [ProductListComponent]
})
export class ProductModule { }