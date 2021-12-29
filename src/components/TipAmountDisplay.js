import React, { useState, useContext } from 'react';
import { TipContext } from './TipContext';
import '../style/App.scss';

const TipAmountDisplay = () => {
	const [ bill, people, tipPercent, setBill ] = useContext(TipContext);

	let tipAmountPerPerson = bill * (tipPercent / 100) / people;
	let totalAmountPerPerson = bill / people + tipAmountPerPerson;

	const handleClick = () => {
		setBill('0');
	};

	return (
		<div className="tip-amount-display-container">
			<div className="tip-amount">
				<p>
					Tip Amount
					<span className="per-person">/ person</span>
					<span className="amount-display"> ${tipAmountPerPerson} </span>
				</p>
			</div>
			<div className="total-person">
				<p>
					Total
					<span className="per-person">/ person</span>
					<span className="amount-display"> ${totalAmountPerPerson}</span>
				</p>
			</div>
			<button type="submit" id="reset-button" onClick={handleClick}>
				RESET
			</button>
		</div>
	);
};

export default TipAmountDisplay;
