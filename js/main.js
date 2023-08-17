	
function openButton() {
	
	var element1 =  document.getElementById("second-menulist");
	
	var element2 =  document.getElementById("three-lines");
	
	
 	
	element1.style.display = "block";
	
	element2.style.display = "none";
	
}
	
	function closeButton() {
	
	var element1 =  document.getElementById("second-menulist");
	
	var element2 =  document.getElementById("three-lines");
	
	
	element1.style.display = "none";
	
	element2.style.display = "block";
	
}

	
function clickF(){
	var mymenu = document.getElementById("second-menulist");
	
	var element2 =  document.getElementById("three-lines");
	
	
	mymenu.style.display = "none";
	
	element2.style.display = "block";
	
}


function clickN(){
	var ele1 = document.getElementById("projects");
	
	var ele2 =  document.getElementById("projects-2");
	
	ele1.style.display = "none";
	ele2.style.display = "block";
	
	
}


function clickB(){
	var ele1 = document.getElementById("projects");
	
	var ele2 =  document.getElementById("projects-2");
	
	
	ele1.style.display = "block";
	ele2.style.display = "none";
	
}

function clickNPthree(){
	var ele11 = document.getElementById("projects-3");
	
	var ele12 = document.getElementById("projects-2");
	
	ele11.style.display = "block";
	ele12.style.display = "none";
	
}

function clickBPtwo(){
	var ele13 = document.getElementById("projects-3");
	
	var ele14 = document.getElementById("projects-2");
	
	ele13.style.display = "none";
	ele14.style.display = "block";
	
}

function openform(){
	var element5 = document.getElementById("modal");
	
	element5.style.display = "block";
}

function closeform(){
	var element6 = document.getElementById("modal");
	
	element6.style.display = "none";

}

function clicButton(){
	var element7 = document.getElementById("projects");
		
    element7.style.display = "block";	
}


 function clickreg(){
    var element8 = document.getElementById("modal-reg");
	var element9 = document.getElementById("modal");
	
	
    element8.style.display = "block";

    element9.style.display = "none";	
 }


function closeformreg(){
	var element10 = document.getElementById("modal-reg");
	
	element10.style.display = "none";

}


function closepopup(){
	var element11 = document.getElementById("modal-reg");
	
	element11.style.display = "none";
	
	alert("successfully registered");
} 

/*for test
console.error("error");

console.error("%c error massage", "color:yellow;background:black");*/

