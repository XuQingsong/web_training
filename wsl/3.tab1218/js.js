var spans = document.getElementsByTagName('span');
		var img = document.getElementById('img');
		var dot = document.getElementById('dot');
		var prev = document.getElementById('prev');
		var next = document.getElementById('next');
		var i = 0;

		var imgArray = ['1.jpg', '2.jpg', '3.jpg', '3.png'];
		var imgLength = imgArray.length;

		var str = '';
		for (var k = 1; k <= imgLength; k++) {
			if (k == 1) {
				str += '<span class="active" id="' + k + '"></span> ';
			} else {
				str += '<span id="' + k + '"></span> ';
			}
		}
		dot.innerHTML = str;

		
		function restartInterval() {
			interval = setInterval(function () {
				if (i == imgLength) {
					i = 0;
				}
				for (var a = 0; a < spans.length; a++) {
					spans[a].classList.remove('active'); 
				}
				document.getElementById(i + 1).classList.add('active'); 
				img.src = './images/' + imgArray[i++];
			}, 1000);
		}
		restartInterval();
		

		prev.onclick = function () {
			clearInterval(interval);
			if (i == 0) {
				i = imgLength;
			}

			for (var a = 0; a < spans.length; a++) {
				spans[a].classList.remove('active'); 
			}
			document.getElementById(i).classList.add('active'); 
			img.src = './images/' + imgArray[--i];
			restartInterval();
		}

		
		next.onclick = function () {
			clearInterval(interval);
			if (i == imgLength - 1) {
				i = -1;
			}
			for (var a = 0; a < spans.length; a++) {
				spans[a].classList.remove('active'); 
			}
			document.getElementById(i + 2).classList.add('active'); 
			img.src = './images/' + imgArray[++i];
			restartInterval();
		}