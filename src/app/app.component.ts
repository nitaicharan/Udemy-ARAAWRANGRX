import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './app-state.model';
import { Product } from './product.model';
import { ProductActionType } from './product.actions';

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
    this.products$ = this.store.select((state) => state.products)
  }

  save = () => this.store.dispatch({ type: ProductActionType.Create, payload: { name: this.newProduct, id: this.id++ } });
  remove = (product: Product) => this.store.dispatch({ type: ProductActionType.Delete, payload: product });
  select = (product) => this.selectedProduct = { ...product };
  update() {
    this.store.dispatch({
      type: ProductActionType.Update,
      payload: this.selectedProduct,
    })
    this.selectedProduct = null;
  }
}
