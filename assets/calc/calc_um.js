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

			if (document.getElementById('tm').value == "1") {duty_sum.innerHTML = ip2+ip1};
			if (document.getElementById('tm').value == "2") {duty_sum.innerHTML = inval2+inval1};
			if (document.getElementById('tm').value == "3") {duty_sum.innerHTML = alone2+alone1};
			if (document.getElementById('tm').value == "4") {duty_sum.innerHTML = sub2+sub1};
			if (document.getElementById('tm').value == "5") {duty_sum.innerHTML = ip2+ip1};
			//пошлина по п. 1.2 и п. 1.10

			if (document.getElementById('tm').value == "1") {job_sum.innerHTML = poshlina19+ip3};
			if (document.getElementById('tm').value == "2") {job_sum.innerHTML = poshlina19+inval3};
			if (document.getElementById('tm').value == "3") {job_sum.innerHTML = poshlina19+alone3};
			if (document.getElementById('tm').value == "4") {job_sum.innerHTML = poshlina19+sub3};
			if (document.getElementById('tm').value == "5") {job_sum.innerHTML = poshlina19+ip3};
			//пошлина по п. 1.18 и п. 1.19.1

			Sum.innerHTML = (~job_sum.innerHTML) + (~duty_sum.innerHTML);
			//итого
};
		
