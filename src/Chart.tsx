import React, { useEffect, useRef, useState } from 'react';

export const Chart = ({ data }: { data: { x: number; y: number }[] }) => {
	const ref = useRef<HTMLCanvasElement | null>(null);

	const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
	const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);

	useEffect(() => {
		if (ref.current) {
			setCanvas(ref.current);
			setCtx(ref.current.getContext('2d'));
		}
	}, [ref.current]);

	useEffect(() => {
		if (canvas && ctx) {
			if (data.length) {
				ctx.beginPath();
				for (let i = 0; i < data.length; i++) {
					if (i === 0) {
						ctx.moveTo(data[i].x, data[i].y);
					} else {
						ctx.lineTo(data[i].x, data[i].y);
					}
				}
				ctx.stroke();
			}
		}
	}, [canvas, ctx]);

	return (
		<canvas
			ref={ref}
			style={{
				width: '100%',
				height: '100%',
			}}
		></canvas>
	);
};

export default Chart;
