const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = "glenn-quagmire-family-guy-wallpaper-preview.jpg"; // pode trocar a imagem se quiser

// posição inicial no centro
let x = canvas.width / 2;
let y = canvas.height / 2;
const imgSize = 50; // tamanho da imagem (largura = altura)
const half = imgSize / 2;

// posição do mouse
let mouseX = x;
let mouseY = y;

// Atualiza posição do mouse
canvas.addEventListener("mousemove", (e) => {
  const rect = canvas.getBoundingClientRect();
  mouseX = e.clientX - rect.left;
  mouseY = e.clientY - rect.top;
});

// Quando o mouse sai do canvas, trava a posição da imagem
canvas.addEventListener("mouseleave", () => {
  mouseX = Math.min(Math.max(mouseX, half), canvas.width - half);
  mouseY = Math.min(Math.max(mouseY, half), canvas.height - half);
});

// Loop de animação
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // move a imagem gradualmente em direção ao mouse
  x += (mouseX - x) * 0.4;
  y += (mouseY - y) * 0.4;

  // impede que a imagem saia da tela
  x = Math.min(Math.max(x, half), canvas.width - half);
  y = Math.min(Math.max(y, half), canvas.height - half);

  ctx.drawImage(img, x - half, y - half, imgSize, imgSize);
  requestAnimationFrame(draw);
}

img.onload = draw;
