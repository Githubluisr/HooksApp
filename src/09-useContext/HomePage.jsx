import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = () => {
	const { user, setUser } = useContext(UserContext);

	return (
		<>
			<h1>Home Page</h1>
			<hr />

			<pre aria-label="pre-test">{JSON.stringify(user)}</pre>
		</>
	);
};
