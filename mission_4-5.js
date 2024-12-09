function omikujishow(){
	var message1 = "大吉！！やったね！";
	var message2 = "中吉！いいことあるかも";
	var message3 = "小吉。今日も一日頑張ろう。";

	var omikuji = new Array(message1,message2,message3);
    var image = ['daikichi.jpg', 'tyuukichi.jpg', 'syoukichi.jpg'];
		
	var number1 = Math.random();
	var number2 = number1 * 3;
	var number = Math.floor(number2);
	var message = omikuji[number];

    main.src = image[number] ;
	
	var object = document.getElementById("omikuji");
	object.innerText = message;
}