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
  image: string;
  iconPath: string;
  services: Service[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    name: "Vitrerie & double vitrage",
    slug: "vitrerie-double-vitrage",
    description: "Installation, remplacement et réparation de vitrages pour votre habitat. Double et triple vitrage haute performance pour une isolation thermique et phonique optimale.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=500&fit=crop&q=80",
    iconPath: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21",
    services: [
      {
        title: "Remplacement double vitrage sur mesure",
        slug: "remplacement-double-vitrage",
        description: "Notre service de remplacement de double vitrage sur mesure en Île-de-France vous garantit une isolation thermique et phonique optimale. Nos vitriers professionnels interviennent rapidement pour remplacer vos vitrages anciens ou endommagés par du double vitrage haute performance, conforme aux normes RT 2020. Chaque vitrage est fabriqué sur mesure dans notre atelier pour s'adapter parfaitement à vos menuiseries existantes. Profitez d'une réduction significative de vos dépenses énergétiques et d'un confort acoustique amélioré toute l'année.",
        price: "À partir de 180 €",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&q=80",
        iconPath: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      },
      {
        title: "Installation triple vitrage haute performance",
        slug: "installation-triple-vitrage",
        description: "Optez pour le triple vitrage haute performance pour une isolation maximale de votre logement à Paris et en Île-de-France. Idéal pour les façades exposées au bruit ou aux intempéries, le triple vitrage offre un coefficient d'isolation thermique Ug jusqu'à 0.5 W/m²K. Nos techniciens certifiés assurent une pose soignée et étanche, compatible avec tous types de châssis : PVC, aluminium ou bois. Solution parfaite pour les constructions neuves et les rénovations exigeantes.",
        price: "À partir de 320 €",
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop&q=80",
        iconPath: "M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z"
      },
      {
        title: "Pose de fenêtres et baies vitrées",
        slug: "pose-fenetres-baies-vitrees",
        description: "Artisan Francilien IDF installe des fenêtres et baies vitrées de haute qualité pour améliorer l'isolation et le confort de votre logement en Île-de-France. Nos fenêtres offrent un excellent rapport qualité-prix avec des performances thermiques supérieures. Large choix de matériaux (PVC, aluminium, bois), de styles (oscillo-battant, coulissant, à galandage) et de dimensions. Installation réalisée par nos poseurs certifiés RGE, ouvrant droit aux aides à la rénovation énergétique. Garantie 10 ans pièces et main-d'œuvre.",
        price: "À partir de 280 €",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&q=80",
        iconPath: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      }
    ]
  },
  {
    name: "Miroiterie & verre décoratif",
    slug: "miroiterie-verre-decoratif",
    description: "Miroirs sur mesure, crédences en verre laqué, cloisons vitrées style atelier et parois de douche. Sublimez vos intérieurs avec le verre décoratif.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop&q=80",
    iconPath: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z",
    services: [
      {
        title: "Miroir sur mesure et découpe personnalisée",
        slug: "miroir-sur-mesure-decoupe",
        description: "Artisan Francilien IDF réalise la découpe et l'installation de miroirs sur mesure pour les particuliers et les professionnels en Île-de-France. Miroirs de salle de bain, miroirs muraux décoratifs, miroirs de dressing ou miroirs de gym : chaque pièce est découpée avec précision dans notre atelier. Nous proposons différentes épaisseurs (3mm à 6mm), finitions (bords polis, biseautés, arrondis) et traitements (anti-buée, argenture haute qualité). Pose soignée et fixation sécurisée garanties.",
        price: "À partir de 120 €",
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=400&fit=crop&q=80",
        iconPath: "M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
      },
      {
        title: "Crédence en verre laqué pour cuisine",
        slug: "credence-verre-laque",
        description: "Modernisez votre cuisine avec une crédence en verre laqué sur mesure. Artisan Francilien IDF fabrique et installe des crédences en verre trempé securit, disponibles dans plus de 200 coloris RAL. Le verre laqué est résistant à la chaleur, aux taches et aux chocs, et se nettoie d'un simple coup d'éponge. Nos crédences sont découpées sur mesure avec découpes pour prises électriques et robinetterie. Alternative élégante et hygiénique au carrelage traditionnel, parfaite pour les cuisines contemporaines.",
        price: "À partir de 160 €",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&q=80",
        iconPath: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
      },
      {
        title: "Cloison vitrée style atelier",
        slug: "cloison-vitree-atelier",
        description: "La cloison vitrée style atelier est la tendance déco incontournable pour structurer vos espaces tout en conservant la luminosité. Artisan Francilien IDF conçoit et installe des cloisons vitrées sur mesure avec structure en acier noir ou aluminium, et vitrages transparents ou texturés. Idéales pour séparer cuisine et salon, créer un bureau ou aménager une chambre dans un loft. Nos cloisons sont réalisées en verre trempé securit 8mm pour une sécurité maximale.",
        price: "À partir de 380 €",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop&q=80",
        iconPath: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
      }
    ]
  },
  {
    name: "Dépannage & urgence vitrage",
    slug: "depannage-urgence-vitrage",
    description: "Service d'urgence vitrier 24h/24, 7j/7. Intervention rapide en moins d'une heure sur Paris. Bris de glace, sécurisation, remplacement express.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=500&fit=crop&q=80",
    iconPath: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
    services: [
      {
        title: "Intervention urgente vitrier 24h/24",
        slug: "intervention-urgente-vitrier",
        description: "Artisan Francilien IDF assure un service de dépannage vitrier d'urgence 24 heures sur 24, 7 jours sur 7, sur l'ensemble de l'Île-de-France. Bris de glace accidentel, cambriolage, intempéries : nos équipes mobiles interviennent en moins d'une heure sur Paris et sa proche banlieue. Mise en sécurité immédiate par vitrage provisoire ou panneau de protection, puis remplacement définitif dans les 48h. Devis transparent avant intervention, aucun frais caché. Agréé par les principales compagnies d'assurance.",
        price: "À partir de 90 €",
        image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=400&fit=crop&q=80",
        iconPath: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
      },
      {
        title: "Remplacement vitre cassée à domicile",
        slug: "remplacement-vitre-cassee",
        description: "Votre vitre est cassée, fissurée ou ébréchée ? Nos vitriers se déplacent directement à votre domicile pour un remplacement rapide et soigné. Nous intervenons sur tous types de vitrages : simple vitrage, double vitrage, vitrage feuilleté, verre trempé, verre armé et verre cathédrale. Nos camions atelier sont équipés pour découper le verre sur place aux dimensions exactes de votre châssis. Intervention propre avec nettoyage complet des débris de verre. Service disponible sur Paris et toute l'Île-de-France.",
        price: "À partir de 75 €",
        image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=400&fit=crop&q=80",
        iconPath: "M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l5.653-4.655m3.586-3.586a2.548 2.548 0 013.586 3.586m-7.17 7.17l7.17-7.17"
      },
      {
        title: "Fermeture provisoire et sécurisation",
        slug: "fermeture-provisoire-securisation",
        description: "En cas d'urgence, Artisan Francilien IDF assure la fermeture provisoire de vos ouvertures endommagées pour sécuriser votre habitation ou votre commerce. Pose de panneaux en bois, plaques de polycarbonate ou vitrage provisoire selon la situation. Notre service de sécurisation est disponible 24h/24 avec une arrivée en moins de 60 minutes sur Paris. Nous établissons ensuite un devis détaillé pour le remplacement définitif. Prise en charge possible par votre assurance habitation ou multirisque professionnel.",
        price: "À partir de 60 €",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&q=80",
        iconPath: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
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
  }
];
