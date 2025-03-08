import { render, screen, waitFor } from "@testing-library/react";
import { PublicRoute } from "../../../src/router/PublicRoute";
import { AuthContext } from "../../../src/auth/context/AuthContext";
import { MemoryRouter, Route, Routes } from "react-router";

describe("Pruebas en el componente PublicRoute", () => {
  test("debe de mostrar el children si no esta autenticado", () => {
    const contexValue = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={contexValue}>
        <PublicRoute>
          <h1>Ruta Pública</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );
    expect(screen.getByText("Ruta Pública")).toBeTruthy();
  });
  test("debe de navegar si esta autenticado", async () => {
    const contexValue = {
      logged: true,
      user: {
        name: "Strider",
        id: "ABC123",
      },
    };

    render(
      <AuthContext.Provider value={contexValue}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route
              path="login"
              element={
                <PublicRoute>
                  <h1>Ruta Pública</h1>
                </PublicRoute>
              }
            />
            <Route path="marvel" element={<h1>Página de Marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    await waitFor(() =>
      expect(screen.getByText("Página de Marvel")).toBeTruthy()
    );
  });
});
