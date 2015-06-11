var gold = 10;
var GPS = 0;
var inf = 0;
var IPS = 0;
var APS = 0;
var MPS = 0;
var guildHouses = 0;
var guildHousesCost = 10;//gold
var largeHalls = 0;
var largeHallCost = 100;//gold
var adventurers = 0;
var adventurerCost = 10;//inf
var parties = 0;
var partyCost = 100;//inf
var agents = 0;
var maxAgents = 0;
var agentCost = 1000;//gold
var monsters = 0;
var monsterCost = 100; //gold

//hides elements
function hideElements(){
	document.getElementById('GPSString').style.display = "none";
	document.getElementById('inf').style.display = "none";
	document.getElementById('ADVButton').style.display = "none";
	document.getElementById('INFString').style.display = "none";
	document.getElementById('IPSString').style.display = "none";
	document.getElementById('ADVString').style.display = "none";
	document.getElementById('GHString').style.display = "none";
	document.getElementById('LHButton').style.display = "none";
	document.getElementById('LHString').style.display = "none";
	document.getElementById('AString').style.display = "none";
	document.getElementById('AButton').style.display = "none";
	document.getElementById('PString').style.display = "none";
	document.getElementById('PButton').style.display = "none";
	document.getElementById('MString').style.display = "none";
	document.getElementById('MPSString').style.display = "none";
	document.getElementById('BMButton').style.display = "none";
	document.getElementById('BMString').style.display = "none";
	
};

function goldClick(number){
	gold = gold + number;
	goldUpdate();
};
function infClick(number){
	inf = inf + number;
	infUpdate();
};
function agentClick(number){
	adventurers = adventurers + number;
	advUpdate;
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

//functions to add buildings
//col 1
function addGH(number){
	guildHouses = guildHouses + number;
	addIPS(number);
	document.getElementById('guildHouses').innerHTML = guildHouses;
};
function addLH(number){
	largeHalls = largeHalls + number;
	addIPS((number * 10));
	document.getElementById('largeHalls').innerHTML = largeHalls;
};
//col 2
function addADV(number){
	adventurers = adventurers + number;
	addGPS(number);
	document.getElementById('adventurers').innerHTML = adventurers;
};
function addParty(number){
	parties = parties + number;
	addGPS((number * 10));
	document.getElementById('parties').innerHTML = parties;
};
//col 3
function addAgent(number){
	agents = agents + number;
	document.getElementById('agents').innerHTML = agents;
};

//use to make sure resources are updated
function goldUpdate(){
	document.getElementById('gold').innerHTML = gold;
	document.getElementById('GPS').innerHTML = GPS;
};
function infUpdate(){
	document.getElementById('inf').innerHTML = inf;
	document.getElementById('IPS').innerHTML = IPS;
};
function advUpdate(){
	document.getElementById("adventurers").innerHTML = adventurers;
	document.getElementById("APS").innerHTML = APS;
};

function buyGuildHouses(number){
	if (gold >= (number * guildHousesCost)){
		addGH(number);
		payGold((guildHousesCost * number));
		goldUpdate();
		
		if (guildHouses >= 1) {
			document.getElementById('inf').style.display = "inline";
			document.getElementById('GHString').style.display = "inline";
			document.getElementById('ADVButton').style.display = "block";
			document.getElementById('INFString').style.display = "inline";
			document.getElementById('IPSString').style.display = "inline";
			
		};
	};	
};
function buyLargeHall(number){
	if (gold >= (number * largeHallCost)){
		addLH(number);
		payGold((largeHallCost * number));
		goldUpdate();
		
		if (largeHalls >= 1) {
			maxAgents = maxAgents + 1;
			document.getElementById('LHString').style.display = "inline";
			document.getElementById('AString').style.display = "inline";
			document.getElementById('AButton').style.display = "inline";
			document.getElementById('maxAgents').innerHTML = maxAgents;
		};
	};	
};

function buyAdventurer(number){
	if (inf >= (number * adventurerCost)){
		payInf((number * adventurerCost));
		addADV(number);
		infUpdate();
		
		if (adventurers >= 1){
			document.getElementById('ADVString').style.display = "inline";
			document.getElementById('GPSString').style.display = "inline";
			if (adventurers >= 10){
				document.getElementById('LHButton').style.display = "inline";
			};
		};
	};
};

function buyParty(number){
	if (inf >= (number * partyCost)){
		payInf((number * partyCost));
		addParty(number);
		infUpdate();
		
		if (parties >= 1){
			//placeholder
			
		};
	};
};

function buyAgent(number){
	if ((agents + number) <= maxAgents){
		if (gold >= (agentCost * number)){
			payGold((agentCost * number));
			addAgent(number);
			goldUpdate();
			
			if (agents >= 1){
				document.getElementById('MString').style.display = "inline";
				document.getElementById('MPSBString').style.display = "inline";
				document.getElementById('BMButton').style.display = "inline";
				document.getElementById('BMString').style.display = "block";
			};
		};
	};
};



//initializes everything, makes sure all variables are properly done
function START(){
	hideElements();
	goldClick(0);
	infClick(0);
	agentClick(0);
	//advClick(0);
};

START();
//game loop
window.setInterval(function(){
	goldClick(GPS);
	infClick(IPS);
	agentClick(APS);
	//advClick(MPS);
	goldUpdate();
	infUpdate();
	
	
}, 1000);