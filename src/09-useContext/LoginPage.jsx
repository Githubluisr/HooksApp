import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
	const { user, setUser } = useContext(UserContext);

	return (
		<>
			<h1>Login Page</h1>
			<hr />

			<pre aria-label="pre-test">{JSON.stringify(user)}</pre>

			<button
				className="btn btn-primary"
				onClick={() =>
					setUser({ id: 123, name: "Juan Luis", email: "luisrosash@gmail.com" })
				}
			>
				Establecer Usuario
			</button>
		</>
	);
};
