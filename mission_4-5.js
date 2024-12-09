function omikujishow(){
	var message1 = "大吉";
	var message2 = "中吉";
	var message3 = "小吉";

	var omikuji = new Array(message1,message2,message3);
		
	var number1 = Math.random();
	var number2 = number1 * 3;
	var number = Math.floor(number2);
	var message = omikuji[number];
	
	var object = document.getElementById("message1");
	message1.style.color = "red";
	object.innerText = message;
}