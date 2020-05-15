import { Product } from './product.model';

export enum ProductActions {
    ADD = '[Product] add',
    SELECT = '[Product] select',
    DELETE = '[Product] delete',
}

export const listReducer = (state: Product[] = [], action) => {
    switch (action.type) {
        case ProductActions.ADD:
            return [...state, { ...action.payload }];
        case ProductActions.SELECT:
            return action.payload;
        case ProductActions.DELETE:
            return state.filter(s => s.id !== action.payload.id);
        default:
            return state;
    }
}