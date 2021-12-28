import React from 'react';
import '../style/App.scss';

const TipPercentOptions = () => {
	return (
		<div className="tip-percent-container">
			<input type="button" value="5%" id="five" className="tip-percent-item" />
			<input type="button" value="10%" id="ten" className="tip-percent-item" />
			<input type="button" value="15%" id="fifteen" className="tip-percent-item" />
			<input type="button" value="20%" id="twenty" className="tip-percent-item" />
			<input type="button" value="50%" id="fifty" className="tip-percent-item" />
			<input type="text" placeholder="Custom" id="custom" className="tip-percent-item" />
		</div>
	);
};

export default TipPercentOptions;
