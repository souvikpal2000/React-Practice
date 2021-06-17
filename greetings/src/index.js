import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const currHour = new Date().getHours();
let greeting="";
const cssStyle = {};

if(currHour>=1 && currHour<12){
	greeting = "Good Morning";
	cssStyle.color = "green";
}
else if(currHour>=12 && currHour<19){
	greeting = "Good Evening";
	cssStyle.color = "orange";
}
else{
	greeting = "Good Night";
	cssStyle.color = "black";
}

ReactDOM.render(
	<div className="reactFragment">
		<h1>
			Hello Sir, <span style={cssStyle}>{greeting}</span>
		</h1>
	</div>,
	document.getElementById('root')
);