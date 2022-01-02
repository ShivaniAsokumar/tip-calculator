import React from 'react';
import '../style/App.scss';

const TipPercentOptions = ({ tipPercent, setTipPercent, activeButton, setActiveButton, customTip, setCustomTip }) => {
	const updateTipPercent = (percent, id) => {
		setTipPercent(percent);
		setActiveButton(id);
	};

	const updateCustomTipPercent = (e) => {
		// setTipPercent(e.target.value);
		setCustomTip(e.target.value);
	};

	const percentOptions = [
		{ value: '5%', id: 'five', percent: 5 },
		{ value: '10%', id: 'ten', percent: 10 },
		{ value: '15%', id: 'fifteen', percent: 15 },
		{ value: '20%', id: 'twenty', percent: 20 },
		{ value: '50%', id: 'fifty', percent: 50 }
	];

	let customType = '';
	if (customTip !== '' && isNaN(parseInt(customTip))) {
		customType = 'string';
	}

	return (
		<div className="tip-percent-container">
			{percentOptions.map((option) => (
				<input
					type="button"
					key={option.id}
					value={option.value}
					id={option.id}
					className="tip-percent-item"
					style={
						activeButton === option.id ? (
							{ backgroundColor: '#26c0ab', color: '#00494d' }
						) : (
							{ backgroundColor: '' }
						)
					}
					onClick={() => updateTipPercent(option.percent, option.id)}
				/>
			))}
			<input
				type="text"
				placeholder="Custom"
				id="custom"
				className="tip-percent-item"
				value={customTip}
				style={
					customTip === '0' || customType === 'string' ? (
						{ border: 'solid #FF7878', borderWidth: '2px' }
					) : (
						{ border: '' }
					)
				}
				onChange={updateCustomTipPercent}
			/>
		</div>
	);
};

export default TipPercentOptions;
