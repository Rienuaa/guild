var gold = 10;
var GPS = 0;
var inf = 0;
var IPS = 0;

//name = [number, amount they produce per second, cost in gold, cost in inf, cost of previous unit, per second]
var unit7 = [0, 8, 10000000, 1, 0]; //KINGDOMS
var unit6 = [0, 7, 1000000, 1, 0]; //TERRITORIES
var unit5 = [0, 6, 100000, 1, 0]; //LARGE HALLS
var unit4 = [0, 5, 10000, 1, 0]; //GUILD HALLS
var unit3 = [0, 4, 1000, 1, 0]; //GUILD HOUSES
var unit2 = [0, 3, 100, 1, 0]; //PARTIES
var unit1 = [0, 2, 10, 1, 0]; //ADVENTURERS

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
};
function addIPS(number){
	IPS = IPS + number;
	infUpdate();
};

//FUNCTIONS TO BUY THE BUILDINGS
function buyUnit1(number){
	if (gold >= (number * unit1[2])){
		unit1[0] = unit1[0] + number;
		payGold((unit1[2] * number));
		goldUpdate();
		//shows next upgrade
		if (unit1[0] >= 1) {
			
			
		};
	};	
};
function buyUnit2(number){
	if (gold >= (number * unit2[2])){
		unit2[0] = unit2[0] + number;
		payGold((unit2[2] * number));
		goldUpdate();
		//shows next upgrade
		if (unit2[0] >= 1) {
			
			
		};
	};	
};
function buyUnit3(number){
	if (gold >= (number * unit3[2])){
		unit3[0] = unit3[0] + number;
		payGold((unit3[2] * number));
		goldUpdate();
		//shows next upgrade
		if (unit3[0] >= 1) {
			
			
		};
	};	
};
function buyUnit4(number){
	if (gold >= (number * unit4[2])){
		unit4[0] = unit4[0] + number;
		payGold((unit4[2] * number));
		goldUpdate();
		//shows next upgrade
		if (unit4[0] >= 1) {
			
			
		};
	};	
};
function buyUnit5(number){
	if (gold >= (number * unit5[2])){
		unit5[0] = unit5[0] + number;
		payGold((unit5[2] * number));
		goldUpdate();
		//shows next upgrade
		if (unit5[0] >= 1) {
			
			
		};
	};	
};
function buyUnit6(number){
	if (gold >= (number * unit6[2])){
		unit6[0] = unit6[0] + number;
		payGold((unit6[2] * number));
		goldUpdate();
		//shows next upgrade
		if (unit6[0] >= 1) {
			
			
		};
	};	
};
function buyUnit7(number){
	if (gold >= (number * unit7[2])){
		unit7[0] = unit7[0] + number;
		payGold((unit7[2] * number));
		goldUpdate();
		//shows next upgrade
		if (unit7[0] >= 1) {
			/* NOT BEING USED
			THIS IS A WIP */
		};
	};	
};

//THE LOOP OF THE GAME ITERATES THROUGH THIS ONCE PER SECOND
function click(number){
	unit7[0] = unit7[0] + (unit7[4] * number);
	unit6[0] = unit6[0] + (unit6[4] * number);
	unit5[0] = unit5[0] + (unit5[4] * number);
	unit4[0] = unit4[0] + (unit4[4] * number);
	unit3[0] = unit3[0] + (unit3[4] * number);
	unit2[0] = unit2[0] + (unit2[4] * number);
	unit1[0] = unit1[0] + (unit1[4] * number);
	GPS = (unit1[1] * unit1[0]); //I know this is shitty coding practice, but it really helps me follow it
	gold = gold + (GPS * number);
	//inf = inf + (IPS * number);
};


//initializes everything, makes sure all variables are properly done
function START(){
	click(0);
	goldUpdate();
	//infUpdate();
};

START();
//game loop
window.setInterval(function(){
	click(1);
	goldUpdate();
	//infUpdate();
	
	
}, 100);