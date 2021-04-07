// Déclaration des variables propres à l'enquête observée

	// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
	var nomED = "BEZIERS";

	// Nom de la ville centre
	var nomVC = "Béziers";

	// Source des données
	var dataSource = "Source: Enquête Déplacements Ville Moyenne (EDVM) 2014, Béziers / Biterrois et nord-ouest Hérault, CEREMA (prod.) - ADISP (distrib.)";

	// Centrer la projection sur la ville centre (load.js)
	var centerProj = [2.9, 43.515],
		scaleProj = 45000;
	// Centrer le zoom sur la ville centre (load.js)
	var centerZ_w = 1.3,
		centerZ_h = 1.3;

	// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
	var nomCol = "101"

	// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
	var radiusRange = [0, 400];

	// Déclaration des valeurs des cercles proportionnels des légendes uniques (loads.js)
	var datasetProp = [14000, 7000, 3000, 100],
		datasetFlow = [7000, 3000, 1000, 100];

	// Seuils des liens (carte et légende flow)
    var sLink = [250, 500];

	// Déclaration des bornes de classes pour chaque modalité (loads.js)
	var colDom_age1 = [0, 7, 9, 10, 12],
		colDom_age2 = [0, 9, 10, 12, 14],
		colDom_age3 = [0, 46, 49, 51, 53],
		colDom_age4 = [0, 25, 28, 30, 33];

	var colDom_sex1 = [0, 35, 40, 50, 55],
		colDom_sex2 = [0, 45, 50, 60, 65];

	var colDom_cleduc1 = [0, 11, 12, 14, 16],
		colDom_cleduc2 = [0, 37, 40, 43, 47],
		colDom_cleduc3 = [0, 24, 28, 31, 33],
		colDom_cleduc4 = [0, 12, 14, 17, 19];

	var colDom_educmen1 = [0, 11, 13, 15, 17],
		colDom_educmen2 = [0, 39, 42, 45, 49],
		colDom_educmen3 = [0, 22, 25, 29, 33],
		colDom_educmen4 = [0, 11, 13, 15, 18];

	var colDom_cs1 = [0, 2, 3, 4, 5],
		colDom_cs2 = [0, 9, 11, 13, 15],
		colDom_cs3 = [0, 43, 46, 50, 53],
		colDom_cs4 = [0, 20, 23, 25, 29],
		colDom_cs5 = [0, 9, 11, 13, 14];

	var colDom_cspmen1 = [0, 3, 4, 5, 6],
		colDom_cspmen2 = [0, 10, 12, 14, 16],
		colDom_cspmen3 = [0, 43, 46, 50, 53],
		colDom_cspmen4 = [0, 18, 21, 24, 28],
		colDom_cspmen5 = [0, 8, 10, 12, 13];

	var colDom_occ1 = [0, 36, 41, 45, 50],
		colDom_occ2 = [0, 2, 4, 6, 8],
		colDom_occ3 = [0, 6, 8, 10, 14],
		colDom_occ4 = [0, 31, 35, 38, 42],
		colDom_occ5 = [0, 3, 4, 5, 6];

	var colDom_resarea3 = [0, 3, 10, 20, 30],
		colDom_resarea2 = [0, 3, 10, 20, 30],
		colDom_resarea1 = [0, 3, 10, 20, 30];

	var colDom_act1 = [0, 40, 55, 70, 85],
		colDom_act2 = [0, 6, 15, 30, 45],
		colDom_act3 = [0, 3, 6, 12, 18],
		colDom_act4 = [0, 3, 6, 12, 18],
		colDom_act5 = [0, 3, 6, 12, 18];

	var colDom_mod3 = [0, 21, 29, 33, 36],
		colDom_mod2 = [0, 62, 65, 69, 75],
		colDom_mod1 = [0, 1, 2, 3, 6];

