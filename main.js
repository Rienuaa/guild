var gold = 10;
var GPS = 0;
var inf = 0;
var IPS = 0;

//name = [number, cost, per second]
var guildHouses = [0, 10, 0];
var largeHalls = [0, 1000, 0];
var adventurers = [0, 10, 0];
var parties = [0, 100, 0];
var agents = [0, 1000, 0];
var monsters = [0, 1000, 0];

var maxAgents = 0;

window.onload = function(){
	try {
		var spans = document.getElementsByTagName('span');
		for (i in spans ){
			spans[i].style.display = "none";
		};
		var buttons = document.getElementsByTagName('button');
		for (i in buttons ){
			buttons[i].style.display = "none";
		};
	}catch(TypeError){};
	document.getElementById('ADVButton').style.display = "none";
	document.getElementById('LHButton').style.display = "none";
	document.getElementById('AButton').style.display = "none";
	document.getElementById('PButton').style.display = "none";
	document.getElementById('MButton').style.display = "none";
	document.getElementById('gold').style.display = "inline";

	document.getElementById('GHButton').style.display = "inline";
	goldUpdate();
	infUpdate();
};

function goldUpdate(){
	document.getElementById('gold').innerHTML = "Gold: " + gold;
	document.getElementById('GPS').innerHTML = "You earn " + GPS + " gold per second.";
};
function infUpdate(){
	document.getElementById('inf').innerHTML = inf;
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

//functions to buy buildings
//col 1
function addGH(number){
	guildHouses[0] = guildHouses[0] + number;
	addIPS(number);
	document.getElementById('guildHouses').innerHTML = guildHouses[0];
	infUpdate();
	goldUpdate();
};
function addLH(number){
	largeHalls[0] = largeHalls[0] + number;
	guildHouses[2] = guildHouses[2] + number;
	document.getElementById('largeHalls').innerHTML = largeHalls[0];
	document.getElementById('GHPS').innerHTML = " (" + guildHouses[2] + ")";
	infUpdate();
	goldUpdate();
};
//col 2
function addADV(number){
	adventurers[0] = adventurers[0] + number;
	addGPS(number);
	document.getElementById('adventurers').innerHTML = adventurers[0];
	infUpdate();
	goldUpdate();
};
function addParty(number){
	parties[0] = parties[0] + number;
	adventurers[2] = adventurers[2] + number;
	document.getElementById('parties').innerHTML = parties[0];
	infUpdate();
	goldUpdate();
};
//col 3
function addAgent(number){
	agents[0] = agents[0] + number;
	adventurers[2] = adventurers[2] + number;
	document.getElementById('agents').innerHTML = agents[0];
	document.getElementById('APS').innerHTML = agents[0];
	infUpdate();
	goldUpdate();
};
//col 4
function addBM(number){
	monsters[0] = monsters[0] + number;
	adventurers[2] = adventurers[2] - number;
	document.getElementById('monsters').innerHTML = monsters[0];
	document.getElementById('MPS').innerHTML = monsters[0];
	document.getElementById('GHPS').innerHTML = " (" + guildHouses[2] + ")";
	infUpdate();
	goldUpdate();
};

//FUNCTIONS TO BUY THE BUILDINGS
function buyGuildHouse(number){
	if (gold >= (number * guildHouses[1])){
		addGH(number);
		payGold((guildHouses[1] * number));
		goldUpdate();
		
		if (guildHouses[0] >= 1) {
			document.getElementById('inf').style.display = "inline";
			document.getElementById('IPS').style.display = "inline";
			document.getElementById('guildHouses').style.display = "inline";
			document.getElementById('GHString').style.display = "inline";
			document.getElementById('ADVButton').style.display = "block";
			document.getElementById('INFString').style.display = "inline";
			document.getElementById('IPSString').style.display = "inline";
			document.getElementById('adventurers').style.display = "inline";
			document.getElementById('GHPS').style.display = "inline";
			
		};
	};	
};
function buyLargeHall(number){
	if (gold >= (number * largeHalls[1])){
		addLH(number);
		payGold((largeHalls[1] * number));
		goldUpdate();
		
		if (largeHalls[0] >= 1) {
			maxAgents = maxAgents + 1;
			document.getElementById('largeHalls').style.display = "inline";
			document.getElementById('LHString').style.display = "inline";
			document.getElementById('AString').style.display = "inline";
			document.getElementById('AButton').style.display = "inline";
			document.getElementById('agents').style.display = "inline";
			document.getElementById('maxAgents').style.display = "inline";
			document.getElementById('maxAgents').innerHTML = maxAgents;
		};
	};	
};

function buyAdventurer(number){
	if (inf >= (number * adventurers[1])){
		payInf((number * adventurers[1]));
		addADV(number);
		infUpdate();
		
		if (adventurers[0] >= 1){
			document.getElementById('ADVString').style.display = "inline";
			document.getElementById('GPS').style.display = "inline";
			document.getElementById('GPS').style.display = "inline";
			if (adventurers[0] >= 10){
				document.getElementById('LHButton').style.display = "inline";
			};
		};
	};
};

function buyParty(number){
	if (inf >= (number * parties[1])){
		payInf((number * parties[1]));
		addParty(number);
		infUpdate();
		
		if (parties[0] >= 1){
			//placeholder
			
		};
	};
};

function buyAgent(number){
	if ((agents[0] + number) <= maxAgents){
		if (gold >= (agents[1] * number)){
			payGold((agents[1] * number));
			addAgent(number);
			goldUpdate();
			
			if (agents[0] >= 1){
				document.getElementById('APSString').style.display = "inline";
				document.getElementById('APS').style.display = "inline";
				document.getElementById('MString').style.display = "inline";
				document.getElementById('MButton').style.display = "block";
			};
		};
	};
};

function buyBasicMonster(number){
	if (inf >= (monsters[1] * number)){
		payInf(monsters[1]);
		addBM(number);
		infUpdate();
		
		if (monsters[0] >= 1){
			document.getElementById('MString').style.display = "inline";
			document.getElementById('monsters').style.display = "inline";
			document.getElementById('MPS').style.display = "inline";
			document.getElementById('MPSString').style.display = "inline";
		};
	};
};

function click(number){
	addGH((guildHouses[2]) * number);
	addLH((largeHalls[2]) * number);
	addADV((adventurers[2]) * number);
	addParty((parties[2]) * number);
	addAgent((agents[2]) * number);
	gold = gold + (GPS * number);
	inf = inf + (IPS * number);
};


//initializes everything, makes sure all variables are properly done
function START(){
	click(0);
};

START();
//game loop
window.setInterval(function(){
	click(1);
	goldUpdate();
	infUpdate();
	
	
}, 100);