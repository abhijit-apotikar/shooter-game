//custom cursor
const cursor = document.querySelector("#cursor-img");
window.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
});

let score = 0;

const container = document.getElementById("container");

//creating score_info_section
const score_info_section = document.createElement("div");
score_info_section.setAttribute("id", "score-info-section");

//score text
const score_text = document.createElement("p");
score_text.innerText = "Score: 0";
score_text.setAttribute("id", "score-text");

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
player1_img.setAttribute("src", "https://drive.google.com/uc?export=view&id=1-INzQowmlSO2QeOESQtyAbdkOC-9Vi3Y");
player1_img.setAttribute("alt", "player1.png");
player1_img.setAttribute("z-index", 2);

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
player2_img.setAttribute("src", "https://drive.google.com/uc?export=view&id=10BdeVevxH6IfsxdAf5eA2nQ2mY_odxJ4");
player2_img.setAttribute("alt", "player2.png");
player2_img.setAttribute("z-index", 2);

//creating damage-img
const damage_img = document.createElement("img");
damage_img.setAttribute("id", "damage-img");
damage_img.setAttribute("src", "https://drive.google.com/uc?export=view&id=1aoFxGBq5_nc6HkPSj3LePWZpgalNVx0g");
player2_img.setAttribute("alt", "damage_img.png");
damage_img.setAttribute("z-index", 3);

//adding player1_img at random positons inside the geme_play_section
setInterval(() => {
  const randTop = Math.random() * (gpsHeight - 100);
  const randLeft = Math.random() * (gpsWidth - 100);
  player1_img.style.position = "absolute";
  player1_img.style.top = randTop + "px";
  player1_img.style.left = randLeft + "px";
}, 1300);

//making the damage disappear after 200ms
setInterval(() => {
  damage_img.parentElement.removeChild(damage_img);
}, 650);

//moving damge-img and calculating score
window.addEventListener("click", (e) => {
  damage_img.style.top = e.pageY + "px";
  damage_img.style.left = e.pageX + "px";
  game_play_section.append(damage_img);
  if (e.target == player1_img) score++;
  score_text.innerText = `Score: ${score}`;
});

const startGame = () => {
  game_play_section.append(player1_img);

  score_info_section.append(player1);
  score_info_section.append(score_text);
  score_info_section.append(player2);

  container.prepend(score_info_section);

  container.append(game_play_section);

  const startBtn = document.querySelector("#startBtn");
  startBtn.parentElement.removeChild(startBtn);
};
