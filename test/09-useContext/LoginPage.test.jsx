import { render, screen, fireEvent } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe("Pruebas en  Login Page", () => {
	const setUserMock = jest.fn();

	beforeEach(() => jest.clearAllMocks());

	test("debe de mostrar el componente sin el usuario", () => {
		render(
			<UserContext.Provider value={{ user: null }}>
				<LoginPage />
			</UserContext.Provider>
		);

		const preElement = screen.getByLabelText("pre-test");
		expect(preElement.innerHTML).toBe("null");
	});

	test("Debe de llamar el setUser cuando se hace click en el boton", () => {
		render(
			<UserContext.Provider value={{ setUser: setUserMock }}>
				<LoginPage />
			</UserContext.Provider>
		);

		const buttonElement = screen.getByRole("button");
		fireEvent.click(buttonElement);

		expect(setUserMock).toHaveBeenCalledWith({
			id: 123,
			name: "Juan Luis",
			email: "luisrosash@gmail.com",
		});
	});
});
