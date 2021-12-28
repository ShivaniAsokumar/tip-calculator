import React from 'react';
import '../style/App.scss';

const TipAmountDisplay = () => {
	return (
		<div className="tip-amount-display-container">
			<div className="total-amount">
				<p>
					Total Amount
					<span>/ person</span>
					<span> $0.00</span>
				</p>
			</div>
			<div className="total-person">
				<p>
					Total
					<span>/ person</span>
					<span> $0.00</span>
				</p>
			</div>
			<button type="submit">Reset</button>
		</div>
	);
};

export default TipAmountDisplay;
