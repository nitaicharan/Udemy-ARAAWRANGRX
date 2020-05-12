import { Action } from "@ngrx/store";
import { Product } from './product.model';

export enum ProductActionType {
    Create = '[Product] Create',
    Update = '[Product] Update',
    Delete = '[Product] Delete',
    Get = '[Product] Get',
}

export class CreateProductAction implements Action {
    type: ProductActionType.Create;
    constructor(public payload: Product) { }
}

export class UpdateProductAction implements Action {
    type: ProductActionType.Update;
    constructor(public payload: Product) { }
}

export class DeleteProductAction implements Action {
    type: ProductActionType.Delete;
    constructor(public payload: Product) { }
}

export class GetProductAction implements Action {
    type: ProductActionType.Get;
}

export type ProductActionUnion =
    CreateProductAction |
    UpdateProductAction |
    DeleteProductAction;