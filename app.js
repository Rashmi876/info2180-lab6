window.onload = function(){
	document.getElementById("searchbutton").addEventListener('click', changing)
	//document.getElementById("search")
	//changing();
}

// var httpRequest = new XMLHttpRequest();
// var url = "superheroes.php";
// httpRequest.onreadystatechange = doSomething;
// httpRequest.open('GET', url);
// httpRequest.send();

// function doSomething(){
// 	if(httpRequest.readyState === XMLHttpRequest.DONE){
// 		if(httpRequest.status === 200){
// 			var response = httpRequest.repsonseText;
// 			alert(reponse);
// 		}else{
// 			alert("There was a problem with the request.")
// 		}
// 	}
// }


// function changing(){
// 	alert(doSomething);
// }

// // Plain JavaScript AJAX
// window.onload = function() {

//   var loadTextBtn = document.querySelector('#loadTextBtn');
//   var httpRequest;

//   loadTextBtn.addEventListener('click', function(element) {
//     element.preventDefault();

//     httpRequest = new XMLHttpRequest();

//     // GET Request
//     var url = "random-text.php";
//     httpRequest.onreadystatechange = loadQuote;
//     httpRequest.open('GET', url);
//     httpRequest.send();
//   });

//   function loadQuote() {
//     if (httpRequest.readyState === XMLHttpRequest.DONE) {
//       if (httpRequest.status === 200) {
//         var response = httpRequest.responseText;
//         var quote = document.querySelector('#quote');
//         quote.innerHTML = response;
//       } else {
//         alert('There was a problem with the request.');
//       }
//     }
//   }

// };

function changing(){
	//fetch('superheroes.php', {mode: 'no-cors'})
	fetch('http://localhost:8080/superheroes.php', {mode: 'no-cors'})
	 .then(response => response.text())
	 //.then(data => {console.log(data)})
	 .then(data => {
	 	alert(data)
	 })
	 .catch(error => console.error(error))
	 	//alert(error)
	 //)
}

// function changing(){
// 	var httpRequest = new XMLHttpRequest();
// 	httpRequest.open("GET", "http://localhost:8080/superheroes.php", true);
// 	httpRequest.send(null)
// 	response = httpRequest.responseText
// 	console.log(response)
// 	document.getElementById("searchbutton").onclick = function(){
// 		alert(httpRequest.responseText)
// }}