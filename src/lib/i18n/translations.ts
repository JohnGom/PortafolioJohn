export type Language = "en" | "es";

export const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      work: "Work",
      about: "About",
      contact: "Contact",
      navigation: "Navigation",
    },

    // Common
    common: {
      viewWork: "View Work",
      viewAllProjects: "View all projects",
      backToWork: "Back to Work",
      sendMessage: "Send Message",
      sending: "Sending...",
      projectNotFound: "Project Not Found",
      projectNotFoundDesc: "The project you're looking for doesn't exist.",
      availability: "Availability",
      availableForWork: "Open to new opportunities and freelance projects.",
      styleguide: "Styleguide",
    },

    // Hero
    hero: {
      role: "Software Developer",
      greeting: "Hi, I'm {{name}}.",
      headline: "I build reliable digital systems",
      description:
        "A Medellín-based developer with 7+ years of experience building products that scale, perform, and deliver real impact. I work at the intersection of engineering, data, and mobile development.",
      cta: "View Work",
      card: {
        year: "[ 2026 ]",
        title: "Building reliable digital systems",
        description:
          "Software developer focused on mobile, data systems, and frontend engineering.",
      },
    },

    // Featured Work
    featuredWork: {
      title: "Featured Work",
    },

    // Work Page
    workPage: {
      title: "Work",
      description:
        "A selection of projects and platforms I've contributed to across mobile development, data systems, and frontend engineering. Each represents real challenges solved with measurable impact.",
      projectsLabel: "Projects",
      professionalLabel: "Professional Experience",
      personalLabel: "Personal Projects",
      personalDescription:
        "Side projects built to explore ideas, learn new technologies, and solve personal workflows. Each one is live and open for review.",
    },

    // About Page
    aboutPage: {
      title: "About",
      intro:
        "I'm <span>{{name}}</span>, a software developer based in Medellín, Colombia. I specialize in building reliable digital systems, from mobile applications to data collection and processing platforms for national-scale surveys.",
      paragraph1:
        "With over 7 years of experience, I've led the systems area for national surveys such as the National Demography and Health Survey (ENDS) and the National Mental Health Survey (ENSM). My work enables the collection, cleaning, and extraction of data that supports public health decision-making.",
      paragraph2:
        "I believe in writing maintainable, documented code that's built to evolve. Every system I design considers not just current requirements, but how it will need to change and scale over time.",
      philosophy: "Philosophy",
      philosophyItems: [
        "Build for reliability, not just speed",
        "Measure impact, not just output",
        "Simplify complexity, don't hide it",
        "Document decisions, not just code",
      ],
      skills: "Skills",
      skillsList: [
        "Mobile Development",
        "Frontend Engineering",
        "AI Engineering",
        "Data Systems",
        "API Design",
        "Technical Leadership",
        "Survey Operations",
      ],
      stack: "Stack",
      experience: "Experience",
      experienceItems: [
        "7+ years in software development",
        "National survey systems leadership",
        "Mobile and frontend development",
      ],
    },

    // Contact Page
    contactPage: {
      title: "Contact",
      description:
        "Have a project in mind or want to discuss opportunities? I'm always open to interesting conversations and collaborations.",
      sendMessage: "Send a Message",
      connect: "Connect",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "your@email.com",
      message: "Message",
      messagePlaceholder: "Tell me about your project...",
      toastTitle: "Message sent",
      toastDescription: "Thanks for reaching out. I'll get back to you soon.",
    },

    // Project Detail
    projectDetail: {
      impact: "Impact",
      challenges: "Challenges",
      features: "Features",
      viewCode: "View Code",
      liveDemo: "Live Demo",
    },

    // Footer
    footer: {
      copyright: "© {{year}} {{name}}",
    },

    // Projects
    projects: {
      ensm: {
        name: "National Mental Health Survey (ENSM)",
        description:
          "Data collection system for the National Mental Health Survey, enabling field teams to capture responses at scale using ODK-based mobile forms.",
        fullDescription:
          "Led the implementation of the data collection system for the National Mental Health Survey (ENSM). The platform allows field teams to capture structured responses using ODK-based mobile forms, ensuring data quality and traceability across thousands of interviews.",
        stack: ["ODK", "JavaScript", "Node.js", "R", "SQL Server", "Docker"],
        impact: "Successful national data collection with automated cleaning pipelines",
        challenges: [
          "Designing forms that handle complex survey skip logic",
          "Automating data cleaning for thousands of responses",
          "Integrating R-based output tables and indicators",
          "Ensuring data traceability across the pipeline",
        ],
        features: [
          "ODK-based mobile data collection",
          "Automated data loading and cleaning scripts",
          "R-based output tables and indicators",
          "End-to-end data traceability",
        ],
      },
      ends: {
        name: "National Demography and Health Survey (ENDS)",
        description:
          "Data operations platform for Colombia's National Demography and Health Survey, supporting collection, cleaning, and indicator generation.",
        fullDescription:
          "Led the systems area for Colombia's National Demography and Health Survey (ENDS). Built and maintained the data pipeline that supports collection, cleaning, extraction, and delivery of indicators for one of the country's most important public health surveys.",
        stack: ["ODK", "JavaScript", "Node.js", "R", "SQL Server"],
        impact: "Delivered national health indicators used in public policy",
        challenges: [
          "Processing large volumes of survey data efficiently",
          "Coordinating data flows between field teams and analysts",
          "Generating reliable indicators under tight deadlines",
          "Maintaining data quality across multiple survey rounds",
        ],
        features: [
          "Large-scale survey data processing",
          "Automated ETL workflows",
          "Indicator generation in R",
          "Multi-round data quality controls",
        ],
      },
      wellsite: {
        name: "Wellsite Mobile App",
        description:
          "Android application for field operations featuring Mapbox-powered navigation and real-time chat via Firebase.",
        fullDescription:
          "Developed new features for the Wellsite Android application used in field operations. Integrated Mapbox for navigation between map points and Firebase for real-time chat, improving coordination for on-site teams.",
        stack: ["Android", "Kotlin", "Mapbox", "Firebase"],
        impact: "Improved field navigation and team coordination",
        challenges: [
          "Integrating Mapbox navigation with existing field workflows",
          "Building reliable real-time chat in low-connectivity areas",
          "Managing offline map data and synchronization",
          "Maintaining performance across Android devices",
        ],
        features: [
          "Mapbox navigation between field points",
          "Firebase real-time chat",
          "Offline-ready map data",
          "Performance optimizations for Android",
        ],
      },
      chatowl: {
        name: "ChatOwl Performance Optimization",
        description:
          "Performance improvements for an Android chat application built with Kotlin and WebSockets.",
        fullDescription:
          "Improved the user experience of the ChatOwl Android application by optimizing rendering and interaction performance. Implemented WebSocket-based chat for low-latency message delivery.",
        stack: ["Android", "Kotlin", "WebSockets"],
        impact: "Faster interactions and smoother chat experience",
        challenges: [
          "Reducing UI jank during chat list scrolling",
          "Maintaining stable WebSocket connections",
          "Optimizing message rendering and state updates",
          "Handling reconnections gracefully",
        ],
        features: [
          "WebSocket-based real-time messaging",
          "UI rendering optimizations",
          "Connection resilience",
          "Smooth chat list interactions",
        ],
      },
      copa: {
        name: "Copa Airlines Booking",
        description:
          "Frontend development for Copa Airlines' new booking flow, built with React and Redux.",
        fullDescription:
          "Developed key features for the form completion and payment process of Copa Airlines' new booking experience. Built with React and Redux, the application handles complex multi-step flows and payment integrations.",
        stack: ["React", "Redux", "JavaScript", "TypeScript"],
        impact: "Modernized booking experience for an international airline",
        challenges: [
          "Managing complex multi-step form state",
          "Integrating payment providers securely",
          "Migrating JavaScript codebase to TypeScript",
          "Ensuring accessibility and responsive design",
        ],
        features: [
          "Multi-step booking form",
          "Payment process integration",
          "JavaScript to TypeScript migration",
          "Responsive and accessible UI",
        ],
      },
      triko: {
        name: "Triko Services App",
        description:
          "React Native application connecting service providers with clients.",
        fullDescription:
          "Participated in the development of a React Native application designed to connect service providers with clients. Contributed to the initial architecture and core user flows.",
        stack: ["React Native", "JavaScript", "Mobile"],
        impact: "Enabled service marketplace on mobile",
        challenges: [
          "Defining MVP scope for a two-sided marketplace",
          "Building consistent UX across iOS and Android",
          "Integrating location-based service discovery",
          "Establishing early mobile architecture patterns",
        ],
        features: [
          "Service provider and client matching",
          "Cross-platform mobile experience",
          "Location-based discovery",
          "MVP marketplace flows",
        ],
      },
    },

    // Personal Projects
    personalProjects: {
      linkstore: {
        name: "LinksStore",
        description:
          "Personal link manager with automatic metadata extraction, categories, instant search, personal notes, and light/dark mode.",
        fullDescription:
          "LinksStore is a personal link saving and discovery app. Paste any URL and the app automatically fetches the title, description, and favicon. Users can organize links with multiple categories, add personal notes, and find anything instantly through search.",
        stack: ["Astro", "Preact", "PostgreSQL", "Drizzle ORM", "Tailwind CSS", "Docker"],
        impact: "Live personal productivity tool used to organize and rediscover useful links",
        challenges: [
          "Building automatic metadata extraction from arbitrary URLs",
          "Designing a fast, searchable link archive",
          "Implementing custom session-based authentication",
          "Deploying the full stack with Docker",
        ],
        features: [
          "Automatic title, description, and favicon extraction",
          "Multiple categories per link",
          "Instant search by name or domain",
          "Personal notes on each link",
          "Light and dark mode",
          "Dockerized deployment",
        ],
        demoUrl: "https://links.zemog.qd.je/",
        repoUrl: "https://github.com/JohnGom/LinkStore",
      },
      tacticalboard: {
        name: "TacticalBoard",
        description:
          "Web-based football tactics platform with user accounts, saved boards, custom teams, and an interactive tactical editor.",
        fullDescription:
          "TacticalBoard is a web-first football tactics platform. Users can create accounts, build custom teams, design formations, position players freely, make substitutions, and save private boards to a PostgreSQL database.",
        stack: ["React", "Vite", "TypeScript", "Fastify", "PostgreSQL", "Docker"],
        impact: "Live tactical editor for football coaches and enthusiasts",
        challenges: [
          "Building an interactive drag-and-drop tactical editor",
          "Managing board state persistence and restoration",
          "Integrating email/password and optional Google authentication",
          "Designing a clean monorepo structure with separate web and API packages",
        ],
        features: [
          "Interactive tactical board editor",
          "Formations and free player positioning",
          "Substitutions and saved board state",
          "Custom teams and real squad selection",
          "Private boards tied to user accounts",
          "Docker Compose deployment",
        ],
        demoUrl: "https://tacticalboard.zemog.qd.je/",
        repoUrl: "https://github.com/JohnGom/TacticalBoard",
      },
      smallopenshorts: {
        name: "SmallOpenShorts",
        description:
          "Minimal AI video clipping tool that turns long videos into viral-ready 9:16 shorts with subtitles and text hooks.",
        fullDescription:
          "SmallOpenShorts is a focused, self-hosted version of the OpenShorts open-source project. It turns long-form videos into vertical 9:16 clips for TikTok, Instagram Reels, and YouTube Shorts using AI-driven moment detection, automatic subtitles, and viral text hooks.",
        stack: ["Python", "FastAPI", "FFmpeg", "Docker", "React"],
        impact: "Self-hosted, open-source video clipping pipeline with no watermarks or limits",
        challenges: [
          "Integrating AI transcript analysis for viral clip detection",
          "Building precise FFmpeg-based video cutting at second-level timestamps",
          "Implementing 9:16 vertical reframing with subject tracking",
          "Creating burned-in subtitles and timed hook overlays",
        ],
        features: [
          "AI viral clip detection with Gemini",
          "Word-level transcription with faster-whisper",
          "Automatic 9:16 vertical reframing",
          "Burned-in subtitles and viral hooks",
          "Docker-based self-hosting",
          "YouTube and local video ingestion",
        ],
        demoUrl: "https://shorts.zemog.qd.je/",
        repoUrl: "https://github.com/JohnGom/SmallOpenShorts",
      },
    },
  },

  es: {
    // Navigation
    nav: {
      home: "Inicio",
      work: "Proyectos",
      about: "Sobre mí",
      contact: "Contacto",
      navigation: "Navegación",
    },

    // Common
    common: {
      viewWork: "Ver Proyectos",
      viewAllProjects: "Ver todos los proyectos",
      backToWork: "Volver a Proyectos",
      sendMessage: "Enviar Mensaje",
      sending: "Enviando...",
      projectNotFound: "Proyecto No Encontrado",
      projectNotFoundDesc: "El proyecto que buscas no existe.",
      availability: "Disponibilidad",
      availableForWork: "Abierto a nuevas oportunidades y proyectos freelance.",
      styleguide: "Guía de estilo",
    },

    // Hero
    hero: {
      role: "Desarrollador de Software",
      greeting: "Hola, soy {{name}}.",
      headline: "Construyo sistemas digitales confiables",
      description:
        "Desarrollador con sede en Medellín y más de 7 años de experiencia construyendo productos que escalan, rinden y generan impacto real. Trabajo en la intersección entre ingeniería, datos y desarrollo móvil.",
      cta: "Ver Proyectos",
      card: {
        year: "[ 2026 ]",
        title: "Construyendo sistemas digitales confiables",
        description:
          "Desarrollador de software enfocado en móvil, sistemas de datos e ingeniería frontend.",
      },
    },

    // Featured Work
    featuredWork: {
      title: "Proyectos Destacados",
    },

    // Work Page
    workPage: {
      title: "Proyectos",
      description:
        "Una selección de proyectos y plataformas en los que he contribuido en desarrollo móvil, sistemas de datos e ingeniería frontend. Cada uno representa desafíos reales resueltos con impacto medible.",
      projectsLabel: "Proyectos",
      professionalLabel: "Experiencia Profesional",
      personalLabel: "Proyectos Personales",
      personalDescription:
        "Proyectos personales construidos para explorar ideas, aprender nuevas tecnologías y resolver flujos de trabajo propios. Cada uno está en línea y abierto para revisión.",
    },

    // About Page
    aboutPage: {
      title: "Sobre mí",
      intro:
        "Soy <span>{{name}}</span>, desarrollador de software con sede en Medellín, Colombia. Me especializo en construir sistemas digitales confiables, desde aplicaciones móviles hasta plataformas de recolección y procesamiento de datos para encuestas a escala nacional.",
      paragraph1:
        "Con más de 7 años de experiencia, he liderado el área de sistemas de encuestas nacionales como la Encuesta Nacional de Demografía y Salud (ENDS) y la Encuesta Nacional de Salud Mental (ENSM). Mi trabajo permite la recolección, depuración y extracción de datos que apoyan la toma de decisiones en salud pública.",
      paragraph2:
        "Creo en escribir código mantenible, documentado y construido para evolucionar. Cada sistema que diseño considera no solo los requerimientos actuales, sino cómo necesitará cambiar y escalar con el tiempo.",
      philosophy: "Filosofía",
      philosophyItems: [
        "Construir para la confiabilidad, no solo la velocidad",
        "Medir el impacto, no solo la salida",
        "Simplificar la complejidad, no ocultarla",
        "Documentar decisiones, no solo código",
      ],
      skills: "Habilidades",
      skillsList: [
        "Desarrollo Móvil",
        "Ingeniería Frontend",
        "Ingeniería de IA",
        "Sistemas de Datos",
        "Diseño de APIs",
        "Liderazgo Técnico",
        "Operaciones de Encuestas",
      ],
      stack: "Tecnologías",
      experience: "Experiencia",
      experienceItems: [
        "Más de 7 años en desarrollo de software",
        "Liderazgo en sistemas de encuestas nacionales",
        "Desarrollo móvil y frontend",
      ],
    },

    // Contact Page
    contactPage: {
      title: "Contacto",
      description:
        "¿Tienes un proyecto en mente o quieres conversar sobre oportunidades? Siempre estoy abierto a conversaciones interesantes y colaboraciones.",
      sendMessage: "Enviar un Mensaje",
      connect: "Conectar",
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      email: "Correo",
      emailPlaceholder: "tu@correo.com",
      message: "Mensaje",
      messagePlaceholder: "Cuéntame sobre tu proyecto...",
      toastTitle: "Mensaje enviado",
      toastDescription: "Gracias por escribirme. Te responderé pronto.",
    },

    // Project Detail
    projectDetail: {
      impact: "Impacto",
      challenges: "Desafíos",
      features: "Funcionalidades",
      viewCode: "Ver Código",
      liveDemo: "Demo en Vivo",
    },

    // Footer
    footer: {
      copyright: "© {{year}} {{name}}",
    },

    // Projects
    projects: {
      ensm: {
        name: "Encuesta Nacional de Salud Mental (ENSM)",
        description:
          "Sistema de recolección de datos para la Encuesta Nacional de Salud Mental, permitiendo a los equipos de campo capturar respuestas a escala usando formularios móviles basados en ODK.",
        fullDescription:
          "Lideré la implementación del sistema de recolección de datos de la Encuesta Nacional de Salud Mental (ENSM). La plataforma permite a los equipos de campo capturar respuestas estructuradas usando formularios móviles basados en ODK, asegurando calidad y trazabilidad de datos en miles de entrevistas.",
        stack: ["ODK", "JavaScript", "Node.js", "R", "SQL Server", "Docker"],
        impact: "Recolección nacional exitosa con pipelines automáticos de depuración",
        challenges: [
          "Diseñar formularios con lógica compleja de salto",
          "Automatizar la depuración de miles de respuestas",
          "Integrar cuadros de salida e indicadores en R",
          "Garantizar trazabilidad de datos en toda la cadena",
        ],
        features: [
          "Recolección móvil de datos basada en ODK",
          "Scripts automáticos de carga y depuración",
          "Cuadros de salida e indicadores en R",
          "Trazabilidad end-to-end de datos",
        ],
      },
      ends: {
        name: "Encuesta Nacional de Demografía y Salud (ENDS)",
        description:
          "Plataforma de operaciones de datos para la Encuesta Nacional de Demografía y Salud de Colombia, apoyando recolección, depuración y generación de indicadores.",
        fullDescription:
          "Lideré el área de sistemas de la Encuesta Nacional de Demografía y Salud (ENDS) de Colombia. Construí y mantuve la tubería de datos que soporta la recolección, depuración, extracción y entrega de indicadores de una de las encuestas de salud más importantes del país.",
        stack: ["ODK", "JavaScript", "Node.js", "R", "SQL Server"],
        impact: "Indicadores nacionales de salud usados en política pública",
        challenges: [
          "Procesar grandes volúmenes de datos de encuesta de forma eficiente",
          "Coordinar flujos de datos entre equipos de campo y analistas",
          "Generar indicadores confiables bajo plazos ajustados",
          "Mantener calidad de datos entre múltiples rondas de encuesta",
        ],
        features: [
          "Procesamiento de datos de encuestas a gran escala",
          "Flujos ETL automatizados",
          "Generación de indicadores en R",
          "Controles de calidad multi-ronda",
        ],
      },
      wellsite: {
        name: "App Móvil Wellsite",
        description:
          "Aplicación Android para operaciones de campo con navegación impulsada por Mapbox y chat en tiempo real mediante Firebase.",
        fullDescription:
          "Desarrollé nuevas funcionalidades para la aplicación Android Wellsite usada en operaciones de campo. Integré Mapbox para navegación entre puntos del mapa y Firebase para chat en tiempo real, mejorando la coordinación de equipos en sitio.",
        stack: ["Android", "Kotlin", "Mapbox", "Firebase"],
        impact: "Mejoró la navegación de campo y coordinación de equipos",
        challenges: [
          "Integrar navegación Mapbox con flujos de campo existentes",
          "Construir chat confiable en zonas de baja conectividad",
          "Gestionar datos de mapas sin conexión y sincronización",
          "Mantener rendimiento en dispositivos Android variados",
        ],
        features: [
          "Navegación Mapbox entre puntos de campo",
          "Chat en tiempo real con Firebase",
          "Datos de mapas preparados para offline",
          "Optimizaciones de rendimiento para Android",
        ],
      },
      chatowl: {
        name: "Optimización de ChatOwl",
        description:
          "Mejoras de rendimiento para una aplicación de chat Android construida con Kotlin y WebSockets.",
        fullDescription:
          "Mejoré la experiencia de usuario de la aplicación Android ChatOwl optimizando el renderizado y el rendimiento de interacciones. Implementé chat basado en WebSockets para entrega de mensajes de baja latencia.",
        stack: ["Android", "Kotlin", "WebSockets"],
        impact: "Interacciones más rápidas y experiencia de chat más fluida",
        challenges: [
          "Reducir tartamudeo de UI al hacer scroll en listas de chat",
          "Mantener conexiones WebSocket estables",
          "Optimizar renderizado y actualizaciones de estado de mensajes",
          "Manejar reconexiones de forma elegante",
        ],
        features: [
          "Mensajería en tiempo real con WebSockets",
          "Optimizaciones de renderizado de UI",
          "Resiliencia de conexión",
          "Interacciones fluidas en listas de chat",
        ],
      },
      copa: {
        name: "Booking de Copa Airlines",
        description:
          "Desarrollo frontend para el nuevo flujo de reservas de Copa Airlines, construido con React y Redux.",
        fullDescription:
          "Desarrollé funcionalidades clave para el diligenciamiento de formularios y el proceso de pagos de la nueva experiencia de booking de Copa Airlines. Construida con React y Redux, la aplicación maneja flujos multi-paso complejos e integraciones de pago.",
        stack: ["React", "Redux", "JavaScript", "TypeScript"],
        impact: "Modernizó la experiencia de reserva de una aerolínea internacional",
        challenges: [
          "Gestionar estado de formularios multi-paso complejos",
          "Integrar proveedores de pago de forma segura",
          "Migrar código JavaScript a TypeScript",
          "Garantizar accesibilidad y diseño responsive",
        ],
        features: [
          "Formulario de reserva multi-paso",
          "Integración de proceso de pagos",
          "Migración de JavaScript a TypeScript",
          "UI responsive y accesible",
        ],
      },
      triko: {
        name: "App Triko Servicios",
        description:
          "Aplicación en React Native que conecta prestadores de servicios con clientes.",
        fullDescription:
          "Participé en el desarrollo de una aplicación en React Native diseñada para conectar prestadores de servicios con clientes. Contribuí a la arquitectura inicial y a los flujos de usuario principales.",
        stack: ["React Native", "JavaScript", "Mobile"],
        impact: "Habilitó marketplace de servicios en móvil",
        challenges: [
          "Definir alcance MVP para un marketplace de dos lados",
          "Construir UX consistente en iOS y Android",
          "Integrar descubrimiento de servicios basado en ubicación",
          "Establecer patrones de arquitectura móvil inicial",
        ],
        features: [
          "Emparejamiento de prestadores y clientes",
          "Experiencia móvil multiplataforma",
          "Descubrimiento basado en ubicación",
          "Flujos MVP de marketplace",
        ],
      },
    },

    // Personal Projects
    personalProjects: {
      linkstore: {
        name: "LinksStore",
        description:
          "Gestor personal de enlaces con extracción automática de metadatos, categorías, búsqueda instantánea, notas personales y modo claro/oscuro.",
        fullDescription:
          "LinksStore es una aplicación para guardar y redescubrir enlaces personales. Pega cualquier URL y la app obtiene automáticamente el título, la descripción y el favicon. Los usuarios pueden organizar enlaces en múltiples categorías, agregar notas personales y encontrar todo al instante mediante búsqueda.",
        stack: ["Astro", "Preact", "PostgreSQL", "Drizzle ORM", "Tailwind CSS", "Docker"],
        impact: "Herramienta personal de productividad en línea para organizar y redescubrir enlaces útiles",
        challenges: [
          "Construir extracción automática de metadatos desde URLs arbitrarias",
          "Diseñar un archivo de enlaces rápido y buscable",
          "Implementar autenticación propia basada en sesiones",
          "Desplegar el stack completo con Docker",
        ],
        features: [
          "Extracción automática de título, descripción y favicon",
          "Múltiples categorías por enlace",
          "Búsqueda instantánea por nombre o dominio",
          "Notas personales en cada enlace",
          "Modo claro y oscuro",
          "Despliegue con Docker",
        ],
        demoUrl: "https://links.zemog.qd.je/",
        repoUrl: "https://github.com/JohnGom/LinkStore",
      },
      tacticalboard: {
        name: "TacticalBoard",
        description:
          "Plataforma web de tácticas de fútbol con cuentas de usuario, tableros guardados, equipos personalizados y un editor táctico interactivo.",
        fullDescription:
          "TacticalBoard es una plataforma web de tácticas de fútbol. Los usuarios pueden crear cuentas, construir equipos personalizados, diseñar formaciones, posicionar jugadores libremente, hacer sustituciones y guardar tableros privados en una base de datos PostgreSQL.",
        stack: ["React", "Vite", "TypeScript", "Fastify", "PostgreSQL", "Docker"],
        impact: "Editor táctico en línea para entrenadores y aficionados al fútbol",
        challenges: [
          "Construir un editor táctico interactivo con arrastrar y soltar",
          "Gestionar la persistencia y restauración del estado de los tableros",
          "Integrar autenticación por email/contraseña y Google opcional",
          "Diseñar una estructura limpia de monorepo con paquetes separados para web y API",
        ],
        features: [
          "Editor táctico interactivo",
          "Formaciones y posicionamiento libre de jugadores",
          "Sustituciones y guardado del estado del tablero",
          "Equipos personalizados y selección de plantillas reales",
          "Tableros privados vinculados a cuentas de usuario",
          "Despliegue con Docker Compose",
        ],
        demoUrl: "https://tacticalboard.zemog.qd.je/",
        repoUrl: "https://github.com/JohnGom/TacticalBoard",
      },
      smallopenshorts: {
        name: "SmallOpenShorts",
        description:
          "Herramienta minimalista de clipping de video con IA que convierte videos largos en shorts verticales 9:16 listos para viralizar, con subtítulos y hooks de texto.",
        fullDescription:
          "SmallOpenShorts es una versión enfocada y autoalojada del proyecto open-source OpenShorts. Convierte videos largos en clips verticales 9:16 para TikTok, Instagram Reels y YouTube Shorts usando detección de momentos con IA, subtítulos automáticos y hooks de texto virales.",
        stack: ["Python", "FastAPI", "FFmpeg", "Docker", "React"],
        impact: "Pipeline open-source de clipping de video autoalojado, sin marcas de agua ni límites",
        challenges: [
          "Integrar análisis de transcripciones con IA para detectar clips virales",
          "Construir corte preciso de video con FFmpeg a nivel de segundos",
          "Implementar reencuadre vertical 9:16 con seguimiento de sujeto",
          "Crear subtítulos integrados y overlays de hooks temporizados",
        ],
        features: [
          "Detección de clips virales con Gemini",
          "Transcripción a nivel de palabra con faster-whisper",
          "Reencuadre vertical 9:16 automático",
          "Subtítulos integrados y hooks virales",
          "Autoalojamiento con Docker",
          "Ingesta de video desde YouTube o archivos locales",
        ],
        demoUrl: "https://shorts.zemog.qd.je/",
        repoUrl: "https://github.com/JohnGom/SmallOpenShorts",
      },
    },
  },
} as const;

export type Translations = typeof translations;
export type TranslationKey = keyof Translations["en"];

export function interpolate(template: string, values: Record<string, string>) {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key) => values[key] ?? "");
}
