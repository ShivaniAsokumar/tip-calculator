import React, { useContext } from 'react';
import { TipContext } from './TipContext';
import '../style/App.scss';

const TipAmountDisplay = () => {
	const [
		bill,
		people,
		tipPercent,
		setBill,
		setPeople,
		setTipPercent,
		setActiveButton,
		customTip,
		setCustomTip
	] = useContext(TipContext);

	let tipAmountPerPerson;
	let totalAmountPerPerson;

	// Calculates Tip Amount / person
	if (people === '0' || !people || isNaN(people) || isNaN(bill)) {
		tipAmountPerPerson = 0;
	} else if (customTip) {
		tipAmountPerPerson = bill * (customTip / 100) / people;
	} else {
		tipAmountPerPerson = bill * (tipPercent / 100) / people;
	}

	// Calculate Total / person
	if ((people === '0' || !people || isNaN(people) || isNaN(bill)) && tipAmountPerPerson === 0) {
		totalAmountPerPerson = 0;
	} else {
		totalAmountPerPerson = bill / people + tipAmountPerPerson;
	}

	const handleClick = () => {
		setBill('');
		setPeople('');
		setTipPercent('');
		setActiveButton('');
		setCustomTip('');
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
			{!people && !bill && !customTip && !tipPercent ? (
				<button type="submit" id="reset-button" onClick={handleClick} disabled>
					RESET
				</button>
			) : (
				<button type="submit" id="reset-button" onClick={handleClick}>
					RESET
				</button>
			)}
		</div>
	);
};

export default TipAmountDisplay;
