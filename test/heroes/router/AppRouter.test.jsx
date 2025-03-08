import { render, screen } from "@testing-library/react";
import { AppRouter } from "../../../src/router/AppRouter";
import { AuthContext } from "../../../src/auth";
import { MemoryRouter } from "react-router";

describe("pruebas en AppRouter", () => {
  test("Si no esta autenticado debe mostrar el Login", () => {
    const contextValue = {
      logged: false,
    };
    render(
      <MemoryRouter initialEntries={["/marvel"]}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    expect(screen.getAllByText("Login").length).toBe(2);
  });
  test("Debe mostrar el componente de marvel si esta autenticado", () => {
    const contextValue = {
      logged: true,
    };
    render(
      <MemoryRouter initialEntries={["/dc"]}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText("Marvel")).toBeTruthy;
  });
});
