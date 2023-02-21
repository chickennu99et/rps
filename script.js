var you = 0;
var bot = 0;
var draw = 0;
function rock()
{
update();
  var rps = Math.floor(Math.random() * 4);
  if(rps==1)
  {
    draw++;
  }else if(rps==2)
  {
    you++;
  }else{
  bot++;
  }
}
function update() {
document.getElementById("botscore").innerText = "the bots wins:" + bot;
document.getElementById("draw").innerText = "draws:" + draw;

document.getElementById("youscore").innerText = "your wins:" + you;
}
