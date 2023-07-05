const initialState = {
  products: [],
  count: 0,
  total: 0,
  kg: 0,
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      var a = state.products.findIndex((v) => v.id == action.payload.id);
      if (0 > a) {
        var b = state.products;
        b.push(action.payload);
        return { ...state, products: b, count: state.count + 1 };
      } else {  
        var c = Number(state.products[a].kg) + Number(action.payload.kg);
        state.products[a].kg = c;
        return state;
      }

    case "DEL_PRODUCTS":
      var a = state.products.filter((v) => v.id != action.payload.id);
      return { ...state, products: a, count: state.count - 1 };
    case "INC":
      return { ...state, kg: state.kg + 1 };
    case "DEC":
      return { ...state, kg: state.kg - 1 };
        
    default:
      return state;
  }
};

export default products;
