// Réponses rédigées à partir des textes officiels relus le 23/11/2026.
const SRC = {
  circ: {
    nom: "Circulaire n° 002-2020/CB/C du 18 septembre 2020 de la Commission bancaire de l'UMOA relative au traitement des réclamations des clients des établissements assujettis",
    court: "Circulaire n° 002-2020/CB/C",
    url: "https://www.bceao.int/sites/default/files/2020-10/Circulaire%20N%C2%B0%20002-2020-CB-C%20-Traitement_R%C3%A9clamations_Clients_Etablissements_Assujettis_Contr%C3%B4le_CB-UMOA.pdf",
    hote: "bceao.int"
  },
  grat: {
    nom: "Instruction BCEAO n° 004-06-2014 du 25 juin 2014 relative aux services bancaires offerts à titre gratuit par les établissements de crédit de l'UMOA à leur clientèle, et son annexe",
    court: "Instruction BCEAO n° 004-06-2014",
    url: "https://cb-umoa.org/sites/default/files/2022-01/INSTRUCTION%20N%C2%B0004-06-2014%20RELATIVE%20AUX%20SERVICES%20BANCAIRES%20OFFERTS%20%C3%80%20TITRE%20GRATUIT%20PAR%20LES%20%C3%89TABLISSEMENTS%20DE%20CR%C3%89DIT%20DE%20L%27UMOA%20%C3%80%20LEUR%20CLIENT%C3%88LE.pdf",
    hote: "cb-umoa.org"
  },
  usure: {
    nom: "Décision n° 19 du 29 décembre 2025 du Conseil des Ministres de l'UMOA fixant le taux de l'usure dans les États membres de l'UMOA (en vigueur le 1er juin 2026)",
    court: "Décision n° 19/CM/UMOA du 29 décembre 2025",
    url: "https://www.bceao.int/sites/default/files/2026-01/Decision-No19-du-29-12-2025_CMUMOA_fixant_le_taux_de_l-usure.pdf",
    hote: "bceao.int"
  },
  d397: {
    nom: "Décision n° 397/12/2010 du 6 décembre 2010 du Comité de politique monétaire portant règles, instruments et procédures de mise en œuvre de la politique de la monnaie et du crédit de la BCEAO",
    court: "Décision BCEAO n° 397/12/2010",
    url: "https://www.bceao.int/sites/default/files/2017-11/decision_-_mise_en_oeuvre_politique_monnaie_et_credit-ilovepdf-compressed.pdf",
    hote: "bceao.int"
  },
  audcif: {
    nom: "Acte uniforme OHADA relatif au droit comptable et à l'information financière, adopté le 26 janvier 2017 (JO OHADA, numéro spécial du 15 février 2017)",
    court: "Acte uniforme OHADA, droit comptable",
    url: "https://jurisprudence-ohada.com/wp-content/uploads/2024/08/AUDCIF-2017_fr.pdf",
    hote: "jurisprudence-ohada.com"
  }
};

const QA = [
  {
    id: "reclamation",
    q: "Un client a déposé une réclamation écrite : en combien de temps dois-je lui répondre ?",
    mots: ["reclamation", "réclamation", "plainte", "contestation", "repondre", "répondre", "reponse", "réponse", "delai", "délai", "recepisse", "récépissé"],
    r: [
      "<b>Un mois au plus</b>, à compter de la réception de la réclamation.",
      "Au dépôt, vous remettez au client un <b>récépissé</b> : sa date vaut date de réception.",
      "Le traitement de la réclamation est <b>gratuit</b> pour le client.",
      "La règle vaut pour les banques, les établissements financiers, les microfinances contrôlées par la Commission bancaire et les émetteurs de monnaie électronique."
    ],
    refs: [
      ["circ", "art. 2 : établissements concernés"],
      ["circ", "art. 6 : enregistrement et récépissé"],
      ["circ", "art. 7 : réponse sous un mois"],
      ["circ", "art. 8 : gratuité du traitement"]
    ]
  },
  {
    id: "recours",
    q: "Le client n'est pas satisfait de notre réponse : quel recours a-t-il ?",
    mots: ["recours", "satisfait", "insatisfait", "commission bancaire", "saisir", "saisine", "escalade", "conteste"],
    r: [
      "Il peut saisir la <b>Commission bancaire de l'UMOA</b> s'il n'est pas satisfait, ou s'il n'a pas reçu de réponse dans le délai d'un mois.",
      "Il écrit au Secrétariat général de la Commission bancaire, par courrier ou par courriel, ou dépose sa demande à la Direction nationale de la BCEAO du pays.",
      "Il joint un exposé chronologique des faits et des démarches, et votre réponse, ou à défaut l'indication qu'il n'en a pas reçu.",
      "La réclamation doit d'abord vous avoir été soumise, et ne pas être déjà devant un tribunal ou un autre mécanisme de règlement. La Commission bancaire dispose ensuite de <b>60 jours</b> à compter du dossier complet."
    ],
    refs: [
      ["circ", "art. 11 : saisine de la Commission bancaire"],
      ["circ", "art. 12 : conditions de recevabilité"],
      ["circ", "art. 13 : délai d'instruction de 60 jours"]
    ]
  },
  {
    id: "gratuit",
    q: "Peut-on facturer la clôture du compte ou un retrait au guichet ?",
    mots: ["gratuit", "gratuite", "gratuité", "facturer", "frais", "payant", "cloture", "clôture", "retrait", "ouverture", "releve", "relevé", "commission", "tarif"],
    r: [
      "<b>Non.</b> La clôture de compte et le retrait d'espèces dans la banque du client, à n'importe quel guichet (sauf par chèque de guichet), font partie des services gratuits.",
      "Sont aussi gratuits, notamment : l'ouverture de compte, un relevé par mois, le relevé annuel des frais, le dépôt d'espèces (hors timbre fiscal), la domiciliation de salaire, le retrait au distributeur de sa banque, le paiement par carte dans l'UMOA, le virement de compte à compte dans la même banque, l'encaissement des virements reçus.",
      "Cette gratuité <b>n'est soumise à aucune condition</b>."
    ],
    refs: [
      ["grat", "art. 2 : gratuité sans condition"],
      ["grat", "annexe : liste des services gratuits"]
    ]
  },
  {
    id: "usure",
    q: "Quel est le taux maximum que nous pouvons appliquer sur un crédit ?",
    mots: ["usure", "usuraire", "taux maximum", "plafond", "taux", "interet", "intérêt", "maximum", "14", "24"],
    r: [
      "Depuis le <b>1er juin 2026</b>, le taux de l'usure est de <b>14 % l'an pour les banques</b>.",
      "Il est de <b>24 % l'an</b> pour les établissements financiers de crédit, les institutions de microfinance et les autres agents économiques.",
      "Le seuil se compare au <b>taux effectif global</b> du crédit, frais compris, et non au seul taux nominal."
    ],
    refs: [
      ["usure", "art. 2 : taux de l'usure"],
      ["usure", "art. 4 : entrée en vigueur au 1er juin 2026"],
      ["d397", "art. 2 : définition du prêt usuraire et du TEG"]
    ]
  },
  {
    id: "teg",
    q: "Que dois-je remettre par écrit au client avant qu'il signe son crédit ?",
    mots: ["teg", "taux effectif", "effectif global", "credit", "crédit", "pret", "prêt", "signer", "emprunteur", "information", "informer", "ecrit", "écrit"],
    r: [
      "Lors de l'octroi du crédit, vous notifiez <b>par écrit</b> : le <b>taux effectif global</b> (TEG), le taux de période et la durée de période, en même temps que le taux nominal et toutes les sommes perçues sur ce prêt.",
      "Le TEG ajoute au taux d'intérêt les frais et rémunérations de toute nature liés au prêt, y compris ceux versés à des intermédiaires. Les impôts en sont exclus.",
      "Vos conditions débitrices et créditrices sont affichées à l'entrée et aux guichets, avec un exemple chiffré du calcul du TEG.",
      "À la fin de chaque exercice, chaque client reçoit un état de l'ensemble des frais et commissions perçus."
    ],
    refs: [
      ["d397", "art. 2 : définition du taux effectif global"],
      ["d397", "art. 31 : affichage des conditions et exemple de TEG"],
      ["d397", "art. 33 : informations écrites au client"]
    ]
  },
  {
    id: "archives",
    q: "Combien de temps garder les pièces comptables et les justificatifs d'opérations ?",
    mots: ["conserver", "conservation", "archive", "archives", "garder", "comptable", "comptables", "justificatif", "justificatifs", "livres", "pieces", "pièces", "ans"],
    r: [
      "<b>Dix ans</b> pour les livres comptables, ou les documents qui en tiennent lieu, et pour les pièces justificatives.",
      "Sur support informatique, chaque écriture s'appuie sur une pièce justificative conservée sur un support fiable, qui permet de la restituer pendant ce délai."
    ],
    refs: [
      ["audcif", "art. 24 : conservation pendant dix ans"],
      ["audcif", "art. 22 : comptabilité informatisée"]
    ]
  }
];
