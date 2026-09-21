/* ==================================================================
   ANALÍTICA — Google Analytics 4, solo si la visita da su permiso
   ------------------------------------------------------------------
   Hasta que alguien pulsa "Aceptar" no se carga nada de Google ni se
   guarda ninguna cookie. La elección se recuerda en este navegador.
================================================================== */
(function(){
  const GA_ID = "G-DJW6MNFP2J";
  const CLAVE = "gp-cookies";              // "si" | "no"
  const tx = (k, es) => (typeof t === "function" ? t(k) : es);

  function leer(){ try { return localStorage.getItem(CLAVE); } catch(e){ return null; } }
  function guardar(v){ try { localStorage.setItem(CLAVE, v); } catch(e){} }

  function cargarGA(){
    if (window.__gaListo) return; window.__gaListo = true;
    const s = document.createElement("script");
    s.async = true; s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(){ dataLayer.push(arguments); };
    gtag("js", new Date());
    gtag("config", GA_ID, { anonymize_ip: true });
  }

  function aviso(){
    const d = document.createElement("div");
    d.className = "cookies"; d.setAttribute("role", "dialog");
    d.setAttribute("aria-label", tx("ck.titulo", "Cookies"));
    d.innerHTML =
      '<p>' + tx("ck.txt", "Uso cookies de analítica para saber cuánta gente visita la web. ¿Me dejas?") + '</p>' +
      '<div class="ck-btns"><button type="button" class="ck-no">' + tx("ck.no", "Rechazar") + '</button>' +
      '<button type="button" class="ck-si">' + tx("ck.si", "Aceptar") + '</button></div>';
    document.body.appendChild(d);
    requestAnimationFrame(() => d.classList.add("on"));
    const cerrar = v => { guardar(v); d.classList.remove("on"); setTimeout(() => d.remove(), 400); if (v === "si") cargarGA(); };
    d.querySelector(".ck-si").onclick = () => cerrar("si");
    d.querySelector(".ck-no").onclick = () => cerrar("no");
  }

  const v = leer();
  if (v === "si") cargarGA();
  else if (v !== "no") {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", aviso);
    else aviso();
  }
})();
