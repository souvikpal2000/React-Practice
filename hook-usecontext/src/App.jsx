import React, { createContext } from "react";
import CompoA from "./CompoA";

const firstName = createContext();
const lastName = createContext();

const App = () => {
	return(
		<React.Fragment>
			<firstName.Provider value="Souvik">
				<lastName.Provider value="Pal">
					<CompoA />
				</lastName.Provider>
			</firstName.Provider>
		</React.Fragment>
	)
}

export default App;
export {firstName, lastName};