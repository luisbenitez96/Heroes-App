import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../../src/auth/context/AuthContext";
import { PrivateRoute } from "../../../src/router/PrivateRoute";
import { MemoryRouter } from "react-router";

describe("Pruebas en el componente PrivateRoute", () => {
  test("debe mostrar el children si esta autenticado ", () => {
    Storage.prototype.setItem = jest.fn();

    const contexValue = {
      logged: true,
      user: {
        id: "abc",
        name: "Juan Carlos",
      },
    };

    render(
      <AuthContext.Provider value={contexValue}>
        <MemoryRouter>
          <PrivateRoute>
            <h1>Ruta Privada</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText("Ruta Privada")).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalled();
  });
});
