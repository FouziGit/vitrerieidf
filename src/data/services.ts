export interface Service {
  title: string;
  slug: string;
  description: string;
  price: string;
  image: string;
  iconPath: string;
}

export interface ServiceCategory {
  name: string;
  slug: string;
  description: string;
  metaDescription: string;
  image: string;
  iconPath: string;
  services: Service[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    name: "Vitrerie & double vitrage",
    slug: "vitrerie-double-vitrage",
    description: "Installation, remplacement et réparation de vitrages pour votre habitat. Double et triple vitrage haute performance pour une isolation thermique et phonique optimale.",
    metaDescription: "Installation et remplacement de double vitrage sur mesure à Paris et en Île-de-France. Isolation thermique et phonique optimale. Devis gratuit, intervention rapide.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=500&fit=crop&q=80&fm=webp",
    iconPath: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21",
    services: [
      {
        title: "Remplacement double vitrage sur mesure",
        slug: "remplacement-double-vitrage",
        description: "Notre service de remplacement de double vitrage sur mesure en Île-de-France vous garantit une isolation thermique et phonique optimale. Nos vitriers professionnels interviennent rapidement pour remplacer vos vitrages anciens ou endommagés par du double vitrage haute performance, conforme aux normes RT 2020. Chaque vitrage est fabriqué sur mesure dans notre atelier pour s'adapter parfaitement à vos menuiseries existantes. Profitez d'une réduction significative de vos dépenses énergétiques et d'un confort acoustique amélioré toute l'année.",
        price: "À partir de 180 €",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&q=80&fm=webp",
        iconPath: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      },
      {
        title: "Installation triple vitrage haute performance",
        slug: "installation-triple-vitrage",
        description: "Optez pour le triple vitrage haute performance pour une isolation maximale de votre logement à Paris et en Île-de-France. Idéal pour les façades exposées au bruit ou aux intempéries, le triple vitrage offre un coefficient d'isolation thermique Ug jusqu'à 0.5 W/m²K. Nos techniciens certifiés assurent une pose soignée et étanche, compatible avec tous types de châssis : PVC, aluminium ou bois. Solution parfaite pour les constructions neuves et les rénovations exigeantes.",
        price: "À partir de 320 €",
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop&q=80&fm=webp",
        iconPath: "M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z"
      },
      {
        title: "Pose de fenêtres et baies vitrées",
        slug: "pose-fenetres-baies-vitrees",
        description: "Artisan Francilien IDF installe des fenêtres et baies vitrées de haute qualité pour améliorer l'isolation et le confort de votre logement en Île-de-France. Nos fenêtres offrent un excellent rapport qualité-prix avec des performances thermiques supérieures. Large choix de matériaux (PVC, aluminium, bois), de styles (oscillo-battant, coulissant, à galandage) et de dimensions. Installation réalisée par nos poseurs certifiés RGE, ouvrant droit aux aides à la rénovation énergétique. Garantie 10 ans pièces et main-d'œuvre.",
        price: "À partir de 280 €",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&q=80&fm=webp",
        iconPath: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      },
      {
        title: "Remplacement simple vitrage",
        slug: "remplacement-simple-vitrage",
        description: "Remplacement rapide et économique de simple vitrage pour fenêtres, portes et impostes. Nos vitriers interviennent avec un stock de verre clair de 3mm à 10mm d'épaisseur, découpé sur place aux dimensions exactes de votre châssis. Idéal pour les immeubles anciens, copropriétés haussmanniennes et bâtiments classés nécessitant le maintien du simple vitrage d'origine. Pose traditionnelle au mastic ou en parclose selon le type de menuiserie. Intervention rapide sous 24h sur Paris et toute l'Île-de-France.",
        price: "À partir de 135 €",
        image: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=600&h=400&fit=crop&q=80&fm=webp",
        iconPath: "M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
      },
      {
        title: "Survitrage et isolation fenêtre existante",
        slug: "survitrage-isolation-fenetre",
        description: "Le survitrage est la solution économique pour améliorer l'isolation de vos fenêtres existantes sans les remplacer. Nous posons un second vitrage sur votre fenêtre actuelle, réduisant les déperditions thermiques de 40% et atténuant le bruit extérieur. Compatible avec les fenêtres PVC, aluminium et bois. Solution idéale pour les logements en copropriété où le remplacement des fenêtres n'est pas autorisé, ou pour les budgets maîtrisés. Éligible aux aides à la rénovation énergétique sous conditions.",
        price: "À partir de 79 €",
        image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&h=400&fit=crop&q=80&fm=webp",
        iconPath: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      },
      {
        title: "Vitrage anti-effraction et sécurité",
        slug: "vitrage-anti-effraction-securite",
        description: "Protégez votre domicile ou votre commerce avec nos vitrages anti-effraction certifiés. Nous installons du verre feuilleté de sécurité (44.2, 44.4, 44.6) qui résiste aux tentatives d'intrusion tout en conservant une transparence parfaite. Classés de P1A à P8B selon la norme EN 356, ces vitrages retardent considérablement l'effraction et offrent une protection supplémentaire contre les accidents domestiques. Remplacement à l'identique sur châssis existant ou installation neuve. Devis gratuit et intervention rapide sur toute l'Île-de-France.",
        price: "À partir de 220 €",
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop&q=80&fm=webp",
        iconPath: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      },
      {
        title: "Vitrage phonique et acoustique",
        slug: "vitrage-phonique-acoustique",
        description: "Réduisez les nuisances sonores avec notre vitrage phonique haute performance. Nos vitrages asymétriques (ex : 10/16/4) et feuilletés acoustiques offrent un affaiblissement sonore jusqu'à 42 dB, idéal pour les logements en bordure de route, voie ferrée ou zone urbaine dense. Nous réalisons l'étude acoustique de votre logement et vous recommandons la solution la plus adaptée. Remplacement sur châssis existant ou installation complète avec menuiserie neuve. Éligible au crédit d'impôt pour la transition énergétique.",
        price: "À partir de 240 €",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=400&fit=crop&q=80&fm=webp",
        iconPath: "M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
      }
    ]
  },
  {
    name: "Miroiterie & verre décoratif",
    slug: "miroiterie-verre-decoratif",
    description: "Miroirs sur mesure, crédences en verre laqué, cloisons vitrées style atelier, parois de douche et garde-corps. Sublimez vos intérieurs avec le verre décoratif.",
    metaDescription: "Miroirs sur mesure, crédences en verre laqué et cloisons vitrées style atelier à Paris. Miroiterie décorative personnalisée pour particuliers et professionnels.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop&q=80&fm=webp",
    iconPath: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z",
    services: [
      {
        title: "Miroir sur mesure et découpe personnalisée",
        slug: "miroir-sur-mesure-decoupe",
        description: "Artisan Francilien IDF réalise la découpe et l'installation de miroirs sur mesure pour les particuliers et les professionnels en Île-de-France. Miroirs de salle de bain, miroirs muraux décoratifs, miroirs de dressing ou miroirs de gym : chaque pièce est découpée avec précision dans notre atelier. Nous proposons différentes épaisseurs (3mm à 6mm), finitions (bords polis, biseautés, arrondis) et traitements (anti-buée, argenture haute qualité). Pose soignée et fixation sécurisée garanties.",
        price: "À partir de 120 €",
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=400&fit=crop&q=80&fm=webp",
        iconPath: "M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
      },
      {
        title: "Crédence en verre laqué pour cuisine",
        slug: "credence-verre-laque",
        description: "Modernisez votre cuisine avec une crédence en verre laqué sur mesure. Artisan Francilien IDF fabrique et installe des crédences en verre trempé securit, disponibles dans plus de 200 coloris RAL. Le verre laqué est résistant à la chaleur, aux taches et aux chocs, et se nettoie d'un simple coup d'éponge. Nos crédences sont découpées sur mesure avec découpes pour prises électriques et robinetterie. Alternative élégante et hygiénique au carrelage traditionnel, parfaite pour les cuisines contemporaines.",
        price: "À partir de 160 €",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&q=80&fm=webp",
        iconPath: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
      },
      {
        title: "Cloison vitrée style atelier",
        slug: "cloison-vitree-atelier",
        description: "La cloison vitrée style atelier est la tendance déco incontournable pour structurer vos espaces tout en conservant la luminosité. Artisan Francilien IDF conçoit et installe des cloisons vitrées sur mesure avec structure en acier noir ou aluminium, et vitrages transparents ou texturés. Idéales pour séparer cuisine et salon, créer un bureau ou aménager une chambre dans un loft. Nos cloisons sont réalisées en verre trempé securit 8mm pour une sécurité maximale.",
        price: "À partir de 380 €",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop&q=80&fm=webp",
        iconPath: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
      },
      {
        title: "Paroi et pare-douche en verre sur mesure",
        slug: "paroi-pare-douche-verre",
        description: "Créez une salle de bain moderne et épurée avec nos parois et pare-douches en verre trempé sur mesure. Nous proposons des parois fixes, pivotantes, coulissantes ou battantes en verre securit 8mm ou 10mm, avec traitement anti-calcaire pour un entretien facilité. Finitions au choix : verre transparent, dépoli, sablé ou sérigraphié. Profilés en inox brossé, chrome ou noir mat selon votre style. Installation soignée avec joints silicone de qualité et garantie étanchéité parfaite.",
        price: "À partir de 335 €",
        image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop&q=80&fm=webp",
        iconPath: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
      },
      {
        title: "Garde-corps et balustrade en verre",
        slug: "garde-corps-balustrade-verre",
        description: "Sécurisez et embellissez vos espaces avec nos garde-corps en verre trempé ou feuilleté. Solution élégante pour balcons, terrasses, mezzanines et escaliers, le garde-corps en verre offre une transparence totale et une résistance mécanique exceptionnelle. Nous proposons des systèmes à pinces, à profils encastrés au sol ou en applique latérale. Verre feuilleté 44.2 à 55.2 conforme à la norme NF P01-012. Finitions disponibles : verre clair, extra-clair, teinté ou sérigraphié.",
        price: "À partir de 185 €/ml",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&h=400&fit=crop&q=80&fm=webp",
        iconPath: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
      },
      {
        title: "Dalle de sol et plancher en verre",
        slug: "dalle-sol-plancher-verre",
        description: "Apportez de la lumière naturelle à vos espaces intérieurs grâce à nos dalles de sol et planchers en verre. Fabriquées en verre feuilleté trempé antidérapant, nos dalles supportent les charges d'exploitation résidentielles et commerciales. Installation possible en remplacement de plancher existant ou en création de puits de lumière intérieur. Surface antidérapante certifiée, verre de sécurité feuilleté conforme aux normes. Solution architecturale unique pour lofts, maisons d'architecte et commerces.",
        price: "À partir de 285 €",
        image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&h=400&fit=crop&q=80&fm=webp",
        iconPath: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
      },
      {
        title: "Verre dépoli et sablé sur mesure",
        slug: "verre-depoli-sable-sur-mesure",
        description: "Le verre dépoli et sablé apporte intimité et élégance à vos espaces tout en laissant passer la lumière. Idéal pour les portes intérieures, cloisons de bureau, cabines de douche, vitrines et fenêtres. Nous proposons le sablage intégral, partiel ou avec motifs personnalisés (logos, décors géométriques, floraux). Disponible en verre trempé securit pour une sécurité renforcée. Découpe sur mesure dans notre atelier avec livraison et pose sur toute l'Île-de-France.",
        price: "À partir de 95 €",
        image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=600&h=400&fit=crop&q=80&fm=webp",
        iconPath: "M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
      }
    ]
  },
  {
    name: "Dépannage & urgence vitrage",
    slug: "depannage-urgence-vitrage",
    description: "Service d'urgence vitrier 24h/24, 7j/7. Intervention rapide en moins d'une heure sur Paris. Bris de glace, sécurisation, remplacement express.",
    metaDescription: "Vitrier urgence 24h/24 à Paris et Île-de-France. Intervention en moins d'1h : bris de glace, sécurisation, remplacement express. Agréé assurances.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=500&fit=crop&q=80&fm=webp",
    iconPath: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
    services: [
      {
        title: "Intervention urgente vitrier 24h/24",
        slug: "intervention-urgente-vitrier",
        description: "Artisan Francilien IDF assure un service de dépannage vitrier d'urgence 24 heures sur 24, 7 jours sur 7, sur l'ensemble de l'Île-de-France. Bris de glace accidentel, cambriolage, intempéries : nos équipes mobiles interviennent en moins d'une heure sur Paris et sa proche banlieue. Mise en sécurité immédiate par vitrage provisoire ou panneau de protection, puis remplacement définitif dans les 48h. Devis transparent avant intervention, aucun frais caché. Agréé par les principales compagnies d'assurance.",
        price: "À partir de 90 €",
        image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=400&fit=crop&q=80&fm=webp",
        iconPath: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
      },
      {
        title: "Remplacement vitre cassée à domicile",
        slug: "remplacement-vitre-cassee",
        description: "Votre vitre est cassée, fissurée ou ébréchée ? Nos vitriers se déplacent directement à votre domicile pour un remplacement rapide et soigné. Nous intervenons sur tous types de vitrages : simple vitrage, double vitrage, vitrage feuilleté, verre trempé, verre armé et verre cathédrale. Nos camions atelier sont équipés pour découper le verre sur place aux dimensions exactes de votre châssis. Intervention propre avec nettoyage complet des débris de verre. Service disponible sur Paris et toute l'Île-de-France.",
        price: "À partir de 75 €",
        image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=400&fit=crop&q=80&fm=webp",
        iconPath: "M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l5.653-4.655m3.586-3.586a2.548 2.548 0 013.586 3.586m-7.17 7.17l7.17-7.17"
      },
      {
        title: "Fermeture provisoire et sécurisation",
        slug: "fermeture-provisoire-securisation",
        description: "En cas d'urgence, Artisan Francilien IDF assure la fermeture provisoire de vos ouvertures endommagées pour sécuriser votre habitation ou votre commerce. Pose de panneaux en bois, plaques de polycarbonate ou vitrage provisoire selon la situation. Notre service de sécurisation est disponible 24h/24 avec une arrivée en moins de 60 minutes sur Paris. Nous établissons ensuite un devis détaillé pour le remplacement définitif. Prise en charge possible par votre assurance habitation ou multirisque professionnel.",
        price: "À partir de 60 €",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&q=80&fm=webp",
        iconPath: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
      },
      {
        title: "Remplacement vitrine de commerce en urgence",
        slug: "remplacement-vitrine-commerce-urgence",
        description: "Votre vitrine de commerce est brisée suite à un acte de vandalisme, un accident ou une tentative de cambriolage ? Nous intervenons en urgence 24h/24 pour sécuriser puis remplacer votre vitrine. Mise en place immédiate d'une protection provisoire (panneau OSB, polycarbonate) pour protéger votre marchandise, puis remplacement définitif sous 24 à 72h selon les dimensions. Prise en charge directe avec votre assurance multirisque professionnel. Nous vous accompagnons dans toutes les démarches administratives.",
        price: "À partir de 275 €",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&q=80&fm=webp",
        iconPath: "M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
      },
      {
        title: "Dépannage porte vitrée et porte d'entrée",
        slug: "depannage-porte-vitree",
        description: "Intervention rapide pour la réparation et le remplacement de portes vitrées, portes d'entrée vitrées et portes de hall d'immeuble. Nos vitriers traitent tous les problèmes : verre brisé, gond défaillant, ferme-porte cassé, joint usé, serrure grippée. Nous intervenons sur les portes en verre trempé Securit, les portes à double battant, les portes automatiques et les portes coupe-feu vitrées. Stock de pièces détachées sur nos véhicules pour une réparation immédiate dans la majorité des cas.",
        price: "À partir de 135 €",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop&q=80&fm=webp",
        iconPath: "M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
      },
      {
        title: "Constat et prise en charge assurance bris de glace",
        slug: "constat-prise-charge-assurance",
        description: "Artisan Francilien IDF vous accompagne dans toutes vos démarches de prise en charge assurance suite à un bris de glace. Nous établissons un constat détaillé sur place avec photos, rédigeons le rapport technique nécessaire à votre déclaration de sinistre et pouvons travailler en tiers payant avec les principales compagnies d'assurance (AXA, MAIF, Groupama, Allianz, MMA, Macif...). Vous n'avez aucune avance de frais à réaliser dans la plupart des cas. Service gratuit en complément de toute intervention de remplacement.",
        price: "Service inclus",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&q=80&fm=webp",
        iconPath: "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
      }
    ]
  },
  {
    name: "Vitrerie commerciale & professionnelle",
    slug: "vitrerie-commerciale-professionnelle",
    description: "Solutions vitrées pour commerces, bureaux et professionnels. Vitrines, portes Securit, cloisons de bureau, films de protection et aménagements sur mesure.",
    metaDescription: "Vitrerie professionnelle pour commerces et bureaux en IDF. Vitrines sur mesure, portes Securit, cloisons vitrées et films de protection. Devis gratuit.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop&q=80&fm=webp",
    iconPath: "M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z",
    services: [
      {
        title: "Vitrine de commerce sur mesure",
        slug: "vitrine-commerce-sur-mesure",
        description: "Artisan Francilien IDF conçoit et installe des vitrines de commerce sur mesure pour boutiques, restaurants, pharmacies et tout type de local commercial. Nous utilisons du verre trempé securit ou feuilleté de sécurité selon vos besoins, dans des épaisseurs de 8mm à 19mm. Nos vitrines sont fabriquées aux dimensions exactes de votre devanture avec les découpes nécessaires (portes, aérations, passage de câbles). Finitions disponibles : verre clair, extra-clair, teinté, sérigraphié avec votre logo.",
        price: "À partir de 1 290 €",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&q=80&fm=webp",
        iconPath: "M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
      },
      {
        title: "Porte vitrée Securit pour commerce",
        slug: "porte-vitree-securit-commerce",
        description: "Installation et remplacement de portes en verre trempé Securit pour commerces, halls d'immeuble et bureaux. Nos portes Securit sont fabriquées en verre trempé 10mm ou 12mm, résistant aux chocs et aux variations de température. Disponibles en version simple ou double battant, avec ferme-porte hydraulique, serrure de sûreté et poignée design. Options : bandeau en inox, sérigraphie, film dépoli, système anti-panique. Conformes aux normes ERP et accessibilité PMR.",
        price: "À partir de 890 €",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&h=400&fit=crop&q=80&fm=webp",
        iconPath: "M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
      },
      {
        title: "Cloison vitrée de bureau et open space",
        slug: "cloison-vitree-bureau-open-space",
        description: "Aménagez vos espaces professionnels avec nos cloisons vitrées sur mesure. Solution idéale pour créer des bureaux individuels, salles de réunion et espaces de confidentialité tout en conservant la luminosité et la sensation d'espace. Cloisons en verre trempé 8mm ou 10mm, toute hauteur ou semi-hauteur, avec structure en aluminium anodisé ou laqué. Options acoustiques avec double vitrage feuilleté pour un confort phonique optimal. Installation rapide sans travaux lourds, compatible avec les faux planchers et faux plafonds.",
        price: "À partir de 345 €",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop&q=80&fm=webp",
        iconPath: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
      },
      {
        title: "Film solaire et film de protection vitrage",
        slug: "film-solaire-protection-vitrage",
        description: "Protégez vos locaux professionnels avec nos films pour vitrage. Films solaires anti-chaleur pour réduire la température intérieure jusqu'à 8°C et bloquer 99% des UV nocifs. Films de sécurité anti-effraction retardant l'intrusion. Films intimité effet miroir sans perte de luminosité ou films dépolis pour la confidentialité. Films anti-graffiti pour protéger vos vitrines. Pose professionnelle sans bulle ni pli, garantie 10 ans. Solution économique pour améliorer le confort sans remplacer vos vitrages.",
        price: "À partir de 35 €/m²",
        image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=600&h=400&fit=crop&q=80&fm=webp",
        iconPath: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      },
      {
        title: "Marquage et signalétique sur vitrage",
        slug: "marquage-signaletique-vitrage",
        description: "Personnalisez vos vitrines et cloisons vitrées avec nos solutions de marquage professionnel. Sérigraphie de logos, textes et motifs directement sur le verre, film adhésif découpé à la forme, impression numérique grand format et gravure au sable. Nous réalisons également les bandes de signalisation obligatoires pour les surfaces vitrées dans les ERP (normes accessibilité). Design graphique inclus : envoyez-nous votre logo et nous créons la maquette. Pose soignée et résultat professionnel garanti.",
        price: "À partir de 65 €",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop&q=80&fm=webp",
        iconPath: "M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
      },
      {
        title: "Verre trempé Securit sur mesure",
        slug: "verre-trempe-securit-sur-mesure",
        description: "Fourniture et pose de verre trempé Securit sur mesure pour toutes applications professionnelles et résidentielles. Le verre trempé est 5 fois plus résistant que le verre ordinaire et se fragmente en petits morceaux non coupants en cas de casse. Disponible de 4mm à 19mm d'épaisseur, avec découpe aux dimensions exactes, perçages, encoches et bords polis. Utilisations : tables, étagères, crédences, garde-corps, portes, vitrines, mobilier design. Délai de fabrication : 5 à 10 jours ouvrés.",
        price: "À partir de 110 €/m²",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=400&fit=crop&q=80&fm=webp",
        iconPath: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      }
    ]
  },
  {
    name: "Fenêtres & menuiseries vitrées",
    slug: "fenetres-menuiseries-vitrees",
    description: "Pose, réparation et remplacement de fenêtres PVC, aluminium et bois. Baies vitrées, volets roulants, portes-fenêtres et menuiseries sur mesure pour votre confort.",
    metaDescription: "Pose et remplacement de fenêtres PVC, aluminium et bois à Paris. Baies vitrées, volets roulants, portes-fenêtres. Artisan RGE, éligible MaPrimeRénov'.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop&q=80&fm=webp",
    iconPath: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
    services: [
      {
        title: "Fenêtre PVC sur mesure avec pose",
        slug: "fenetre-pvc-sur-mesure-pose",
        description: "Installation de fenêtres PVC haute qualité sur mesure pour une isolation thermique et phonique optimale. Le PVC est le matériau le plus populaire pour les fenêtres grâce à son excellent rapport qualité-prix, sa durabilité et son entretien minimal. Nos fenêtres PVC sont équipées de double ou triple vitrage, joints EPDM haute performance et quincaillerie renforcée. Disponibles en blanc, gris anthracite, chêne doré et de nombreux coloris. Certification NF et classement AEV. Éligibles aux aides MaPrimeRénov'.",
        price: "À partir de 340 €",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&q=80&fm=webp",
        iconPath: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      },
      {
        title: "Fenêtre aluminium sur mesure avec pose",
        slug: "fenetre-aluminium-sur-mesure-pose",
        description: "L'aluminium offre des fenêtres aux lignes fines et contemporaines avec d'excellentes performances thermiques grâce à la rupture de pont thermique. Idéal pour les grandes ouvertures, baies vitrées et vérandas. Nos fenêtres aluminium sont disponibles en plus de 200 coloris RAL, avec des profilés fins qui maximisent la surface vitrée et l'apport de lumière naturelle. Options : oscillo-battant, à soufflet, coulissant, galandage. Quincaillerie anti-effraction en option. Garantie 10 ans.",
        price: "À partir de 685 €",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop&q=80&fm=webp",
        iconPath: "M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
      },
      {
        title: "Baie vitrée coulissante et à galandage",
        slug: "baie-vitree-coulissante-galandage",
        description: "Ouvrez votre intérieur sur l'extérieur avec nos baies vitrées coulissantes et à galandage. Solution idéale pour les séjours donnant sur une terrasse ou un jardin, nos baies vitrées offrent une ouverture maximale et un apport de lumière exceptionnel. Disponibles en 2, 3 ou 4 vantaux, en aluminium ou PVC, avec double ou triple vitrage. Le système à galandage permet aux vantaux de disparaître dans le mur pour un passage entièrement dégagé. Seuil surbaissé pour l'accessibilité PMR.",
        price: "À partir de 890 €",
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop&q=80&fm=webp",
        iconPath: "M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z"
      },
      {
        title: "Porte-fenêtre et porte d'entrée vitrée",
        slug: "porte-fenetre-porte-entree-vitree",
        description: "Installation et remplacement de portes-fenêtres et portes d'entrée vitrées en PVC, aluminium ou mixte bois-alu. Nos portes-fenêtres assurent un accès facile à votre balcon ou terrasse avec une isolation performante. Pour les portes d'entrée, nous proposons des modèles vitrés avec double vitrage retardateur d'effraction, serrure multipoints et design personnalisable. Large choix de vitrages : clair, dépoli, décoratif avec petits bois ou vitrage ornemental. Conformes aux normes de sécurité et d'isolation en vigueur.",
        price: "À partir de 490 €",
        image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&h=400&fit=crop&q=80&fm=webp",
        iconPath: "M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
      },
      {
        title: "Réparation et réglage de fenêtres",
        slug: "reparation-reglage-fenetres",
        description: "Votre fenêtre ferme mal, grince, laisse passer l'air ou l'eau ? Nos techniciens diagnostiquent et réparent tous types de dysfonctionnements de fenêtres : réglage des gonds et paumelles, remplacement de joints d'étanchéité, changement de crémone et poignée, déblocage de mécanisme oscillo-battant, remplacement de vitrage fissuré. Intervention sur fenêtres PVC, aluminium et bois, toutes marques. Un simple réglage suffit souvent à retrouver une fermeture parfaite et éviter un remplacement coûteux.",
        price: "À partir de 85 €",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&q=80&fm=webp",
        iconPath: "M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l5.653-4.655m3.586-3.586a2.548 2.548 0 013.586 3.586m-7.17 7.17l7.17-7.17"
      },
      {
        title: "Volet roulant : pose, réparation et motorisation",
        slug: "volet-roulant-pose-reparation-motorisation",
        description: "Service complet pour vos volets roulants : installation neuve, réparation de volet bloqué ou dégradé, motorisation de volets manuels existants. Nous posons des volets roulants en PVC ou aluminium, en coffre tunnel, rénovation ou bloc-baie. Motorisation filaire ou radio avec télécommande individuelle ou centrale domotique. Réparation de tablier cassé, lames abîmées, manivelle grippée, moteur défaillant et axe d'enroulement. Intervention rapide sur Paris et toute l'Île-de-France, toutes marques.",
        price: "À partir de 190 €",
        image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=600&h=400&fit=crop&q=80&fm=webp",
        iconPath: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      }
    ]
  }
];

export function getCategoryBySlug(slug: string): ServiceCategory | undefined {
  return serviceCategories.find((c) => c.slug === slug);
}

export const faqItems = [
  {
    question: "Quel est le délai d'intervention pour une urgence vitrage ?",
    answer: "Nous intervenons en moins d'une heure sur Paris et sa proche banlieue, et sous 2 heures dans toute l'Île-de-France. Notre service d'urgence est disponible 24h/24 et 7j/7, y compris les jours fériés."
  },
  {
    question: "Comment obtenir un devis pour mes travaux de vitrerie ?",
    answer: "Vous pouvez obtenir un devis gratuit en nous contactant par téléphone, WhatsApp ou via notre formulaire de contact. Pour les projets simples, nous pouvons vous donner une estimation immédiate. Pour les projets sur mesure, un technicien se déplace gratuitement pour prendre les mesures exactes."
  },
  {
    question: "Quelles zones géographiques couvrez-vous ?",
    answer: "Artisan Francilien IDF intervient principalement en Île-de-France (Paris et tous les départements : 75, 77, 78, 91, 92, 93, 94, 95) avec des délais rapides. Nous réalisons également des projets sur l'ensemble de la France métropolitaine pour les chantiers d'envergure."
  },
  {
    question: "Vos interventions sont-elles prises en charge par l'assurance ?",
    answer: "Oui, la plupart de nos interventions d'urgence (bris de glace, cambriolage, dégâts climatiques) sont couvertes par les assurances habitation et multirisque professionnel. Nous vous aidons dans vos démarches et pouvons travailler directement avec votre assureur."
  },
  {
    question: "Quels types de verre utilisez-vous ?",
    answer: "Nous travaillons avec tous les types de verre : simple et double vitrage, verre trempé, verre feuilleté, verre armé, verre cathédrale, verre dépoli, verre laqué, miroir, vitrage anti-effraction et vitrage phonique. Tous nos vitrages sont conformes aux normes européennes en vigueur."
  },
  {
    question: "Proposez-vous des tarifs pour les professionnels ?",
    answer: "Absolument. Nous proposons des tarifs préférentiels et des contrats-cadres pour les professionnels, syndics de copropriété, gestionnaires immobiliers et entreprises du BTP. Contactez notre service B2B pour un devis personnalisé et un accompagnement dédié."
  },
  {
    question: "Quels sont vos tarifs pour un remplacement de double vitrage ?",
    answer: "Le remplacement de double vitrage démarre à partir de 180€ TTC fourniture et pose comprises. Le prix varie selon les dimensions, le type de vitrage (standard, ITR, feuilleté) et l'accessibilité. Nous proposons des tarifs parmi les plus compétitifs du marché avec un devis gratuit et sans engagement."
  },
  {
    question: "Intervenez-vous le week-end et les jours fériés ?",
    answer: "Oui, notre service d'urgence est disponible 7j/7 y compris le week-end et les jours fériés. Pour les interventions programmées, nous proposons également des créneaux le samedi matin sur rendez-vous. Nos tarifs restent transparents et sans surprises."
  }
];
