function showElement(){
	document.getElementById("hide").style.display = "block";
	alert("Page is loaded");
}

function getResponse(){

	$.get(document.getElementById("myUrl").value, function(responseText) {

	document.getElementById("parameter").innerHTML = responseText.value.joke;
	document.getElementById("parameter").style.display = "block";
    console.log(responseText.value);
	});
    
}