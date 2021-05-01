import React, { useState, useEffect, useRef } from 'react';
import Queue from '../Queue';
import Block from '../Block';

function Blocks() {
	const canvasRef: React.RefObject<HTMLCanvasElement> = React.createRef();
	let BLOCK_QUEUE = new Queue<Block>(20);

	useEffect(() => {
		if (!canvasRef.current) return;

		const canvas = document.getElementsByClassName(
			'blocks__canvas'
		)[0] as HTMLCanvasElement;

		fitCanvas(canvas);

		const ctx = canvasRef.current.getContext('2d');
		if (!ctx) return;
		ctx.fillRect(canvas.width / 2 - 50, canvas.height / 2 - 50, 100, 100);
		ctx.fillRect(canvas.width / 2 - 160, canvas.height / 2 - 50, 100, 100);
		ctx.fillRect(canvas.width / 2 - 160, canvas.height / 2 - 160, 210, 100);
		ctx.fillRect(canvas.width / 2 + 60, canvas.height / 2 - 160, 210, 210);
		ctx.fillRect(canvas.width / 2 - 160, canvas.height / 2 + 60, 430, 210);

		BLOCK_QUEUE.bounce(
			new Block(canvas.width / 2 - 50, canvas.height / 2 - 50, 100, 100)
		);

		console.log(BLOCK_QUEUE);
	}, [BLOCK_QUEUE, canvasRef]);

	function fitCanvas(canvas: HTMLCanvasElement): void {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	}

	return (
		<div className="blocks">
			<canvas className="blocks__canvas" ref={canvasRef}></canvas>
		</div>
	);
}

export default Blocks;
