import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from './product-state.model';

const getProducts = createFeatureSelector('products');
export const getList = createSelector(
    getProducts,
    (state: ProductState) => state.list,
);