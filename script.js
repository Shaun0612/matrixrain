// 背景動畫 - 駭客任務代碼雨
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const columns = Math.floor(canvas.width / 20);
const drops = Array(columns).fill(0);

function drawMatrix() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#0F0';
  ctx.font = '20px monospace';

  drops.forEach((y, x) => {
    const text = String.fromCharCode(0x30A0 + Math.random() * 96);  // 隨機生成日文字符
    ctx.fillText(text, x * 20, y * 20);

    if (y * 20 > canvas.height && Math.random() > 0.975) {
      drops[x] = 0;
    }
    drops[x]++;
  });
}

setInterval(drawMatrix, 50);

function canvasResize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drawMatrix();
}
