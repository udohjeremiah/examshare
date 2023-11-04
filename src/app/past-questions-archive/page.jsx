import LinkList from "@/components/LinkList";
import BreadCrumb from "@/components/BreadCrumb";

export const metadata = {
  title: "Past Questions Archive | ExamShare",
};

// source from https://www.nuc.edu.ng/nigerian-univerisities
const nigerianUniversities = {
  a: [
    {
      name: "Abia State University, Uturu",
      route: "past-questions-archive/abiastateuniversity",
    },
    {
      name: "Abubakar Tafawa Balewa University, Bauchi",
      route: "past-questions-archive/atbu",
    },
    {
      name: "Achievers University, Owo",
      route: "past-questions-archive/achievers",
    },
    {
      name: "Adamawa State University, Mubi",
      route: "past-questions-archive/adsu",
    },
    {
      name: "Adekunle Ajasin University, Akungba",
      route: "past-questions-archive/aaua",
    },
    {
      name: "Adeleke University, Ede",
      route: "past-questions-archive/adelekeuniversity",
    },
    {
      name: "Admiralty University Ibusa, Delta State",
      route: "past-questions-archive/aui",
    },
    {
      name: "Afe Babalola University, Ado-Ekiti - Ekiti State",
      route: "past-questions-archive/abuad",
    },
    {
      name: "African University of Science & Technology, Abuja",
      route: "past-questions-archive/aust",
    },
    {
      name: "Ahmadu Bello University, Zaria",
      route: "past-questions-archive/abu",
    },
    {
      name: "Ahman Pategi University, Kwara State",
      route: "past-questions-archive/apu",
    },
    {
      name: "Air Force Institute of Technology, Kaduna",
      route: "past-questions-archive/afit",
    },
    {
      name: "Ajayi Crowther University, Ibadan",
      route: "past-questions-archive/acu",
    },
    {
      name: "Akwa Ibom State University, Ikot Akpaden",
      route: "past-questions-archive/aksu",
    },
    {
      name: "Al-Ansar University, Maiduguri, Borno",
      route: "past-questions-archive/aaumaiduguri",
    },
    {
      name: "Al-Bayan University, Ankpa, Kogi State",
      route: "past-questions-archive/abua",
    },
    {
      name: "Al-Hikmah University, Ilorin",
      route: "past-questions-archive/alhikmah",
    },
    {
      name: "Al-Istiqama University, Sumaila, Kano State",
      route: "past-questions-archive/aius",
    },
    {
      name: "Al-Muhibbah Open University, Abuja",
      route: "past-questions-archive/amou",
    },
    {
      name: "Al-Qalam University, Katsina",
      route: "past-questions-archive/auk",
    },
    {
      name: "Aletheia University, Ago-Iwoye Ogun State",
      route: "past-questions-archive/auai",
    },
    {
      name: "Alex Ekwueme University, Ndufu-Alike, Ebonyi State",
      route: "past-questions-archive/funai",
    },
    {
      name: "Amadeus University, Amizi, Abia State",
      route: "past-questions-archive/aua",
    },
    {
      name: "Amaj University, Kwali, Abuja",
      route: "past-questions-archive/auka",
    },
    {
      name: "Ambrose Alli University, Ekpoma",
      route: "past-questions-archive/aauekpoma",
    },
    {
      name: "American University of Nigeria, Yola",
      route: "past-questions-archive/aun",
    },
    {
      name: "Anan University, Kwall, Plateau State",
      route: "past-questions-archive/aukp",
    },
    {
      name: "Anchor University Ayobo, Lagos State",
      route: "past-questions-archive/aul",
    },
    {
      name: "Arthur Javis University Akpoyubo Cross river State",
      route: "past-questions-archive/arthurjarvisuniversity",
    },
    { name: "Atiba University Oyo", route: "past-questions-archive/auo" },
    {
      name: "Augustine University",
      route: "past-questions-archive/augustineuniversity",
    },
    {
      name: "Ave Maria University, Piyanko, Nasarawa State",
      route: "past-questions-archive/amup",
    },
    {
      name: "Azman University, Kano State",
      route: "past-questions-archive/auks",
    },
  ],

  b: [
    {
      name: "Baba Ahmed University, Kano State",
      route: "past-questions-archive/bauk",
    },
    {
      name: "Babcock University, Ilishan-Remo",
      route: "past-questions-archive/babcock",
    },
    {
      name: "Bamidele Olumilua University of Science and Technology Ikere, Ekiti State",
      route: "past-questions-archive/bouesti",
    },
    {
      name: "Bauchi State University, Gadau",
      route: "past-questions-archive/basug",
    },
    { name: "Bayelsa Medical University", route: "past-questions-archive/bmu" },
    { name: "Bayero University, Kano", route: "past-questions-archive/buk" },
    { name: "Baze University", route: "past-questions-archive/bazeuniversity" },
    {
      name: "Bells University of Technology, Otta",
      route: "past-questions-archive/bellsuniversity",
    },
    {
      name: "Benson Idahosa University, Benin City",
      route: "past-questions-archive/biu",
    },
    {
      name: "Benue State University, Makurdi",
      route: "past-questions-archive/bsum",
    },
    {
      name: "Bingham University, New Karu",
      route: "past-questions-archive/binghamuni",
    },
    {
      name: "Bornu State University, Maiduguri",
      route: "past-questions-archive/bosum",
    },
    { name: "Bowen University, Iwo", route: "past-questions-archive/bowen" },
    {
      name: "British Canadian University, Obufu Cross River State",
      route: "past-questions-archive/bcuo",
    },
  ],

  c: [
    {
      name: "Caleb University, Lagos",
      route: "past-questions-archive/calebuniversity",
    },
    {
      name: "Canadian University of Nigeria, Abuja",
      route: "past-questions-archive/cuna",
    },
    {
      name: "Capital City University, Kano State",
      route: "past-questions-archive/ccuk",
    },
    {
      name: "Caritas University, Enugu",
      route: "past-questions-archive/caritasuni",
    },
    {
      name: "Chrisland University",
      route: "past-questions-archive/chrislanduniversity",
    },
    {
      name: "Christopher University Mowe",
      route: "past-questions-archive/christopheruniversity",
    },
    {
      name: "Chukwuemeka Odumegwu Ojukwu University, Uli",
      route: "past-questions-archive/coou",
    },
    {
      name: "Claretian University of Nigeria, Nekede, Imo State",
      route: "past-questions-archive/cunk",
    },
    {
      name: "Clifford University Owerrinta Abia State",
      route: "past-questions-archive/clifforduni",
    },
    {
      name: "Coal City University Enugu State",
      route: "past-questions-archive/ccu",
    },
    {
      name: "College of Petroleum and Energy Studies, Kaduna State",
      route: "past-questions-archive/cpes",
    },
    {
      name: "Confluence University of Science and Technology Osara, Kogi",
      route: "past-questions-archive/custech",
    },
    {
      name: "Cosmopolitan University Abuja",
      route: "past-questions-archive/cua",
    },
    {
      name: "Covenant University Ota",
      route: "past-questions-archive/covenantuniversity",
    },
    {
      name: "Crawford University Igbesa",
      route: "past-questions-archive/crawforduniversity",
    },
    {
      name: "Crescent University",
      route: "past-questions-archive/crescent-university",
    },
    {
      name: "Cross River State University of Technology, Calabar",
      route: "past-questions-archive/crutech",
    },
    {
      name: "Crown Hill University Eiyenkorin, Kwara State",
      route: "past-questions-archive/crownhilluniversity",
    },
  ],

  d: [
    {
      name: "David Nweze Umahi Federal University of Medical Sciences, Uburu",
      route: "past-questions-archive/kdums",
    },
    {
      name: "Delta State University Abraka",
      route: "past-questions-archive/delsu",
    },
    {
      name: "Delta University of Science and Technology, Ozoro",
      route: "past-questions-archive/dsust",
    },
    {
      name: "Dennis Osadebe University, Asaba",
      route: "past-questions-archive/dou",
    },
    {
      name: "Dominion University Ibadan, Oyo State",
      route: "past-questions-archive/dui",
    },
  ],

  e: [
    {
      name: "Ebonyi State University, Abakaliki",
      route: "past-questions-archive/ebsu",
    },
    {
      name: "Edo State University Uzairue",
      route: "past-questions-archive/edouniversity",
    },
    {
      name: "Edusoko University, Bida, Niger State",
      route: "past-questions-archive/eub",
    },
    {
      name: "Edwin Clark University, Kaigbodo",
      route: "past-questions-archive/edwinclarkuniversity",
    },
    { name: "Ekiti State University", route: "past-questions-archive/eksu" },
    {
      name: "Eko University of Medical and Health Sciences Ijanikin, Lagos",
      route: "past-questions-archive/ekounivmed",
    },
    {
      name: "El-Amin University, Minna, Niger State",
      route: "past-questions-archive/eaum",
    },
    {
      name: "Elizade University, Ilara-Mokin",
      route: "past-questions-archive/elizadeuniversity",
    },
    {
      name: "Elrazi Medical University Yargaya University, Kano State",
      route: "past-questions-archive/emuy",
    },
    {
      name: "Emanuel Alayande University of Education Oyo",
      route: "past-questions-archive/eaue",
    },
    {
      name: "Enugu State University of Medical and Applied Sciences, Igbo-Eno",
      route: "past-questions-archive/esut",
    },
    {
      name: "Enugu State University of Science and Technology, Enugu",
      route: "past-questions-archive/esust",
    },
    {
      name: "European University of Nigeria, Duboyi, FCT",
      route: "past-questions-archive/eunb",
    },
    {
      name: "Evangel University, Akaeze",
      route: "past-questions-archive/evangeluniversity",
    },
  ],

  f: [
    {
      name: "Federal University Gashua, Yobe",
      route: "past-questions-archive/fugashua",
    },
    {
      name: "Federal University of Agriculture, Abeokuta",
      route: "past-questions-archive/unaab",
    },
    {
      name: "Federal University of Agriculture, Zuru, Kebbi State",
      route: "past-questions-archive/fuaz",
    },
    {
      name: "Federal University of Health Sciences, Azare, Bauchi State",
      route: "past-questions-archive/fuhsa",
    },
    {
      name: "Federal University of Health Sciences, Ila Orangun, Osun State",
      route: "past-questions-archive/fuhsio",
    },
    {
      name: "Federal University of Health Technology, Otukpo Benue State",
      route: "past-questions-archive/fuht",
    },
    {
      name: "Federal University of Petroleum Resources, Effurun",
      route: "past-questions-archive/fupre",
    },
    {
      name: "Federal University of Technology, Akure",
      route: "past-questions-archive/futa",
    },
    {
      name: "Federal University of Technology, Babura, Jigawa State",
      route: "past-questions-archive/futb",
    },
    {
      name: "Federal University of Technology, Ikot Abasi, Akwa Ibom State",
      route: "past-questions-archive/futi",
    },
    {
      name: "Federal University of Technology, Minna",
      route: "past-questions-archive/futminna",
    },
    {
      name: "Federal University of Technology, Owerri",
      route: "past-questions-archive/futo",
    },
    {
      name: "Federal University of Transportation Daura, Katsina",
      route: "past-questions-archive/futd",
    },
    {
      name: "Federal University, Birnin Kebbi",
      route: "past-questions-archive/fubk",
    },
    {
      name: "Federal University, Dutse, Jigawa State",
      route: "past-questions-archive/fud",
    },
    {
      name: "Federal University, Dutsin-Ma, Katsina",
      route: "past-questions-archive/fudutsinma",
    },
    {
      name: "Federal University, Gusau Zamfara",
      route: "past-questions-archive/fugusau",
    },
    {
      name: "Federal University, Kashere, Gombe State",
      route: "past-questions-archive/fukashere",
    },
    {
      name: "Federal University, Lafia, Nasarawa State",
      route: "past-questions-archive/fulafia",
    },
    {
      name: "Federal University, Lokoja, Kogi State",
      route: "past-questions-archive/fulokoja",
    },
    {
      name: "Federal University, Otuoke, Bayelsa",
      route: "past-questions-archive/fuotuoke",
    },
    {
      name: "Federal University, Oye-Ekiti, Ekiti State",
      route: "past-questions-archive/fuoye",
    },
    {
      name: "Federal University, Wukari, Taraba State",
      route: "past-questions-archive/fuwt",
    },
    {
      name: "First Technical University Ibadan",
      route: "past-questions-archive/tech-u",
    },
    {
      name: "Fountain Unveristy, Oshogbo",
      route: "past-questions-archive/fuo",
    },
    {
      name: "Franco British International University, Kaduna State",
      route: "past-questions-archive/fbiu",
    },
  ],

  g: [
    {
      name: "Gerar University of Medical Science Imope Ijebu, Ogun State.",
      route: "past-questions-archive/gumsi",
    },
    {
      name: "Godfrey Okoye University, Ugwuomu-Nike - Enugu State",
      route: "past-questions-archive/gouni",
    },
    {
      name: "Gombe State Univeristy, Gombe",
      route: "past-questions-archive/gsu",
    },
    {
      name: "Gombe State University of Science and Technology",
      route: "past-questions-archive/gsust",
    },
    {
      name: "Greenfield University, Kaduna",
      route: "past-questions-archive/gfu",
    },
    {
      name: "Gregory University, Uturu",
      route: "past-questions-archive/gregoryuniversity",
    },
  ],

  h: [
    {
      name: "Hallmark University, Ijebi Itele, Ogun",
      route: "past-questions-archive/hallmark",
    },
    {
      name: "Havilla University, Nde-Ikom, Cross River State",
      route: "past-questions-archive/huni",
    },
    {
      name: "Hensard University, Toru-Orua, Sagbama, Bayelsa State",
      route: "past-questions-archive/huto",
    },
    {
      name: "Hezekiah University, Umudi",
      route: "past-questions-archive/hezekiah",
    },
    {
      name: "Hillside University of Science and Technology, Okemisi, Ekiti State",
      route: "past-questions-archive/husto",
    },
    {
      name: "Huda University, Gusau, Zamafara State",
      route: "past-questions-archive/hug",
    },
  ],

  i: [
    {
      name: "Ibrahim Badamasi Babangida University, Lapai",
      route: "past-questions-archive/ibbu",
    },
    {
      name: "Iconic Open University, Sokoto State.",
      route: "past-questions-archive/icou",
    },
    {
      name: "Igbinedion University Okada",
      route: "past-questions-archive/iuokada",
    },
    {
      name: "Ignatius Ajuru University of Education,Rumuolumeni",
      route: "past-questions-archive/iaue",
    },
    {
      name: "Imo State University, Owerri",
      route: "past-questions-archive/imsu",
    },
  ],

  j: [
    {
      name: "James Hope University, Lagos, Lagos State",
      route: "past-questions-archive/jhul",
    },
    {
      name: "Jewel University, Gombe state",
      route: "past-questions-archive/jug",
    },
    {
      name: "Joseph Ayo Babalola University, Ikeji-Arakeji",
      route: "past-questions-archive/jabu",
    },
    {
      name: "Joseph Sarwuan Tarka University, Makurdi",
      route: "past-questions-archive/uam",
    },
  ],

  k: [
    {
      name: "Kaduna State University, Kaduna",
      route: "past-questions-archive/kasu",
    },
    {
      name: "Kano University of Science & Technology, Wudil",
      route: "past-questions-archive/kust",
    },
    {
      name: "Karl-Kumm University, Vom, Plateau State",
      route: "past-questions-archive/kku",
    },
    {
      name: "Kebbi State University of Science and Technology, Aliero",
      route: "past-questions-archive/ksusta",
    },
    {
      name: "Khadija University, Majia, Jigawa State",
      route: "past-questions-archive/kum",
    },
    {
      name: "Khalifa Isiyaku Rabiu University, Kano",
      route: "past-questions-archive/kiru",
    },
    {
      name: "Kings University, Ode Omu",
      route: "past-questions-archive/kingsuniversity",
    },
    {
      name: "Kingsley Ozumba Mbadiwe University Ogboko, Imo State",
      route: "past-questions-archive/komu",
    },
    {
      name: "Kogi State University, Kabba",
      route: "past-questions-archive/ksuk",
    },
    {
      name: "Kola Daisi University Ibadan, Oyo State",
      route: "past-questions-archive/koladaisiuniversity",
    },
    {
      name: "Kwara State University, Ilorin",
      route: "past-questions-archive/kwasu",
    },
    {
      name: "Kwararafa University, Wukari",
      route: "past-questions-archive/fuwukari",
    },
  ],

  l: [
    {
      name: "Ladoke Akintola University of Technology, Ogbomoso",
      route: "past-questions-archive/lautech",
    },
    {
      name: "Lagos State University of Education, Ijanikin",
      route: "past-questions-archive/lsue",
    },
    {
      name: "Lagos State University of Science and Technology Ikorodu",
      route: "past-questions-archive/lsust",
    },
    {
      name: "Lagos State University, Ojo",
      route: "past-questions-archive/lasu",
    },
    {
      name: "Landmark University, Omu-Aran.",
      route: "past-questions-archive/lmu",
    },
    {
      name: "Lead City University, Ibadan",
      route: "past-questions-archive/lcu",
    },
    {
      name: "Legacy University, Okija Anambra State",
      route: "past-questions-archive/legacyuniversity",
    },
    {
      name: "Lux Mundi University Umuahia, Abia State",
      route: "past-questions-archive/lmuu",
    },
  ],

  m: [
    {
      name: "Madonna University, Okija",
      route: "past-questions-archive/madonnauniversity",
    },
    {
      name: "Maduka University, Ekwegbe, Enugu State",
      route: "past-questions-archive/mue",
    },
    {
      name: "Maranathan University, Mgbidi, Imo State",
      route: "past-questions-archive/mum",
    },
    {
      name: "Margaret Lawrence University, Umunede, Delta State",
      route: "past-questions-archive/mluu",
    },
    {
      name: "Maryam Abacha American University of Nigeria, Kano State",
      route: "past-questions-archive/maaun",
    },
    {
      name: "Mcpherson University, Seriki Sotayo, Ajebo",
      route: "past-questions-archive/mcu",
    },
    {
      name: "Mercy Medical University, Iwo, Ogun State",
      route: "past-questions-archive/mmui",
    },
    {
      name: "Mewar International University, Masaka, Nasarawa State",
      route: "past-questions-archive/miu",
    },
    {
      name: "Michael Okpara University of Agricultural Umudike",
      route: "past-questions-archive/mouau",
    },
    {
      name: "Micheal & Cecilia Ibru University",
      route: "past-questions-archive/mciu",
    },
    {
      name: "Miva Open University, Abuja FCT",
      route: "past-questions-archive/moua",
    },
    {
      name: "Modibbo Adama University of Technology, Yola",
      route: "past-questions-archive/mautech",
    },
    {
      name: "Moshood Abiola University of Science and Technology Abeokuta",
      route: "past-questions-archive/mausta",
    },
    { name: "Mountain Top University", route: "past-questions-archive/mtu" },
    {
      name: "Mudiame University, Irrua, Edo State",
      route: "past-questions-archive/muie",
    },
    {
      name: "Muhammad Kamalud University Kwara",
      route: "past-questions-archive/mkuk",
    },
  ],

  n: [
    {
      name: "NOK University, Kachia, Kaduna State",
      route: "past-questions-archive/nukk",
    },
    {
      name: "Nasarawa State University Keffi",
      route: "past-questions-archive/nsuk",
    },
    {
      name: "National Open University of Nigeria, Lagos",
      route: "past-questions-archive/nou",
    },
    {
      name: "Newgate University, Minna, Niger State.",
      route: "past-questions-archive/num",
    },
    {
      name: "Niger Delta University Yenagoa",
      route: "past-questions-archive/ndu",
    },
    {
      name: "Niger State University of Education, Minna",
      route: "past-questions-archive/nsue",
    },
    {
      name: "Nigeria Police Academy Wudil",
      route: "past-questions-archive/polac",
    },
    {
      name: "Nigerian Army University Biu",
      route: "past-questions-archive/naub",
    },
    {
      name: "Nigerian British University, Asa, Abia State",
      route: "past-questions-archive/nbua",
    },
    {
      name: "Nigerian Defence Academy Kaduna",
      route: "past-questions-archive/nda",
    },
    {
      name: "Nigerian Maritime University Okerenkoko, Delta State",
      route: "past-questions-archive/nmu",
    },
    {
      name: "Nigerian University of Technology and Management, Apapa, Lagos State",
      route: "past-questions-archive/nutm",
    },
    {
      name: "Nile University of Nigeria, Abuja",
      route: "past-questions-archive/nileuniversity",
    },
    {
      name: "Nnamdi Azikiwe University, Awka",
      route: "past-questions-archive/unizik",
    },
    {
      name: "NorthWest University Sokoto State",
      route: "past-questions-archive/nuss",
    },
    {
      name: "Novena University, Ogume",
      route: "past-questions-archive/novenauniversity",
    },
  ],

  o: [
    {
      name: "Obafemi Awolowo University,Ile-Ife",
      route: "past-questions-archive/oauife",
    },
    {
      name: "Obong University, Obong Ntak",
      route: "past-questions-archive/obonguniversity",
    },
    {
      name: "Oduduwa University, Ipetumodu - Osun State",
      route: "past-questions-archive/oduduwauniversity",
    },
    {
      name: "Olabisi Onabanjo University, Ago Iwoye",
      route: "past-questions-archive/oouagoiwoye",
    },
    {
      name: "Ondo State University of Medical Sciences",
      route: "past-questions-archive/unimed",
    },
    {
      name: "Ondo State University of Science and Technology Okitipupa",
      route: "past-questions-archive/osustech",
    },
    {
      name: "Osun State University Osogbo",
      route: "past-questions-archive/uniosun",
    },
  ],

  p: [
    {
      name: "PAMO University of Medical Sciences, Portharcourt",
      route: "past-questions-archive/pums",
    },
    {
      name: "PEN Resource University, Gombe",
      route: "past-questions-archive/pru",
    },
    {
      name: "Pan-Atlantic University, Lagos",
      route: "past-questions-archive/pau",
    },
    {
      name: "Paul University, Awka - Anambra State",
      route: "past-questions-archive/pauluniversity",
    },
    {
      name: "PeaceLand University, Enugu State",
      route: "past-questions-archive/pues",
    },
    {
      name: "Peter University, Achina-Onneh Anambra State",
      route: "past-questions-archive/puao",
    },
    {
      name: "Philomath University, Kuje, Abuja",
      route: "past-questions-archive/puka",
    },
    {
      name: "Phoenix University, Agwada, Nasarawa State",
      route: "past-questions-archive/puan",
    },
    {
      name: "Plateau State University Bokkos",
      route: "past-questions-archive/plasu",
    },
    {
      name: "Precious Cornerstone University, Oyo",
      route: "past-questions-archive/pcu",
    },
    {
      name: "Prime University, Kuje, FCT Abuja",
      route: "past-questions-archive/primeuka",
    },
    {
      name: "Prince Abubakar Audu University Anyigba",
      route: "past-questions-archive/ksu",
    },
  ],

  r: [
    { name: "Rayhaan University, Kebbi", route: "past-questions-archive/ruk" },
    { name: "Redeemer's University, Ede", route: "past-questions-archive/run" },
    {
      name: "Renaissance University, Enugu",
      route: "past-questions-archive/rnu",
    },
    {
      name: "Rhema University, Obeama-Asa - Rivers State",
      route: "past-questions-archive/rhemauniversity",
    },
    {
      name: "Ritman University, Ikot Ekpene, Akwa Ibom",
      route: "past-questions-archive/ritmanuniversity",
    },
    { name: "Rivers State University", route: "past-questions-archive/rsu" },
  ],

  s: [
    {
      name: "Sa'adatu Rimi University of Education",
      route: "past-questions-archive/srue",
    },
    {
      name: "Saisa University of Medical Sciences and Technology, Sokoto State",
      route: "past-questions-archive/sumst",
    },
    {
      name: "Salem University, Lokoja",
      route: "past-questions-archive/salemuniversity",
    },
    {
      name: "Sam Maris University, Ondo",
      route: "past-questions-archive/smuo",
    },
    {
      name: "Samuel Adegboyega University, Ogwa.",
      route: "past-questions-archive/sau",
    },
    {
      name: "Shanahan University Onitsha, Anambra State",
      route: "past-questions-archive/suoa",
    },
    {
      name: "Shehu Shagari University of Education, Sokoto",
      route: "past-questions-archive/ssue",
    },
    { name: "Skyline University, Kano", route: "past-questions-archive/sun" },
    { name: "Sokoto State University", route: "past-questions-archive/ssu" },
    {
      name: "Southwestern University, Oku Owa",
      route: "past-questions-archive/southwesternuniversity",
    },
    {
      name: "Spiritan University, Nneochi Abia State",
      route: "past-questions-archive/spiritanuniversity",
    },
    {
      name: "Sports University, Idumuje, Ugboko, Delta State",
      route: "past-questions-archive/suiu",
    },
    {
      name: "Sule Lamido University, Kafin Hausa, Jigawa",
      route: "past-questions-archive/slu",
    },
    {
      name: "Summit University, Offa",
      route: "past-questions-archive/summituniversity",
    },
  ],

  t: [
    {
      name: "Tai Solarin University of Education Ijebu Ode",
      route: "past-questions-archive/tasued",
    },
    {
      name: "Tansian University, Umunya",
      route: "past-questions-archive/tansianuniversity",
    },
    {
      name: "Taraba State University, Jalingo",
      route: "past-questions-archive/tsuniversity",
    },
    {
      name: "The Duke Medical University, Calabar, Cross River State",
      route: "past-questions-archive/tdmu",
    },
    {
      name: "Thomas Adewumi University, Oko-Irese, Kwara State",
      route: "past-questions-archive/tau",
    },
    {
      name: "Topfaith University, Mkpatak, Akwa Ibom State",
      route: "past-questions-archive/tuma",
    },
    {
      name: "Trinity University Ogun State",
      route: "past-questions-archive/trinityuniversity",
    },
  ],

  u: [
    {
      name: "Umar Musa Yar' Adua University Katsina",
      route: "past-questions-archive/umyu",
    },
    {
      name: "University of Abuja, Gwagwalada",
      route: "past-questions-archive/uniabuja",
    },
    {
      name: "University of Africa Toru Orua, Bayelsa State",
      route: "past-questions-archive/uat",
    },
    {
      name: "University of Agriculture and Environmental Sciences Umuagwo, Imo State",
      route: "past-questions-archive/uaes",
    },
    { name: "University of Benin", route: "past-questions-archive/uniben" },
    { name: "University of Calabar", route: "past-questions-archive/unical" },
    {
      name: "University of Delta, Agbor",
      route: "past-questions-archive/unidel",
    },
    { name: "University of Ibadan", route: "past-questions-archive/ui" },
    {
      name: "University of Ilesa, Osun State",
      route: "past-questions-archive/uio",
    },
    { name: "University of Ilorin", route: "past-questions-archive/unilorin" },
    { name: "University of Jos", route: "past-questions-archive/unijos" },
    { name: "University of Lagos", route: "past-questions-archive/unilag" },
    {
      name: "University of Maiduguri",
      route: "past-questions-archive/unimaid",
    },
    {
      name: "University of Mkar, Mkar",
      route: "past-questions-archive/unimkar",
    },
    {
      name: "University of Nigeria, Nsukka",
      route: "past-questions-archive/unn",
    },
    {
      name: "University of Offa, Kwara State",
      route: "past-questions-archive/uok",
    },
    {
      name: "University of Port-Harcourt",
      route: "past-questions-archive/uniport",
    },
    { name: "University of Uyo", route: "past-questions-archive/uniuyo" },
    {
      name: "University on the Niger, Umunya, Anambra state",
      route: "past-questions-archive/unua",
    },
    {
      name: "Usumanu Danfodiyo University",
      route: "past-questions-archive/udusok",
    },
  ],

  v: [
    {
      name: "Venite University, Iloro-Ekiti, Ekiti State",
      route: "past-questions-archive/vuie",
    },
    {
      name: "Veritas University, Abuja",
      route: "past-questions-archive/veritas",
    },
    {
      name: "Vision University, Ikogbo, Ogun State",
      route: "past-questions-archive/vuio",
    },
  ],

  w: [
    {
      name: "Wellspring University, Evbuobanosa - Edo State",
      route: "past-questions-archive/wellspringuniversity",
    },
    {
      name: "Wesley University Ondo",
      route: "past-questions-archive/wesleyuni",
    },
    {
      name: "West Midlands Open University, Ibadan, Oyo State",
      route: "past-questions-archive/wmou",
    },
    {
      name: "Western Delta University, Oghara Delta State",
      route: "past-questions-archive/wdu",
    },
    {
      name: "Westland University Iwo, Osun State",
      route: "past-questions-archive/wuio",
    },
    {
      name: "Wigwe University, Isiokpo Rivers State",
      route: "past-questions-archive/wuir",
    },
  ],

  y: [
    {
      name: "Yobe State University, Damaturu",
      route: "past-questions-archive/ysu",
    },
    {
      name: "Yusuf Maitama Sule University Kano",
      route: "past-questions-archive/nwu",
    },
  ],

  z: [
    { name: "Zamfara State University", route: "past-questions-archive/zsu" },
  ],
};

export default function PastQuestionsArchive() {
  return (
    <div className="flex flex-col items-center gap-6 px-4 py-14 shadow-[inset_0_-1px_0_0] shadow-sky-100 dark:shadow-sky-800 md:px-10">
      <BreadCrumb />
      <h2 className="text-center text-3xl font-extrabold text-slate-900 dark:text-white">
        Past Questions Archive
      </h2>
      <p className="max-w-prose text-center">
        The importance of learning from the past lies in emphasizing that
        understanding the format and content of previous exams can significantly
        enhance your preparation. However, there is a risk in assuming that past
        examination questions mirror those you will encounter. We encourage
        using these questions solely for preparatory purposes, without any
        expectation of encountering the exact same questions in your exams.
      </p>
      <div className="flex w-full max-w-prose flex-col gap-2">
        <LinkList items={nigerianUniversities} isOrdered={true} />
      </div>
    </div>
  );
}
