$(function(){
	
	var metro = Raphael( "metro-container", 800, 800 );
	var line_defaults = { 'stroke-width': 5,
                        'stroke-linejoin': 'round',
                        'stroke-linecap': 'round',
                        'stroke': '' };
	var l1 = metro.path("m 54.75198,454.94139 49.55314,-12.75009 13.10297,-35.08693 18.45885,-22.35862 83.97479,-21.57866 46.5371,3.37979 24.17851,-1.03994 18.19886,-3.11981 14.88408,-7.66951 104.18853,61.48618 22.43985,-13.21043");
  line_defaults['stroke'] = '#F248A4';
	l1.attr(line_defaults);
	var l2 = metro.path("m 12.89458,255.2738 82.31739,2.37234 31.29556,9.58691 23.39855,19.75878 18.97881,23.91851 39.25756,13.77914 18.71885,5.19969 43.93726,8.57946 -33.01794,236.32532 -7.79952,26.25837 0.77994,20.79871 15.33906,12.47921");
  line_defaults['stroke'] = '#1378C7';
	l2.attr(line_defaults);
	var l3= metro.path("m 311.92801,139.06103 -5.97963,19.49879 -49.39693,62.91608 -24.1785,58.75635 -0.77995,25.21844 -11.1793,57.45643 -4.67972,26.51835 -12.21923,20.53873 -7.53954,75.39531 -6.75957,28.07825 -44.45724,76.95522 -20.27875,23.65854 -5.19968,27.29829 6.23962,16.11901 8.74753,1.43779 1.00974,15.91939 7.14167,7.0813 0,16.89895");
  line_defaults['stroke'] = '#7E9426';
	l3.attr(line_defaults);
	var l4 = metro.path("m 353.9934,165.57937 0,14.29912 -10.13937,33.01794 -12.21925,30.41811 -4.93969,29.89814 -13.77914,49.9169 -4.41973,39.51755 -5.19968,37.95763 0.51998,44.45724");
  line_defaults['stroke'] = '#8ACEB5';
	l4.attr(line_defaults);
	var l5 = metro.path("m 218.33383,119.042269 13.65819,39.389041 24.55943,62.26465 16.11899,23.39854 35.35781,15.59902 18.54916,13.40208 17.58859,11.0364 25.47842,6.4996 17.67889,-6.2396 12.73922,9.09943 7.20488,12.22438 4.49439,14.03398 -8.57946,22.6186 1.5599,30.15813 20.27875,12.47922 14.03912,14.81907 11.1793,3.11981");
  line_defaults['stroke'] = '#FEE011';
	l5.attr(line_defaults);
	var l6 = metro.path("m 70.41879,111.705055 0.4522,8.772644 28.78021,37.757141 15.22147,3.50635 38.72518,-5.13125 32.75796,9.03443 25.02344,-12.54423 61.55118,15.33906 30.41811,21.83864 62.13614,-12.99919");
    line_defaults['stroke'] = '#E22D27';
	  l6.attr(line_defaults);
	var l7 = metro.path("m 78.6896,117.146239 -21.28578,10.4755 25.47842,30.938081 17.6789,36.13775 -9.87938,110.23315 2.33985,37.43767 -3.63977,24.1785 2.85981,57.19645 17.15894,25.99838 -4.15975,49.65691 -3.89975,29.1182 -4.48472,39.90752 -0.90995,12.64171");
    line_defaults['stroke'] = '#F68429';
	  l7.attr(line_defaults);
	
	var l8= metro.path("m 489.94781,632.5998 -80.15264,-38.97331 -6.43429,-6.25043 -6.71002,-1.51665 -30.56279,7.49132 -11.25937,1.13341 -5.14802,-1.22532 -9.55949,-9.92717 -2.94139,-13.23621 6.25044,-32.72288 -15.99376,-61.03365 -0.36767,-20.58967 -23.53106,-20.95735 -44.01599,-11.21104 -23.81961,-13.42302 1.28685,-31.80369 5.88277,-14.1554 8.27263,-66.73259");
  line_defaults['stroke'] = '#009A68';
	l8.attr(line_defaults);
	var l9= metro.path("m 104.30512,442.1913 25.32347,-11.25997 71.78677,-1.72835 31.89691,-2.86755 26.20949,-2.75458 44.10792,-1.97922 24.83368,0.6467 29.48996,3.35175 45.38622,0.40113 19.42705,3.33632 11.66266,-0.0607 15.83941,-26.28345");
  line_defaults['stroke'] = '#542917';
	l9.attr(line_defaults);
	
	var la= metro.path("m 450.26866,402.99337 6.95628,32.1662 74.82139,45.95909 40.444,148.53977 33.09054,10.66249");
    line_defaults['stroke'] = '#8A2495';
	la.attr(line_defaults);
	var lb = metro.path("m 200.8629,299.73104 30.6781,5.19967 40.55748,6.23961 21.57867,0.51997 19.49878,11.69928 10.46435,31.32805 11.63427,-5.58966 9.35942,-9.09942 62.63344,-34.31273 58.51904,-45.7623 14.2991,-5.19969 8.0595,-0.77995 6.78673,-6.30825 10.34679,-28.99749 85.04015,-208.29912");
  line_defaults['stroke'] = '#97A0A7';
	lb.attr(line_defaults);
	var l12 = metro.path("m 94.7895,526.17697 35.35781,11.43928 17.67889,3.3798 22.87857,5.19967 26.77835,13.25917 4.93969,14.03914 34.83784,1.5599 21.05869,6.49959 22.61859,4.15974 42.37737,2.07988 31.45804,6.75958 -9.6194,43.93727 -1.55991,28.8582 9.09944,14.81908 11.09665,6.82433 27.64095,2.27511 26.51834,5.45966 21.57867,16.63897 30.15813,4.6797 76.95522,16.11902 15.85901,34.31783");
  line_defaults['stroke'] = '#AB9848';
	l12.attr(line_defaults);
	
	//Estaciones

	//linea 1	
	var observatorio = metro.circle(66.31,452.186,2.8571429).attr("fill","#FFF");
	var lblObservatorio = metro.text(66.31,462.186,"Observatorio").attr({'font-size': 7});	
	
	var juanacatlan = metro.circle(116.876,409.938,2.8571429).attr("fill","#FFF");
	var lblJuanacatlan = metro.text(140.876,409.938,"Juanacatlan").attr({'font-size': 7});	
	
	var chapultepec = metro.circle(134.63,385.554,2.8571429).attr("fill","#FFF");
	var lblChapultepec = metro.text(110.63,385.554,"Chapultepec").attr({'font-size': 6});	
	
	var sevilla = metro.circle(149.889,381.142,2.8571429).attr("fill","#FFF");
	var lblSevilla = metro.text(135.889,375.142,"Sevilla").attr({'font-size': 7});	
	
	var insurgentes = metro.circle(177.28,373.972,2.8571429).attr("fill","#FFF");
	var lblInsurgentes = metro.text(150.28,367.972,"Insurgentes").attr({'font-size': 7});	
	
	var cuauhtemoc = metro.circle(205.959,366.619,2.8571429).attr("fill","#FFF");
	var lblCuauhtemoc = metro.text(182.959,360.619,"Cuauhtemoc").attr({'font-size': 7});	
	
	var saltoAgua = metro.circle(242.254,365.086,4.1037445).attr("fill","#FFF");
	var lblSaltoAgua = metro.text(233.255,354.086,"Salto del\nAgua").attr({'font-size': 4});	
	
	var isabelCatolica = metro.circle(254.492,366.067,2.8571429).attr("fill","#FFF");
	var lblIsabelCatolica = metro.text(254.492,376.067,"Isabel\nla Católica").attr({'font-size': 4});	
		
	var merced = metro.circle(289.972,364.964,2.8571429).attr("fill","#FFF");
	var lblMerce = metro.text(290.972,372.964,"Merced").attr({'font-size': 7});	
	
	var sanLazaro = metro.circle(324.203,354.792,4.1037445).attr("fill","#FFF");
	var lblSanLazaro = metro.text(348.203,354.792,"San Lázaro").attr({'font-size': 7});	
	
	var moctezuma = metro.circle(344.895,365.516,2.8571429).attr("fill","#FFF");
	var lblMoctezuma = metro.text(366.895,365.516,"Moctezuma").attr({'font-size': 7});		
	
	var balbuena = metro.circle(362.036,377.649,2.8571429).attr("fill","#FFF");
	var lblBalbuena = metro.text(382.036,374.649,"Balbuena").attr({'font-size': 7});	
	
	var bvdPtoAereo = metro.circle(379.316,388.128,2.8571429).attr("fill","#FFF");
	var lblBvdPtoAereo = metro.text(355.319,394.128,"Boulevard\nPto. Aéreo").attr({'font-size': 7});	
	
	var gomezFarias = metro.circle(399.355,399.893,2.8571429).attr("fill","#FFF");
	var lblGomezFarias = metro.text(379.355,406.893,"Gómez Farías").attr({'font-size': 7});	
	
	var zaragoza = metro.circle(422.886,413.497,2.8571429).attr("fill","#FFF");
	var lblZaragoza = metro.text(408.866,418.497,"Zaragoza").attr({'font-size': 7});		
	
	///// linea 2
	var cuatroCaminos = metro.circle(20.736,255.723,2.8571429).attr("fill","#fff");
	$("circle").last().attr({"name": "Cuatro Caminos", "id": "cuatroCaminos"});
	var lblCuatroCaminos = metro.text(25.726,243.723,"Cuatro\nCaminos").attr({'font-size': 7});
	
	var panteones = metro.circle(52.736,256.723,2.8571429).attr("fill","#fff");
	$("circle").last().attr({"name": "Panteones", "id": "panteones"});
	var lblPanteones = metro.text(62.736,248.723,"Panteones").attr({'font-size': 7});
	
	var cuitlahuac = metro.circle(126.736,267.723,2.8571429).attr("fill","#fff");
	$("circle").last().attr({"name": "Cuitlahuac", "id": "cuitlahuac"});
	var lblCuitlahuac = metro.text(140.736,260.723,"Cuitlahuac").attr({'font-size': 7});


	var popotla = metro.circle(141.736,280.723,2.8571429).attr("fill", "#FFF");
	$("circle").last().attr({"name": "Popotla", "id": "popotla"});
	var lblPotla = metro.text(156.736,276.723,"Popotla").attr({'font-size': 7});
	
	var colegioMilitar = metro.circle(155.769,294.555,2.8571429).attr("fill","#FFF");
	var lblColegioMilitar = metro.text(170.769,289.555,"Colegio\nMilitar").attr({'font-size': 7});
	
	var normal = metro.circle(168.822,309.997,2.8571429).attr("fill","#FFF");
	var lblNormal = metro.text(182.822,304.997,"Normal").attr({'font-size': 7});
	
	var sanCosme = metro.circle(189.228,318.098,2.8571429).attr("fill","#FFF");
	var lblSanCosme = metro.text(165.228,321.098,"San Cosme").attr({'font-size': 7});
			
	var revolucion = metro.circle(208.53,324.52,2.8571429).attr("fill","#FFF");
	var lblRevolucion = metro.text(192.53,331.52,"Revolución").attr({'font-size': 7});
	
	var hidalgo = metro.circle(226.953,329.698,4.1037445).attr("fill","#FFF");
	var lblHidalgo = metro.text(238.953,318.698,"Hidalgo").attr({'font-size': 6}).rotate(-45,true);
	
	var bellasArtes = metro.circle(246.851,334.018,4.1037445).attr("fill","#FFF");
	var lblBellasArtes = metro.text(258.851,325.018,"Bellas\nArtes").attr({'font-size': 6});
	
	var allende = metro.circle(260.374,336.286,2.8571429).attr("fill","#FFF");
	var lblAllende= metro.text(280.374,332.286,"Allende").attr({'font-size': 6});
	
	var zocalo = metro.circle(269.75,346.029,2.8571429).attr("fill","#FFF");
	var lblZocalo = metro.text(283.75,342.029,"Zócalo").attr({'font-size': 6});
	
	var pinoSuarez = metro.circle(267.857,367.292,4.1037445).attr("fill","#FFF");
	var lblPinoSuarez= metro.text(280.857,354.292,"Pino\nSuárez").attr({'font-size': 6});
	
	var snAntonioAbad = metro.circle(262.351,398.099,2.8571429).attr("fill","#FFF");
	var lblSnAntonioAbad = metro.text(284.351,398.099,"San Antonio\nAbad").attr({'font-size':6});
	
	var chabacano = metro.circle(260.043,423.73,4.1037445).attr("fill","#FFF");
	var lblChabacano = metro.text(279.043,415.73,"Chabacano").attr({'font-size':6});
	
	var viaducto = metro.circle(255.365,448.47,2.8571429).attr("fill","#FFF");
	var lblViaducto = metro.text(274.365,448.47,"Viaducto").attr({'font-size':7});
	
	var xola = metro.circle(252.423,468.692,2.8571429).attr("fill","#FFF");
	var lblXola = metro.text(265.423,468.692,"Xola").attr({'font-size':7});
	
	var villaCortes = metro.circle(249.482,490.385,2.8571429).attr("fill","#FFF");
	lblVillaCortes = metro.text(276.482,490.385,"Villa de Cortés").attr({'font-size':7});
	
	var nativitas = metro.circle(245.989,514.468,2.8571429).attr("fill","#FFF");
	lblNativitas = metro.text(264.989,514.468,"Nativitas").attr({'font-size':7});
	
	var portales = metro.circle(240.842,549.948,2.8571429).attr("fill","#FFF");
	var lblPortales = metro.text(258.842,549.948,"Portales").attr({'font-size':7});
	
	var ermita = metro.circle(237.591,575.119,4.1037445).attr("fill","#FFF");
	var lblErmita = metro.text(252.591,569.119,"Ermita").attr({'font-size':7});
	
	var generalAnaya = metro.circle(229.309,600.961,2.8571429).attr("fill","#FFF");
	var lblGeneralAnaya = metro.text(245.309,600.961,"General\nAnaya").attr({'font-size':7});
	
	
	var tasqueña = metro.circle(240.488,629.3,2.8571429).attr("fill","#FFF");
	var lblTasqueña = metro.text(253.488,621.3,"Tasqueña").attr({'font-size':7});

	//linea 3	
	var indiosVerdes = metro.circle(309.978,144.487,2.8571429).attr("fill","#FFF");
	var lblIndiosVerdes = metro.text(339.978,144.487,"Indios Verdes").attr({'font-size':7});
	
	var potrero = metro.circle(273.394,199.821,2.8571429).attr("fill","#FFF");
	var lblPotrero = metro.text(290.394,199.821,"Potrero").attr({'font-size': 7});	
	
	var tlatelolco = metro.circle(235.066,273.831,2.8571429).attr("fill","#FFF");
	var lblTlatelolco  = metro.text(255.066,273.831,"Tlatelolco").attr({'font-size': 7});	
	
	var guerrero = metro.circle(231.821,305.391,4.1037445).attr("fill","#FFF");
	var lblGuerrero = metro.text(245.821,290.391,"Guerrero").attr({'font-size': 7}).rotate(-45,true);	
	
	var juarez = metro.circle(224.067,342.261,2.8571429).attr("fill","#FFF");
	var lblJuarez = metro.text(210.067,342.261,"Juárez").attr({'font-size': 6});	
	
	var balderas = metro.circle(221.07,363.34,4.1037445).attr("fill","#FFF");
	var lblBalderas = metro.text(206.07,355.34,"Balderas").attr({'font-size': 6});	
	
	var niñosHeroes = metro.circle(214.967,389.231,2.8571429).attr("fill","#FFF");
	var lblNiñosHeroes = metro.text(200.967,385.231,"Niños\nHéroes").attr({'font-size': 6});	
	
	var hospitalGeneral = metro.circle(203.753,409.821,2.8571429).attr("fill","#FFF");
	var lblHospitalGeneral = metro.text(185.753,409.821,"Hospital\nGeneral").attr({'font-size': 6});	
	
	var centroMedico = metro.circle(201.884,429.341,4.1037445).attr("fill","#FFF");
	var lblCentroMedico = metro.text(215.884,439.341,"Centro\nMédico").attr({'font-size': 7});	
	
	var etiopia = metro.circle(198.054,464.788,2.8571429).attr("fill","#FFF");
	var lblEtiopia = metro.text(213.054,464.788,"Etiopía").attr({'font-size': 7});	
	
	var eugenia = metro.circle(192.86,498.474,2.8571429).attr("fill","#FFF");
	var lblEugenia = metro.text(210.86,498.474,"Eugenia").attr({'font-size': 7});	
	
	var divisionNorte = metro.circle(187.529,517.041,2.8571429).attr("fill","#FFF");
	var lblDivisionNorte = metro.text(207.529,517.041,"División\ndel NOrte").attr({'font-size': 7});	
	
	var zapata = metro.circle(168.675,547.625,4.1037445).attr("fill","#FFF");
	var lblZapata = metro.text(187.675,542.625,"Zapata").attr({'font-size': 7});	
	
	var coyoacan = metro.circle(152.289,576.913,2.8571429).attr("fill","#FFF");
	var lblCoyoacan = metro.text(172.289,576.913,"Coyoacán").attr({'font-size': 7});	
	
	var viveros = metro.circle(136.69,599.271,2.8571429).attr("fill","#FFF");
	var lblViveros = metro.text(156.69,599.271,"Viveros").attr({'font-size': 7});	
	
	var maQuevedo = metro.circle(123.171,620.85,2.8571429).attr("fill","#FFF");
	var lblMaQuevedo = metro.text(150.171,620.85,"Miguel Ángel\nde Quevedo").attr({'font-size': 7});	
	
	var copilco = metro.circle(131.36,658.288,2.8571429).attr("fill","#FFF");
	var lblCopilco = metro.text(151.36,658.288,"Copilco").attr({'font-size': 7});	
	
	var universidad = metro.circle(142.402,691.031,2.8571429).attr("fill","#FFF");
	var lblUniversidad = metro.text(165.402,691.031,"Universidad").attr({'font-size': 7});	
	
	//linea 4	
	var talisman = metro.circle(343.75,212.624,2.8571429).attr("fill","#FFF");
	var lblTalisman = metro.text(363.75,212.624,"Talisman").attr({'font-size': 7});	
	
	var bondojito = metro.circle(331.79,243.692,2.8571429).attr("fill","#FFF");	
	var lblBondojito = metro.text(351.79,243.692,"Bondojito").attr({'font-size': 7});
	
	var canalNorte = metro.circle(322.112,290.744,2.8571429).attr("fill","#FFF");
	var lblCanalNorte = metro.text(336.116,296.744,"Canal\ndel Norte").attr({'font-size': 7});	
	
	var morelos = metro.circle(313.816,323.172,4.1037445).attr("fill","#FFF");
	var lblMorelos = metro.text(332.816,323.172,"Morelos").attr({'font-size': 7});	
	
	var candelaria  = metro.circle(309.588,362.329,4.1037445).attr("fill","#FFF");
	var lblCandelaria = metro.text(325.588,368.329,"Candelaria").attr({'font-size': 6});	
	
	var frayServando = metro.circle(306.057,380.335,4.1037445).attr("fill","#FFF");
	var lblFrayServando = metro.text(322.057,382.335,"Fray\nServando").attr({'font-size': 6});	
	
	var jamaica = metro.circle(304.072,421.708,4.1037445).attr("fill","#FFF");
	var lblJamaica = metro.text(316.072,412.708,"Jamaica").attr({'font-size': 6});	
	
	var staAnita = metro.circle(303.98,434.944,4.1037445).attr("fill","#FFF");
	var lblStaAnita = metro.text(328.98,434.944,"Santa Anita").attr({'font-size': 7});	
	

	//linea 5
	var politecnico = metro.circle(220.777,126.7,2.8571429).attr("fill","#FFF");
	var lblPolitecnico = metro.text(243.777,126.7,"Politécnico").attr({'font-size': 7});
	
	var autobusesNorte = metro.circle(247.29,196.512,2.8571429).attr("fill","#FFF");
	var lblAutobusesNorte = metro.text(227.29,196.512,"Autobuses\ndel Norte").attr({'font-size': 7});
	
	var laRaza  = metro.circle(257.354,221.416,4.1037445).attr("fill","#FFF");
	var lblLaRaza = metro.text(237.354,221.416,"La Raza").attr({'font-size': 7});
	
	var misterios = metro.circle(285.253,249.932,2.8571429).attr("fill","#FFF");
	var lblMisterios = metro.text(262.253,250.932,"Misterios").attr({'font-size': 7});	
	
	var valleGomez = metro.circle(310.992,262.021,2.8571429).attr("fill","#FFF");
	var lblValleGomez = metro.text(295.992,268.021,"Valle\nGómez").attr({'font-size': 7});
	
	var consulado  = metro.circle(327.038,273.165,4.1037445).attr("fill","#FFF");
	var lblConsulado = metro.text(350.038,265.165,"Consulado").attr({'font-size': 7});
	
	var eduardoMolina = metro.circle(355.129,287.034,2.8571429).attr("fill","#FFF");
	var lblEduardoMolina = metro.text(363.129,275.034,"Eduardo Molina").attr({'font-size': 7});
	
	var aragon = metro.circle(386.84,284.736,2.8571429).attr("fill","#FFF");
	var lblAragon = metro.text(402.84,280.736,"Aragón").attr({'font-size': 7});
	
	var oceania  = metro.circle(407.756,305.891,4.1037445).attr("fill","#FFF");
	var lblOceania = metro.text(427.756,305.891,"Oceanía").attr({'font-size': 7});
		
	var terminalAerea = metro.circle(403.937,342.644,2.8571429).attr("fill","#FFF");
	var lblTerminalAerea = metro.text(433.937,342.644,"Terminal Áerea").attr({'font-size': 7});
	
	var hangares = metro.circle(409.82,375.919,2.8571429).attr("fill","#FFF");
	var lblHangares = metro.text(432.82,375.919,"Hangares").attr({'font-size': 7});
	
	var pantitlan  = metro.circle(450.773,403.141,4.1037445).attr("fill","#FFF");
	var lblPantitlan = metro.text(472.773,403.141,"Pantitlán").attr({'font-size': 7});
	
	/////linea 6	
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
	
	var vallejo = metro.circle(201.018,158.418,2.8571429).attr("fill","#FFF");
	var lblVallejo = metro.text(216.018,165.418,"Vallejo").attr({'font-size': 7});
	
	var institutoPetroleo = metro.circle(232.536,158.36,4.1037445).attr("fill","#FFF");
	var lblInstitutoPetroleo = metro.text(252.536,145.36,"Instituto\ndel Petróleo").attr({'font-size': 7});
	
	var lindaVista = metro.circle(266.274,166.607,2.8571429).attr("fill","#FFF");
	var lblLindaVista = metro.text(257.274,173.607,"Lindavista").attr({'font-size': 7});
	
	var deportivo18marzo  = metro.circle(289.341,180.053,4.1037445).attr("fill","#FFF");
	var lblDeportivo18marzo = metro.text(319.341,173.053,"Deportivo\n18 de Marzo").attr({'font-size': 7});
	
	var laVilla = metro.circle(312.552,188.056,2.8571429).attr("fill","#FFF");
	var lblLaVilla = metro.text(320.552,196.056,"La Villa").attr({'font-size': 7});
	
	var martinCarrera  = metro.circle(354.603,179.318,4.1037445).attr("fill","#FFF");
	var lblMartinCarrera = metro.text(382.603,185.318,"Martin Carrera").attr({'font-size': 7});	
	
	///// linea 7
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
	
	var tacuba = metro.circle(94.736,257.723,4.1037445).attr("fill","#fff");
	$("circle").last().attr({"name": "Tacuba", "id": "tacuba"});
	var lblTacuba = metro.text(109.736,252.723, 'Tacuba').attr({'font-size': 7});	
	
	var sanJoaquin = metro.circle(91.095,305.869,2.8571429).attr("fill","#fff");
	$("circle").last().attr({"name": "San Joaquin", "id": "sanJoaquin"});
	var lblSanJoaquin = metro.text(105.095,307.869,"San\nJoaquin").attr({'font-size': 7});
	
	var polanco = metro.circle(92.958,340.952,2.8571429).attr("fill", "#FFF");
	var lblPolanco = metro.text(111.958,340.952,"Polanco").attr({'font-size': 7});
	
	var auditorio = metro.circle(89.958,368.651,2.8571429).attr("fill", "#FFF");
	var lblAuditorio = metro.text(108.958,368.651,"Auditorio").attr({'font-size': 7});
	
	var constituyentes = metro.circle(91.958,415.651,2.8571429).attr("fill", "#FFF");
	var lblConstituyentes = metro.text(62.958,415.651,"Constituyentes").attr({'font-size': 7});
	
	var tacubaya = metro.circle(104.958,441.651,4.1037445).attr("fill", "#FFF");
	var lblTacubaya = metro.text(78.958,438.651,"Tacubaya").attr({'font-size': 7});
	
	var snPedroPinos = metro.circle(107.127,478.754 ,2.8571429).attr("fill","#FFF");
	var lblsnPedroPinos = metro.text(130.127,478.754,"Sn. Pedro\nde los Pinos").attr({'font-size': 7});
	
	var snAntonio = metro.circle(105.047,502.037,2.8571429).attr("fill","#FFF");
	var lblSnAntonio= metro.text(129.047,502.037,"Sn. Antonio").attr({'font-size': 7});
	
	var mixcoac = metro.circle(102.021,528.439,4.1037445).attr("fill","#FFF");
	var lblMixcoac = metro.text(82.021,534.439,"Mixcoac").attr({'font-size': 7});
	
	var barrancaMuerto = metro.circle(96.598,570.412,2.8571429).attr("fill","#FFF");
	var lblBarrancaMuerto = metro.text(116.598,570.412,"Barranca\ndel Muerto").attr({'font-size': 7});		
	
	//// linea 8	
	var snJuanLetran = metro.circle(244.921,349.441,2.8571429).attr("fill","#FFF");
	var lblSnJuanLetran = metro.text(256.921,350.441,"San Juan\nde Letrán").attr({'font-size': 4});
	
	var doctores = metro.circle(236.338,382.381,2.8571429).attr("fill","#FFF");
	var lblDoctores = metro.text(250.338,390.381,"Doctores").attr({'font-size': 6});
	
	var obrera = metro.circle(235.555,408.256,2.8571429).attr("fill","#FFF");
	var lblObrera = metro.text(249.555,407.256,"Obrera").attr({'font-size': 6});
	
	var laViga = metro.circle(287.904,430.546,2.8571429).attr("fill","#FFF");
	var lblLaViga = metro.text(272.904,436.546,"La Viga").attr({'font-size': 7});
	
	var coyuya = metro.circle(326.555,459.089,2.8571429).attr("fill","#FFF");
	var lblCoyuya = metro.text(346.555,459.089,"Coyuya").attr({'font-size': 7});
	
	var iztacalco = metro.circle(330.6,489.605,2.8571429).attr("fill","#FFF");
	var lblIztacalco = metro.text(350.6,489.605,"Iztacalco").attr({'font-size': 7});
	
	var apatlaco = metro.circle(337.218,516.446,2.8571429).attr("fill","#FFF");
	var lblApatlaco = metro.text(356.218,516.446,"Apatlaco").attr({'font-size': 7});
	
	var aculco = metro.circle(342.549,538.138,2.8571429).attr("fill","#FFF");
	var lblAculco = metro.text(360.549,538.138,"Aculco").attr({'font-size': 7});
	
	var escuadron201 = metro.circle(338.872,560.566,2.8571429).attr("fill","#FFF");
	var lblEscuadron201 = metro.text(366.872,560.566,"Escuadrón 201").attr({'font-size': 7});
	
	var iztapalapa = metro.circle(396.413,585.752,2.8571429).attr("fill","#FFF");
	var lblIztapala = metro.text(410.413,575.752,"Iztapalapa").attr({'font-size': 7});
	
	var cerroEstrella = metro.circle(418.841,598.069,2.8571429).attr("fill","#FFF");
	var lblCerroEstrella = metro.text(395.841,606.069,"C. de la Estrella").attr({'font-size': 7});
	
	var uamI = metro.circle(447.152,611.673,2.8571429).attr("fill","#FFF");
	var lblUamI = metro.text(424.152,614.673,"U.A.M. I").attr({'font-size': 7});
	
	var const1917 = metro.circle(481.162,628.218,2.8571429).attr("fill","#FFF");
	var lblConst1917 = metro.text(447.162,632.218,"Const. de 1917").attr({'font-size': 7});
		
	//// linea 9	
	var patriotismo = metro.circle(129.746,430.867,2.8571429).attr("fill","#FFF");
	var lblPatriotismo = metro.text(139.746,422.867,"Patriotismo").attr({'font-size': 7});	
	
	var chilpancingo = metro.circle(160.919,430.226,2.8571429).attr("fill","#FFF");
	var lblChilpancingo = metro.text(165.919,438.226,"Chilpancingo").attr({'font-size': 7});	
	 
	var lazaroCardenas = metro.circle(232.983,425.998,2.8571429).attr("fill","#FFF");
	var lblLazaroCardenas = metro.text(240.983,435.998,"Lázaro\nCardenas").attr({'font-size': 6});	
	
	var mixiuhca = metro.circle(328.21,422.321,2.8571429).attr("fill","#FFF");
	var lblMixiuhca = metro.text(340.21,416.321,"Mixiuhca").attr({'font-size': 6});	
	
	var velodromo = metro.circle(358.175,425.814,2.8571429).attr("fill","#FFF");
	var lblVelodromo = metro.text(370.175,417.814,"Velódromo").attr({'font-size': 6});	
	
	var cdDeportiva = metro.circle(403.031,425.998,2.8571429).attr("fill","#FFF");
	var lblCdDeportiva = metro.text(403.031,435.998,"Ciudad\nDeportiva").attr({'font-size': 6});	
	
	var puebla = metro.circle(428.217,429.123,2.8571429).attr("fill","#FFF");
	var lblPuebla = metro.text(428.217,436.123,"Puebla").attr({'font-size': 6});	
	
	////linea b	
	var buenavista = metro.circle(211.842,302.275,2.8571429).attr("fill","#FFF");
	var lblBuenavista = metro.text(211.842,292.275,"Buenavista").attr({'font-size': 7});	
	
	var garibaldi = metro.circle(250.215,308.056,4.1037445).attr("fill","#FFF");
	var lblGaribaldi  = metro.text(266.215,290.056,"Garibaldi").attr({'font-size': 7}).rotate(-45,true);	
	
	var lagunilla = metro.circle(273.855,311.609,2.8571429).attr("fill","#FFF");
	var lblLagunilla = metro.text(275.855,304.609,"Lagunilla").attr({'font-size': 7});	
	
	var tepito = metro.circle(293.71,312.253,2.8571429).attr("fill","#FFF");	
	var lblTepito = metro.text(300.71,306.253,"Tepito").attr({'font-size': 7});	
	
	var floresMagon = metro.circle(363.54,329.829,2.8571429).attr("fill","#FFF");
	var lblFloresMagon = metro.text(386.54,329.829,"Flores Magón").attr({'font-size': 6});	
	
	var romeroRubio = metro.circle(383.234,319.04,2.8571429).attr("fill","#FFF");
	var lblRomeroRubio = metro.text(355.234,312.04,"Romero Rubio").attr({'font-size': 7});	
	
	var deportivoOceania = metro.circle(424.281,292.142,2.8571429).attr("fill","#FFF");
	var lblDeportivoOceania = metro.text(458.281,292.142,"Deportivo Oceanía").attr({'font-size': 7});	
	
	var bosqueAragon = metro.circle(459.184,265.104,2.8571429).attr("fill","#FFF");
	var lblBosqueAragon = metro.text(490.184,265.104,"Bosque Aragón").attr({'font-size': 7});	
	
	var villaAragon = metro.circle(487.457,253.08,2.8571429).attr("fill","#FFF");
	var lblVillaAragon = metro.text(514.457,253.08,"Villa Aragón").attr({'font-size': 7});	
	
	var nezahualcoyotl = metro.circle(504.811,218.632,2.8571429).attr("fill","#FFF");
	var lblNezahualcoyotl = metro.text(533.811,218.632,"Nezahualcoyotl").attr({'font-size': 7});	
	
	var impulsora = metro.circle(517.55,187.954,2.8571429).attr("fill","#FFF");
	var lblImpulsora = metro.text(537.55,187.954,"Impulsora").attr({'font-size': 7});	
	
	var rioRemedios = metro.circle(530.549,156.106,2.8571429).attr("fill","#FFF");
	var lblRioRemedios = metro.text(570.549,156.106,"Río de los Remedios").attr({'font-size': 7});	
	
	var muzquiz = metro.circle(542.703,126.858,2.8571429).attr("fill","#FFF");
	var lblMuzquiz = metro.text(562.703,126.858,"Muzquiz").attr({'font-size': 7});	
	
	var ecatepec = metro.circle(559.472,85.39,2.8571429).attr("fill","#FFF");
	var lblEcatepec = metro.text(578.472,85.39,"Ecatepec").attr({'font-size': 7});	
	
	var olimpica = metro.circle(567.792,64.916,2.8571429).attr("fill","#FFF");
	var lblOlimpica = metro.text(585.792,64.916,"Olimpica").attr({'font-size': 7});	
	
	var plazaAragon = metro.circle(578.126,39.503,2.8571429).attr("fill","#FFF");
	var lblPlazaAragon = metro.text(605.126,39.503,"Plaza Aragón").attr({'font-size': 7});	
	
	var cdAzteca = metro.circle(587.031,18.314,2.8571429).attr("fill","#FFF");
	var lblCdAzteca = metro.text(615.031,18.314,"Ciudad Azteca").attr({'font-size': 7});	
		
	////linea a	
	var agricolaOriental = metro.circle(457.079,434.822,2.8571429).attr("fill","#FFF");
	var lblArgricolaOriental = metro.text(492.079,434.822,"Agrícola Oriental").attr({'font-size': 7});
	
	var canalSanJuan = metro.circle(494.582,458.353,2.8571429).attr("fill","#FFF");	
	var lblCanalSanJuan = metro.text(534.582,458.353,"Canal de San Juan").attr({'font-size': 7});
	
	var tepalcate = metro.circle(531.165,481.149,2.8571429).attr("fill","#FFF");
	var lblTepalcate = metro.text(552.165,481.149,"Tepalcates").attr({'font-size': 7});
	
	var guelatao = metro.circle(539.806,510.379,2.8571429).attr("fill","#FFF");
	var lblGuelatao = metro.text(558.806,510.379,"Guelatao").attr({'font-size': 7});
	
	var peñonViejo = metro.circle(550.284,548.617,2.8571429).attr("fill","#FFF");
	var lblPeñonViejo = metro.text(574.284,548.617,"Peñon Viejo").attr({'font-size': 7});
	
	var acatitla = metro.circle(557.638,576.928,2.8571429).attr("fill","#FFF");
	var lblAcatitla = metro.text(578.638,576.928,"Acatitla").attr({'font-size': 7});
	
	var staMarta = metro.circle(566.278,608.915,2.8571429).attr("fill","#FFF");
	var lblStaMarta = metro.text(592.278,608.915,"Santa Marta").attr({'font-size': 7});
	
	var losReyes = metro.circle(576.205,630.424,2.8571429).attr("fill","#FFF");
	var lblLosReyes = metro.text(600.205,625.424,"Los Reyes").attr({'font-size': 7});
	
	var laPaz = metro.circle(593.486,635.755,2.8571429).attr("fill","#FFF");
	var lblLaPaz = metro.text(618.505,635.755,"La Paz").attr({'font-size': 7});
	
	////linea 12	
	var insurgentesSur = metro.circle(126.236,535.264,2.8571429).attr("fill","#FFF");
	var lblInsurgentesSur = metro.text(126.236,520.264,"Insurgentes\nSur").attr({'font-size': 7});
	
	var veinteNoviembre = metro.circle(147.815,540.724,2.8571429).attr("fill","#FFF");
	var lblVeinteNoviembre = metro.text(142.815,552.724,"20 de\nNoviembre").attr({'font-size': 7});
	
	var parqueVenados = metro.circle(196.721,559.324,2.8571429).attr("fill","#FFF");
	var lblParqueVenados = metro.text(216.721,552.324,"Parque de los\nVenados").attr({'font-size': 6});
		
	var ejeCentral = metro.circle(213.45,573.663,2.8571429).attr("fill","#FFF");
	var lblEjeCentral = metro.text(206.45,583.663,"Eje Central").attr({'font-size': 7});
	
	var mexicaltzingo = metro.circle(301.921,586.671,2.8571429).attr("fill","#FFF");
	var lblMexicaltzingo = metro.text(301.921,596.671,"Mexicaltzingo").attr({'font-size': 7});
	
	var atlalilco = metro.circle(355.362,594.882,4.1037445).attr("fill","#FFF");
	var lblAtlalilco = metro.text(360.362,584.882,"Atlalilco").attr({'font-size': 7});
	
	var puebloCulhuacan = metro.circle(345.123,638.145,2.8571429).attr("fill","#FFF");
	var lblPuebloCulhuacan = metro.text(360.123,638.145,"Pueblo\nCulhuacán").attr({'font-size': 7});
	
	var esimeCulhuacan = metro.circle(343.285,667.743,2.8571429).attr("fill","#FFF");
	var lblEsimeCUlhuacan = metro.text(323.285,667.743,"ESIME\nCulhuacán").attr({'font-size': 7});
	
	var tomatlan = metro.circle(363.461,688.942,2.8571429).attr("fill","#FFF");
	var lblTomatlan = metro.text(340.461,688.942,"Tomatlán").attr({'font-size': 7});
	
	var calle11 = metro.circle(391.082,691.458,2.8571429).attr("fill","#FFF");
	var lblCalle11 = metro.text(414.082,685.458,"Calle 11").attr({'font-size': 7});
	
	var perifericoOte = metro.circle(417.738,696.605,2.8571429).attr("fill","#FFF");
	var lblPerifericoOte = metro.text(445.738,696.605,"Periférico Ote.").attr({'font-size': 7});
	
	var tezonco = metro.circle(438.696,712.783,2.8571429).attr("fill","#FFF");
	var lblTezonco = metro.text(455.686,708.783,"Tezonco").attr({'font-size': 7});
	
	var olivos = metro.circle(469.396,717.93,2.8571429).attr("fill","#FFF");
	var lblOlivos = metro.text(485.396,710.93,"Olivos").attr({'font-size': 7});
	
	var nopalera = metro.circle(496.053,723.629,2.8571429).attr("fill","#FFF");
	var lblNopalera = metro.text(515.053,717.629,"Nopalera").attr({'font-size': 7});
	
	var zapotitlan = metro.circle(521.973,729.328,2.8571429).attr("fill","#FFF");
	var lblZapotitlan = metro.text(541.973,724.328,"Zapotitlán").attr({'font-size': 7});
	
	var tlaltenco = metro.circle(546.791,734.292,2.8571429).attr("fill","#FFF");
	var lblTlaltenco = metro.text(569.791,734.292,"Tlaltenco").attr({'font-size': 7});
	
	var tlahuac = metro.circle(560.947,764.809,2.8571429).attr("fill","#FFF");
	var lblTlahuac = metro.text(580.947,764.809,"Tlahuac").attr({'font-size': 7});
	
	$(document).delegate("circle", "click", function(){
		
		alert($(this).attr("name"));
	
	})
		
	console.log('Alive!');


})



