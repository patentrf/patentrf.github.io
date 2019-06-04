		var a, b, c, job, dutySum, finalSum, tradeMarkSelect;
			var a = 3000;
			var b = 4500;
			var job = 12000;
		window.onload = function() {
			dutySum = document.getElementById("duty_sum");
			finalSum = document.getElementById("Sum");
			tradeMarkSelect = document.getElementById("tm");
			typeSelect = document.getElementById("type");


						onCalculate();
			}
			onCalculate();

			
			function onCalculate() {
			if (document.getElementById('type2').value == "2") {duty_sum.innerHTML = a} else {duty_sum.innerHTML = b};
			//пошлина
			
			job_sum.innerHTML = ~~job;
			//стоимость работ

			Sum.innerHTML = (~~job) + (~~(duty_sum.innerHTML));
			//итого

		}
