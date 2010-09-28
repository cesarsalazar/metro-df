$(function(){
	
	var metro = Raphael( "metro-container", 800, 800 );
	
	var l1 = metro.path("m 54.75198,454.94139 49.55314,-12.75009 13.10297,-35.08693 18.45885,-22.35862 83.97479,-21.57866 46.5371,3.37979 24.17851,-1.03994 18.19886,-3.11981 14.88408,-7.66951 104.18853,61.48618 22.43985,-13.21043");
	l1.attr({
		    'stroke': '#F248A4',
            'stroke-width': 5
            ,'stroke-linejoin': 'round'
            ,'stroke-linecap': 'round'
	});
	var l2 = metro.path("m 12.89458,255.2738 82.31739,2.37234 31.29556,9.58691 23.39855,19.75878 18.97881,23.91851 39.25756,13.77914 18.71885,5.19969 43.93726,8.57946 -33.01794,236.32532 -7.79952,26.25837 0.77994,20.79871 15.33906,12.47921");
	l2.attr({
		    'stroke': '#1378C7',
            'stroke-width': 5
            ,'stroke-linejoin': 'round'
            ,'stroke-linecap': 'round'
	});
	var l3= metro.path("m 311.92801,139.06103 -5.97963,19.49879 -49.39693,62.91608 -24.1785,58.75635 -0.77995,25.21844 -11.1793,57.45643 -4.67972,26.51835 -12.21923,20.53873 -7.53954,75.39531 -6.75957,28.07825 -44.45724,76.95522 -20.27875,23.65854 -5.19968,27.29829 6.23962,16.11901 8.74753,1.43779 1.00974,15.91939 7.14167,7.0813 0,16.89895");
	l3.attr({
		    'stroke': '#7E9426',
            'stroke-width': 5
            ,'stroke-linejoin': 'round'
            ,'stroke-linecap': 'round'
	});
	
	var l4 = metro.path("m 353.9934,165.57937 0,14.29912 -10.13937,33.01794 -12.21925,30.41811 -4.93969,29.89814 -13.77914,49.9169 -4.41973,39.51755 -5.19968,37.95763 0.51998,44.45724");
	l4.attr({
		    'stroke': '#8ACEB5',
            'stroke-width': 5
            ,'stroke-linejoin': 'round'
            ,'stroke-linecap': 'round'
	});
	var l5 = metro.path("m 218.33383,119.042269 13.65819,39.389041 24.55943,62.26465 16.11899,23.39854 35.35781,15.59902 18.54916,13.40208 17.58859,11.0364 25.47842,6.4996 17.67889,-6.2396 12.73922,9.09943 7.20488,12.22438 4.49439,14.03398 -8.57946,22.6186 1.5599,30.15813 20.27875,12.47922 14.03912,14.81907 11.1793,3.11981");
	l5.attr({
		    'stroke': '#FEE011',
            'stroke-width': 5
            ,'stroke-linejoin': 'round'
            ,'stroke-linecap': 'round'
	});
	var l6 = metro.path("m 70.41879,111.705055 0.4522,8.772644 28.78021,37.757141 15.22147,3.50635 38.72518,-5.13125 32.75796,9.03443 25.02344,-12.54423 61.55118,15.33906 30.41811,21.83864 62.13614,-12.99919");
	l6.attr({
		    'stroke': '#E22D27',  
            'stroke-width': 5
            ,'stroke-linejoin': 'round'
            ,'stroke-linecap': 'round'
	});
	var l7 = metro.path("m 78.6896,117.146239 -21.28578,10.4755 25.47842,30.938081 17.6789,36.13775 -9.87938,110.23315 2.33985,37.43767 -3.63977,24.1785 2.85981,57.19645 17.15894,25.99838 -4.15975,49.65691 -3.89975,29.1182 -4.48472,39.90752 -0.90995,12.64171");
	l7.attr({
		    'stroke': '#F68429',
            'stroke-width': 5
            ,'stroke-linejoin': 'round'
            ,'stroke-linecap': 'round'
	});
	
	var l8= metro.path("m 489.94781,632.5998 -80.15264,-38.97331 -6.43429,-6.25043 -6.71002,-1.51665 -30.56279,7.49132 -11.25937,1.13341 -5.14802,-1.22532 -9.55949,-9.92717 -2.94139,-13.23621 6.25044,-32.72288 -15.99376,-61.03365 -0.36767,-20.58967 -23.53106,-20.95735 -44.01599,-11.21104 -23.81961,-13.42302 1.28685,-31.80369 5.88277,-14.1554 8.27263,-66.73259");
	l8.attr({
		    'stroke': '#009A68',
            'stroke-width': 5
            ,'stroke-linejoin': 'round'
            ,'stroke-linecap': 'round'
	});
	var l9= metro.path("m 104.30512,442.1913 25.32347,-11.25997 71.78677,-1.72835 31.89691,-2.86755 26.20949,-2.75458 44.10792,-1.97922 24.83368,0.6467 29.48996,3.35175 45.38622,0.40113 19.42705,3.33632 11.66266,-0.0607 15.83941,-26.28345");
	l9.attr({
		    'stroke': '#542917',
            'stroke-width': 5
            ,'stroke-linejoin': 'round'
            ,'stroke-linecap': 'round'
	});
	
	var la= metro.path("m 450.26866,402.99337 6.95628,32.1662 74.82139,45.95909 40.444,148.53977 33.09054,10.66249");
	la.attr({
		    'stroke': '#8A2495',
            'stroke-width': 5
            ,'stroke-linejoin': 'round'
            ,'stroke-linecap': 'round'
	});
	var lb = metro.path("m 200.8629,299.73104 30.6781,5.19967 40.55748,6.23961 21.57867,0.51997 19.49878,11.69928 10.46435,31.32805 11.63427,-5.58966 9.35942,-9.09942 62.63344,-34.31273 58.51904,-45.7623 14.2991,-5.19969 8.0595,-0.77995 6.78673,-6.30825 10.34679,-28.99749 85.04015,-208.29912");
	lb.attr({
		    'stroke': '#97A0A7',
            'stroke-width': 5
            ,'stroke-linejoin': 'round'
            ,'stroke-linecap': 'round'
	});
	var l12 = metro.path("m 94.7895,526.17697 35.35781,11.43928 17.67889,3.3798 22.87857,5.19967 26.77835,13.25917 4.93969,14.03914 34.83784,1.5599 21.05869,6.49959 22.61859,4.15974 42.37737,2.07988 31.45804,6.75958 -9.6194,43.93727 -1.55991,28.8582 9.09944,14.81908 11.09665,6.82433 27.64095,2.27511 26.51834,5.45966 21.57867,16.63897 30.15813,4.6797 76.95522,16.11902 15.85901,34.31783");
	l12.attr({
		    'stroke': '#AB9848',
            'stroke-width': 5
            ,'stroke-linejoin': 'round'
            ,'stroke-linecap': 'round'
	});
	
	//Estaciones
	
	var rosario = metro.circle(71.346,120.458,4.1037445).attr("fill","#fff");
	$("circle").last().attr({"name": "Rosario", "id": "rosario"});
	var lblRosario = metro.text(51.346,115.458, 'Rosario').attr({'font-size': 7});
	
	var aquilesSerdan = metro.circle(82.110,157.197,2.8571429).attr("fill","#fff");	
	$("circle").last().attr({"name": "Aquiles Serdan", "id": "aquiles"});
	var lblAquilesSerdan = metro.text(62.110,157.197, 'Aquiles\nSerdan').attr({'font-size': 7});
	
	var camarones = metro.circle(100.125,194.953,2.8571429).attr("fill","#fff");
	$("circle").last().attr({"name": "Camarones", "id": "camarones"});
	var lblCamarones = metro.text(122.125,194.953, 'Camarones').attr({'font-size': 7});
	
	var refineria = metro.circle(97.736,223.723,2.8571429).attr("fill","#fff");
	$("circle").last().attr({"name": "Refineria", "id": "refineria"});
	var lblRefineria = metro.text(117.736,223.723,'Refineria').attr({'font-size': 7});
	
	var tezozomoc = metro.circle(90.095,145.869,2.8571429).attr("fill","#fff");
	$("circle").last().attr({"name": "Tezozomoc", "id": "tezozomoc"});
	var lblCamarones = metro.text(110.095,140.869,"Tezozomoc").attr({'font-size': 7});
	
	
	var azcapotzalco = metro.circle(108.724,160.468,2.8571429).attr("fill","#fff");
	$("circle").last().attr({"name": "Azcapotzalco", "id": "azcapotzalco"});
	var lblAzcapotzalco = metro.text(118.734,171.468,"Azcapotzalco").attr({'font-size': 7});
	
	var ferreria = metro.circle(146.422,157.088,2.8571429).attr("fill","#fff");
	$("circle").last().attr({"name": "Ferreria", "id": "ferreria"});
	var lblFerreria = metro.text(146.422,165.088,"Ferreria").attr({'font-size': 7});
	
	var norte45 = metro.circle(184.990,165.953,2.8571429).attr("fill","#fff");
	$("circle").last().attr({"name": "Norte 45", "id": "norte45"});
	var lblNorte45 = metro.text(184.990,171.953,"Norte 45").attr({'font-size': 7});

	var tacuba = metro.circle(94.736,257.723,4.1037445).attr("fill","#fff");
	$("circle").last().attr({"name": "Tacuba", "id": "tacuba"});
	var lblTacuba = metro.text(109.736,252.723, 'Tacuba').attr({'font-size': 7});	
	
	var sanJoaquin = metro.circle(91.095,305.869,2.8571429).attr("fill","#fff");
	$("circle").last().attr({"name": "San Joaquin", "id": "sanJoaquin"});
	var lblSanJoaquin = metro.text(105.095,307.869,"San\nJoaquin").attr({'font-size': 7});
	
	var cuatroCaminos = metro.circle(20.736,255.723,2.8571429).attr("fill","#fff");
	$("circle").last().attr({"name": "Cuatro Caminos", "id": "cuatroCaminos"});
	var lblCuatroCaminos = metro.text(25.726,244.723,"Cuatro\nCaminos").attr({'font-size': 7});
	
	var panteones = metro.circle(52.736,256.723,2.8571429).attr("fill","#fff");
	$("circle").last().attr({"name": "Panteones", "id": "panteones"});
	var lblPanteones = metro.text(62.736,250.723,"Panteones").attr({'font-size': 7});
	
	var cuitlahuac = metro.circle(126.736,267.723,2.8571429).attr("fill","#fff");
	$("circle").last().attr({"name": "Cuitlahuac", "id": "cuitlahuac"});
	var lblCuitlahuac = metro.text(140.736,260.723,"Cuitlahuac").attr({'font-size': 7});


	var popotla = metro.circle(141.736,280.723,2.8571429).attr("fill", "#FFF");
	$("circle").last().attr({"name": "Popotla", "id": "popotla"});
	var lblPotla = metro.text(156.736,276.723,"Popotla").attr({'font-size': 7});

	
	$(document).delegate("circle", "click", function(){
		
		alert($(this).attr("name"));
	
	})
		
	console.log('Alive!');


})



