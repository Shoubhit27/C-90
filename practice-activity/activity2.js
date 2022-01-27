function get_score(){
    var get = localStorage.getItem("score")
    document.getElementById("update").innerHTML = "score: " + get
}

function back(){
    window.location = "activity_1.html"
}