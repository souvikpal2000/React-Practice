import React, { useState } from 'react';

const App = () => {
	let time = new Date().toLocaleTimeString();
	let [curTime, setTime] = useState(time);
	const updateTime = () => {
		time = new Date().toLocaleTimeString();
		setTime(time);
	}
	setInterval(updateTime,1000);
	return(
		<React.Fragment>
		<h1>{curTime}</h1>
		</React.Fragment>
	);
}

export default App;