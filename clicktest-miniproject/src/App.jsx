import React, { useState } from 'react';

const App = () => {
	let [count,setCount] = useState(0);
	const clicked = () => {
		setCount(count+1);
	}
	return(
		<React.Fragment>
			<h1>{count}</h1>
			<button onClick={clicked}><span>Click Me</span></button>
		</React.Fragment>
	);
}

export default App;