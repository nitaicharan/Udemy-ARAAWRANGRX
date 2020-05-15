import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductState } from '../product-state.model';
import { getList } from '../product.selector';
import { ProductActions } from '../product.reducer';
import { Observable } from 'rxjs';
import { Product } from '../product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
})
export class ProductListComponent {
  products$: Observable<Product[]>;
  newProduct: string;
  id = 0;

  constructor(private store: Store<ProductState>) {
    this.products$ = this.store.select(getList);
  }

  create() {
    this.store.dispatch({
      type: ProductActions.ADD,
      payload: { name: this.newProduct, id: this.id++ }
    })
  }

  select() {
    this.store.dispatch({
      type: ProductActions.SELECT,
    })
  }

  delete = (product: Product) => this.store.dispatch({
    type: ProductActions.DELETE,
    payload: { id: product.id },
  })
}