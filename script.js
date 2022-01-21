//custom cursor
const cursor = document.querySelector("#cursor");
window.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
});

const container = document.getElementById("container");
//creating score_info_section
const score_info_section = document.createElement("div");
score_info_section.setAttribute("id", "score-info-section");

//creating game_play_section
const game_play_section = document.createElement("div");
game_play_section.setAttribute("id", "game_play_section");

//game_play_section dimensions
const gpsWidth = container.offsetWidth;
const gpsHeight = container.offsetHeight;

//player1
const player1 = document.createElement("div");
player1.setAttribute("class", "player");
const player1_name = document.createElement("p");
player1_name.innerText = "Player1";
player1.append(player1_name);
//player1 image
const player1_img = document.createElement("img");
player1_img.setAttribute("class", "player-img");
player1_img.setAttribute("id", "player1-img");
player1_img.setAttribute("src", "./yellow.png");
player1_img.setAttribute("z-index", "2");

//player2
const player2 = document.createElement("div");
player2.setAttribute("class", "player");
const player2_name = document.createElement("p");
player2_name.innerText = "Player2";
player2.append(player2_name);
//player2 image
const player2_img = document.createElement("img");
player2_img.setAttribute("class", "player-img");
player2_img.setAttribute("id", "player2-img");
player2_img.setAttribute("src", "./pink.png");
player2_img.setAttribute("z-index", "2");

// //putting damage at mouse position
// const game_play_section = document.querySelector("#game_play_section");
// const damage = document.querySelector("#damage-img");
// window.addEventListener("click", (e)=>{
//   game_play_section.append(damage_img);
//   // damage.style.display = "visible";
//   damage.style.top = e.pageY + "px";
//   damage.style.left = e.pageX + "px";
// });

//adding player1_img at random positons inside the geme_play_section
setInterval(() => {
  const randTop = Math.random() * (gpsHeight - 100);
  const randLeft = Math.random() * (gpsWidth - 100);
  player1_img.style.position = "absolute";
  player1_img.style.top = randTop + "px";
  player1_img.style.left = randLeft + "px";
}, 1150);

const clickHandler = () => {
  const welcomeMsg = document.createElement("p");
  welcomeMsg.setAttribute("id", "welcome-msg");
  welcomeMsg.innerText = "Welcome";
  document.body.appendChild(welcomeMsg);
  console.log("Welcome");
};

const startGame = () => {
  // appending player1_img to game_play_section
  game_play_section.append(player1_img);

  // //appending player1_img to game_play_section
  // game_play_section.append(player2_img);

  // //creating crosshair-img
  // const crosshair_img = document.createElement("img");
  // crosshair_img.setAttribute("id", "cursor");
  // crosshair_img.setAttribute("src", "./crosshair.png");

  // // appdending crosshair_img to the gameplay_section
  // game_play_section.append(crosshair_img);

  //creating damage-img
  const damage_img = document.createElement("img");
  damage_img.setAttribute("id", "damage-img");
  damage_img.setAttribute("src", "./damage.png");
  // damage_img.setAttribute("display", "none");
  damage_img.setAttribute("z-index", "3");

  window.addEventListener("click", (e) => {
    // damage.style.display = "visible";
    damage_img.style.top = e.pageY + "px";
    damage_img.style.left = e.pageX + "px";
    game_play_section.append(damage_img);
  });

  // // appdending damage_img to the gameplay_section
  // game_play_section.append(damage_img);

  //appending player1 and player2 to score_info_section
  score_info_section.append(player1);
  score_info_section.append(player2);

  //prepending score_info_section to container
  container.prepend(score_info_section);

  //appending game_play_section to container
  container.append(game_play_section);

  //removing the start button
  const startBtn = document.querySelector("#startBtn");
  const parentElement = document.querySelector("#container");
  startBtn.parentElement.removeChild(startBtn);
};
