import { storeTypes } from "../types/storeTypes";
import { storeReducer } from "./storeReducer";

describe("Pruebas en storeReducer", () => {
  const initialState = {
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
  const actionLogin = {
    type: storeTypes.login,
    payload: {
      email: "luismiguel@mail.ee",
    },
  };

  test("debe de retornar el estado por defecto", () => {
    const state = storeReducer(initialState, {});
    expect(state).toEqual(initialState);
  });

  test("debe de logear un usuario", () => {
    const state = storeReducer(initialState, actionLogin);
    expect(state).toEqual({
      ...initialState,
      user: {
        ...actionLogin.payload,
        logged: true,
      },
    });
  });

  test("debe de deslogear al usuario", () => {
    storeReducer(initialState, actionLogin);
    const state = storeReducer(initialState, {
      type: storeTypes.logout,
    });

    expect(state).toEqual({
      ...initialState,
      user: {
        logged: false,
      },
    });
  });
});
