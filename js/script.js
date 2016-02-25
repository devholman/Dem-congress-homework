console.log($)
var url = "https://congress.api.sunlightfoundation.com/legislators?apikey=8c23bc9130644970b5dd4e0fbd59c01d&party=D&chamber=senate"

var senatorPromise = $.getJSON(url)


var masterHTMLString = function(getData){
	console.log(getData)
	var dataArr = getData.results
	var senContainer_El = document.querySelector(".senContainer")
	// var senContainer_El = ""
	for(var i=0; i < dataArr.length; i++){
		var objData = dataArr[i]
		senContainer_El.innerHTML += pullSenData(objData)
	}
}

var pullSenData = function(objData){
	var htmlStr = "<span class='senDataBox'>"
		htmlStr += 	"<h1>" + objData.first_name + ' '+ objData.last_name + "</h1>"
		htmlStr += 	"<h3>" + objData.title + " -- " + objData.party + " - " + objData.state + "</h3>"
		htmlStr += 	"<ul>" 
		htmlStr += 		"<li>" + objData.oc_email + "</li>"
		htmlStr += 		"<li>" + objData.phone + "</li>"
		htmlStr += 		"<li>" + objData.fax + "</li>" + "</u></span>"

	return htmlStr
}


senatorPromise.then(masterHTMLString)