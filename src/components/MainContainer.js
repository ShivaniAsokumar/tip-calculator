import React from 'react';
import TipInfo from '../components/TipInfo';
import TipAmountDisplay from './TipAmountDisplay';
import { TipProvider } from './TipContext';

const MainContainer = () => {
	return (
		<div className="main-container">
			<TipProvider>
				<TipInfo className="main-item" />
				<TipAmountDisplay className="main-item" />
			</TipProvider>
		</div>
	);
};

export default MainContainer;
