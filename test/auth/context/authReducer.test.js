import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe("Pruebas en authReducer", () => {
  test("debe retornar el estado por defecto ", () => {
    const newState = authReducer({ logged: false }, {});
    expect(newState).toEqual({ logged: false });
  });
  test("debe llamar al login y autenticar al usuario", () => {
    const action = {
      type: types.login,
      payload: {
        name: "juan",
        id: "123",
      },
    };
    const state = authReducer({ logged: false }, action);
    expect(state).toEqual({ logged: true, user: action.payload });
  });
  test("debe de (logout) borrar el name del usuario y logged en false", () => {
    const state = {
      logged: true,
      user: { id: "123", name: "juan " },
    };
    const action = {
      type: types.logout,
    };
    const newState = authReducer(state, action);
    expect(newState).toEqual({ logged: false });
  });
});
