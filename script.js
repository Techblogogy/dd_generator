window.onload = function () {
	var len = $("#words").children().length;
	console.log(len);

	var txt = "";
	for (var i=0; i<2; i++) {
		var id = getRandomInt(0,len);
		var t = $($("#words").children()[id]).text();

		txt+=t+" ";
	}
	$("#name").text(txt);
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
