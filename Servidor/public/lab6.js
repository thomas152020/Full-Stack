(() => {
  const canvas = document.getElementById('stage');
  const ctx = canvas.getContext('2d', { alpha: true });

  const CANVAS_W = canvas.width; 
  const CANVAS_H = canvas.height; 


  const svg = `
  <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'>
    <defs>
      <filter id="s" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#000" flood-opacity="0.4"/>
      </filter>
    </defs>
    <circle cx='32' cy='32' r='28' fill='%23ff6b6b' stroke='%23000' stroke-width='2' filter='url(#s)' />
    <circle cx='32' cy='28' r='8' fill='%23fff' fill-opacity='0.85' />
  </svg>`;
  const img = new Image();
  img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);

  
  let imgHalfW = 32;
  let imgHalfH = 32;
  let imgLoaded = false;

  
  let targetX = CANVAS_W / 2;
  let targetY = CANVAS_H / 2;


  let drawX = targetX;
  let drawY = targetY;

  
  img.onload = () => {
    imgLoaded = true;
    imgHalfW = img.width / 2;
    imgHalfH = img.height / 2;
    
    const clamped = clampCenter(targetX, targetY);
    targetX = clamped.x;
    targetY = clamped.y;
    drawX = targetX;
    drawY = targetY;
  };

 
  function clampCenter(cx, cy) {
    const minX = imgHalfW;
    const maxX = CANVAS_W - imgHalfW;
    const minY = imgHalfH;
    const maxY = CANVAS_H - imgHalfH;
    return {
      x: Math.min(maxX, Math.max(minX, cx)),
      y: Math.min(maxY, Math.max(minY, cy))
    };
  }

  
  window.addEventListener('mousemove', (ev) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = ev.clientX - rect.left;
    const mouseY = ev.clientY - rect.top;
    
    const clamped = clampCenter(mouseX, mouseY);
    targetX = clamped.x;
    targetY = clamped.y;
  }, { passive: true });

  
  window.addEventListener('touchmove', (ev) => {
    if (!ev.touches || ev.touches.length === 0) return;
    const t = ev.touches[0];
    const rect = canvas.getBoundingClientRect();
    const touchX = t.clientX - rect.left;
    const touchY = t.clientY - rect.top;
    const clamped = clampCenter(touchX, touchY);
    targetX = clamped.x;
    targetY = clamped.y;
  }, { passive: true });

  
  const ease = 0.18; 
  function render() {
    
    ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);

    
    const clamped = clampCenter(targetX, targetY);
    targetX = clamped.x;
    targetY = clamped.y;

    
    drawX += (targetX - drawX) * ease;
    drawY += (targetY - drawY) * ease;

    
    const drawLeft = drawX - imgHalfW;
    const drawTop = drawY - imgHalfH;

    if (imgLoaded) {
      ctx.drawImage(img, drawLeft, drawTop, img.width, img.height);
    } else {
      
      ctx.save();
      ctx.translate(drawX, drawY);
      ctx.beginPath();
      ctx.fillStyle = '#ff6b6b';
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 2;
      ctx.arc(0, 0, 28, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.fillStyle = '#ffffffcc';
      ctx.arc(0, -4, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    requestAnimationFrame(render);
  }

  
  requestAnimationFrame(render);

 

})();
