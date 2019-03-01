function updateClock() {
	var time = new Date();
	var yearTime = Math.round(((((((Date.now() / 1000) / 60) / 60) / 24) / 365) - (time.getFullYear() - 1970)) * 31536000);
	yearTimeHex = yearTime.toString(16);
	yearTimeBinary = yearTime.toString(2);
	yearTimeOctal = yearTime.toString(8);
	document.getElementById("clock").innerHTML = "#" + yearTimeHex;
	document.getElementById("others").innerHTML = "<br>Binary: " + yearTimeBinary + "<br>Octal: " + yearTimeOctal + "<br> Decimal: " + yearTime;
	document.body.style.backgroundColor = "#" + yearTimeHex;

	var hours = time.getHours();
	var minutes = time.getMinutes();
	var seconds = time.getSeconds();
	if (minutes < 10)
		minutes = "0" + minutes;
	if (seconds < 10)
		seconds = "0" + seconds;
	if (hours > 12) {
		hours = Math.abs(hours - 12);
		seconds += " PM";
	} else
		seconds += " AM";

	var timeOutput = hours + ":" + minutes + ":" + seconds;
	document.getElementById("currentTime").innerHTML = "<br>" + timeOutput;

	var red = parseInt(yearTimeHex[0], 10);
	var green = parseInt(yearTimeHex[2], 10);
	var blue = parseInt(yearTimeHex[4], 10);

	if ((red * 0.299) + (green * 0.587) +  (blue * 0.114) > 8.2) {
		document.getElementById("body").style.color = "#000000";
	} else {
		document.getElementById("body").style.color = "#ffffff";
	}
}
setInterval(updateClock, 1000);
