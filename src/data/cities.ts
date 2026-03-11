export interface City {
  name: string;
  zip: string;
  slug: string;
}

export interface Department {
  code: string;
  name: string;
  cities: City[];
}

export const departments: Department[] = [
  {
    code: "75",
    name: "Paris",
    cities: [
      { name: "Paris 1er", zip: "75001", slug: "vitrier-paris-1-75001" },
      { name: "Paris 2ème", zip: "75002", slug: "vitrier-paris-2-75002" },
      { name: "Paris 3ème", zip: "75003", slug: "vitrier-paris-3-75003" },
      { name: "Paris 4ème", zip: "75004", slug: "vitrier-paris-4-75004" },
      { name: "Paris 5ème", zip: "75005", slug: "vitrier-paris-5-75005" },
      { name: "Paris 6ème", zip: "75006", slug: "vitrier-paris-6-75006" },
      { name: "Paris 7ème", zip: "75007", slug: "vitrier-paris-7-75007" },
      { name: "Paris 8ème", zip: "75008", slug: "vitrier-paris-8-75008" },
      { name: "Paris 9ème", zip: "75009", slug: "vitrier-paris-9-75009" },
      { name: "Paris 10ème", zip: "75010", slug: "vitrier-paris-10-75010" },
      { name: "Paris 11ème", zip: "75011", slug: "vitrier-paris-11-75011" },
      { name: "Paris 12ème", zip: "75012", slug: "vitrier-paris-12-75012" },
      { name: "Paris 13ème", zip: "75013", slug: "vitrier-paris-13-75013" },
      { name: "Paris 14ème", zip: "75014", slug: "vitrier-paris-14-75014" },
      { name: "Paris 15ème", zip: "75015", slug: "vitrier-paris-15-75015" },
      { name: "Paris 16ème", zip: "75016", slug: "vitrier-paris-16-75016" },
      { name: "Paris 17ème", zip: "75017", slug: "vitrier-paris-17-75017" },
      { name: "Paris 18ème", zip: "75018", slug: "vitrier-paris-18-75018" },
      { name: "Paris 19ème", zip: "75019", slug: "vitrier-paris-19-75019" },
      { name: "Paris 20ème", zip: "75020", slug: "vitrier-paris-20-75020" },
    ],
  },
  {
    code: "77",
    name: "Seine-et-Marne",
    cities: [
      { name: "Meaux", zip: "77100", slug: "vitrier-meaux-77100" },
      { name: "Chelles", zip: "77500", slug: "vitrier-chelles-77500" },
      { name: "Melun", zip: "77000", slug: "vitrier-melun-77000" },
      { name: "Pontault-Combault", zip: "77340", slug: "vitrier-pontault-combault-77340" },
      { name: "Savigny-le-Temple", zip: "77176", slug: "vitrier-savigny-le-temple-77176" },
      { name: "Champs-sur-Marne", zip: "77420", slug: "vitrier-champs-sur-marne-77420" },
      { name: "Torcy", zip: "77200", slug: "vitrier-torcy-77200" },
      { name: "Roissy-en-Brie", zip: "77680", slug: "vitrier-roissy-en-brie-77680" },
      { name: "Combs-la-Ville", zip: "77380", slug: "vitrier-combs-la-ville-77380" },
      { name: "Lagny-sur-Marne", zip: "77400", slug: "vitrier-lagny-sur-marne-77400" },
      { name: "Dammarie-les-Lys", zip: "77190", slug: "vitrier-dammarie-les-lys-77190" },
      { name: "Bussy-Saint-Georges", zip: "77600", slug: "vitrier-bussy-saint-georges-77600" },
    ],
  },
  {
    code: "78",
    name: "Yvelines",
    cities: [
      { name: "Versailles", zip: "78000", slug: "vitrier-versailles-78000" },
      { name: "Sartrouville", zip: "78500", slug: "vitrier-sartrouville-78500" },
      { name: "Mantes-la-Jolie", zip: "78200", slug: "vitrier-mantes-la-jolie-78200" },
      { name: "Saint-Germain-en-Laye", zip: "78100", slug: "vitrier-saint-germain-en-laye-78100" },
      { name: "Poissy", zip: "78300", slug: "vitrier-poissy-78300" },
      { name: "Conflans-Sainte-Honorine", zip: "78700", slug: "vitrier-conflans-sainte-honorine-78700" },
      { name: "Les Mureaux", zip: "78130", slug: "vitrier-les-mureaux-78130" },
      { name: "Houilles", zip: "78800", slug: "vitrier-houilles-78800" },
      { name: "Plaisir", zip: "78370", slug: "vitrier-plaisir-78370" },
      { name: "Chatou", zip: "78400", slug: "vitrier-chatou-78400" },
      { name: "Le Chesnay-Rocquencourt", zip: "78150", slug: "vitrier-le-chesnay-rocquencourt-78150" },
      { name: "Trappes", zip: "78190", slug: "vitrier-trappes-78190" },
    ],
  },
  {
    code: "91",
    name: "Essonne",
    cities: [
      { name: "Évry-Courcouronnes", zip: "91000", slug: "vitrier-evry-courcouronnes-91000" },
      { name: "Corbeil-Essonnes", zip: "91100", slug: "vitrier-corbeil-essonnes-91100" },
      { name: "Massy", zip: "91300", slug: "vitrier-massy-91300" },
      { name: "Savigny-sur-Orge", zip: "91600", slug: "vitrier-savigny-sur-orge-91600" },
      { name: "Sainte-Geneviève-des-Bois", zip: "91700", slug: "vitrier-sainte-genevieve-des-bois-91700" },
      { name: "Viry-Châtillon", zip: "91170", slug: "vitrier-viry-chatillon-91170" },
      { name: "Athis-Mons", zip: "91200", slug: "vitrier-athis-mons-91200" },
      { name: "Palaiseau", zip: "91120", slug: "vitrier-palaiseau-91120" },
      { name: "Yerres", zip: "91330", slug: "vitrier-yerres-91330" },
      { name: "Draveil", zip: "91210", slug: "vitrier-draveil-91210" },
      { name: "Grigny", zip: "91350", slug: "vitrier-grigny-91350" },
      { name: "Ris-Orangis", zip: "91130", slug: "vitrier-ris-orangis-91130" },
    ],
  },
  {
    code: "92",
    name: "Hauts-de-Seine",
    cities: [
      { name: "Boulogne-Billancourt", zip: "92100", slug: "vitrier-boulogne-billancourt-92100" },
      { name: "Nanterre", zip: "92000", slug: "vitrier-nanterre-92000" },
      { name: "Colombes", zip: "92700", slug: "vitrier-colombes-92700" },
      { name: "Courbevoie", zip: "92400", slug: "vitrier-courbevoie-92400" },
      { name: "Asnières-sur-Seine", zip: "92600", slug: "vitrier-asnieres-sur-seine-92600" },
      { name: "Rueil-Malmaison", zip: "92500", slug: "vitrier-rueil-malmaison-92500" },
      { name: "Levallois-Perret", zip: "92300", slug: "vitrier-levallois-perret-92300" },
      { name: "Issy-les-Moulineaux", zip: "92130", slug: "vitrier-issy-les-moulineaux-92130" },
      { name: "Antony", zip: "92160", slug: "vitrier-antony-92160" },
      { name: "Neuilly-sur-Seine", zip: "92200", slug: "vitrier-neuilly-sur-seine-92200" },
      { name: "Clamart", zip: "92140", slug: "vitrier-clamart-92140" },
      { name: "Montrouge", zip: "92120", slug: "vitrier-montrouge-92120" },
      { name: "Meudon", zip: "92190", slug: "vitrier-meudon-92190" },
      { name: "Puteaux", zip: "92800", slug: "vitrier-puteaux-92800" },
      { name: "Suresnes", zip: "92150", slug: "vitrier-suresnes-92150" },
    ],
  },
  {
    code: "93",
    name: "Seine-Saint-Denis",
    cities: [
      { name: "Montreuil", zip: "93100", slug: "vitrier-montreuil-93100" },
      { name: "Saint-Denis", zip: "93200", slug: "vitrier-saint-denis-93200" },
      { name: "Aulnay-sous-Bois", zip: "93600", slug: "vitrier-aulnay-sous-bois-93600" },
      { name: "Aubervilliers", zip: "93300", slug: "vitrier-aubervilliers-93300" },
      { name: "Drancy", zip: "93700", slug: "vitrier-drancy-93700" },
      { name: "Noisy-le-Grand", zip: "93160", slug: "vitrier-noisy-le-grand-93160" },
      { name: "Pantin", zip: "93500", slug: "vitrier-pantin-93500" },
      { name: "Bondy", zip: "93140", slug: "vitrier-bondy-93140" },
      { name: "Épinay-sur-Seine", zip: "93800", slug: "vitrier-epinay-sur-seine-93800" },
      { name: "Bobigny", zip: "93000", slug: "vitrier-bobigny-93000" },
      { name: "Sevran", zip: "93270", slug: "vitrier-sevran-93270" },
      { name: "Livry-Gargan", zip: "93190", slug: "vitrier-livry-gargan-93190" },
      { name: "Le Blanc-Mesnil", zip: "93150", slug: "vitrier-le-blanc-mesnil-93150" },
      { name: "Rosny-sous-Bois", zip: "93110", slug: "vitrier-rosny-sous-bois-93110" },
      { name: "Villepinte", zip: "93420", slug: "vitrier-villepinte-93420" },
    ],
  },
  {
    code: "94",
    name: "Val-de-Marne",
    cities: [
      { name: "Créteil", zip: "94000", slug: "vitrier-creteil-94000" },
      { name: "Vitry-sur-Seine", zip: "94400", slug: "vitrier-vitry-sur-seine-94400" },
      { name: "Saint-Maur-des-Fossés", zip: "94100", slug: "vitrier-saint-maur-des-fosses-94100" },
      { name: "Champigny-sur-Marne", zip: "94500", slug: "vitrier-champigny-sur-marne-94500" },
      { name: "Ivry-sur-Seine", zip: "94200", slug: "vitrier-ivry-sur-seine-94200" },
      { name: "Maisons-Alfort", zip: "94700", slug: "vitrier-maisons-alfort-94700" },
      { name: "Fontenay-sous-Bois", zip: "94120", slug: "vitrier-fontenay-sous-bois-94120" },
      { name: "Villejuif", zip: "94800", slug: "vitrier-villejuif-94800" },
      { name: "Vincennes", zip: "94300", slug: "vitrier-vincennes-94300" },
      { name: "Alfortville", zip: "94140", slug: "vitrier-alfortville-94140" },
      { name: "Cachan", zip: "94230", slug: "vitrier-cachan-94230" },
      { name: "Le Kremlin-Bicêtre", zip: "94270", slug: "vitrier-le-kremlin-bicetre-94270" },
      { name: "Thiais", zip: "94320", slug: "vitrier-thiais-94320" },
      { name: "Nogent-sur-Marne", zip: "94130", slug: "vitrier-nogent-sur-marne-94130" },
      { name: "Choisy-le-Roi", zip: "94600", slug: "vitrier-choisy-le-roi-94600" },
    ],
  },
  {
    code: "95",
    name: "Val-d'Oise",
    cities: [
      { name: "Argenteuil", zip: "95100", slug: "vitrier-argenteuil-95100" },
      { name: "Sarcelles", zip: "95200", slug: "vitrier-sarcelles-95200" },
      { name: "Cergy", zip: "95000", slug: "vitrier-cergy-95000" },
      { name: "Garges-lès-Gonesse", zip: "95140", slug: "vitrier-garges-les-gonesse-95140" },
      { name: "Franconville", zip: "95130", slug: "vitrier-franconville-95130" },
      { name: "Goussainville", zip: "95190", slug: "vitrier-goussainville-95190" },
      { name: "Pontoise", zip: "95300", slug: "vitrier-pontoise-95300" },
      { name: "Bezons", zip: "95870", slug: "vitrier-bezons-95870" },
      { name: "Ermont", zip: "95120", slug: "vitrier-ermont-95120" },
      { name: "Villiers-le-Bel", zip: "95400", slug: "vitrier-villiers-le-bel-95400" },
      { name: "Herblay-sur-Seine", zip: "95220", slug: "vitrier-herblay-sur-seine-95220" },
      { name: "Taverny", zip: "95150", slug: "vitrier-taverny-95150" },
    ],
  },
];

export function getAllCities(): (City & { deptCode: string; deptName: string })[] {
  return departments.flatMap((dept) =>
    dept.cities.map((city) => ({
      ...city,
      deptCode: dept.code,
      deptName: dept.name,
    }))
  );
}

export function getCityBySlug(slug: string) {
  for (const dept of departments) {
    const city = dept.cities.find((c) => c.slug === slug);
    if (city) return { ...city, deptCode: dept.code, deptName: dept.name };
  }
  return undefined;
}

export function getDepartmentByCode(code: string) {
  return departments.find((d) => d.code === code);
}

function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  return Math.abs(hash);
}

function pickVariant<T>(variants: T[], cityName: string, salt: string = ""): T {
  return variants[hashCode(cityName + salt) % variants.length];
}

export function getInterventionTime(deptCode: string): string {
  if (deptCode === "75") return "30 minutes";
  if (["92", "93", "94"].includes(deptCode)) return "45 minutes";
  return "60 minutes";
}

export function generateSEOContent(cityName: string, zip: string, deptName: string, deptCode: string): string[] {
  const time = getInterventionTime(deptCode);

  const intros = [
    `Artisan Francilien IDF, votre vitrier de confiance à ${cityName} (${zip}), intervient pour tous vos besoins en vitrerie, miroiterie et dépannage de vitrage. Basés en Île-de-France, nos artisans qualifiés se déplacent à ${cityName} et dans tout le département ${deptName} (${deptCode}) en moins de ${time}. Que ce soit pour un remplacement de double vitrage, une pose de miroir sur mesure ou une urgence bris de glace, nous apportons un savoir-faire reconnu et des matériaux de premier choix.`,
    `Vous recherchez un vitrier professionnel à ${cityName} ? Artisan Francilien IDF met à votre disposition une équipe d'artisans vitriers expérimentés, disponibles pour intervenir rapidement dans le ${zip} et ses environs. Spécialistes du double vitrage, de la miroiterie décorative et du dépannage d'urgence 24h/24, nous garantissons des prestations soignées avec des matériaux certifiés. Notre connaissance du secteur de ${cityName} en ${deptName} nous permet d'optimiser nos délais d'intervention.`,
    `Besoin d'un vitrier à ${cityName} (${zip}) ? Artisan Francilien IDF est votre partenaire vitrerie de proximité dans le ${deptName}. Nos équipes mobiles interviennent à ${cityName} en moins de ${time} pour toutes vos urgences et projets de vitrerie : remplacement de vitrage cassé, installation de double vitrage, pose de miroirs, crédences en verre laqué et bien plus. Chaque intervention est réalisée dans le respect des normes en vigueur et accompagnée d'une garantie décennale.`,
  ];

  const serviceBlocks = [
    `Nos services de vitrerie à ${cityName} couvrent l'ensemble des besoins des particuliers et des professionnels. Pour votre habitat, nous réalisons le remplacement de double vitrage sur mesure (ITR, phonique, anti-effraction), la pose de triple vitrage haute performance et l'installation de fenêtres PVC ou aluminium. En miroiterie, nous fabriquons et installons des miroirs sur mesure, crédences en verre laqué pour cuisine, cloisons vitrées style atelier et parois de douche. Chaque projet est étudié sur place avec prise de cotes précise.`,
    `À ${cityName}, Artisan Francilien IDF propose une gamme complète de prestations vitrières adaptées à chaque besoin. Pour l'isolation de votre logement, optez pour nos solutions de double ou triple vitrage aux performances thermiques certifiées. Nous intervenons également en miroiterie décorative : miroirs de salle de bain, cloisons atelier en acier et verre, garde-corps en verre feuilleté et dalles de sol transparentes. Pour les commerces du ${zip}, nous posons des vitrines sur mesure, portes Securit et films de protection.`,
    `Notre expertise vitrière au service des habitants de ${cityName} et du ${deptName} se décline en plusieurs spécialités. En vitrerie résidentielle, nous excellons dans le remplacement de double vitrage, la pose de survitrage et l'installation de vitrage phonique pour les habitations exposées au bruit. Notre atelier de miroiterie produit des pièces sur mesure : miroirs avec bords polis ou biseautés, crédences de cuisine en verre trempé et cloisons décoratives. Pour les professionnels de ${cityName}, nous proposons des solutions de vitrerie commerciale complètes.`,
  ];

  const urgencyBlocks = [
    `Notre service d'urgence vitrier est disponible 24h/24, 7j/7 à ${cityName} et dans toutes les communes du ${deptName}. Vitre cassée, tentative d'effraction, dégât climatique : nos équipes d'intervention rapide arrivent en moins de ${time} avec tout le matériel nécessaire pour sécuriser puis remplacer votre vitrage. Nous assurons la fermeture provisoire immédiate et programmons le remplacement définitif sous 48h. Agréés par les principales compagnies d'assurance, nous prenons en charge vos démarches de déclaration de sinistre.`,
    `En cas d'urgence vitrerie à ${cityName} (${zip}), un seul appel suffit. Artisan Francilien IDF mobilise ses vitriers d'astreinte pour une intervention en moins de ${time}. Bris de glace accidentel, cambriolage ou intempéries, nous sécurisons vos ouvertures avec des panneaux de protection ou un vitrage provisoire, puis organisons le remplacement définitif dans les meilleurs délais. Nous travaillons en tiers payant avec AXA, MAIF, Groupama, Allianz, MMA et la plupart des assureurs pour vous éviter toute avance de frais.`,
    `Le dépannage vitrier d'urgence à ${cityName} fait partie de nos engagements prioritaires. Disponible jour et nuit, notre service d'astreinte couvre l'ensemble de ${cityName} et du département ${deptName} avec un temps de réponse inférieur à ${time}. Nos camions atelier embarquent un stock de vitrages courants pour un remplacement immédiat sur place. Pour les dimensions spécifiques, nous posons une fermeture provisoire sécurisée et revenons sous 24 à 72h avec le vitrage sur mesure. Constat et aide aux démarches assurance inclus.`,
  ];

  const closingBlocks = [
    `Faites confiance à Artisan Francilien IDF pour tous vos travaux de vitrerie à ${cityName}. Nos tarifs sont transparents, nos devis gratuits et sans engagement. Chaque intervention bénéficie de notre garantie décennale et de matériaux certifiés aux normes européennes. Contactez-nous dès maintenant par téléphone ou WhatsApp pour un devis personnalisé ou une intervention rapide dans le ${zip}.`,
    `Artisan Francilien IDF s'engage à offrir aux habitants de ${cityName} un service de vitrerie professionnel, fiable et au juste prix. Nos artisans sont qualifiés, assurés et formés aux dernières techniques de pose et de remplacement de vitrage. Demandez votre devis gratuit dès aujourd'hui et bénéficiez de l'expertise d'un vitrier de proximité dans le ${deptName} (${deptCode}).`,
    `Pour un service de vitrerie de qualité à ${cityName}, choisissez Artisan Francilien IDF. Plus de 15 ans d'expérience et des milliers d'interventions réalisées en Île-de-France nous permettent de vous garantir un résultat impeccable. Devis gratuit, conseils personnalisés et intervention rapide : appelez-nous ou remplissez notre formulaire de contact pour votre projet de vitrerie dans le ${zip}.`,
  ];

  return [
    pickVariant(intros, cityName, "intro"),
    pickVariant(serviceBlocks, cityName, "services"),
    pickVariant(urgencyBlocks, cityName, "urgency"),
    pickVariant(closingBlocks, cityName, "closing"),
  ];
}
