var b, c, d, imgSearch, dutySum, dutySumPriv, numClasses, finalSum, tradeMarkSelect, finalSum2;

		window.onload = function() {
			firstStage = document.getElementById("first_stage");
			secondStage = document.getElementById("second_stage");
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

			if (numClasses.value < 5) {firstStage.innerHTML = Math.round (0.7 * ( 15000 + 3500 * (numClasses.value - 1)))} else {firstStage.innerHTML = Math.round (0.7 * ((17000 + 3500 * (numClasses.value - 1) + 1000 * (numClasses.value - 5))))};
			//пошлина на 1м этапе (2.1+2.4)

			if (numClasses.value < 5) {secondStage.innerHTML = 18000 * 0.7} else {secondStage.innerHTML = Math.round (0.7 * (18000 + 1000 * (numClasses.value - 5)))};
			//пошлина на 2м этапе (2.11+2.4)

			dutySum = ~~firstStage.innerHTML + ~~secondStage.innerHTML

			imgSearch = 17000 + (500 * (numClasses.value - 3));
			// считаем стоимость поиска по изобр. элементу

			if (((document.getElementById('tm').value == "2") && document.getElementById('search').value == "1")) {b = c};
			if (numClasses.value < 3) {c = 17000} else {c = imgSearch};
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

			job_sum.innerHTML = 11000;
			job_sum2.innerHTML = 7000
			//стоимость работ

			search_sum.innerHTML = ~~b;
			//стоимость поиска

			dutySumPriv.innerHTML = dutySum;
			//стоимость поиска

			finalSum2.innerHTML = Math.round (~~dutySumPriv.innerHTML + ~~job_sum.innerHTML + ~~job_sum2.innerHTML + ~~b);
			//итого со льготами
		}
