function addUser(){
    player_1Name = document.getElementById("player1_name_input").value
    player_2Name = document.getElementById("player2_name_input").value

    localStorage.setItem("player1_name", player_1Name)
    localStorage.setItem("player2_name", player_2Name)

    window.location = "game_page.html"
}