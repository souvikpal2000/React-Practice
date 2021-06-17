//var React = require('react');
//var ReactDOM = require('react-dom');
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//ReactDOM.render('What to display??', 'Where to Display??', callback func);

const name = "Souvik Pal";
const curr = new Date();
const img01 = "https://picsum.photos/300/300";
const img02 = "https://picsum.photos/id/237/300/300";
const img03 = "https://picsum.photos/300/300?grayscale";

const style = {
	color:"#cd5757", 
	textTransform: "capitalize"
}
ReactDOM.render(
	<React.Fragment>
		<div className="heading">
			<h1>Hello World!!</h1>
			<h2 style={style}>My Name is Souvik Pal</h2>
		</div>
		{/* <h3 contentEditable="true">How are your Doing?</h3>
		<h3>My Name is {name}</h3>
		<h3>Today's Date is {curr.toLocaleDateString()}</h3>
		<h3>Current Time is {curr.toLocaleTimeString()}</h3> */}
		<div className="images">
			<img src={img01} alt="Image01" />
			<img src={img02} alt="Image01" />
			<img src={img03} alt="Image01" />
		</div>
	</React.Fragment>,

	// Array of Elements
	// [
	// 	<h1>Hello World!!</h1>,
	// 	<h3>How are your Doing?</h3>
	// ],
	document.getElementById("root"),
);

//BABEL Conversion
/*ReactDOM.render(
	React.createElement("h1", null, "Hello World!!"), 
	document.getElementById("root")
);*/

//Vanilla Javascript
/*const h1 = document.createElement('h1');
h1.innerHTML = "Hello World!!";
document.querySelector('#root').appendChild(h1);*/