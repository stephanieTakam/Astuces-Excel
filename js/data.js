// ================================================
// js/data.js — Source de vérité unique
// Pour ajouter du contenu : modifiez UNIQUEMENT ce fichier
// ================================================
const DATA = {

  site: {
    nom:         "Astuces Excel",
    slogan:      "Maîtrisez Excel. Boostez votre carrière.",
    description: "Des formations et astuces Excel gratuites, pensées pour les professionnels africains. Du débutant à l'expert.",
    email:       "astuceexcel@gmail.com",
    facebook:   "https://www.facebook.com/groups/794610047709913/",  // ← mettre à jour
    youtube:     "https://youtu.be/uK8H8TsxqCs",  // ← mettre à jour 
    pinterest: "https://www.pinterest.fr/astucesexcel/",                 // ← mettre à jour
    stats: [
      { val: "20+",    label: "Vidéos gratuites" },
      { val: "5 000+", label: "Apprenants actifs" },
      { val: "5+",      label: "Formations complètes" },
      { val: "100%",   label: "Gratuit" },
    ],
    marquee1: ["RECHERCHEV","TABLEAUX CROISÉS","SOMME.SI","INDEX+EQUIV","MACROS VBA","MISE EN FORME","GRAPHIQUES","FORMULES","POWER QUERY","FILTRES AVANCÉS","VALIDATION","DASHBOARD"],
    marquee2: ["Productivité","Analyse données","Automatisation","Reporting","Gestion budget","Suivi projet","RH & Paie","Comptabilité","Marketing","Logistique","Finance"],
  },

  formations: [
    {
      id: "excel-debutant",
      titre: "LES BASES D'EXCEL",
      desc: "Partez de zéro et maîtrisez les fondamentaux à votre rythme. Idéal pour les professionnels qui veulent gagner en efficacité.",
      image: "images/basesbig.png",
      gratuit: true,
      niveau: "Débutant",
      duree: "3h30",
      nbVideos: 4,
      tags: ["bases","interface","formules"],
      videos: [
        { titre: "Langage et extension",       url: "https://www.youtube.com/embed/dQw4w9WgXcQ", dur: "12:34" },
        { titre: "1ère partie",   url: "https://www.youtube.com/embed/TwSfYFCw14U", dur: "18:22" },
        { titre: "2ème partie",   url: "https://www.youtube.com/embed/pWDwdGLKj90", dur: "24:10" },
        { titre: "3ème partie",          url: "https://www.youtube.com/embed/NSlIqCYAj9k", dur: "15:45" }
      ]
    },
    {
      id: "formules-avancees",
      titre: "Formules Avancées Excel",
      desc: "Maîtrisez les formules puissantes : RECHERCHEV, INDEX/EQUIV, SIERREUR, formules matricielles. Devenez un expert.",
      image: "",
      emoji: "🔢",
      gratuit: true,
      niveau: "Intermédiaire",
      duree: "5h15",
      nbVideos: 12,
      tags: ["formules","RECHERCHEV","INDEX","matriciel"],
      videos: [
        { titre: "RECHERCHEV : le guide complet",           url: "https://www.youtube.com/embed/dQw4w9WgXcQ", dur: "32:10" },
        { titre: "INDEX + EQUIV : plus fort que RECHERCHEV",url: "https://www.youtube.com/embed/dQw4w9WgXcQ", dur: "28:45" },
        { titre: "SI, SI.ENS et formules conditionnelles",  url: "https://www.youtube.com/embed/dQw4w9WgXcQ", dur: "22:30" },
        { titre: "SIERREUR et gestion des erreurs",         url: "https://www.youtube.com/embed/dQw4w9WgXcQ", dur: "18:20" },
        { titre: "Formules texte : GAUCHE, DROITE, STXT",  url: "https://www.youtube.com/embed/dQw4w9WgXcQ", dur: "25:15" },
        { titre: "NB.SI, SOMME.SI et variantes",            url: "https://www.youtube.com/embed/dQw4w9WgXcQ", dur: "24:55" },
        { titre: "Formules matricielles",                   url: "https://www.youtube.com/embed/dQw4w9WgXcQ", dur: "30:10" },
        { titre: "XLOOKUP et Excel 365",                    url: "https://www.youtube.com/embed/dQw4w9WgXcQ", dur: "26:30" },
        { titre: "Audit et débogage de formules",           url: "https://www.youtube.com/embed/dQw4w9WgXcQ", dur: "19:45" },
        { titre: "Combinaisons avancées",                   url: "https://www.youtube.com/embed/dQw4w9WgXcQ", dur: "35:20" },
        { titre: "Formules date et heure",                  url: "https://www.youtube.com/embed/dQw4w9WgXcQ", dur: "20:40" },
        { titre: "Projet : modèle financier complet",       url: "https://www.youtube.com/embed/dQw4w9WgXcQ", dur: "42:15" },
      ]
    },
    {
      id: "tableaux-croises",
      titre: "Tableaux Croisés Dynamiques",
      desc: "Analysez des milliers de données en quelques clics. Les TCD sont l'outil le plus puissant d'Excel.",
      image: "",
      emoji: "📈",
      gratuit: true,
      niveau: "Intermédiaire",
      duree: "4h00",
      nbVideos: 9,
      tags: ["TCD","analyse","dashboard"],
      videos: [
        { titre: "C'est quoi un TCD ?",                    url: "https://www.youtube.com/embed/dQw4w9WgXcQ", dur: "15:30" },
        { titre: "Créer votre premier TCD",                url: "https://www.youtube.com/embed/dQw4w9WgXcQ", dur: "22:45" },
        { titre: "Champs, lignes, colonnes et valeurs",    url: "https://www.youtube.com/embed/dQw4w9WgXcQ", dur: "28:10" },
        { titre: "Filtres et segments (slicers)",          url: "https://www.youtube.com/embed/dQw4w9WgXcQ", dur: "20:30" },
        { titre: "Graphiques croisés dynamiques",          url: "https://www.youtube.com/embed/dQw4w9WgXcQ", dur: "25:15" },
        { titre: "Champs calculés",                        url: "https://www.youtube.com/embed/dQw4w9WgXcQ", dur: "30:40" },
        { titre: "TCD avancés : regroupement",             url: "https://www.youtube.com/embed/dQw4w9WgXcQ", dur: "26:55" },
        { titre: "Actualisation et sources",               url: "https://www.youtube.com/embed/dQw4w9WgXcQ", dur: "18:20" },
        { titre: "Projet : dashboard de ventes",           url: "https://www.youtube.com/embed/dQw4w9WgXcQ", dur: "45:30" },
      ]
    },
    {
      id: "macros-vba",
      titre: "Macros & VBA — Maîtrise Complète",
      desc: "Automatisez vos tâches répétitives et créez des applications Excel pro. De l'enregistrement de macros à la programmation VBA avancée.",
      image: "",
      emoji: "⚡",
      gratuit: false,
      prix: "15 000 FCFA",
      selarUrl: "https://selar.co/VOTRE_LIEN",  // ← mettre à jour
      niveau: "Avancé",
      duree: "8h00",
      nbVideos: 18,
      tags: ["VBA","macros","automatisation"],
      videos: []
    },
  ],

  articles: [
    {
      id: "raccourcis-indispensables",
      titre: "Les 20 Raccourcis Excel Indispensables",
      desc: "Doublez votre productivité avec ces raccourcis clavier que tout utilisateur Excel doit connaître.",
      image: "",
      emoji: "⌨️",
      date: "2025-01-15",
      lecture: "8 min",
      tags: ["productivité","raccourcis","astuces"],
      videos: [
        { titre: "Les 10 raccourcis de navigation",   url: "https://www.youtube.com/embed/dQw4w9WgXcQ", dur: "14:20" },
        { titre: "Les 10 raccourcis mise en forme",   url: "https://www.youtube.com/embed/dQw4w9WgXcQ", dur: "12:35" },
      ],
      contenu: `
        <p>Excel regorge de raccourcis clavier qui peuvent transformer votre façon de travailler. Voici les 20 plus utiles.</p>
        <h3>Navigation rapide</h3>
        <p><strong>Ctrl + Fin</strong> vous amène à la dernière cellule utilisée. <strong>Ctrl + Début</strong> vous ramène en A1. <strong>Ctrl + Flèches</strong> saute jusqu'à la dernière cellule non vide.</p>
        <h3>Sélection intelligente</h3>
        <p><strong>Ctrl + Shift + Flèches</strong> étend la sélection jusqu'à la dernière cellule non vide — parfait pour les grandes tables de données.</p>
        <h3>Raccourcis de mise en forme</h3>
        <p><strong>Ctrl + 1</strong> ouvre Format de cellule. <strong>Ctrl + Shift + $</strong> formate en devise instantanément.</p>
        <blockquote>💡 <strong>Astuce pro :</strong> Utilisez <code>Alt + =</code> pour insérer automatiquement une formule SOMME.</blockquote>
        <h3>Les 20 raccourcis essentiels</h3>
        <table>
          <tr><th>Raccourci</th><th>Action</th></tr>
          <tr><td>Ctrl + C</td><td>Copier</td></tr>
          <tr><td>Ctrl + V</td><td>Coller</td></tr>
          <tr><td>Ctrl + Z</td><td>Annuler</td></tr>
          <tr><td>Ctrl + Y</td><td>Rétablir</td></tr>
          <tr><td>Ctrl + F</td><td>Rechercher</td></tr>
          <tr><td>Ctrl + H</td><td>Remplacer</td></tr>
          <tr><td>Ctrl + T</td><td>Créer un tableau</td></tr>
          <tr><td>Alt + =</td><td>Somme automatique</td></tr>
          <tr><td>F4</td><td>Répéter / Référence absolue</td></tr>
          <tr><td>Ctrl + Shift + L</td><td>Activer les filtres</td></tr>
        </table>
      `
    },
    {
      id: "recherchev-guide",
      titre: "RECHERCHEV : Le Guide Ultime 2025",
      desc: "Tout ce que vous devez savoir sur RECHERCHEV — des bases aux cas d'usage avancés avec exemples concrets.",
      image: "",
      emoji: "🔍",
      date: "2025-01-28",
      lecture: "12 min",
      tags: ["formules","RECHERCHEV","données"],
      videos: [
        { titre: "RECHERCHEV expliqué simplement",        url: "https://youtu.be/bxAAd_f7KT4", dur: "18:45" },
        { titre: "Cas pratiques RECHERCHEV",              url: "https://www.youtube.com/embed/dQw4w9WgXcQ", dur: "22:10" },
        { titre: "Erreurs courantes et comment les éviter",url: "https://www.youtube.com/embed/dQw4w9WgXcQ", dur: "15:30" },
      ],
      contenu: `
        <p>RECHERCHEV (VLOOKUP en anglais) est l'une des formules les plus utilisées dans Excel. Elle recherche une valeur dans une colonne et retourne une valeur correspondante.</p>
        <h3>Syntaxe de base</h3>
        <p><code>=RECHERCHEV(valeur_cherchée; table; no_col; [approx])</code></p>
        <h3>Exemple concret</h3>
        <p>Pour retrouver le prix du produit "P001" dans un tableau :</p>
        <p><code>=RECHERCHEV("P001"; A:B; 2; FAUX)</code></p>
        <blockquote>💡 Toujours mettre <strong>FAUX</strong> comme dernier argument pour une correspondance exacte — c'est l'erreur la plus fréquente !</blockquote>
        <h3>Limites de RECHERCHEV</h3>
        <p>RECHERCHEV ne peut chercher que vers la droite et la valeur doit être en première colonne. Pour plus de flexibilité, utilisez <strong>INDEX + EQUIV</strong>.</p>
      `
    },
    {
      id: "dashboard-excel",
      titre: "Créer un Dashboard Pro en Excel",
      desc: "Créez des tableaux de bord visuels et interactifs qui impressionneront votre hiérarchie.",
      image: "",
      emoji: "📊",
      date: "2025-02-10",
      lecture: "15 min",
      tags: ["dashboard","graphiques","TCD","design"],
      videos: [
        { titre: "Planifier votre dashboard",              url: "https://www.youtube.com/embed/dQw4w9WgXcQ", dur: "10:15" },
        { titre: "Créer les graphiques interactifs",       url: "https://www.youtube.com/embed/dQw4w9WgXcQ", dur: "28:30" },
        { titre: "Segments et chronologies",               url: "https://www.youtube.com/embed/dQw4w9WgXcQ", dur: "20:45" },
        { titre: "Mise en forme finale",                   url: "https://www.youtube.com/embed/dQw4w9WgXcQ", dur: "18:20" },
      ],
      contenu: `
        <p>Un tableau de bord bien conçu transforme des données brutes en informations exploitables. Voici comment créer un dashboard de ventes professionnel.</p>
        <h3>Étape 1 : Préparer vos données</h3>
        <p>Utilisez des tableaux Excel structurés (<strong>Ctrl + T</strong>) plutôt que des plages simples — cela permet les mises à jour automatiques.</p>
        <h3>Étape 2 : Choisir les bons KPIs</h3>
        <p>Un bon dashboard montre 4 à 6 indicateurs clés qui répondent aux questions les plus importantes de votre activité.</p>
        <blockquote>💡 La règle d'or : si votre dashboard nécessite une explication, il est trop complexe.</blockquote>
        <h3>Étape 3 : Mise en page</h3>
        <p>Masquez les en-têtes de lignes/colonnes, désactivez le quadrillage, choisissez un fond neutre. Ces petits détails changent tout.</p>
      `
    },
  ]
};
