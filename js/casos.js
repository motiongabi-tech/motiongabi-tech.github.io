/* ==================================================================
   CASOS — sale de los frames del Figma PORTAFOLIO
   (archivo XNKqpygLmew4tzDzCbhkyQ, pagina PROYECTOS)
   ------------------------------------------------------------------
   Extraido con get_design_context, asi que los textos, los colores y
   los recortes son los del archivo, no una transcripcion.

   Cada proyecto es, en este orden:
     hero -> marquee -> brief -> secciones numeradas -> cierre -> footer
   (si brief.despues es true, el brief va detras de las secciones).

   tit y sub son ARRAYS: una entrada por linea, para conservar los
   saltos que Gabi puso a mano en el Figma.
   ================================================================== */

const CASOS = {
 "la-besneta": {
  "titulo": "La Besnéta",
  "hero": {
   "bg": "#FCF3EB",
   "ink": "#743424",
   "titulo": "La Besnéta",
   "sub": [
    "Identidad, packaging, fotografía, web y email",
    "para una marca de masa de cookies artesana."
   ],
   "pills": [
    [
     "BRANDING",
     "#EF7DB1",
     "#FCF3EB"
    ],
    [
     "PACKAGING",
     "#E64D14",
     "#FCF3EB"
    ],
    [
     "FOTOGRAFÍA",
     "#AFC673",
     "#FCF3EB"
    ],
    [
     "WEB",
     "#743424",
     "#FCF3EB"
    ],
    [
     "EMAIL",
     "#EF7DB1",
     "#FCF3EB"
    ],
    [
     "IA",
     "#E64D14",
     "#FCF3EB"
    ]
   ],
   "meta": "2025 — 2026 · EN STORIA CONTENIDOS",
   "patron": "#EF7DB1",
   "mascota": true
  },
  "marquee": {
   "bg": "#FCF3EB",
   "banda": "#EF7DB1",
   "ink": "#743424",
   "sep": "✦",
   "voces": [
    "Identidad",
    "Packaging",
    "Fotografía",
    "Web",
    "Email"
   ],
   "giro": 2.4
  },
  "brief": {
   "bg": "#FFFFFF",
   "ink": "#2B35E8",
   "ep": "EL ENCARGO",
   "epInk": "#2B35E8",
   "tit": [
    "Dar forma a una marca que empieza",
    "desde una receta familiar."
   ],
   "txt": [
    "La Besnéta vende masa de cookies artesana, 100% vegetal y congelada."
   ],
   "meta": [
    [
     "CLIENTE",
     "La Besnéta · Barcelona"
    ],
    [
     "ESTUDIO",
     "Storia Contenidos"
    ],
    [
     "MI ROL",
     "Branding · Ilustración · Packaging · Fotografía y retoque · Diseño web · Email design"
    ],
    [
     "HERRAMIENTAS",
     "Figma · Illustrator · Photoshop · After Effects · Cámara · IA generativa · Código"
    ],
    [
     "EN VIVO",
     "labesneta.com"
    ]
   ],
   "despues": false
  },
  "secciones": [
   {
    "ep": "01 / LA MARCA",
    "epInk": "rgba(116,52,36,.75)",
    "bg": "#EF7DB1",
    "ink": "#FCF3EB",
    "tit": [
     "El logotipo es una niña",
     "con una galleta enorme"
    ],
    "bloques": [
     {
      "tipo": "wordmark",
      "color": "#FCF3EB"
     },
     {
      "tipo": "rejilla",
      "cols": 2,
      "piezas": [
       {
        "logo": true,
        "bg": "#FCF3EB",
        "color": "#743424",
        "pie": "POSITIVO · LOGO CACAO SOBRE CREMA"
       },
       {
        "logo": true,
        "bg": "#1a1a1a",
        "color": "#FCF3EB",
        "pie": "NEGATIVO · LOGO CREMA SOBRE NEGRO"
       }
      ]
     },
     {
      "tipo": "rejilla",
      "cols": 5,
      "alto": 164,
      "piezas": [
       {
        "logo": true,
        "bg": "#E64D14",
        "color": "#FCF3EB"
       },
       {
        "logo": true,
        "bg": "#AFC673",
        "color": "#743424"
       },
       {
        "logo": true,
        "bg": "#743424",
        "color": "#FCF3EB"
       },
       {
        "logo": true,
        "bg": "#FCF3EB",
        "color": "#EF7DB1"
       },
       {
        "logo": true,
        "bg": "#EF7DB1",
        "color": "#743424"
       }
      ]
     }
    ]
   },
   {
    "ep": "02 / PALETA Y TIPOGRAFÍA",
    "epInk": "#E64D14",
    "bg": "#FCF3EB",
    "ink": "#743424",
    "tit": [
     "Cada sabor tiene",
     "su propio color"
    ],
    "bloques": [
     {
      "tipo": "swatches",
      "piezas": [
       [
        "Rosa",
        "#EF7DB1",
        "MARCA"
       ],
       [
        "Naranja",
        "#E64D14",
        "DOBLE CHOCOLATE"
       ],
       [
        "Pistacho",
        "#AFC673",
        "PISTACHO"
       ],
       [
        "Cacao",
        "#743424",
        "TEXTO Y FONDO"
       ],
       [
        "Crema",
        "#FCF3EB",
        "AIRE"
       ]
      ]
     },
     {
      "tipo": "specimen",
      "piezas": [
       [
        "Modak",
        "PALABRAS CLAVE"
       ],
       [
        "Baloo 2",
        "TÍTULOS"
       ],
       [
        "Plus Jakarta Sans",
        "CUERPOS DE TEXTO"
       ]
      ]
     }
    ]
   },
   {
    "ep": "03 / PACKAGING",
    "epInk": "rgba(252,243,235,.8)",
    "bg": "#E64D14",
    "ink": "#FCF3EB",
    "tit": [
     "Kraft por fuera,",
     "color por dentro"
    ],
    "bloques": [
     {
      "tipo": "filas",
      "filas": [
       {
        "cols": "1fr 1fr",
        "piezas": [
         {
          "src": "img/caso/la-besneta/04-01.jpg",
          "ar": 1
         },
         {
          "apilado": [
           {
            "src": "img/caso/la-besneta/04-02.jpg",
            "ar": 2.0673076923076925
           },
           {
            "src": "img/caso/la-besneta/04-03.jpg",
            "ar": 2.0739549839228295
           }
          ]
         }
        ]
       },
       {
        "cols": "1fr 1fr 1fr",
        "piezas": [
         {
          "src": "img/caso/la-besneta/04-04.jpg",
          "ar": 0.899290758498171
         },
         {
          "src": "img/caso/la-besneta/04-05.jpg",
          "ar": 0.899290758498171
         },
         {
          "src": "img/caso/la-besneta/04-06.jpg",
          "ar": 0.899290758498171
         }
        ]
       }
      ]
     }
    ]
   },
   {
    "ep": "04 / FOTOGRAFÍA",
    "epInk": "#EF7DB1",
    "bg": "#743424",
    "ink": "#FCF3EB",
    "sangrado": true,
    "tit": [
     "Luz dura, color y",
     "la cookie como protagonista"
    ],
    "bloques": [
     {
      "tipo": "mosaico",
      "filas": [
       {
        "cols": "1fr 1fr 1fr",
        "ar": 0.7741935483870968,
        "piezas": [
         {
          "src": "img/caso/la-besneta/05-01.jpg"
         },
         {
          "src": "img/caso/la-besneta/05-02.jpg"
         },
         {
          "src": "img/caso/la-besneta/05-03.jpg"
         }
        ]
       },
       {
        "cols": "576fr 864fr",
        "ar": null,
        "piezas": [
         {
          "src": "img/caso/la-besneta/05-04.jpg",
          "ar": 1.2521739130434784
         },
         {
          "src": "img/caso/la-besneta/05-05.jpg",
          "ar": 1.8782608695652174
         }
        ]
       },
       {
        "cols": "864fr 576fr",
        "ar": null,
        "piezas": [
         {
          "src": "img/caso/la-besneta/05-06.jpg",
          "ar": 1.8782608695652174
         },
         {
          "src": "img/caso/la-besneta/05-07.jpg",
          "ar": 1.2521739130434784
         }
        ]
       }
      ]
     },
     {
      "tipo": "pie2",
      "izq": "PRODUCCIÓN, CÁMARA Y RETOQUE · GABI PÉREZ",
      "der": "PHOTOSHOP · SELECCIÓN DE MÁS DE 100 TOMAS"
     }
    ]
   },
   {
    "ep": "05 / LA WEB",
    "epInk": "#E64D14",
    "bg": "#FCF3EB",
    "ink": "#743424",
    "tit": [
     "La misma foto,",
     "pero en movimiento"
    ],
    "bloques": [
     {
      "tipo": "filas",
      "filas": [
       {
        "cols": "1fr 1fr",
        "piezas": [
         {
          "src": "img/caso/la-besneta/06-01.jpg",
          "insignia": "FOTO",
          "ar": 1
         },
         {
          "video": "img/caso/video/besneta-header.mp4",
          "poster": "img/caso/la-besneta/06-02.jpg",
          "insignia": "IA",
          "esVideo": true,
          "ar": 1
         }
        ]
       },
       {
        "cols": "1fr 1fr 1fr",
        "piezas": [
         {
          "src": "img/caso/la-besneta/06-03.jpg",
          "ar": 1.0063491821289061
         },
         {
          "src": "img/caso/la-besneta/06-04.jpg",
          "ar": 1.0063491821289061
         },
         {
          "src": "img/caso/la-besneta/06-05.jpg",
          "ar": 1.0063491821289061
         }
        ]
       }
      ]
     }
    ]
   },
   {
    "ep": "06 / EMAIL",
    "epInk": "#743424",
    "bg": "#EF7DB1",
    "ink": "#FCF3EB",
    "tit": [
     "La marca también",
     "tiene que funcionar por email"
    ],
    "bloques": [
     {
      "tipo": "correos",
      "piezas": [
       {
        "src": "img/caso/la-besneta/07-01.jpg"
       },
       {
        "src": "img/caso/la-besneta/07-03.jpg"
       }
      ]
     }
    ]
   }
  ],
  "cierre": {
   "bg": "#743424",
   "ink": "#FCF3EB",
   "patron": "#FCF3EB",
   "logo": "besneta",
   "mascota": true,
   "tools": [
    "FIGMA",
    "ILLUSTRATOR",
    "PHOTOSHOP",
    "AFTER EFFECTS",
    "FOTOGRAFÍA",
    "IA GENERATIVA",
    "CÓDIGO"
   ],
   "enlace": {
    "txt": "labesneta.com ↗",
    "url": "https://labesneta.com"
   }
  },
  "siguiente": "canva-icons"
 },
 "canva-icons": {
  "titulo": "Canva",
  "hero": {
   "bg": "#992BFF",
   "bgGrad": "linear-gradient(180deg,#992BFF 0%,#5A32FA 27.5%,#13A3B5 50.1%,#93E8F6 68.2%,#F1EBFF 84.1%,#FFFFFF 98.1%)",
   "ink": "#FFFFFF",
   "titulo": "Canva",
   "sub": [
    "Iconos para la pantalla de inicio de sesión.",
    "Dos mercados, dos culturas, el mismo lenguaje."
   ],
   "pills": [
    [
     "ICON DESIGN",
     "rgba(255,255,255,.18)",
     "#FFFFFF"
    ],
    [
     "ILUSTRACIÓN",
     "rgba(255,255,255,.18)",
     "#FFFFFF"
    ],
    [
     "ESPAÑA",
     "rgba(255,255,255,.18)",
     "#FFFFFF"
    ],
    [
     "REINO UNIDO",
     "rgba(255,255,255,.18)",
     "#FFFFFF"
    ]
   ],
   "meta": "2026 · CLIENTE: CANVA",
   "flotantes": [
    {
     "src": "img/caso/canva/HERO-01.png",
     "w": 300
    },
    {
     "src": "img/caso/canva/HERO-02.png",
     "w": 240
    },
    {
     "src": "img/caso/canva/HERO-03.png",
     "w": 260
    }
   ]
  },
  "marquee": {
   "bg": "#FFFFFF",
   "banda": "#7D2AE7",
   "ink": "#FFFFFF",
   "sep": "✦",
   "voces": [
    "Icon design",
    "España",
    "Reino Unido",
    "Ilustración"
   ],
   "giro": 2.4
  },
  "brief": {
   "bg": "#FFFFFF",
   "ink": "#0E1318",
   "ep": "EL ENCARGO",
   "epInk": "#7D2AE7",
   "tit": [
    "Un icono tiene muy poco espacio",
    "para contar mucho."
   ],
   "txt": [
    "Canva necesitaba sets de iconos locales para su pantalla de inicio de sesión."
   ],
   "meta": [
    [
     "CLIENTE",
     "Canva"
    ],
    [
     "AÑO",
     "2026"
    ],
    [
     "MI ROL",
     "Diseño de iconos · Ilustración"
    ],
    [
     "DÓNDE",
     "Pantalla de inicio de sesión, ES y UK"
    ],
    [
     "HERRAMIENTAS",
     "Illustrator · Figma"
    ]
   ],
   "despues": false
  },
  "secciones": [
   {
    "ep": "01 / EL SET DE ESPAÑA",
    "epInk": "#7D2AE7",
    "bg": "#FFFFFF",
    "ink": "#0E1318",
    "tit": [
     "El Mundial,",
     "en unos pocos trazos"
    ],
    "bloques": [
     {
      "tipo": "filas",
      "filas": [
       {
        "cols": "1fr 1fr",
        "piezas": [
         {
          "src": "img/caso/canva/01-01.jpg",
          "ar": 1
         },
         {
          "src": "img/caso/canva/01-02.jpg",
          "ar": 1
         }
        ]
       }
      ]
     }
    ]
   },
   {
    "ep": "02 / EN PRODUCCIÓN",
    "epInk": "#00C4CC",
    "bg": "#0E1318",
    "ink": "#FFFFFF",
    "tit": [
     "Así se ven",
     "cuando dejan de estar solos"
    ],
    "bloques": [
     {
      "tipo": "filas",
      "filas": [
       {
        "cols": "1fr",
        "piezas": [
         {
          "src": "img/caso/canva/02-01.jpg",
          "pie": "PANTALLA DE INICIO DE SESIÓN DE CANVA · ESPAÑA",
          "ar": 1.7777777777777777
         }
        ]
       }
      ]
     }
    ]
   },
   {
    "ep": "03 / DENTRO DE LA INTERFAZ",
    "epInk": "#00C4CC",
    "bg": "#7D2AE7",
    "ink": "#FFFFFF",
    "tit": [
     "Algunos iconos",
     "también cuentan una función"
    ],
    "bloques": [
     {
      "tipo": "filas",
      "filas": [
       {
        "cols": "1fr 1fr",
        "piezas": [
         {
          "src": "img/caso/canva/03-01.jpg",
          "ar": 1
         },
         {
          "src": "img/caso/canva/03-02.jpg",
          "ar": 1
         }
        ]
       },
       {
        "cols": "1fr 1fr",
        "piezas": [
         {
          "src": "img/caso/canva/03-03.jpg",
          "ar": 1
         },
         {
          "src": "img/caso/canva/03-04.jpg",
          "ar": 1
         }
        ]
       }
      ]
     }
    ]
   },
   {
    "ep": "04 / EL SET DE REINO UNIDO",
    "epInk": "#7D2AE7",
    "bg": "#F1EBFF",
    "ink": "#0E1318",
    "tit": [
     "Reconocible,",
     "sin convertirlo en souvenir"
    ],
    "bloques": [
     {
      "tipo": "filas",
      "filas": [
       {
        "cols": "1fr 1fr 1fr",
        "tarjeta": "linear-gradient(180deg,#992BFF 0%,#5A32FA 27.5%,#13A3B5 50.1%,#93E8F6 68.2%,#F1EBFF 84.1%,#FFFFFF 98.1%)",
        "piezas": [
         {
          "src": "img/caso/canva/04-01.png",
          "ar": 0.8453333129882812
         },
         {
          "src": "img/caso/canva/04-02.png",
          "ar": 0.8453333129882812
         },
         {
          "src": "img/caso/canva/04-03.png",
          "ar": 0.8453333129882812
         }
        ]
       }
      ]
     }
    ]
   }
  ],
  "cierre": {
   "bg": "#992BFF",
   "bgGrad": "linear-gradient(180deg,#992BFF 0%,#5A32FA 27.5%,#13A3B5 50.1%,#93E8F6 68.2%,#F1EBFF 84.1%,#FFFFFF 98.1%)",
   "ink": "#FFFFFF",
   "logo": "canva",
   "tools": [
    "ILLUSTRATOR",
    "FIGMA",
    "ICON DESIGN",
    "ILUSTRACIÓN"
   ]
  },
  "siguiente": "miniso"
 },
 "mahou": {
  "titulo": "Mahou",
  "hero": {
   "bg": "#c70e2d",
   "ink": "#fff6e8",
   "tituloInk": "#fff6e8",
   "titulo": "Mahou",
   "sub": [
    "El Patio de Mahou:",
    "un universo gráfico para el verano de Madrid."
   ],
   "pills": [
    [
     "ILUSTRACIÓN",
     "#fbc84b",
     "#1d1d1b"
    ],
    [
     "ANIMACIÓN",
     "#fff6e8",
     "#c70e2d"
    ],
    [
     "MOTION",
     "#fbc84b",
     "#1d1d1b"
    ],
    [
     "ESPACIO",
     "#fff6e8",
     "#c70e2d"
    ]
   ],
   "meta": "2021 — 2023 · CLIENTE: MAHOU",
   "imagen": {
    "src": "img/caso/mahou/HERO-01.jpg",
    "ar": 1.75
   }
  },
  "marquee": {
   "bg": "#ffffff",
   "banda": "#fbc84b",
   "ink": "#be051d",
   "sep": "★",
   "voces": [
    "El Patio",
    "Ilustración",
    "Motion"
   ],
   "giro": 2.4
  },
  "brief": {
   "bg": "#ffffff",
   "ink": "#1d1d1b",
   "ep": "EL ENCARGO",
   "epInk": "#c70e2d",
   "tit": [
    "No quería dibujar el patio.",
    "Quería dibujar cómo se vive."
   ],
   "txt": [
    "El Patio Mahou era un punto de encuentro para comer, escuchar música y pasar la tarde."
   ],
   "meta": [
    [
     "CLIENTE",
     "Mahou"
    ],
    [
     "AÑOS",
     "2021 — 2023"
    ],
    [
     "MI ROL",
     "Ilustración · Animación · Motion"
    ],
    [
     "FORMATOS",
     "Muro · cartelería · mantelería · redes"
    ]
   ]
  },
  "secciones": [
   {
    "ep": "01 / EL UNIVERSO GRÁFICO",
    "epInk": "#c70e2d",
    "bg": "#fff6e8",
    "ink": "#1d1d1b",
    "tit": [
     "Un repertorio de piezas,",
     "no un cartel único"
    ],
    "bloques": [
     {
      "tipo": "filas",
      "filas": [
       {
        "cols": "860fr 430fr",
        "piezas": [
         {
          "src": "img/caso/mahou/01-01.jpg",
          "ar": 1
         },
         {
          "apilado": [
           {
            "src": "img/caso/mahou/01-02.jpg",
            "ar": 1.0263
           },
           {
            "src": "img/caso/mahou/01-03.jpg",
            "ar": 1.0263
           }
          ]
         }
        ]
       }
      ]
     }
    ]
   },
   {
    "ep": "02 / EL ESPACIO",
    "epInk": "#fbc84b",
    "bg": "#c70e2d",
    "ink": "#fff6e8",
    "tit": [
     "La gráfica salió de la pantalla",
     "y acabó en el patio"
    ],
    "bloques": [
     {
      "tipo": "filas",
      "filas": [
       {
        "cols": "1fr 1fr",
        "piezas": [
         {
          "src": "img/caso/mahou/02-01.jpg",
          "ar": 1.5
         },
         {
          "src": "img/caso/mahou/02-02.jpg",
          "ar": 1.5
         }
        ]
       },
       {
        "cols": "430fr 860fr",
        "piezas": [
         {
          "src": "img/caso/mahou/02-03.jpg",
          "ar": 0.7679
         },
         {
          "src": "img/caso/mahou/02-04.jpg",
          "ar": 1.5357
         }
        ]
       }
      ]
     }
    ]
   },
   {
    "ep": "03 / ANIMACIÓN",
    "epInk": "#fbc84b",
    "bg": "#1d1d1b",
    "ink": "#fff6e8",
    "tit": [],
    "bloques": [
     {
      "tipo": "filas",
      "filas": [
       {
        "cols": "1fr 1fr 1fr",
        "piezas": [
         {
          "video": "img/caso/video/mahou-loop-01.mp4",
          "poster": "img/caso/mahou/03-01.jpg",
          "src": "img/caso/mahou/03-01.jpg",
          "esVideo": true,
          "insignia": "LOOP",
          "ar": 1
         },
         {
          "video": "img/caso/video/mahou-loop-02.mp4",
          "poster": "img/caso/mahou/03-02.jpg",
          "src": "img/caso/mahou/03-02.jpg",
          "esVideo": true,
          "insignia": "LOOP",
          "ar": 1
         },
         {
          "video": "img/caso/video/mahou-loop-03.mp4",
          "poster": "img/caso/mahou/03-03.jpg",
          "src": "img/caso/mahou/03-03.jpg",
          "esVideo": true,
          "insignia": "LOOP",
          "ar": 1
         }
        ]
       },
       {
        "cols": "1fr 1fr 1fr",
        "piezas": [
         {
          "video": "img/caso/video/mahou-loop-04.mp4",
          "poster": "img/caso/mahou/03-04.jpg",
          "src": "img/caso/mahou/03-04.jpg",
          "esVideo": true,
          "insignia": "LOOP",
          "ar": 1
         },
         {
          "video": "img/caso/video/mahou-loop-06.mp4",
          "poster": "img/caso/mahou/03-05.jpg",
          "src": "img/caso/mahou/03-05.jpg",
          "esVideo": true,
          "insignia": "LOOP",
          "ar": 1
         },
         {
          "video": "img/caso/video/mahou-loop-08.mp4",
          "poster": "img/caso/mahou/03-06.jpg",
          "src": "img/caso/mahou/03-06.jpg",
          "esVideo": true,
          "insignia": "LOOP",
          "ar": 1
         }
        ]
       }
      ]
     }
    ]
   }
  ],
  "cierre": {
   "bg": "#be051d",
   "ink": "#fff6e8",
   "tools": [
    "ILLUSTRATOR",
    "AFTER EFFECTS",
    "ILUSTRACIÓN",
    "MOTION"
   ],
   "rotulo": "Mahou",
   "rotuloInk": "#fff6e8"
  },
  "siguiente": "miniso"
 },
 "miniso": {
  "titulo": "Miniso",
  "hero": {
   "bg": "#2c55ff",
   "ink": "#ffffff",
   "tituloInk": "#ffffff",
   "titulo": "Miniso",
   "sub": [
    "Campañas de temporada y contenido diario",
    "para el feed. Un año entero de marca."
   ],
   "pills": [
    [
     "ILUSTRACIÓN",
     "#ffc300",
     "#101322"
    ],
    [
     "DISEÑO",
     "#ffffff",
     "#1e42e0"
    ],
    [
     "ANIMACIÓN",
     "#ffc300",
     "#101322"
    ],
    [
     "SOCIAL",
     "#ffffff",
     "#1e42e0"
    ],
    [
     "MODELADO 3D",
     "#ffc300",
     "#101322"
    ]
   ],
   "meta": "2023 · CLIENTE: MINISO",
   "imagen": {
    "src": "img/caso/miniso/HERO-01.jpg",
    "ar": 1.52
   }
  },
  "marquee": {
   "bg": "#ffffff",
   "banda": "#ffc300",
   "ink": "#1e42e0",
   "sep": "●",
   "voces": [
    "Verano",
    "Día del Padre",
    "Always-on",
    "3D"
   ],
   "giro": 2.4
  },
  "brief": {
   "bg": "#ffffff",
   "ink": "#101322",
   "ep": "EL ENCARGO",
   "epInk": "#1e42e0",
   "tit": [
    "Una campaña puede hacer ruido.",
    "El contenido diario tiene que sostener la marca."
   ],
   "txt": [
    "Para Miniso trabajé en campañas de temporada y también en el contenido que aparece semana tras semana en el feed."
   ],
   "meta": [
    [
     "CLIENTE",
     "Miniso"
    ],
    [
     "AÑO",
     "2023"
    ],
    [
     "MI ROL",
     "Ilustración · Diseño · Animación · Modelado 3D"
    ],
    [
     "TRES FRENTES",
     "Campaña de verano · Día del Padre · contenido always-on"
    ],
    [
     "FORMATOS",
     "Cartelería · 9:16 para stories · animación en bucle"
    ]
   ]
  },
  "secciones": [
   {
    "ep": "01 / CAMPAÑA DE VERANO",
    "epInk": "#ffc300",
    "bg": "#2c55ff",
    "ink": "#ffffff",
    "tit": [
     "Verano,",
     "sin bajar el volumen"
    ],
    "bloques": [
     {
      "tipo": "filas",
      "filas": [
       {
        "cols": "1fr",
        "piezas": [
         {
          "src": "img/caso/miniso/01-01.jpg",
          "ar": 1.5274
         }
        ]
       },
       {
        "cols": "1fr",
        "piezas": [
         {
          "src": "img/caso/miniso/01-02.jpg",
          "ar": 0.7523
         }
        ]
       },
       {
        "cols": "430fr 860fr",
        "piezas": [
         {
          "src": "img/caso/miniso/01-03.jpg",
          "ar": 0.7452
         },
         {
          "src": "img/caso/miniso/01-04.jpg",
          "ar": 1.4905
         }
        ]
       }
      ]
     }
    ]
   },
   {
    "ep": "02 / DÍA DEL PADRE",
    "epInk": "#ffffff",
    "bg": "#d16376",
    "ink": "#ffffff",
    "tit": [],
    "bloques": [
     {
      "tipo": "filas",
      "filas": [
       {
        "cols": "1fr",
        "piezas": [
         {
          "src": "img/caso/miniso/02-01.jpg",
          "pie": "GRÁFICA DE CAMPAÑA APLICADA A BOLSA DE TIENDA",
          "ar": 1.7826
         }
        ]
       }
      ]
     }
    ]
   },
   {
    "ep": "03 / SOCIAL MEDIA",
    "epInk": "#1e42e0",
    "bg": "#f2f4fb",
    "ink": "#101322",
    "tit": [
     "Contenido para",
     "social media"
    ],
    "bloques": [
     {
      "tipo": "filas",
      "filas": [
       {
        "cols": "1fr 1fr 1fr",
        "piezas": [
         {
          "video": "img/caso/video/miniso-story-01.mp4",
          "poster": "img/caso/miniso/03-01.jpg",
          "src": "img/caso/miniso/03-01.jpg",
          "esVideo": true,
          "insignia": "LOOP",
          "ar": 0.5626
         },
         {
          "video": "img/caso/video/miniso-story-02.mp4",
          "poster": "img/caso/miniso/03-02.jpg",
          "src": "img/caso/miniso/03-02.jpg",
          "esVideo": true,
          "insignia": "LOOP",
          "ar": 0.5626
         },
         {
          "video": "img/caso/video/miniso-story-03.mp4",
          "poster": "img/caso/miniso/03-03.jpg",
          "src": "img/caso/miniso/03-03.jpg",
          "esVideo": true,
          "insignia": "LOOP",
          "ar": 0.5626
         }
        ]
       },
       {
        "cols": "1fr 1fr 1fr",
        "piezas": [
         {
          "video": "img/caso/video/miniso-story-04.mp4",
          "poster": "img/caso/miniso/03-04.jpg",
          "src": "img/caso/miniso/03-04.jpg",
          "esVideo": true,
          "insignia": "LOOP",
          "ar": 0.5626
         },
         {
          "video": "img/caso/video/miniso-story-05.mp4",
          "poster": "img/caso/miniso/03-05.jpg",
          "src": "img/caso/miniso/03-05.jpg",
          "esVideo": true,
          "insignia": "LOOP",
          "ar": 0.5626
         },
         {
          "video": "img/caso/video/miniso-story-06.mp4",
          "poster": "img/caso/miniso/03-06.jpg",
          "src": "img/caso/miniso/03-06.jpg",
          "esVideo": true,
          "insignia": "LOOP",
          "ar": 0.5626
         }
        ]
       }
      ]
     }
    ]
   }
  ],
  "cierre": {
   "bg": "#1e42e0",
   "ink": "#ffffff",
   "tools": [
    "ILLUSTRATOR",
    "AFTER EFFECTS",
    "3D",
    "SOCIAL"
   ],
   "rotulo": "Miniso",
   "rotuloInk": "#ffffff"
  },
  "siguiente": "corny"
 },
 "corny": {
  "titulo": "Corny",
  "hero": {
   "bg": "#f07e22",
   "ink": "#ffffff",
   "tituloInk": "#ffffff",
   "titulo": "Corny",
   "sub": [
    "Retoque fotográfico con asistencia de IA:",
    "siete pares de antes y después."
   ],
   "pills": [
    [
     "RETOQUE",
     "#16357f",
     "#ffffff"
    ],
    [
     "PHOTOSHOP",
     "#ffffff",
     "#d05319"
    ],
    [
     "EDICIÓN CON IA",
     "#16357f",
     "#ffffff"
    ],
    [
     "PACKSHOT",
     "#ffffff",
     "#d05319"
    ]
   ],
   "meta": "CLIENTE: CORNY · EN PLAYROOM",
   "imagen": {
    "src": "img/caso/corny/HERO-01.jpg",
    "ar": 0.915
   }
  },
  "marquee": {
   "bg": "#ffffff",
   "banda": "#16357f",
   "ink": "#ffffff",
   "sep": "→",
   "voces": [
    "Antes",
    "Después"
   ],
   "giro": 2.4
  },
  "brief": {
   "bg": "#ffffff",
   "ink": "#14100c",
   "ep": "EL ENCARGO",
   "epInk": "#d05319",
   "tit": [
    "Mejorar la foto sin cambiar",
    "lo que hay dentro."
   ],
   "txt": [
    "Retoqué siete imágenes de producto de Corny con ayuda de IA."
   ],
   "meta": [
    [
     "CLIENTE",
     "Corny"
    ],
    [
     "ESTUDIO",
     "PLAYROOM"
    ],
    [
     "MI ROL",
     "Retoque en Photoshop · Edición con IA"
    ],
    [
     "ENTREGA",
     "7 imágenes de producto"
    ],
    [
     "USO",
     "Packshot y contenido de marca"
    ]
   ],
   "despues": true
  },
  "secciones": [
   {
    "ep": "01 / ANTES Y DESPUÉS",
    "epInk": "#d05319",
    "bg": "#fbf3ea",
    "ink": "#14100c",
    "tit": [
     "Siete imágenes,",
     "siete problemas distintos"
    ],
    "bloques": [
     {
      "tipo": "pares",
      "piezas": [
       {
        "n": "PAR 02",
        "antes": "img/caso/corny/01-01.jpg",
        "despues": "img/caso/corny/01-02.jpg"
       },
       {
        "n": "PAR 01",
        "antes": "img/caso/corny/01-03.jpg",
        "despues": "img/caso/corny/01-04.jpg"
       },
       {
        "n": "PAR 03",
        "antes": "img/caso/corny/01-05.jpg",
        "despues": "img/caso/corny/01-06.jpg"
       },
       {
        "n": "PAR 04",
        "antes": "img/caso/corny/01-07.jpg",
        "despues": "img/caso/corny/01-08.jpg"
       },
       {
        "n": "PAR 05",
        "antes": "img/caso/corny/01-09.jpg",
        "despues": "img/caso/corny/01-10.jpg"
       },
       {
        "n": "PAR 06",
        "antes": "img/caso/corny/01-11.jpg",
        "despues": "img/caso/corny/01-12.jpg"
       },
       {
        "n": "PAR 07",
        "antes": "img/caso/corny/01-13.jpg",
        "despues": "img/caso/corny/01-14.jpg"
       }
      ]
     }
    ]
   }
  ],
  "cierre": {
   "bg": "#16357f",
   "ink": "#ffffff",
   "tools": [
    "PHOTOSHOP",
    "EDICIÓN CON IA",
    "RETOQUE DE PRODUCTO"
   ],
   "rotulo": "Corny",
   "rotuloInk": "#ffffff"
  },
  "siguiente": "victoria"
 },
 "victoria": {
  "titulo": "Victoria",
  "hero": {
   "bg": "#83d3c8",
   "ink": "#20302e",
   "tituloInk": "#ffffff",
   "titulo": "Victoria",
   "sub": [
    "Un spot de verano ilustrado a mano."
   ],
   "pills": [
    [
     "MOTION GRAPHICS",
     "#d6403c",
     "#ffffff"
    ],
    [
     "ILUSTRACIÓN",
     "#ffffff",
     "#5dbbae"
    ],
    [
     "DIRECCIÓN",
     "#f0b93e",
     "#20302e"
    ],
    [
     "SOCIAL",
     "#ffffff",
     "#5dbbae"
    ]
   ],
   "meta": "2021 · VICTORIA CALZADO · PROYECTO FINAL IED",
   "imagen": {
    "src": "img/caso/victoria/HERO-01.jpg",
    "ar": 1
   }
  },
  "marquee": {
   "bg": "#ffffff",
   "banda": "#f0b93e",
   "ink": "#20302e",
   "sep": "✦",
   "voces": [
    "#doblevictoria",
    "Verano",
    "Ilustración",
    "Motion"
   ],
   "giro": 2.4
  },
  "brief": {
   "bg": "#ffffff",
   "ink": "#20302e",
   "ep": "EL ENCARGO",
   "epInk": "#5dbbae",
   "tit": [
    "Contar un verano entero",
    "en quince segundos."
   ],
   "txt": [
    "Proyecto final de Motion Graphics en el IED."
   ],
   "meta": [
    [
     "CLIENTE",
     "Victoria Calzado"
    ],
    [
     "AÑO",
     "2021"
    ],
    [
     "CONTEXTO",
     "Proyecto final de Motion Graphics · IED"
    ],
    [
     "MI ROL",
     "Motion graphics · Diseño · Ilustración"
    ],
    [
     "DURACIÓN",
     "15 segundos"
    ]
   ]
  },
  "secciones": [
   {
    "ep": "01 / EL SPOT",
    "epInk": "#f0b93e",
    "bg": "#20302e",
    "ink": "#ffffff",
    "tit": [],
    "bloques": [
     {
      "tipo": "filas",
      "filas": [
       {
        "cols": "1fr",
        "piezas": [
         {
          "video": "img/caso/video/victoria-spot.mp4",
          "poster": "img/caso/victoria/02-05.jpg",
          "src": "img/caso/victoria/02-05.jpg",
          "esVideo": true,
          "insignia": "VÍDEO · 15S",
          "ar": 1.7778
         }
        ]
       }
      ]
     }
    ]
   },
   {
    "ep": "02 / STORYBOARD",
    "epInk": "#5dbbae",
    "bg": "#ffe8dc",
    "ink": "#20302e",
    "tit": [
     "Storyboard"
    ],
    "bloques": [
     {
      "tipo": "filas",
      "filas": [
       {
        "cols": "1fr 1fr 1fr 1fr",
        "piezas": [
         {
          "src": "img/caso/victoria/02-01.jpg",
          "ar": 1.7784
         },
         {
          "src": "img/caso/victoria/02-02.jpg",
          "ar": 1.7784
         },
         {
          "src": "img/caso/victoria/02-03.jpg",
          "ar": 1.7784
         },
         {
          "src": "img/caso/victoria/02-04.jpg",
          "ar": 1.7784
         }
        ]
       },
       {
        "cols": "1fr 1fr 1fr 1fr",
        "piezas": [
         {
          "src": "img/caso/victoria/02-05.jpg",
          "ar": 1.7784
         },
         {
          "src": "img/caso/victoria/02-06.jpg",
          "ar": 1.7784
         },
         {
          "src": "img/caso/victoria/02-07.jpg",
          "ar": 1.7784
         },
         {
          "src": "img/caso/victoria/02-08.jpg",
          "ar": 1.7784
         }
        ]
       },
       {
        "cols": "1fr 1fr 1fr 1fr",
        "piezas": [
         {
          "src": "img/caso/victoria/02-09.jpg",
          "ar": 1.7784
         },
         {
          "src": "img/caso/victoria/02-10.jpg",
          "ar": 1.7784
         },
         {
          "src": "img/caso/victoria/02-11.jpg",
          "ar": 1.7784
         },
         {
          "src": "img/caso/victoria/02-12.jpg",
          "ar": 1.7784
         }
        ]
       },
       {
        "cols": "1fr 1fr 1fr 1fr",
        "piezas": [
         {
          "src": "img/caso/victoria/02-13.jpg",
          "ar": 1.7784
         },
         {
          "src": "img/caso/victoria/02-14.jpg",
          "ar": 1.7784
         }
        ]
       }
      ]
     },
     {
      "tipo": "filas",
      "filas": [
       {
        "cols": "1fr 1fr",
        "piezas": [
         {
          "src": "img/caso/victoria/03-01.jpg",
          "ar": 1.7967
         },
         {
          "src": "img/caso/victoria/03-02.jpg",
          "ar": 1.7967
         }
        ]
       }
      ]
     }
    ]
   }
  ],
  "cierre": {
   "bg": "#83d3c8",
   "ink": "#ffffff",
   "tools": [
    "AFTER EFFECTS",
    "ILUSTRACIÓN",
    "MOTION GRAPHICS"
   ],
   "rotulo": "Victoria",
   "rotuloInk": "#ffffff"
  },
  "siguiente": "bumbba"
 },
 "bumbba": {
  "titulo": "Bumbba",
  "hero": {
   "bg": "#f4e5d3",
   "ink": "rgba(20,19,16,.8)",
   "tituloInk": "#141310",
   "titulo": "Bumbba",
   "sub": [
    "Un folleto de montaje para un sofá",
    "que no hay que montar."
   ],
   "pills": [
    [
     "LAYOUT EDITORIAL",
     "#aaa130",
     "#ffffff"
    ],
    [
     "ILUSTRACIÓN",
     "#f5b0cd",
     "#141310"
    ],
    [
     "3D",
     "#b7d7e4",
     "#141310"
    ],
    [
     "MAILING",
     "#aaa130",
     "#ffffff"
    ]
   ],
   "meta": "2025 · CLIENTE: BUMBBA · EN STORIA CONTENIDOS",
   "imagen": {
    "src": "img/caso/bumbba/01.jpg",
    "ar": 1
   }
  },
  "marquee": {
   "bg": "#b7d7e4",
   "banda": "#f5b0cd",
   "ink": "#141310",
   "sep": "●",
   "voces": [
    "Imagine",
    "Build",
    "Enjoy"
   ],
   "giro": 2.4
  },
  "brief": {
   "bg": "#b7d7e4",
   "ink": "#141310",
   "ep": "EL ENCARGO",
   "epInk": "#aaa130",
   "tit": [
    "¿Un manual de montaje",
    "para algo que no se monta?"
   ],
   "txt": [
    "Bumbba hace sofás modulares que no necesitan montaje."
   ],
   "meta": [
    [
     "CLIENTE",
     "Bumbba — sofás modulares"
    ],
    [
     "ESTUDIO",
     "Storia Contenidos"
    ],
    [
     "AÑO",
     "2025"
    ],
    [
     "MI ROL",
     "Layout editorial · Ilustración · 3D · IA generativa"
    ],
    [
     "DOS ENTREGAS",
     "Folleto impreso · ilustraciones para la web"
    ],
    [
     "HERRAMIENTA",
     "Adobe Neo Beta para las piezas 3D"
    ]
   ]
  },
  "secciones": [
   {
    "ep": "01 / EL FOLLETO",
    "epInk": "#aaa130",
    "bg": "#f4e5d3",
    "ink": "#141310",
    "tit": [
     "Instrucciones de montaje",
     "para un sofá sin montaje"
    ],
    "bloques": [
     {
      "tipo": "filas",
      "filas": [
       {
        "cols": "860fr 452fr",
        "piezas": [
         {
          "src": "img/caso/bumbba/02.png",
          "ar": 1.2798
         }
        ]
       },
       {
        "cols": "1fr",
        "piezas": [
         {
          "src": "img/caso/bumbba/03.jpg",
          "ar": 1.4909
         }
        ]
       }
      ]
     }
    ]
   },
   {
    "ep": "02 / ILUSTRACIÓN 3D",
    "epInk": "#141310",
    "bg": "#d8eaef",
    "ink": "#141310",
    "tit": [
     "Un pouf,",
     "muchas vidas"
    ],
    "bloques": [
     {
      "tipo": "filas",
      "filas": [
       {
        "cols": "repeat(3,1fr)",
        "piezas": [
         {
          "src": "img/caso/bumbba/04.jpg",
          "ar": 1.281
         },
         {
          "src": "img/caso/bumbba/05.jpg",
          "ar": 1.281
         },
         {
          "src": "img/caso/bumbba/06.jpg",
          "ar": 1.281
         }
        ]
       },
       {
        "cols": "repeat(3,1fr)",
        "piezas": [
         {
          "src": "img/caso/bumbba/07.jpg",
          "ar": 1.281
         },
         {
          "src": "img/caso/bumbba/08.jpg",
          "ar": 1.281
         },
         {
          "src": "img/caso/bumbba/09.jpg",
          "ar": 1.281
         }
        ]
       },
       {
        "cols": "repeat(3,1fr)",
        "piezas": [
         {
          "src": "img/caso/bumbba/10.jpg",
          "ar": 1.281
         },
         {
          "ar": 1.281,
          "insignia": "LOOP",
          "poster": "img/caso/bumbba/11.jpg",
          "video": "img/caso/video/bumbba-pouf.mp4"
         }
        ]
       }
      ]
     }
    ]
   },
   {
    "ep": "03 / EN LA WEB",
    "epInk": "#aaa130",
    "bg": "#ffffff",
    "ink": "#141310",
    "tit": [
     "No es solo un sofá.",
     "Y el pouf tampoco."
    ],
    "bloques": [
     {
      "tipo": "filas",
      "filas": [
       {
        "cols": "1fr",
        "piezas": [
         {
          "src": "img/caso/bumbba/12.jpg",
          "pie": "FICHA DE PRODUCTO EN BUMBBA.ES",
          "ar": 1.8716
         }
        ]
       }
      ]
     }
    ]
   },
   {
    "ep": "04 / FOLLETO DE BRAZOS",
    "epInk": "#fbc30c",
    "bg": "#ea501c",
    "ink": "#ede6da",
    "tit": [
     "Un brazo puede ser",
     "mucho más que un brazo"
    ],
    "bloques": [
     {
      "tipo": "filas",
      "filas": [
       {
        "cols": "640fr 646fr",
        "piezas": [
         {
          "src": "img/caso/bumbba/13.jpg",
          "ar": 0.7033
         },
         {
          "panel": {
           "bg": "#fbc30c",
           "ink": "#141310",
           "tit": [
            "«Nothing has",
            "just one purpose.",
            "Not even the arms.»"
           ]
          }
         }
        ]
       },
       {
        "cols": "1fr",
        "piezas": [
         {
          "src": "img/caso/bumbba/14.jpg",
          "ar": 1.4032
         }
        ]
       },
       {
        "cols": "1fr",
        "piezas": [
         {
          "src": "img/caso/bumbba/15.jpg",
          "ar": 3.3215
         }
        ]
       },
       {
        "cols": "640fr 646fr",
        "piezas": [
         {
          "src": "img/caso/bumbba/16.jpg",
          "ar": 0.7033
         },
         {
          "src": "img/caso/bumbba/17.jpg",
          "ar": 1.2568
         }
        ]
       }
      ]
     }
    ]
   },
   {
    "ep": "05 / EMAIL",
    "epInk": "#ea501c",
    "bg": "#b7d7e4",
    "ink": "#141310",
    "tit": [
     "Diseño de mails"
    ],
    "bloques": [
     {
      "tipo": "filas",
      "filas": [
       {
        "cols": "repeat(5,1fr)",
        "piezas": [
         {
          "src": "img/caso/bumbba/18.jpg",
          "ar": 0.3658
         },
         {
          "src": "img/caso/bumbba/19.jpg",
          "ar": 0.2132
         },
         {
          "src": "img/caso/bumbba/20.jpg",
          "ar": 0.212
         },
         {
          "src": "img/caso/bumbba/21.jpg",
          "ar": 0.2559
         },
         {
          "src": "img/caso/bumbba/22.jpg",
          "ar": 0.2357
         }
        ]
       }
      ]
     }
    ]
   }
  ],
  "cierre": {
   "bg": "#141310",
   "ink": "#f4e5d3",
   "tools": [
    "INDESIGN",
    "ILLUSTRATOR",
    "ADOBE NEO BETA",
    "IA GENERATIVA"
   ],
   "rotulo": "Bumbba",
   "rotuloInk": "#f4e5d3"
  },
  "siguiente": "capri-sun"
 },
 "capri-sun": {
  "titulo": "Capri-Sun",
  "hero": {
   "bg": "#003c8c",
   "bgGrad": "linear-gradient(180deg,#003c8c 0%,#0173cb 55%,#01b3e7 100%)",
   "ink": "rgba(255,255,255,.95)",
   "tituloInk": "#ffffff",
   "titulo": "Capri-Sun",
   "sub": [
    "Lanzamiento del sabor Cola en Reino Unido.",
    "Tres loops para que se entienda a la primera."
   ],
   "pills": [
    [
     "DISEÑO",
     "#ffffff",
     "#003c8c"
    ],
    [
     "ANIMACIÓN",
     "#6b3218",
     "#ffffff"
    ],
    [
     "SOCIAL 9:16",
     "#ffffff",
     "#003c8c"
    ],
    [
     "UK",
     "#6b3218",
     "#ffffff"
    ]
   ],
   "meta": "2024 · CLIENTE: CAPRI-SUN",
   "imagen": {
    "src": "img/caso/capri-sun/01.jpg",
    "ar": 0.5628
   }
  },
  "marquee": {
   "bg": "#ffffff",
   "banda": "#6b3218",
   "ink": "#ffffff",
   "sep": "●",
   "voces": [
    "New flavour",
    "Cola",
    "UK"
   ],
   "giro": 2.4
  },
  "brief": {
   "bg": "#ffffff",
   "ink": "#0a1a2e",
   "ep": "EL ENCARGO",
   "epInk": "#003c8c",
   "tit": [
    "Que se entienda en cuanto",
    "aparece en pantalla."
   ],
   "txt": [
    "Contenido de redes para el lanzamiento del sabor Cola de Capri-Sun en Reino Unido."
   ],
   "meta": [
    [
     "CLIENTE",
     "Capri-Sun"
    ],
    [
     "AÑO",
     "2024"
    ],
    [
     "MERCADO",
     "Reino Unido"
    ],
    [
     "MI ROL",
     "Diseño · Animación"
    ],
    [
     "ENTREGA",
     "3 piezas en 9:16 para redes"
    ]
   ]
  },
  "secciones": [
   {
    "ep": "01 / LA FAMILIA",
    "epInk": "#003c8c",
    "bg": "#eff4fa",
    "ink": "#0a1a2e",
    "tit": [
     "Tres piezas,",
     "una misma campaña"
    ],
    "bloques": [
     {
      "tipo": "filas",
      "filas": [
       {
        "cols": "repeat(3,1fr)",
        "piezas": [
         {
          "ar": 0.5628,
          "insignia": "LOOP",
          "poster": "img/caso/capri-sun/01.jpg",
          "video": "img/caso/video/capri-loop-01.mp4"
         },
         {
          "ar": 0.5628,
          "insignia": "LOOP",
          "poster": "img/caso/capri-sun/02.jpg",
          "video": "img/caso/video/capri-loop-02.mp4"
         },
         {
          "ar": 0.5628,
          "insignia": "LOOP",
          "poster": "img/caso/capri-sun/03.jpg",
          "video": "img/caso/video/capri-loop-03.mp4"
         }
        ]
       }
      ]
     }
    ]
   },
   {
    "ep": "02 / FRAMES",
    "epInk": "#01b3e7",
    "bg": "#0a1a2e",
    "ink": "#ffffff",
    "tit": [],
    "bloques": [
     {
      "tipo": "filas",
      "filas": [
       {
        "cols": "repeat(4,1fr)",
        "piezas": [
         {
          "src": "img/caso/capri-sun/04.jpg",
          "ar": 0.5629
         },
         {
          "src": "img/caso/capri-sun/05.jpg",
          "ar": 0.5629
         },
         {
          "src": "img/caso/capri-sun/06.jpg",
          "ar": 0.5629
         },
         {
          "src": "img/caso/capri-sun/07.jpg",
          "ar": 0.5629
         }
        ]
       },
       {
        "cols": "repeat(4,1fr)",
        "piezas": [
         {
          "src": "img/caso/capri-sun/08.jpg",
          "ar": 0.5629
         },
         {
          "src": "img/caso/capri-sun/09.jpg",
          "ar": 0.5629
         },
         {
          "src": "img/caso/capri-sun/10.jpg",
          "ar": 0.5629
         },
         {
          "src": "img/caso/capri-sun/11.jpg",
          "ar": 0.5629
         }
        ]
       }
      ]
     }
    ]
   },
   {
    "ep": "03 / MERCADO",
    "epInk": "#003c8c",
    "bg": "#ffffff",
    "ink": "#0a1a2e",
    "tit": [
     "Un skyline basta",
     "para situarla"
    ],
    "bloques": [
     {
      "tipo": "filas",
      "filas": [
       {
        "cols": "560fr 752fr",
        "piezas": [
         {
          "src": "img/caso/capri-sun/12.jpg",
          "pie": "EL SKYLINE DE LONDRES, EN EL MISMO AZUL",
          "ar": 0.5623
         }
        ]
       }
      ]
     }
    ]
   }
  ],
  "cierre": {
   "bg": "#003c8c",
   "ink": "#ffffff",
   "tools": [
    "AFTER EFFECTS",
    "DISEÑO",
    "ANIMACIÓN",
    "SOCIAL"
   ],
   "rotulo": "Capri-Sun",
   "rotuloInk": "#ffffff"
  },
  "siguiente": "hero-solo-bio"
 },
 "hero-solo-bio": {
  "titulo": "Hero Solo Bio",
  "hero": {
   "bg": "#97bee5",
   "bgGrad": "linear-gradient(180deg,#97bee5 0%,#bcd5b9 62%,#d9e083 100%)",
   "ink": "#123b7a",
   "tituloInk": "#ffffff",
   "titulo": "Hero Solo Bio",
   "sub": [
    "Puré, puffs y una colaboración con Bluey.",
    "Cuatro piezas de redes para comida de bebé."
   ],
   "pills": [
    [
     "DISEÑO",
     "#ffffff",
     "#123b7a"
    ],
    [
     "ANIMACIÓN",
     "#f2b60e",
     "#123b7a"
    ],
    [
     "STORYBOARD",
     "#ffffff",
     "#123b7a"
    ],
    [
     "SONIDO",
     "#f2b60e",
     "#123b7a"
    ]
   ],
   "meta": "CLIENTE: HERO · EN PLAYROOM",
   "imagen": {
    "src": "img/caso/hero-solo-bio/01.jpg",
    "ar": 0.8007
   }
  },
  "marquee": {
   "bg": "#f7e5c9",
   "banda": "#35682a",
   "ink": "#f7e5c9",
   "sep": "●",
   "voces": [
    "Solo Bio",
    "Bluey",
    "100% natural"
   ],
   "giro": 2.4
  },
  "brief": {
   "bg": "#ffffff",
   "ink": "#0a1a2e",
   "ep": "EL ENCARGO",
   "epInk": "#003c8c",
   "tit": [
    "La misma marca,",
    "dos mundos muy distintos."
   ],
   "txt": [
    "Contenido de redes para Hero Solo Bio, la gama de alimentación infantil ecológica de Hero."
   ],
   "meta": [
    [
     "CLIENTE",
     "Hero · Solo Bio"
    ],
    [
     "ESTUDIO",
     "PLAYROOM"
    ],
    [
     "FORMATO",
     "4:5 para redes"
    ],
    [
     "MI ROL",
     "Storyboard · Diseño · Animación · Sonido"
    ],
    [
     "ENTREGA",
     "4 piezas animadas + 1 spot con audio"
    ]
   ]
  },
  "secciones": [
   {
    "ep": "01 / LO NATURAL",
    "epInk": "#b7c367",
    "bg": "#f7e5c9",
    "ink": "#35682a",
    "tit": [],
    "bloques": [
     {
      "tipo": "filas",
      "filas": [
       {
        "cols": "424fr 424fr 440fr",
        "piezas": [
         {
          "ar": 0.8,
          "poster": "img/caso/hero-solo-bio/02.jpg",
          "video": "img/caso/video/hero-puffs.mp4"
         },
         {
          "ar": 0.8,
          "poster": "img/caso/hero-solo-bio/03.jpg",
          "video": "img/caso/video/hero-cremas.mp4"
         },
         {
          "panel": {
           "bg": "#b7c367",
           "ink": "#ffffff",
           "ep": "LA IDEA",
           "tit": [
            "«100%",
            "ingredientes",
            "naturales»"
           ]
          }
         }
        ]
       }
      ]
     }
    ]
   },
   {
    "ep": "02 / EL MUNDO BLUEY",
    "epInk": "#ffffff",
    "bg": "#97bee5",
    "ink": "#123b7a",
    "tit": [
     "Y de repente,",
     "aparece Bluey"
    ],
    "bloques": [
     {
      "tipo": "filas",
      "filas": [
       {
        "cols": "440fr 424fr 424fr",
        "piezas": [
         {
          "panel": {
           "bg": "#123b7a",
           "ink": "#ffffff",
           "ep": "LA COSTURA",
           "epInk": "#d9e083",
           "tit": [
            "Otro mundo,",
            "el mismo",
            "ritmo"
           ]
          }
         },
         {
          "ar": 0.8,
          "poster": "img/caso/hero-solo-bio/04.jpg",
          "video": "img/caso/video/hero-cacao.mp4"
         },
         {
          "ar": 0.8,
          "poster": "img/caso/hero-solo-bio/05.jpg",
          "video": "img/caso/video/hero-bolsitas.mp4"
         }
        ]
       }
      ]
     }
    ]
   },
   {
    "ep": "03 / CON SONIDO",
    "epInk": "#35682a",
    "bg": "#f2b60e",
    "ink": "#35682a",
    "tit": [
     "El sonido también",
     "forma parte del montaje"
    ],
    "bloques": [
     {
      "tipo": "filas",
      "filas": [
       {
        "cols": "424fr 862fr",
        "piezas": [
         {
          "ar": 0.8,
          "poster": "img/caso/hero-solo-bio/06.jpg",
          "video": "img/caso/video/hero-spot.mp4"
         },
         {
          "panel": {
           "bg": "#35682a",
           "ink": "#ffffff",
           "ep": "DE LA VIÑETA AL SONIDO",
           "epInk": "#d9e083",
           "tit": [
            "Storyboard, diseño,",
            "animación y sonido"
           ]
          }
         }
        ]
       }
      ]
     },
     {
      "tipo": "filas",
      "filas": [
       {
        "cols": "repeat(5,1fr)",
        "piezas": [
         {
          "src": "img/caso/hero-solo-bio/07.jpg",
          "ar": 0.8
         },
         {
          "src": "img/caso/hero-solo-bio/08.jpg",
          "ar": 0.8
         },
         {
          "src": "img/caso/hero-solo-bio/09.jpg",
          "ar": 0.8
         },
         {
          "src": "img/caso/hero-solo-bio/10.jpg",
          "ar": 0.8
         },
         {
          "src": "img/caso/hero-solo-bio/11.jpg",
          "ar": 0.8
         }
        ]
       }
      ]
     }
    ]
   }
  ],
  "cierre": {
   "bg": "#35682a",
   "ink": "#d9e083",
   "tools": [
    "AFTER EFFECTS",
    "ILLUSTRATOR",
    "STORYBOARD",
    "SONIDO"
   ],
   "rotulo": "Hero Solo Bio",
   "rotuloInk": "#ffffff"
  },
  "siguiente": "miniso"
 },
 "colorbaby": {
  "titulo": "Colorbaby",
  "hero": {
   "bg": "#ffffff",
   "ink": "#0f0f0f",
   "tituloInk": "#e30613",
   "titulo": "Colorbaby",
   "sub": [
    "Calendario 2023"
   ],
   "pills": [
    [
     "ILUSTRACIÓN",
     "#e30613",
     "#ffffff"
    ],
    [
     "3D",
     "#f7e916",
     "#0f0f0f"
    ],
    [
     "MAQUETACIÓN",
     "#0072b0",
     "#ffffff"
    ],
    [
     "2D",
     "#f7e916",
     "#0f0f0f"
    ]
   ],
   "meta": "CLIENTE: COLORBABY · CALENDARIO 2023",
   "imagen": {
    "src": "img/caso/colorbaby/01.jpg",
    "ar": 1
   }
  },
  "marquee": {
   "bg": "#ffffff",
   "banda": "#e30613",
   "ink": "#ffffff",
   "sep": "●",
   "voces": [
    "Colorbaby",
    "2023",
    "2D + 3D"
   ],
   "giro": 2.4
  },
  "brief": {
   "bg": "#ffffff",
   "ink": "#0a1a2e",
   "ep": "EL ENCARGO",
   "epInk": "#003c8c",
   "tit": [
    "Calendario 2023",
    "de Colorbaby."
   ],
   "txt": [
    "Calendario 2023 de Colorbaby: un mix entre 3D e ilustración manual."
   ],
   "meta": [
    [
     "CLIENTE",
     "Colorbaby"
    ],
    [
     "AÑO",
     "2023"
    ],
    [
     "TÉCNICA",
     "3D + dibujo 2D"
    ],
    [
     "MI ROL",
     "Ilustración · Maquetación"
    ],
    [
     "ENTREGA",
     "Calendario de sobremesa"
    ]
   ]
  },
  "secciones": [
   {
    "ep": "01 / LAS SEIS ESCENAS",
    "epInk": "#e30613",
    "bg": "#f7e916",
    "ink": "#0f0f0f",
    "tit": [],
    "txt": "",
    "bloques": [
     {
      "tipo": "filas",
      "filas": [
       {
        "cols": "1fr 1fr 1fr",
        "piezas": [
         {
          "src": "img/caso/colorbaby/02.jpg",
          "ar": 1
         },
         {
          "src": "img/caso/colorbaby/03.jpg",
          "ar": 1
         },
         {
          "src": "img/caso/colorbaby/04.jpg",
          "ar": 1
         }
        ]
       },
       {
        "cols": "1fr 1fr 1fr",
        "piezas": [
         {
          "src": "img/caso/colorbaby/05.jpg",
          "ar": 1
         },
         {
          "src": "img/caso/colorbaby/06.jpg",
          "ar": 1
         },
         {
          "src": "img/caso/colorbaby/07.jpg",
          "ar": 1
         }
        ]
       }
      ]
     },
     {
      "tipo": "filas",
      "filas": [
       {
        "cols": "1fr",
        "piezas": [
         {
          "src": "img/caso/colorbaby/08.jpg",
          "ar": 7.3708
         }
        ]
       }
      ]
     }
    ]
   },
   {
    "ep": "02 / LA PÁGINA",
    "epInk": "#f7e916",
    "bg": "#0072b0",
    "ink": "#ffffff",
    "tit": [],
    "txt": "",
    "bloques": [
     {
      "tipo": "filas",
      "filas": [
       {
        "cols": "minmax(0,560px)",
        "piezas": [
         {
          "src": "img/caso/colorbaby/09.jpg",
          "pie": "ENERO",
          "ar": 1
         }
        ]
       }
      ]
     }
    ]
   },
   {
    "ep": "03 / 2D SOBRE 3D",
    "epInk": "#f7e916",
    "bg": "#e30613",
    "ink": "#ffffff",
    "tit": [
     "Un mix entre 3D",
     "e ilustración manual"
    ],
    "txt": "",
    "bloques": [
     {
      "tipo": "filas",
      "filas": [
       {
        "cols": "1fr 1fr 1fr",
        "piezas": [
         {
          "src": "img/caso/colorbaby/10.jpg",
          "ar": 1
         },
         {
          "src": "img/caso/colorbaby/11.jpg",
          "ar": 1
         },
         {
          "src": "img/caso/colorbaby/12.jpg",
          "ar": 1
         }
        ]
       }
      ]
     }
    ]
   }
  ],
  "cierre": {
   "bg": "#0072b0",
   "ink": "#f7e916",
   "tools": [
    "ILLUSTRATOR",
    "CINEMA 4D",
    "PHOTOSHOP",
    "INDESIGN"
   ],
   "rotulo": "Colorbaby",
   "rotuloInk": "#ffffff"
  },
  "siguiente": "hero-solo-bio"
 },
 "pummba": {
  "titulo": "Pummba",
  "hero": {
   "bg": "#fffaf4",
   "ink": "#264b66",
   "tituloInk": "#264b66",
   "titulo": "Pummba",
   "sub": [
    "La home de una marca de sofás modulares.",
    "Un sofá que se convierte en seis salones."
   ],
   "pills": [
    [
     "ILUSTRACIÓN",
     "#264b66",
     "#ffffff"
    ],
    [
     "ANIMACIÓN",
     "#f37543",
     "#264b66"
    ],
    [
     "3D + 2D",
     "#264b66",
     "#ffffff"
    ],
    [
     "AFTER EFFECTS",
     "#f37543",
     "#264b66"
    ]
   ],
   "meta": "CLIENTE: PUMMBA · EN STORIA CONTENIDOS",
   "imagen": {
    "src": "img/caso/pummba/01.jpg",
    "ar": 1.5707
   }
  },
  "marquee": {
   "bg": "#fffaf4",
   "banda": "#f37543",
   "ink": "#fffaf4",
   "sep": "●",
   "voces": [
    "Pummba",
    "Un sofá, seis salones",
    "3D + 2D"
   ],
   "giro": 2.4
  },
  "brief": {
   "bg": "#ffffff",
   "ink": "#0a1a2e",
   "ep": "EL ENCARGO",
   "epInk": "#003c8c",
   "tit": [
    "El sofá no cambia.",
    "Solo cambia de sitio."
   ],
   "txt": [
    "Ilustración y animación para la web de Pummba."
   ],
   "meta": [
    [
     "CLIENTE",
     "Pummba"
    ],
    [
     "ESTUDIO",
     "Storia Contenidos"
    ],
    [
     "FORMATO",
     "16:9"
    ],
    [
     "TÉCNICA",
     "3D + 2D en After Effects"
    ],
    [
     "MI ROL",
     "Ilustración · Animación"
    ]
   ]
  },
  "secciones": [
   {
    "ep": "01 / SEIS SALONES",
    "epInk": "#f37543",
    "bg": "#fffaf4",
    "ink": "#264b66",
    "tit": [
     "Las mismas piezas,",
     "seis maneras de usarlas"
    ],
    "txt": "",
    "bloques": [
     {
      "tipo": "filas",
      "filas": [
       {
        "cols": "1fr 1fr",
        "piezas": [
         {
          "src": "img/caso/pummba/02.jpg",
          "ar": 1.5721
         },
         {
          "src": "img/caso/pummba/03.jpg",
          "ar": 1.5721
         }
        ]
       },
       {
        "cols": "1fr 1fr",
        "piezas": [
         {
          "src": "img/caso/pummba/04.jpg",
          "ar": 1.5721
         },
         {
          "src": "img/caso/pummba/05.jpg",
          "ar": 1.5721
         }
        ]
       },
       {
        "cols": "1fr 1fr",
        "piezas": [
         {
          "src": "img/caso/pummba/06.jpg",
          "ar": 1.5721
         },
         {
          "src": "img/caso/pummba/07.jpg",
          "ar": 1.5721
         }
        ]
       }
      ]
     }
    ]
   },
   {
    "ep": "02 / EL BUCLE",
    "epInk": "#f37543",
    "bg": "#264b66",
    "ink": "#fffaf4",
    "tit": [
     "Una cámara fija",
     "y todo lo demás moviéndose"
    ],
    "txt": "",
    "bloques": [
     {
      "tipo": "filas",
      "filas": [
       {
        "cols": "1fr",
        "piezas": [
         {
          "ar": 1.5731,
          "poster": "img/caso/pummba/08.jpg",
          "video": "img/caso/video/pummba-home.mp4"
         }
        ]
       }
      ]
     },
     {
      "tipo": "rotulo",
      "txt": "FRAMES"
     },
     {
      "tipo": "filas",
      "filas": [
       {
        "cols": "repeat(5,1fr)",
        "piezas": [
         {
          "src": "img/caso/pummba/09.jpg",
          "ar": 1.5696
         },
         {
          "src": "img/caso/pummba/10.jpg",
          "ar": 1.5696
         },
         {
          "src": "img/caso/pummba/11.jpg",
          "ar": 1.5696
         },
         {
          "src": "img/caso/pummba/12.jpg",
          "ar": 1.5696
         },
         {
          "src": "img/caso/pummba/13.jpg",
          "ar": 1.5696
         }
        ]
       }
      ]
     }
    ]
   },
   {
    "ep": "03 / DETALLE",
    "epInk": "#fffaf4",
    "bg": "#f37543",
    "ink": "#ffffff",
    "tit": [],
    "txt": "",
    "bloques": [
     {
      "tipo": "filas",
      "filas": [
       {
        "cols": "1fr 1fr 1fr",
        "piezas": [
         {
          "src": "img/caso/pummba/14.jpg",
          "ar": 0.9702
         },
         {
          "src": "img/caso/pummba/15.jpg",
          "ar": 0.9702
         },
         {
          "src": "img/caso/pummba/16.jpg",
          "ar": 0.9702
         }
        ]
       }
      ]
     }
    ]
   }
  ],
  "cierre": {
   "bg": "#264b66",
   "ink": "#f37543",
   "tools": [
    "AFTER EFFECTS",
    "CINEMA 4D",
    "ILLUSTRATOR",
    "ILUSTRACIÓN"
   ],
   "rotulo": "Pummba",
   "rotuloInk": "#ffffff"
  },
  "siguiente": "colorbaby"
 },
 "tashi": {
  "titulo": "Tashi",
  "hero": {
   "bg": "#ff80a9",
   "ink": "#160c53",
   "titulo": "Tashi",
   "tituloInk": "#160c53",
   "sub": [
    "Diseño de personaje para el Máster de",
    "Ilustración Editorial de Escuela Trazos."
   ],
   "pills": [
    [
     "PERSONAJE",
     "#160c53",
     "#ffffff"
    ],
    [
     "ILUSTRACIÓN",
     "#7fd4c4",
     "#160c53"
    ],
    [
     "EXPRESIONES",
     "#160c53",
     "#ffffff"
    ],
    [
     "ESCUELA TRAZOS",
     "#7fd4c4",
     "#160c53"
    ]
   ],
   "meta": "MÁSTER DE ILUSTRACIÓN EDITORIAL · ESCUELA TRAZOS",
   "imagen": {
    "src": "img/caso/tashi/01.jpg",
    "ar": 0.5978
   }
  },
  "marquee": {
   "bg": "#ffffff",
   "banda": "#fe374c",
   "ink": "#ffffff",
   "sep": "●",
   "voces": [
    "Tashi",
    "Galletas de leche",
    "Mal genio"
   ],
   "giro": 2.4
  },
  "brief": {
   "bg": "#ffffff",
   "ink": "#0a1a2e",
   "ep": "LA HISTORIA",
   "epInk": "#003c8c",
   "tit": [
    "Sus galletas son legendarias.",
    "Ella no tanto."
   ],
   "txt": [
    "Diseño de personaje para el Máster de Ilustración Editorial de Escuela Trazos. Tashi es una niña que vende galletas de leche en un pequeño puesto de madera al borde de una montaña del Tíbet."
   ],
   "meta": [
    [
     "TIPO",
     "Máster de Ilustración Editorial · Escuela Trazos"
    ],
    [
     "PERSONAJE",
     "Tashi"
    ],
    [
     "TÉCNICA",
     "Ilustración digital"
    ],
    [
     "MI ROL",
     "Diseño de personaje · Ilustración"
    ],
    [
     "ENTREGA",
     "Ilustración final + hoja de expresiones"
    ]
   ],
   "despues": false
  },
  "secciones": [
   {
    "ep": "01 / LA ILUSTRACIÓN",
    "epInk": "#fe374c",
    "bg": "#f7e8d1",
    "ink": "#160c53",
    "tit": [
     "La galleta,",
     "como si fuera una aureola"
    ],
    "txt": "",
    "bloques": [
     {
      "tipo": "filas",
      "filas": [
       {
        "cols": "560fr 712fr",
        "piezas": [
         {
          "src": "img/caso/tashi/02.jpg",
          "ar": 0.5977
         },
         {
          "panel": {
           "bg": "#7fd4c4",
           "ink": "#160c53",
           "ep": "LA CONTRADICCIÓN",
           "tit": [
            "La forma es dulce.",
            "La mirada, no."
           ],
           "txt": "Gorro rosa con pompón, orejeras, pendientes de menta y mejillas redondas. Todo en ella parece amable hasta que llegas a los ojos."
          }
         }
        ]
       }
      ]
     }
    ]
   },
   {
    "ep": "02 / EMOCIONES",
    "epInk": "#ffffff",
    "bg": "#ff80a9",
    "ink": "#160c53",
    "tit": [
     "Diferentes emociones"
    ],
    "txt": "",
    "bloques": [
     {
      "tipo": "filas",
      "filas": [
       {
        "cols": "1fr 1fr 1fr 1fr",
        "piezas": [
         {
          "src": "img/caso/tashi/03.jpg",
          "ar": 0.9937
         },
         {
          "src": "img/caso/tashi/04.jpg",
          "ar": 0.9937
         },
         {
          "src": "img/caso/tashi/05.jpg",
          "ar": 0.9937
         },
         {
          "src": "img/caso/tashi/06.jpg",
          "ar": 0.9937
         }
        ]
       }
      ]
     },
     {
      "tipo": "filas",
      "filas": [
       {
        "cols": "1fr",
        "piezas": [
         {
          "src": "img/caso/tashi/07.jpg",
          "ar": 1.7778
         }
        ]
       }
      ]
     }
    ]
   },
   {
    "ep": "03 / EL BOCETO",
    "epInk": "#fe374c",
    "bg": "#ffffff",
    "ink": "#160c53",
    "tit": [],
    "txt": "",
    "bloques": [
     {
      "tipo": "filas",
      "filas": [
       {
        "cols": "1fr 1fr",
        "piezas": [
         {
          "src": "img/caso/tashi/08.jpg",
          "ar": 0.8821
         },
         {
          "src": "img/caso/tashi/09.jpg",
          "ar": 0.8821
         }
        ]
       }
      ]
     }
    ]
   }
  ],
  "cierre": {
   "bg": "#160c53",
   "ink": "#ff80a9",
   "tools": [
    "PHOTOSHOP",
    "ILUSTRACIÓN",
    "PERSONAJE",
    "PERSONAL"
   ],
   "rotulo": "Tashi",
   "rotuloInk": "#ffffff"
  },
  "siguiente": "pummba"
 },
 "la-vanguardia": {
  "titulo": "La Vanguardia",
  "hero": {
   "bg": "#041c4a",
   "ink": "#ffffff",
   "titulo": "La Vanguardia",
   "tituloInk": "#ffffff",
   "sub": [
    "«Porque te interesa». Dos piezas:",
    "la campaña y lo que consiguió."
   ],
   "pills": [
    [
     "MONTAJE",
     "#ffffff",
     "#041c4a"
    ],
    [
     "EDICIÓN",
     "#ffe500",
     "#041c4a"
    ],
    [
     "DISEÑO DE AUDIO",
     "#ffffff",
     "#041c4a"
    ],
    [
     "CASANOVA",
     "#ffe500",
     "#041c4a"
    ]
   ],
   "meta": "CLIENTE: LA VANGUARDIA · EN CASANOVA",
   "imagen": {
    "src": "img/caso/la-vanguardia/01.jpg",
    "ar": 1.7751
   }
  },
  "marquee": {
   "bg": "#ffffff",
   "banda": "#041c4a",
   "ink": "#ffffff",
   "sep": "●",
   "voces": [
    "Porque te interesa",
    "La Vanguardia",
    "Montaje y sonido"
   ],
   "giro": 2.4
  },
  "brief": {
   "bg": "#ffffff",
   "ink": "#0a1a2e",
   "ep": "EL ENCARGO",
   "epInk": "#003c8c",
   "tit": [
    "Dos vídeos.",
    "Dos maneras de contar la misma campaña."
   ],
   "txt": [
    "Vídeos para «Porque te interesa», la campaña de La Vanguardia."
   ],
   "meta": [
    [
     "CLIENTE",
     "La Vanguardia"
    ],
    [
     "AGENCIA",
     "Casanova"
    ],
    [
     "CAMPAÑA",
     "«Porque te interesa»"
    ],
    [
     "MI ROL",
     "Montaje · Edición · Diseño de audio"
    ],
    [
     "ENTREGA",
     "2 vídeos · 20 s y 1:28"
    ]
   ],
   "despues": false
  },
  "secciones": [
   {
    "ep": "01 / LAS DOS PIEZAS",
    "epInk": "#041c4a",
    "bg": "#f2f1ed",
    "ink": "#041c4a",
    "tit": [],
    "txt": "",
    "bloques": [
     {
      "tipo": "filas",
      "filas": [
       {
        "cols": "1fr",
        "piezas": [
         {
          "ar": 1.7778,
          "poster": "img/caso/la-vanguardia/02.jpg",
          "video": "img/caso/video/lv-spot.mp4"
         }
        ]
       },
       {
        "cols": "1fr",
        "piezas": [
         {
          "ar": 1.7778,
          "poster": "img/caso/la-vanguardia/03.jpg",
          "video": "img/caso/video/lv-resumen.mp4"
         }
        ]
       }
      ]
     }
    ]
   },
   {
    "ep": "02 / CÓMO ESTÁ MONTADO",
    "epInk": "#ffe500",
    "bg": "#041c4a",
    "ink": "#ffffff",
    "tit": [],
    "txt": "",
    "bloques": [
     {
      "tipo": "filas",
      "filas": [
       {
        "cols": "1fr 1fr 1fr",
        "piezas": [
         {
          "src": "img/caso/la-vanguardia/04.jpg",
          "ar": 1.7741
         },
         {
          "src": "img/caso/la-vanguardia/05.jpg",
          "ar": 1.7741
         },
         {
          "src": "img/caso/la-vanguardia/06.jpg",
          "ar": 1.7741
         }
        ]
       },
       {
        "cols": "1fr 1fr",
        "piezas": [
         {
          "src": "img/caso/la-vanguardia/07.jpg",
          "ar": 1.7796
         },
         {
          "src": "img/caso/la-vanguardia/08.jpg",
          "ar": 1.7796
         }
        ]
       }
      ]
     }
    ]
   }
  ],
  "cierre": {
   "bg": "#041c4a",
   "ink": "#ffe500",
   "tools": [
    "PREMIERE",
    "AFTER EFFECTS",
    "MONTAJE",
    "AUDIO"
   ],
   "rotulo": "La Vanguardia",
   "rotuloInk": "#ffffff"
  },
  "siguiente": "tashi"
 },
 "ilustraciones": {
  "titulo": "Ilustraciones",
  "hero": {
   "bg": "#efede6",
   "ink": "#14141a",
   "titulo": "Ilustraciones",
   "tituloInk": "#14141a",
   "sub": [
    "Ilustraciones variadas."
   ],
   "pills": [
    [
     "CARTEL",
     "#1e7a3c",
     "#ffffff"
    ],
    [
     "INFOGRAFÍA",
     "#101a3d",
     "#ffffff"
    ],
    [
     "GRÁFICA",
     "#e8479a",
     "#ffffff"
    ],
    [
     "EDITORIAL",
     "#7ec8f0",
     "#ffffff"
    ]
   ],
   "meta": "ILUSTRACIONES VARIADAS",
   "imagen": {
    "src": "img/caso/ilustraciones/01.jpg",
    "ar": 0.7068
   }
  },
  "marquee": {
   "bg": "#efede6",
   "banda": "#14141a",
   "ink": "#efede6",
   "sep": "●",
   "voces": [
    "Ilustraciones",
    "Carteles",
    "Infografías"
   ],
   "giro": 2.4
  },
  "brief": {
   "bg": "#ffffff",
   "ink": "#0a1a2e",
   "ep": "EL CONJUNTO",
   "epInk": "#003c8c",
   "tit": [
    "Ilustraciones variadas."
   ],
   "txt": [
    "Carteles, infografías, gráfica y una portada de libro."
   ],
   "meta": [
    [
     "TIPO",
     "Piezas sueltas"
    ],
    [
     "PIEZAS",
     "9"
    ],
    [
     "FORMATOS",
     "Cartel · Infografía · Gráfica · Editorial"
    ],
    [
     "MI ROL",
     "Concepto · Ilustración · Diseño"
    ],
    [
     "TÉCNICAS",
     "Línea, pintura digital, lettering, datos"
    ]
   ],
   "despues": false
  },
  "secciones": [
   {
    "ep": "01 / CARTELES",
    "epInk": "#1e7a3c",
    "bg": "#efede6",
    "ink": "#14141a",
    "tit": [
     "Carteles"
    ],
    "txt": "",
    "bloques": [
     {
      "tipo": "filas",
      "filas": [
       {
        "cols": "595fr 691fr",
        "piezas": [
         {
          "src": "img/caso/ilustraciones/02.jpg",
          "ar": 0.7067
         },
         {
          "src": "img/caso/ilustraciones/03.jpg",
          "ar": 0.8207
         }
        ]
       },
       {
        "cols": "560fr 726fr",
        "piezas": [
         {
          "src": "img/caso/ilustraciones/04.jpg",
          "ar": 0.7273
         },
         {
          "src": "img/caso/ilustraciones/05.jpg",
          "ar": 0.9429
         }
        ]
       }
      ]
     }
    ]
   },
   {
    "ep": "02 / INFOGRAFÍAS",
    "epInk": "#ffd400",
    "bg": "#101a3d",
    "ink": "#ffffff",
    "tit": [
     "Infografías"
    ],
    "txt": "",
    "bloques": [
     {
      "tipo": "filas",
      "filas": [
       {
        "cols": "1fr 1fr",
        "piezas": [
         {
          "src": "img/caso/ilustraciones/06.jpg",
          "ar": 0.7074
         },
         {
          "src": "img/caso/ilustraciones/07.jpg",
          "ar": 0.7074
         }
        ]
       }
      ]
     }
    ]
   },
   {
    "ep": "03 / GRÁFICA",
    "epInk": "#ffffff",
    "bg": "#e8479a",
    "ink": "#14141a",
    "tit": [
     "Gráfica"
    ],
    "txt": "",
    "bloques": [
     {
      "tipo": "filas",
      "filas": [
       {
        "cols": "1fr 1fr",
        "piezas": [
         {
          "src": "img/caso/ilustraciones/08.jpg",
          "ar": 1
         },
         {
          "src": "img/caso/ilustraciones/09.jpg",
          "ar": 1
         }
        ]
       }
      ]
     }
    ]
   },
   {
    "ep": "04 / EDITORIAL",
    "epInk": "#ffffff",
    "bg": "#7ec8f0",
    "ink": "#14141a",
    "tit": [
     "Editorial"
    ],
    "txt": "",
    "bloques": [
     {
      "tipo": "filas",
      "filas": [
       {
        "cols": "575fr 711fr",
        "piezas": [
         {
          "src": "img/caso/ilustraciones/10.jpg",
          "ar": 0.7215
         },
         {
          "src": "img/caso/ilustraciones/11.jpg",
          "ar": 0.8921
         }
        ]
       }
      ]
     }
    ]
   }
  ],
  "cierre": {
   "bg": "#14141a",
   "ink": "#efede6",
   "tools": [
    "ILLUSTRATOR",
    "PHOTOSHOP",
    "PROCREATE",
    "INDESIGN"
   ],
   "rotulo": "Ilustraciones",
   "rotuloInk": "#ffffff"
  },
  "siguiente": "la-vanguardia"
 },
 "kalk": {
  "titulo": "Kalk",
  "hero": {
   "bg": "#f4f4f2",
   "ink": "#101010",
   "titulo": "Kalk",
   "tituloInk": "#101010",
   "sub": [
    "Joyería modelada en 3D",
    "para anuncios de rendimiento."
   ],
   "pills": [
    [
     "3D",
     "#101010",
     "#ffffff"
    ],
    [
     "MODELADO",
     "#c9a227",
     "#101010"
    ],
    [
     "ANIMACIÓN",
     "#101010",
     "#ffffff"
    ],
    [
     "PERFORMANCE",
     "#c9a227",
     "#101010"
    ]
   ],
   "meta": "CLIENTE: KALK · ANUNCIOS DE RENDIMIENTO",
   "imagen": {
    "src": "img/caso/kalk/01.jpg",
    "ar": 0.5626
   }
  },
  "marquee": {
   "bg": "#f4f4f2",
   "banda": "#101010",
   "ink": "#f4f4f2",
   "sep": "●",
   "voces": [
    "Kalk",
    "Oro, plata, esmeralda",
    "3D"
   ],
   "giro": 2.4
  },
  "brief": {
   "bg": "#ffffff",
   "ink": "#0a1a2e",
   "ep": "EL ENCARGO",
   "epInk": "#003c8c",
   "tit": [
    "Una joya pequeña",
    "que tiene que llenar la pantalla."
   ],
   "txt": [
    "Concepto para Kalk: modelado, animación 3D e ilustración para enseñar las piezas de la marca en anuncios de rendimiento."
   ],
   "meta": [
    [
     "CLIENTE",
     "Kalk"
    ],
    [
     "FORMATO",
     "9:16 · 1080×1920"
    ],
    [
     "TÉCNICA",
     "Modelado y animación 3D"
    ],
    [
     "MI ROL",
     "Concepto · 3D · Animación"
    ],
    [
     "ENTREGA",
     "3 anuncios de rendimiento"
    ]
   ],
   "despues": false
  },
  "secciones": [
   {
    "ep": "01 / LAS TRES PIEZAS",
    "epInk": "#c9a227",
    "bg": "#f4f4f2",
    "ink": "#101010",
    "tit": [
     "Oro, plata",
     "y una esmeralda en bruto"
    ],
    "txt": "",
    "bloques": [
     {
      "tipo": "filas",
      "filas": [
       {
        "cols": "1fr 1fr 1fr",
        "piezas": [
         {
          "ar": 0.5622,
          "poster": "img/caso/kalk/02.jpg",
          "video": "img/caso/video/kalk-oro.mp4"
         },
         {
          "ar": 0.5622,
          "poster": "img/caso/kalk/03.jpg",
          "video": "img/caso/video/kalk-plata.mp4"
         },
         {
          "ar": 0.5622,
          "poster": "img/caso/kalk/04.jpg",
          "video": "img/caso/video/kalk-esmeralda.mp4"
         }
        ]
       }
      ]
     }
    ]
   },
   {
    "ep": "02 / EL SISTEMA",
    "epInk": "#c9a227",
    "bg": "#101010",
    "ink": "#ffffff",
    "tit": [
     "Mucho blanco,",
     "muy poco más"
    ],
    "txt": "",
    "bloques": [
     {
      "tipo": "filas",
      "filas": [
       {
        "cols": "1fr 1fr 1fr 1fr",
        "piezas": [
         {
          "src": "img/caso/kalk/05.jpg",
          "ar": 0.5629
         },
         {
          "src": "img/caso/kalk/06.jpg",
          "ar": 0.5629
         },
         {
          "src": "img/caso/kalk/07.jpg",
          "ar": 0.5629
         },
         {
          "src": "img/caso/kalk/08.jpg",
          "ar": 0.5629
         }
        ]
       }
      ]
     }
    ]
   },
   {
    "ep": "03 / LOS MATERIALES",
    "epInk": "#c9a227",
    "bg": "#ffffff",
    "ink": "#101010",
    "tit": [],
    "txt": "",
    "bloques": [
     {
      "tipo": "filas",
      "filas": [
       {
        "cols": "500fr 410fr 350fr",
        "piezas": [
         {
          "src": "img/caso/kalk/09.jpg",
          "ar": 1.4045
         },
         {
          "src": "img/caso/kalk/10.jpg",
          "ar": 1.1517
         },
         {
          "src": "img/caso/kalk/11.jpg",
          "ar": 0.9831
         }
        ]
       }
      ]
     }
    ]
   }
  ],
  "cierre": {
   "bg": "#101010",
   "ink": "#c9a227",
   "tools": [
    "CINEMA 4D",
    "AFTER EFFECTS",
    "MODELADO 3D",
    "PERFORMANCE"
   ],
   "rotulo": "Kalk",
   "rotuloInk": "#f4f4f2"
  },
  "siguiente": "ilustraciones"
 },
 "reel": {
  "titulo": "Reel",
  "hero": {
   "bg": "#A96BF3",
   "bgGrad": "linear-gradient(180deg,#8B3FE0 0%,#A96BF3 32%,#D69CF5 58%,#F0D9FB 80%,#FFFFFF 98%)",
   "ink": "#FFFFFF",
   "titulo": "Reel",
   "sub": [
    "Una selección del trabajo de motion",
    "de los últimos años, montada en 53 segundos."
   ],
   "pills": [
    [
     "MOTION GRAPHICS",
     "rgba(255,255,255,.18)",
     "#FFFFFF"
    ],
    [
     "2D & 3D",
     "rgba(255,255,255,.18)",
     "#FFFFFF"
    ],
    [
     "DIRECCIÓN",
     "rgba(255,255,255,.18)",
     "#FFFFFF"
    ],
    [
     "ANIMACIÓN",
     "rgba(255,255,255,.18)",
     "#FFFFFF"
    ]
   ],
   "meta": "2026 · SHOWREEL",
   "imagen": {
    "src": "img/caso/reel/hero.jpg",
    "ar": "16/9"
   }
  },
  "marquee": {
   "bg": "#FFFFFF",
   "banda": "#8B3FE0",
   "ink": "#FFFFFF",
   "sep": "✦",
   "voces": [
    "Motion graphics",
    "2D",
    "3D",
    "Ilustración",
    "Animación"
   ],
   "giro": -2.2
  },
  "brief": {
   "bg": "#FFFFFF",
   "ink": "#0E1318",
   "ep": "EL REEL",
   "epInk": "#8B3FE0",
   "tit": [
    "Un reel es un argumento,",
    "no un archivo."
   ],
   "txt": [
    "Una selección del trabajo de motion de los últimos años, montada en una sola pieza.",
    "Los cortes van del 2D al 3D y del trabajo de marca al personal, con el ritmo puesto para que ninguna pieza se quede más de lo que necesita para decir lo que tiene que decir.",
    "Todo lo que aparece está diseñado y animado por mí."
   ],
   "meta": [
    [
     "AÑO",
     "2026"
    ],
    [
     "MI ROL",
     "Dirección · Diseño · Animación"
    ],
    [
     "DURACIÓN",
     "53 segundos"
    ],
    [
     "HERRAMIENTAS",
     "After Effects · Cinema 4D · Illustrator"
    ]
   ],
   "despues": false
  },
  "secciones": [
   {
    "ep": "01 / EL REEL",
    "epInk": "#8B3FE0",
    "bg": "#0E0A16",
    "ink": "#F3ECFF",
    "bloques": [
     {
      "tipo": "filas",
      "filas": [
       {
        "cols": "1fr",
        "piezas": [
         {
          "embed": true,
          "url": "https://player.vimeo.com/video/1123494146?badge=0&autopause=0&player_id=0&app_id=58479",
          "ar": "16/9"
         }
        ]
       }
      ]
     }
    ]
   }
  ],
  "cierre": {
   "bg": "#A96BF3",
   "bgGrad": "linear-gradient(180deg,#8B3FE0 0%,#A96BF3 32%,#D69CF5 58%,#F0D9FB 80%,#FFFFFF 98%)",
   "ink": "#FFFFFF",
   "rotulo": "Reel",
   "tools": [
    "AFTER EFFECTS",
    "CINEMA 4D",
    "ILLUSTRATOR",
    "MOTION GRAPHICS"
   ]
  },
  "siguiente": "victoria"
 }
};
