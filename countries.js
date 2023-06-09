let countries = [
  {
    id: 1,
    name: "Allemagne",
    capital: "Berlin",
    population: "80 996 685",
    surface: "357 022 km2",
    flag: "./flag/allemagneF.png",
    country: "./countries/allemagne.png",
    position: "2",
  },
  {
    id: 2,
    name: "Autriche",
    capital: "Vienne",
    population: "8 223 062",
    surface: "83 871 km2",
    flag: "./flag/autricheF.png",
    country: "./countries/autriche.png",
    position: "2",
  },
  {
    id: 3,
    name: "Belgique",
    capital: "Bruxelles",
    population: "11 239 755",
    surface: "30 528 km2",
    flag: "./flag/belgiqueF.png",
    country: "./countries/belgique.png",
    position: "2",
  },
  {
    id: 4,
    name: "Bulgarie",
    capital: "Sofia",
    population: "7 246 000",
    surface: "110 910 km2",
    flag: "./flag/bulgarieF.png",
    country: "./countries/bulgarie.png",
    position: "2",
  },
  {
    id: 5,
    name: "Chypre",
    capital: "Nicosie",
    population: "858 000",
    surface: "9 251 km2",
    flag: "./flag/chypreF.png",
    country: "./countries/chypre.png",
    position: "2",
  },
  {
    id: 6,
    name: "Croatie",
    capital: "Copenhague",
    population: "4 246 000",
    surface: "56 642 km2",
    flag: "./flag/croatieF.png",
    country: "./countries/croatie.png",
    position: "2",
  },
  {
    id: 7,
    name: "Danemark",
    capital: "Copenhague",
    population: "5 627 000",
    surface: "43 100 km2",
    flag: "./flag/danemarkF.png",
    country: "./countries/danemark.png",
    position: "2",
  },
  {
    id: 8,
    name: "Espagne",
    capital: "Madrid",
    population: "47 385 000",
    surface: "9 251 km2",
    flag: "./flag/espagneF.png",
    country: "./countries/espagne.png",
    position: "2",
  },
  {
    id: 9,
    name: "Estonie",
    capital: "Tallinn",
    population: "1 316 000",
    surface: "45 227 km2",
    flag: "./flag/estonieF.png",
    country: "./countries/estonie.png",
    position: "2",
  },
  {
    id: 10,
    name: "Finlande",
    capital: "Helsinki",
    population: "5 451 000",
    surface: "337 100 km2",
    flag: "./flag/finlandeF.png",
    country: "./countries/finlande.png",
    position: "2",
  },
  {
    id: 11,
    name: "France",
    capital: "Paris",
    population: "67 800 000",
    surface: "632 733 km2",
    flag: "./flag/franceF.png",
    country: "./countries/france.png",
    position: "2",
  },
  {
    id: 12,
    name: "Grèce",
    capital: "Athènes",
    population: "10 993 000",
    surface: "132 000 km2",
    flag: "./flag/greceF.png",
    country: "./countries/grece.png",
    position: "2",
  },
  {
    id: 13,
    name: "Hongrie",
    capital: "Budapest",
    population: "9 879 000",
    surface: "93 032 km2",
    flag: "./flag/hongrieF.png",
    country: "./countries/hongrie.png",
    position: "2",
  },
  {
    id: 14,
    name: "Irlande",
    capital: "Dublin",
    population: "4 604 000",
    surface: "70 300 km2",
    flag: "./flag/irlandeF.png",
    country: "./countries/irlande.png",
    position: "2",
  },
  {
    id: 15,
    name: "Italie",
    capital: "Rome",
    population: "60 783 000",
    surface: "301 300 km2",
    flag: "./flag/italieF.png",
    country: "./countries/italie.png",
    position: "2",
  },
  {
    id: 16,
    name: "Lettonie",
    capital: "Riga",
    population: "2 001 000",
    surface: "64 597 km2",
    flag: "./flag/lettonieF.png",
    country: "./countries/lettonie.png",
    position: "2",
  },
  {
    id: 17,
    name: "Lituanie",
    capital: "Vilnius",
    population: "2 943 000",
    surface: "65 300 km2",
    flag: "./flag/lituanieF.png",
    country: "./countries/lituanie.png",
    position: "2",
  },
  {
    id: 18,
    name: "Luxembourg",
    capital: "Luxembourg",
    population: "550 000",
    surface: "2 600 km2",
    flag: "./flag/luxembourgF.png",
    country: "./countries/luxembourg.png",
    position: "2",
  },
  {
    id: 19,
    name: "Malte",
    capital: "La Valette",
    population: "425 000",
    surface: "316 km2",
    flag: "./flag/malteF.png",
    country: "./countries/malte.png",
    position: "2",
  },
  {
    id: 20,
    name: "Pays-bas",
    capital: "Amsterdam",
    population: "16 829 000",
    surface: "41 200 km2",
    flag: "./flag/paysBasF.png",
    country: "./countries/paysBas.png",
    position: "2",
  },
  {
    id: 21,
    name: "Pologne",
    capital: "Varsovie",
    population: "38 496 000",
    surface: "312 678 km2",
    flag: "./flag/pologneF.png",
    country: "./countries/pologne.png",
    position: "2",
  },
  {
    id: 22,
    name: "Portugal",
    capital: "Lisbonne",
    population: "10 427 000",
    surface: "92 400 km2",
    flag: "./flag/portugalF.png",
    country: "./countries/portugal.png",
    position: "2",
  },
  {
    id: 23,
    name: "Roumanie",
    capital: "Bucarest",
    population: "19 943 000",
    surface: "238 391 km2",
    flag: "./flag/roumanieF.png",
    country: "./countries/roumanie.png",
    position: "2",
  },
  {
    id: 24,
    name: "Slovaquie",
    capital: "Bratislava",
    population: "5 416 000",
    surface: "49 035 km2",
    flag: "./flag/slovaquieF.png",
    country: "./countries/slovaquie.png",
    position: "2",
  },
  {
    id: 25,
    name: "Slovénie",
    capital: "Ljubljana",
    population: "2 061 000",
    surface: "20 273 km2",
    flag: "./flag/slovenieF.png",
    country: "./countries/slovenie.png",
    position: "2",
  },
  {
    id: 26,
    name: "Suède",
    capital: "Stockholm",
    population: "9 645 000",
    surface: "450 000 km2",
    flag: "./flag/suedeF.png",
    country: "./countries/suede.png",
    position: "2",
  },
  {
    id: 27,
    name: "République tchèque",
    capital: "Prague",
    population: "10 512 000",
    surface: "78 870 km2",
    flag: "./flag/tchequieF.png",
    country: "./countries/tchequie.png",
    position: "2",
  },
  {
    id: 28,
    name: "Albanie",
    capital: "Tirana",
    population: "3 088 385",
    surface: "28 748 km2",
    flag: "./flag/albanieF.png",
    country: "./countries/albanie.png",
    position: "2",
  },
  {
    id: 29,
    name: "Bosnie-herzégovine",
    capital: "Sarajevo",
    population: "3 824 782",
    surface: "51 197 km2",
    flag: "./flag/bosnieHerzegovineF.png",
    country: "./countries/bosnieHerzegovine.png",
    position: "2",
  },
  {
    id: 30,
    name: "Islande",
    capital: "Reykjavik",
    population: "376 248",
    surface: "102 775 km2",
    flag: "./flag/islandeF.png",
    country: "./countries/islande.png",
    position: "2",
  },
  {
    id: 31,
    name: "Kosovo",
    capital: "Pristina",
    population: "1 958 773",
    surface: "10 908 km2",
    flag: "./flag/kosovoF.png",
    country: "./countries/kosovo.png",
    position: "2",
  },
  {
    id: 32,
    name: "Liechtenstein",
    capital: "Vaduz",
    population: "39 039",
    surface: "160 km2",
    flag: "./flag/liechtensteinF.png",
    country: "./countries/liechtenstein.png",
    position: "2",
  },
  {
    id: 33,
    name: "Macédoine du nord",
    capital: "Skopje",
    population: "1 836 713",
    surface: "25 713 km2",
    flag: "./flag/macedoineDuNordF.png",
    country: "./countries/macedoineDuNord.png",
    position: "2",
  },
  {
    id: 34,
    name: "Monténégro",
    capital: "Podgorica",
    population: "13 812",
    surface: "13 812 km2",
    flag: "./flag/montenegroF.png",
    country: "./countries/montenegro.png",
    position: "2",
  },
  {
    id: 35,
    name: "Norvège",
    capital: "Oslo",
    population: "5 488 984",
    surface: "385 207 km2",
    flag: "./flag/norvegeF.png",
    country: "./countries/norvege.png",
    position: "2",
  },
  {
    id: 36,
    name: "Royaume-uni",
    capital: "Londres",
    population: "67 886 004",
    surface: "246 690 km2",
    flag: "./flag/royaumeUniF.png",
    country: "./countries/royaumeUni.png",
    position: "2",
  },
  {
    id: 37,
    name: "Serbie",
    capital: "Belgrade",
    population: "6 693 375",
    surface: "88 361 km2",
    flag: "./flag/serbieF.png",
    country: "./countries/serbie.png",
    position: "2",
  },
  {
    id: 38,
    name: "Suisse",
    capital: "Berne",
    population: "8 738 791",
    surface: "41 285 km2",
    flag: "./flag/suisseF.png",
    country: "./countries/suisse.png",
    position: "2",
  },
  {
    id: 39,
    name: "Turquie",
    capital: "Ankara",
    population: "84 680 273",
    surface: "783 562 km2",
    flag: "./flag/turquieF.png",
    country: "./countries/turquie.png",
    position: "2",
  },
  {
    id: 40,
    name: "Ukraine",
    capital: "Kiev",
    population: "44 983 019",
    surface: "603 700 km2",
    flag: "./flag/ukraineF.png",
    country: "./countries/ukraine.png",
    position: "2",
  },
  {
    id: 41,
    name: "Russie",
    capital: "Moscou",
    population: "146 170 015",
    surface: "17 234 033 km2",
    flag: "./flag/russieF.png",
    country: "./countries/sorry.png",
    position: "1",
  },
  {
    id: 42,
    name: "Biélorussie",
    capital: "Minsk",
    population: "9 477 918",
    surface: "207 600 km2",
    flag: "./flag/bielorussieF.png",
    country: "./countries/sorry.png",
    position: "1",
  },
  {
    id: 43,
    name: "Kazakhstan",
    capital: "Astana",
    population: "425 000",
    surface: "19 245 793 km2",
    flag: "./flag/kazakhstanF.png",
    country: "./countries/sorry.png",
    position: "1",
  },
  {
    id: 44,
    name: "Géorgie",
    capital: "Tbilissi",
    population: "3 997 000",
    surface: "69 700 km2",
    flag: "./flag/georgieF.png",
    country: "./countries/sorry.png",
    position: "1",
  },
  {
    id: 45,
    name: "Moldavie",
    capital: "Chisinau",
    population: "2 681 735",
    surface: "33 851 km2",
    flag: "./flag/moldavieF.png",
    country: "./countries/sorry.png",
    position: "1",
  },
  {
    id: 46,
    name: "Arménie",
    capital: "Erevan",
    population: "3 021 324",
    surface: "29 743 km2",
    flag: "./flag/armenieF.png",
    country: "./countries/sorry.png",
    position: "1",
  },
  {
    id: 47,
    name: "Andorré",
    capital: "Andorra la vella",
    population: "79 535",
    surface: "468 km2",
    flag: "./flag/andorreF.png",
    country: "./countries/sorry.png",
    position: "1",
  },
  {
    id: 48,
    name: "Saint-marin",
    capital: "Saint-marin",
    population: "33,745",
    surface: "33 938 km2",
    flag: "./flag/saintMarinF.png",
    country: "./countries/sorry.png",
    position: "1",
  },
  {
    id: 49,
    name: "Monaco",
    capital: "Monaco",
    population: "39 150",
    surface: "2 km2",
    flag: "./flag/monacoF.png",
    country: "./countries/sorry.png",
    position: "1",
  },
  {
    id: 50,
    name: "Vatican",
    capital: "Stockholm",
    population: "environ 800",
    surface: "0.5 km2",
    flag: "./flag/vaticanF.png",
    country: "./countries/sorry.png",
    position: "1",
  },
];

let NameCountry1 = [
  "Allemagne",
  "Autriche",
  "Belgique",
  "Bulgarie",
  "Chypre",
  "Croatie",
  "Danemark",
  "Espagne",
  "Estonie",
  "Finlande",
  "France",
  "Grèce",
  "Hongrie",
  "Irlande",
  "Italie",
  "Lettonie",
  "Lituanie",
  "Luxembourg",
  "Malte",
  "Pays-bas",
  "Pologne",
  "Portugal",
  "Roumanie",
  "Slovaquie",
  "Slovénie",
  "Suède",
  "République tchèque",
  "Albanie",
  "Andorré",
  "Arménie",
  "Biélorussie",
  "Bosnie-Herzégovine",
  "Géorgie",
  "Islande",
  "Kazakhstan",
  "Kosovo",
  "Liechtenstein",
  "Macédoine du nord",
  "Moldavie",
  "Monaco",
  "Monténégro",
  "Norvège",
  "Royaume-uni",
  "Russie",
  "Saint-marin",
  "Serbie",
  "Suisse",
  "Turquie",
  "Ukraine",
  "Vatican",
];

let NameCountry = NameCountry1.sort();