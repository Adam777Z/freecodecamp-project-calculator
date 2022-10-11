const projectName = 'javascript-calculator';
localStorage.setItem('example_project', 'Javascript Calculator');

const keys = {
	'0': 'zero',
	'1': 'one',
	'2': 'two',
	'3': 'three',
	'4': 'four',
	'5': 'five',
	'6': 'six',
	'7': 'seven',
	'8': 'eight',
	'9': 'nine',
	'.': 'decimal',
	'+': 'add',
	'-': 'subtract',
	'*': 'multiply',
	'/': 'divide',
	'Enter': 'equals',
	'Delete': 'clear'
};

var input = 0;
var operation = '';
var operator = '';

function decimalNumber(number) {
	return /\./g.test(number);
}

function handleNumber(number) {
	if (input.toString().length < 14) {
		if (decimalNumber(input)) {
			input = input.toString() + number;
		} else {
			input = (input === 0 ? number : parseFloat(input.toString() + number));
		}

		document.querySelector('#display').textContent = input;
	}
}

function handleOperator(operatorThis) {
	if (operator === '=') {
		operation = '(' + operation + ')' + operatorThis;
	} else if (input === 0 && operator !== '') {
		operation = operation.replace(/.$/, operatorThis);
	} else {
		operation += input + operatorThis;
	}

	operator = operatorThis;
	input = 0;

	document.querySelector('#operation').textContent = (operation.length > 14 ? '...' + operation.substring(operation.length - 14) : operation);
	document.querySelector('#display').textContent = input;
}

document.addEventListener('DOMContentLoaded', (event) => {
	document.querySelector('#clear').addEventListener('click', (event2) => {
		input = 0;
		operation = '';
		operator = '';
		document.querySelector('#operation').innerHTML = '&nbsp;';
		document.querySelector('#display').textContent = '0';
	});

	document.querySelector('#equals').addEventListener('click', (event2) => {
		if (operator !== '=') {
			operation += input;
			operator = '=';
		}

		input = eval(operation);

		document.querySelector('#operation').textContent = (operation.length > 14 ? '...' + operation.substring(operation.length - 14) : operation);
		document.querySelector('#display').textContent = (input.toString().length > 14 ? Number.parseFloat(input).toPrecision(10).replace(/0+$/, '') : input);
	});

	document.querySelector('#decimal').addEventListener('click', (event2) => {
		if (!decimalNumber(input)) {
			input = input + '.';
			document.querySelector('#display').textContent = input;
		}
	});

	document.querySelector('#add').addEventListener('click', (event2) => {
		handleOperator('+');
	});

	document.querySelector('#subtract').addEventListener('click', (event2) => {
		handleOperator('-');
	});

	document.querySelector('#multiply').addEventListener('click', (event2) => {
		handleOperator('*');
	});

	document.querySelector('#divide').addEventListener('click', (event2) => {
		handleOperator('/');
	});

	document.querySelector('#zero').addEventListener('click', (event2) => {
		handleNumber(0);
	});

	document.querySelector('#one').addEventListener('click', (event2) => {
		handleNumber(1);
	});

	document.querySelector('#two').addEventListener('click', (event2) => {
		handleNumber(2);
	});

	document.querySelector('#three').addEventListener('click', (event2) => {
		handleNumber(3);
	});

	document.querySelector('#four').addEventListener('click', (event2) => {
		handleNumber(4);
	});

	document.querySelector('#five').addEventListener('click', (event2) => {
		handleNumber(5);
	});

	document.querySelector('#six').addEventListener('click', (event2) => {
		handleNumber(6);
	});

	document.querySelector('#seven').addEventListener('click', (event2) => {
		handleNumber(7);
	});

	document.querySelector('#eight').addEventListener('click', (event2) => {
		handleNumber(8);
	});

	document.querySelector('#nine').addEventListener('click', (event2) => {
		handleNumber(9);
	});

	document.querySelector('body').addEventListener('keydown', (event2) => {
		// event2.preventDefault();

		const key = keys[event2.key];

		if (key !== undefined) {
			document.querySelector('#'+key).dispatchEvent(new Event('click'));
		}
	});
});