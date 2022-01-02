import React, { useContext } from 'react';
import TipPercentOptions from './TipPercentOptions';
import { TipContext } from './TipContext';

const TipInfo = () => {
	const [
		bill,
		people,
		tipPercent,
		setBill,
		setPeople,
		setTipPercent,
		activeButton,
		setActiveButton,
		customTip,
		setCustomTip
	] = useContext(TipContext);

	let peopleType = '';
	if (people !== '' && isNaN(parseInt(people))) {
		peopleType = 'string';
	}

	let billType = '';
	if (bill !== '' && isNaN(parseInt(bill))) {
		billType = 'string';
	}

	const updateBill = (e) => {
		setBill(e.target.value);
	};

	const updatePeople = (e) => {
		setPeople(e.target.value);
	};

	return (
		<div className="tip-info-container">
			<form className="tip-info-form">
				{/* Bill Amount */}
				<label htmlFor="bill-amount" className="tip-info-item input-label">
					Bill
				</label>

				<input
					type="text"
					id="bill-amount"
					placeholder="0"
					className="tip-info-item"
					value={bill}
					style={
						bill === '0' || billType === 'string' ? (
							{ border: 'solid #FF7878', borderWidth: '2px' }
						) : (
							{ border: '' }
						)
					}
					onChange={updateBill}
				/>

				{/* Tip Percent Options */}
				<p className="tip-info-item input-label">Select Tip %</p>
				<TipPercentOptions
					className="tip-info-item"
					tipPercent={tipPercent}
					setTipPercent={setTipPercent}
					activeButton={activeButton}
					setActiveButton={setActiveButton}
					customTip={customTip}
					setCustomTip={setCustomTip}
				/>

				{/* Number of People */}
				<label htmlFor="people" className="tip-info-item input-label">
					Number of People
				</label>
				<input
					type="text"
					id="people"
					placeholder="0"
					className="tip-info-item"
					value={people}
					style={
						people === '0' || peopleType === 'string' ? (
							{ border: 'solid #FF7878', borderWidth: '2px' }
						) : (
							{ border: '' }
						)
					}
					onChange={updatePeople}
				/>
			</form>
		</div>
	);
};

export default TipInfo;
