/* ==================================================================
   JUEGA — mini runner
   ------------------------------------------------------------------
   Mecánica de "salta el obstáculo" de toda la vida, pero dibujado
   entero por código con tu paleta y tu pegatina "Aa" de protagonista.
   No usa ninguna imagen: pesa nada y se adapta a cualquier pantalla.

   Controles:  espacio / flecha arriba / clic / toque  = saltar
               (mantener pulsado = salto más alto)

   Para tocar la dificultad, mira CONFIG aquí debajo.
================================================================== */
(function(){
  const cv = document.getElementById("juego");
  if (!cv) return;

  const CONFIG = {
    velInicial : 6.2,     // velocidad de salida
    velMax     : 15,      // tope de velocidad
    acelera    : 0.0016,  // cuánto acelera por fotograma
    gravedad   : 0.78,
    impulso    : -13.6,   // fuerza del salto (negativo = hacia arriba)
    sueloY     : 232,     // altura del suelo en el lienzo lógico
    ANCHO      : 900,     // lienzo lógico
    ALTO       : 280
  };

  const COL = {
    fondo : "#205024",
    lime  : "#e7fc3d",
    blanco: "#ffffff",
    hoja  : "#8cc766"
  };

  const ctx = cv.getContext("2d");
  const marcador  = document.getElementById("juegoScore");
  const record    = document.getElementById("juegoBest");
  const overlay   = document.getElementById("juegoOverlay");
  const btn       = document.getElementById("juegoBtn");
  const titulo    = document.getElementById("juegoTitulo");

  let W = CONFIG.ANCHO, H = CONFIG.ALTO;

  /* --- el lienzo se adapta al ancho y a la densidad de pantalla --- */
  function medir(){
    const r = cv.getBoundingClientRect();
    const dpr = Math.min(devicePixelRatio || 1, 2);
    cv.width  = Math.round(r.width  * dpr);
    cv.height = Math.round(r.height * dpr);
    W = r.width; H = r.height;
    ctx.setTransform(dpr,0,0,dpr,0,0);
  }

  /* ------------------------------------------------------------ */
  const suelo = () => H - (CONFIG.ALTO - CONFIG.sueloY);

  let estado = "espera";          // espera | jugando | fin
  let vel, dist, puntos, mejor = 0, obstaculos, nubes, tSalto, animT;

  try { mejor = parseInt(localStorage.getItem("gp-record") || "0", 10) || 0; } catch(e){}
  if (record) record.textContent = String(mejor).padStart(5,"0");

  const bicho = { x:78, y:0, vy:0, w:40, h:40, enSuelo:true, squash:1 };

  function reiniciar(){
    vel = CONFIG.velInicial; dist = 0; puntos = 0; animT = 0;
    obstaculos = []; nubes = [];
    for (let i=0;i<4;i++) nubes.push({x:Math.random()*CONFIG.ANCHO, y:30+Math.random()*70, s:.4+Math.random()*.7});
    bicho.y = suelo() - bicho.h; bicho.vy = 0; bicho.enSuelo = true; bicho.squash = 1;
    if (marcador) marcador.textContent = "00000";
  }

  /* --- obstáculos: pastillas como las etiquetas de tu web --- */
  function nuevoObstaculo(){
    const doble = Math.random() < .22;
    const alto  = 34 + Math.random()*46;
    const ancho = doble ? 46 : 20 + Math.random()*20;
    obstaculos.push({
      x: W + 20, w: ancho, h: alto,
      color: Math.random() < .5 ? COL.lime : COL.blanco
    });
  }

  /* --- salto --- */
  function saltar(){
    if (estado === "espera"){ empezar(); return; }
    if (estado === "fin"){ empezar(); return; }
    if (bicho.enSuelo){
      bicho.vy = CONFIG.impulso;
      bicho.enSuelo = false;
      bicho.squash = .72;          // se achata al despegar
      tSalto = performance.now();
    }
  }
  function soltar(){
    /* si sueltas pronto, el salto es más corto */
    if (!bicho.enSuelo && bicho.vy < -6) bicho.vy = -6;
  }

  function empezar(){
    reiniciar();
    estado = "jugando";
    if (overlay) overlay.classList.remove("on");
  }

  function terminar(){
    estado = "fin";
    if (puntos > mejor){
      mejor = puntos;
      try { localStorage.setItem("gp-record", String(mejor)); } catch(e){}
      if (record) record.textContent = String(mejor).padStart(5,"0");
      if (titulo) titulo.textContent = (typeof t==="function") ? t("juego.nuevo") : "¡Récord!";
    } else if (titulo) titulo.textContent = (typeof t==="function") ? t("juego.otra") : "Otra vez";
    if (btn) btn.textContent = (typeof t==="function") ? t("juego.retry") : "Reintentar";
    if (overlay) overlay.classList.add("on");
  }

  /* ==================== DIBUJO ==================== */
  function dibujaBicho(){
    const s = bicho.squash, w = bicho.w * (2-s), h = bicho.h * s;
    const x = bicho.x, y = bicho.y + (bicho.h - h);
    const r = 11;

    ctx.save();
    ctx.translate(x + w/2, y + h/2);
    ctx.rotate(bicho.enSuelo ? 0 : Math.min(.28, bicho.vy * .012));
    ctx.translate(-w/2, -h/2);

    ctx.fillStyle = COL.lime;
    ctx.beginPath(); ctx.roundRect(0, 0, w, h, r); ctx.fill();

    /* ojos: miran adelante y parpadean de vez en cuando */
    const parpadeo = (animT % 190) < 6;
    ctx.fillStyle = COL.fondo;
    const oy = h*0.40, ow = 4.4, oh = parpadeo ? 1.6 : 8.4;
    ctx.beginPath(); ctx.roundRect(w*0.30, oy, ow, oh, 2); ctx.fill();
    ctx.beginPath(); ctx.roundRect(w*0.56, oy, ow, oh, 2); ctx.fill();
    /* boquita */
    ctx.beginPath(); ctx.roundRect(w*0.38, h*0.66, w*0.24, 3.2, 2); ctx.fill();
    ctx.restore();
  }

  function dibujaFondo(){
    ctx.fillStyle = COL.fondo;
    ctx.fillRect(0,0,W,H);

    /* nubes muy tenues */
    ctx.fillStyle = "rgba(255,255,255,.07)";
    nubes.forEach(n => {
      ctx.beginPath();
      ctx.ellipse(n.x, n.y, 34*n.s, 11*n.s, 0, 0, Math.PI*2);
      ctx.ellipse(n.x+26*n.s, n.y+3*n.s, 22*n.s, 9*n.s, 0, 0, Math.PI*2);
      ctx.fill();
    });

    /* línea de suelo */
    const y = suelo();
    ctx.strokeStyle = "rgba(255,255,255,.34)";
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();

    /* piedrecitas que pasan, para dar sensación de velocidad */
    ctx.fillStyle = "rgba(255,255,255,.22)";
    const off = dist % 60;
    for (let x = -off; x < W; x += 60){
      ctx.fillRect(x, y + 9, 13, 2);
      ctx.fillRect(x + 30, y + 17, 7, 2);
    }
  }

  function dibujaObstaculos(){
    const y = suelo();
    obstaculos.forEach(o => {
      ctx.fillStyle = o.color;
      ctx.beginPath();
      ctx.roundRect(o.x, y - o.h, o.w, o.h, o.w/2);
      ctx.fill();
    });
  }

  /* ==================== BUCLE ==================== */
  let ultimo = 0, raf = null;

  function frame(t){
    raf = requestAnimationFrame(frame);
    const dt = Math.min(2.4, (t - ultimo) / 16.667 || 1);
    ultimo = t;
    animT += dt;

    dibujaFondo();

    if (estado === "jugando"){
      vel = Math.min(CONFIG.velMax, vel + CONFIG.acelera * dt);
      dist += vel * dt;

      /* nubes */
      nubes.forEach(n => {
        n.x -= vel * .16 * n.s * dt;
        if (n.x < -70){ n.x = W + 40; n.y = 26 + Math.random()*70; }
      });

      /* física del bicho */
      bicho.vy += CONFIG.gravedad * dt;
      bicho.y  += bicho.vy * dt;
      const sy = suelo() - bicho.h;
      if (bicho.y >= sy){
        if (!bicho.enSuelo) bicho.squash = 1.25;   // rebote al aterrizar
        bicho.y = sy; bicho.vy = 0; bicho.enSuelo = true;
      }
      bicho.squash += (1 - bicho.squash) * .16 * dt;

      /* obstáculos */
      const ultimoObs = obstaculos[obstaculos.length-1];
      const hueco = 210 + Math.random()*150 + (CONFIG.velMax - vel) * 12;
      if (!ultimoObs || (W - ultimoObs.x) > hueco) nuevoObstaculo();

      obstaculos.forEach(o => o.x -= vel * dt);
      obstaculos = obstaculos.filter(o => o.x + o.w > -10);

      /* choque (con un poco de manga ancha para que no frustre) */
      const m = 6;
      const by = suelo() - bicho.h * bicho.squash;
      for (const o of obstaculos){
        if (bicho.x + bicho.w - m > o.x && bicho.x + m < o.x + o.w &&
            bicho.y + bicho.h - m > suelo() - o.h){
          terminar(); break;
        }
      }

      puntos = Math.floor(dist / 12);
      if (marcador) marcador.textContent = String(puntos).padStart(5,"0");
    }

    dibujaObstaculos();
    dibujaBicho();
  }

  /* ==================== ENTRADAS ==================== */
  function teclaAbajo(e){
    if (e.code === "Space" || e.code === "ArrowUp" || e.key === " " || e.key === "ArrowUp"){
      /* sólo capturamos el espacio si el juego está a la vista */
      const r = cv.getBoundingClientRect();
      if (r.top < innerHeight && r.bottom > 0){ e.preventDefault(); saltar(); }
    }
  }
  addEventListener("keydown", teclaAbajo);
  addEventListener("keyup", e => {
    if (e.code === "Space" || e.code === "ArrowUp") soltar();
  });
  cv.addEventListener("pointerdown", e => { e.preventDefault(); saltar(); });
  cv.addEventListener("pointerup", soltar);
  if (btn) btn.addEventListener("click", e => { e.preventDefault(); empezar(); });

  addEventListener("resize", () => { medir(); if (estado !== "jugando") reiniciar(); });

  /* pausamos si la pestaña se va, para no gastar batería */
  document.addEventListener("visibilitychange", () => {
    if (document.hidden){ cancelAnimationFrame(raf); raf = null; }
    else if (!raf){ ultimo = performance.now(); raf = requestAnimationFrame(frame); }
  });

  /* ==================== ARRANQUE ==================== */
  medir(); reiniciar();
  raf = requestAnimationFrame(frame);
})();
