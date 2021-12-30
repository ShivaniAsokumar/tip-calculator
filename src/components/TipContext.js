import React, { useState, createContext } from 'react';

export const TipContext = createContext();

export const TipProvider = (props) => {
	const [ bill, setBill ] = useState('0');
	const [ people, setPeople ] = useState('0');
	const [ tipPercent, setTipPercent ] = useState('0');

	return (
		<TipContext.Provider value={[ bill, people, tipPercent, setBill, setPeople, setTipPercent ]}>
			{props.children}
		</TipContext.Provider>
	);
};
