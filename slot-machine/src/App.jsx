import React from 'react';
import Heading from './Heading';
import Footer from './Footer';
import Slot from './Slot';
import Emojies from './Emojies';

function App(){
	return(
		<React.Fragment>
			<Heading />
			<div className="slotContainer">
				<div className="slotDiv">
					{Emojies.map((value) => {
						let {id, x, y, z} = value;
						return(
							<Slot key={id} x={x} y={y} z={z}/>
						);
					})}
				</div>
			</div>
			<Footer />
		</React.Fragment>
	);
}

export default App;