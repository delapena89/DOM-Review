
function addElement(element){
	var body = document.getElementsByTagName("body");
	var elementType = document.createElement(element);
	elementType.innerHTML = "test";
	body[0].appendChild(elementType);
}

function nestElement(element, number, parentElement){
  var parent =document.getElementsByTagName(parentElement);
	for (var i = 0; i < number; i++) {
		var elementType =document.createElement(element);
		elementType.innerHTML = "more test";
		parent[0].appendChild(elementType);
	}
}

function editChild(tag, number){
	var tag1 =document.getElementsByTagName(tag);
	tag1[number].innerHTML = "I be rollin'";
}

function editColor(tag, number, color) {
	var tag1= document.getElementsByTagName(tag);
	tag1[number].style.background = color;
}

function outputText(element, number){
	var text = document.getElementsByTagName(element);
	console.log(text[number].innerHTML);
}


addElement("p");
nestElement("p", 5, "body");
editChild("p", 3);
editColor("p", 3, "blue");
outputText('p', 3);

	var button = document.getElementsByTagName('body');
	

button[0].onclick = function(){
	console.log(button[0].innerHTML);
}

