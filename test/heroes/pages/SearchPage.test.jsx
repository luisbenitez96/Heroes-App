import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { SearchPage } from "../../../src/heroes/pages/SearchPage";

const mockUseNavigate = jest.fn();
jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"), // toma todo lo que tiene la libreria lo esparce y tomo lo que se necesite en esta caso es el useNavigate

  useNavigate: () => mockUseNavigate,
}));

describe("Pruebas en el componente SearchPage", () => {
  beforeEach(() => jest.clearAllMocks());
  test("debe mostrarse correctamente con valores por defecto ", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <SearchPage />
      </MemoryRouter>
    );
    const input = screen.getByRole("textbox");
    expect(input.value).toBe("batman");

    const img = screen.getByRole("img");
    expect(img.src).toContain("/assets/heroes/dc-batman.jpg");
    const alertDanger = screen.getByLabelText("alert-danger");
    expect(alertDanger.style.display).toBe("none");
  });
  test("debe de mostrar un error si no se encuentra el heroe", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=batman123"]}>
        <SearchPage />
      </MemoryRouter>
    );
    const alertDanger = screen.getByLabelText("alert-danger");
    expect(alertDanger.style.display).toBe("");
  });
  test("debe llamar al navigate a la pantalla nueva", () => {
    render(
      <MemoryRouter initialEntries={["/search"]}>
        <SearchPage />
      </MemoryRouter>
    );
    const input = screen.getByRole("textbox");
    fireEvent.change(input, {
      target: { name: "searchText", value: "superman" },
    });

    const form = screen.getByRole("form");
    fireEvent.submit(form);
    expect(mockUseNavigate).toHaveBeenCalled();
  });
});
