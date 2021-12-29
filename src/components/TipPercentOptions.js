import React, { useState } from 'react';
import { TipContext } from './TipContext';
import '../style/App.scss';

const TipPercentOptions = ({ setTipPercent }) => {
	const updateTipPercent = (percent) => {
		setTipPercent(percent);
	};

	const updateCustomTipPercent = (e) => {
		setTipPercent(e.target.value);
	};
	return (
		<div className="tip-percent-container">
			<input
				type="button"
				value="5%"
				id="five"
				className="tip-percent-item"
				onClick={() => updateTipPercent('5')}
			/>
			<input
				type="button"
				value="10%"
				id="ten"
				className="tip-percent-item"
				onClick={() => updateTipPercent('10')}
			/>
			<input
				type="button"
				value="15%"
				id="fifteen"
				className="tip-percent-item"
				onClick={() => updateTipPercent('15')}
			/>
			<input
				type="button"
				value="20%"
				id="twenty"
				className="tip-percent-item"
				onClick={() => updateTipPercent('20')}
			/>
			<input
				type="button"
				value="50%"
				id="fifty"
				className="tip-percent-item"
				onClick={() => updateTipPercent('50')}
			/>
			<input
				type="text"
				placeholder="Custom"
				id="custom"
				className="tip-percent-item"
				onChange={updateCustomTipPercent}
			/>
		</div>
	);
};

export default TipPercentOptions;
