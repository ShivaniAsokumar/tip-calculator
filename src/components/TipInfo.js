import React, { useContext, createContext } from 'react';
import TipPercentOptions from './TipPercentOptions';
import { TipContext } from './TipContext';

const TipInfo = () => {
	const [ setBill, setPeople ] = useContext(TipContext);

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
				<label htmlFor="bill-amount" className="tip-info-item">
					Bill
				</label>
				<input type="text" id="bill-amount" placeholder="0" className="tip-info-item" onChange={updateBill} />

				{/* Tip Percent Options */}
				<p className="tip-info-item">Select Tip %</p>
				<TipPercentOptions className="tip-info-item" />

				{/* Number of People */}
				<label htmlFor="people" className="tip-info-item">
					Number of People
				</label>
				<input type="text" id="people" placeholder="0" className="tip-info-item" onChange={updatePeople} />
			</form>
		</div>
	);
};

export default TipInfo;
