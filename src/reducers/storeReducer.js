import { storeTypes } from "../types/storeTypes";

export const initialStore = {
  products: [
    {
      id: "123456",
      name: "Laptop Modelo 1",
      description:
        "Una computadora portátil es una pequeña computadora personal. Están diseñados para ser más portátiles que las computadoras de escritorio tradicionales.",
      price: 200,
      imageSrc: "/images/laptop.webp",
    },

    {
      id: "123456789",
      name: "Laptop Modelo 2",
      description:
        "Una computadora portátil es una pequeña computadora personal. Están diseñados para ser más portátiles que las computadoras de escritorio tradicionales.",
      price: 150,
      imageSrc: "/images/laptop2.png",
    },
  ],
  payment: {},
  user: {},
  order: [
    {
      productId: "123456",
      productName: "Laptop Modelo 1",
      price: 200,
      quantity: 1,
      totalPrice: 200,
    },

    {
      productId: "123456789",
      productName: "Laptop Modelo2",
      price: 150,
      quantity: 1,
      totalPrice: 150,
    },
  ],
};

export const storeReducer = (state = {}, action) => {
  switch (action.type) {
    //Auth Actions
    case storeTypes.login:
      return {
        ...state,
        user: {
          ...action.payload,
          logged: true,
        },
      };

    case storeTypes.logout:
      return {
        ...state,
        user: {
          logged: false,
        },
        order: [...initialStore.order],
        payment: {},
      };

    case storeTypes.modifyQuantity:
      return {
        ...state,
        order: state.order.map((item) =>
          item.productId === action.payload.productId ? action.payload : item
        ),
      };

    case storeTypes.setPayment:
      return {
        ...state,
        payment: {
          ...action.payload,
        },
      };

    case storeTypes.resetCart:
      return {
        ...state,
        payment: {},
        order: [...initialStore.order],
      };

    default:
      return state;
  }
};
