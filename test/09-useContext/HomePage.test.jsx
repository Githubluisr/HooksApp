import { render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { HomePage } from "../../src/09-useContext/HomePage";

describe("Pruebas en Home Page Test", () => {
	const user = {
		id: 123,
		name: "Juan Luis",
		email: "luisrosash@gmail.com",
	};

	test("debe de mostrar el compnente inicial", () => {
		render(
			<UserContext.Provider value={{ user: null }}>
				<HomePage />
			</UserContext.Provider>
		);

		//screen.debug();

		const preElement = screen.getByLabelText("pre-test");
		expect(preElement.innerHTML).toBe("null");
	});

	test("debe de mostrar el compnente con un usuario", () => {
		render(
			<UserContext.Provider value={{ user }}>
				<HomePage />
			</UserContext.Provider>
		);

		const preElement = screen.getByLabelText("pre-test");
		expect(preElement.innerHTML).toBe(
			'{"id":123,"name":"Juan Luis","email":"luisrosash@gmail.com"}'
		);
	});
});
