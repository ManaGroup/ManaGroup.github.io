export function productIsLoading(state = false, action) {
    switch (action.type) {
        case 'PRODUCT_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}
export function pushProducts(state = [], action) {
    switch (action.type) {
        case 'PUSH_PRODUCTS':
        
            return action.products;

        default:
            return state;
    }
}
export function pushProduct(state = [], action) {
    switch (action.type) {
        case 'PUSH_PRODUCT':
        
            return action.product;

        default:
            return state;
    }
}

export function Products(state = [], action) {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return action.Products;

        default:
            return state;
    }
}