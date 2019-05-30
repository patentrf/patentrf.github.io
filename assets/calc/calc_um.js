var c, price, dutySum, finalSum, tradeMarkSelect;
//пункт 1.2
	var inval1 = 98;
	var alone1 = 245;
	var sub1 = 343;
	var ip1 = 980;

//пункт 1.10
	var inval2 = 175;
	var alone2 = 437.5;
	var sub2 = 612.5;
	var ip2 = 1750;

//пункт 1.18
	var default3 = 2100;
	var inval3 = 210;
	var alone3 = 525;
	var sub3 = 735;
	var ip3 = 2100;

//пункт 1.19.1
	var poshlina19 = 1050;


	window.onload = function() {
		dutySum = document.getElementById("duty_sum");
		finalSum = document.getElementById("Sum");
		tradeMarkSelect = document.getElementById("tm").value;
		typeSelect = document.getElementById("type");
		onCalculate();
		}
	onCalculate();
	function onCalculate() {

			if (document.getElementById('tm').value == "1") {a = ip2+ip1};
			if (document.getElementById('tm').value == "2") {a = inval2+inval1};
			if (document.getElementById('tm').value == "3") {a = alone2+alone1};
			if (document.getElementById('tm').value == "4") {a = sub2+sub1};
			//пошлина по п. 1.2 и п. 1.10

			if (document.getElementById('tm').value == "1") {b = poshlina19+ip3};
			if (document.getElementById('tm').value == "2") {b = poshlina19+inval3};
			if (document.getElementById('tm').value == "3") {b = poshlina19+alone3};
			if (document.getElementById('tm').value == "4") {b = poshlina19+sub3};
			//пошлина по п. 1.18 и п. 1.19.1

			
			duty_sum.innerHTML = a.toFixed(2);
			job_sum.innerHTML = b.toFixed(2);

			Sum.innerHTML = (a + b).toFixed(2);
			//итого
};
