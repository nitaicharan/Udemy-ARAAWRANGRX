import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './app-state.model';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products$: Observable<Product[]>
  newProduct: string;
  selectedProduct;
  id = 0;

  constructor(
    private store: Store<AppState>
  ) {
    this.products$ = this.store.select('products')
  }

  save = () => this.store.dispatch({ type: 'ADD', payload: { name: this.newProduct, id: this.id++ } });
  remove = (product: Product) => this.store.dispatch({ type: 'REMOVE', payload: product });
  select = (product) => this.selectedProduct = { ...product };
  update() {
    this.store.dispatch({
      type: 'UPDATE',
      payload: this.selectedProduct
    })
    this.selectedProduct = null;
  }
}
