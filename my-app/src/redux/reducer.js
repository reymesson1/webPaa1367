import { PRODUCTS } from '../shared/products';
import { COMPANIES } from '../shared/companies';
import { STYLES } from '../shared/styles';
import { HIDDEN } from '../shared/hidden';

export const initialState = {

    products: PRODUCTS,
    companies: COMPANIES,
    styles: STYLES,
    hidden: HIDDEN
}

export const Reducer = (state = initialState, action) =>{

    return state;
};
