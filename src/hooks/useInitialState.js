import { useState } from "react";

const initialState = {
  cart: [],
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state, //Asi le decimos que mantenga todo el estado completo
      cart: [...state.cart, payload],
    });
  };
  return {
    state,
    addToCart,
  };
};

export default useInitialState;
