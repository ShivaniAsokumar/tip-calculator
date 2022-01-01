import React, { useState, createContext } from 'react';

export const TipContext = createContext();

export const TipProvider = (props) => {
	const [ bill, setBill ] = useState('');
	const [ people, setPeople ] = useState('');
	const [ tipPercent, setTipPercent ] = useState('');

	return (
		<TipContext.Provider value={[ bill, people, tipPercent, setBill, setPeople, setTipPercent ]}>
			{props.children}
		</TipContext.Provider>
	);
};
