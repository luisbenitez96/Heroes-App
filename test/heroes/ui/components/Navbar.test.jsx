import { fireEvent, render, screen } from "@testing-library/react";
import { Navbar } from "../../../../src/ui/components/Navbar";
import { AuthContext } from "../../../../src/auth/context/AuthContext";
import { MemoryRouter, useNavigate } from "react-router";

const mockUseNavigate = jest.fn();
jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"), // toma todo lo que tiene la libreria lo esparce y tomo lo que se necesite en esta caso es el useNavigate

  useNavigate: () => mockUseNavigate,
}));

describe("Pruebas en Navbar", () => {
  beforeEach(() => jest.clearAllMocks());
  const contextValue = {
    user: {
      name: "Junior",
    },
    logout: jest.fn(),
  };

  test("debe mostrar el nombre del usuario ", () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText("Junior")).toBeTruthy();
  });
  test("debe llamar el logout y navigate cuando se hace clic", () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    const logoutBtn = screen.getByRole("button");
    fireEvent.click(logoutBtn);
    expect(contextValue.logout).toHaveBeenCalled();
    expect(mockUseNavigate).toHaveBeenCalledWith("/login", { replace: true });
  });
});
