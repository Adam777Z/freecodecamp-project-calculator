const projectName = 'javascript-calculator';
localStorage.setItem('example_project', 'Javascript Calculator');

const keys = {
	48: 'zero',
	96: 'zero',
	49: 'one',
	97: 'one',
	50: 'two',
	98: 'two',
	51: 'three',
	99: 'three',
	52: 'four',
	100: 'four',
	53: 'five',
	101: 'five',
	54: 'six',
	102: 'six',
	55: 'seven',
	103: 'seven',
	56: 'eight',
	104: 'eight',
	57: 'nine',
	105: 'nine',
	190: 'decimal',
	110: 'decimal',
	107: 'add',
	109: 'subtract',
	106: 'multiply',
	111: 'divide',
	13: 'equals',
	46: 'clear'
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

		const key = keys[event2.which];

		if (key !== undefined) {
			document.querySelector('#'+key).dispatchEvent(new Event('click'));
		}
	});
});