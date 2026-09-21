/* ==================================================================
   TODOS TUS PROYECTOS EN UN SOLO SITIO
   ------------------------------------------------------------------
   Ahora están AGRUPADOS POR MARCA: todo lo de Miniso junto, todo lo
   de Mahou junto, todo lo de Bumbba junto, el trabajo personal junto
   y los pósters e infografías juntos.

   slug    → identificador de la URL: proyecto.html?p=slug
   title   → nombre que se ve
   tag     → categoría (crea el filtro automáticamente)
   sub     → línea pequeña que aparece al pasar el ratón
   thumb   → portada (la que se ve en la home)
   client / year / role → ficha técnica
   desc    → texto del proyecto (párrafos separados por línea en blanco)
   gallery → imágenes de la página
   layout  → "carousel" para pasar las piezas de una en una
   ai      → true pone la etiqueta "AI generation & editing"
   ext     → si lo pones, NO tiene página propia y enlaza fuera
             (lo uso en los que son sólo vídeo)

   ⚠⚠ published:true  ->  SOLO SE PUBLICAN LOS QUE LLEVAN ESTO.
     Ahora mismo son los 5 que tienes maquetados en tu Figma:
     La Besnéta, Canva, Mahou, Miniso y Corny.
     Los otros 19 siguen aquí con sus imágenes y textos, pero NO
     salen en la web hasta que tú los revises. Cuando des uno por
     bueno, añádele  published:true,  y aparece solo.

   ⚠ Los textos largos los he ampliado yo a partir de los tuyos.
     El primer párrafo de cada uno es tuyo, tal cual está en tu
     Adobe Portfolio. Lo que viene después lo he escrito yo mirando
     las piezas. LÉELO Y CORRÍGELO donde no sea así.
   ================================================================== */

const CDN  = "https://cdn.myportfolio.com/048f35cd-0d1c-4ff0-a2c0-da8750bc6257/";
const SITE = "https://gabiperez.myportfolio.com";
const img  = f => CDN + f;

/* Vídeos: son los mismos que ya tienes subidos.
   ccv("ID")   → vídeo alojado en tu Adobe
   vimeo("ID") → vídeo de Vimeo                                    */
const ccv   = id => "https://www-ccv.adobe.io/v1/player/ccv/" + id + "/embed";
const vimeo = id => "https://player.vimeo.com/video/" + id;

const PROJECTS = [

  /* ======================================================= BRANDING */
  {
    published:true, tags:["branding", "packaging", "fotografía", "diseño", "mailing", "ilustración", "ia"],
    slug:"la-besneta", cover:"img/caso/la-besneta/04-01.jpg", title:"La Besnéta", tag:"Branding",
    sub:"Branding for a plant-based cookie brand",
    client:"La Besnéta", year:"2025",
    role:"Branding · Illustration · Art direction · AI generation", ai:true,
    desc:"La Besnéta is an organic, 100% plant-based cookie brand based in Barcelona. We developed the branding for its relaunch, creating an identity that captures the irresistible deliciousness of its cookies, their wholesome and healthy nature, and the personal story behind the brand's founder, Daniela. At the heart of the identity is an illustration inspired by Daniela as a little girl, making the cookies her grandmother taught her to bake in Argentina. This personal story became a key element of the brand, bringing warmth, nostalgia and authenticity to the new visual identity.\n\nWe also produced and art-directed a photography shoot with STORIA CONTENIDOS, followed by professional photo retouching, to strengthen the brand's visual identity and create compelling imagery to showcase and promote its products.\n\nThe hard part of a food brand that is also a health brand is that the two usually pull in opposite directions: appetising packaging looks indulgent, healthy packaging looks clinical. Leading with Daniela's story solved it — a grandmother, a recipe, a kitchen in Argentina reads as wholesome without anyone having to say \"organic\" twice.\n\nThe aesthetic is warm and appetite-led: a strong coral red as the base, a repeating diamond pattern that gives the packaging a homemade, tablecloth feel, and a rounded hand-drawn wordmark that stays friendly rather than corporate. The cookies are photographed plainly and generously — the texture does the selling.\n\nPart of the imagery was generated and edited with AI and then art-directed and corrected by hand, which kept the visual world consistent across the whole identity.",
    thumb:img("bc57756e-f630-4a34-ac6d-9cd2c095de29_rw_3840.png?h=4c9b26463bdd8b36250031718590ffa7"),
    gallery:[
      img("3376f357-e18b-4a3d-98de-81bb01ee044f_rw_1200.png?h=b18e7194ef9a592f7b6267f49a0dcd57"),
      img("6c43187a-bc97-474e-8554-ca442038dd2c_rw_1200.png?h=c2315305bbd5b46e067a497b27741319"),
      img("a340dbe0-278e-4082-a790-f0f6d627d267_rw_1200.png?h=51ad102848b3dfff0da5a24ab153ae33"),
      img("e00c31c0-0d9e-4b18-b92a-1ec6b2272248_rw_1200.png?h=03fa021f7c92d6fab833473b51b036ca"),
      img("9293c86e-4351-41ee-8a6a-d2e01fd4b982_rw_3840.png?h=45c38deba8b04f155ef480a4b1d32ca3"),
      img("ee79edd5-f7ed-4612-9934-857bdad826e3_rw_1920.png?h=4a92e4eaf31d337244954e050b3cde5e"),
      img("e186b49e-1bb8-48a1-891f-92a20c1335c1_rw_1920.png?h=7479cefe17f94830fd69fa0d989afb37"),
      img("9696f695-7720-49b2-9762-c5474ab6bd83_rw_1920.jpg?h=a5d6a5fa262d2490cad63cd1ff7b41ee"),
      img("9ad9d82c-4c3f-45fe-a159-2c1d1044de28_rw_1920.jpg?h=35af0359139613ab1547f96e416f9bad"),
      img("1f1bac23-3077-4d50-a37b-25f442a4236d_rw_1920.jpg?h=2a6c70ea5942b96098b8b578d0329894"),
      img("6d0a00e1-cbdc-4e04-b621-b4aed2a8ac15_rw_1920.jpg?h=90150ae0de6d6a21a5e3948cf898e6a5"),
      img("5027a53d-a636-4161-8a4c-521c4ff61ca4_rw_1920.png?h=5fcaa993dfee04188d84cad6a92ec11c"),
      img("9acc1eac-07c0-4e63-9bc8-98ea1f96d8c3_rw_1920.png?h=e7e4969d9555095b790d87f10ac7b4e8"),
      img("503548a1-bb43-4795-ac82-8254e297138d_rw_1920.png?h=7310f279bdbebcf91dec6b95ac405d8c"),
      img("c605a0a4-d8ff-4d23-aca2-e8b3126e6907_rw_1920.jpg?h=6573760298c919a5c78ed22377e46fd3"),
      img("bc57756e-f630-4a34-ac6d-9cd2c095de29_rw_3840.png?h=4c9b26463bdd8b36250031718590ffa7"),
      img("a9cd51af-b3fd-4977-b125-524395226f21_rw_1920.png?h=0d08b678d7d3884c4b41a79eb756b37c"),
      img("71e211c1-4d23-4ff9-ad71-bcfe1fe097ec_rw_1200.png?h=acb9ed4e0587d103030a36358388d4a9"),
      img("d1e35500-52fe-4ea0-9a28-7c095c4cd5bf_rw_1200.png?h=7df548a0eb697d3faf27f6a25ea3ce76"),
      img("4601f593-74aa-4d37-bd51-7c45a9eafddb_rw_1200.png?h=c229a43bf4f7543737aeefed7f86406f"),
      img("82c92aff-8fee-457e-b27c-ef7b1366c23a_rw_1200.png?h=b0162dbd380c776afafebb08114b5856")
    ]
  },

  /* ======================================================= CANVA */
  {
    published:true, tags:["ilustración", "diseño"],
    slug:"canva-icons", cover:"img/caso/canva/01-01.jpg", title:"Canva", tag:"Graphic",
    sub:"Icons for Canva's logout page",
    client:"Canva", year:"2026", role:"Icon design · Illustration",
    desc:"A compilation of two projects involving the creation of icons for Canva's logout page. The first project was created for Spain, to celebrate Spain's victory in the 2026 FIFA World Cup. The second focused on creating icons that resonate with the cultural identity and distinctive characteristics of the UK. It also includes some designs that were ultimately rejected, but that I genuinely loved working on.\n\nIcon work is the most compressed kind of illustration there is: a whole cultural reference has to survive at a size where you have very little detail to play with. The method is subtractive — start from the obvious symbol, strip everything that isn't doing structural work, and keep checking that it still reads once you shrink it.\n\nThe aesthetic follows Canva's own language: rounded forms, flat colour, friendly proportions, no outline where a shape can do the job on its own. Within that, each set needed its own local flavour without tipping into cliché — recognisable to the people it was made for, legible to everyone else.",
    thumb:img("a78df706-0d67-49e2-96f6-eea2f77e29ec_rw_1920.png?h=c05f74a77c492560b5e2974bff6a9230"),
    gallery:[
      img("a78df706-0d67-49e2-96f6-eea2f77e29ec_rw_1920.png?h=c05f74a77c492560b5e2974bff6a9230"),
      img("aae239b9-7709-4a2f-9732-d07d325ab368_rw_1200.png?h=29774ef795f3984f6642c5d42ddb076e"),
      img("9d002fae-72d9-4d75-96df-b2f71ab1b588_rw_1200.png?h=c40db02de1d9a1470cee2408aa9269a1"),
      img("3bf66065-c065-4610-b1fc-7906494c27a0_rw_1200.png?h=fa536badf35950cce22eac240b06f2cf"),
      img("ab40e500-6135-48ce-b8ec-7408db73f937_rw_1200.png?h=e0396176953870537bfbe2c07ba30c3f"),
      img("f2d6d558-ba7a-4017-9a1d-830f9b5202d9_rw_1200.png?h=c19224235df3e04afcfd1b3115122b51"),
      img("9d19ca3b-7ecf-46b2-9f40-1406e5f9a261_rw_1200.png?h=cfffdd52af447860e89d7f645d905b26"),
      img("50747a06-76e9-4893-8a6a-13368bf63da4_rw_1200.png?h=b13c02b5f491dc33f2dc5995661f3da7"),
      img("d1abf664-3737-47d6-a7dc-a27826e0bc11_rw_1200.png?h=a191f170d03b5c9ba6f2a8b6c33ad65e"),
      img("ca3e7202-7306-4139-bd35-30f08e0986bb_rw_1920.png?h=3a3f0db7cff46cb3a467881961e54dcd"),
      img("0004d8e0-0263-4f18-850e-6b7594b52c95_rw_1200.png?h=50693a75568a9362a7893f5c121930c9"),
      img("de4f346b-b03b-41cb-a8bd-6a5bf69c265e_rw_1200.png?h=4eaa18669da87294fbee8dffaa578791")
    ]
  },

  /* ======================================================= MINISO */
  {
    published:true, tags:["ilustración", "motion graphics", "ads", "marketing", "diseño"],
    slug:"miniso", cover:"img/caso/miniso/HERO-01.jpg", title:"Miniso", tag:"Social",
    sub:"Campaigns & always-on social",
    client:"Miniso", year:"2023", role:"Illustration · Design · Animation",
    layout:"carousel",
    desc:"An ongoing body of work for Miniso, covering both seasonal campaigns and the brand's day-to-day social content: the summer campaign, the Father's Day poster and animation, and a running series of social media posts.\n\nWorking with one brand across campaign and always-on work is a different problem from doing either alone. The campaign pieces get to be loud — summer turned all the way up, a Father's Day poster built to stop someone mid-scroll. The always-on posts have to stay fresh week after week without drifting away from the brand, which means the opposite discipline.\n\nWhat holds it together is a small set of repeatable moves: the same rhythm, the same colour logic, the same way products enter and leave the frame. Each post feels new while the feed stays recognisably Miniso.\n\nAnimating in short, loopable cuts also meant pieces could be re-cut and reused across formats without starting from scratch, and the seasonal illustrations were drawn so they survive being cropped hard for different placements.",
    thumb:img("70d4c20b-e9cd-4add-9124-6eedb2019570_rwc_425x374x620x484x620.png?h=f7bfad05af34708ccde992cedad0cf70"),
    gallery:[
      img("19f88d5b-9997-43e3-9846-3ecfdc4a5eb5_rw_1200.png?h=98221a58513d59f4daa545c1c95007b6"),
      img("90ac552c-459c-460e-965c-244652071871_rw_1920.png?h=bc72a0abb6c4aa35afb2b6c1deb4410d"),
      img("f7522808-a2a4-4508-a7d8-4264748c4af9_rw_1920.png?h=8ff3f86aa2e1397ed1a604abaf65df78"),
      img("25a9141e-2b46-4ccd-8b83-cfea2e0f2fbe_rw_600.gif?h=7d17b44ab6adee6d41b0984c67cd0da3"),
      img("cab66bb9-b5bc-469e-be88-91dc7d20ba61_rw_600.gif?h=782ee2526293851701cae4dda47fde2d"),
      img("2abb5351-bc0d-4862-9e80-45618ee296ed_rw_600.gif?h=9ebefeaa344bebb1e15bb6c8a5616b13"),
      img("a803bd55-dfa2-4267-85e2-d80bb43fac41_rw_600.gif?h=209d42058e621acb1ced5c5f8d45a6c1"),
      img("21714d1c-9c56-4fff-a702-dd0ed3107824_rw_600.gif?h=5930cad1377e38df3c66b744f79c44ee"),
      img("1cd0cf16-0f3d-47dc-976f-6d655a03a871_rw_600.gif?h=512a65e28650dee5f71eb15b086a2c24")
    ]
  },

  /* ======================================================= MAHOU */
  {
    published:true, tags:["ilustración", "motion graphics", "diseño", "marketing"],
    slug:"mahou", cover:"img/caso/mahou/01-01.jpg", title:"Mahou", tag:"Illustration",
    sub:"El Patio de Mahou",
    client:"Mahou", year:"2021–2023", role:"Illustration · Animation · Motion",
    desc:"EL PATIO MAHOU — a graphic universe created to decorate and promote Patio Mahou, a meeting place in Madrid where people could share, listen to music, eat, and have a good time. The main concept was to express the feelings and ideas surrounding summer in Madrid. The illustrations were adapted for printed material and social media. Credits: illustration and animation.\n\nMadrid in summer is a very specific thing — the heat that empties the streets in the afternoon and fills the terraces at night. Rather than illustrating the venue, I illustrated that feeling: the jukebox, the barbecue, the bottles, the stars, all drawn flat and bright in deep red and cream so they read from across a courtyard.\n\nBuilding the world as a kit of reusable parts rather than as finished compositions is what let the same elements survive being blown up onto a wall and shrunk into a phone.\n\nVIBRA MAHOU — concert visuals created for TOMASVISTAS, a Vibra Mahou event. Screen content designed to live behind live music, which means it has to be rhythmic and readable in peripheral vision without ever competing with the band.",
    thumb:img("5b28cf3e-0282-45df-b4e3-af1277b1fcfb_rwc_0x65x600x469x600.gif?h=da34e8b217af0c8c0a0d175b81fbceca"),
    videos:[ccv("4iHSAAAn2A7"), ccv("KFhHmL_IxTR"), ccv("KGe7UfFMgKR")],
    gallery:[
      img("86f30665-3a1e-4f6b-8cd0-2515ddd8a10d_rw_1200.jpg?h=d22dc0bd1e49b9088e4b9354bbceb5b8"),
      img("018e60b7-d792-4cc5-b115-1268c63ca5be_rw_1200.jpg?h=acd6ca07eae1f0cad9786b304270d063"),
      img("e2d2618a-9edd-4723-8e12-f9a41b8d54fe_rw_1200.jpg?h=3a7e50a702df6a1ab74cdbc73128b10e"),
      img("70d14070-d01b-48d5-aab1-4ac0525f319e_rw_1200.jpg?h=32a3960c905a901a20486135263ba74b"),
      img("fa41de7d-c383-49d4-a1d6-fe3c3cdd8297_rw_1200.jpg?h=cf3e4bb0fdfc49385ba0ac9ffe66ee4e"),
      img("2397a757-e43f-4915-b34b-9b04732325f7_rw_1200.jpg?h=b36f3f900aa949b6d8be5f881f237e6c"),
      img("55af9ed9-8610-4b9c-a725-2be9f9136115_rw_1200.jpg?h=bd765c472bb5fe260f88f0147f4abe2d"),
      img("b3204978-cb73-4fa9-935b-fcb733f4948c_rw_1200.gif?h=387a6bb179681243849644c5398921dd"),
      img("7726cdd9-1900-434d-82ad-efadd5c53c31_rw_600.gif?h=07f89f660746b17957af70bdf4513182"),
      img("a0540f51-05f6-42ae-8b82-0755c96b3ce9_rw_600.gif?h=fc5dafb14b6b580fbee82e4756c9f77f"),
      img("8b4436ab-d3e1-4cab-ab42-0c81e2fb0e67_rw_600.gif?h=b9d634a7123ec25eb79836510d05a2db"),
      img("accfe424-4b12-4375-8daa-4a445d98259e_rw_600.gif?h=6253052b2ea58912ae39235d94f205cb"),
      img("b3daf0b6-324c-4fdc-ae0d-4d6abb43af8a_rw_600.gif?h=f00008150b9ebf0ecacea88eb4c144c2"),
      img("0eb07b8c-6742-404c-94dc-17eb51940286_rw_600.gif?h=5a52e756524e28ca7832cc8b021a18d8")
    ]
  },

  /* ======================================================= BUMBBA */
  {
    published:true, tags:["diseño", "ilustración", "marketing", "mailing"],
    slug:"bumbba", cover:"img/caso/bumbba/01.jpg", title:"Bumbba", tag:"Graphic",
    sub:"Brochure & pouf illustrations",
    client:"Bumbba", year:"2025",
    role:"Layout design · Illustration · 3D-style · AI generation", ai:true,
    desc:"Work for Bumbba, a brand specializing in modern and modular sofas: a brochure and a set of illustrations for the web.\n\nBROCHURE — I handled the layout design and created custom characters to highlight the versatility and adaptability of the sofa. A furniture brochure can easily turn into a catalogue of empty rooms; adding characters solved that. With people in the frame you immediately understand scale, and you understand what each configuration is actually for. The layout runs on a steady grid so the illustrations can be playful without the document losing its composure.\n\nPOUF ILLUSTRATIONS — created to showcase the versatility of Bumbba's compact pouf. The brief was to show one small object doing many different jobs: seat, footrest, side table, spare chair when people turn up. Rather than photographing each scenario, the illustrations build a slightly unreal, rounded world where the pouf can move between situations without the change of context feeling forced.\n\nThe project involved experimenting with Adobe Neo Beta to generate the 3D-style illustrations, which took a lot of trial and error to keep volumes and lighting consistent across pieces. The final look sits deliberately between render and drawing.",
    thumb:img("01e8ae0b-8db7-4cb7-8167-f42462ba63d3_rwc_0x122x1920x1501x1280.png?h=11947febb6d4663f6a5184edb4b6ae6d"),
    gallery:[
      img("77df9c75-5556-4764-926f-676930be289e_rw_3840.png?h=1bd2ce32e758c2c35bdd691ba958d90c"),
      img("c562cfe4-3252-4e09-bd9a-4dc0eed63f36_rw_3840.png?h=09a1fbe85de33ec03cd1aaa096aa9edb"),
      img("77592163-9488-4c6e-9b5d-40767aada769_rw_3840.png?h=62ec6a5260dc2fb611f8bfbec761e0a0"),
      img("56ef4f87-b64b-4602-bdc1-4f7519bd3f07_rw_3840.png?h=973793aa95c4417e47d67ef87f53c31d"),
      img("c0ba8bfd-e3dc-4e88-af3e-4d5d4c5194db_rw_3840.png?h=fd6586ab22e5b67853d447b8e5370de6"),
      img("4ff8468f-baad-461c-8705-ad3ccee5fa6a_rw_3840.png?h=ca0a3646c0441ac76cd8723803727b74"),
      img("f42cb695-0d93-498d-b29e-7d57e2d6eda0_rw_3840.png?h=1c207be71a105b41c4619b1b9aaef640"),
      img("d077af97-13e4-491b-98fe-e95f091931b0_rw_1200.png?h=40e492a277a40b8f9c3b7fdd4979f0b2"),
      img("fe3411e7-1cbf-4602-a679-03363e96705b_rw_1200.png?h=1c02d68c2ef7911019992ebb40fc20d9"),
      img("66cfdf60-4a9c-4e1b-80d5-6a1e587681e8_rw_1920.png?h=41dc63d4a581501edb247bce14d9c2f7"),
      img("7e650707-2afd-4e1e-8f98-8ccce23d229d_rw_1920.png?h=f6712a4812782cb022ecb9ec833a9ca2"),
      img("4d5b04fe-d85e-40e5-a7c7-6ee69823307a_rw_1200.jpg?h=2d849dadd9103723f32247756c4a01ef"),
      img("1f581e9a-7b4f-4bfb-8693-398050478d7e_rw_1200.jpg?h=79a0e3343832ea48abf8f5d26ebf32ae"),
      img("36deb9b2-00ea-49c0-839d-d5b74691b6cd_rw_1200.jpg?h=3cc7b72db63a6ba2da96eccfddf19803"),
      img("143f0c58-03b5-4d4f-b7a0-8b1823056003_rw_1200.jpg?h=d8e5c30ce516b1705388eed5b8b0d065"),
      img("dd2f8dec-f92a-4a34-aaf6-ef21cd58ed52_rw_1920.jpg?h=3fe9cf57e12fb63ff788f3a9e2b97c89"),
      img("5b4522c7-50bb-4de5-8dc5-b64ba3a9efab_rw_1200.jpg?h=aecbff1948432dbfb840189769f4d616"),
      img("f0b426e5-db08-4ca9-8f1f-81dead2090d6_rw_1200.jpg?h=fbea86ff2da1f9efaa78a3171b20b690"),
      img("4e77ba4b-fa4f-4703-a43b-080db394f55e_rw_1200.gif?h=a1b9f452c54eafb7083948fd28b9a45d")
    ]
  },

  /* ======================================================= OTROS CLIENTES */
  {
    published:true, tags:["diseño", "motion graphics", "ilustración", "ads"],
    slug:"hero-solo-bio", cover:"img/caso/hero-solo-bio/01.jpg", title:"Hero Solo Bio", tag:"Social",
    sub:"Social media × Bluey",
    client:"Hero", year:"2024", role:"Storyboard · Animation · Design",
    layout:"carousel",
    desc:"Social media pieces created for Hero Solo Bio to promote their new products and their collaboration with the TV series Bluey. I worked on this while at PLAYROOM, handling everything from storyboard creation to animation and design.\n\nThe tricky part of a licensed collaboration is holding two visual worlds together without either one losing itself. The solution was to let Bluey's flat, friendly colour lead the frame — soft sky blues, rounded clouds — and keep Hero's product language clean and legible underneath it, so the piece reads as playful first and as an ad second.\n\nEverything was built to work muted and at thumbnail size, which is how most of it would actually be seen.",
    thumb:img("42258af3-d8a3-43c0-97d6-a466b73f9612_rwc_0x69x480x375x480.gif?h=cdcd18670b9efd9c0a1e31f02a1e4c76"),
    gallery:[
      img("7a150a0b-e2cc-405a-b8c0-39fbc4d4d2a2_rw_600.gif?h=133867ce0b5d2c4c95037bec944528e5"),
      img("80211cea-3b90-4b87-a711-a39f4b18b7c0_rw_600.gif?h=b51183f2e7ea0752e1a9b8a78579b98c"),
      img("6c1165ab-95da-48ff-b446-bdb04879dc4e_rw_600.gif?h=032d1b56fe6d76a2aaf7bf577f9ed14f"),
      img("fa640c3d-cc80-4368-b3a2-2f93336d4aec_rw_600.gif?h=ec162f7cbc62669981b70549ebb4e692")
    ]
  },
  {
    published:true, tags:["diseño", "motion graphics", "ads"],
    slug:"capri-sun", cover:"img/caso/capri-sun/01.jpg", title:"Capri-Sun", tag:"Social",
    sub:"UK Cola launch campaign",
    client:"Capri-Sun", year:"2024", role:"Design · Animation",
    layout:"carousel",
    desc:"Social media content created for the UK launch of Capri-Sun's Cola flavour.\n\nA launch has one job: make people understand instantly that something new exists. So the flavour itself became the main character — the deep cola colour against Capri-Sun's blue, the pouch, the fizz — animated in short loops that land the idea before anyone has time to scroll past.\n\nThe set was designed as a family rather than as single posts: shared timing, shared palette, shared way of moving, so that seeing two of them in a feed already feels like a campaign.",
    thumb:img("f931c425-456f-4ea4-80f8-f5adbdb45760_rwc_0x237x480x375x480.gif?h=ecf37188c275b7fa18b5ab38617e7c96"),
    gallery:[
      img("9b3581f0-58b9-4818-a99f-5bdd1a6c631b_rw_600.gif?h=7315bbb2912fee09d8e1bdce43eeb928"),
      img("b357b322-756f-4c5a-bfe4-b39e588faaad_rw_600.gif?h=251e2c7ad63a0672b05bc1fb0d257925"),
      img("3ff6b22e-1119-4000-810c-c5f2b1f3f02f_rw_600.gif?h=e1f66bf22542af7f431157a46a88bd7d")
    ]
  },
  {
    published:true, tags:["fotografía", "ia", "ads"],
    slug:"corny", cover:"img/caso/corny/HERO-01.jpg", title:"Corny", tag:"Retouch",
    sub:"AI-assisted photo retouching",
    client:"Corny", year:"2024", role:"Photoshop retouching · AI editing", ai:true,
    desc:"Photos edited for CORNY with AI assistance, to highlight the indulgent qualities of the products and create clean, polished images. Project developed at PLAYROOM.\n\nFood retouching is mostly about restraint: the moment it looks synthetic, it stops being appetising. I combined Photoshop with AI tools — cleaning backgrounds, rebuilding edges, extending surfaces — and then corrected by hand so that texture, grain and light stayed believable.\n\nThe bars are shot close and warm, with the oats and peanuts kept sharp enough that you read the crunch before you read the packaging. The result is a set of images that feel photographed rather than generated, which was the whole point.",
    thumb:img("12f57a68-33e6-4d0f-a9d6-a6328b8cd012_rwc_115x0x767x600x767.jpg?h=dad787c45490bbd62bb5699f137fa17a"),
    gallery:[
      img("55ccf4a0-7af9-4d38-bb20-7b7c82d67ed1_rw_1920.jpg?h=85f13d535363816b52bbbd8f4f65f030"),
      img("ab96471d-b6ad-4988-a1cf-a43615fdf8a7_rw_1920.jpg?h=a08cab9418a9b68b8de9c430dc2f9f85"),
      img("76cc922a-1146-42ff-b25f-94270c1bd1f2_rw_1920.jpg?h=e7bd52e9a73d9596dbdaa31c5d6cd324"),
      img("939f5d30-b130-412a-a844-2c4ee8d066c1_rw_1920.jpg?h=da1d3d5ce8cb499d466f080f0a91b0ba"),
      img("0f04641c-4377-406e-8b9d-1da42171770c_rw_1920.jpg?h=3782f8387a35f90084cd7e608aecbe04"),
      img("f21f5654-a9e3-4a19-94bd-9081f9c4dd12_rw_1920.jpg?h=a61e34e1a938d6d4eb19791c49d71a8c"),
      img("cab10160-4f13-42f7-b856-4606850a236e_rw_1920.jpg?h=4925751c69786f765370cff8053fe7a1"),
      img("e2929db8-9084-47dc-87a7-710cd5f7277f_rw_600.png?h=d102b2dd3dc6036b56f9dbcaf2e29aff")
    ]
  },
  {
    published:true, tags:["motion graphics", "ilustración"],
    slug:"kalk", cover:"img/caso/kalk/01.jpg", title:"Kalk", tag:"Advertising",
    sub:"3D animation for performance ads",
    client:"Kalk", year:"2025", role:"3D animation · Illustration · Modeling",
    layout:"carousel",
    desc:"Ads developed for Kalk, featuring 3D animations, illustrations and modeling created to showcase the brand's jewelry in a visually engaging way for performance ads.\n\nPerformance work has a harder brief than brand work: the piece has to earn attention in the first second and still make the product desirable. Building the jewelry in 3D meant I could light it properly, turn it, and catch the reflections that make a small metal object read as valuable on a phone screen.\n\nEach ad was cut in several lengths and framings from the same set-up, so the campaign could be tested and iterated without re-shooting anything.",
    thumb:img("1ced0347-1fb0-4c4c-9c9b-c60c23f8638a_rwc_10x0x1175x919x1175.gif?h=ced29f564fab2a437148e9519670ad2b"),
    gallery:[
      img("71de7453-8749-460d-a25c-8be39a89a6c4_rw_1200.gif?h=522f037fe1c9d2da9e00170ed7e69497"),
      img("f2fdca13-cbfb-48e6-ab3d-a9fe8eeb0c1a_rw_1200.gif?h=372447f9a1059b552676c4cab6323bea"),
      img("35e767fa-1816-4a33-bf2e-b3edcf2662e7_rw_1200.gif?h=fe3d7eb1cd433d92f0fb8c7455c6c22c")
    ]
  },
  {
    slug:"eleva", title:"Eleva", tag:"Advertising",
    sub:"Ads for Spanish-made standing desks",
    client:"Eleva", year:"2025", role:"Art direction · Design · Animation",
    desc:"Social media ads for Eleva, a Spanish brand that makes height-adjustable standing desks — designed and manufactured in Spain.\n\nTwo things had to come across at once: that the desk moves, and that it is made here. The first is a product demonstration, the second is a reason to choose Eleva over a cheaper import, and an ad that only does one of them is only doing half the job.\n\nMovement carries the first. The desk rising and lowering is the most persuasive thing about the product, so it became the core gesture of the campaign — the piece opens on the change in height rather than building towards it, because that is what makes someone stop scrolling.\n\nThe aesthetic stays deliberately calm and domestic: real working spaces, warm neutral wood, plenty of white, and a restrained palette that lets the desk read as furniture rather than as gadget. That restraint is also the argument for Spanish manufacturing — a piece that looks considered rather than shouty says more about build quality than any claim in a caption.",
    videos:[ccv("NyLRwVj6YNZ"), ccv("A6b8eX_ZCyp"), ccv("HyaUFBCQkDH")],
    thumb:img("f2eb4e5a-6d90-481e-8d38-b0380ebbd385_rwc_261x552x844x660x1280.png?h=302a8816f0028ebbc8bcf38df01917b6")
  },
  {
    published:true, tags:["ilustración", "motion graphics"],
    slug:"pummba", cover:"img/caso/pummba/01.jpg", title:"Pummba", tag:"Motion",
    sub:"Modular sofa animation",
    client:"Pummba", year:"2025", role:"Animation · Illustration",
    layout:"carousel",
    desc:"Animation created for Pummba to show how their modular sofa adapts and transforms.\n\nModular furniture is genuinely hard to explain in a still image — the whole selling point is what happens between one configuration and the next. Animation solves that directly: the piece shows the sofa rearranging itself, so you understand the product by watching it move rather than by reading about it.\n\nThe sofa is drawn as a clean pale-blue isometric object on white, with no room around it, so nothing distracts from the geometry. Transitions are timed to stay calm and mechanical, closer to a product demo than to a cartoon.",
    thumb:img("e09721e4-e66e-4cb5-bf93-5d90c76e0f11_rwc_0x4x969x757x969.gif?h=79a1904d9f9c5b1ae392e8c87d8d043b"),
    gallery:[
      img("35668d60-b21b-49a9-a62b-8b384c2524e5_rw_1200.jpg?h=d0592144734f39cbd76c0c00aaad2a78"),
      img("ca98694d-9ace-41ce-8bfa-785ac72f5d38_rw_1200.jpg?h=ee842c34e4e8b1bde2b4d1112f3eae90"),
      img("226a1535-d179-4487-9bd9-b9736b73fc5b_rw_1200.jpg?h=315ef64f02b8b3573e537c98874ca75a"),
      img("17cb9858-5bae-431d-8d7b-9867b89345ea_rw_1200.jpg?h=6f2ce7441cf7a18326d858de4ad046ad"),
      img("47b8c8d2-85f3-4bb6-b745-9ecbfe3acd1b_rw_1200.jpg?h=4f965eb5dc0958b1b8df27986b994193"),
      img("40a1e480-ec6b-4d32-b328-b502ea89b305_rw_1200.jpg?h=359088cf500ee7dd22a36dbad1ad6c35")
    ]
  },
  {
    published:true, tags:["motion graphics", "ilustración", "ads", "diseño"],
    slug:"victoria", cover:"img/caso/victoria/HERO-01.jpg", title:"Victoria", tag:"Motion",
    sub:"Animated summer spot",
    client:"Victoria Calzado", year:"2021", role:"Motion graphics · Design",
    desc:"A summer spot. As part of one of my final projects at the IED in Motion Graphics, we were asked to design an animated spot to be used on Victoria Calzado's social media, promoting the summer collection.\n\nThe brand's shoes are colourful and unfussy, so the spot follows the same logic: flat shapes, clean transitions, and colour doing most of the storytelling. Each cut hands off to the next through a shared shape or a shared hue, which keeps the whole thing moving without needing a voice-over.\n\nIt was one of the first pieces where I designed and animated everything myself, and a lot of how I work now started here.",
    thumb:img("e94cb070-70d2-4ea4-98a8-4b0a05801858_rwc_112x0x575x450x575.gif?h=63b6edc114f0f8399e14b2c7ea6326ca"),
    gallery:[
      img("976d59a2-7b76-485c-9360-ce2b0656fe94_rw_1920.png?h=b6de9402afd2c42c54e3aaaaa61cf6cf"),
      img("25f7eb13-295e-4236-8113-20ff2b2e6f45_rw_1920.png?h=cde3dbbb511305305b926101600b403c")
    ]
  },
  {
    published:false, tags:["motion graphics", "ilustración", "ads"],
    slug:"las-sinsombrero", cover:"img/caso/las-sinsombrero/01.jpg", title:"Las Sinsombrero", tag:"Illustration",
    sub:"Las Sinsombrero",
    client:"Correos", year:"2023", role:"Illustration · Animation",
    desc:"Illustration and animation for Correos around Las Sinsombrero — the women of the Spanish Generation of '27 whose work was pushed out of the story for decades.\n\nDrawing people who were deliberately forgotten carries a certain responsibility: the images should give them presence, not decoration. So the portraits are frontal and direct, with the figures taking up the whole frame instead of being arranged prettily inside it.\n\nWorking at stamp scale forced a useful discipline — at that size only silhouette and one or two colours survive, so every decision had to be about recognisability first.",
    thumb:img("ebfe57ce-e044-4309-a10a-09d641aad506_rwc_79x258x371x290x371.png?h=1f51d101a99a7515ddb28af4ca1fe409"),
    gallery:[
      img("eac44f28-bf8a-44eb-95c5-68368d947c9b_rw_1200.png?h=7a02645e615b0b430bcd36b3fafd9f25"),
      img("ca0661ba-2cc3-4dc5-ba27-ac9655d1a728_rw_1200.gif?h=c89e6f8afa8b47ad3e02944bbb1bd167"),
      img("3830fb9e-a2d2-4e01-b0f9-fa0fad0c6f39_rw_1200.gif?h=12e30f71d1c95086f6356e84b40ed12a"),
      img("a808457b-1543-4b77-8ddd-0bb5db22c8ce_rw_1200.gif?h=eba62447839fdc980b0e6b3844214e29"),
      img("ead4ff6a-47c9-49e6-8e53-37338becdd59_rw_1200.gif?h=3d28c5c8b31e6f6122c135bd6f7f1576")
    ]
  },
  {
    published:true, tags:["ilustración", "diseño"],
    slug:"colorbaby", cover:"img/caso/colorbaby/01.jpg", title:"Colorbaby", tag:"Graphic",
    sub:"2D + 3D calendar design",
    client:"Colorbaby", year:"2024", role:"Illustration · Layout · 3D",
    desc:"Illustrations and layout design created for COLORBABY's calendar, combining 2D and 3D techniques. The visuals were developed using the brand's primary colour palette, aiming to evoke a sense of playfulness and fun.\n\nA calendar is an unusual thing to design for: it has to survive a whole year on someone's wall, so it can't be so loud that it becomes annoying by March. The answer was to keep each month distinct while the system underneath stays completely consistent.\n\nMixing flat 2D illustration with 3D elements gave the pages depth without adding clutter — the 3D pieces (primary-coloured blocks, flowers, rounded toy-like forms) carry the volume, and the 2D drawing carries the character.",
    thumb:img("073bc816-a7f5-4d64-b9a4-a5f9785923a3_rwc_0x209x1920x1501x1280.jpg?h=6ffe2cfa859b75f216ecfcf838ae9a27"),
    gallery:[
      img("d2f5f33a-ae38-4ae2-8902-ad036c95fd8d_rw_3840.png?h=128682431fd809b86cd9fc8830478c01"),
      img("d40a8a37-be64-4a5a-9066-c3c3794c57b1_rw_1920.jpg?h=b1068956271865d266c4e14ec2f01feb"),
      img("a0ea6094-e52b-4b89-b75c-54263ffc0eaf_rw_1920.jpg?h=d3055ac35598d16736dde40494b8bb26"),
      img("6b27285e-3bb0-472a-8c42-adbec62ff8a4_rw_1920.jpg?h=a3c9d2d3061d350cd55c1568d8df1fdd"),
      img("7ab70512-4611-46b9-ba5d-13b601d719a9_rw_1200.jpg?h=2345fa2487d61943f71f949de98084d0"),
      img("e45070d9-9577-4c7d-8592-d81abdeff87b_rw_1200.jpg?h=e864cf71b32fb65a5e52906e84558b24"),
      img("14ad17ae-14d3-4542-8ae8-82bf8e0f29f2_rw_1200.jpg?h=1a0712661e804e90561dfebb29bcf7af"),
      img("4176538f-08f4-403b-8778-a7dbe1d8f84c_rw_1200.jpg?h=4e5bd84cd2e6f0cf9759f72e12ebbbe8")
    ]
  },
  {
    slug:"berimbolo", title:"Berimbolo", tag:"Graphic",
    sub:"Logo & identity",
    client:"Berimbolo", year:"2023", role:"Logo design · Identity",
    desc:"Logo designed for a sports brand focused on Brazilian Jiu-Jitsu, featuring a cat in the berimbolo position, referencing the brand's name.\n\nThe berimbolo is an inverted, tangled-looking move, which is a gift for a logo: the shape is already unusual enough to be memorable. Using a cat to perform it adds the humour the brand wanted without undermining the sport — anyone who trains recognises the position immediately.\n\nThe mark is drawn as a single flat red silhouette with the detail cut out in negative space, no outline and no second colour. That's deliberate: it has to hold up small and in one ink, because that is how it will spend most of its life — on a gi, a patch, a sticker.",
    thumb:img("3127eab2-edbe-428b-9491-0b3701a8d1ac_rwc_1292x888x746x583x1280.jpg?h=e0c7725a08dfcd254aee94b293fdef90"),
    gallery:[
      img("662825a0-6780-441b-8150-3b473bb9dafc_rw_3840.jpg?h=de224ee64bbf6cbcde7c6d925bf8f68e"),
      img("cb65bc53-d0e1-4204-9c84-bc3a38964019_rw_1200.png?h=3f7326388d616c148ceb11835e649292")
    ]
  },
  {
    slug:"bipuzo", title:"Bipuzo", tag:"Graphic",
    sub:"Book cover",
    client:"Bipuzo", year:"2023", role:"Cover design · Illustration",
    desc:"Cover design created for the book BIPUZO.\n\nA cover has to do two contradictory things: say what the book is, and stay interesting after you already know. I worked towards an image that gives you an entry point immediately but keeps something back — the kind of cover that reads differently once you've finished reading.\n\nThe typography and the illustration were developed together rather than one being placed on top of the other, so the title sits inside the image instead of on it.",
    thumb:img("7b1b75bf-b034-4242-846f-91c23cf29131_rwc_0x0x1920x1501x1280.jpg?h=6cc1ec885bd1486f7c0fe4755f2a1a95"),
    gallery:[
      img("d09f3c50-1805-4277-9ba7-5c9276f14c0c_rw_1920.png?h=c96821a24dd9727a9c22523f1109c332"),
      img("c3b5df58-b4ea-4143-8db9-3d20d6df2cb8_rw_1920.jpg?h=3363b4cdd841981ba545b982ee5e8f94")
    ]
  },
  {
    slug:"reel", title:"Reel", tag:"Motion", sub:"Showreel 2026",
    client:"—", year:"2026", role:"Direction · Design · Animation",
    desc:"A selection of the motion work from the last few years, cut together.\n\nA reel is an argument, not an archive. The job is to show range without the whole thing turning into a list — so the cuts move between 2D and 3D, between brand work and personal work, and the pace is set so no single piece outstays the point it is making.\n\nEverything in it was designed and animated by me.",
    videos:[vimeo("1123494146")],
    thumb:img("f28b3a65-cf54-40f1-9edd-55d7c37adbc1_rwc_222x0x1112x870x1280.png?h=d591e2222ec9d7e357d0c97fefb5a357")
  },
  {
    published:true, tags:["ilustración", "diseño"],
    slug:"ilustraciones", cover:"img/caso/ilustraciones/01.jpg", title:"Ilustraciones", titleEn:"Illustrations", tag:"Illustration",
    sub:"Carteles, infografías y gráfica editorial",
    client:"Varios", year:"2021 — 2026", role:"Ilustración · Diseño gráfico",
    desc:"Carteles, infografías, gráficas y piezas editoriales hechas para encargos sueltos y para mí.",
    thumb:"img/caso/ilustraciones/01.jpg",
    gallery:[]
  },
  {
    published:true, tags:["motion graphics", "ads"],
    slug:"la-vanguardia", cover:"img/caso/la-vanguardia/01.jpg", title:"La Vanguardia", tag:"Motion",
    sub:"Editing & audio design",
    client:"La Vanguardia", year:"2022", role:"Assembly · Editing · Audio design",
    desc:"Two videos around La Vanguardia's campaign \"Why it matters to you\". The first is part of the campaign itself, promoting it; the second summarises the results obtained. My role in these videos was the assembly, editing and audio design. Project developed at Casanova Agency.\n\nEditing someone else's footage is a quieter kind of authorship than animating from scratch: everything you have is already shot, and the whole job is order, rhythm and what you take out. The results video in particular had to make figures feel like a story rather than a report.\n\nAudio does more of the work than people expect. Getting the music to land on the cuts, and leaving silence where a number needs a beat to register, is most of what makes the difference between a montage and a piece that holds.",
    videos:[ccv("6V2VQC8EHkq"), ccv("VFsrabQftnJ")],
    thumb:img("c6b3db04-0a50-4e4c-879d-a671fee07c19_rwc_199x0x826x646x826.png?h=e6a354374646d22d4d52b03df93d59b6")
  },

  /* ======================================================= ILUSTRACIÓN */
  {
    published:true, tags:["ilustración"],
    slug:"tashi", cover:"img/caso/tashi/01.jpg", title:"Tashi", tag:"Illustration",
    sub:"Character design · Máster de Ilustración Editorial, Escuela Trazos",
    client:"Escuela Trazos", year:"2025", role:"Character design · Illustration",
    desc:"Character design for a children's story.\n\nTashi is a girl from Tibet who sells milk cookies at a small wooden stand on the edge of a mountain. Her cheeks are always red from the cold — and from her bad temper. Her recipe is legendary, but her character is not. She grumbles, growls, and looks suspiciously at every customer. That's why, even though her cookies are delicious, almost no one dares to buy from her. She says she doesn't care, but maybe, deep down, she does.\n\nDesigning for children means the character has to be readable before it is detailed: a child recognises a silhouette, a colour and an attitude long before they notice how anything is drawn. Tashi is built around one unmistakable shape — the big rounded pink hat with its ears and pompom, sitting low over a heavy navy fringe — so she stays recognisable whether she appears large on a spread or tiny in the corner of a page.\n\nThe aesthetic is soft and sweet on purpose, and that's where the joke lives. Everything about how she's drawn says adorable: round head, huge eyes, permanently flushed cheeks, candy pinks and corals against deep navy, little mint-green earrings. Everything about her expression says leave me alone.\n\nThe work went from rough pink line sketches to a full expression sheet — grumpy, teary, sulking, unimpressed — because a character for a story has to survive being in a bad mood in six different ways without ever stopping being herself.",
    thumb:img("a338620b-1eba-4741-ae8f-6d808853ffa9_rwc_459x2232x2889x2258x1280.jpg?h=650ccba15c0c3e3d8d94815c62620646"),
    gallery:[
      img("2684a709-e7cb-41fd-9924-8cbcb14844ac_rw_3840.jpg?h=ec0cf1aca297edebd8d848199b3983d5"),
      img("5f710693-a60b-4034-afeb-953328d9c42a_rw_1920.jpg?h=ef1174eba906bf6a350b098dff81153e"),
      img("d3aa9ccf-1700-44f2-b018-efa93891ab68_rw_3840.jpg?h=25252793e2426a2fa32a96209b364e17"),
      img("2ab38bda-0ca5-4589-beee-dcaba84e8c9f_rw_3840.jpg?h=a17cb77e7041c7bb9e28ae1568ce4bd8"),
      img("45e79837-77ca-42bc-918a-9811e76caac8_rw_3840.jpg?h=e8531bb14ac67325152d55afc1aa3901"),
      img("07f8ecf3-f8b0-416d-81b3-044053b40aa4_rw_3840.jpg?h=17d3a2def6759d5d58cb80b82d340b62"),
      img("e0f20fc2-c955-4cf3-99e9-5923ecf3d8c8_rw_3840.jpg?h=6d19367dcb5b92970786f20d88a55c06")
    ]
  },
  {
    slug:"moon-fish", title:"Moon Fish", tag:"Illustration",
    sub:"Back cover illustration",
    client:"Personal", year:"2024", role:"Illustration · Creative direction",
    desc:"Illustration and creative direction created for a story, designed to work as the back cover.\n\nA back cover has a strange job. It is the last thing someone sees before they decide, and the first thing they see if they pick the book up the wrong way round. It has to feel like the same book as the front without repeating it, and it has to hold a block of text without the image fighting it. So the composition is built with a quiet zone from the start: the fish takes one side and the other stays open, so the text has somewhere to live instead of being dropped onto a finished picture.\n\nThe aesthetic mixes two ways of drawing on purpose. The sunfish is painted — soft grey-blue brushwork, speckled skin, a heavy body that feels like it has real weight in the water. The shoals around it are flatter and more graphic, small repeated fish in blue and salmon that read as pattern rather than as individuals. Setting a painted thing against a drawn thing is what makes the fish feel enormous.\n\nEverything sits on white. No rendered sea, no gradient, no background at all — just a lot of empty page, which does more to suggest deep open water than painting the water would have.",
    thumb:img("196bb078-06db-47a4-be40-b719b8f16bc7_rwc_601x381x460x360x460.jpg?h=e1d7632ed424332d595a5ace47ee0a4f"),
    gallery:[
      img("e6e89c88-fd41-445f-975d-0c43cad06b25_rw_3840.jpg?h=d28ed10db17f572ca29385fad605d78e"),
      img("0e4c275f-a420-4cbd-aeb3-de452589e562_rw_1200.jpg?h=7836c9517a28c09fb8da9abe44168d4c"),
      img("476ac7c3-3ab9-428d-8da0-66b569537670_rw_1200.jpg?h=c1c628fff5dfc7d41a517c0d934305ae"),
      img("401ce129-00f1-41ac-b7cd-ef061986c494_rw_1200.jpg?h=b808d8c112955d74708378b3b7c74d65")
    ]
  },
  {
    slug:"role-playing-card", title:"Role-playing Cards", tag:"Illustration",
    sub:"Character design for a game",
    client:"Personal", year:"2024", role:"Illustration · Character design",
    layout:"carousel",
    desc:"Card illustrations designed for a role-playing game.\n\nA game card is read in a second, often in a fan of other cards, so each character has to be identifiable by silhouette alone before any detail registers. That constraint drove everything: distinct shapes, one clear pose per character, and no ornament that doesn't help you tell them apart.\n\nColour is used as a sorting system as much as a mood — related characters share a family of hues, so the deck stays readable on a crowded table.",
    thumb:img("f3a8df2e-5c0b-480a-8c62-1d16f2e25042_rwc_478x160x587x459x1280.jpg?h=0ea8f6d9647610ed4f89713d45a566ca"),
    gallery:[
      img("0f21d351-1b51-4235-a6ad-c172262816f4_rw_1920.jpg?h=3a9c1d270fba9325f5b9c8de0fcfd219"),
      img("87170922-4950-414a-afbd-4f59189b33c8_rw_1200.jpg?h=a1c42f1e8e56c531a497bf0064a3d086"),
      img("8bea0af9-02ed-4c20-b2d2-03593851108e_rw_1200.jpg?h=70786f6c6b83d08ba7addf09cf0d33fa")
    ]
  },
  {
    slug:"veneco", title:"Veneco", tag:"Illustration",
    sub:"Personal series",
    client:"Personal", year:"2022", role:"Illustration",
    desc:"A personal series about being Venezuelan away from Venezuela.\n\n\"Veneco\" is a word that can be an insult or a badge depending on who is saying it, which is roughly the experience the series is about — carrying a place with you that other people only know as a headline.\n\nThe drawing is built on a confident contour line with flat blocks of blue and yellow behind it, and small raw red marks left visible on the face. The colours are not chosen decoratively. It's the most personal work in this portfolio and the one I'm least interested in tidying up.",
    thumb:img("626bc8bb-079e-40b1-8a1c-557ca95ce44a_rwc_0x117x1080x844x1080.jpg?h=489389271ac821037b4615180f3d572b"),
    gallery:[
      img("da9004ce-326f-44b0-a12b-3348fdd3530a_rw_1200.jpg?h=db1425beea86f19e3a0f0bf9d84919bd"),
      img("30bb11ef-6fbb-44eb-9137-e3c66b32be83_rw_1200.png?h=8305e7e33f87580995651b9fe917e77e")
    ]
  },

  /* ======================================================= PERSONAL */
  {
    slug:"personal-work", title:"Personal Work", tag:"Illustration",
    sub:"Technicolor · Cold · Globo",
    client:"Personal", year:"2023", role:"Illustration · 3D",
    layout:"carousel",
    desc:"Three personal pieces. Commissioned work usually asks for restraint, so this is where I test the opposite — or the extreme version of the same idea.\n\nTECHNICOLOR is an exercise in pushing colour as far as it will go before an image stops holding together. The eagle is drawn in a coarse, printed-looking yellow — visible grain, broken hatching — then dropped into a collage of flat magenta, orange and violet with hard-edged geometric shapes cutting across it. It has the feel of a screenprint where the layers didn't quite register. What makes it work is that the bird stays structurally intact underneath the noise: however loud the background gets, the eye finds the eye.\n\nCOLD is the opposite experiment. A wolf, painted almost entirely in soft grey and slate blue, edges dissolving into the background rather than stopping. Nothing is sharply defined except the pale eyes, which are the one point the image resolves onto. There is no second colour and no warm accent anywhere — that restraint is what makes it read as cold rather than simply as blue.\n\nGLOBO is a single object rendered and lit until it carries a whole image on its own: a pale pink balloon tied in a knot, glossy and taut, on a warm sand ground. Nothing else in the frame. The pleasure of it is the tension between how simple the shape is and how physical the material feels — pink against sand, close in value, so the object separates by texture rather than by contrast.",
    thumb:img("6769a681-3c75-4c21-95f3-f282b4369808_rwc_140x652x1103x863x1280.jpg?h=cbdaaa1a140c9d7ab3d174638f0cb8a8"),
    gallery:[
      img("a24af304-f6a4-4c6d-a181-0a6f14708cbf_rw_1920.jpg?h=d59f661b3cf3f5bf4e8ebcc4e71c47ed"),
      img("2014ad2f-064f-4d23-a805-8636bcc89f6d_rw_1920.jpg?h=37547b6c27389c59b4c95f5c320886c5"),
      img("827591bb-871b-4464-9b8d-c8cc720739b8_rw_1920.jpg?h=7b0a03180f1b1b10afa35cdbc81226ba")
    ]
  },

  /* ======================================================= PÓSTERS */
  {
    slug:"posters-infographics", title:"Posters & Infographics", tag:"Graphic",
    sub:"Concert poster · Universe · Strawberry squid",
    client:"Personal", year:"2022–2023",
    role:"Poster design · Lettering · Infographic · Scientific illustration",
    layout:"carousel",
    desc:"Work where the whole job is getting information across — sometimes across a room, sometimes across a page.\n\nCONCERT POSTER. A gig poster has a very short window: it's seen in passing, usually badly lit, often among twenty others. So it's built from one image and one piece of lettering and nothing else — a yellow tiger sprawled flat on its back, tongue out, sword through it, with the title hand-drawn above in heavy black letters that tuck into the shape of the animal. The palette does all the work: hot pink ground, yellow figure, black line. Legible from across a room and cheap to print, in that order. Drawing the lettering by hand rather than setting a typeface is what lets the words and the tiger live in the same drawn world.\n\nUNIVERSE COMPOSITION. An infographic about what the universe is actually made of — dark energy, dark matter, interstellar gas. Infographics fail when they're either beautiful and unreadable or accurate and dull. Here the numbers stay genuinely legible, set in clear blue-and-white blocks with an isometric diagram anchoring the proportions, while the page as a whole is composed rather than being a chart with decoration around it. The palette is limited on purpose so colour can carry meaning: things in the same category look like they belong together.\n\nSTRAWBERRY SQUID. Scientific illustration of an animal with two mismatched eyes: one large and yellow, angled upward to catch silhouettes against the light above, the other small and angled down into the dark. Scientific illustration is a different discipline again — the drawing has to be accurate before it is beautiful, and every choice about colour and light has to be defensible. The interesting part is where the two demands overlap, which here is the asymmetry itself: the thing that makes the animal scientifically notable is also what makes it strange to look at. The body is worked in deep translucent reds, close in value, so the specimen reads as a soft-bodied creature rather than a diagram.",
    thumb:img("58ab1d04-6d02-43aa-a669-1b59ee9016b9_rwc_522x1480x957x748x1280.jpg?h=a247c6acaac9cbb11507194caa54ce64"),
    gallery:[
      img("d1c3287c-d2d2-4cfc-8d7c-7f9462a2df75_rw_1920.jpg?h=12938acf494833effbcf1a332c60bcd2"),
      img("ce2e969b-b12f-4f55-9b79-6168a396c18c_rw_1920.jpg?h=484d06552a84dd1638dc881a3772287c"),
      img("5c78e450-dfce-4a6c-af3e-fe47a3726d7f_rw_3840.jpg?h=373d50458227957e98795179eedf2ffa")
    ]
  }
];

/* Foto para el apartado About */
const ABOUT_PHOTO = img("a017508b-d0f6-418c-b7b4-205abcf323af_rw_1200.jpg?h=3e3a780154819e8d7bbafb9c1bd303ab");

/* Devuelve el enlace correcto: página propia o enlace externo */
function projectHref(p){
  return p.ext ? p.ext : "proyecto.html?p=" + p.slug;
}
