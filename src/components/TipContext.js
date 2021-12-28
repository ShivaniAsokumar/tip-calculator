import React, { useState, createContext } from 'react';

export const TipContext = createContext();

export const TipProvider = (props) => {
	const [ bill, setBill ] = useState('');
	const [ people, setPeople ] = useState('');

	return <TipContext.Provider value={[ setBill, setPeople ]}>{props.children}</TipContext.Provider>;
};
