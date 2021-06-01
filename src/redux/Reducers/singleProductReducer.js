const initialState = {
    product: {},
    loading: false,
    error: null
}

const singleProductReducer = (state= initialState, action) => {
     switch(action.type){
         case 'FETCH_SINGLE_PRODUCT_REQUEST':
             return {
                 ...state,
                 loading:true,
                 error: null
             }
          case 'FETCH_SINGLE_PRODUCT_SUCCESS':
              return {
                  ...state,
                  loading: false,
                  product: action.payload
              } 
           case 'FETCH_SINGLE_PRODUCT_FAILURE':
               return {
                   ...state,
                   product: [],
                   loading: false,
                   error: action.error
               } 
             

          default:
              return state;   
     }
}

export default singleProductReducer;