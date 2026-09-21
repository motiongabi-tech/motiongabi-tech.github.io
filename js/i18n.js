/* ==================================================================
   IDIOMA — español / inglés
   ------------------------------------------------------------------
   · Los textos fijos de la página llevan data-i18n="clave".
   · Los proyectos salen de casos.js (ES) o casos-en.js (EN).
   · Se recuerda la elección; la primera vez se usa el idioma del
     navegador. También vale ?lang=en / ?lang=es en la URL.
================================================================== */
const IDIOMAS = ["es", "en"];

function leerIdioma(){
  try{
    const q = new URLSearchParams(location.search).get("lang");
    if (IDIOMAS.includes(q)){ localStorage.setItem("gp-lang", q); return q; }
    const s = localStorage.getItem("gp-lang");
    if (IDIOMAS.includes(s)) return s;
  }catch(e){}
  return (navigator.language || "es").toLowerCase().startsWith("es") ? "es" : "en";
}
let LANG = leerIdioma();

const TXT = {
  es: {
    "meta.title": "gabi pérez — motion design, ilustración y diseño gráfico",
    "nav.about": "about me", "nav.proyectos": "proyectos", "nav.juega": "juega", "nav.contacto": "contacto",
    "hero.note1": "¡Hola! Hago de todo: ilustración / animación / diseño gráfico / fotografía / IA",
    "hero.note2": "y toda la magia creativa que hay entre medias",
    "tag.branding": "branding", "tag.ads": "ads", "tag.marketing": "marketing", "tag.packaging": "packaging",
    "tag.fotografía": "fotografía", "tag.motion graphics": "motion graphics", "tag.diseño": "diseño",
    "tag.ia": "ia", "tag.mailing": "mailing", "tag.ilustración": "ilustración",
    "proy.verTodos": "ver todos", "proy.verMenos": "ver menos",
    "proy.uno": "proyecto", "proy.varios": "proyectos", "proy.quitar": "quitar filtro",
    "juego.lbl": "salta las pastillas", "juego.score": "score", "juego.record": "récord",
    "juego.t": "¿Jugamos?", "juego.btn": "Empezar", "juego.help": "espacio · flecha arriba · clic — para saltar",
    "juego.nuevo": "¡Récord!", "juego.otra": "Otra vez", "juego.retry": "Reintentar",
    "juego.aria": "Mini juego: salta los obstáculos",
    "contacto.tit": "Contacto", "contacto.reach": "ESCRÍBEME",
    "form.nombre": "Nombre", "form.apellido": "Apellido", "form.email": "Email",
    "form.permiso": "Doy permiso a Gabi Pérez para contactarme en este email.",
    "form.mensaje": "Escribe tu mensaje aquí",
    "form.fine": "Este formulario está protegido y tus datos sólo se usan para responderte. Consulta la",
    "form.priv": "política de privacidad", "form.send": "Enviar",
    "form.falta": "Falta rellenar algún campo.", "form.enviando": "Enviando…",
    "form.ok": "¡Enviado! Te contesto en cuanto lo lea :)",
    "form.abro": "Te abro tu correo con el mensaje ya escrito.",
    "form.sinoabre": "Si no se abre nada, escríbeme a",
    "form.asunto": "Mensaje desde tu web",
    "form.activar": "El formulario todavía no está activado (falta pulsar el enlace de activación de FormSubmit).",
    "about.tit": "About me",
    "about.p1": "¡HOLA!<br>SOY GABI, MOTION DESIGNER, ILUSTRADORA Y DISEÑADORA GRÁFICA FREELANCE. AHORA VIVO FELIZ JUNTO A LA PLAYA EN ALICANTE.",
    "about.p2": "A LO LARGO DE LOS AÑOS HE CREADO CONTENIDO VISUAL PARA MARCAS COMO CANVA, MAHOU, CORREOS, MINISO, CAPRI-SUN, HERO, LA VANGUARDIA O PLAYMOBIL, ENTRE OTRAS. ME GUSTA TRABAJAR CON ESTILOS Y FORMATOS DISTINTOS PARA DAR VIDA A LAS IDEAS CON DISEÑO Y ANIMACIÓN.",
    "about.p3": "ME ENCANTA CREAR COSAS QUE CONECTAN CON LA GENTE — Y SI SE MUEVEN O BAILAN UN POCO, MEJOR :)",
    "about.proyectos": "PROYECTOS",
    "foot.lugar": "Alicante, España",
    "caso.volver": "← TODOS LOS PROYECTOS", "caso.sig": "SIGUIENTE PROYECTO",
    "caso.pie": "ALICANTE ES", "caso.disp": "AVAILABLE FOR WORK",
    "caso.comparar": "Comparar antes y después", "caso.antes": "ANTES", "caso.despues": "DESPUÉS",
    "lb.cerrar": "Cerrar ✕", "lb.ant": "Anterior", "lb.sig": "Siguiente"
  },
  en: {
    "meta.title": "gabi pérez — motion design, illustration and graphic design",
    "nav.about": "about me", "nav.proyectos": "projects", "nav.juega": "play", "nav.contacto": "contact",
    "hero.note1": "Hey there! I do it all illustration / animation / graphic design / photography / AI",
    "hero.note2": "and all the creative magic in between",
    "tag.branding": "branding", "tag.ads": "ads", "tag.marketing": "marketing", "tag.packaging": "packaging",
    "tag.fotografía": "photography", "tag.motion graphics": "motion graphics", "tag.diseño": "design",
    "tag.ia": "AI", "tag.mailing": "email", "tag.ilustración": "illustration",
    "proy.verTodos": "view all", "proy.verMenos": "view less",
    "proy.uno": "project", "proy.varios": "projects", "proy.quitar": "clear filter",
    "juego.lbl": "skip the pills", "juego.score": "score", "juego.record": "high score",
    "juego.t": "Want to play?", "juego.btn": "Start", "juego.help": "space · up arrow · click — to jump",
    "juego.nuevo": "New record!", "juego.otra": "Try again", "juego.retry": "Retry",
    "juego.aria": "Mini game: jump over the obstacles",
    "contacto.tit": "Contact", "contacto.reach": "REACH US",
    "form.nombre": "First Name", "form.apellido": "Last Name", "form.email": "Email",
    "form.permiso": "I give Gabi Pérez permission to contact me at this email address.",
    "form.mensaje": "Type your message here",
    "form.fine": "This form is protected and your data is only used to reply to you. See our",
    "form.priv": "privacy policy", "form.send": "Send",
    "form.falta": "Some fields are missing.", "form.enviando": "Sending…",
    "form.ok": "Sent! I'll get back to you as soon as I read it :)",
    "form.abro": "Opening your email app with the message ready.",
    "form.sinoabre": "If nothing opens, write to me at",
    "form.asunto": "Message from your website",
    "form.activar": "This form hasn't been activated yet.",
    "about.tit": "About me",
    "about.p1": "HI!<br>I'M GABI, A FREELANCE MOTION DESIGNER, ILLUSTRATOR, AND GRAPHIC DESIGNER, NOW HAPPILY LIVING BY THE BEACH IN ALICANTE, SPAIN.",
    "about.p2": "OVER THE YEARS, I'VE CREATED VISUAL CONTENT FOR BRANDS LIKE CANVA, MAHOU, CORREOS, MINISO, CAPRI-SUN, HERO, LA VANGUARDIA, PLAYMOBIL, AMONG OTHERS. I ENJOY WORKING ACROSS STYLES AND FORMATS TO BRING IDEAS TO LIFE THROUGH DESIGN AND ANIMATION.",
    "about.p3": "I LOVE CREATING THINGS THAT CONNECT WITH PEOPLE — AND IF THEY MOVE OR DANCE A LITTLE, EVEN BETTER :)",
    "about.proyectos": "PROJECTS",
    "foot.lugar": "Alicante, Spain",
    "caso.volver": "← ALL PROJECTS", "caso.sig": "NEXT PROJECT",
    "caso.pie": "ALICANTE ES", "caso.disp": "AVAILABLE FOR WORK",
    "caso.comparar": "Compare before and after", "caso.antes": "BEFORE", "caso.despues": "AFTER",
    "lb.cerrar": "Close ✕", "lb.ant": "Previous", "lb.sig": "Next"
  }
};

function t(k){
  const d = TXT[LANG] || TXT.es;
  return (d[k] != null) ? d[k] : (TXT.es[k] != null ? TXT.es[k] : k);
}
/* los textos de cada proyecto, en el idioma elegido */
function casosIdioma(){
  if (LANG === "en" && typeof CASOS_EN !== "undefined") return CASOS_EN;
  return (typeof CASOS !== "undefined") ? CASOS : {};
}
/* el nombre del proyecto (solo cambia el de Ilustraciones) */
function tituloP(p){ return (LANG === "en" && p.titleEn) ? p.titleEn : p.title; }

function aplicarIdioma(){
  document.documentElement.lang = LANG;
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-html]").forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
  /* las etiquetas del banner y de "juega": la clave interna no cambia,
     solo el texto que se ve */
  document.querySelectorAll(".tag[data-tag], .tag-sm[data-tag]").forEach(el => { el.textContent = t("tag." + el.dataset.tag); });
  document.querySelectorAll("[data-i18n-aria]").forEach(el => el.setAttribute("aria-label", t(el.dataset.i18nAria)));
  if (document.body && !document.body.classList.contains("project-page")) document.title = t("meta.title");
  document.querySelectorAll(".lang-switch [data-lang]").forEach(b => {
    const on = b.dataset.lang === LANG;
    b.classList.toggle("on", on);
    b.setAttribute("aria-pressed", on ? "true" : "false");
  });
}

function cambiarIdioma(l){
  if (!IDIOMAS.includes(l) || l === LANG) return;
  try{ localStorage.setItem("gp-lang", l); }catch(e){}
  const u = new URL(location.href);
  if (u.searchParams.has("lang")){ u.searchParams.set("lang", l); location.replace(u.toString()); }
  else location.reload();
}

document.addEventListener("click", e => {
  const b = e.target.closest(".lang-switch [data-lang]");
  if (b){ e.preventDefault(); cambiarIdioma(b.dataset.lang); }
});
aplicarIdioma();
