import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../src/09-useContext/MainApp";

describe("Pruebas en Main App", () => {
	test("Debe de mostrar el Home Page recien carga el componente", () => {
		//Usamos Memory Router como wrap. Esto es similar a BrowserRouter en el main.jsx, pero para uso en consola
		// MemoryRouter provee los hooks internos que los <Routes> y <Route> usan internamente.
		// Omitir este wrap, genera errores al no encontrar dichos hooks internos
		render(
			<MemoryRouter>
				<MainApp />;
			</MemoryRouter>
		);

		expect(screen.getByText("Home"));
	});

	test("Debe de mostrar el Login Page", () => {
		// Initial Entries es para indicarle la ruta que queramos
		render(
			<MemoryRouter initialEntries={["/login"]}>
				<MainApp />;
			</MemoryRouter>
		);

		expect(screen.getByText("Login Page")).toBeTruthy();
	});

	test("Debe de mostrar el About Page", () => {
		render(
			<MemoryRouter initialEntries={["/about"]}>
				<MainApp />;
			</MemoryRouter>
		);

		expect(screen.getByText("About Page")).toBeTruthy();
	});

	test("Debe de mostrar el Home Page con rutas inexistentes", () => {
		render(
			<MemoryRouter initialEntries={["/fakeurl"]}>
				<MainApp />;
			</MemoryRouter>
		);

		expect(screen.getByText("Home")).toBeTruthy();
	});
});
