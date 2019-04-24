var b, c, d, imgSearch, dutySum, dutySumPriv, numClasses, finalSum, tradeMarkSelect, finalSum2;

		window.onload = function() {
			dutySum = document.getElementById("duty_sum");
			dutySumPriv = document.getElementById("duty_sum_with_privileges");
			numClasses = document.getElementById("num_classes");
			finalSum = document.getElementById("finalSum");
			tradeMarkSelect = document.getElementById("tm");
			finalSum2 = document.getElementById("finalSum2");
			search_Sum = document.getElementById("search_sum");

			var numClassesRange = document.getElementById("num_classes_range");

			numClasses.value = numClassesRange.value;

			numClassesRange.oninput = function() {
				numClasses.value = numClassesRange.value;
			}
			numClassesRange.onchange = function() {
				numClasses.innerHTML = numClassesRange.value;

						onCalculate();
			}
			onCalculate();
		}

			function onCalculate() {
			if (numClasses.value < 5) {dutySum.innerHTML = (33000 + 2500 * (numClasses.value - 1))} else {dutySum.innerHTML = (33000 + 2500 * (numClasses.value - 1) + 2000 * (numClasses.value - 5))};
			// считаем стоимость поиска по изобр. элементу
			imgSearch = 15000 + (500 * (numClasses.value - 3));
			if (((document.getElementById('tm').value == "2") && document.getElementById('search').value == "1")) {b = c};
			if (numClasses.value < 3) {c = 15000} else {c = imgSearch};
			//if (numClasses.value > 3) {search_sum.innerHTML = ~~imgSearch};
			//
			if (document.getElementById('search').value == "2") {b = 0};
			if (document.getElementById('type').value == "1") {b = 0}
			else if (document.getElementById('type').value == "2" && document.getElementById('search').value == "1") {b = 3000}
			else if (document.getElementById('type').value == "3" && document.getElementById('search').value == "1") {b = 5000};
			if (document.getElementById('tm').value == "2" && document.getElementById('search').value == "1") {b = c};	
						//скрыл "выберите тип поиска"
			if (document.getElementById('search').value == "2") {document.getElementById("type").style.display = "none"} else {document.getElementById("type").style.display = "inline"};
			if (document.getElementById('search').value == "2") {document.getElementById("typeLabel").style.display = "none"} else {document.getElementById("typeLabel").style.display = "inline"};
			if (document.getElementById('search').value == "2") {document.getElementById("type22").style.display = "none"} else {document.getElementById("type22").style.display = "inline"};
			if (document.getElementById('search').value == "2") {document.getElementById("typeLabe2").style.display = "none"} else {document.getElementById("typeLabe2").style.display = "inline"};
			//скрыл типы
			if (document.getElementById('tm').value == "2") {(document.getElementById("typeLabel").style.display = "none") && (document.getElementById("type").style.display = "none")};
			if (document.getElementById('tm').value !== "2") {(document.getElementById("typeLabe2").style.display = "none") && (document.getElementById("type22").style.display = "none")};

			job_sum.innerHTML = 17000;
			//стоимость работ

			dutySumPriv.innerHTML = Math.round (0.7 * ~~dutySum.innerHTML);
			//пошлина со льготами

			search_sum.innerHTML = ~~b;
			//стоимость поиска

			finalSum.innerHTML = Math.round (~~dutySum.innerHTML) + Math.round (~~job_sum.innerHTML) + Math.round(~~b);
			//итого

			finalSum2.innerHTML = Math.round (~~dutySumPriv.innerHTML + ~~job_sum.innerHTML + ~~b);
			//итого со льготами
		}