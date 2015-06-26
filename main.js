var gold = 10;
var GPS = 0;
var inf = 0;
var IPS = 0;


//name = [number, amount they produce per second, cost in gold, cost in inf, cost of previous unit]
var unit1 = [0, 1, 10, 0, 1]; //ADVENTURERS
var unit2 = [0, 2, 100, 10, 1]; //PARTIES
var unit3 = [0, 3, 1000, 100, 1]; //GUILD HOUSES
var unit4 = [0, 4, 10000, 1000, 1]; //GUILD HALLS
var unit5 = [0, 5, 100000, 10000, 1]; //LARGE HALLS
var unit6 = [0, 6, 1000000, 100000, 1]; //TERRITORIES
var unit7 = [0, 7, 10000000, 1000000, 1]; //KINGDOMS



function goldUpdate(){
	document.getElementById('GOLD').innerHTML = gold;
	document.getElementById('GPS').innerHTML = GPS;
};
function infUpdate(){
	document.getElementById('INF').innerHTML = inf;
	document.getElementById('IPS').innerHTML = IPS;
};

//functions to pay resources - ALL CHECKING IS DONE INSIDE OF THE CALL
//THIS DOES NOT CHECK IF RESOURCES ARE AVAILABLE
function payGold(number){
	gold = gold - number;
	goldUpdate();
};
function payInf(number){
	inf = inf - number;
	infUpdate();
};

//functions to add or remove (put negative in to remove) resources per second
function addGPS(number){
	GPS = GPS + number;
	goldUpdate();
	updateChart();
};
function addIPS(number){
	IPS = IPS + number;
	infUpdate();
};

//FUNCTIONS TO BUY THE BUILDINGS
function buyUnit1(number){
	if (gold >= (number * unit1[2])){
		unit1[0] = unit1[0] + number;
		document.getElementById('unit1PS').innerHTML = (unit2[0] * unit2[1]);
		payGold((unit1[2] * number));
		goldUpdate();
		updateChart();
		//shows next upgrade
		if (unit1[0] >= 1) {
			document.getElementById('unit2String').style.visibility = "visible";
			document.getElementById('unit2Button').style.visibility = "visible";
		};
	};	
};
function buyUnit2(number){
	if ((gold >= (number * unit2[2])) && ((number * unit2[3]) <= (number * unit1[0]))){
		unit2[0] = unit2[0] + number;
		unit1[0] = unit1[0] - (number * unit2[3]);
		payGold((unit2[2] * number));
		document.getElementById('unit2PS').innerHTML = (unit3[0] * unit3[1]);
		goldUpdate();
		updateChart();
		//shows next upgrade
		if (unit2[0] >= 1) {
			document.getElementById('unit3String').style.visibility = "visible";
			document.getElementById('unit3Button').style.visibility = "visible";
		};
	};	
};
function buyUnit3(number){
	if (gold >= (number * unit3[2]) && ((number * unit3[3]) <= (number * unit2[0]))){
		unit3[0] = unit3[0] + number;
		unit2[0] = unit2[0] - (number * unit3[3]);
		payGold((unit3[2] * number));
		
		updateUnits();
		goldUpdate();
		updateChart();
		//shows next upgrade
		if (unit3[0] >= 1) {
			document.getElementById('unit4String').style.visibility = "visible";
			document.getElementById('unit4Button').style.visibility = "visible";
		};
	};	
};
function buyUnit4(number){
	if (gold >= (number * unit4[2]) && ((number * unit4[3]) <= (number * unit3[0]))){
		unit4[0] = unit4[0] + number;
		unit3[0] = unit3[0] - (number * unit4[3]);
		payGold((unit4[2] * number));
		updateUnits();
		goldUpdate();
		updateChart();
		//shows next upgrade
		if (unit4[0] >= 1) {
			document.getElementById('unit5String').style.visibility = "visible";
			document.getElementById('unit5Button').style.visibility = "visible";
		};
	};	
};
function buyUnit5(number){
	if (gold >= (number * unit5[2]) && ((number * unit5[3]) <= (number * unit4[0]))){
		unit5[0] = unit5[0] + number;
		unit4[0] = unit4[0] - (number * unit5[3])
		payGold((unit5[2] * number));
		updateUnits();
		goldUpdate();
		updateChart();
		//shows next upgrade
		if (unit5[0] >= 1) {
			document.getElementById('unit6String').style.visibility = "visible";
			document.getElementById('unit6Button').style.visibility = "visible";
		};
	};	
};
function buyUnit6(number){
	if (gold >= (number * unit6[2]) && ((number * unit6[3]) <= (number * unit5[0]))){
		unit6[0] = unit6[0] + number;
		unit5[0] = unit5[0] - (number * unit6[3]);
		payGold((unit6[2] * number));
		updateUnits();
		goldUpdate();
		updateChart();
		//shows next upgrade
		if (unit6[0] >= 1) {
			document.getElementById('unit7String').style.visibility = "visible";
			document.getElementById('unit7Button').style.visibility = "visible";
			
		};
	};	
};
function buyUnit7(number){
	if (gold >= (number * unit7[2]) && ((number * unit7[3]) <= (number * unit6[0]))){
		unit7[0] = unit7[0] + number;
		unit6[0] = unit6[0] - (number * unit7[3]);
		payGold((unit7[2] * number));
		updateUnits();
		goldUpdate();
		updateChart();
		//shows next upgrade
		if (unit7[0] >= 1) {
			/* NOT BEING USED
			THIS IS A WIP */
		};
	};	
};

function updateUnits(){
	document.getElementById('unit1PS').innerHTML = (unit2[0] * unit2[1]);
	document.getElementById('unit2PS').innerHTML = (unit3[0] * unit3[1]);
	document.getElementById('unit3PS').innerHTML = (unit4[0] * unit4[1]);
	document.getElementById('unit4PS').innerHTML = (unit5[0] * unit5[1]);
	document.getElementById('unit5PS').innerHTML = (unit6[0] * unit6[1]);
	document.getElementById('unit6PS').innerHTML = (unit7[0] * unit7[1]);
};

//THE LOOP OF THE GAME ITERATES THROUGH THIS ONCE PER SECOND
function click(number){
	//unit7[0] = unit7[0] + (unit8[4] * number);
	unit6[0] = unit6[0] + ((unit7[0] * unit7[1])* number);
	unit5[0] = unit5[0] + ((unit6[0] * unit6[1])* number);
	unit4[0] = unit4[0] + ((unit5[0] * unit5[1])* number);
	unit3[0] = unit3[0] + ((unit4[0] * unit4[1])* number);
	unit2[0] = unit2[0] + ((unit3[0] * unit3[1])* number);
	unit1[0] = unit1[0] + ((unit2[0] * unit2[1])* number);
	GPS = (unit1[1] * unit1[0]); //I know this is shitty coding practice, but it really helps me follow it
	gold = gold + (GPS * number);
	//inf = inf + (IPS * number);
	updateUnits();
};

var ctx = document.getElementById("myChart").getContext("2d");
var data = {
labels: ["Kingdoms", "Territories", "Large Halls", "Guild Halls", "Guild Houses", "Parties", "Adventurers", "Gold"],
datasets: [
		{
			label: "Units Per Second",
			fillColor: "rgba(220,220,220,0.2)",
			strokeColor: "rgba(220,220,220,1)",
			pointColor: "rgba(220,220,220,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(220,220,220,1)",
			data: [0, (unit7[0] * unit7[1]), (unit6[0] * unit6[1]), (unit5[0] * unit5[1]), (unit4[0] * unit4[1]), (unit3[0] * unit3[1]), (unit2[0] * unit2[1]), GPS]
		},
		{
            label: "Units",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [unit7[0], unit6[0], unit5[0], unit4[0], unit3[0], unit2[0], unit1[0], gold]
        }
	]
};
var myLineChart = new Chart(ctx).Line(data);


function updateChart(){
	myLineChart.datasets[0].points[1].value = (unit7[0] * unit7[1]);
	myLineChart.datasets[0].points[2].value = (unit6[0] * unit6[1]);
	myLineChart.datasets[0].points[3].value = (unit5[0] * unit5[1]);
	myLineChart.datasets[0].points[4].value = (unit4[0] * unit4[1]);
	myLineChart.datasets[0].points[5].value = (unit3[0] * unit4[1]);
	myLineChart.datasets[0].points[6].value = (unit2[0] * unit4[1]);
	myLineChart.datasets[0].points[7].value = GPS;
	
	myLineChart.datasets[1].points[0].value = (unit7[0]);
	myLineChart.datasets[1].points[1].value = (unit6[0]);
	myLineChart.datasets[1].points[2].value = (unit5[0]);
	myLineChart.datasets[1].points[3].value = (unit4[0]);
	myLineChart.datasets[1].points[4].value = (unit3[0]);
	myLineChart.datasets[1].points[5].value = (unit2[0]);
	myLineChart.datasets[1].points[6].value = (unit1[0]);
	myLineChart.datasets[1].points[7].value = gold;
	myLineChart.update();
};

//initializes everything, makes sure all variables are properly done
function START(){
	click(0);
	goldUpdate();
	//infUpdate();
	
	document.getElementById('unit2String').style.visibility = "hidden";
	document.getElementById('unit3String').style.visibility = "hidden";
	document.getElementById('unit4String').style.visibility = "hidden";
	document.getElementById('unit5String').style.visibility = "hidden";
	document.getElementById('unit6String').style.visibility = "hidden";
	document.getElementById('unit7String').style.visibility = "hidden";
	document.getElementById('unit2Button').style.visibility = "hidden";
	document.getElementById('unit3Button').style.visibility = "hidden";
	document.getElementById('unit4Button').style.visibility = "hidden";
	document.getElementById('unit5Button').style.visibility = "hidden";
	document.getElementById('unit6Button').style.visibility = "hidden";
	document.getElementById('unit7Button').style.visibility = "hidden";
};

START();
updateChart();
//game loop
window.setInterval(function(){
	click(1);
	goldUpdate();
	//infUpdate();
	updateChart();
	
}, 1000);