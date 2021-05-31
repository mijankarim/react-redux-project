const initialState = {
    products: [],
    loading: false,
    error: null
}

const productsReducer = (state= initialState, action) => {
     switch(action.type){
         case 'FETCH_PRODUCTS_REQUEST':
             return {
                 ...state,
                 loading:true,
                 error: null
             }
          case 'FETCH_PRODUCTS_SUCCESS':
              return {
                  ...state,
                  loading: false,
                  products: action.payload
              } 
           case 'FETCH_PRODUCTS_FAILURE':
               return {
                   ...state,
                   products: [],
                   loading: false,
                   error: action.error
               }    
          default:
              return state;   
     }
}

export default productsReducer;