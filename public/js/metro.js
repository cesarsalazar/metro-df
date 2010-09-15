$(function(){
	
	var metro = Raphael( "metro-container", 800, 800 );
	
	var linea6 = metro.path("M 160 50 L 200 100 L 250 140 L 340 130 L 420 150");
	
	linea6.attr({
		"stroke": 			"#F00", 
		"stroke-width": 5
	});
	
	var linea7 = metro.path("M 160 50 L 190 160 L 230 220 L 220 280 L 210 370 L 210 470");
	
	linea7.attr({
		"stroke": 			"#EFA106", 
		"stroke-width": 5
	})
	
	var linea8 = metro.path("M 50 360 L 125 360 L 210 370 L 290 385 L 330 420")
	
	linea8.attr({
		"stroke": 			"#00F", 
		"stroke-width": 5
	})

//Estaciones

	rosario = metro.circle(160, 50, 5).attr("fill", "#FFF");
	$("circle").last().attr({"name": "Rosario", "id": "rosario"});
	tezozomoc = metro.circle(200, 100, 5).attr("fill", "#FFF");
	$("circle").last().attr({"name": "Tezozomoc", "id": "tezozomoc"});
	azcapotzalco = metro.circle(250, 140, 5).attr("fill", "#FFF");
	$("circle").last().attr({"name": "Azcapotazalco", "id": "azcapotzalco"});
	
	ferreria = metro.circle(340, 130, 5).attr("fill", "#FFF");
	norte45 = metro.circle(420, 150, 5).attr("fill", "#FFF");
	
	aquilesSerdan = metro.circle(190, 160, 5).attr("fill", "#FFF");
	camarones = metro.circle(230, 220, 5).attr("fill", "#FFF");
	refineria = metro.circle(220, 280, 5).attr("fill", "#FFF");
	tacuba = metro.circle(210, 370, 5).attr("fill", "#FFF");
	sanJoaquin = metro.circle(210, 470, 5).attr("fill", "#FFF");
	
	cuatroCaminos = metro.circle(50, 360, 5).attr("fill", "#FFF");
	panteones = metro.circle(125, 360, 5).attr("fill", "#FFF");
	cuitlahuac = metro.circle(290, 385, 5).attr("fill", "#FFF");
	popotla = metro.circle(330, 420, 5).attr("fill", "#FFF");
	
	$(document).delegate("circle", "click", function(){
		
		alert($(this).attr("name"));
	
	})
		
	console.log('Alive!');


})



