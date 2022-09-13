function relogio() {
	var data = new Date();
	var hr = data.getHours();
	var min = data.getMinutes();
	var sec = data.getSeconds();

	if(hr < 10) {
		hr = '0' + hr;
	}

	if(min < 10) {
		min = '0' + min;
	}

	if(sec < 10) {
		sec = '0' + sec;
	}

	var horas = hr+':'+min+':'+sec;
	document.getElementById('rel').innerText = horas
}

var tempo = setInterval(relogio,1000);

