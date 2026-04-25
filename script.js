console.log("loaded");

let startTime = 0;

document.getElementById("startBtn").addEventListener("click", () => {
  const box = document.getElementById("box");
  const info = document.getElementById("info");

  info.innerText = "等待...";

  setTimeout(() => {
    const area = document.getElementById("gameArea");

    let x = Math.random() * (area.clientWidth - 80);
    let y = Math.random() * (area.clientHeight - 80);

    box.style.left = x + "px";
    box.style.top = y + "px";
    box.style.display = "block";

    startTime = Date.now();
    info.innerText = "點擊！";
  }, 1000 + Math.random() * 2000);
});

document.getElementById("box").addEventListener("click", () => {
  let t = Date.now() - startTime;
  document.getElementById("time").innerText = t;
  document.getElementById("box").style.display = "none";
  document.getElementById("info").innerText = "再來一次";
});
