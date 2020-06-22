var displayScores = document.getElementById("displayScores");
var clearScores = document.getElementById("clearScores");
displayHighscores();
clearScores.addEventListener('click', function(event){
    console.log("Clicked");
    //localStorage.removeItem("list");
    localStorage.clear();
    console.log(localStorage);
    window.location.replace("./highscores.html");
    //displayHighscores();
    
});

function deleteChildren(button){
    var child = button.lastElementChild;
    while(child){
      button.removeChild(child);
      child = button.lastElementChild;
    }
}

//Just display the freaking thing!
function displayHighscores(){
    //deleteChildren(displayScores);
    var array = JSON.parse(localStorage["list"]);
    console.log(array);
    for(var i = 0; i < array.length; i++){
        var div = document.createElement('div');
        var current = i + 1;
        div.innerHTML= current + ". Name: "  + array[i].name + " Score: " + array[i].score;
        displayScores.append(div);
    }
    console.log(displayScores);
}

