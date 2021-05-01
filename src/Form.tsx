import React, { useState, useEffect } from 'react';
import './styles/components/Form.scss';
import { Link } from 'react-router-dom';

function Form() {
	const [destination, setDestination] = useState('/');
	const [amount, setAmount] = useState(500);
	const [time, setTime] = useState(3);

	useEffect(() => {
		let formType = document.getElementsByClassName('Form__select-type')[0];
		setDestination((formType as HTMLSelectElement).value);
		formType.addEventListener('change', (e) => {
			let target = e.target as HTMLSelectElement;
			setDestination(`/${target.value}`);
		});

		let formAmount = document.getElementsByClassName(
			'Form__select-amount'
		)[0];
		formAmount.addEventListener('change', (e) => {
			let target = e.target as HTMLSelectElement;
			setAmount(parseInt(target.value));
		});

		let formTime = document.getElementsByClassName('Form__select-time')[0];
		formTime.addEventListener('change', (e) => {
			let target = e.target as HTMLSelectElement;
			setTime(parseInt(target.value));
		});
	}, []);

	return (
		<div className="Form centered">
			<Link to={destination} className="Form__start">
				Show me
			</Link>{' '}
			a{' '}
			<select className="Form__select Form__select-type">
				<option value="blocks">Blocks</option>
				<option value="spiral">Spiral</option>
			</select>{' '}
			with max value of{' '}
			<select className="Form__select Form__select-amount">
				<option value="100">100</option>
				<option value="500">500</option>
				<option value="1000">1000</option>
				<option value="2000">2000</option>
			</select>{' '}
			and timing of{' '}
			<select className="Form__select Form__select-time">
				<option value="1">1ms</option>
				<option value="3">3ms</option>
				<option value="5">5ms</option>
				<option value="10">10ms</option>
				<option value="30">30ms</option>
			</select>
		</div>
	);
}

export default Form;
