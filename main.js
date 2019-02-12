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
}
setInterval(updateClock, 1000);
