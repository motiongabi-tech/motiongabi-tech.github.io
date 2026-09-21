/* ==================================================================
   gabi pérez — comportamiento del sitio
   ================================================================== */
const $  = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const esc = s => String(s == null ? "" : s)
  .replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");

/* SOLO se publican los proyectos con published:true en projects.js.
   El resto siguen en el archivo pero no salen en la web, para que
   Gabi los revise antes. */
const PUB = () => (typeof PROJECTS === "undefined" ? [] : PROJECTS.filter(p => p.published));

/* En Dirtyline las MAYÚSCULAS son los glifos decorativos y las
   MINÚSCULAS la caja alta limpia. Así que para que salga como en el
   Figma (inicial con swash + resto limpio) escribimos "La besneta". */
const dirty = s => {
  s = String(s || "").trim();
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
};

/* ------------------------------------------------------------------
   1. NAVBAR + aparición al hacer scroll
------------------------------------------------------------------ */
function initChrome(){
  const nav = $("#nav");
  const onScroll = () => nav && nav.classList.toggle("stuck", scrollY > 40);
  onScroll(); addEventListener("scroll", onScroll, {passive:true});

  /* marcamos para revelar y observamos */
  $$(".projects, .tags, .contact-card, .about-text, .about-photo, .about-links")
    .forEach(el => el.setAttribute("data-reveal",""));

  if (!("IntersectionObserver" in window)){
    $$("[data-reveal]").forEach(el => el.classList.add("seen"));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting){ en.target.classList.add("seen"); io.unobserve(en.target); }
    });
  }, {rootMargin:"0px 0px -8% 0px", threshold:.06});
  $$("[data-reveal]").forEach(el => io.observe(el));
}

/* ==================================================================
   2. PROYECTOS — lista + portada al pasar el ratón
================================================================== */
/* la portada del hover: la imagen local si la hay, si no la del portafolio */
function portada(p){ return p.cover || p.thumb; }

function initProjects(){
  const list = $("#projList"); if (!list || typeof PROJECTS === "undefined") return;

  const cover    = $("#projCover");
  const coverImg = $("#projCoverImg");
  const verTodos = $("#verTodos");

  /* En el Figma la home enseña 4 y luego "ver todos". */
  const DESTACADOS = 4;
  const TODOS = PUB();
  let abierto = false;
  let filtro = null;

  /* si sólo hay uno más que los destacados, no merece la pena el botón */
  const verTodosSirve = TODOS.length > DESTACADOS;
  if (!verTodosSirve && verTodos) verTodos.style.display = "none";

  const render = () => {
    const base = TODOS.filter(p => !filtro || (p.tags || []).includes(filtro));
    const items = (abierto || filtro) ? base : base.slice(0, DESTACADOS);
    list.innerHTML = items.map((p,i) => {
      const t = p.ext ? ' target="_blank" rel="noopener"' : "";
      return `<a class="proj-item" data-i="${i}" href="${esc(projectHref(p))}"${t}>
        <span class="proj-name">${esc(dirty(tituloP(p)))}</span>
        <span class="rule"></span>
      </a>`;
    }).join("");
    /* precargamos las portadas que se van a ver */
    items.forEach(p => { const im = new Image(); im.src = portada(p); });
  };
  render();

  const activos = () => {
    const base = TODOS.filter(p => !filtro || (p.tags || []).includes(filtro));
    return (abierto || filtro) ? base : base.slice(0, DESTACADOS);
  };

  /* hover: la portada aparece y el nombre se pone lime */
  const fina = matchMedia("(min-width:901px)").matches;

  list.addEventListener("pointerover", e => {
    const it = e.target.closest(".proj-item"); if (!it) return;
    const p = activos()[+it.dataset.i]; if (!p) return;

    $$(".proj-item").forEach(x => {
      x.classList.toggle("on",  x === it);
      x.classList.toggle("dim", x !== it);
    });
    const src = portada(p);
    if (coverImg.getAttribute("src") !== src){
      coverImg.src = src;
      coverImg.alt = tituloP(p);
    }
    /* la tarjeta se pone a la altura del proyecto señalado, no fija arriba */
    if (fina){
      /* la tarjeta se mide contra su propio contenedor, no contra la
         lista: si no, se queda desplazada hacia arriba */
      const base = cover.offsetParent || list;
      const rf = it.getBoundingClientRect();
      const rb = base.getBoundingClientRect();
      const centro = (rf.top - rb.top) + rf.height/2;
      cover.style.top = Math.round(centro) + "px";
    }
    cover.classList.add("on");
  });

  const salir = () => {
    $$(".proj-item").forEach(x => x.classList.remove("on","dim"));
    cover.classList.remove("on");
  };
  list.addEventListener("pointerleave", salir);

  /* ---- filtro por etiqueta (la seccion "juega") ---- */
  const casan = p => !filtro || (p.tags || []).includes(filtro);

  window.filtrarPorEtiqueta = et => {
    filtro = (filtro === et) ? null : et;
    abierto = true;                         // al filtrar enseñamos todos los que casen
    render(); salir();
    $$(".tag,.tag-sm").forEach(t =>
      t.classList.toggle("activa", t.dataset.tag === filtro));
    const aviso = $("#filtroAviso");
    if (aviso){
      const n = TODOS.filter(casan).length;
      aviso.innerHTML = filtro
        ? `<b>${esc(t("tag." + filtro))}</b> — ${n} ${t(n===1 ? "proy.uno" : "proy.varios")} · <button id="quitarFiltro">${t("proy.quitar")}</button>`
        : "";
      const q = $("#quitarFiltro");
      if (q) q.onclick = () => window.filtrarPorEtiqueta(filtro);
    }
    $("#proyectos").scrollIntoView({behavior:"smooth", block:"start"});
  };

  $$(".tag,.tag-sm").forEach(t => {
    t.style.cursor = "pointer";
    t.setAttribute("role","button");
    t.addEventListener("click", () => window.filtrarPorEtiqueta(t.dataset.tag));
  });

  /* ver todos / ver menos */
  if (verTodos) verTodos.addEventListener("click", e => {
    e.preventDefault();
    abierto = !abierto;
    render(); salir();
    verTodos.querySelector(".vt-label").textContent = t(abierto ? "proy.verMenos" : "proy.verTodos");
    verTodos.querySelector(".vt-arrow").textContent = abierto ? "↑" : "→";
    if (!abierto) $("#proyectos").scrollIntoView({behavior:"smooth", block:"start"});
  });
}

/* ==================================================================
   3. FORMULARIO DE CONTACTO  (FormSubmit — gratis, sin registro)
   ------------------------------------------------------------------
   La PRIMERA vez que se envía algo, FormSubmit manda un correo de
   confirmación: hay que abrirlo y pulsar el enlace UNA vez.
================================================================== */
function initForm(){
  const form = $("#contactForm"); if (!form) return;
  const msg  = $("#formMsg");
  const btn  = form.querySelector("button.send");
  const mail = form.dataset.email;

  form.addEventListener("submit", async e => {
    e.preventDefault();
    if (form.querySelector('[name="_honey"]').value) return;

    const d = Object.fromEntries(new FormData(form).entries());
    const nombre = [d.firstname, d.lastname].filter(Boolean).join(" ").trim();

    if (!nombre || !d.email || !d.message){
      msg.className = "form-msg err";
      msg.textContent = t("form.falta");
      return;
    }

    btn.disabled = true;
    msg.className = "form-msg";
    msg.textContent = t("form.enviando");

    /* Si el envío directo no es posible (página abierta como archivo,
       sin conexión o FormSubmit sin activar) el mensaje no se pierde:
       se abre el correo de quien escribe con todo ya rellenado. */
    const porCorreo = aviso => {
      const cuerpo = d.message + "\n\n— " + nombre + " (" + d.email + ")";
      const url = "mailto:" + mail + "?subject=" + encodeURIComponent(t("form.asunto") + " — " + nombre) +
                  "&body=" + encodeURIComponent(cuerpo);
      const a = document.createElement("a");
      a.href = url; a.target = "_blank"; a.rel = "noopener";
      document.body.appendChild(a); a.click(); a.remove();
      msg.className = "form-msg";
      msg.innerHTML = aviso + ' ' + t("form.sinoabre") + ' <a href="' + url +
                      '" style="text-decoration:underline">' + mail + '</a>.';
    };

    try{
      if (!/^https?:$/.test(location.protocol)) throw new Error("sin servidor");
      const r = await fetch("https://formsubmit.co/ajax/" + mail, {
        method:"POST",
        headers:{"Content-Type":"application/json","Accept":"application/json"},
        body: JSON.stringify({
          name: nombre, email: d.email, message: d.message,
          _replyto: d.email,
          _subject:"Nuevo mensaje desde tu web", _template:"table", _captcha:"false"
        })
      });
      const j = await r.json();
      if (j.success === "true" || j.success === true){
        form.reset();
        msg.className = "form-msg ok";
        msg.textContent = t("form.ok");
      } else { throw new Error(j.message || "error"); }
    }catch(err){
      porCorreo(t("form.abro"));
    }finally{ btn.disabled = false; }
  });
}


/* ==================================================================
   4. PÁGINA DE PROYECTO — replica los frames del Figma
   ------------------------------------------------------------------
   Orden de la página, igual que en el archivo PORTAFOLIO:
     hero · marquee · brief · secciones numeradas · cierre · footer
   El título va en Dirtyline y la barra de arriba es la de la landing;
   todo lo demás sale tal cual del Figma (casos.js).
================================================================== */

/* --- vectores: los de una tinta van incrustados (vectores.js) --- */
const SVG = {
  hilos   : (typeof VECTOR !== "undefined") ? VECTOR.hilos   : "",
  besneta : (typeof VECTOR !== "undefined") ? VECTOR.besneta : "",
  canva   : (typeof VECTOR !== "undefined") ? VECTOR.canva   : "",
  mascota : "img/vector/besneta-mascota.svg"
};

/* Los vectores de una sola tinta (patrón y logotipos) se pintan con
   una máscara CSS: así heredan el color y no hacen falta peticiones
   —funciona también abriendo el archivo directamente, sin servidor. */
function ponSvg(el, url){
  if (!url) return;
  el.style.webkitMaskImage = `url("${url}")`;
  el.style.maskImage = `url("${url}")`;
}

/* ---------- utilidades ---------- */
/* Los titulares vienen como array: una entrada por linea, tal y como
   Gabi partio el texto en el Figma. Se respetan esos saltos. */
function lineas(v){
  if (v == null) return "";
  return (Array.isArray(v) ? v : [v]).map(esc).join("<br>");
}
function parrafos(v){
  if (v == null) return "";
  return (Array.isArray(v) ? v : [v]).filter(Boolean)
    .map(t => `<p class="c-brief-txt">${esc(t)}</p>`).join("");
}
function estilo(pares){
  return Object.entries(pares).filter(([,v]) => v)
    .map(([k,v]) => `${k}:${v}`).join(";");
}

/* ---------- piezas sueltas ---------- */
function piePie(t, ink){
  if (!t) return "";
  return `<figcaption class="c-pie"${ink?` style="color:${ink}"`:""}>${esc(t)}</figcaption>`;
}

function pieza(p, extra=""){
  if (!p) return "";
  const ar = p.ar ? `style="aspect-ratio:${p.ar}"` : "";
  const ins = p.insignia ? `<span class="c-insignia">${esc(p.insignia)}</span>` : "";

  /* tarjeta de color con texto, en vez de una imagen */
  if (p.panel){
    const t = p.panel;
    return `<div class="c-panel" style="${estilo({background:t.bg, color:t.ink})}">
      ${t.ep ? `<p class="c-ep" style="${estilo({color:t.epInk})}">${esc(t.ep)}</p>` : ""}
      ${t.tit ? `<h3 class="c-panel-tit" style="${estilo({color:t.titInk})}">${lineas(t.tit)}</h3>` : ""}
      ${t.txt ? `<p class="c-panel-txt">${esc(t.txt)}</p>` : ""}
    </div>`;
  }

  if (p.apilado)
    return `<div class="c-apilado">${p.apilado.map(q => pieza(q)).join("")}</div>`;

  /* Vídeo alojado fuera. Si hay URL se incrusta; si no, se deja una
     tarjeta sobria en la paleta del proyecto en vez de un hueco roto. */
  if (p.embed){
    if (p.url)
      return `<figure class="c-card ${extra}">
        <div class="c-hueco c-embed con-video" ${ar}>
          <iframe src="${esc(p.url)}" title="${esc(p.pie||"vídeo")}" loading="lazy"
            allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>${piePie(p.pie, p.pieInk)}</figure>`;
    return `<figure class="c-card ${extra}">
      <div class="c-hueco c-espera" ${ar}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z" fill="currentColor"/></svg>
      </div>${piePie(p.pie, p.pieInk)}</figure>`;
  }

  if (p.video){
    const gif = /\.gif$/i.test(p.video);
    /* El vídeo no se descarga hasta que se acerca a la pantalla: con 33
       piezas en el sitio, cargarlos todos de golpe sería una barbaridad.
       Se arranca y se para solo al entrar y salir de la vista. */
    const medio = gif
      ? `<img src="${esc(p.video)}" alt="${esc(p.pie||"")}" loading="lazy" decoding="async">`
      : `<video data-src="${esc(p.video)}" ${p.poster?`poster="${esc(p.poster)}"`:""}
                loop muted playsinline preload="none"
                aria-label="${esc(p.pie||"vídeo")}"></video>`;
    return `<figure class="c-card ${extra}"><div class="c-hueco" ${ar}>${medio}${ins}</div>${piePie(p.pie, p.pieInk)}</figure>`;
  }

  return `<figure class="c-card ${extra}" data-full="${esc(p.src)}">
    <div class="c-hueco" ${ar}><img src="${esc(p.src)}" alt="${esc(p.pie||"")}"
      loading="lazy" decoding="async">${ins}</div>${piePie(p.pie, p.pieInk)}</figure>`;
}

function fila(f){
  const est = `style="grid-template-columns:${f.cols || "1fr"}"`;
  const cls = f.tarjeta ? "c-fila con-tarjeta" : "c-fila";
  const va  = f.tarjeta ? `style="--tarjeta:${f.tarjeta}"` : "";
  return `<div class="${cls}" ${est} ${va}>${f.piezas.map(p => pieza(p)).join("")}</div>`;
}

/* ---------- los bloques que aparecen dentro de una sección ---------- */
function bloque(b){
  switch (b.tipo){

    case "filas":
    case "mosaico":
      return `<div class="${b.tipo==="mosaico"?"c-mosaico":"c-filas"}">
                ${b.filas.map(fila).join("")}</div>`;

    case "wordmark":
      return `<div class="c-wordmark" data-svg="besneta" style="color:${b.color}"></div>`;

    case "rejilla":
      return `<div class="c-rejilla" style="grid-template-columns:repeat(${b.cols},1fr)">
        ${b.piezas.map(p => `
          <figure class="c-tile" style="background:${p.bg};color:${p.color}
                 ${b.alto?`;min-height:${b.alto}px`:""}">
            <span class="c-tile-logo" data-svg="besneta"></span>
            ${piePie(p.pie)}
          </figure>`).join("")}
      </div>${b.pie?`<p class="c-pie suelto">${esc(b.pie)}</p>`:""}`;

    case "swatches":
      return `<div class="c-swatches">${b.piezas.map(([n,hex,uso]) => `
        <div class="c-swatch">
          <span class="c-muestra" style="background:${hex}"></span>
          <b>${esc(n)}</b><span class="c-hex">${esc(hex)} ${esc(uso)}</span>
        </div>`).join("")}</div>`;

    case "specimen":
      /* cada muestra se ve en su propia tipografía: si no, no dice nada */
      return `<div class="c-specimen">${b.piezas.map(([n,uso]) => `
        <div class="c-tipo">
          <span class="c-aabb" style="font-family:'${n}',Archivo,sans-serif">AaBb</span>
          <b>${esc(n)}</b><span class="c-uso">${esc(uso)}</span></div>`).join("")}</div>`;

    case "colorways":
      return `<div class="c-colorways">${b.piezas.map(([bg,tinta]) => `
        <span class="c-cw" style="background:${bg};color:${tinta}" data-svg="hilos"></span>`).join("")}
        </div>${b.pie?`<p class="c-pie suelto">${esc(b.pie)}</p>`:""}`;

    case "correos":
      return `<div class="c-correos">${b.piezas.map(p => `
        <figure class="c-card" data-full="${esc(p.src)}">
          <div class="c-sobre"><img src="${esc(p.src)}" alt="${esc(p.pie||"")}" loading="lazy"></div>
          ${piePie(p.pie)}</figure>`).join("")}</div>`;

    case "pares":
      return `<div class="c-pares">${b.piezas.map(p => `
        <div class="c-par">
          <div class="c-par-head"><span class="c-par-n">${esc(p.n)}</span>
            ${p.txt ? `<p class="c-par-txt">${esc(p.txt)}</p>` : ""}</div>
          <div class="comparador" data-comp>
            <div class="cmp-img cmp-b"><img src="${esc(p.despues)}" alt="${t("caso.despues")}" loading="lazy">
              <span class="cmp-tag der">${t("caso.despues")}</span></div>
            <div class="cmp-img cmp-a"><img src="${esc(p.antes)}" alt="${t("caso.antes")}" loading="lazy">
              <span class="cmp-tag">${t("caso.antes")}</span></div>
            <input type="range" min="0" max="100" value="50" class="cmp-rango"
                   aria-label="${t("caso.comparar")}">
            <span class="cmp-tirador" aria-hidden="true"></span>
          </div>
        </div>`).join("")}</div>`;

    case "pie2":
      return `<div class="c-pie2"><span>${esc(b.izq)}</span><span>${esc(b.der)}</span></div>`;

    /* un rótulo suelto que separa dos grupos dentro de la misma sección */
    case "rotulo":
      return `<p class="c-rotulo"${b.ink?` style="color:${b.ink}"`:""}>${esc(b.txt)}</p>`;

    /* la tabla de asuntos de correo de Bumbba */
    case "asuntos":
      return `<div class="c-asuntos" style="grid-template-columns:repeat(${b.cols||2},1fr)">
        ${b.lineas.map(([n,t]) => `<p class="c-asunto">
          <b style="${estilo({color:b.nInk})}">${esc(n)}</b><span>${esc(t)}</span></p>`).join("")}
      </div>`;
  }
  return "";
}

/* ---------- las piezas grandes de la página ---------- */
/* La línea de cliente/año va pegada al pie del hero. Si el hero lleva
   degradado y acaba en un color claro, la tinta del Figma (blanca) se
   pierde: en ese caso se usa una tinta oscura para que se lea. */
function tintaLegible(h){
  if (!h.bgGrad) return "";
  const hex = (h.bgGrad.match(/#[0-9a-f]{6}/gi) || []).pop();
  if (!hex) return "";
  const n = parseInt(hex.slice(1), 16);
  const lum = (0.2126*(n>>16 & 255) + 0.7152*(n>>8 & 255) + 0.0722*(n & 255)) / 255;
  return lum > 0.62 ? "rgba(20,20,30,.55)" : "";
}

function heroCaso(c, p){
  const h = c.hero;
  const pills = (h.pills||[]).map(([t,bg,ink]) =>
    `<span class="c-pill" style="background:${bg};color:${ink}">${esc(t)}</span>`).join("");
  let arte = "";
  if (h.patron)  arte += `<span class="c-patron" style="color:${h.patron}" data-svg="hilos"></span>`;
  if (h.mascota) arte += `<img class="c-mascota" src="${SVG.mascota}" alt="" aria-hidden="true">`;
  if (h.imagen)  arte += `<div class="c-hero-img">${pieza(h.imagen)}</div>`;
  if (h.flotantes) arte += `<div class="c-flotantes">${h.flotantes.map((f,i) =>
      `<img src="${esc(f.src)}" alt="" style="--w:${f.w}px" class="c-flota f${i+1}">`).join("")}</div>`;

  const fondo = estilo({"--bg":h.bg, "--ink":h.ink, "background-image":h.bgGrad});
  return `<section class="c-hero" style="${fondo}">
    ${arte}
    <div class="c-in">
      <a class="c-volver" href="index.html#proyectos">${t("caso.volver")}</a>
      <h1 class="c-titulo" style="${estilo({color:h.tituloInk})}">${esc(dirty(h.titulo))}</h1>
      ${h.sub ? `<p class="c-sub">${lineas(h.sub)}</p>` : ""}
      <div class="c-pills">${pills}</div>
      ${h.meta ? `<p class="c-meta" style="${estilo({color:tintaLegible(h)})}">${esc(h.meta)}</p>` : ""}
    </div>
  </section>`;
}

function marqueeCaso(m){
  const uno = m.voces.map(v =>
    `<span>${esc(v)}</span><i>${esc(m.sep)}</i>`).join("");
  /* la cinta es una banda de color sobre el fondo de la sección, y en
     el Figma va ligeramente girada */
  const est = estilo({"--bg":m.bg, "--ink":m.ink, "--banda":m.banda || m.bg,
                      "--giro":(m.giro ? m.giro + "deg" : "0deg")});
  return `<section class="c-marquee${m.banda?" con-banda":""}" style="${est}" aria-hidden="true">
    <div class="c-banda">${uno}${uno}${uno}${uno}</div></section>`;
}

function briefCaso(b){
  const meta = b.meta.map(([k,v]) =>
    `<div class="c-dato"><h4>${esc(k)}</h4><p>${esc(v)}</p></div>`).join("");
  const cifras = b.cifras ? `<div class="c-cifras">${b.cifras.map(([n,t]) =>
    `<div class="c-cifra"><b>${esc(n)}</b><span>${esc(t)}</span></div>`).join("")}</div>` : "";
  return `<section class="c-brief" style="--bg:${b.bg};--ink:${b.ink}">
    <div class="c-in">
      <div class="c-cols">
        <div class="c-texto">
          <p class="c-ep" style="${estilo({color:b.epInk})}">${esc(b.ep)}</p>
          <h2 class="c-brief-tit">${lineas(b.tit)}</h2>
          ${parrafos(b.txt)}
        </div>
        <div class="c-ficha">${meta}</div>
      </div>
      ${cifras}
    </div>
  </section>`;
}

function seccionCaso(s){
  const patron = s.patron
    ? `<span class="c-patron esquina" style="color:${s.patron}" data-svg="hilos"></span>` : "";
  return `<section class="c-sec ${s.sangrado?"sangra":""}" style="--bg:${s.bg};--ink:${s.ink}">
    ${patron}
    <div class="c-in">
      <p class="c-ep" style="${estilo({color:s.epInk})}">${esc(s.ep)}</p>
      ${(s.tit && s.tit.length) ? `<h2 class="c-sec-tit">${lineas(s.tit)}</h2>` : ""}
      ${s.txt ? `<p class="c-sec-txt">${esc(s.txt)}</p>` : ""}
      ${s.bloques.map(bloque).join("")}
      ${s.sticker ? `<span class="c-sticker">${esc(s.sticker.txt || s.sticker)}</span>` : ""}
    </div>
  </section>`;
}

function cierreCaso(c){
  const z = c.cierre;
  const tools = (z.tools||[]).map(t => `<span class="c-tool">${esc(t)}</span>`).join("");
  let firma = "";
  if (z.logo)   firma = `<div class="c-firma-logo" data-svg="${z.logo}"></div>`;
  if (z.rotulo) firma = `<p class="c-firma-txt" style="${estilo({color:z.rotuloInk})}">${esc(dirty(z.rotulo))}</p>`;
  const patron = z.patron
    ? `<span class="c-patron centro" style="color:${z.patron}" data-svg="hilos"></span>` : "";
  return `<section class="c-cierre" style="${estilo({"--bg":z.bg,"--ink":z.ink,"background-image":z.bgGrad})}">
    ${patron}
    <div class="c-in">
      <div class="c-tools">${tools}</div>
      ${firma}
      ${z.mascota ? `<img class="c-mascota chica" src="${SVG.mascota}" alt="" aria-hidden="true">` : ""}
      ${z.lema ? `<p class="c-lema">${esc(z.lema)}</p>` : ""}
      ${z.enlace ? `<a class="c-enlace" href="${esc(z.enlace.url)}" target="_blank"
                      rel="noopener">${esc(z.enlace.txt)}</a>` : ""}
    </div>
  </section>`;
}

function footerCaso(sig){
  const s = sig ? PROJECTS.find(x => x.slug === sig) : null;
  return `<footer class="c-foot">
    ${s ? `<a class="c-sig" href="proyecto.html?p=${esc(s.slug)}">
        <span class="c-sig-lbl">${t("caso.sig")}</span>
        <span class="c-sig-nom">${esc(dirty(tituloP(s)))} →</span></a>` : ""}
    <div class="c-barra">
      <span>${t("caso.pie")}</span>
      <span>© <span id="yr"></span> GABI PÉREZ</span>
      <span>${t("caso.disp")}</span>
    </div>
  </footer>`;
}

/* ================================================================== */
function initProject(){
  const root = $("#project"); if (!root) return;
  const cont = $("#pCaso"); if (!cont) return;

  const slug = new URLSearchParams(location.search).get("p");
  const p = PROJECTS.find(x => x.slug === slug);
  if (!p || p.ext || !p.published){ location.replace("index.html#proyectos"); return; }

  const c = casosIdioma()[slug] || null;
  if (!c){ location.replace("index.html#proyectos"); return; }

  document.title = `gabi pérez — ${tituloP(p)}`;
  document.body.style.setProperty("--nav-tinta", c.hero.ink);

  const secciones = c.secciones.map(seccionCaso).join("");
  const brief = c.brief ? briefCaso(c.brief) : "";
  cont.innerHTML =
      heroCaso(c, p)
    + (c.marquee ? marqueeCaso(c.marquee) : "")
    + (c.brief && c.brief.despues ? secciones + brief : brief + secciones)
    + cierreCaso(c)
    + footerCaso(c.siguiente);

  const yr = $("#yr"); if (yr) yr.textContent = new Date().getFullYear();

  /* los vectores de una tinta se aplican como máscara */
  document.documentElement.style.setProperty("--hilos", `url("${SVG.hilos}")`);
  $$("[data-svg]").forEach(el => ponSvg(el, SVG[el.dataset.svg]));

  /* comparadores con tirador */
  $$("[data-comp]").forEach(cp => {
    const r = cp.querySelector(".cmp-rango");
    const a = cp.querySelector(".cmp-a");
    const t = cp.querySelector(".cmp-tirador");
    const set = v => { a.style.clipPath = `inset(0 ${100-v}% 0 0)`; t.style.left = v + "%"; };
    set(50);
    r.addEventListener("input", () => set(+r.value));
  });

  /* visor: clic en cualquier foto */
  montarLightbox(tituloP(p));
  const fotos = $$(".c-card[data-full]").map(f => f.dataset.full);
  cont.addEventListener("click", e => {
    const f = e.target.closest(".c-card[data-full]"); if (!f) return;
    window.__abrirLightbox(fotos.indexOf(f.dataset.full), fotos);
  });

  /* El título va en Dirtyline y cada proyecto tiene un nombre de un
     largo distinto: lo ajustamos para que quepa de una línea sin
     comerse la pieza gráfica que va al lado. */
  ajustarTitulo();
  addEventListener("resize", ajustarTitulo, {passive:true});
  /* la Dirtyline puede llegar después del primer cálculo: se repite */
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(ajustarTitulo);

  arrancarVideos();

  /* el marquee se para si el visitante prefiere menos movimiento */
  if (matchMedia("(prefers-reduced-motion:reduce)").matches)
    $$(".c-banda").forEach(b => b.style.animation = "none");
}

/* Carga y reproduce cada vídeo solo mientras está a la vista. Con 33
   piezas en movimiento en el sitio, descargarlas todas de golpe sería
   una barbaridad. Si el visitante prefiere menos movimiento, se quedan
   quietas y con los controles a mano. */
function arrancarVideos(){
  const vids = $$("video[data-src]");
  if (!vids.length) return;
  const quieto = matchMedia("(prefers-reduced-motion:reduce)").matches;

  if (quieto || !("IntersectionObserver" in window)){
    vids.forEach(v => { v.src = v.dataset.src; v.controls = true; });
    return;
  }
  const io = new IntersectionObserver(es => {
    es.forEach(e => {
      const v = e.target;
      if (e.isIntersecting){
        if (!v.src) v.src = v.dataset.src;
        v.play().catch(() => { v.controls = true; });   /* si el navegador se niega, controles */
      } else if (!v.paused){
        v.pause();
      }
    });
  }, {rootMargin:"250px 0px"});
  vids.forEach(v => io.observe(v));
}

/* Ajusta el cuerpo del título del hero para que quepa de una línea.
   Cada proyecto tiene un nombre de largo muy distinto ("Canva" frente
   a "Las Sinsombrero"), así que un tamaño fijo no vale: medimos el
   texto y escalamos una sola vez. */
function ajustarTitulo(){
  const t = $(".c-titulo"); if (!t) return;
  const caja = t.parentElement; if (!caja) return;
  /* si al lado va una pieza gráfica, el título termina antes de ella */
  const arte = $(".c-hero-img, .c-flotantes, .c-mascota");
  let disponible = caja.clientWidth;
  if (arte && innerWidth > 900){
    const hueco = arte.getBoundingClientRect().left - t.getBoundingClientRect().left - 28;
    disponible = (hueco > 200) ? Math.min(disponible, hueco) : disponible * .55;
  }
  if (!disponible) return;

  t.style.fontSize = "";
  t.style.whiteSpace = "nowrap";
  const base = parseFloat(getComputedStyle(t).fontSize);
  const r = document.createRange(); r.selectNodeContents(t);
  const real = r.getBoundingClientRect().width;
  if (real > 0 && real > disponible){
    t.style.fontSize = Math.max(34, base * (disponible / real)) + "px";
  }
}

/* ==================================================================
   4b. VISOR GRANDE
================================================================== */
function montarLightbox(titulo){
  const lb = $("#lb"); if (!lb) return;
  const lbImg = $("#lbImg"), lbCap = $("#lbCap");
  let lista = [], cur = 0;

  const show = n => {
    if (!lista.length) return;
    cur = (n + lista.length) % lista.length;
    lbImg.src = lista[cur];
    lbImg.alt = titulo || "";
    lbCap.textContent = `${titulo || ""} — ${cur+1}/${lista.length}`;
    lb.classList.add("on"); lb.setAttribute("aria-hidden","false");
    document.body.classList.add("sin-scroll");
  };
  const hide = () => {
    lb.classList.remove("on"); lb.setAttribute("aria-hidden","true");
    document.body.classList.remove("sin-scroll");
  };
  window.__abrirLightbox = (n, l) => { lista = l || []; show(n < 0 ? 0 : n); };

  $("#lbX").onclick    = hide;
  $("#lbPrev").onclick = () => show(cur-1);
  $("#lbNext").onclick = () => show(cur+1);
  lb.addEventListener("click", e => { if (e.target === lb) hide(); });
  addEventListener("keydown", e => {
    if (!lb.classList.contains("on")) return;
    if (e.key === "Escape")     hide();
    if (e.key === "ArrowRight") show(cur+1);
    if (e.key === "ArrowLeft")  show(cur-1);
  });
}

/* ------------------------------------------------------------------ */
/* ==================================================================
   CURSOR "Versión 05_ok" — se escapa cuando te acercas y no hay
   manera de alcanzarlo.
================================================================== */
function cursorEsquivo(){
  const t = $(".cursor-tag"); if (!t || t.dataset.esquiva) return;
  t.dataset.esquiva = "1";
  const zona = t.closest(".hero") || t.parentElement;
  /* Persigue al ratón por el banner, pero siempre se queda a GAP px:
     si vas a por él, recula; si lo arrinconas, se cuela por el otro lado. */
  const GAP = 95;
  let dx = 0, dy = 0, tx = 0, ty = 0, px = null, py = null, anda = false;

  const objetivo = () => {
    const r = t.getBoundingClientRect(), z = zona.getBoundingClientRect();
    if (!r.width) return;
    const w = r.width, h = r.height;
    const hx = r.left - dx + w/2, hy = r.top - dy + h/2;          /* su sitio */
    const dentro = px !== null && px >= z.left && px <= z.right && py >= z.top && py <= z.bottom;
    if (!dentro){ tx = 0; ty = 0; return; }                       /* sin ratón: a casa */
    const cx = r.left + w/2, cy = r.top + h/2;                    /* dónde está ahora */
    let vx = cx - px, vy = cy - py, n = Math.hypot(vx, vy);
    if (n < 1){ vx = 1; vy = 0; n = 1; }
    const colocar = (ux, uy) => {
      let x = px + ux*GAP, y = py + uy*GAP;
      x = Math.min(z.right - w/2 - 12, Math.max(z.left + w/2 + 12, x));
      y = Math.min(z.bottom - h/2 - 40, Math.max(z.top + h/2 + 70, y));
      return [x, y];
    };
    let [x, y] = colocar(vx/n, vy/n);
    if (Math.hypot(x - px, y - py) < GAP*.7) [x, y] = colocar(-vx/n, -vy/n);
    tx = x - hx; ty = y - hy;
  };

  const paso = () => {
    objetivo();
    dx += (tx - dx) * .09; dy += (ty - dy) * .09;
    t.style.translate = `${dx.toFixed(1)}px ${dy.toFixed(1)}px`;
    if (Math.abs(tx - dx) > .3 || Math.abs(ty - dy) > .3) requestAnimationFrame(paso);
    else anda = false;
  };
  const mueve = e => {
    px = e.clientX; py = e.clientY;
    if (!anda){ anda = true; requestAnimationFrame(paso); }
  };
  addEventListener("pointermove", mueve, {passive:true});
  addEventListener("pointerdown", mueve, {passive:true});
  document.addEventListener("pointerleave", () => { px = null; mueve({clientX:null, clientY:null}); px = null; });
  addEventListener("scroll", () => { if (!anda){ anda = true; requestAnimationFrame(paso); } }, {passive:true});
}

initChrome();
cursorEsquivo();
initProjects();
initForm();
initProject();
