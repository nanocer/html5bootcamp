function showElement(){
	document.getElementById("hide").style.display = "block";
	alert("Page is loaded");
}

function getResponse(){

	var config = new Object();
	config.url = document.getElementById("myUrl").value;
	var promise = new Promise(function(resolve,reject){
		var call = $.ajax({
			url: config.url,
			type: 'GET',
			dataType: 'html',
			success: function(responseText){
				$('section').removeClass("error");
				$('section').addClass("successful");
				Promise.resolve($("#parameter").html(responseText));
				document.getElementById("parameter").style.display = "block";
			},
			error: function(){
				$('section').removeClass("successful");
				$('section').addClass("error");
				Promise.reject($("#parameter").html("ERROR NAME NOT RESOLVED"));
				document.getElementById("parameter").style.display = "block";
			}
		})
	})

		promise.then(function(result){
			document.write(result);
		}, function(error){
			alert(error);
		});
    
}