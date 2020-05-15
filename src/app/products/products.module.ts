import { NgModule } from "@angular/core";
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { listReducer } from './product.reducer';
import { FormsModule } from '@angular/forms';
import { ProductState } from './product-state.model';
import { ProductListComponent } from './products-list/products-list.component';

const reducers: ActionReducerMap<ProductState> = {
  list: listReducer,
};

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forFeature('products', reducers)
  ],
  providers: [],
  exports: [ProductListComponent]
})
export class ProductModule { }