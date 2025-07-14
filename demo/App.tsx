import React from 'react';
import { Chart } from 'chase-charts';

export const App = () => {
	const testData = [
		{ x: 10, y: 20 },
		{ x: 15, y: 30 },
		{ x: 20, y: 40 },
		{ x: 25, y: 50 },
		{ x: 30, y: 60 },
		{ x: 35, y: 70 },
		{ x: 40, y: 80 },
		{ x: 45, y: 90 },
		{ x: 50, y: 100 },
		{ x: 55, y: 110 },
	];

	return (
		<div>
			<h1>Charts Demo</h1>
			<Chart data={testData} />
		</div>
	);
};
