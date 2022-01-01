import React, { useContext } from 'react';
import { TipContext } from './TipContext';
import '../style/App.scss';

const TipAmountDisplay = () => {
	const [ bill, people, tipPercent, setBill, setPeople, setTipPercent, activeButton, setActiveButton ] = useContext(
		TipContext
	);

	let tipAmountPerPerson;
	let totalAmountPerPerson;

	if (people === '0' || !people) {
		tipAmountPerPerson = 0;
	} else {
		tipAmountPerPerson = bill * (tipPercent / 100) / people;
	}

	if ((people === '0' || !people) && tipAmountPerPerson === 0) {
		totalAmountPerPerson = 0;
	} else {
		totalAmountPerPerson = bill / people + tipAmountPerPerson;
	}

	const handleClick = () => {
		setBill('');
		setPeople('');
		setTipPercent('');
		setActiveButton('');
	};

	return (
		<div className="tip-amount-display-container">
			<div className="tip-amount">
				<p>
					Tip Amount <span className="amount-display"> ${tipAmountPerPerson.toFixed(2)} </span>
				</p>
				<span className="per-person">/ person</span>
			</div>

			<div className="total-person">
				<p>
					Total <span className="amount-display"> ${totalAmountPerPerson.toFixed(2)}</span>
				</p>
				<span className="per-person">/ person</span>
			</div>
			<button type="submit" id="reset-button" onClick={handleClick}>
				RESET
			</button>
		</div>
	);
};

export default TipAmountDisplay;
