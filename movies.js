function showMovieInfo(data) {
  if(data.Title){  
    document.getElementById("movieinfo").innerHTML = "<br><span class='green'>Movie: </span>" + data.Title + " (" + data.Year + ")<br>";
    if(data.Director && data.Director != "N/A"){ document.getElementById("movieinfo").innerHTML += "<span class='green'>Director: </span>" + data.Director + "<br>"; }
    else{ document.getElementById("movieinfo").innerHTML += "<span class='red'>Director: </span>" + data.Director + "<br>"; }
    if(data.Runtime && data.Runtime != "N/A"){ document.getElementById("movieinfo").innerHTML += "<span class='green'>Runtime: </span>" + data.Runtime + ".<br>"; }
    else{ document.getElementById("movieinfo").innerHTML += "<span class='red'>Runtime: </span>" + data.Runtime + "<br>"; }
    if(data.Plot && data.Plot != "N/A"){ document.getElementById("movieinfo").innerHTML += "<span class='green'>Plot: </span>" + data.Plot + "<br>"; }
    else{ document.getElementById("movieinfo").innerHTML += "<span class='red'>Plot: </span>" + data.Plot + "<br>"; }
    if(data.Actors && data.Actors != "N/A"){ document.getElementById("movieinfo").innerHTML += "<span class='green'>The Casts: </span>" + data.Actors + "<br><br>"; }  
    else{ document.getElementById("movieinfo").innerHTML += "<span class='red'>The Casts: </span>" + data.Actors + "<br><br>"; }
    if(data.Poster && data.Poster != "N/A"){ document.getElementById("movieinfo").innerHTML += "<img width='50%' height='auto' src='" + data.Poster + "'/>"; }
    else{ document.getElementById("movieinfo").innerHTML += "<img width='50%' height='auto' src='http://craftandgraft.co/wp-content/uploads/2017/04/404PosterNotFound.jpg' />"; }
  }
  else{ document.getElementById("movieinfo").innerHTML = "<br><br><span style='font-size: 32px; color: red; text-shadow: -2px 1px 3px black;'>MOvie NoT FoUnd</span>"; }  
  document.getElementById("movietitle").value = "";  
}

function makeRequest() {
  if(Number(document.getElementById("movietitle").value) != 0){  
    var url = "http://www.omdbapi.com/?apikey=d48e8875&t="  + document.getElementById("movietitle").value;
    console.log(url);  
    $.ajax({
      url: url,
      success: function(data) {
        showMovieInfo(data);
      }
    })
  }
}

document.addEventListener('keypress',hello)
function hello(event) {       
  if(event.key == "Enter"){
    makeRequest();  
  }
}
