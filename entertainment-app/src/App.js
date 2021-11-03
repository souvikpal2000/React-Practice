import React from 'react';
import Header from './Header';
import Card from './Cards';
import Footer from './Footer';
import SeriesData from './SeriesData';

function card(value){
	return(
		<Card 
			image={value.image}
			category={value.category}
			title={value.title}
			link={value.link}
		/>
	);
}

function App() {
    return (
		<React.Fragment>
			<Header />
			<div className="series">
				{SeriesData.map(card)}
			</div>
			<Footer />
		</React.Fragment>
    );
}

export default App;