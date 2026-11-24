(function () {
  const STORAGE = "twinplay-lang";
  const T = {
    en: {
      nav_features: "Features",
      nav_systems: "Systems",
      nav_skins: "Skins",
      nav_specs: "Specs",
      nav_faq: "FAQ",
      skip: "Skip to content",
      menu: "Menu",
      hero_eyebrow: "Available now on the App Store",
      hero_title: "Your iPhone becomes a dual-screen handheld.",
      hero_lede:
        "Play your own 3DS, DS, N64, Game Boy, and more — with custom skins, a full layout editor, and no games included.",
      hero_fine: "Free on iPhone and iPad · iOS 16 or later · No games included",
      cap_systems: "Systems",
      cap_editor: "Layout editor",
      cap_skins: "Jelly skins",
      cap_devices: "iPhone, iPad, foldable",
      cap_saves: "Save states",
      cap_controller: "Controllers",
      action_h: "See it in action",
      action_p: "Real gameplay recorded in TwinPlay on a 3DS layout. You bring your own games — none are included in the app.",
      action_zelda: "Ocarina of Time 3D",
      action_mario: "Super Mario 3D Land",
      action_pokemon: "Pokémon X",
      action_sys: "Nintendo 3DS",
      hw_eyebrow: "On real hardware",
      hw_h: "Unfold it, and it feels like a handheld.",
      hw_p: "A foldable iPhone running The Legend of Zelda: Ocarina of Time 3D in a lime 3DS skin. The two screens sit on either side of the fold, just as they would on a handheld.",
      hw_cap: "Ocarina of Time 3D on a foldable iPhone",
      gallery_eyebrow: "Skins",
      gallery_h: "A skin for every system",
      gallery_p: "Realistic shells on a foldable iPhone — from Game Boy Color to 3DS. Every skin is just a starting point; change it whenever you want.",
      gal_tetris_sys: "Nintendo DS · Yellow",
      gal_metroid_sys: "Game Boy Advance · Blue",
      gal_pokemon_sys: "Game Boy Color · Pink",
      gal_ki_sys: "Super NES · Gray",
      gal_sm64_sys: "Nintendo 64 · Red",
      gal_mario3d_sys: "Nintendo 3DS · Orange",
      feat_dual_h: "Made for two screens",
      feat_dual_p:
        "The game sits on the top screen and the touch screen on the bottom, in portrait or landscape. Tap and drag on the bottom screen like a stylus. On a foldable iPhone, unfold it and the two screens split right at the fold.",
      feat_closed_h: "Close it and keep playing",
      feat_closed_p:
        "Fold the iPhone shut and Game Boy, Game Boy Color, and Game Boy Advance games keep playing on the outer screen, in landscape, inside a full-screen classic handheld shell.",
      feat_edit_h: "Move every screen and button",
      feat_edit_p:
        "Custom layouts are free. Move and resize the screens and every on-screen button, with snap guides and integer scaling. Layouts are saved per console and orientation.",
      feat_skins_h: "Jelly skins, your way",
      feat_skins_p:
        "Realistic skins inspired by classic handhelds, including colorful translucent shells. Every layout and skin is just the default — pick the one you like and change it any time.",
      feat_play_h: "Play the way you want",
      feat_play_p:
        "Touch controls made for phones, a touch-only mode for stylus play, and support for MFi, Xbox, and PlayStation controllers. Save states plus normal in-game saves. Screenshots and gameplay videos, with game sound, go to Photos.",
      feat_library_h: "A library that stays out of the way",
      feat_library_p:
        "Cover Flow, cartridge view, and title-screen view. A free one-tap cover finder for games you own. A Home Screen widget (iOS 17 or later) opens recent, favorite, or most played games with one tap.",
      sys_h: "Systems you can play today",
      sys_p:
        "These systems are in the current App Store release. TwinPlay does not include any games — you add files you own, such as backups of your own cartridges, or free homebrew from independent developers.",
      sys_note:
        "A built-in BIOS is included for the systems that need one, so you do not have to add BIOS files. TwinPlay does not include, download, or link to copyrighted games or BIOS files.",
      start_h: "Easy to start",
      start_p: "Three steps. TwinPlay only looks for new games when you ask it to — it never scans your phone by itself.",
      step1_h: "Put your game files in the Files app",
      step1_p: "For example, in Downloads or iCloud Drive.",
      step2_h: "Import them in TwinPlay",
      step2_p: "Tap + and choose Import Game Files… or Import a Folder…",
      step3_h: "Tap a game to play",
      step3_p: "When you want to add more, tap Find New Games Now.",
      coming_h: "On the way",
      review_h: "In review: more systems, and Mac",
      review_p:
        "TwinPlay 1.5 is in review for iPhone, iPad, and Mac. It is not on the App Store yet. The submitted update adds PlayStation, PSP, Genesis (Mega Drive), Master System, and Game Gear, plus iCloud save sync between iPhone and iPad, and a Mac app that plays in a window with a keyboard or a controller.",
      later_h: "Coming later",
      later_p:
        "Dreamcast, GameCube, and PlayStation Vita are in the works. They are not available in the App Store app today. The skins below are previews.",
      pricing_h: "Free to download. One-time upgrades, no subscription.",
      pricing_p: "Restore purchases on any of your iPhones with Restore Purchases.",
      plan_free: "TwinPlay",
      plan_plus: "Plus",
      plan_pro: "Pro",
      price_free: "Free",
      price_plus: "$0.99",
      price_pro: "$4.99",
      cadence: "One-time · US price",
      free_1: "Play your own games on the systems available now",
      free_2: "Layout editor and the free Pearl White skin",
      free_3: "Save states, cheats you enter yourself, and a free cover finder",
      plus_1: "Everything in the free app",
      plus_2: "All skins, library scenes, and app icons",
      plus_3: "Single-screen mode",
      pro_1: "Everything in Plus",
      pro_2: "Cover Flow, custom BIOS, FPS meter, stick calibration, custom backgrounds",
      pro_3: "No ads",
      price_note:
        "Prices are the current US App Store prices. The local price is shown in the app before you buy. Family Sharing may apply to some in-app purchases.",
      specs_h: "Specifications",
      spec_dev: "Devices",
      spec_dev_v:
        "iPhone and iPad. Requires iOS 16 or iPadOS 16 or later. Works best on iPhone 13 or newer.",
      spec_size: "Size",
      spec_size_v: "71.9 MB (current App Store version, 1.4.2).",
      spec_lang: "Languages",
      spec_lang_v:
        "English, Spanish, French, German, Italian, Portuguese, Japanese, Korean, and Simplified Chinese.",
      spec_ctrls: "Controls",
      spec_ctrls_v:
        "On-screen touch controls, or a compatible MFi, Xbox, or PlayStation controller. Game controllers are supported.",
      spec_saves: "Saves",
      spec_saves_v: "Save states plus normal in-game saves. Screenshots and gameplay videos save to Photos.",
      spec_price: "Price",
      spec_price_v:
        "Free to download, with optional one-time Plus ($0.99) and Pro ($4.99) purchases in the US. No subscription. The free version shows a banner ad in the library.",
      spec_age: "Age rating",
      spec_age_v: "4+",
      spec_devl: "Developer",
      spec_devl_v: "Charlie Rodriguez Garcia",
      reviews_h: "From the App Store",
      reviews_p: "Real reviews on the US App Store. TwinPlay is rated 5.0 from 5 ratings.",
      rev1:
        "“Wow this is such a hassle free emulator it just works exactly how you want it to!”",
      rev1_by: "Jhemss · App Store",
      rev2: "“Greatest Emulator Ever”",
      rev2_by: "Christino1985 · App Store",
      faq_h: "FAQ",
      faq_contact: "Questions? Email",
      faq1_q: "Which systems can I play?",
      faq1_a:
        "The current App Store release plays 3DS, DS, Nintendo 64, Super NES, NES, Game Boy Advance, Game Boy Color, and Game Boy. PlayStation, PSP, Genesis (Mega Drive), Master System, and Game Gear are in TwinPlay 1.5, which is in review and not available yet. Dreamcast, GameCube, and PlayStation Vita are coming later.",
      faq2_q: "Does TwinPlay include games?",
      faq2_a:
        "No. TwinPlay does not include any games or system files, and it does not download games. Add game files that you own, such as backups of your own cartridges, or free homebrew made by independent developers.",
      faq3_q: "Which devices does it support?",
      faq3_a:
        "iPhone and iPad, on iOS or iPadOS 16 or later. It works best on iPhone 13 or newer. A Mac version is in review and is not on the App Store yet.",
      faq4_q: "How do I add my games?",
      faq4_a:
        "Put your game files in the Files app (for example, in Downloads or iCloud Drive). In TwinPlay, tap + and choose Import Game Files… or Import a Folder…. Tap a game to play. TwinPlay only looks for new games when you tap “Find New Games Now.”",
      faq5_q: "Can I use a controller?",
      faq5_a:
        "Yes. TwinPlay works with MFi, Xbox, and PlayStation controllers, as well as on-screen touch controls. There is a touch-only mode for DS games played with the stylus.",
      faq6_q: "What is the difference between Plus and Pro?",
      faq6_a:
        "Both are one-time purchases, with no subscription. Plus unlocks all skins, library scenes, app icons, and single-screen mode. Pro includes everything in Plus, plus Cover Flow, custom BIOS, an FPS meter, stick calibration, custom backgrounds, and no ads. You can restore purchases on any of your iPhones.",
      faq7_q: "Some games don’t run. What should I do?",
      faq7_a:
        "Emulation is still improving, and some games may not run, or may not run perfectly yet. You can report a game that does not work right from inside the app. Those reports are used to improve TwinPlay.",
      faq8_q: "Is TwinPlay affiliated with Nintendo or other console makers?",
      faq8_a:
        "No. TwinPlay is an independent app. It is not affiliated with, endorsed by, or sponsored by Nintendo, Sony, Sega, or Apple. Product names are used only to describe compatibility and belong to their owners.",
      faq9_q: "Where is the privacy policy?",
      faq9_a_before: "Read the",
      faq9_a_link: "TwinPlay Privacy Policy",
      faq9_a_after:
        ". Your games, saves, and settings stay on your device. The free version shows ads from Google AdMob. Pro removes ads.",
      cta_h: "Get TwinPlay",
      cta_p: "Free on the App Store for iPhone and iPad. Bring your own games.",
      foot_privacy: "Privacy Policy",
      foot_support: "Support",
      foot_licenses: "Open source licenses",
      foot_github: "GitHub",
      legal:
        "TwinPlay is an independent app. It is not affiliated with, endorsed by, or sponsored by Nintendo, Sony, Sega, or Apple. Product names are used only to describe compatibility and belong to their owners. TwinPlay does not include, download, or link to copyrighted games or BIOS files.",
      copyright: "© 2026 Charlie Rodriguez Garcia"
    },
    es: {
      nav_features: "Funciones",
      nav_systems: "Sistemas",
      nav_skins: "Skins",
      nav_specs: "Ficha",
      nav_faq: "Preguntas",
      skip: "Saltar al contenido",
      menu: "Menú",
      hero_eyebrow: "Ya está en el App Store",
      hero_title: "Tu iPhone se convierte en una portátil de dos pantallas.",
      hero_lede:
        "Juega tus propios juegos de 3DS, DS, N64, Game Boy y más — con skins personalizables, un editor de diseño completo y sin juegos incluidos.",
      hero_fine: "Gratis en iPhone y iPad · iOS 16 o posterior · No incluye juegos",
      cap_systems: "Sistemas",
      cap_editor: "Editor de diseño",
      cap_skins: "Skins jelly",
      cap_devices: "iPhone, iPad, plegable",
      cap_saves: "Estados guardados",
      cap_controller: "Mandos",
      action_h: "Míralo en acción",
      action_p: "Jugabilidad real, grabada en TwinPlay en un diseño de 3DS. Tú pones tus propios juegos; la app no incluye ninguno.",
      action_zelda: "Ocarina of Time 3D",
      action_mario: "Super Mario 3D Land",
      action_pokemon: "Pokémon X",
      action_sys: "Nintendo 3DS",
      hw_eyebrow: "En un dispositivo real",
      hw_h: "Ábrelo, y se siente como una portátil.",
      hw_p: "Un iPhone plegable con The Legend of Zelda: Ocarina of Time 3D en un skin lima de 3DS. Las dos pantallas quedan a cada lado del pliegue, como en una portátil de verdad.",
      hw_cap: "Ocarina of Time 3D en un iPhone plegable",
      gallery_eyebrow: "Skins",
      gallery_h: "Un skin para cada sistema",
      gallery_p: "Carcasas realistas en un iPhone plegable, de Game Boy Color a 3DS. Cada skin es solo el punto de partida: cámbialo cuando quieras.",
      gal_tetris_sys: "Nintendo DS · Amarillo",
      gal_metroid_sys: "Game Boy Advance · Azul",
      gal_pokemon_sys: "Game Boy Color · Rosa",
      gal_ki_sys: "Super NES · Gris",
      gal_sm64_sys: "Nintendo 64 · Rojo",
      gal_mario3d_sys: "Nintendo 3DS · Naranja",
      feat_dual_h: "Hecho para dos pantallas",
      feat_dual_p:
        "El juego va en la pantalla de arriba y la táctil abajo, en vertical o horizontal. Toca y arrastra en la de abajo como con un stylus. En un iPhone plegable, ábrelo y las dos pantallas quedan a cada lado del pliegue.",
      feat_closed_h: "Ciérralo y sigue jugando",
      feat_closed_p:
        "Pliega el iPhone y los juegos de Game Boy, Game Boy Color y Game Boy Advance siguen en la pantalla exterior, en horizontal, dentro de una carcasa clásica a pantalla completa.",
      feat_edit_h: "Mueve cada pantalla y cada botón",
      feat_edit_p:
        "Los diseños personalizados son gratis. Mueve y cambia el tamaño de las pantallas y de cada botón, con guías y escala entera. Se guardan por consola y orientación.",
      feat_skins_h: "Skins jelly, a tu manera",
      feat_skins_p:
        "Skins realistas inspirados en las portátiles clásicas, incluidas carcasas translúcidas de colores. Cada diseño y skin es solo el valor inicial: elige el que te guste y cámbialo cuando quieras.",
      feat_play_h: "Juega como quieras",
      feat_play_p:
        "Controles táctiles pensados para el teléfono, un modo solo táctil para jugar con stylus, y compatibilidad con mandos MFi, Xbox y PlayStation. Estados guardados además de las partidas del juego. Las capturas y los videos, con el sonido del juego, se guardan en Fotos.",
      feat_library_h: "Una biblioteca que no estorba",
      feat_library_p:
        "Cover Flow, vista de cartuchos y vista de pantallas de título. Un buscador de carátulas gratis, con un toque, para los juegos que ya tienes. Un widget de inicio (iOS 17 o posterior) abre los recientes, favoritos o más jugados.",
      sys_h: "Sistemas que puedes jugar hoy",
      sys_p:
        "Estos sistemas están en la versión actual del App Store. TwinPlay no incluye ningún juego: tú añades archivos que te pertenecen, como copias de tus cartuchos, o homebrew gratis de desarrolladores independientes.",
      sys_note:
        "Incluye un BIOS integrado para los sistemas que lo necesitan, así que no tienes que añadir archivos BIOS. TwinPlay no incluye, descarga ni enlaza juegos o archivos BIOS con derechos de autor.",
      start_h: "Fácil para empezar",
      start_p: "Tres pasos. TwinPlay solo busca juegos nuevos cuando se lo pides; nunca revisa el teléfono por su cuenta.",
      step1_h: "Pon tus archivos en la app Archivos",
      step1_p: "Por ejemplo, en Descargas o en iCloud Drive.",
      step2_h: "Impórtalos en TwinPlay",
      step2_p: "Toca + y elige Importar archivos de juego… o Importar una carpeta…",
      step3_h: "Toca un juego para jugar",
      step3_p: "Cuando quieras añadir más, toca Buscar juegos nuevos ahora.",
      coming_h: "En camino",
      review_h: "En revisión: más sistemas, y Mac",
      review_p:
        "TwinPlay 1.5 está en revisión para iPhone, iPad y Mac. Todavía no está en el App Store. La actualización enviada añade PlayStation, PSP, Genesis (Mega Drive), Master System y Game Gear, además de la sincronización de partidas por iCloud entre iPhone y iPad, y una app para Mac que juega en una ventana con teclado o mando.",
      later_h: "Más adelante",
      later_p:
        "Dreamcast, GameCube y PlayStation Vita están en preparación. No están disponibles en la app del App Store hoy. Los skins de abajo son adelantos.",
      pricing_h: "Gratis para descargar. Mejoras de un solo pago, sin suscripción.",
      pricing_p: "Restaura tus compras en cualquiera de tus iPhone con Restaurar compras.",
      plan_free: "TwinPlay",
      plan_plus: "Plus",
      plan_pro: "Pro",
      price_free: "Gratis",
      price_plus: "$0.99",
      price_pro: "$4.99",
      cadence: "Un solo pago · Precio en EE. UU.",
      free_1: "Juega tus propios juegos en los sistemas disponibles ahora",
      free_2: "Editor de diseño y el skin gratis Pearl White",
      free_3: "Estados guardados, trucos que tú introduces y un buscador de carátulas gratis",
      plus_1: "Todo lo de la app gratis",
      plus_2: "Todos los skins, escenas de biblioteca e iconos de la app",
      plus_3: "Modo de una sola pantalla",
      pro_1: "Todo lo de Plus",
      pro_2: "Cover Flow, BIOS personalizado, medidor de FPS, calibración del stick, fondos personalizados",
      pro_3: "Sin anuncios",
      price_note:
        "Los precios son los actuales del App Store de EE. UU. El precio local aparece en la app antes de comprar. En Familia puede aplicar a algunas compras dentro de la app.",
      specs_h: "Ficha técnica",
      spec_dev: "Dispositivos",
      spec_dev_v:
        "iPhone y iPad. Requiere iOS 16 o iPadOS 16 o posterior. Va mejor en iPhone 13 o más reciente.",
      spec_size: "Tamaño",
      spec_size_v: "71,9 MB (versión actual del App Store, 1.4.2).",
      spec_lang: "Idiomas",
      spec_lang_v:
        "Inglés, español, francés, alemán, italiano, portugués, japonés, coreano y chino simplificado.",
      spec_ctrls: "Controles",
      spec_ctrls_v:
        "Controles táctiles en pantalla, o un mando compatible MFi, Xbox o PlayStation. Hay compatibilidad con mandos.",
      spec_saves: "Partidas",
      spec_saves_v: "Estados guardados además de las partidas del juego. Las capturas y los videos se guardan en Fotos.",
      spec_price: "Precio",
      spec_price_v:
        "Gratis para descargar, con compras opcionales de un solo pago Plus ($0.99) y Pro ($4.99) en EE. UU. Sin suscripción. La versión gratis muestra un anuncio de banner en la biblioteca.",
      spec_age: "Clasificación",
      spec_age_v: "4+",
      spec_devl: "Desarrollador",
      spec_devl_v: "Charlie Rodriguez Garcia",
      reviews_h: "En el App Store",
      reviews_p: "Reseñas reales del App Store de EE. UU. TwinPlay tiene una valoración de 5.0 con 5 valoraciones.",
      rev1:
        "“Wow this is such a hassle free emulator it just works exactly how you want it to!”",
      rev1_by: "Jhemss · App Store",
      rev2: "“Greatest Emulator Ever”",
      rev2_by: "Christino1985 · App Store",
      faq_h: "Preguntas frecuentes",
      faq_contact: "¿Dudas? Escribe a",
      faq1_q: "¿Qué sistemas puedo jugar?",
      faq1_a:
        "La versión actual del App Store juega 3DS, DS, Nintendo 64, Super NES, NES, Game Boy Advance, Game Boy Color y Game Boy. PlayStation, PSP, Genesis (Mega Drive), Master System y Game Gear están en TwinPlay 1.5, que está en revisión y todavía no está disponible. Dreamcast, GameCube y PlayStation Vita llegan más adelante.",
      faq2_q: "¿TwinPlay incluye juegos?",
      faq2_a:
        "No. TwinPlay no incluye juegos ni archivos del sistema, y no descarga juegos. Añade archivos que te pertenecen, como copias de tus cartuchos, o homebrew gratis de desarrolladores independientes.",
      faq3_q: "¿En qué dispositivos funciona?",
      faq3_a:
        "iPhone y iPad, con iOS o iPadOS 16 o posterior. Va mejor en iPhone 13 o más reciente. Una versión para Mac está en revisión y todavía no está en el App Store.",
      faq4_q: "¿Cómo añado mis juegos?",
      faq4_a:
        "Pon tus archivos en la app Archivos (por ejemplo, en Descargas o en iCloud Drive). En TwinPlay, toca + y elige Importar archivos de juego… o Importar una carpeta…. Toca un juego para jugar. TwinPlay solo busca juegos nuevos cuando tocas “Buscar juegos nuevos ahora”.",
      faq5_q: "¿Puedo usar un mando?",
      faq5_a:
        "Sí. TwinPlay funciona con mandos MFi, Xbox y PlayStation, además de los controles táctiles. Hay un modo solo táctil para juegos de DS con stylus.",
      faq6_q: "¿Cuál es la diferencia entre Plus y Pro?",
      faq6_a:
        "Las dos son compras de un solo pago, sin suscripción. Plus desbloquea todos los skins, las escenas de biblioteca, los iconos y el modo de una sola pantalla. Pro incluye todo lo de Plus, más Cover Flow, BIOS personalizado, medidor de FPS, calibración del stick, fondos personalizados y sin anuncios. Puedes restaurar las compras en cualquiera de tus iPhone.",
      faq7_q: "Algunos juegos no van. ¿Qué hago?",
      faq7_a:
        "La emulación sigue mejorando, y puede que algunos juegos no funcionen, o no funcionen del todo bien todavía. Puedes informar de un juego que falle desde la propia app. Esos reportes se usan para mejorar TwinPlay.",
      faq8_q: "¿TwinPlay está afiliado a Nintendo u otros fabricantes?",
      faq8_a:
        "No. TwinPlay es una app independiente. No está afiliada, respaldada ni patrocinada por Nintendo, Sony, Sega o Apple. Los nombres de productos se usan solo para describir compatibilidad y pertenecen a sus dueños.",
      faq9_q: "¿Dónde está la política de privacidad?",
      faq9_a_before: "Lee la",
      faq9_a_link: "Política de privacidad de TwinPlay",
      faq9_a_after:
        ". Tus juegos, partidas y ajustes se quedan en tu dispositivo. La versión gratis muestra anuncios de Google AdMob. Pro quita los anuncios.",
      cta_h: "Consigue TwinPlay",
      cta_p: "Gratis en el App Store para iPhone y iPad. Tú pones tus propios juegos.",
      foot_privacy: "Privacidad",
      foot_support: "Soporte",
      foot_licenses: "Licencias de código abierto",
      foot_github: "GitHub",
      legal:
        "TwinPlay es una app independiente. No está afiliada, respaldada ni patrocinada por Nintendo, Sony, Sega o Apple. Los nombres de productos se usan solo para describir compatibilidad y pertenecen a sus dueños. TwinPlay no incluye, descarga ni enlaza juegos o archivos BIOS con derechos de autor.",
      copyright: "© 2026 Charlie Rodriguez Garcia"
    }
  };

  function apply(lang) {
    const dict = T[lang] || T.en;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });
    const menuBtnLabel = document.querySelector(".menu-btn");
    if (menuBtnLabel && dict.menu) menuBtnLabel.setAttribute("aria-label", dict.menu);
    document.querySelectorAll(".lang button").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === lang ? "true" : "false");
    });
    try { localStorage.setItem(STORAGE, lang); } catch (e) {}
  }

  function initLang() {
    let lang = "en";
    try { lang = localStorage.getItem(STORAGE) || lang; } catch (e) {}
    if (lang !== "es" && lang !== "en") lang = "en";
    apply(lang);
  }

  document.querySelectorAll(".lang button").forEach(function (btn) {
    btn.addEventListener("click", function () { apply(btn.getAttribute("data-lang")); });
  });

  const nav = document.querySelector(".nav");
  const menuBtn = document.querySelector(".menu-btn");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      const open = nav.classList.toggle("is-open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll(".nav-links a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("is-open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  initLang();

  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const videos = document.querySelectorAll("video.js-autoplay");
  if (reduceMotion) {
    videos.forEach(function (v) {
      v.removeAttribute("autoplay");
      v.pause();
    });
  } else if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        const v = entry.target;
        if (entry.isIntersecting) {
          if (v.dataset.lazySrc) {
            v.querySelectorAll("source").forEach(function (s) {
              if (s.dataset.src) s.src = s.dataset.src;
            });
            v.load();
            delete v.dataset.lazySrc;
          }
          v.muted = true;
          var p = v.play();
          if (p && p.catch) p.catch(function () {});
        } else {
          v.pause();
        }
      });
    }, { rootMargin: "200px 0px", threshold: 0.15 });
    videos.forEach(function (v) { io.observe(v); });
  }
})();
