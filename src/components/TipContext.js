import React, { useState, createContext } from 'react';

export const TipContext = createContext();

export const TipProvider = (props) => {
	const [ bill, setBill ] = useState('');
	const [ people, setPeople ] = useState('');
	const [ tipPercent, setTipPercent ] = useState('');
	const [ activeButton, setActiveButton ] = useState('');

	return (
		<TipContext.Provider
			value={[ bill, people, tipPercent, setBill, setPeople, setTipPercent, activeButton, setActiveButton ]}>
			{props.children}
		</TipContext.Provider>
	);
};
