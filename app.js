/**
 * ═══════════════════════════════════════════════════════
 *  KICKZONE — PRODUCTION PREMIUM FOOTBALL PLATFORM ENGINE
 *  All 96 Official Clubs across 5 Leagues · Per-League Isolated Stats
 * ═══════════════════════════════════════════════════════
 */

/* ────────── i18n ────────── */
const i18n = {
  en: {
    nav_home:"Home", nav_live:"Live", nav_schedule:"Schedule", nav_news:"News",
    nav_ucl:"UCL", nav_favorites:"Favorites", nav_profile:"Profile", nav_login:"Login",
    toggle_theme:"Toggle Theme", home_title:"Live Football. Real-Time Scores. Fans' Opinions.",
    live_scores:"Live Matches", upcoming_matches:"Upcoming Fixtures",
    finished_matches:"Results", news_title:"Latest Football News",
    league_table:"Standings", auth_sign_in:"Sign In", auth_sign_up:"Sign Up",
    auth_forgot:"Forgot Password", auth_email:"Email or Username",
    auth_password:"Password", auth_confirm_password:"Confirm Password",
    auth_remember_me:"Remember Me", auth_no_account:"Don't have an account?",
    auth_have_account:"Already have an account?", auth_google:"Continue with Google",
    profile_settings:"Profile Settings", profile_logout:"Logout",
    save_changes:"Save Changes", error_loading:"Error loading content.",
    no_favorites:"You haven't added any favorites yet.",
    search_placeholder:"Search clubs, players, leagues..."
  },
  ar: {
    nav_home:"الرئيسية", nav_live:"مباشر", nav_schedule:"المباريات", nav_news:"الأخبار",
    nav_ucl:"أبطال أوروبا", nav_favorites:"المفضلة", nav_profile:"الملف الشخصي",
    nav_login:"تسجيل الدخول", toggle_theme:"تغيير المظهر",
    home_title:"كرة قدم حية. نتائج فورية. آراء الجماهير.", live_scores:"المباريات المباشرة",
    upcoming_matches:"المباريات القادمة", finished_matches:"النتائج الأخيرة",
    news_title:"آخر أخبار كرة القدم", league_table:"جدول الترتيب",
    auth_sign_in:"تسجيل الدخول", auth_sign_up:"إنشاء حساب",
    auth_forgot:"نسيت كلمة المرور؟", auth_email:"البريد أو اسم المستخدم",
    auth_password:"كلمة المرور", auth_confirm_password:"تأكيد كلمة المرور",
    auth_remember_me:"تذكرني", auth_no_account:"ليس لديك حساب؟",
    auth_have_account:"لديك حساب بالفعل؟", auth_google:"الدخول بواسطة جوجل",
    profile_settings:"إعدادات الحساب", profile_logout:"تسجيل الخروج",
    save_changes:"حفظ التغييرات", error_loading:"حدث خطأ أثناء التحميل.",
    no_favorites:"لم تقم بإضافة أي عناصر للمفضلة بعد.",
    search_placeholder:"ابحث عن أندية، لاعبين..."
  }
};

/* ────────── REAL DATA BASE ────────── */
const C = "https://crests.football-data.org/";

const DB = {
  leagues: [
    { id:"PL",  name:"Premier League",   country:"England", emblem:C+"PL.png",  teamsCount:20 },
    { id:"PD",  name:"La Liga",          country:"Spain",   emblem:C+"PD.png",  teamsCount:20 },
    { id:"SA",  name:"Serie A",          country:"Italy",   emblem:C+"SA.png",  teamsCount:20 },
    { id:"BL1", name:"Bundesliga",       country:"Germany", emblem:C+"BL1.png", teamsCount:18 },
    { id:"FL1", name:"Ligue 1",          country:"France",  emblem:C+"FL1.png", teamsCount:18 },
    { id:"CL",  name:"Champions League", country:"Europe",  emblem:C+"CL.png",  teamsCount:36 }
  ],
  clubs: [
    /* ── PREMIER LEAGUE (20) ── */
    { id:"57",  name:"Arsenal",                  tla:"ARS", league:"PL",  coach:"Mikel Arteta",     stadium:"Emirates Stadium",          founded:1886, crest:C+"57.png",  basePts:65, baseW:20, baseD:5, baseL:3, baseGF:62, baseGA:24 },
    { id:"64",  name:"Liverpool",                tla:"LIV", league:"PL",  coach:"Arne Slot",        stadium:"Anfield",                   founded:1892, crest:C+"64.png",  basePts:67, baseW:21, baseD:4, baseL:3, baseGF:68, baseGA:26 },
    { id:"65",  name:"Manchester City",          tla:"MCI", league:"PL",  coach:"Pep Guardiola",    stadium:"Etihad Stadium",            founded:1880, crest:C+"65.png",  basePts:64, baseW:19, baseD:7, baseL:2, baseGF:65, baseGA:27 },
    { id:"66",  name:"Manchester United",        tla:"MUN", league:"PL",  coach:"Ruben Amorim",     stadium:"Old Trafford",              founded:1878, crest:C+"66.png",  basePts:48, baseW:14, baseD:6, baseL:8, baseGF:47, baseGA:42 },
    { id:"61",  name:"Chelsea",                  tla:"CHE", league:"PL",  coach:"Enzo Maresca",     stadium:"Stamford Bridge",           founded:1905, crest:C+"61.png",  basePts:52, baseW:15, baseD:7, baseL:6, baseGF:58, baseGA:45 },
    { id:"73",  name:"Tottenham Hotspur",        tla:"TOT", league:"PL",  coach:"Ange Postecoglou", stadium:"Tottenham Hotspur Stadium", founded:1882, crest:C+"73.png",  basePts:50, baseW:15, baseD:5, baseL:8, baseGF:56, baseGA:44 },
    { id:"62",  name:"Everton",                  tla:"EVE", league:"PL",  coach:"Sean Dyche",       stadium:"Goodison Park",             founded:1878, crest:C+"62.png",  basePts:36, baseW:9,  baseD:9, baseL:10,baseGF:34, baseGA:40 },
    { id:"67",  name:"Newcastle United",        tla:"NEW", league:"PL",  coach:"Eddie Howe",       stadium:"St. James' Park",           founded:1892, crest:C+"67.png",  basePts:49, baseW:14, baseD:7, baseL:7, baseGF:52, baseGA:41 },
    { id:"58",  name:"Aston Villa",              tla:"AVL", league:"PL",  coach:"Unai Emery",       stadium:"Villa Park",                founded:1874, crest:C+"58.png",  basePts:55, baseW:16, baseD:7, baseL:5, baseGF:54, baseGA:38 },
    { id:"354", name:"Crystal Palace",           tla:"CRY", league:"PL",  coach:"Oliver Glasner",   stadium:"Selhurst Park",             founded:1905, crest:C+"354.png", basePts:39, baseW:10, baseD:9, baseL:9, baseGF:38, baseGA:41 },
    { id:"402", name:"Brentford",                tla:"BRE", league:"PL",  coach:"Thomas Frank",     stadium:"Gtech Community Stadium",   founded:1889, crest:C+"402.png", basePts:41, baseW:11, baseD:8, baseL:9, baseGF:45, baseGA:46 },
    { id:"397", name:"Brighton & Hove Albion",  tla:"BHA", league:"PL",  coach:"Fabian Hürzeler",  stadium:"AMEX Stadium",              founded:1901, crest:C+"397.png", basePts:46, baseW:12, baseD:10,baseL:6, baseGF:49, baseGA:43 },
    { id:"356", name:"Sheffield United / Burnley",tla:"BUR",league:"PL",  coach:"Scott Parker",     stadium:"Turf Moor",                 founded:1882, crest:C+"328.png", basePts:28, baseW:7,  baseD:7, baseL:14,baseGF:30, baseGA:52 },
    { id:"1044",name:"Bournemouth",              tla:"BOU", league:"PL",  coach:"Andoni Iraola",    stadium:"Vitality Stadium",          founded:1899, crest:C+"1044.png",basePts:43, baseW:12, baseD:7, baseL:9, baseGF:44, baseGA:45 },
    { id:"370", name:"Wolverhampton Wanderers",  tla:"WOL", league:"PL",  coach:"Gary O'Neil",      stadium:"Molineux Stadium",          founded:1877, crest:C+"370.png", basePts:35, baseW:9,  baseD:8, baseL:11,baseGF:36, baseGA:47 },
    { id:"351", name:"Nottingham Forest",        tla:"NFO", league:"PL",  coach:"Nuno Espírito",    stadium:"City Ground",               founded:1865, crest:C+"351.png", basePts:44, baseW:12, baseD:8, baseL:8, baseGF:41, baseGA:39 },
    { id:"563", name:"West Ham United",          tla:"WHU", league:"PL",  coach:"Julen Lopetegui",  stadium:"London Stadium",            founded:1895, crest:C+"563.png", basePts:42, baseW:11, baseD:9, baseL:8, baseGF:43, baseGA:47 },
    { id:"341", name:"Leeds United",             tla:"LEE", league:"PL",  coach:"Daniel Farke",     stadium:"Elland Road",               founded:1919, crest:C+"341.png", basePts:30, baseW:7,  baseD:9, baseL:12,baseGF:32, baseGA:49 },
    { id:"346", name:"Watford / Sunderland",     tla:"SUN", league:"PL",  coach:"Régis Le Bris",    stadium:"Stadium of Light",          founded:1879, crest:C+"71.png",  basePts:25, baseW:6,  baseD:7, baseL:15,baseGF:27, baseGA:55 },
    { id:"355", name:"Fulham",                   tla:"FUL", league:"PL",  coach:"Marco Silva",      stadium:"Craven Cottage",            founded:1879, crest:C+"63.png",  basePts:45, baseW:12, baseD:9, baseL:7, baseGF:46, baseGA:42 },

    /* ── LA LIGA (20) ── */
    { id:"86",  name:"Real Madrid",              tla:"RMA", league:"PD",  coach:"Carlo Ancelotti",  stadium:"Santiago Bernabéu",         founded:1902, crest:C+"86.png",  basePts:69, baseW:22, baseD:3, baseL:3, baseGF:67, baseGA:22 },
    { id:"81",  name:"FC Barcelona",             tla:"FCB", league:"PD",  coach:"Hansi Flick",      stadium:"Camp Nou",                  founded:1899, crest:C+"81.png",  basePts:66, baseW:21, baseD:3, baseL:4, baseGF:71, baseGA:28 },
    { id:"78",  name:"Atlético Madrid",          tla:"ATM", league:"PD",  coach:"Diego Simeone",    stadium:"Metropolitano",             founded:1903, crest:C+"78.png",  basePts:59, baseW:18, baseD:5, baseL:5, baseGF:53, baseGA:25 },
    { id:"77",  name:"Athletic Club",            tla:"ATH", league:"PD",  coach:"Ernesto Valverde", stadium:"San Mamés",                 founded:1898, crest:C+"77.png",  basePts:52, baseW:15, baseD:7, baseL:6, baseGF:46, baseGA:31 },
    { id:"92",  name:"Real Sociedad",            tla:"RSO", league:"PD",  coach:"Imanol Alguacil",  stadium:"Reale Arena",               founded:1909, crest:C+"92.png",  basePts:47, baseW:13, baseD:8, baseL:7, baseGF:41, baseGA:33 },
    { id:"90",  name:"Real Betis",               tla:"BET", league:"PD",  coach:"Manuel Pellegrini",stadium:"Benito Villamarín",          founded:1907, crest:C+"90.png",  basePts:45, baseW:12, baseD:9, baseL:7, baseGF:42, baseGA:37 },
    { id:"94",  name:"Villarreal",               tla:"VIL", league:"PD",  coach:"Marcelino",        stadium:"Estadio de la Cerámica",    founded:1923, crest:C+"94.png",  basePts:48, baseW:14, baseD:6, baseL:8, baseGF:51, baseGA:44 },
    { id:"83",  name:"Getafe",                   tla:"GET", league:"PD",  coach:"Bordalás",         stadium:"Coliseum",                  founded:1983, crest:C+"83.png",  basePts:33, baseW:8,  baseD:9, baseL:11,baseGF:29, baseGA:35 },
    { id:"559", name:"Sevilla",                  tla:"SEV", league:"PD",  coach:"García Pimienta",  stadium:"Ramón Sánchez-Pizjuán",     founded:1890, crest:C+"559.png", basePts:38, baseW:10, baseD:8, baseL:10,baseGF:37, baseGA:41 },
    { id:"95",  name:"Valencia",                 tla:"VAL", league:"PD",  coach:"Rubén Baraja",     stadium:"Mestalla",                  founded:1919, crest:C+"95.png",  basePts:37, baseW:10, baseD:7, baseL:11,baseGF:35, baseGA:40 },
    { id:"79",  name:"Osasuna",                  tla:"OSA", league:"PD",  coach:"Vicente Moreno",   stadium:"El Sadar",                  founded:1920, crest:C+"79.png",  basePts:40, baseW:11, baseD:7, baseL:10,baseGF:38, baseGA:43 },
    { id:"87",  name:"Rayo Vallecano",           tla:"RAY", league:"PD",  coach:"Iñigo Pérez",      stadium:"Estadio de Vallecas",       founded:1924, crest:C+"87.png",  basePts:35, baseW:9,  baseD:8, baseL:11,baseGF:32, baseGA:39 },
    { id:"298", name:"Girona",                   tla:"GIR", league:"PD",  coach:"Míchel",           stadium:"Montilivi",                 founded:1930, crest:C+"298.png", basePts:53, baseW:16, baseD:5, baseL:7, baseGF:56, baseGA:40 },
    { id:"80",  name:"Espanyol",                 tla:"ESP", league:"PD",  coach:"Manolo González",  stadium:"Stage Front Stadium",       founded:1900, crest:C+"80.png",  basePts:29, baseW:7,  baseD:8, baseL:13,baseGF:28, baseGA:47 },
    { id:"558", name:"Celta Vigo",               tla:"CEL", league:"PD",  coach:"Claudio Giráldez", stadium:"Abanca-Balaídos",          founded:1923, crest:C+"558.png", basePts:41, baseW:12, baseD:5, baseL:11,baseGF:43, baseGA:45 },
    { id:"263", name:"Alavés",                   tla:"ALA", league:"PD",  coach:"Luis García",      stadium:"Mendizorrotza",             founded:1921, crest:C+"263.png", basePts:34, baseW:9,  baseD:7, baseL:12,baseGF:31, baseGA:42 },
    { id:"89",  name:"Mallorca",                 tla:"MLL", league:"PD",  coach:"Jagoba Arrasate",  stadium:"Son Moix",                  founded:1916, crest:C+"89.png",  basePts:36, baseW:10, baseD:6, baseL:12,baseGF:30, baseGA:38 },
    { id:"285", name:"Elche",                    tla:"ELC", league:"PD",  coach:"Eder Sarabia",     stadium:"Manuel Martínez Valero",    founded:1922, crest:C+"285.png", basePts:24, baseW:5,  baseD:9, baseL:14,baseGF:25, baseGA:49 },
    { id:"299", name:"Levante",                  tla:"LEV", league:"PD",  coach:"Julián Calero",    stadium:"Ciutat de València",        founded:1909, crest:C+"299.png", basePts:26, baseW:6,  baseD:8, baseL:14,baseGF:27, baseGA:48 },
    { id:"271", name:"Real Oviedo",              tla:"ROV", league:"PD",  coach:"Javi Calleja",     stadium:"Carlos Tartiere",           founded:1926, crest:C+"271.png", basePts:22, baseW:5,  baseD:7, baseL:16,baseGF:23, baseGA:51 },

    /* ── SERIE A (20) ── */
    { id:"108", name:"Inter Milan",              tla:"INT", league:"SA",  coach:"Simone Inzaghi",   stadium:"San Siro",                  founded:1908, crest:C+"108.png", basePts:66, baseW:20, baseD:6, baseL:2, baseGF:61, baseGA:21 },
    { id:"98",  name:"AC Milan",                 tla:"MIL", league:"SA",  coach:"Paulo Fonseca",    stadium:"San Siro",                  founded:1899, crest:C+"98.png",  basePts:57, baseW:17, baseD:6, baseL:5, baseGF:55, baseGA:34 },
    { id:"109", name:"Juventus",                 tla:"JUV", league:"SA",  coach:"Thiago Motta",     stadium:"Allianz Stadium",           founded:1897, crest:C+"109.png", basePts:58, baseW:16, baseD:10,baseL:2, baseGF:48, baseGA:22 },
    { id:"102", name:"Atalanta",                 tla:"ATA", league:"SA",  coach:"Gian Piero Gasperini",stadium:"Gewiss Stadium",          founded:1907, crest:C+"102.png", basePts:60, baseW:18, baseD:6, baseL:4, baseGF:63, baseGA:30 },
    { id:"113", name:"Napoli",                   tla:"NAP", league:"SA",  coach:"Antonio Conte",    stadium:"Diego Armando Maradona",    founded:1926, crest:C+"113.png", basePts:62, baseW:19, baseD:5, baseL:4, baseGF:52, baseGA:23 },
    { id:"100", name:"AS Roma",                  tla:"ROM", league:"SA",  coach:"Claudio Ranieri",  stadium:"Stadio Olimpico",           founded:1927, crest:C+"100.png", basePts:44, baseW:12, baseD:8, baseL:8, baseGF:42, baseGA:39 },
    { id:"110", name:"Lazio",                    tla:"LAZ", league:"SA",  coach:"Marco Baroni",     stadium:"Stadio Olimpico",           founded:1900, crest:C+"110.png", basePts:51, baseW:15, baseD:6, baseL:7, baseGF:49, baseGA:36 },
    { id:"99",  name:"Fiorentina",               tla:"FIO", league:"SA",  coach:"Raffaele Palladino",stadium:"Stadio Artemio Franchi",   founded:1926, crest:C+"99.png",  basePts:49, baseW:14, baseD:7, baseL:7, baseGF:46, baseGA:33 },
    { id:"103", name:"Bologna",                  tla:"BOL", league:"SA",  coach:"Vincenzo Italiano",stadium:"Stadio Renato Dall'Ara",    founded:1909, crest:C+"103.png", basePts:46, baseW:12, baseD:10,baseL:6, baseGF:41, baseGA:35 },
    { id:"115", name:"Udinese",                  tla:"UDI", league:"SA",  coach:"Kosta Runjaić",    stadium:"Bluenergy Stadium",         founded:1896, crest:C+"115.png", basePts:38, baseW:11, baseD:5, baseL:12,baseGF:36, baseGA:43 },
    { id:"107", name:"Genoa",                    tla:"GEN", league:"SA",  coach:"Patrick Vieira",   stadium:"Luigi Ferraris",            founded:1893, crest:C+"107.png", basePts:34, baseW:8,  baseD:10,baseL:10,baseGF:31, baseGA:38 },
    { id:"586", name:"Torino",                   tla:"TOR", league:"SA",  coach:"Paolo Vanoli",     stadium:"Stadio Olimpico Grande",    founded:1906, crest:C+"586.png", basePts:39, baseW:10, baseD:9, baseL:9, baseGF:34, baseGA:37 },
    { id:"471", name:"Sassuolo",                 tla:"SAS", league:"SA",  coach:"Fabio Grosso",     stadium:"Mapei Stadium",             founded:1920, crest:C+"471.png", basePts:30, baseW:8,  baseD:6, baseL:14,baseGF:33, baseGA:48 },
    { id:"450", name:"Hellas Verona",            tla:"VER", league:"SA",  coach:"Paolo Zanetti",    stadium:"Stadio Marcantonio Bentegodi",founded:1903,crest:C+"450.png", basePts:31, baseW:9,  baseD:4, baseL:15,baseGF:30, baseGA:49 },
    { id:"455", name:"Parma",                    tla:"PAR", league:"SA",  coach:"Fabio Pecchia",    stadium:"Stadio Ennio Tardini",      founded:1913, crest:C+"455.png", basePts:32, baseW:7,  baseD:11,baseL:10,baseGF:35, baseGA:46 },
    { id:"104", name:"Cagliari",                 tla:"CAG", league:"SA",  coach:"Davide Nicola",    stadium:"Unipol Domus",              founded:1920, crest:C+"104.png", basePts:29, baseW:7,  baseD:8, baseL:13,baseGF:29, baseGA:45 },
    { id:"454", name:"Venezia / Como",           tla:"COM", league:"SA",  coach:"Cesc Fàbregas",    stadium:"Stadio Giuseppe Sinigaglia",founded:1907, crest:C+"1038.png",basePts:33, baseW:8,  baseD:9, baseL:11,baseGF:34, baseGA:44 },
    { id:"584", name:"Lecce",                    tla:"LEC", league:"SA",  coach:"Marco Giampaolo",  stadium:"Stadio Via del Mare",       founded:1908, crest:C+"584.png", basePts:27, baseW:6,  baseD:9, baseL:13,baseGF:24, baseGA:44 },
    { id:"457", name:"Cremonese",                tla:"CRE", league:"SA",  coach:"Eugenio Corini",   stadium:"Stadio Giovanni Zini",      founded:1903, crest:C+"457.png", basePts:25, baseW:6,  baseD:7, baseL:15,baseGF:26, baseGA:50 },
    { id:"487", name:"Pisa",                     tla:"PIS", league:"SA",  coach:"Filippo Inzaghi",  stadium:"Arena Garibaldi",           founded:1909, crest:C+"487.png", basePts:23, baseW:5,  baseD:8, baseL:15,baseGF:22, baseGA:52 },

    /* ── BUNDESLIGA (18) ── */
    { id:"5",   name:"Bayern Munich",            tla:"FCB", league:"BL1", coach:"Vincent Kompany",  stadium:"Allianz Arena",             founded:1900, crest:C+"5.png",   basePts:62, baseW:19, baseD:5, baseL:2, baseGF:67, baseGA:22 },
    { id:"4",   name:"Borussia Dortmund",        tla:"BVB", league:"BL1", coach:"Nuri Şahin",       stadium:"Signal Iduna Park",         founded:1909, crest:C+"4.png",   basePts:48, baseW:14, baseD:6, baseL:6, baseGF:51, baseGA:38 },
    { id:"3",   name:"Bayer Leverkusen",         tla:"B04", league:"BL1", coach:"Xabi Alonso",      stadium:"BayArena",                  founded:1904, crest:C+"3.png",   basePts:58, baseW:17, baseD:7, baseL:2, baseGF:59, baseGA:29 },
    { id:"721", name:"RB Leipzig",               tla:"RBL", league:"BL1", coach:"Marco Rose",       stadium:"Red Bull Arena",            founded:2009, crest:C+"721.png", basePts:52, baseW:15, baseD:7, baseL:4, baseGF:48, baseGA:28 },
    { id:"19",  name:"Eintracht Frankfurt",      tla:"SGE", league:"BL1", coach:"Dino Toppmöller",  stadium:"Deutsche Bank Park",        founded:1899, crest:C+"19.png",  basePts:49, baseW:14, baseD:7, baseL:5, baseGF:53, baseGA:39 },
    { id:"17",  name:"SC Freiburg",              tla:"SCF", league:"BL1", coach:"Julian Schuster",  stadium:"Europa-Park Stadion",       founded:1904, crest:C+"17.png",  basePts:40, baseW:11, baseD:7, baseL:8, baseGF:38, baseGA:39 },
    { id:"15",  name:"Mainz 05",                 tla:"M05", league:"BL1", coach:"Bo Henriksen",     stadium:"MEWA Arena",                founded:1905, crest:C+"15.png",  basePts:37, baseW:10, baseD:7, baseL:9, baseGF:37, baseGA:38 },
    { id:"18",  name:"Borussia M'gladbach",      tla:"BMG", league:"BL1", coach:"Gerardo Seoane",   stadium:"BORUSSIA-PARK",             founded:1900, crest:C+"18.png",  basePts:35, baseW:9,  baseD:8, baseL:9, baseGF:39, baseGA:42 },
    { id:"11",  name:"VfL Wolfsburg",            tla:"WOB", league:"BL1", coach:"Ralph Hasenhüttl", stadium:"Volkswagen Arena",          founded:1945, crest:C+"11.png",  basePts:33, baseW:9,  baseD:6, baseL:11,baseGF:38, baseGA:43 },
    { id:"12",  name:"Werder Bremen",            tla:"SVW", league:"BL1", coach:"Ole Werner",       stadium:"Weserstadion",              founded:1899, crest:C+"12.png",  basePts:36, baseW:10, baseD:6, baseL:10,baseGF:41, baseGA:46 },
    { id:"16",  name:"FC Augsburg",              tla:"FCA", league:"BL1", coach:"Jess Thorup",      stadium:"WWK ARENA",                 founded:1907, crest:C+"16.png",  basePts:34, baseW:9,  baseD:7, baseL:10,baseGF:33, baseGA:42 },
    { id:"10",  name:"VfB Stuttgart",            tla:"VFB", league:"BL1", coach:"Sebastian Hoeneß", stadium:"MHPArena",                  founded:1893, crest:C+"10.png",  basePts:50, baseW:15, baseD:5, baseL:6, baseGF:55, baseGA:37 },
    { id:"252", name:"FC St. Pauli",             tla:"STP", league:"BL1", coach:"Alexander Blessin",stadium:"Millerntor-Stadion",        founded:1910, crest:C+"252.png", basePts:28, baseW:7,  baseD:7, baseL:12,baseGF:26, baseGA:39 },
    { id:"267", name:"Hamburger SV",             tla:"HSV", league:"BL1", coach:"Merlin Polzin",    stadium:"Volksparkstadion",          founded:1887, crest:C+"267.png", basePts:31, baseW:8,  baseD:7, baseL:11,baseGF:34, baseGA:44 },
    { id:"1",   name:"1. FC Köln",               tla:"KOE", league:"BL1", coach:"Gerhard Struber",  stadium:"RheinEnergieSTADION",       founded:1948, crest:C+"1.png",   basePts:27, baseW:6,  baseD:9, baseL:11,baseGF:29, baseGA:45 },
    { id:"28",  name:"Union Berlin",             tla:"FCU", league:"BL1", coach:"Bo Svensson",      stadium:"An der Alten Försterei",    founded:1966, crest:C+"28.png",  basePts:32, baseW:8,  baseD:8, baseL:10,baseGF:27, baseGA:38 },
    { id:"2",   name:"TSG Hoffenheim",           tla:"TSG", league:"BL1", coach:"Christian Ilzer",  stadium:"PreZero Arena",             founded:1899, crest:C+"2.png",   basePts:29, baseW:7,  baseD:8, baseL:11,baseGF:36, baseGA:47 },
    { id:"44",  name:"1. FC Heidenheim",         tla:"HDH", league:"BL1", coach:"Frank Schmidt",    stadium:"Voith-Arena",               founded:1846, crest:C+"44.png",  basePts:26, baseW:6,  baseD:8, baseL:12,baseGF:30, baseGA:46 },

    /* ── LIGUE 1 (18) ── */
    { id:"524", name:"Paris Saint-Germain",      tla:"PSG", league:"FL1", coach:"Luis Enrique",    stadium:"Parc des Princes",          founded:1970, crest:C+"524.png", basePts:68, baseW:21, baseD:5, baseL:0, baseGF:65, baseGA:20 },
    { id:"516", name:"Olympique Marseille",      tla:"OM",  league:"FL1", coach:"Roberto De Zerbi",stadium:"Vélodrome",                 founded:1899, crest:C+"516.png", basePts:53, baseW:16, baseD:5, baseL:5, baseGF:50, baseGA:32 },
    { id:"548", name:"AS Monaco",                tla:"ASM", league:"FL1", coach:"Adi Hütter",       stadium:"Stade Louis II",            founded:1924, crest:C+"548.png", basePts:55, baseW:17, baseD:4, baseL:5, baseGF:53, baseGA:30 },
    { id:"523", name:"Olympique Lyonnais",       tla:"OL",  league:"FL1", coach:"Pierre Sage",      stadium:"Groupama Stadium",          founded:1950, crest:C+"523.png", basePts:46, baseW:14, baseD:4, baseL:8, baseGF:45, baseGA:40 },
    { id:"521", name:"Lille OSC",                tla:"LOSC",league:"FL1", coach:"Bruno Génésio",    stadium:"Decathlon Arena",           founded:1944, crest:C+"521.png", basePts:50, baseW:14, baseD:8, baseL:4, baseGF:44, baseGA:28 },
    { id:"522", name:"OGC Nice",                 tla:"OGCN",league:"FL1", coach:"Franck Haise",     stadium:"Allianz Riviera",           founded:1904, crest:C+"522.png", basePts:47, baseW:13, baseD:8, baseL:5, baseGF:48, baseGA:31 },
    { id:"546", name:"RC Lens",                  tla:"RCL", league:"FL1", coach:"Will Still",       stadium:"Stade Bollaert-Delelis",    founded:1906, crest:C+"546.png", basePts:44, baseW:12, baseD:8, baseL:6, baseGF:38, baseGA:33 },
    { id:"529", name:"Stade Rennais",            tla:"REN", league:"FL1", coach:"Jorge Sampaoli",   stadium:"Roazhon Park",              founded:1901, crest:C+"529.png", basePts:36, baseW:10, baseD:6, baseL:10,baseGF:39, baseGA:41 },
    { id:"512", name:"Stade Brestois",           tla:"SB29",league:"FL1", coach:"Éric Roy",         stadium:"Stade Francis-Le Blé",      founded:1950, crest:C+"512.png", basePts:42, baseW:12, baseD:6, baseL:8, baseGF:41, baseGA:37 },
    { id:"511", name:"Toulouse FC",              tla:"TFC", league:"FL1", coach:"Carles Martínez",  stadium:"Stadium de Toulouse",       founded:1937, crest:C+"511.png", basePts:34, baseW:9,  baseD:7, baseL:10,baseGF:34, baseGA:38 },
    { id:"543", name:"FC Nantes",                tla:"FCN", league:"FL1", coach:"Antoine Kombouaré",stadium:"Stade de la Beaujoire",    founded:1943, crest:C+"543.png", basePts:30, baseW:7,  baseD:9, baseL:10,baseGF:29, baseGA:39 },
    { id:"576", name:"RC Strasbourg",            tla:"RCSA",league:"FL1", coach:"Liam Rosenior",    stadium:"Stade de la Meinau",        founded:1906, crest:C+"576.png", basePts:37, baseW:10, baseD:7, baseL:9, baseGF:40, baseGA:43 },
    { id:"532", name:"AJ Auxerre",               tla:"AJA", league:"FL1", coach:"Christophe Pélissier",stadium:"Stade de l'Abbé-Deschamps",founded:1905, crest:C+"532.png", basePts:32, baseW:9,  baseD:5, baseL:12,baseGF:35, baseGA:45 },
    { id:"531", name:"Angers SCO",               tla:"SCO", league:"FL1", coach:"Alexandre Dujeux", stadium:"Stade Raymond Kopa",        founded:1919, crest:C+"531.png", basePts:25, baseW:6,  baseD:7, baseL:13,baseGF:26, baseGA:44 },
    { id:"538", name:"Le Havre AC",              tla:"HAC", league:"FL1", coach:"Didier Digard",    stadium:"Stade Océane",              founded:1872, crest:C+"538.png", basePts:23, baseW:6,  baseD:5, baseL:15,baseGF:22, baseGA:46 },
    { id:"525", name:"FC Lorient",               tla:"FCL", league:"FL1", coach:"Olivier Pantaloni",stadium:"Stade du Moustoir",         founded:1926, crest:C+"525.png", basePts:26, baseW:7,  baseD:5, baseL:14,baseGF:28, baseGA:48 },
    { id:"545", name:"FC Metz",                  tla:"FCM", league:"FL1", coach:"Stéphane Le Mignan",stadium:"Stade Saint-Symphorien",   founded:1932, crest:C+"545.png", basePts:22, baseW:5,  baseD:7, baseL:14,baseGF:24, baseGA:49 },
    { id:"500", name:"Paris FC",                 tla:"PFC", league:"FL1", coach:"Stéphane Gilli",   stadium:"Stade Charléty",            founded:1969, crest:C+"500.png", basePts:24, baseW:6,  baseD:6, baseL:14,baseGF:25, baseGA:47 }
  ],
  players: [
    /* Premier League Stars */
    { id:"haaland",    name:"Erling Haaland",   teamId:"65",  num:9,  pos:"Forward",    nationality:"Norway",    age:25, rating:91, value:"€180M", stats:{goals:27,assists:5,minutes:2310}  },
    { id:"salah",      name:"Mohamed Salah",    teamId:"64",  num:11, pos:"Forward",    nationality:"Egypt",     age:34, rating:89, value:"€55M",  stats:{goals:22,assists:12,minutes:2450} },
    { id:"saka",       name:"Bukayo Saka",      teamId:"57",  num:7,  pos:"Forward",    nationality:"England",   age:24, rating:88, value:"€130M", stats:{goals:16,assists:14,minutes:2510} },
    { id:"palmer",     name:"Cole Palmer",      teamId:"61",  num:20, pos:"Midfielder", nationality:"England",   age:23, rating:88, value:"€110M", stats:{goals:18,assists:11,minutes:2200} },
    { id:"watkins",    name:"Ollie Watkins",    teamId:"58",  num:11, pos:"Forward",    nationality:"England",   age:29, rating:86, value:"€75M",  stats:{goals:15,assists:10,minutes:2300} },
    { id:"rodri",      name:"Rodri",            teamId:"65",  num:16, pos:"Midfielder", nationality:"Spain",     age:29, rating:91, value:"€130M", stats:{goals:7, assists:13,minutes:2600} },
    { id:"alexander",  name:"Trent Alexander-A",teamId:"64",  num:66, pos:"Defender",   nationality:"England",   age:27, rating:87, value:"€70M",  stats:{goals:3, assists:12,minutes:2150} },

    /* La Liga Stars */
    { id:"mbappe",     name:"Kylian Mbappé",    teamId:"86",  num:9,  pos:"Forward",    nationality:"France",    age:27, rating:92, value:"€180M", stats:{goals:25,assists:8,minutes:2100}  },
    { id:"vini",       name:"Vinícius Júnior",  teamId:"86",  num:7,  pos:"Forward",    nationality:"Brazil",    age:25, rating:92, value:"€200M", stats:{goals:21,assists:11,minutes:2380} },
    { id:"bellingham", name:"Jude Bellingham",  teamId:"86",  num:5,  pos:"Midfielder", nationality:"England",   age:22, rating:90, value:"€180M", stats:{goals:15,assists:12,minutes:2240} },
    { id:"yamal",      name:"Lamine Yamal",     teamId:"81",  num:19, pos:"Forward",    nationality:"Spain",     age:18, rating:89, value:"€150M", stats:{goals:14,assists:15,minutes:2200} },
    { id:"lewandowski",name:"Robert Lewandowski",teamId:"81", num:9,  pos:"Forward",    nationality:"Poland",    age:37, rating:88, value:"€15M",  stats:{goals:23,assists:6,minutes:2050}  },
    { id:"griezmann",  name:"Antoine Griezmann",teamId:"78",  num:7,  pos:"Forward",    nationality:"France",    age:34, rating:87, value:"€25M",  stats:{goals:16,assists:9,minutes:2180}  },
    { id:"williams",   name:"Nico Williams",    teamId:"77",  num:10, pos:"Forward",    nationality:"Spain",     age:23, rating:86, value:"€70M",  stats:{goals:11,assists:10,minutes:2000} },

    /* Serie A Stars */
    { id:"lautaro",    name:"Lautaro Martínez", teamId:"108", num:10, pos:"Forward",    nationality:"Argentina", age:28, rating:89, value:"€110M", stats:{goals:24,assists:6,minutes:2200}  },
    { id:"vlahovic",   name:"Dušan Vlahović",   teamId:"109", num:9,  pos:"Forward",    nationality:"Serbia",    age:25, rating:86, value:"€65M",  stats:{goals:19,assists:4,minutes:2100}  },
    { id:"dybala",     name:"Paulo Dybala",     teamId:"100", num:21, pos:"Midfielder", nationality:"Argentina", age:32, rating:86, value:"€20M",  stats:{goals:13,assists:10,minutes:1800} },
    { id:"leao",       name:"Rafael Leão",      teamId:"98",  num:10, pos:"Forward",    nationality:"Portugal",  age:26, rating:87, value:"€75M",  stats:{goals:14,assists:11,minutes:2150} },
    { id:"barella",    name:"Nicolò Barella",   teamId:"108", num:23, pos:"Midfielder", nationality:"Italy",     age:28, rating:87, value:"€80M",  stats:{goals:6, assists:12,minutes:2350} },
    { id:"lookman",    name:"Ademola Lookman",  teamId:"102", num:11, pos:"Forward",    nationality:"Nigeria",   age:28, rating:86, value:"€55M",  stats:{goals:17,assists:8,minutes:2050}  },

    /* Bundesliga Stars */
    { id:"kane",       name:"Harry Kane",       teamId:"5",   num:9,  pos:"Forward",    nationality:"England",   age:32, rating:91, value:"€90M",  stats:{goals:28,assists:9,minutes:2250}  },
    { id:"musiala",    name:"Jamal Musiala",    teamId:"5",   num:42, pos:"Midfielder", nationality:"Germany",   age:22, rating:89, value:"€130M", stats:{goals:14,assists:12,minutes:2100} },
    { id:"wirtz",      name:"Florian Wirtz",    teamId:"3",   num:10, pos:"Midfielder", nationality:"Germany",   age:22, rating:90, value:"€130M", stats:{goals:16,assists:15,minutes:2300} },
    { id:"guirassy",   name:"Serhou Guirassy",  teamId:"4",   num:9,  pos:"Forward",    nationality:"Guinea",    age:29, rating:85, value:"€45M",  stats:{goals:20,assists:5,minutes:2000}  },
    { id:"simons",     name:"Xavi Simons",      teamId:"721", num:20, pos:"Midfielder", nationality:"Netherlands",age:22, rating:86, value:"€80M",  stats:{goals:11,assists:13,minutes:2150} },

    /* Ligue 1 Stars */
    { id:"dembele",    name:"Ousmane Dembélé",  teamId:"524", num:10, pos:"Forward",    nationality:"France",    age:28, rating:87, value:"€60M",  stats:{goals:12,assists:14,minutes:1950} },
    { id:"barcola",    name:"Bradley Barcola",  teamId:"524", num:29, pos:"Forward",    nationality:"France",    age:23, rating:85, value:"€65M",  stats:{goals:16,assists:9,minutes:2000}  },
    { id:"greenwood",  name:"Mason Greenwood",  teamId:"516", num:10, pos:"Forward",    nationality:"England",   age:24, rating:84, value:"€35M",  stats:{goals:17,assists:6,minutes:2100}  },
    { id:"david",      name:"Jonathan David",   teamId:"521", num:9,  pos:"Forward",    nationality:"Canada",    age:26, rating:85, value:"€45M",  stats:{goals:19,assists:5,minutes:2200}  },
    { id:"cherki",     name:"Rayan Cherki",     teamId:"523", num:18, pos:"Midfielder", nationality:"France",    age:22, rating:83, value:"€30M",  stats:{goals:7, assists:11,minutes:1850} }
  ],
  matches: [
    { id:101, comp:"PL", home:"64", away:"66", homeScore:2, awayScore:1, status:"LIVE", minute:72, stage:"REGULAR_SEASON", date:"2026-07-22T12:00:00Z",
      stats:{possession:[58,42],shots:[12,7],shotsOnTarget:[6,3],corners:[5,3],offsides:[1,2],fouls:[9,13],yellowCards:[1,3],redCards:[0,0],passes:[487,312],passAccuracy:[87,74]},
      timeline:[
        {time:14,type:"goal",team:"home",player:"M. Salah",detail:"Assist by Luis Díaz"},
        {time:38,type:"yellow",team:"away",player:"B. Fernandes",detail:"Tactical foul"},
        {time:55,type:"goal",team:"away",player:"Marcus Rashford",detail:"Solo run strike"},
        {time:68,type:"goal",team:"home",player:"M. Salah",detail:"Penalty kick"}
      ],
      lineups:{
        home:{formation:"4-3-3",starting:["Alisson (GK) 7.5","Alexander-Arnold 8.1","Konaté 7.2","Van Dijk 7.8","Robertson 7.0","Mac Allister 7.4","Gravenberch 7.6","Szoboszlai 7.1","Salah 8.9","Jota 6.8","Díaz 7.9"],bench:["Kelleher","Gomez","Quansah","Endo","Jones","Gakpo","Nunez"]},
        away:{formation:"4-2-3-1",starting:["Onana (GK) 7.1","Dalot 6.5","De Ligt 6.8","Martinez 7.2","Mazraoui 6.6","Mainoo 7.0","Casemiro 6.3","Garnacho 7.1","Fernandes 7.5","Rashford 8.0","Zirkzee 6.4"],bench:["Bayindir","Evans","Maguire","Eriksen","Ugarte","Diallo","Hojlund"]}
      },
      motmCandidates:["salah","haaland","saka"]
    },
    { id:102, comp:"PL", home:"65", away:"57", homeScore:1, awayScore:1, status:"LIVE", minute:38, stage:"REGULAR_SEASON", date:"2026-07-22T12:30:00Z",
      stats:{possession:[54,46],shots:[6,5],shotsOnTarget:[3,2],corners:[3,2],offsides:[0,1],fouls:[5,6],yellowCards:[0,1],redCards:[0,0],passes:[245,208],passAccuracy:[89,85]},
      timeline:[
        {time:9,type:"goal",team:"home",player:"E. Haaland",detail:"Header from corner"},
        {time:22,type:"goal",team:"away",player:"B. Saka",detail:"Curled shot into top corner"}
      ],
      lineups:{
        home:{formation:"4-1-4-1",starting:["Ederson (GK) 7.0","Lewis 7.1","Akanji 7.3","Dias 7.5","Gvardiol 7.0","Rodri 8.2","Savinho 7.4","Bernardo 7.6","De Bruyne 8.0","Foden 7.5","Haaland 7.9"],bench:["Ortega","Walker","Stones","Kovacic","Gundogan","Doku","Grealish"]},
        away:{formation:"4-3-3",starting:["Raya (GK) 7.6","White 7.2","Saliba 7.8","Gabriel 7.7","Timber 7.0","Partey 6.8","Rice 7.5","Ødegaard 8.1","Saka 8.3","Havertz 7.1","Martinelli 7.3"],bench:["Neto","Calafiori","Kiwiör","Jorginho","Nwaneri","Trossard","Sterling"]}
      },
      motmCandidates:["saka","haaland","rodri"]
    },
    { id:103, comp:"PD", home:"86", away:"81", homeScore:3, awayScore:1, status:"FINISHED", minute:90, stage:"REGULAR_SEASON", date:"2026-07-21T20:00:00Z",
      stats:{possession:[62,38],shots:[18,9],shotsOnTarget:[8,4],corners:[7,3],offsides:[2,4],fouls:[10,15],yellowCards:[2,4],redCards:[0,1],passes:[643,389],passAccuracy:[91,78]},
      timeline:[
        {time:18,type:"goal",team:"away",player:"R. Lewandowski",detail:"Tap-in close range"},
        {time:42,type:"goal",team:"home",player:"K. Mbappé",detail:"Stunning volley"},
        {time:61,type:"yellow",team:"away",player:"Pedri",detail:"Shirt pulling"},
        {time:70,type:"goal",team:"home",player:"Vini Jr.",detail:"Assist by Bellingham"},
        {time:82,type:"red",team:"away",player:"Ronald Araújo",detail:"Last-man tackle"},
        {time:89,type:"goal",team:"home",player:"Jude Bellingham",detail:"Shot from distance"}
      ],
      lineups:{
        home:{formation:"4-3-1-2",starting:["Courtois (GK) 7.8","Carvajal 7.5","Militao 7.3","Rudiger 7.9","Mendy 7.1","Valverde 8.0","Tchouameni 7.5","Camavinga 7.8","Bellingham 8.8","Mbappé 8.5","Vini Jr. 8.3"],bench:["Lunin","Lucas","Fran Garcia","Modric","Arda Güler","Brahim","Endrick"]},
        away:{formation:"4-3-3",starting:["Ter Stegen (GK) 6.9","Koundé 6.5","Araújo 5.8","Cubarsí 6.6","Balde 6.8","Pedri 7.0","Casadó 7.1","Gündogan 7.3","Yamal 7.9","Lewandowski 7.5","Raphinha 7.0"],bench:["Pena","Martinez","Fort","Christensen","Gavi","Fermín","Ferran"]}
      },
      motmCandidates:["bellingham","mbappe","vini"]
    },
    { id:104, comp:"CL", home:"5", away:"86", homeScore:1, awayScore:1, status:"LIVE", minute:96, stage:"SEMI_FINALS", date:"2026-07-22T11:00:00Z", extraTime:true, etScore:{h:1,a:1},
      stats:{possession:[47,53],shots:[14,16],shotsOnTarget:[5,7],corners:[4,6],offsides:[3,1],fouls:[14,11],yellowCards:[3,2],redCards:[0,0],passes:[512,578],passAccuracy:[83,88]},
      timeline:[
        {time:27,type:"goal",team:"away",player:"K. Mbappé",detail:"Counter attack finish"},
        {time:74,type:"goal",team:"home",player:"Harry Kane",detail:"Header from Kimmich cross"}
      ],
      motmCandidates:["mbappe","kane","musiala"]
    },
    { id:105, comp:"SA", home:"108", away:"98", homeScore:2, awayScore:0, status:"FINISHED", minute:90, stage:"REGULAR_SEASON", date:"2026-07-21T18:00:00Z",
      stats:{possession:[56,44],shots:[15,8],shotsOnTarget:[7,2],corners:[6,2],offsides:[1,3],fouls:[12,16],yellowCards:[2,3],redCards:[0,0],passes:[534,421],passAccuracy:[86,79]},
      timeline:[
        {time:34,type:"goal",team:"home",player:"L. Martínez",detail:"Assist by Barella"},
        {time:67,type:"goal",team:"home",player:"L. Martínez",detail:"Header from corner"}
      ],
      motmCandidates:["lautaro","barella","leao"]
    },
    { id:106, comp:"PL",  home:"61",  away:"73",  homeScore:0, awayScore:0, status:"SCHEDULED", minute:0, stage:"REGULAR_SEASON", date:"2026-07-23T19:00:00Z" },
    { id:107, comp:"BL1", home:"5",   away:"4",   homeScore:0, awayScore:0, status:"SCHEDULED", minute:0, stage:"REGULAR_SEASON", date:"2026-07-24T17:30:00Z" },
    { id:108, comp:"FL1", home:"524", away:"516", homeScore:0, awayScore:0, status:"SCHEDULED", minute:0, stage:"REGULAR_SEASON", date:"2026-07-24T20:00:00Z" }
  ],
  news: [
    { id:1, title:"Mohamed Salah seals massive extension at Anfield", desc:"Liverpool FC confirms Salah has signed a contract extension keeping him at the club until 2028.", tag:"Transfer News", date:"2026-07-22", clubId:"64", gradient:"linear-gradient(135deg,#c8102e 0%,#00b2a9 100%)", icon:"fa-pen-fancy", content:"Mohamed Salah has officially signed a new contract extension with Liverpool FC, keeping the Egyptian superstar at Anfield until 2028." },
    { id:2, title:"Pep Guardiola reveals tactical overhaul plans", desc:"City boss says structural updates were necessary to overcome Arsenal's defensive block.", tag:"Match Analysis", date:"2026-07-22", clubId:"65", gradient:"linear-gradient(135deg,#6CABDD 0%,#1C2C5B 100%)", icon:"fa-chess", content:"Pep Guardiola has outlined tactical shifts implemented following their 1-1 draw with Arsenal." },
    { id:3, title:"El Clásico: Real Madrid dominate Barcelona 3-1", desc:"Bellingham, Mbappé, and Vinícius Jr. shine as Madrid crush rivals at the Bernabéu.", tag:"La Liga", date:"2026-07-21", clubId:"86", gradient:"linear-gradient(135deg,#FEBE10 0%,#00529F 100%)", icon:"fa-star", content:"Real Madrid produced a stunning display to defeat FC Barcelona 3-1 at the Santiago Bernabéu." },
    { id:4, title:"Inter Milan dominate Derby della Madonnina", desc:"Lautaro Martínez scores twice as Inter crush AC Milan 2-0 in the Milan derby.", tag:"Serie A", date:"2026-07-21", clubId:"108", gradient:"linear-gradient(135deg,#003DA5 0%,#000000 100%)", icon:"fa-futbol", content:"Inter Milan produced a masterclass in the Derby della Madonnina, defeating AC Milan 2-0." }
  ],
  transfers: [
    { player:"Victor Osimhen", from:"Napoli", to:"Chelsea", fee:"€110M", status:"Hot Rumor" },
    { player:"Nico Williams", from:"Athletic Club", to:"FC Barcelona", fee:"€58M", status:"Negotiations" },
    { player:"Trent Alexander-Arnold", from:"Liverpool", to:"Real Madrid", fee:"Free Transfer", status:"Rumor" },
    { player:"Florian Wirtz", from:"Leverkusen", to:"Bayern Munich", fee:"€130M", status:"Advanced" }
  ],
  rules: { knockouts:["CL"], league:{extraTime:false,penalties:false,drawAllowed:true}, knockout:{extraTime:true,penalties:true,drawAllowed:false} }
};

/* ────────── HELPERS & ISOLATED PER-LEAGUE STATS ────────── */
function getClub(id)  { return DB.clubs.find(c=>c.id===id); }
function getLeague(id){ return DB.leagues.find(l=>l.id===id); }
function T(key)       { return (i18n[state.lang]||i18n.en)[key] || key; }
function clubName(id) { const c=getClub(id); return c?c.name:id; }
function clubCrest(id){ const c=getClub(id); return c?c.crest:""; }

function getLeagueTopScorers(leagueId){
  const leagueClubs=DB.clubs.filter(c=>c.league===leagueId).map(c=>c.id);
  const leaguePlayers=DB.players.filter(p=>leagueClubs.includes(p.teamId));
  return leaguePlayers.sort((a,b)=>b.stats.goals-a.stats.goals).slice(0,5).map(p=>{
    const c=getClub(p.teamId);
    return { name:p.name, club:c?c.tla:"-", goals:p.stats.goals, crest:c?c.crest:"" };
  });
}

function getLeagueTopAssists(leagueId){
  const leagueClubs=DB.clubs.filter(c=>c.league===leagueId).map(c=>c.id);
  const leaguePlayers=DB.players.filter(p=>leagueClubs.includes(p.teamId));
  return leaguePlayers.sort((a,b)=>b.stats.assists-a.stats.assists).slice(0,5).map(p=>{
    const c=getClub(p.teamId);
    return { name:p.name, club:c?c.tla:"-", assists:p.stats.assists, crest:c?c.crest:"" };
  });
}

/* ────────── STATE ────────── */
const state = { theme:localStorage.getItem("kz_theme")||"dark", lang:localStorage.getItem("kz_lang")||"en", user:JSON.parse(localStorage.getItem("kz_user")||"null"), favorites:JSON.parse(localStorage.getItem("kz_favs")||'{"teams":[],"players":[]}'), apiToken:localStorage.getItem("kz_token")||"", page:"home", params:{} };

/* ────────── TOAST ────────── */
const toast = { show(msg,type="info"){ const box=document.getElementById("toast-container"); if(!box)return; const el=document.createElement("div"); el.className=`toast ${type}`; const icons={info:"fa-info-circle",success:"fa-check-circle",error:"fa-exclamation-circle"}; el.innerHTML=`<i class="fas ${icons[type]||icons.info} toast-icon"></i><span>${msg}</span>`; box.appendChild(el); setTimeout(()=>{el.style.opacity="0";el.style.transform="translateX(100%)";setTimeout(()=>el.remove(),300);},4000); } };

/* ────────── AUTH ────────── */
const auth = {
  guard(page){ if(["favorites","profile"].includes(page)&&!state.user){toast.show("Please login to access this page.","error");location.hash="#/login";return false;}return true; },
  register(u,e,p){ let users=JSON.parse(localStorage.getItem("kz_users")||"[]"); if(users.find(x=>x.email===e||x.username===u))return{ok:false,msg:"Username or Email already registered."}; const user={username:u,email:e,password:p}; users.push(user); localStorage.setItem("kz_users",JSON.stringify(users)); this.setSession(user); return{ok:true}; },
  login(id,pw){ let users=JSON.parse(localStorage.getItem("kz_users")||"[]"); const u=users.find(x=>(x.email===id||x.username===id)&&x.password===pw); if(!u)return{ok:false,msg:"Invalid credentials."}; this.setSession(u); return{ok:true}; },
  setSession(user){ state.user=user; localStorage.setItem("kz_user",JSON.stringify(user)); renderNavUser(); toast.show(`Welcome, ${user.username}!`,"success"); location.hash="#/"; },
  logout(){ state.user=null; localStorage.removeItem("kz_user"); renderNavUser(); toast.show("Logged out.","info"); location.hash="#/"; }
};
function renderNavUser(){ const el=document.getElementById("nav-user"); if(!el)return; el.innerHTML=state.user?`<button class="user-avatar-btn" id="nav-avatar-btn">${state.user.username[0].toUpperCase()}</button>`:`<button class="btn-primary" id="login-btn">Login</button>`; }

/* ────────── THEME & LANG ────────── */
function applyTheme(){ document.documentElement.setAttribute("data-theme",state.theme); const icon=state.theme==="dark"?"fa-sun":"fa-moon"; const btn=document.getElementById("theme-toggle"); if(btn)btn.innerHTML=`<i class="fas ${icon}"></i>`; }
function toggleTheme(){ state.theme=state.theme==="dark"?"light":"dark"; localStorage.setItem("kz_theme",state.theme); applyTheme(); }
function applyLang(){ document.documentElement.setAttribute("data-lang",state.lang); document.documentElement.setAttribute("lang",state.lang); const lbl=document.getElementById("lang-label"); if(lbl)lbl.textContent=state.lang==="en"?"AR":"EN"; document.querySelectorAll("[data-i18n]").forEach(el=>{ const key=el.getAttribute("data-i18n"); const val=T(key); const span=el.querySelector("span"); if(span)span.textContent=val;else el.textContent=val; }); }
function toggleLang(){ state.lang=state.lang==="en"?"ar":"en"; localStorage.setItem("kz_lang",state.lang); applyLang(); router.resolve(); }

/* ────────── HAMBURGER ────────── */
function setupHamburger(){ const btn=document.getElementById("hamburger"); const menu=document.getElementById("mobile-menu"); if(!btn||!menu)return; btn.addEventListener("click",()=>{btn.classList.toggle("open");menu.classList.toggle("open");btn.setAttribute("aria-expanded",btn.classList.contains("open"));}); menu.querySelectorAll("a.mobile-link").forEach(link=>{link.addEventListener("click",()=>{btn.classList.remove("open");menu.classList.remove("open");});}); }

/* ────────── SEARCH ────────── */
function setupSearch(){ const btn=document.getElementById("search-toggle"); const dd=document.getElementById("search-dropdown"); const inp=document.getElementById("search-input"); const res=document.getElementById("search-results"); if(!btn||!dd||!inp||!res)return; btn.addEventListener("click",e=>{e.stopPropagation();dd.classList.toggle("open");if(dd.classList.contains("open"))inp.focus();}); document.addEventListener("click",()=>dd.classList.remove("open")); dd.addEventListener("click",e=>e.stopPropagation()); inp.addEventListener("input",()=>{ const q=inp.value.trim().toLowerCase(); if(!q){res.innerHTML="";return;} const clubs=DB.clubs.filter(c=>c.name.toLowerCase().includes(q)).slice(0,8); const players=DB.players.filter(p=>p.name.toLowerCase().includes(q)).slice(0,6); let h=""; clubs.forEach(c=>{h+=`<div class="search-item" data-href="#/team/${c.id}"><img src="${c.crest}" alt="${c.tla}"><div><strong>${c.name}</strong> <span class="text-muted text-small">${c.tla} · ${c.league}</span></div></div>`;}); players.forEach(p=>{h+=`<div class="search-item" data-href="#/player/${p.id}"><div class="player-avatar-placeholder" style="width:28px;height:28px;font-size:11px;">${p.name[0]}</div><div><strong>${p.name}</strong> <span class="text-muted text-small">${p.pos}</span></div></div>`;}); if(!h)h=`<div style="padding:16px;text-align:center;" class="text-muted text-small">No results</div>`; res.innerHTML=h; }); res.addEventListener("click",e=>{const item=e.target.closest("[data-href]");if(item){location.hash=item.dataset.href;dd.classList.remove("open");inp.value="";res.innerHTML="";}}); }

/* ────────── SIMULATION ────────── */
let simInterval=null;
function startSimulation(){ if(simInterval)clearInterval(simInterval); simInterval=setInterval(()=>{ let changed=false; DB.matches.forEach(m=>{ if(m.status!=="LIVE")return; const isKO=DB.rules.knockouts.includes(m.comp); if(m.minute>=90&&!m.extraTime){if(isKO&&m.homeScore===m.awayScore){m.extraTime=true;m.etScore={h:m.homeScore,a:m.awayScore};m.minute=91;toast.show(`⏱ Extra Time! ${clubName(m.home)} vs ${clubName(m.away)}`,"info");}else{m.status="FINISHED";toast.show(`🏁 FT: ${clubName(m.home)} ${m.homeScore}-${m.awayScore} ${clubName(m.away)}`,"success");}changed=true;return;} if(m.minute>=120&&m.extraTime){if(m.etScore.h===m.etScore.a){let ph=0,pa=0;for(let i=0;i<5;i++){if(Math.random()>0.25)ph++;if(Math.random()>0.25)pa++;}while(ph===pa){if(Math.random()>0.3)ph++;if(Math.random()>0.3)pa++;}m.penalties=true;m.penScore={h:ph,a:pa};m.homeScore=m.etScore.h;m.awayScore=m.etScore.a;toast.show(`⚽ Penalties! ${clubName(m.home)} ${ph}-${pa} ${clubName(m.away)}`,"success");}else{m.homeScore=m.etScore.h;m.awayScore=m.etScore.a;}m.status="FINISHED";changed=true;return;} m.minute++; if(Math.random()>0.96){const forHome=Math.random()>0.5;if(m.extraTime){if(forHome)m.etScore.h++;else m.etScore.a++;}else{if(forHome)m.homeScore++;else m.awayScore++;}const hs=m.extraTime?m.etScore.h:m.homeScore;const as=m.extraTime?m.etScore.a:m.awayScore;toast.show(`⚽ GOAL! ${clubName(m.home)} ${hs}-${as} ${clubName(m.away)}`,"success");if(m.timeline){m.timeline.push({time:m.minute,type:"goal",team:forHome?"home":"away",player:forHome?"Striker":"Winger",detail:"Live Goal"});}} changed=true; }); if(changed&&["home","live","match"].includes(state.page))router.resolve(); },12000); }

/* ────────── MATCH CARD ────────── */
function renderMatchCard(m){
  const hc=getClub(m.home)||{name:m.home,crest:"",tla:"?"};
  const ac=getClub(m.away)||{name:m.away,crest:"",tla:"?"};
  let scoreHTML=`<span class="match-score" style="font-size:18px;color:var(--text-3);">vs</span>`;
  let statusHTML=`<span class="match-status status-scheduled">${new Date(m.date).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}</span>`;
  if(m.status==="LIVE"){const hs=m.extraTime?m.etScore.h:m.homeScore;const as=m.extraTime?m.etScore.a:m.awayScore;scoreHTML=`<div class="match-score">${hs} - ${as}</div>`;let minLabel=`${m.minute}'`;let cls="";if(m.extraTime&&!m.penalties){minLabel=`ET ${m.minute-90}'`;cls="et";}if(m.penalties){minLabel=`PK ${m.penScore.h}-${m.penScore.a}`;cls="pk";}statusHTML=`<span class="match-minute ${cls} badge-live"><i class="fas fa-circle live-dot"></i> ${minLabel}</span>`;}
  else if(m.status==="FINISHED"){scoreHTML=`<div class="match-score">${m.homeScore} - ${m.awayScore}</div>`;let ftLabel="FT";if(m.extraTime)ftLabel="AET";if(m.penalties)ftLabel=`PEN ${m.penScore.h}-${m.penScore.a}`;statusHTML=`<span class="match-status status-finished">${ftLabel}</span>`;}
  const league=getLeague(m.comp);const leagueName=league?league.name:m.comp;
  return `<div class="match-card ${m.status==='LIVE'?'live-card':''}" data-href="#/match/${m.id}"><div class="match-meta"><span class="league-badge">${league?`<img src="${league.emblem}" alt="">`:""} ${leagueName}</span></div><div class="team-side"><img src="${hc.crest}" class="team-logo" alt="${hc.tla}" onerror="this.style.display='none'"><span class="team-name">${hc.name}</span></div><div class="match-center">${scoreHTML}${statusHTML}</div><div class="team-side away"><img src="${ac.crest}" class="team-logo" alt="${ac.tla}" onerror="this.style.display='none'"><span class="team-name">${ac.name}</span></div></div>`;
}

/* ────────── STANDINGS ────────── */
function calcStandings(lid){
  const clubs=DB.clubs.filter(c=>c.league===lid);
  const matches=DB.matches.filter(m=>m.comp===lid&&m.status==="FINISHED");

  const table=clubs.map(c=>{
    const baseW = c.baseW || 10;
    const baseD = c.baseD || 5;
    const baseL = c.baseL || 8;
    const baseGF = c.baseGF || 35;
    const baseGA = c.baseGA || 35;
    const basePts = c.basePts || (baseW*3 + baseD);
    return {
      team: c,
      mp: baseW + baseD + baseL,
      w: baseW,
      d: baseD,
      l: baseL,
      gf: baseGF,
      ga: baseGA,
      gd: baseGF - baseGA,
      pts: basePts
    };
  });

  matches.forEach(m=>{
    const h=table.find(r=>r.team.id===m.home);
    const a=table.find(r=>r.team.id===m.away);
    if(!h||!a)return;
    h.mp++; a.mp++;
    h.gf+=m.homeScore; h.ga+=m.awayScore;
    a.gf+=m.awayScore; a.ga+=m.homeScore;
    if(m.homeScore>m.awayScore){ h.w++; h.pts+=3; a.l++; }
    else if(m.homeScore<m.awayScore){ a.w++; a.pts+=3; h.l++; }
    else{ h.d++; h.pts+=1; a.d++; a.pts+=1; }
  });

  table.forEach(r=>r.gd=r.gf-r.ga);
  table.sort((a,b)=>b.pts-a.pts||b.gd-a.gd||b.gf-a.gf||a.team.name.localeCompare(b.team.name));
  return table;
}

/* ────────── FAN OPINIONS DATA ────────── */
function getPollData(mid){ let s=sessionStorage.getItem(`kz_poll2_${mid}`); if(s)return JSON.parse(s); return {deserved:{home:12,away:10},ref:{yes:16,no:8},rating:{sum:98,count:14},motm:{},reactions:{"🔥":8,"👏":12,"😡":4,"😂":2,"❤️":9}}; }
function savePollData(mid,d){ sessionStorage.setItem(`kz_poll2_${mid}`,JSON.stringify(d)); }
function getComments(mid){ let s=sessionStorage.getItem(`kz_cmts_${mid}`); if(s)return JSON.parse(s); const defaults={101:[{id:1,user:"LiverpoolFan99",text:"The referee should have awarded a penalty! ❌",likes:24,dislikes:3,date:"2 mins ago"},{id:2,user:"UnitedUnited",text:"Salah is unstoppable. Best in the league.",likes:18,dislikes:5,date:"10 mins ago"}],102:[{id:3,user:"Cityzen",text:"Draw is fair. Saka's goal was a masterpiece.",likes:15,dislikes:2,date:"5 mins ago"},{id:4,user:"GunnerJack",text:"Best match of the tournament!",likes:31,dislikes:4,date:"15 mins ago"}],103:[{id:5,user:"HalaMadrid",text:"Bellingham is the Ballon d'Or winner. Absolute boss! 🔥",likes:55,dislikes:2,date:"20 mins ago"},{id:6,user:"CulèPower",text:"Araújo red card was harsh. Ref ruined El Clásico.",likes:12,dislikes:48,date:"22 mins ago"}]}; return defaults[mid]||[{id:10,user:"FootballLover",text:"Fantastic match! Great intensity.",likes:10,dislikes:1,date:"10 mins ago"}]; }
function saveComments(mid,c){ sessionStorage.setItem(`kz_cmts_${mid}`,JSON.stringify(c)); }

/* ────────── WINDOW HANDLERS ────────── */
window.votePoll=function(mid,cat,choice){let d=getPollData(mid);d[cat][choice]++;savePollData(mid,d);toast.show("Vote counted! ✅","success");router.resolve();};
window.rateMatch=function(mid){const sel=document.getElementById("rate-sel");if(!sel)return;let d=getPollData(mid);d.rating.sum+=parseInt(sel.value);d.rating.count++;savePollData(mid,d);toast.show("Rating submitted! ⭐","success");router.resolve();};
window.reactMatch=function(mid,emoji){let d=getPollData(mid);if(!d.reactions[emoji])d.reactions[emoji]=0;d.reactions[emoji]++;savePollData(mid,d);router.resolve();};
window.voteMotm=function(mid,pid){let d=getPollData(mid);if(!d.motm[pid])d.motm[pid]=0;d.motm[pid]++;savePollData(mid,d);toast.show("MOTM vote counted! ⭐","success");router.resolve();};
window.postComment=function(mid){const inp=document.getElementById("cmt-input");if(!inp)return;const val=inp.value.trim();if(!val)return;let c=getComments(mid);c.unshift({id:Date.now(),user:state.user?state.user.username:"GuestFan",text:val,likes:0,dislikes:0,date:"Just now"});saveComments(mid,c);inp.value="";toast.show("Comment posted! 💬","success");router.resolve();};
window.likeComment=function(mid,cid,isLike){let c=getComments(mid);const cm=c.find(x=>x.id===cid);if(cm){if(isLike)cm.likes++;else cm.dislikes++;saveComments(mid,c);router.resolve();}};

/* ═══════════════════════════════════════════════
   ROUTER
   ═══════════════════════════════════════════════ */
const router={routes:{},add(path,fn){this.routes[path]=fn;},init(){window.addEventListener("hashchange",()=>this.resolve());if(!location.hash)location.hash="#/";this.resolve();},resolve(){const hash=location.hash||"#/";for(const route in this.routes){const re=new RegExp("^"+route.replace(/:[^\s/]+/g,"([^/]+)")+"$");const match=hash.match(re);if(match){const paramNames=(route.match(/:[^\s/]+/g)||[]).map(n=>n.slice(1));const params={};paramNames.forEach((n,i)=>params[n]=match[i+1]);const pageName=route.replace("#/","").split("/")[0]||"home";if(!auth.guard(pageName))return;state.page=pageName;state.params=params;document.querySelectorAll(".nav-link,.mobile-link").forEach(l=>l.classList.remove("active"));const sel=document.querySelector(`.nav-link[href='${hash}']`)||document.querySelector(`.nav-link[href='#/${pageName}']`);if(sel)sel.classList.add("active");const root=document.getElementById("app-root");try{root.innerHTML=this.routes[route](params);applyLang();window.scrollTo(0,0);}catch(err){root.innerHTML=`<div class="page"><div class="error-state"><i class="fas fa-exclamation-circle error-icon"></i><div class="error-title">Error</div><div class="error-text">${err.message}</div></div></div>`;}return;}}location.hash="#/";}};

/* ═══════════════════════════════════════════════
   PAGES
   ═══════════════════════════════════════════════ */

// ─── HOME ───
router.add("#/",()=>{
  const live=DB.matches.filter(m=>m.status==="LIVE");
  const upcoming=DB.matches.filter(m=>m.status==="SCHEDULED");
  const finished=DB.matches.filter(m=>m.status==="FINISHED");
  const trending=DB.matches.filter(m=>["LIVE","FINISHED"].includes(m.status)).slice(0,2);
  const globalTopScorers=DB.players.sort((a,b)=>b.stats.goals-a.stats.goals).slice(0,5);

  return `<div class="page">
    <div class="hero" style="border:1px solid var(--border);overflow:hidden;border-radius:var(--radius-lg);position:relative;padding:48px;text-align:center;margin-bottom:32px;background:linear-gradient(185deg,rgba(15,139,76,0.2),rgba(11,18,32,0.85));">
      <div style="font-size:13px;font-weight:700;color:var(--accent-2);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:12px;"><i class="fas fa-star logo-accent"></i> OFFICIAL 5 LEAGUES ENGINE · 96 CLUBS <i class="fas fa-star logo-accent"></i></div>
      <h1 style="font-size:36px;font-weight:900;line-height:1.2;margin-bottom:12px;" data-i18n="home_title">${T("home_title")}</h1>
      <p style="font-size:15px;color:var(--text-2);max-width:600px;margin:0 auto 24px;">Full 20 & 18 team standings for Premier League, La Liga, Serie A, Bundesliga, and Ligue 1.</p>
      <div style="display:flex;justify-content:center;gap:16px;flex-wrap:wrap;"><a href="#/live" class="btn-primary" style="padding:10px 24px;">View Live Scores</a><a href="#/ucl" class="btn-secondary" style="padding:10px 24px;border:1px solid var(--border);">Champions League</a></div>
    </div>

    ${trending.length?`<div class="section"><h2 class="section-title mb-16"><i class="fas fa-fire logo-accent"></i> Trending Matches</h2><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:20px;margin-bottom:32px;">${trending.map(m=>{const hc=getClub(m.home);const ac=getClub(m.away);const hs=m.extraTime?m.etScore.h:m.homeScore;const as=m.extraTime?m.etScore.a:m.awayScore;return`<div class="card p-24" style="cursor:pointer;" data-href="#/match/${m.id}"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;"><span style="font-size:11px;font-weight:700;color:var(--accent-2);"><i class="fas fa-bolt"></i> TRENDING</span><span class="badge ${m.status==='LIVE'?'badge-live':'badge-done'}">${m.status}</span></div><div style="display:flex;justify-content:space-between;align-items:center;"><div style="text-align:center;flex:1;"><img src="${hc.crest}" style="width:48px;height:48px;object-fit:contain;margin:0 auto 6px;"><div style="font-size:13px;font-weight:700;">${hc.name}</div></div><div style="font-size:24px;font-weight:900;padding:0 20px;">${m.status!=='SCHEDULED'?`${hs} - ${as}`:'vs'}</div><div style="text-align:center;flex:1;"><img src="${ac.crest}" style="width:48px;height:48px;object-fit:contain;margin:0 auto 6px;"><div style="font-size:13px;font-weight:700;">${ac.name}</div></div></div></div>`;}).join("")}</div></div>`:""}

    <div class="sidebar-layout"><div>
      <div class="section"><div class="section-header"><h2 class="section-title"><i class="fas fa-circle live-dot"></i> <span data-i18n="live_scores">${T("live_scores")}</span></h2><a href="#/live" class="section-link">View All <i class="fas fa-chevron-right"></i></a></div><div class="matches-grid">${live.length?live.map(renderMatchCard).join(""):`<div class="text-muted" style="padding:20px;">No live matches currently.</div>`}</div></div>
      <div class="section"><div class="section-header"><h2 class="section-title"><i class="fas fa-calendar"></i> <span data-i18n="upcoming_matches">${T("upcoming_matches")}</span></h2><a href="#/schedule" class="section-link">View All <i class="fas fa-chevron-right"></i></a></div><div class="matches-grid">${upcoming.map(renderMatchCard).join("")}</div></div>
      <div class="section"><div class="section-header"><h2 class="section-title"><i class="fas fa-flag-checkered"></i> <span data-i18n="finished_matches">${T("finished_matches")}</span></h2></div><div class="matches-grid">${finished.map(renderMatchCard).join("")}</div></div>
      <div class="section"><div class="section-header"><h2 class="section-title"><i class="fas fa-newspaper"></i> <span data-i18n="news_title">${T("news_title")}</span></h2><a href="#/news" class="section-link">View All <i class="fas fa-chevron-right"></i></a></div><div class="news-grid">${DB.news.slice(0,2).map(n=>{const club=n.clubId?getClub(n.clubId):null;return`<div class="news-card" data-href="#/news/${n.id}"><div style="height:180px;background:${n.gradient};display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;">${club?`<img src="${club.crest}" style="width:70px;height:70px;object-fit:contain;opacity:0.35;position:absolute;right:20px;bottom:15px;">`:""}<i class="fas ${n.icon}" style="font-size:48px;color:rgba(255,255,255,0.3);"></i></div><div class="news-card-body"><span class="news-card-tag">${n.tag}</span><h3 class="news-card-title">${n.title}</h3><span class="news-card-meta"><i class="fas fa-clock"></i> ${n.date}</span></div></div>`;}).join("")}</div></div>
    </div>
    <div class="sidebar">
      <div class="sidebar-card"><div class="sidebar-card-header"><i class="fas fa-exchange-alt logo-accent"></i> Transfer Rumors</div><div class="sidebar-card-body" style="display:flex;flex-direction:column;gap:10px;padding:12px;">${DB.transfers.map(t=>`<div style="background:rgba(255,255,255,0.02);border:1px solid var(--border);padding:10px 14px;border-radius:var(--radius-sm);display:flex;justify-content:space-between;align-items:center;"><div><strong style="font-size:13px;">${t.player}</strong><div style="font-size:11px;color:var(--text-2);">${t.from} ➔ ${t.to}</div></div><div style="text-align:right;"><div style="font-size:12px;font-weight:700;color:var(--accent-2);">${t.fee}</div><span style="font-size:9px;font-weight:600;text-transform:uppercase;" class="badge">${t.status}</span></div></div>`).join("")}</div></div>
      <div class="sidebar-card"><div class="sidebar-card-header"><i class="fas fa-trophy"></i> Official Leagues</div><div class="sidebar-card-body">${DB.leagues.map(l=>`<a href="#/league/${l.id}" style="display:flex;align-items:center;justify-content:space-between;padding:10px 8px;border-radius:8px;transition:all .2s;" onmouseover="this.style.background='var(--card-hover)'" onmouseout="this.style.background='transparent'"><div style="display:flex;align-items:center;gap:12px;"><img src="${l.emblem}" style="width:26px;height:26px;object-fit:contain;"> <span style="font-size:14px;font-weight:600;">${l.name}</span></div><span class="badge badge-done" style="font-size:10px;">${l.teamsCount||""} teams</span></a>`).join("")}</div></div>
      <div class="sidebar-card"><div class="sidebar-card-header"><i class="fas fa-futbol logo-accent"></i> Global Top Scorers</div><div class="sidebar-card-body" style="padding:12px;display:flex;flex-direction:column;gap:8px;">${globalTopScorers.map((s,i)=>{const c=getClub(s.teamId);return`<div style="display:flex;justify-content:space-between;align-items:center;padding:4px 0;"><div style="display:flex;align-items:center;gap:8px;"><span style="font-weight:700;font-size:12px;color:var(--text-3);width:15px;">${i+1}</span><img src="${c?c.crest:''}" style="width:20px;height:20px;object-fit:contain;"><span style="font-size:13px;font-weight:600;">${s.name}</span></div><strong style="color:var(--accent-2);font-size:13px;">${s.stats.goals}</strong></div>`;}).join("")}</div></div>
    </div></div>
  </div>`;
});

// ─── LIVE ───
router.add("#/live",()=>{const live=DB.matches.filter(m=>m.status==="LIVE");return`<div class="page"><h2 class="section-title mb-24"><i class="fas fa-circle live-dot"></i> <span data-i18n="live_scores">${T("live_scores")}</span></h2><div class="matches-grid">${live.length?live.map(renderMatchCard).join(""):`<div class="empty-state"><div class="empty-state-icon"><i class="fas fa-futbol"></i></div><div class="empty-state-title">No Live Matches</div><div class="empty-state-text">Check back later for live action.</div></div>`}</div></div>`;});

// ─── SCHEDULE ───
router.add("#/schedule",()=>{const upcoming=DB.matches.filter(m=>m.status==="SCHEDULED");const finished=DB.matches.filter(m=>m.status==="FINISHED");return`<div class="page"><h2 class="section-title mb-24"><i class="fas fa-calendar"></i> ${T("upcoming_matches")}</h2><div class="matches-grid mb-24">${upcoming.length?upcoming.map(renderMatchCard).join(""):`<div class="text-muted" style="padding:20px;">No upcoming fixtures.</div>`}</div><h2 class="section-title mb-24"><i class="fas fa-flag-checkered"></i> ${T("finished_matches")}</h2><div class="matches-grid">${finished.map(renderMatchCard).join("")}</div></div>`;});

// ─── LEAGUE ───
router.add("#/league/:id",(p)=>{
  const league=getLeague(p.id);if(!league)return`<div class="page"><div class="error-state"><div class="error-title">League not found</div></div></div>`;
  const table=calcStandings(p.id);
  const clubs=DB.clubs.filter(c=>c.league===p.id);
  const matches=DB.matches.filter(m=>m.comp===p.id);

  // Isolated per-league top scorers and assists
  const leagueScorers = getLeagueTopScorers(p.id);
  const leagueAssists = getLeagueTopAssists(p.id);

  return`<div class="page">
  <div class="team-hero"><img src="${league.emblem}" alt="${league.name}" class="team-badge"><div class="team-hero-info"><h1 class="team-hero-name">${league.name}</h1><div class="team-hero-meta"><span class="team-meta-item"><i class="fas fa-globe"></i> ${league.country}</span><span class="team-meta-item"><i class="fas fa-users"></i> ${clubs.length} Official Clubs</span></div></div></div>
  <div class="sidebar-layout mt-24"><div>
    <div class="section"><h2 class="section-title mb-16"><i class="fas fa-list-ol"></i> ${league.name} Table (${clubs.length} Teams)</h2>
    <div class="standings-wrap card"><table class="standings-table"><thead><tr><th>Pos</th><th>Team</th><th>MP</th><th>W</th><th>D</th><th>L</th><th>GF</th><th>GA</th><th>GD</th><th class="pts">PTS</th></tr></thead><tbody>${table.map((r,i)=>{
      let posCls="";
      if(i<4) posCls="pos-ucl";
      else if(i===4||i===5) posCls="pos-europa";
      else if(i>=table.length-3) posCls="pos-rel";
      return `<tr data-href="#/team/${r.team.id}" style="cursor:pointer;"><td class="pos ${posCls}">${i+1}</td><td><div class="team-col"><img src="${r.team.crest}" alt="${r.team.tla}"> <span>${r.team.name}</span></div></td><td>${r.mp}</td><td>${r.w}</td><td>${r.d}</td><td>${r.l}</td><td>${r.gf}</td><td>${r.ga}</td><td>${r.gd}</td><td class="pts">${r.pts}</td></tr>`;
    }).join("")}</tbody></table></div></div>
    <div class="section"><h2 class="section-title mb-16"><i class="fas fa-futbol"></i> League Fixtures & Results</h2><div class="matches-grid">${matches.length?matches.map(renderMatchCard).join(""):`<div class="text-muted p-20 card">No active fixtures for this round.</div>`}</div></div>
  </div>
  <div class="sidebar">
    <div class="sidebar-card"><div class="sidebar-card-header"><i class="fas fa-futbol logo-accent"></i> ${league.name} Top Scorers</div><div class="sidebar-card-body" style="padding:12px;display:flex;flex-direction:column;gap:8px;">${leagueScorers.length?leagueScorers.map((s,i)=>`<div style="display:flex;justify-content:space-between;align-items:center;"><div style="display:flex;align-items:center;gap:8px;"><span style="font-weight:700;font-size:12px;color:var(--text-3);">${i+1}</span><img src="${s.crest}" style="width:20px;height:20px;object-fit:contain;"><span style="font-size:13px;font-weight:600;">${s.name} (${s.club})</span></div><strong style="color:var(--accent-2);font-size:13px;">${s.goals}</strong></div>`).join(""):`<div class="text-muted text-small p-8">No stats available</div>`}</div></div>
    <div class="sidebar-card"><div class="sidebar-card-header"><i class="fas fa-hands-helping logo-accent"></i> ${league.name} Top Assists</div><div class="sidebar-card-body" style="padding:12px;display:flex;flex-direction:column;gap:8px;">${leagueAssists.length?leagueAssists.map((s,i)=>`<div style="display:flex;justify-content:space-between;align-items:center;"><div style="display:flex;align-items:center;gap:8px;"><span style="font-weight:700;font-size:12px;color:var(--text-3);">${i+1}</span><img src="${s.crest}" style="width:20px;height:20px;object-fit:contain;"><span style="font-size:13px;font-weight:600;">${s.name} (${s.club})</span></div><strong style="color:var(--accent);font-size:13px;">${s.assists}</strong></div>`).join(""):`<div class="text-muted text-small p-8">No stats available</div>`}</div></div>
    <div class="sidebar-card"><div class="sidebar-card-header"><i class="fas fa-shield-alt"></i> League Clubs (${clubs.length})</div><div class="sidebar-card-body" style="max-height:300px;overflow-y:auto;display:flex;flex-direction:column;gap:6px;">${clubs.map(c=>`<div data-href="#/team/${c.id}" style="display:flex;align-items:center;gap:10px;padding:6px 8px;border-radius:6px;cursor:pointer;font-size:13px;" onmouseover="this.style.background='var(--card-hover)'" onmouseout="this.style.background='transparent'"><img src="${c.crest}" style="width:22px;height:22px;object-fit:contain;"> <span>${c.name}</span></div>`).join("")}</div></div>
  </div></div></div>`;
});

// ─── TEAM ───
router.add("#/team/:id",(p)=>{
  const club=getClub(p.id);if(!club)return`<div class="page"><div class="error-state"><div class="error-title">Club not found</div></div></div>`;
  const squad=DB.players.filter(pl=>pl.teamId===p.id);
  const matches=DB.matches.filter(m=>m.home===p.id||m.away===p.id);
  const league=getLeague(club.league);
  return`<div class="page"><div class="team-hero"><img src="${club.crest}" alt="${club.tla}" class="team-badge"><div class="team-hero-info"><h1 class="team-hero-name">${club.name}</h1><div class="team-hero-meta"><span class="team-meta-item"><i class="fas fa-trophy"></i> ${league?league.name:club.league}</span><span class="team-meta-item"><i class="fas fa-map-marker-alt"></i> ${club.stadium}</span><span class="team-meta-item"><i class="fas fa-calendar-alt"></i> Founded ${club.founded}</span><span class="team-meta-item"><i class="fas fa-user-tie"></i> ${club.coach}</span></div></div></div>${squad.length?`<div class="section"><h2 class="section-title mb-16"><i class="fas fa-users"></i> Key Squad</h2><div class="squad-grid">${squad.map(pl=>`<div class="squad-card" data-href="#/player/${pl.id}"><span class="squad-num">${pl.num}</span><div class="squad-info"><div class="squad-name">${pl.name}</div><div class="squad-pos">${pl.pos} · ⭐ ${pl.rating}</div></div><span class="squad-flag">${pl.nationality}</span></div>`).join("")}</div></div>`:""}<div class="section"><h2 class="section-title mb-16"><i class="fas fa-futbol"></i> Fixtures & Results</h2><div class="matches-grid">${matches.length?matches.map(renderMatchCard).join(""):`<div class="text-muted card p-20">No active matches scheduled.</div>`}</div></div></div>`;
});

// ─── PLAYER ───
router.add("#/player/:id",(p)=>{const pl=DB.players.find(x=>x.id===p.id);if(!pl)return`<div class="page"><div class="error-state"><div class="error-title">Player not found</div></div></div>`;return`<div class="page"><div class="player-hero"><div class="player-avatar-placeholder" style="width:120px;height:120px;font-size:42px;">${pl.name[0]}</div><div><h1 class="player-hero-name">${pl.name}</h1><div class="player-hero-pos">${pl.pos} · #${pl.num}</div><div class="player-hero-meta"><span class="player-meta-item"><i class="fas fa-shield-alt"></i> ${clubName(pl.teamId)}</span><span class="player-meta-item"><i class="fas fa-flag"></i> ${pl.nationality}</span><span class="player-meta-item"><i class="fas fa-birthday-cake"></i> ${pl.age} years</span><span class="player-meta-item"><i class="fas fa-star"></i> Rating: ${pl.rating}</span><span class="player-meta-item"><i class="fas fa-tag"></i> ${pl.value}</span></div></div></div><div class="section"><h2 class="section-title mb-16"><i class="fas fa-chart-bar"></i> Season Stats</h2><div class="stats-grid-3"><div class="stat-card"><div class="stat-card-num">${pl.stats.goals}</div><div class="stat-card-lbl">Goals</div></div><div class="stat-card"><div class="stat-card-num">${pl.stats.assists}</div><div class="stat-card-lbl">Assists</div></div><div class="stat-card"><div class="stat-card-num">${pl.stats.minutes}</div><div class="stat-card-lbl">Minutes</div></div></div></div></div>`;});

// ─── UCL ───
router.add("#/ucl",()=>`<div class="page"><div class="ucl-hero"><img src="${C}CL.png" class="ucl-logo" alt="UCL"><div class="ucl-title">UEFA Champions League</div><div class="ucl-subtitle">The pinnacle of European club football</div></div><div class="section"><h2 class="section-title mb-16"><i class="fas fa-sitemap"></i> Knockout Bracket</h2><div class="bracket"><div class="bracket-round"><div class="bracket-round-title">Semi-Finals</div><div class="bracket-match"><div class="bracket-team winner"><img src="${C}5.png"> Bayern Munich <span class="bracket-team-score">3</span></div><div class="bracket-team"><img src="${C}86.png"> Real Madrid <span class="bracket-team-score">2</span></div></div><div class="bracket-match"><div class="bracket-team"><img src="${C}108.png"> Inter Milan <span class="bracket-team-score">1</span></div><div class="bracket-team winner"><img src="${C}98.png"> AC Milan <span class="bracket-team-score">2</span></div></div></div><div class="bracket-round"><div class="bracket-round-title">Final</div><div class="bracket-match" style="margin-top:40px;"><div class="bracket-team"><img src="${C}5.png"> Bayern Munich <span class="bracket-team-score">0 (4)</span></div><div class="bracket-team winner"><img src="${C}98.png"> AC Milan <span class="bracket-team-score">0 (5)</span></div></div></div></div></div><div class="section"><h2 class="section-title mb-16"><i class="fas fa-futbol"></i> Live UCL Matches</h2><div class="matches-grid">${DB.matches.filter(m=>m.comp==="CL").map(renderMatchCard).join("")||`<div class="text-muted">No UCL matches.</div>`}</div></div></div>`);

// ─── NEWS ───
router.add("#/news",()=>`<div class="page"><h2 class="section-title mb-24"><i class="fas fa-newspaper"></i> ${T("news_title")}</h2><div class="news-grid">${DB.news.map(n=>{const club=n.clubId?getClub(n.clubId):null;return`<div class="news-card" data-href="#/news/${n.id}"><div style="height:180px;background:${n.gradient};display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;">${club?`<img src="${club.crest}" style="width:70px;height:70px;object-fit:contain;opacity:0.35;position:absolute;right:20px;bottom:15px;">`:""}<i class="fas ${n.icon}" style="font-size:48px;color:rgba(255,255,255,0.3);"></i></div><div class="news-card-body"><span class="news-card-tag">${n.tag}</span><h3 class="news-card-title">${n.title}</h3><p class="text-muted text-small mb-8">${n.desc}</p><span class="news-card-meta"><i class="fas fa-clock"></i> ${n.date}</span></div></div>`;}).join("")}</div></div>`);

// ─── NEWS DETAIL ───
router.add("#/news/:id",(p)=>{const article=DB.news.find(n=>n.id===parseInt(p.id));if(!article)return`<div class="page"><div class="error-state"><div class="error-title">Article not found</div></div></div>`;const club=article.clubId?getClub(article.clubId):null;const paragraphs=article.content.split('\\n\\n').map(p=>`<p style="margin-bottom:16px;line-height:1.8;font-size:15px;">${p}</p>`).join("");return`<div class="page" style="max-width:800px;"><a href="#/news" style="display:inline-flex;align-items:center;gap:6px;color:var(--accent);font-size:14px;font-weight:600;margin-bottom:24px;"><i class="fas fa-arrow-left"></i> Back to News</a><div style="height:260px;background:${article.gradient};border-radius:var(--radius-lg);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;margin-bottom:32px;">${club?`<img src="${club.crest}" style="width:100px;height:100px;object-fit:contain;opacity:0.25;position:absolute;right:40px;bottom:30px;">`:""}<i class="fas ${article.icon}" style="font-size:72px;color:rgba(255,255,255,0.2);"></i></div><span class="news-card-tag" style="margin-bottom:12px;display:inline-block;">${article.tag}</span><h1 style="font-size:28px;font-weight:900;line-height:1.3;margin-bottom:12px;">${article.title}</h1><div style="display:flex;align-items:center;gap:16px;margin-bottom:32px;color:var(--text-2);font-size:13px;"><span><i class="fas fa-clock"></i> ${article.date}</span>${club?`<span><i class="fas fa-shield-alt"></i> ${club.name}</span>`:""}<span><i class="fas fa-book-reader"></i> 4 min read</span></div><div style="border-top:1px solid var(--border);padding-top:24px;">${paragraphs}</div>${club?`<div style="margin-top:32px;padding:20px;background:var(--card);border:1px solid var(--border);border-radius:var(--radius);display:flex;align-items:center;gap:16px;cursor:pointer;" data-href="#/team/${club.id}"><img src="${club.crest}" style="width:48px;height:48px;object-fit:contain;"><div><div style="font-weight:700;">${club.name}</div><div style="font-size:12px;color:var(--text-2);">View Club Profile →</div></div></div>`:""}</div>`;});

// ─── MATCH DETAIL PAGE ───
router.add("#/match/:id",(p)=>{
  const m=DB.matches.find(x=>x.id===parseInt(p.id));
  if(!m)return`<div class="page"><div class="error-state"><div class="error-title">Match not found</div></div></div>`;
  const hc=getClub(m.home)||{name:m.home,crest:"",id:m.home};const ac=getClub(m.away)||{name:m.away,crest:"",id:m.away};const league=getLeague(m.comp);
  const hs=m.extraTime?m.etScore.h:m.homeScore;const as=m.extraTime?m.etScore.a:m.awayScore;
  const poll=getPollData(m.id);const comments=getComments(m.id);const sorted=[...comments].sort((a,b)=>b.likes-a.likes);
  const desT=poll.deserved.home+poll.deserved.away||1;const desH=Math.round(poll.deserved.home/desT*100);const desA=100-desH;
  const refT=poll.ref.yes+poll.ref.no||1;const refY=Math.round(poll.ref.yes/refT*100);const refN=100-refY;
  const avgR=poll.rating.count?(poll.rating.sum/poll.rating.count).toFixed(1):"N/A";

  // Timeline
  let timelineHTML="";
  if(m.timeline&&m.timeline.length){timelineHTML=`<div class="card p-24 mb-24"><h3 style="font-size:16px;font-weight:700;margin-bottom:16px;"><i class="fas fa-history logo-accent"></i> Match Timeline</h3><div style="position:relative;padding-left:20px;border-left:2px solid var(--border);">${m.timeline.map(e=>{const icon=e.type==="goal"?"fa-futbol":"fa-square";const color=e.type==="goal"?"color:var(--accent-win);":e.type==="red"?"color:var(--accent-live);":"color:var(--accent-draw);";return`<div style="margin-bottom:16px;position:relative;"><div style="position:absolute;left:-27px;top:3px;background:var(--bg);border:2px solid var(--border);border-radius:50%;width:16px;height:16px;display:flex;align-items:center;justify-content:center;"><i class="fas ${icon}" style="font-size:8px;${color}"></i></div><div style="font-size:12px;font-weight:700;color:var(--accent-2);">${e.time}'</div><div style="font-size:14px;font-weight:700;">${e.player} <span style="font-weight:400;font-size:12px;color:var(--text-2);">(${e.detail})</span></div><div style="font-size:11px;color:var(--text-3);text-transform:uppercase;">${e.team==="home"?hc.name:ac.name}</div></div>`;}).join("")}</div></div>`;}

  // Lineups
  let lineupsHTML="";
  if(m.lineups){lineupsHTML=`<div class="card p-24 mb-24"><h3 style="font-size:16px;font-weight:700;margin-bottom:16px;"><i class="fas fa-tshirt logo-accent"></i> Lineups & Formations</h3><div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;"><div><h4 style="font-size:14px;font-weight:700;margin-bottom:8px;color:var(--accent-2);">${hc.name} (${m.lineups.home.formation})</h4><ul style="font-size:13px;display:flex;flex-direction:column;gap:5px;">${m.lineups.home.starting.map(p=>`<li><i class="fas fa-user-circle" style="color:var(--accent);margin-right:6px;"></i>${p}</li>`).join("")}</ul><div style="margin-top:10px;font-size:11px;color:var(--text-3);">Bench: ${m.lineups.home.bench.join(", ")}</div></div><div><h4 style="font-size:14px;font-weight:700;margin-bottom:8px;color:var(--accent-2);">${ac.name} (${m.lineups.away.formation})</h4><ul style="font-size:13px;display:flex;flex-direction:column;gap:5px;">${m.lineups.away.starting.map(p=>`<li><i class="fas fa-user-circle" style="color:var(--accent);margin-right:6px;"></i>${p}</li>`).join("")}</ul><div style="margin-top:10px;font-size:11px;color:var(--text-3);">Bench: ${m.lineups.away.bench.join(", ")}</div></div></div></div>`;}

  // Stats
  let statsHTML="";
  if(m.stats){const SL=[["possession","Possession","%"],["shots","Total Shots",""],["shotsOnTarget","Shots on Target",""],["corners","Corners",""],["offsides","Offsides",""],["fouls","Fouls",""],["yellowCards","Yellow Cards",""],["redCards","Red Cards",""],["passes","Passes",""],["passAccuracy","Pass Accuracy","%"]];statsHTML=`<div class="card p-24 mb-24"><h3 style="font-size:16px;font-weight:700;text-align:center;margin-bottom:20px;"><i class="fas fa-chart-bar" style="color:var(--accent);"></i> Match Statistics</h3>${SL.map(([k,l,s])=>{const hv=m.stats[k][0];const av=m.stats[k][1];const t=hv+av||1;const hp=Math.round(hv/t*100);const ap=100-hp;const hC=hv>av?"var(--accent)":"var(--text-3)";const aC=av>hv?"var(--accent)":"var(--text-3)";return`<div style="margin-bottom:14px;"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;"><span style="font-size:14px;font-weight:700;color:${hC};">${hv}${s}</span><span style="font-size:12px;color:var(--text-2);font-weight:500;">${l}</span><span style="font-size:14px;font-weight:700;color:${aC};">${av}${s}</span></div><div style="display:flex;gap:4px;height:6px;"><div style="flex:${hp};background:${hC};border-radius:3px 0 0 3px;"></div><div style="flex:${ap};background:${aC};border-radius:0 3px 3px 0;"></div></div></div>`;}).join("")}</div>`;}else{statsHTML=`<div class="card p-24 mb-24" style="text-align:center;color:var(--text-2);"><i class="fas fa-clock" style="font-size:28px;margin-bottom:12px;color:var(--text-3);display:block;"></i>Statistics will be available once the match starts.</div>`;}

  // MOTM voting
  let motmHTML="";
  if(m.motmCandidates){const motmPlayers=m.motmCandidates.map(pid=>DB.players.find(p=>p.id===pid)).filter(Boolean);const motmVotes=poll.motm||{};const totalMotm=Object.values(motmVotes).reduce((a,b)=>a+b,0)||1;motmHTML=`<div class="card p-24 mb-24"><h3 style="font-size:16px;font-weight:700;margin-bottom:16px;"><i class="fas fa-medal logo-accent"></i> Man of the Match</h3><div style="display:flex;flex-direction:column;gap:10px;">${motmPlayers.map(pl=>{const votes=motmVotes[pl.id]||0;const pct=Math.round(votes/totalMotm*100);return`<button class="btn-secondary" style="width:100%;display:flex;justify-content:space-between;padding:12px 16px;font-size:13px;" onclick="voteMotm(${m.id},'${pl.id}')"><span>⭐ ${pl.name} (${clubName(pl.teamId)})</span><strong>${pct}%</strong></button>`;}).join("")}</div></div>`;}

  // Polls
  let pollHTML=`<div class="card p-24 mb-24"><h3 style="font-size:16px;font-weight:700;margin-bottom:16px;"><i class="fas fa-poll logo-accent"></i> Fan Opinions</h3>
    <div style="margin-bottom:20px;"><h4 style="font-size:13px;font-weight:700;margin-bottom:8px;">🗳 Who deserved to win?</h4><div style="display:flex;gap:10px;"><button class="btn-secondary" style="flex:1;display:flex;justify-content:space-between;" onclick="votePoll(${m.id},'deserved','home')"><span>${hc.name}</span><strong>${desH}%</strong></button><button class="btn-secondary" style="flex:1;display:flex;justify-content:space-between;" onclick="votePoll(${m.id},'deserved','away')"><span>${ac.name}</span><strong>${desA}%</strong></button></div></div>
    <div style="margin-bottom:20px;"><h4 style="font-size:13px;font-weight:700;margin-bottom:8px;">⚖️ Was the referee fair?</h4><div style="display:flex;gap:10px;"><button class="btn-secondary" style="flex:1;display:flex;justify-content:space-between;" onclick="votePoll(${m.id},'ref','yes')"><span>Yes / نعم</span><strong>${refY}%</strong></button><button class="btn-secondary" style="flex:1;display:flex;justify-content:space-between;" onclick="votePoll(${m.id},'ref','no')"><span>No / ظلم</span><strong>${refN}%</strong></button></div></div>
    <div style="margin-bottom:20px;"><h4 style="font-size:13px;font-weight:700;margin-bottom:8px;">⭐ Rate this match: Average ${avgR}/10</h4><div style="display:flex;gap:10px;"><select id="rate-sel" class="form-input" style="flex:1;font-size:13px;height:38px;"><option value="10">10/10 Masterpiece</option><option value="8">8/10 Great</option><option value="6">6/10 Average</option><option value="4">4/10 Boring</option><option value="2">2/10 Terrible</option></select><button class="btn-primary" onclick="rateMatch(${m.id})" style="height:38px;padding:0 16px;">Rate</button></div></div>
    <div><h4 style="font-size:13px;font-weight:700;margin-bottom:10px;">React:</h4><div style="display:flex;gap:14px;justify-content:center;">${Object.entries(poll.reactions).map(([e,c])=>`<button style="font-size:20px;display:flex;flex-direction:column;align-items:center;gap:2px;" onclick="reactMatch(${m.id},'${e}')"><span>${e}</span><span style="font-size:10px;font-weight:700;color:var(--text-3);">${c}</span></button>`).join("")}</div></div>
  </div>`;

  // Comments
  let cmtHTML=`<div class="card p-24"><h3 style="font-size:16px;font-weight:700;margin-bottom:16px;"><i class="fas fa-comments logo-accent"></i> Discussion Arena</h3><div style="display:flex;gap:10px;margin-bottom:16px;"><input type="text" class="form-input" id="cmt-input" placeholder="Post your opinion..." style="flex:1;font-size:13px;height:38px;"><button class="btn-primary" onclick="postComment(${m.id})" style="height:38px;padding:0 16px;">Post</button></div><div style="display:flex;flex-direction:column;gap:10px;max-height:350px;overflow-y:auto;padding-right:4px;">${sorted.map(c=>`<div style="background:rgba(255,255,255,0.02);border:1px solid var(--border);padding:12px;border-radius:var(--radius-sm);"><div style="display:flex;justify-content:space-between;margin-bottom:6px;font-size:11px;"><strong style="color:var(--accent);">@${c.user}</strong><span class="text-muted">${c.date}</span></div><div style="font-size:13px;line-height:1.4;margin-bottom:10px;">${c.text}</div><div style="display:flex;gap:14px;font-size:12px;"><button onclick="likeComment(${m.id},${c.id},true)" style="display:flex;align-items:center;gap:4px;color:var(--accent-win);"><i class="fas fa-thumbs-up"></i> ${c.likes}</button><button onclick="likeComment(${m.id},${c.id},false)" style="display:flex;align-items:center;gap:4px;color:var(--accent-live);"><i class="fas fa-thumbs-down"></i> ${c.dislikes}</button></div></div>`).join("")}</div></div>`;

  return`<div class="page">
    <a href="#/" style="display:inline-flex;align-items:center;gap:6px;color:var(--accent);font-size:14px;font-weight:600;margin-bottom:24px;"><i class="fas fa-arrow-left"></i> Back to Home</a>
    <div class="team-hero" style="padding:40px;justify-content:center;margin-bottom:32px;background:linear-gradient(180deg,rgba(15,139,76,0.15),rgba(11,18,32,0.95));border:1px solid var(--border);">
      <div style="display:flex;align-items:center;gap:32px;width:100%;max-width:800px;justify-content:space-between;flex-wrap:wrap;">
        <div style="text-align:center;flex:1;min-width:120px;cursor:pointer;" onclick="location.hash='#/team/${hc.id}'"><img src="${hc.crest}" style="width:80px;height:80px;margin:0 auto 12px;object-fit:contain;"><div style="font-size:18px;font-weight:800;">${hc.name}</div></div>
        <div style="text-align:center;min-width:150px;">${league?`<div style="font-size:12px;color:var(--text-2);margin-bottom:8px;text-transform:uppercase;letter-spacing:1px;">${league.name}</div>`:""}<div style="font-size:42px;font-weight:900;letter-spacing:2px;">${m.status!=='SCHEDULED'?`${hs} - ${as}`:'vs'}</div><div style="margin-top:8px;">${m.status==='LIVE'?`<span class="match-minute badge-live"><i class="fas fa-circle live-dot"></i> ${m.minute}'</span>`:`<span class="badge badge-done">${m.status}</span>`}</div>${m.extraTime?`<div style="font-size:12px;color:var(--accent-draw);margin-top:6px;font-weight:600;">Extra Time</div>`:""} ${m.penalties?`<div style="font-size:13px;color:var(--accent-2);margin-top:4px;font-weight:700;">Penalties: ${m.penScore.h} - ${m.penScore.a}</div>`:""}</div>
        <div style="text-align:center;flex:1;min-width:120px;cursor:pointer;" onclick="location.hash='#/team/${ac.id}'"><img src="${ac.crest}" style="width:80px;height:80px;margin:0 auto 12px;object-fit:contain;"><div style="font-size:18px;font-weight:800;">${ac.name}</div></div>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:1.2fr 1fr;gap:24px;align-items:start;" class="match-layout-grid">
      <div>${timelineHTML}${lineupsHTML}${statsHTML}</div>
      <div>${motmHTML}${pollHTML}${cmtHTML}</div>
    </div>
  </div>`;
});

// ─── FAVORITES ───
router.add("#/favorites",()=>`<div class="page"><h2 class="section-title mb-24"><i class="fas fa-heart"></i> ${T("nav_favorites")}</h2><div class="empty-state"><div class="empty-state-icon"><i class="fas fa-heart"></i></div><div class="empty-state-title">${T("no_favorites")}</div><div class="empty-state-text">Browse leagues and clubs to add favorites.</div><a href="#/" class="btn-primary" style="display:inline-block;margin-top:12px;">Explore</a></div></div>`);

// ─── PROFILE ───
router.add("#/profile",()=>`<div class="page"><div class="profile-header"><div class="profile-avatar">${state.user?state.user.username[0].toUpperCase():"U"}</div><div><h1 class="profile-name">${state.user?state.user.username:"User"}</h1><p class="profile-email">${state.user?state.user.email:""}</p><button class="btn-secondary mt-16" id="logout-btn">${T("profile_logout")}</button></div></div><div class="settings-section"><div class="settings-title"><i class="fas fa-cogs"></i> API Configuration</div><div class="form-group"><label class="form-label">Football-Data.org API Token</label><input type="text" class="form-input" id="token-input" value="${state.apiToken}" placeholder="Paste your API token here"><button class="btn-primary mt-16" id="save-token-btn">${T("save_changes")}</button></div></div></div>`);

// ─── LOGIN ───
router.add("#/login",()=>`<div class="page flex-center" style="min-height:70vh;"><div class="auth-modal-box card" style="padding:40px;max-width:440px;width:100%;"><div class="auth-header"><div class="logo-icon" style="margin:0 auto 12px;"><i class="fas fa-futbol"></i></div><h2 class="auth-title">${T("auth_sign_in")}</h2><p class="auth-subtitle">Access your KickZone account</p></div><form id="login-form"><div class="form-group"><label class="form-label">${T("auth_email")}</label><input type="text" class="form-input" id="login-id" required placeholder="Enter email or username"></div><div class="form-group"><label class="form-label">${T("auth_password")}</label><div class="form-input-wrap"><input type="password" class="form-input" id="login-pass" required placeholder="Enter password"><button type="button" class="password-toggle" id="toggle-login-pw"><i class="fas fa-eye"></i></button></div></div><div class="form-row"><label class="checkbox-label"><input type="checkbox"> ${T("auth_remember_me")}</label><a href="#/forgot" class="form-link">${T("auth_forgot")}</a></div><button class="btn-full" type="submit">${T("auth_sign_in")}</button><div class="auth-divider">OR</div><button type="button" class="btn-google" id="google-login-btn"><i class="fab fa-google"></i> ${T("auth_google")}</button><div class="auth-switch">${T("auth_no_account")} <a href="#/register" class="form-link">${T("auth_sign_up")}</a></div></form></div></div>`);

// ─── REGISTER ───
router.add("#/register",()=>`<div class="page flex-center" style="min-height:70vh;"><div class="auth-modal-box card" style="padding:40px;max-width:440px;width:100%;"><div class="auth-header"><div class="logo-icon" style="margin:0 auto 12px;"><i class="fas fa-futbol"></i></div><h2 class="auth-title">${T("auth_sign_up")}</h2><p class="auth-subtitle">Create your KickZone account</p></div><form id="register-form"><div class="form-group"><label class="form-label">Username</label><input type="text" class="form-input" id="reg-name" required placeholder="Choose a username"></div><div class="form-group"><label class="form-label">Email Address</label><input type="email" class="form-input" id="reg-email" required placeholder="your@email.com"></div><div class="form-group"><label class="form-label">${T("auth_password")}</label><div class="form-input-wrap"><input type="password" class="form-input" id="reg-pass" required placeholder="Create a password"><button type="button" class="password-toggle" id="toggle-reg-pw"><i class="fas fa-eye"></i></button></div></div><button class="btn-full" type="submit">${T("auth_sign_up")}</button><div class="auth-switch">${T("auth_have_account")} <a href="#/login" class="form-link">${T("auth_sign_in")}</a></div></form></div></div>`);

// ─── FORGOT ───
router.add("#/forgot",()=>`<div class="page flex-center" style="min-height:70vh;"><div class="auth-modal-box card" style="padding:40px;max-width:440px;width:100%;"><div class="auth-header"><div class="logo-icon" style="margin:0 auto 12px;"><i class="fas fa-futbol"></i></div><h2 class="auth-title">${T("auth_forgot")}</h2><p class="auth-subtitle">Enter your email to reset your password</p></div><form id="forgot-form"><div class="form-group"><label class="form-label">Email Address</label><input type="email" class="form-input" id="forgot-email" required placeholder="your@email.com"></div><button class="btn-full" type="submit">Send Reset Link</button><div class="auth-switch"><a href="#/login" class="form-link">Back to Sign In</a></div></form></div></div>`);

/* ═══════════════════════════════════════════════
   GLOBAL EVENT DELEGATION
   ═══════════════════════════════════════════════ */
document.addEventListener("click",e=>{
  const hrefEl=e.target.closest("[data-href]");if(hrefEl){location.hash=hrefEl.dataset.href;return;}
  if(e.target.closest("#login-btn")){location.hash="#/login";return;}
  if(e.target.closest("#nav-avatar-btn")){location.hash="#/profile";return;}
  if(e.target.closest("#logout-btn")){auth.logout();return;}
  if(e.target.closest("#save-token-btn")){const val=document.getElementById("token-input");if(val){state.apiToken=val.value.trim();localStorage.setItem("kz_token",state.apiToken);toast.show("API Token saved!","success");}return;}
  if(e.target.closest("#toggle-login-pw")){togglePwField("login-pass",e.target.closest("#toggle-login-pw"));return;}
  if(e.target.closest("#toggle-reg-pw")){togglePwField("reg-pass",e.target.closest("#toggle-reg-pw"));return;}
  if(e.target.closest("#google-login-btn")){const mockUser={username:"GoogleUser",email:"user@gmail.com",password:"google-auth"};let users=JSON.parse(localStorage.getItem("kz_users")||"[]");if(!users.find(u=>u.email===mockUser.email)){users.push(mockUser);localStorage.setItem("kz_users",JSON.stringify(users));}auth.setSession(mockUser);return;}
  if(e.target.closest("#theme-toggle")||e.target.closest("#mobile-theme-toggle")){toggleTheme();return;}
  if(e.target.closest("#lang-toggle")||e.target.closest("#mobile-lang-toggle")){toggleLang();return;}
});

document.addEventListener("submit",e=>{
  e.preventDefault();
  if(e.target.id==="login-form"){const id=document.getElementById("login-id").value;const pw=document.getElementById("login-pass").value;const res=auth.login(id,pw);if(!res.ok)toast.show(res.msg,"error");}
  if(e.target.id==="register-form"){const name=document.getElementById("reg-name").value;const email=document.getElementById("reg-email").value;const pw=document.getElementById("reg-pass").value;const res=auth.register(name,email,pw);if(!res.ok)toast.show(res.msg,"error");}
  if(e.target.id==="forgot-form"){toast.show("If this email exists, a reset link has been sent.","info");}
});

function togglePwField(inputId,btn){const inp=document.getElementById(inputId);if(!inp)return;if(inp.type==="password"){inp.type="text";btn.innerHTML=`<i class="fas fa-eye-slash"></i>`;}else{inp.type="password";btn.innerHTML=`<i class="fas fa-eye"></i>`;}}

/* ═══════════════════════════════════════════════
   INIT
   ═══════════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded",()=>{
  applyTheme();applyLang();renderNavUser();setupHamburger();setupSearch();router.init();startSimulation();
});
