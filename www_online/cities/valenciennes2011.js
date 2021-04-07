// Déclaration des variables propres à l'enquête observée

// Déclaration du nom de l'enquête pour guider le chemin vers les données (loads.js)
var nomED = 'VALENCIENNES2011';
// Nom de la ville centre
var nomVC = 'Valenciennes';
// Année de fin d'enquête
var anneeED = '2011';

// Source des données
var dataSource = "Enquête Ménages Déplacements (EMD) 2011 - Valenciennes / Valenciennois, Cerema (prod.), Adisp (distrib.)";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [50.38, 3.47];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10,
minZoom = 10,
maxZoom = 15;

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '001';
var nameSec = "VALENCIENNES CENTRE VILLE";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 260];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [15000, 8000, 3000, 100],
datasetFlow = [10000, 5000, 2000, 100];

// Seuils des liens (carte et légende flow)
var sLink = [78, 250, 500, 1000];

// Déclaration des bornes de classes pour chaque modalité (loads.js)
// Moyennes emboîtées, 8 classes
var colDom_dens = [70, 210, 410, 640, 1100, 1800, 2800, 5100, 11700];

// Discrétisation en amplitude égale
var colDom_res1 = [0, 19, 38, 57, 76, 96];
var colDom_res2 = [4, 24, 43, 62, 81, 100];

//Méthode des quintiles
var colDom_age1 = [2, 12, 14, 16, 19, 44];
var colDom_age2 = [4, 12, 14, 15, 18, 25];
var colDom_age3 = [28, 46, 50, 53, 56, 66];
var colDom_age4 = [10, 15, 17, 19, 22, 40];

// Discrétisation manuelle
var colDom_sex1 = [17, 35, 40, 50, 55, 73];
var colDom_sex2 = [27, 45, 50, 60, 65, 83];

//Méthode des quintiles
var colDom_cleduc1 = [1, 7, 11, 13, 17, 32];
var colDom_cleduc2 = [25, 46, 51, 55, 60, 75];
var colDom_cleduc3 = [8, 18, 22, 24, 28, 38];
var colDom_cleduc4 = [0, 6, 8, 11, 16, 36];

//Méthode des quintiles
var colDom_educmen1 = [1, 11, 15, 19, 24, 49];
var colDom_educmen2 = [24, 50, 57, 63, 68, 81];
var colDom_educmen3 = [4, 11, 14, 17, 22, 39];
var colDom_educmen4 = [0, 3, 4, 5, 9, 29];

//Méthode des quintiles
var colDom_cs1 = [2, 7, 10, 14, 18, 26];
var colDom_cs2 = [5, 22, 27, 31, 35, 50];
var colDom_cs3 = [16, 26, 29, 32, 37, 48];
var colDom_cs4 = [6, 15, 18, 22, 27, 52];
var colDom_cs5 = [0, 3, 4, 6, 10, 22];

//Méthode des quintiles
var colDom_cspmen1 = [4, 14, 18, 25, 33, 47];
var colDom_cspmen2 = [11, 28, 33, 39, 44, 57];
var colDom_cspmen3 = [11, 19, 22, 26, 31, 41];
var colDom_cspmen4 = [0, 7, 10, 14, 22, 41];
var colDom_cspmen5 = [0, 0.6, 1.3, 2.4, 4, 17];

//Méthode des quintiles
var colDom_occ1 = [19, 36, 40, 44, 50, 63];
var colDom_occ2 = [0, 5, 8, 10, 12, 39];
var colDom_occ3 = [1, 8, 10, 12, 14, 25];
var colDom_occ4 = [14, 22, 24, 26, 29, 44];
var colDom_occ5 = [0, 7, 9, 11, 14, 26];

// Discrétisation manuelle
var colDom_resarea1 = [0, 3, 10, 20, 30, 100];
var colDom_resarea2 = [0, 3, 10, 20, 30, 100];
var colDom_resarea3 = [0, 3, 10, 20, 30, 100];

// Discrétisation en amplitude égale
var colDom_qpv1 = [38, 51, 63, 75, 88, 100];
var colDom_qpv2 = [0, 12, 25, 37, 49, 62];

//Seuils naturels (fisher)
var colDom_act1 = [3, 43, 61, 77, 91, 100];
var colDom_act2 = [0, 7, 18, 30, 46, 84];
var colDom_act3 = [0, 2, 8, 16, 35, 65];
var colDom_act4 = [0, 1, 4, 10, 22, 45];
var colDom_act5 = [0, 2, 6, 10, 18, 54];

//Méthode des quintiles
var colDom_mod1 = [0, 3, 5, 8, 10, 36];
var colDom_mod2 = [39, 63, 69, 74, 77, 91];
var colDom_mod3 = [7, 17, 20, 24, 28, 51];
