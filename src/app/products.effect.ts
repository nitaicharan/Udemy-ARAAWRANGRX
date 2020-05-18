import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { ProductsService } from "./products.service";

@Injectable()
export class ProductsEffects {

  @Effect() products$ = this.actions$.pipe(
    ofType('FETCH_PRODUCTS'),
    switchMap(() => this.srv.getProducts().pipe(
      map(products => ({ type: "LOAD_PRODUCTS", payload: products })),
    )))

  constructor(private actions$: Actions, private srv: ProductsService) { }
}