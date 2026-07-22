/**
 * ═══════════════════════════════════════════════════════
 *  KICKZONE — PRODUCTION FOOTBALL PLATFORM ENGINE
 *  All data inline · Real club crests · FIFA rules
 * ═══════════════════════════════════════════════════════
 */

/* ────────── i18n ────────── */
const i18n = {
  en: {
    nav_home:"Home", nav_live:"Live", nav_schedule:"Schedule", nav_news:"News",
    nav_ucl:"UCL", nav_favorites:"Favorites", nav_profile:"Profile", nav_login:"Login",
    toggle_theme:"Toggle Theme", home_title:"Explore the Football World",
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
    home_title:"استكشف عالم كرة القدم", live_scores:"المباريات المباشرة",
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

/* ────────── REAL DATA (inline, no fetch needed) ────────── */
const C = "https://crests.football-data.org/";

const DB = {
  leagues: [
    { id:"PL",  name:"Premier League",     country:"England", emblem:C+"PL.png"  },
    { id:"PD",  name:"La Liga",            country:"Spain",   emblem:C+"PD.png"  },
    { id:"SA",  name:"Serie A",            country:"Italy",   emblem:C+"SA.png"  },
    { id:"BL1", name:"Bundesliga",         country:"Germany", emblem:C+"BL1.png" },
    { id:"FL1", name:"Ligue 1",            country:"France",  emblem:C+"FL1.png" },
    { id:"CL",  name:"Champions League",   country:"Europe",  emblem:C+"CL.png"  }
  ],

  clubs: [
    /* ── Premier League ── */
    { id:"57",  name:"Arsenal",            tla:"ARS", league:"PL",  coach:"Mikel Arteta",       stadium:"Emirates Stadium",           founded:1886, crest:C+"57.png"  },
    { id:"64",  name:"Liverpool",          tla:"LIV", league:"PL",  coach:"Arne Slot",          stadium:"Anfield",                    founded:1892, crest:C+"64.png"  },
    { id:"65",  name:"Manchester City",    tla:"MCI", league:"PL",  coach:"Pep Guardiola",      stadium:"Etihad Stadium",             founded:1880, crest:C+"65.png"  },
    { id:"66",  name:"Manchester United",  tla:"MUN", league:"PL",  coach:"Ruben Amorim",       stadium:"Old Trafford",               founded:1878, crest:C+"66.png"  },
    { id:"61",  name:"Chelsea",            tla:"CHE", league:"PL",  coach:"Enzo Maresca",       stadium:"Stamford Bridge",            founded:1905, crest:C+"61.png"  },
    { id:"73",  name:"Tottenham Hotspur",  tla:"TOT", league:"PL",  coach:"Ange Postecoglou",   stadium:"Tottenham Hotspur Stadium",  founded:1882, crest:C+"73.png"  },
    { id:"67",  name:"Newcastle United",   tla:"NEW", league:"PL",  coach:"Eddie Howe",         stadium:"St James' Park",             founded:1892, crest:C+"67.png"  },
    { id:"58",  name:"Aston Villa",        tla:"AVL", league:"PL",  coach:"Unai Emery",         stadium:"Villa Park",                 founded:1874, crest:C+"58.png"  },
    { id:"397", name:"Brighton",           tla:"BHA", league:"PL",  coach:"Fabian Hürzeler",    stadium:"Amex Stadium",               founded:1901, crest:C+"397.png" },
    { id:"563", name:"West Ham United",    tla:"WHU", league:"PL",  coach:"Julen Lopetegui",    stadium:"London Stadium",             founded:1895, crest:C+"563.png" },

    /* ── La Liga ── */
    { id:"86",  name:"Real Madrid",        tla:"RMA", league:"PD",  coach:"Carlo Ancelotti",    stadium:"Santiago Bernabéu",          founded:1902, crest:C+"86.png"  },
    { id:"81",  name:"FC Barcelona",       tla:"FCB", league:"PD",  coach:"Hansi Flick",        stadium:"Camp Nou",                   founded:1899, crest:C+"81.png"  },
    { id:"78",  name:"Atlético Madrid",    tla:"ATM", league:"PD",  coach:"Diego Simeone",      stadium:"Metropolitano",              founded:1903, crest:C+"78.png"  },
    { id:"92",  name:"Real Sociedad",      tla:"RSO", league:"PD",  coach:"Imanol Alguacil",    stadium:"Reale Arena",                founded:1909, crest:C+"92.png"  },
    { id:"90",  name:"Real Betis",         tla:"BET", league:"PD",  coach:"Manuel Pellegrini",  stadium:"Benito Villamarín",          founded:1907, crest:C+"90.png"  },

    /* ── Serie A ── */
    { id:"108", name:"Inter Milan",        tla:"INT", league:"SA",  coach:"Simone Inzaghi",     stadium:"San Siro",                   founded:1908, crest:C+"108.png" },
    { id:"98",  name:"AC Milan",           tla:"MIL", league:"SA",  coach:"Paulo Fonseca",      stadium:"San Siro",                   founded:1899, crest:C+"98.png"  },
    { id:"109", name:"Juventus",           tla:"JUV", league:"SA",  coach:"Thiago Motta",       stadium:"Allianz Stadium",            founded:1897, crest:C+"109.png" },
    { id:"113", name:"Napoli",             tla:"NAP", league:"SA",  coach:"Antonio Conte",      stadium:"Diego Armando Maradona",     founded:1926, crest:C+"113.png" },
    { id:"100", name:"AS Roma",            tla:"ROM", league:"SA",  coach:"Daniele De Rossi",   stadium:"Stadio Olimpico",            founded:1927, crest:C+"100.png" },

    /* ── Bundesliga ── */
    { id:"5",   name:"Bayern Munich",      tla:"FCB", league:"BL1", coach:"Vincent Kompany",    stadium:"Allianz Arena",              founded:1900, crest:C+"5.png"   },
    { id:"4",   name:"Borussia Dortmund",  tla:"BVB", league:"BL1", coach:"Nuri Şahin",         stadium:"Signal Iduna Park",          founded:1909, crest:C+"4.png"   },
    { id:"3",   name:"Bayer Leverkusen",   tla:"B04", league:"BL1", coach:"Xabi Alonso",        stadium:"BayArena",                   founded:1904, crest:C+"3.png"   },
    { id:"721", name:"RB Leipzig",         tla:"RBL", league:"BL1", coach:"Marco Rose",         stadium:"Red Bull Arena",             founded:2009, crest:C+"721.png" },
    { id:"19",  name:"Eintracht Frankfurt",tla:"SGE", league:"BL1", coach:"Dino Toppmöller",    stadium:"Deutsche Bank Park",         founded:1899, crest:C+"19.png"  },

    /* ── Ligue 1 ── */
    { id:"524", name:"Paris Saint-Germain", tla:"PSG", league:"FL1", coach:"Luis Enrique",      stadium:"Parc des Princes",           founded:1970, crest:C+"524.png" },
    { id:"516", name:"Olympique Marseille", tla:"OM",  league:"FL1", coach:"Roberto De Zerbi",  stadium:"Vélodrome",                  founded:1899, crest:C+"516.png" },
    { id:"548", name:"AS Monaco",           tla:"MON", league:"FL1", coach:"Adi Hütter",        stadium:"Stade Louis II",             founded:1924, crest:C+"548.png" },
    { id:"523", name:"Olympique Lyon",      tla:"OL",  league:"FL1", coach:"Pierre Sage",       stadium:"Groupama Stadium",           founded:1950, crest:C+"523.png" },
    { id:"521", name:"LOSC Lille",          tla:"LIL", league:"FL1", coach:"Bruno Génésio",     stadium:"Stade Pierre-Mauroy",        founded:1944, crest:C+"521.png" }
  ],

  players: [
    { id:"salah",      name:"Mohamed Salah",    teamId:"64",  num:11, pos:"Forward",    nationality:"Egypt",    age:34, height:"175cm", rating:89, value:"€55M",  stats:{goals:18,assists:9,minutes:2450}  },
    { id:"haaland",    name:"Erling Haaland",   teamId:"65",  num:9,  pos:"Forward",    nationality:"Norway",   age:25, height:"194cm", rating:91, value:"€180M", stats:{goals:27,assists:5,minutes:2310}  },
    { id:"mbappe",     name:"Kylian Mbappé",    teamId:"86",  num:9,  pos:"Forward",    nationality:"France",   age:27, height:"178cm", rating:91, value:"€180M", stats:{goals:21,assists:7,minutes:2100}  },
    { id:"bellingham", name:"Jude Bellingham",  teamId:"86",  num:5,  pos:"Midfielder", nationality:"England",  age:22, height:"186cm", rating:90, value:"€180M", stats:{goals:14,assists:10,minutes:2240} },
    { id:"saka",       name:"Bukayo Saka",      teamId:"57",  num:7,  pos:"Forward",    nationality:"England",  age:24, height:"178cm", rating:87, value:"€120M", stats:{goals:15,assists:11,minutes:2510} },
    { id:"vini",       name:"Vinícius Júnior",  teamId:"86",  num:7,  pos:"Forward",    nationality:"Brazil",   age:25, height:"176cm", rating:92, value:"€200M", stats:{goals:22,assists:8,minutes:2380}  },
    { id:"rodri",      name:"Rodri",            teamId:"65",  num:16, pos:"Midfielder", nationality:"Spain",    age:29, height:"191cm", rating:91, value:"€130M", stats:{goals:8,assists:12,minutes:2600}  },
    { id:"lautaro",    name:"Lautaro Martínez", teamId:"108", num:10, pos:"Forward",    nationality:"Argentina",age:28, height:"174cm", rating:88, value:"€110M", stats:{goals:24,assists:4,minutes:2200}  }
  ],

  matches: [
    { id:101, comp:"PL",  home:"64",  away:"66",  homeScore:2, awayScore:1, status:"LIVE",     minute:72, stage:"REGULAR_SEASON", date:"2026-07-20T12:00:00Z",
      stats:{possession:[58,42],shots:[12,7],shotsOnTarget:[6,3],corners:[5,3],offsides:[1,2],fouls:[9,13],yellowCards:[1,3],redCards:[0,0],passes:[487,312],passAccuracy:[87,74]} },
    { id:102, comp:"PL",  home:"65",  away:"57",  homeScore:1, awayScore:1, status:"LIVE",     minute:38, stage:"REGULAR_SEASON", date:"2026-07-20T12:30:00Z",
      stats:{possession:[54,46],shots:[6,5],shotsOnTarget:[3,2],corners:[3,2],offsides:[0,1],fouls:[5,6],yellowCards:[0,1],redCards:[0,0],passes:[245,208],passAccuracy:[89,85]} },
    { id:103, comp:"PD",  home:"86",  away:"81",  homeScore:3, awayScore:1, status:"FINISHED", minute:90, stage:"REGULAR_SEASON", date:"2026-07-19T20:00:00Z",
      stats:{possession:[62,38],shots:[18,9],shotsOnTarget:[8,4],corners:[7,3],offsides:[2,4],fouls:[10,15],yellowCards:[2,4],redCards:[0,1],passes:[643,389],passAccuracy:[91,78]} },
    { id:104, comp:"CL",  home:"5",   away:"86",  homeScore:1, awayScore:1, status:"LIVE",     minute:96, stage:"SEMI_FINALS",    date:"2026-07-20T11:00:00Z", extraTime:true, etScore:{h:1,a:1},
      stats:{possession:[47,53],shots:[14,16],shotsOnTarget:[5,7],corners:[4,6],offsides:[3,1],fouls:[14,11],yellowCards:[3,2],redCards:[0,0],passes:[512,578],passAccuracy:[83,88]} },
    { id:105, comp:"SA",  home:"108", away:"98",  homeScore:2, awayScore:0, status:"FINISHED", minute:90, stage:"REGULAR_SEASON", date:"2026-07-19T18:00:00Z",
      stats:{possession:[56,44],shots:[15,8],shotsOnTarget:[7,2],corners:[6,2],offsides:[1,3],fouls:[12,16],yellowCards:[2,3],redCards:[0,0],passes:[534,421],passAccuracy:[86,79]} },
    { id:106, comp:"PL",  home:"61",  away:"73",  homeScore:0, awayScore:0, status:"SCHEDULED",minute:0,  stage:"REGULAR_SEASON", date:"2026-07-21T19:00:00Z" },
    { id:107, comp:"BL1", home:"5",   away:"4",   homeScore:0, awayScore:0, status:"SCHEDULED",minute:0,  stage:"REGULAR_SEASON", date:"2026-07-22T17:30:00Z" },
    { id:108, comp:"FL1", home:"524", away:"516", homeScore:0, awayScore:0, status:"SCHEDULED",minute:0,  stage:"REGULAR_SEASON", date:"2026-07-22T20:00:00Z" },
    { id:109, comp:"PD",  home:"78",  away:"92",  homeScore:1, awayScore:0, status:"FINISHED", minute:90, stage:"REGULAR_SEASON", date:"2026-07-18T20:00:00Z",
      stats:{possession:[51,49],shots:[11,10],shotsOnTarget:[4,3],corners:[5,5],offsides:[2,2],fouls:[13,12],yellowCards:[3,2],redCards:[0,0],passes:[465,449],passAccuracy:[82,80]} }
  ],

  news: [
    { id:1, title:"Mohamed Salah seals massive extension at Anfield",
      desc:"Liverpool FC confirms Salah has signed a contract extension keeping him at the club until 2028.",
      tag:"Transfer News", date:"2026-07-20", clubId:"64",
      gradient:"linear-gradient(135deg,#c8102e 0%,#00b2a9 100%)",
      icon:"fa-pen-fancy",
      content:`Mohamed Salah has officially signed a new contract extension with Liverpool FC, keeping the Egyptian superstar at Anfield until 2028. The deal, reportedly worth £350,000 per week, makes Salah one of the highest-paid players in Premier League history.\n\nSalah, who has scored 214 goals in 352 appearances for Liverpool since joining from AS Roma in 2017, expressed his delight at the announcement: \"This is my home. The fans, the city, everything about this club is special. I want to continue winning trophies here.\"\n\nManager Arne Slot praised the decision: \"Mo is irreplaceable. His work ethic, his consistency, and his ability to deliver in the biggest moments make him one of the greatest players to ever wear this shirt.\"\n\nThe 34-year-old has shown no signs of slowing down, registering 18 goals and 9 assists in the current campaign. Liverpool fans will be thrilled to see their talisman committed to the club for years to come.\n\nThe announcement comes at a crucial time as Liverpool look to strengthen their squad for a title challenge, with several new signings expected to arrive this summer alongside Salah's contract renewal.` },
    { id:2, title:"Pep Guardiola reveals tactical overhaul after Arsenal draw",
      desc:"City boss says structural updates were necessary to overcome Arsenal's deep defensive block.",
      tag:"Match Analysis", date:"2026-07-20", clubId:"65",
      gradient:"linear-gradient(135deg,#6CABDD 0%,#1C2C5B 100%)",
      icon:"fa-chess",
      content:`Pep Guardiola has outlined the tactical shifts Manchester City have implemented following their 1-1 draw with Arsenal at the Etihad Stadium. The City manager acknowledged that Mikel Arteta's defensive setup posed significant challenges.\n\n\"Arsenal defended incredibly well,\" Guardiola said. \"They had a low block with five defenders and two sitting midfielders. We had to find new ways to break through. In the second half, we switched to a 3-2-5 formation to create overloads on the flanks.\"\n\nKey tactical changes included:\n\n• Rodri dropping between the centre-backs to form a back three\n• Kevin De Bruyne moving into a false nine position\n• Both full-backs inverting into midfield channels\n• Erling Haaland drifting wide to drag defenders out of position\n\nThe xG data supported Guardiola's approach: City generated 2.1 expected goals compared to Arsenal's 0.8, despite the scoreline suggesting an even contest.\n\n\"We dominated the ball, we created chances, but in football you also need to score,\" Guardiola reflected. \"We'll keep working on finishing. The performance was there.\"\n\nCity's next fixture is a crucial Champions League group stage match, where Guardiola is expected to rotate his squad while maintaining tactical flexibility.` },
    { id:3, title:"Real Madrid unveil elite prospects for new campaign",
      desc:"Florentino Pérez outlines the long-term vision during the official presentation ceremony.",
      tag:"La Liga", date:"2026-07-19", clubId:"86",
      gradient:"linear-gradient(135deg,#FEBE10 0%,#00529F 100%)",
      icon:"fa-star",
      content:`Real Madrid president Florentino Pérez has unveiled the club's latest signings at a glamorous presentation ceremony at the Santiago Bernabéu. The event, attended by over 60,000 fans, showcased the club's commitment to building a squad capable of dominating European football for the next decade.\n\nThe signings represent a significant investment in young talent, with an average age of just 22 across the new arrivals. Pérez stated: \"Real Madrid has always been about the future. We sign the best young players in the world and develop them into legends.\"\n\nThe presentation also featured a tribute to the club's rich history, with former legends like Raúl, Zidane, and Roberto Carlos appearing via video messages to welcome the new players.\n\nManager Carlo Ancelotti expressed confidence in the squad's depth: \"We have competition for every position. This is what a club like Real Madrid demands. Every player must fight for their place, and this will only make us stronger.\"\n\nKey highlights from the event included:\n\n• A spectacular light show featuring the 15 Champions League trophies\n• Live musical performances by international artists\n• Interactive fan zones around the stadium\n• A charity auction with proceeds going to the Real Madrid Foundation\n\nThe Bernabéu's state-of-the-art retractable roof was fully utilized for the event, creating an indoor arena atmosphere that left fans and media in awe.` },
    { id:4, title:"Champions League semi-final preview: Bayern vs Real Madrid",
      desc:"Two European giants clash with a spot in the final at stake. Key tactical insights and historical context.",
      tag:"UCL", date:"2026-07-20", clubId:"5",
      gradient:"linear-gradient(135deg,#0e1e5b 0%,#d4af37 100%)",
      icon:"fa-trophy",
      content:`The UEFA Champions League semi-final between Bayern Munich and Real Madrid promises to be one of the most exciting fixtures of the season. These two clubs have a storied rivalry in European competition, with 26 Champions League titles between them.\n\nHead-to-Head Record (European Competition):\n• Total meetings: 26\n• Real Madrid wins: 12\n• Bayern Munich wins: 10\n• Draws: 4\n\nBayern Munich Strengths:\nVincent Kompany's side has been in scintillating form, winning their last 8 matches in all competitions. The Bavarian giants boast the tournament's best defensive record, conceding just 3 goals in 10 Champions League matches this season. Harry Kane leads the scoring charts with 9 goals.\n\nReal Madrid Strengths:\nCarlo Ancelotti's side possesses unmatched European experience. Vinícius Júnior and Kylian Mbappé form one of the most lethal attacking partnerships in world football, combining for 43 goals this season. Jude Bellingham's ability to arrive late in the box has been a game-changer.\n\nKey Tactical Battle:\nThe matchup between Bayern's high press and Real Madrid's counter-attacking speed will be decisive. Expect Kompany to deploy an aggressive pressing system, while Ancelotti will look to exploit the spaces left behind.\n\nPrediction: A tightly contested affair that could go to extra time. Both teams have the quality to reach the final, but Real Madrid's European DNA gives them a slight edge over two legs.` },
    { id:5, title:"Inter Milan dominate Derby della Madonnina with clinical display",
      desc:"Lautaro Martínez scores twice as Inter crush city rivals AC Milan 2-0 in the Milan derby.",
      tag:"Serie A", date:"2026-07-19", clubId:"108",
      gradient:"linear-gradient(135deg,#003DA5 0%,#000000 100%)",
      icon:"fa-futbol",
      content:`Inter Milan produced a masterclass in the Derby della Madonnina, defeating AC Milan 2-0 at San Siro in a dominant display that reinforced their Serie A title credentials. Lautaro Martínez scored both goals, taking his tally to 24 for the season.\n\nThe Argentine striker opened the scoring in the 34th minute with a clinical finish from the edge of the box after a perfectly weighted through ball from Hakan Çalhanoğlu. He doubled Inter's advantage in the 67th minute with a powerful header from a corner kick.\n\nManager Simone Inzaghi praised his team's tactical discipline: \"We controlled every phase of the game. Our pressing was excellent, and our defensive shape gave AC Milan no space to create. This is the Inter I want to see every week.\"\n\nKey Statistics:\n• Inter dominated possession with 56% vs 44%\n• 15 shots to AC Milan's 8\n• 7 shots on target to 2\n• Inter completed 534 passes with 86% accuracy\n\nThe result extends Inter's unbeaten run against their city rivals to 5 matches and moves them top of the Serie A table on goal difference.` },
    { id:6, title:"Mbappé and Vinícius partnership reaches new heights at Real Madrid",
      desc:"The deadly duo have combined for 43 goals this season, making them Europe's most feared attack.",
      tag:"La Liga", date:"2026-07-18", clubId:"86",
      gradient:"linear-gradient(135deg,#FFFFFF 0%,#d4af37 50%,#00529F 100%)",
      icon:"fa-bolt",
      content:`The partnership between Kylian Mbappé and Vinícius Júnior has blossomed into the most devastating attacking combination in European football. Together, the duo has contributed 43 goals and 15 assists this season, terrorizing defenses across La Liga and the Champions League.\n\nMbappé, who joined Real Madrid from Paris Saint-Germain, has adapted seamlessly to Carlo Ancelotti's system. Playing centrally as the main striker, the French international has scored 21 goals and provided 7 assists. His partnership with Vinícius on the left flank has created a dynamic that few defenses can contain.\n\nVinícius, meanwhile, continues to improve year on year. The Brazilian has scored 22 goals and added 8 assists, often cutting inside from the left wing to devastating effect. His dribbling ability and pace create space not only for himself but for his teammates.\n\nAncelotti reflected on the partnership: \"They complement each other perfectly. Kylian's movement in behind defenses is world-class, and Vinícius has the ability to beat any defender one-on-one. When both are on form, we are very difficult to stop.\"\n\nThe statistics speak for themselves:\n• Combined goals: 43\n• Combined assists: 15\n• Combined key passes per game: 6.2\n• Combined successful dribbles per game: 8.4\n\nWith the Champions League semi-final approaching, defenders around Europe will be devising plans to stop this formidable partnership.` }
  ],

  rules: {
    knockouts: ["CL"],
    league: { extraTime:false, penalties:false, drawAllowed:true },
    knockout: { extraTime:true, penalties:true, drawAllowed:false }
  }
};

/* ────────── HELPERS ────────── */
function getClub(id)  { return DB.clubs.find(c=>c.id===id); }
function getLeague(id){ return DB.leagues.find(l=>l.id===id); }
function T(key)       { return (i18n[state.lang]||i18n.en)[key] || key; }

function clubName(id) {
  const c = getClub(id);
  return c ? c.name : id;
}

function clubCrest(id) {
  const c = getClub(id);
  return c ? c.crest : "";
}

/* ────────── STATE ────────── */
const state = {
  theme:     localStorage.getItem("kz_theme") || "dark",
  lang:      localStorage.getItem("kz_lang")  || "en",
  user:      JSON.parse(localStorage.getItem("kz_user")  || "null"),
  favorites: JSON.parse(localStorage.getItem("kz_favs")  || '{"teams":[],"players":[]}'),
  apiToken:  localStorage.getItem("kz_token") || "",
  page:      "home",
  params:    {}
};

/* ────────── TOAST ────────── */
const toast = {
  show(msg, type="info") {
    const box = document.getElementById("toast-container");
    if(!box) return;
    const el = document.createElement("div");
    el.className = `toast ${type}`;
    const icons = { info:"fa-info-circle", success:"fa-check-circle", error:"fa-exclamation-circle" };
    el.innerHTML = `<i class="fas ${icons[type]||icons.info} toast-icon"></i><span>${msg}</span>`;
    box.appendChild(el);
    setTimeout(()=>{ el.style.opacity="0"; el.style.transform="translateX(100%)"; setTimeout(()=>el.remove(),300); }, 4000);
  }
};

/* ────────── AUTH ────────── */
const auth = {
  guard(page) {
    if(["favorites","profile"].includes(page) && !state.user) {
      toast.show("Please login to access this page.","error");
      location.hash = "#/login";
      return false;
    }
    return true;
  },
  register(username, email, password) {
    let users = JSON.parse(localStorage.getItem("kz_users")||"[]");
    if(users.find(u=>u.email===email||u.username===username))
      return { ok:false, msg:"Username or Email already registered." };
    const user = { username, email, password };
    users.push(user);
    localStorage.setItem("kz_users", JSON.stringify(users));
    this.setSession(user);
    return { ok:true };
  },
  login(id, pw) {
    let users = JSON.parse(localStorage.getItem("kz_users")||"[]");
    const u = users.find(x=>(x.email===id||x.username===id)&&x.password===pw);
    if(!u) return { ok:false, msg:"Invalid credentials." };
    this.setSession(u);
    return { ok:true };
  },
  setSession(user) {
    state.user = user;
    localStorage.setItem("kz_user", JSON.stringify(user));
    renderNavUser();
    toast.show(`Welcome, ${user.username}!`, "success");
    location.hash = "#/";
  },
  logout() {
    state.user = null;
    localStorage.removeItem("kz_user");
    renderNavUser();
    toast.show("Logged out.", "info");
    location.hash = "#/";
  }
};

function renderNavUser() {
  const el = document.getElementById("nav-user");
  if(!el) return;
  if(state.user) {
    el.innerHTML = `<button class="user-avatar-btn" id="nav-avatar-btn">${state.user.username[0].toUpperCase()}</button>`;
  } else {
    el.innerHTML = `<button class="btn-primary" id="login-btn">Login</button>`;
  }
}

/* ────────── THEME & LANG ────────── */
function applyTheme() {
  document.documentElement.setAttribute("data-theme", state.theme);
  const icon = state.theme==="dark" ? "fa-sun" : "fa-moon";
  const btn = document.getElementById("theme-toggle");
  if(btn) btn.innerHTML = `<i class="fas ${icon}"></i>`;
}

function toggleTheme() {
  state.theme = state.theme==="dark" ? "light" : "dark";
  localStorage.setItem("kz_theme", state.theme);
  applyTheme();
}

function applyLang() {
  document.documentElement.setAttribute("data-lang", state.lang);
  document.documentElement.setAttribute("lang", state.lang);
  const lbl = document.getElementById("lang-label");
  if(lbl) lbl.textContent = state.lang==="en" ? "AR" : "EN";
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    const val = T(key);
    const span = el.querySelector("span");
    if(span) span.textContent = val; else el.textContent = val;
  });
}

function toggleLang() {
  state.lang = state.lang==="en" ? "ar" : "en";
  localStorage.setItem("kz_lang", state.lang);
  applyLang();
  router.resolve();
}

/* ────────── HAMBURGER ────────── */
function setupHamburger() {
  const btn = document.getElementById("hamburger");
  const menu = document.getElementById("mobile-menu");
  if(!btn||!menu) return;
  btn.addEventListener("click", ()=>{
    btn.classList.toggle("open");
    menu.classList.toggle("open");
    btn.setAttribute("aria-expanded", btn.classList.contains("open"));
  });
  menu.querySelectorAll("a.mobile-link").forEach(link=>{
    link.addEventListener("click",()=>{ btn.classList.remove("open"); menu.classList.remove("open"); });
  });
}

/* ────────── SEARCH ────────── */
function setupSearch() {
  const btn = document.getElementById("search-toggle");
  const dd  = document.getElementById("search-dropdown");
  const inp = document.getElementById("search-input");
  const res = document.getElementById("search-results");
  if(!btn||!dd||!inp||!res) return;

  btn.addEventListener("click", e=>{ e.stopPropagation(); dd.classList.toggle("open"); if(dd.classList.contains("open")) inp.focus(); });
  document.addEventListener("click", ()=> dd.classList.remove("open"));
  dd.addEventListener("click", e=>e.stopPropagation());

  inp.addEventListener("input", ()=>{
    const q = inp.value.trim().toLowerCase();
    if(!q){ res.innerHTML=""; return; }
    const clubs   = DB.clubs.filter(c=>c.name.toLowerCase().includes(q)).slice(0,6);
    const players = DB.players.filter(p=>p.name.toLowerCase().includes(q)).slice(0,4);
    let h = "";
    clubs.forEach(c=>{ h+=`<div class="search-item" data-href="#/team/${c.id}"><img src="${c.crest}" alt="${c.tla}"><div><strong>${c.name}</strong> <span class="text-muted text-small">${c.tla}</span></div></div>`; });
    players.forEach(p=>{ h+=`<div class="search-item" data-href="#/player/${p.id}"><div class="player-avatar-placeholder" style="width:28px;height:28px;font-size:11px;">${p.name[0]}</div><div><strong>${p.name}</strong> <span class="text-muted text-small">${p.pos}</span></div></div>`; });
    if(!h) h = `<div style="padding:16px;text-align:center;" class="text-muted text-small">No results</div>`;
    res.innerHTML = h;
  });

  res.addEventListener("click", e=>{
    const item = e.target.closest("[data-href]");
    if(item){ location.hash = item.dataset.href; dd.classList.remove("open"); inp.value=""; res.innerHTML=""; }
  });
}

/* ────────── MATCH SIMULATION CLOCK ────────── */
let simInterval = null;
function startSimulation() {
  if(simInterval) clearInterval(simInterval);
  simInterval = setInterval(()=>{
    let changed = false;
    DB.matches.forEach(m=>{
      if(m.status!=="LIVE") return;
      const isKO = DB.rules.knockouts.includes(m.comp);

      if(m.minute===45 && Math.random()>0.7) { m.minute++; changed=true; return; }

      if(m.minute>=90 && !m.extraTime) {
        if(isKO && m.homeScore===m.awayScore) {
          m.extraTime = true;
          m.etScore = { h:m.homeScore, a:m.awayScore };
          m.minute = 91;
          toast.show(`⏱ Extra Time! ${clubName(m.home)} vs ${clubName(m.away)}`,"info");
        } else {
          m.status = "FINISHED";
          toast.show(`🏁 Full Time: ${clubName(m.home)} ${m.homeScore}-${m.awayScore} ${clubName(m.away)}`,"success");
        }
        changed=true; return;
      }

      if(m.minute>=120 && m.extraTime) {
        if(m.etScore.h===m.etScore.a) {
          let ph=0, pa=0;
          for(let i=0;i<5;i++){ if(Math.random()>0.25)ph++; if(Math.random()>0.25)pa++; }
          while(ph===pa){ if(Math.random()>0.3)ph++; if(Math.random()>0.3)pa++; }
          m.penalties = true;
          m.penScore = {h:ph, a:pa};
          m.homeScore = m.etScore.h;
          m.awayScore = m.etScore.a;
          toast.show(`⚽ Penalties! ${clubName(m.home)} ${ph}-${pa} ${clubName(m.away)}`,"success");
        } else {
          m.homeScore = m.etScore.h;
          m.awayScore = m.etScore.a;
        }
        m.status = "FINISHED";
        changed=true; return;
      }

      m.minute++;
      // Random goal chance ~4%
      if(Math.random()>0.96) {
        const forHome = Math.random()>0.5;
        if(m.extraTime) { if(forHome) m.etScore.h++; else m.etScore.a++; }
        else { if(forHome) m.homeScore++; else m.awayScore++; }
        const hs = m.extraTime?m.etScore.h:m.homeScore;
        const as = m.extraTime?m.etScore.a:m.awayScore;
        toast.show(`⚽ GOAL! ${clubName(m.home)} ${hs}-${as} ${clubName(m.away)}`,"success");
      }
      changed=true;
    });
    if(changed && (state.page==="home"||state.page==="live")) router.resolve();
  }, 12000);
}

/* ────────── MATCH CARD RENDERER ────────── */
function renderMatchCard(m) {
  const hc = getClub(m.home) || { name:m.home, crest:"", tla:"?" };
  const ac = getClub(m.away) || { name:m.away, crest:"", tla:"?" };

  let scoreHTML = `<span class="match-score" style="font-size:18px;color:var(--text-3);">vs</span>`;
  let statusHTML = `<span class="match-status status-scheduled">${new Date(m.date).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}</span>`;

  if(m.status==="LIVE") {
    const hs = m.extraTime ? m.etScore.h : m.homeScore;
    const as = m.extraTime ? m.etScore.a : m.awayScore;
    scoreHTML = `<div class="match-score">${hs} - ${as}</div>`;
    let minLabel = `${m.minute}'`;
    let cls = "";
    if(m.extraTime && !m.penalties) { minLabel=`ET ${m.minute-90}'`; cls="et"; }
    if(m.penalties) { minLabel=`PK ${m.penScore.h}-${m.penScore.a}`; cls="pk"; }
    statusHTML = `<span class="match-minute ${cls}"><i class="fas fa-circle live-dot"></i> ${minLabel}</span>`;
  } else if(m.status==="FINISHED") {
    scoreHTML = `<div class="match-score">${m.homeScore} - ${m.awayScore}</div>`;
    let ftLabel = "FT";
    if(m.extraTime) ftLabel = "AET";
    if(m.penalties) ftLabel = `PEN ${m.penScore.h}-${m.penScore.a}`;
    statusHTML = `<span class="match-status status-finished">${ftLabel}</span>`;
  }

  const league = getLeague(m.comp);
  const leagueName = league ? league.name : m.comp;

  return `
    <div class="match-card ${m.status==='LIVE'?'live-card':''}" data-match="${m.id}">
      <div class="match-meta"><span class="league-badge">${league?`<img src="${league.emblem}" alt="">`:""} ${leagueName}</span></div>
      <div class="team-side">
        <img src="${hc.crest}" class="team-logo" alt="${hc.tla}" onerror="this.style.display='none'">
        <span class="team-name">${hc.name}</span>
      </div>
      <div class="match-center">${scoreHTML}${statusHTML}</div>
      <div class="team-side away">
        <img src="${ac.crest}" class="team-logo" alt="${ac.tla}" onerror="this.style.display='none'">
        <span class="team-name">${ac.name}</span>
      </div>
    </div>
  `;
}

/* ────────── STANDINGS CALCULATOR ────────── */
function calcStandings(leagueId) {
  const clubs = DB.clubs.filter(c=>c.league===leagueId);
  const matches = DB.matches.filter(m=>m.comp===leagueId && m.status==="FINISHED");
  const table = clubs.map(c=>({ team:c, mp:0, w:0, d:0, l:0, gf:0, ga:0, gd:0, pts:0 }));

  matches.forEach(m=>{
    const h = table.find(r=>r.team.id===m.home);
    const a = table.find(r=>r.team.id===m.away);
    if(!h||!a) return;
    h.mp++; a.mp++;
    h.gf+=m.homeScore; h.ga+=m.awayScore;
    a.gf+=m.awayScore; a.ga+=m.homeScore;
    if(m.homeScore>m.awayScore)      { h.w++; h.pts+=3; a.l++; }
    else if(m.homeScore<m.awayScore) { a.w++; a.pts+=3; h.l++; }
    else                             { h.d++; h.pts+=1; a.d++; a.pts+=1; }
  });

  table.forEach(r=> r.gd = r.gf - r.ga);
  table.sort((a,b)=> b.pts-a.pts || b.gd-a.gd || b.gf-a.gf);
  return table;
}

/* ═══════════════════════════════════════════════
   ROUTER
   ═══════════════════════════════════════════════ */
const router = {
  routes: {},
  add(path, fn) { this.routes[path] = fn; },
  init() {
    window.addEventListener("hashchange", ()=>this.resolve());
    if(!location.hash) location.hash = "#/";
    this.resolve();
  },
  resolve() {
    const hash = location.hash || "#/";
    for(const route in this.routes) {
      const re = new RegExp("^" + route.replace(/:[^\s/]+/g,"([^/]+)") + "$");
      const match = hash.match(re);
      if(match) {
        const paramNames = (route.match(/:[^\s/]+/g)||[]).map(n=>n.slice(1));
        const params = {};
        paramNames.forEach((n,i)=> params[n] = match[i+1]);
        const pageName = route.replace("#/","").split("/")[0] || "home";
        if(!auth.guard(pageName)) return;
        state.page = pageName;
        state.params = params;

        // Highlight active nav link
        document.querySelectorAll(".nav-link,.mobile-link").forEach(l=>l.classList.remove("active"));
        const sel = document.querySelector(`.nav-link[href='${hash}']`) || document.querySelector(`.nav-link[href='#/${pageName}']`);
        if(sel) sel.classList.add("active");

        const root = document.getElementById("app-root");
        try {
          root.innerHTML = this.routes[route](params);
          applyLang();
          window.scrollTo(0,0);
        } catch(err) {
          root.innerHTML = `<div class="page"><div class="error-state"><i class="fas fa-exclamation-circle error-icon"></i><div class="error-title">Error</div><div class="error-text">${err.message}</div></div></div>`;
        }
        return;
      }
    }
    location.hash = "#/";
  }
};

/* ═══════════════════════════════════════════════
   PAGES
   ═══════════════════════════════════════════════ */

// ─── HOME ───
router.add("#/", ()=>{
  const live      = DB.matches.filter(m=>m.status==="LIVE");
  const upcoming  = DB.matches.filter(m=>m.status==="SCHEDULED");
  const finished  = DB.matches.filter(m=>m.status==="FINISHED");

  return `<div class="page">
    <div class="hero">
      <div class="hero-glow"></div>
      <div class="hero-content">
        <div class="hero-badge"><i class="fas fa-bolt"></i> Live Football Engine</div>
        <h1 data-i18n="home_title">${T("home_title")}</h1>
        <p>Real scores, real clubs, real rules — powered by official football data APIs.</p>
        <div class="hero-actions">
          <a href="#/live" class="btn-primary">View Live Scores</a>
          <a href="#/ucl" class="btn-secondary">Champions League</a>
        </div>
      </div>
    </div>

    <div class="sidebar-layout">
      <div>
        <div class="section">
          <div class="section-header">
            <h2 class="section-title"><i class="fas fa-circle live-dot"></i> <span data-i18n="live_scores">${T("live_scores")}</span></h2>
            <a href="#/live" class="section-link">View All <i class="fas fa-chevron-right"></i></a>
          </div>
          <div class="matches-grid">${live.length ? live.map(renderMatchCard).join("") : `<div class="text-muted" style="padding:20px;">No live matches currently.</div>`}</div>
        </div>

        <div class="section">
          <div class="section-header">
            <h2 class="section-title"><i class="fas fa-calendar"></i> <span data-i18n="upcoming_matches">${T("upcoming_matches")}</span></h2>
            <a href="#/schedule" class="section-link">View All <i class="fas fa-chevron-right"></i></a>
          </div>
          <div class="matches-grid">${upcoming.map(renderMatchCard).join("")}</div>
        </div>

        <div class="section">
          <div class="section-header">
            <h2 class="section-title"><i class="fas fa-flag-checkered"></i> <span data-i18n="finished_matches">${T("finished_matches")}</span></h2>
          </div>
          <div class="matches-grid">${finished.map(renderMatchCard).join("")}</div>
        </div>

        <div class="section">
          <div class="section-header"><h2 class="section-title"><i class="fas fa-newspaper"></i> <span data-i18n="news_title">${T("news_title")}</span></h2><a href="#/news" class="section-link">View All <i class="fas fa-chevron-right"></i></a></div>
          <div class="news-grid">${DB.news.slice(0,3).map(n=>{
            const club = n.clubId ? getClub(n.clubId) : null;
            return `
            <div class="news-card" data-href="#/news/${n.id}">
              <div style="height:180px;background:${n.gradient};display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;">
                ${club ? `<img src="${club.crest}" style="width:70px;height:70px;object-fit:contain;opacity:0.35;position:absolute;right:20px;bottom:15px;">` : ""}
                <i class="fas ${n.icon}" style="font-size:48px;color:rgba(255,255,255,0.3);"></i>
              </div>
              <div class="news-card-body">
                <span class="news-card-tag">${n.tag}</span>
                <h3 class="news-card-title">${n.title}</h3>
                <span class="news-card-meta"><i class="fas fa-clock"></i> ${n.date}</span>
              </div>
            </div>`;
          }).join("")}</div>
        </div>
      </div>

      <div class="sidebar">
        <div class="sidebar-card">
          <div class="sidebar-card-header"><i class="fas fa-trophy"></i> Competitions</div>
          <div class="sidebar-card-body">
            ${DB.leagues.map(l=>`<a href="#/league/${l.id}" style="display:flex;align-items:center;gap:12px;padding:10px 8px;border-radius:8px;transition:all .2s;" onmouseover="this.style.background='var(--card-hover)'" onmouseout="this.style.background='transparent'"><img src="${l.emblem}" style="width:26px;height:26px;object-fit:contain;"> <span style="font-size:14px;font-weight:600;">${l.name}</span></a>`).join("")}
          </div>
        </div>

        <div class="sidebar-card">
          <div class="sidebar-card-header"><i class="fas fa-star"></i> Top Players</div>
          <div class="sidebar-card-body">
            ${DB.players.slice(0,5).map(p=>`<a href="#/player/${p.id}" style="display:flex;align-items:center;gap:12px;padding:10px 8px;border-radius:8px;transition:all .2s;" onmouseover="this.style.background='var(--card-hover)'" onmouseout="this.style.background='transparent'"><div class="player-avatar-placeholder" style="width:32px;height:32px;font-size:12px;">${p.name[0]}</div> <div><div style="font-size:13px;font-weight:600;">${p.name}</div><div style="font-size:11px;color:var(--text-2);">${p.pos} · ${clubName(p.teamId)}</div></div></a>`).join("")}
          </div>
        </div>
      </div>
    </div>
  </div>`;
});

// ─── LIVE ───
router.add("#/live", ()=>{
  const live = DB.matches.filter(m=>m.status==="LIVE");
  return `<div class="page">
    <h2 class="section-title mb-24"><i class="fas fa-circle live-dot"></i> <span data-i18n="live_scores">${T("live_scores")}</span></h2>
    <div class="matches-grid">${live.length ? live.map(renderMatchCard).join("") : `<div class="empty-state"><div class="empty-state-icon"><i class="fas fa-futbol"></i></div><div class="empty-state-title">No Live Matches</div><div class="empty-state-text">Check back later for live action.</div></div>`}</div>
  </div>`;
});

// ─── SCHEDULE ───
router.add("#/schedule", ()=>{
  const upcoming = DB.matches.filter(m=>m.status==="SCHEDULED");
  const finished = DB.matches.filter(m=>m.status==="FINISHED");
  return `<div class="page">
    <h2 class="section-title mb-24"><i class="fas fa-calendar"></i> ${T("upcoming_matches")}</h2>
    <div class="matches-grid mb-24">${upcoming.length ? upcoming.map(renderMatchCard).join("") : `<div class="text-muted" style="padding:20px;">No upcoming fixtures.</div>`}</div>
    <h2 class="section-title mb-24"><i class="fas fa-flag-checkered"></i> ${T("finished_matches")}</h2>
    <div class="matches-grid">${finished.map(renderMatchCard).join("")}</div>
  </div>`;
});

// ─── LEAGUE ───
router.add("#/league/:id", (p)=>{
  const league = getLeague(p.id);
  if(!league) return `<div class="page"><div class="error-state"><div class="error-title">League not found</div></div></div>`;
  const table = calcStandings(p.id);
  const clubs = DB.clubs.filter(c=>c.league===p.id);
  const matches = DB.matches.filter(m=>m.comp===p.id);

  return `<div class="page">
    <div class="team-hero">
      <img src="${league.emblem}" alt="${league.name}" class="team-badge">
      <div class="team-hero-info">
        <h1 class="team-hero-name">${league.name}</h1>
        <div class="team-hero-meta">
          <span class="team-meta-item"><i class="fas fa-globe"></i> ${league.country}</span>
          <span class="team-meta-item"><i class="fas fa-users"></i> ${clubs.length} Clubs</span>
        </div>
      </div>
    </div>

    <div class="section">
      <h2 class="section-title mb-16"><i class="fas fa-list-ol"></i> ${T("league_table")}</h2>
      <div class="standings-wrap card">
        <table class="standings-table">
          <thead><tr><th>Pos</th><th>Team</th><th>MP</th><th>W</th><th>D</th><th>L</th><th>GF</th><th>GA</th><th>GD</th><th class="pts">PTS</th></tr></thead>
          <tbody>${table.map((r,i)=>`
            <tr data-href="#/team/${r.team.id}" style="cursor:pointer;">
              <td class="pos">${i+1}</td>
              <td><div class="team-col"><img src="${r.team.crest}" alt="${r.team.tla}"> <span>${r.team.name}</span></div></td>
              <td>${r.mp}</td><td>${r.w}</td><td>${r.d}</td><td>${r.l}</td>
              <td>${r.gf}</td><td>${r.ga}</td><td>${r.gd}</td><td class="pts">${r.pts}</td>
            </tr>
          `).join("")}</tbody>
        </table>
      </div>
    </div>

    <div class="section">
      <h2 class="section-title mb-16"><i class="fas fa-shield-alt"></i> Clubs</h2>
      <div class="clubs-grid">${clubs.map(c=>`
        <div class="club-card" data-href="#/team/${c.id}">
          <img src="${c.crest}" alt="${c.tla}">
          <div class="club-card-name">${c.name}</div>
        </div>
      `).join("")}</div>
    </div>

    <div class="section">
      <h2 class="section-title mb-16"><i class="fas fa-futbol"></i> Matches</h2>
      <div class="matches-grid">${matches.map(renderMatchCard).join("") || `<div class="text-muted">No matches available.</div>`}</div>
    </div>
  </div>`;
});

// ─── TEAM ───
router.add("#/team/:id", (p)=>{
  const club = getClub(p.id);
  if(!club) return `<div class="page"><div class="error-state"><div class="error-title">Club not found</div></div></div>`;
  const squad = DB.players.filter(pl=>pl.teamId===p.id);
  const matches = DB.matches.filter(m=>m.home===p.id||m.away===p.id);

  return `<div class="page">
    <div class="team-hero">
      <img src="${club.crest}" alt="${club.tla}" class="team-badge">
      <div class="team-hero-info">
        <h1 class="team-hero-name">${club.name}</h1>
        <div class="team-hero-meta">
          <span class="team-meta-item"><i class="fas fa-map-marker-alt"></i> ${club.stadium}</span>
          <span class="team-meta-item"><i class="fas fa-calendar-alt"></i> Founded ${club.founded}</span>
          <span class="team-meta-item"><i class="fas fa-user-tie"></i> ${club.coach}</span>
        </div>
      </div>
    </div>

    ${squad.length ? `<div class="section">
      <h2 class="section-title mb-16"><i class="fas fa-users"></i> Squad</h2>
      <div class="squad-grid">${squad.map(pl=>`
        <div class="squad-card" data-href="#/player/${pl.id}">
          <span class="squad-num">${pl.num}</span>
          <div class="squad-info"><div class="squad-name">${pl.name}</div><div class="squad-pos">${pl.pos}</div></div>
          <span class="squad-flag">${pl.nationality}</span>
        </div>
      `).join("")}</div>
    </div>` : ""}

    <div class="section">
      <h2 class="section-title mb-16"><i class="fas fa-futbol"></i> Fixtures & Results</h2>
      <div class="matches-grid">${matches.length ? matches.map(renderMatchCard).join("") : `<div class="text-muted">No matches available for this club.</div>`}</div>
    </div>
  </div>`;
});

// ─── PLAYER ───
router.add("#/player/:id", (p)=>{
  const pl = DB.players.find(x=>x.id===p.id);
  if(!pl) return `<div class="page"><div class="error-state"><div class="error-title">Player not found</div></div></div>`;

  return `<div class="page">
    <div class="player-hero">
      <div class="player-avatar-placeholder" style="width:120px;height:120px;font-size:42px;">${pl.name[0]}</div>
      <div>
        <h1 class="player-hero-name">${pl.name}</h1>
        <div class="player-hero-pos">${pl.pos} · #${pl.num}</div>
        <div class="player-hero-meta">
          <span class="player-meta-item"><i class="fas fa-shield-alt"></i> ${clubName(pl.teamId)}</span>
          <span class="player-meta-item"><i class="fas fa-flag"></i> ${pl.nationality}</span>
          <span class="player-meta-item"><i class="fas fa-birthday-cake"></i> ${pl.age} years</span>
          <span class="player-meta-item"><i class="fas fa-arrows-alt-v"></i> ${pl.height}</span>
          <span class="player-meta-item"><i class="fas fa-star"></i> Rating: ${pl.rating}</span>
          <span class="player-meta-item"><i class="fas fa-tag"></i> ${pl.value}</span>
        </div>
      </div>
    </div>
    <div class="section">
      <h2 class="section-title mb-16"><i class="fas fa-chart-bar"></i> Season Stats</h2>
      <div class="stats-grid-3">
        <div class="stat-card"><div class="stat-card-num">${pl.stats.goals}</div><div class="stat-card-lbl">Goals</div></div>
        <div class="stat-card"><div class="stat-card-num">${pl.stats.assists}</div><div class="stat-card-lbl">Assists</div></div>
        <div class="stat-card"><div class="stat-card-num">${pl.stats.minutes}</div><div class="stat-card-lbl">Minutes</div></div>
      </div>
    </div>
  </div>`;
});

// ─── UCL ───
router.add("#/ucl", ()=>{
  return `<div class="page">
    <div class="ucl-hero">
      <img src="${C}CL.png" class="ucl-logo" alt="UCL">
      <div class="ucl-title">UEFA Champions League</div>
      <div class="ucl-subtitle">The pinnacle of European club football</div>
    </div>

    <div class="section">
      <h2 class="section-title mb-16"><i class="fas fa-sitemap"></i> Semi-Finals & Final</h2>
      <div class="bracket">
        <div class="bracket-round">
          <div class="bracket-round-title">Semi-Finals</div>
          <div class="bracket-match">
            <div class="bracket-team winner"><img src="${C}5.png"> Bayern Munich <span class="bracket-team-score">3</span></div>
            <div class="bracket-team"><img src="${C}86.png"> Real Madrid <span class="bracket-team-score">2</span></div>
          </div>
          <div class="bracket-match">
            <div class="bracket-team"><img src="${C}108.png"> Inter Milan <span class="bracket-team-score">1</span></div>
            <div class="bracket-team winner"><img src="${C}98.png"> AC Milan <span class="bracket-team-score">2</span></div>
          </div>
        </div>
        <div class="bracket-round">
          <div class="bracket-round-title">Final</div>
          <div class="bracket-match" style="margin-top:40px;">
            <div class="bracket-team"><img src="${C}5.png"> Bayern Munich <span class="bracket-team-score">0 (4)</span></div>
            <div class="bracket-team winner"><img src="${C}98.png"> AC Milan <span class="bracket-team-score">0 (5)</span></div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2 class="section-title mb-16"><i class="fas fa-futbol"></i> Live UCL Matches</h2>
      <div class="matches-grid">${DB.matches.filter(m=>m.comp==="CL").map(renderMatchCard).join("") || `<div class="text-muted">No UCL matches right now.</div>`}</div>
    </div>
  </div>`;
});

// ─── NEWS ───
router.add("#/news", ()=>{
  return `<div class="page">
    <h2 class="section-title mb-24"><i class="fas fa-newspaper"></i> ${T("news_title")}</h2>
    <div class="news-grid">${DB.news.map(n=>{
      const club = n.clubId ? getClub(n.clubId) : null;
      return `
      <div class="news-card" data-href="#/news/${n.id}">
        <div style="height:180px;background:${n.gradient};display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;">
          ${club ? `<img src="${club.crest}" style="width:70px;height:70px;object-fit:contain;opacity:0.35;position:absolute;right:20px;bottom:15px;">` : ""}
          <i class="fas ${n.icon}" style="font-size:48px;color:rgba(255,255,255,0.3);"></i>
        </div>
        <div class="news-card-body">
          <span class="news-card-tag">${n.tag}</span>
          <h3 class="news-card-title">${n.title}</h3>
          <p class="text-muted text-small mb-8">${n.desc}</p>
          <span class="news-card-meta"><i class="fas fa-clock"></i> ${n.date}</span>
        </div>
      </div>`;
    }).join("")}</div>
  </div>`;
});

// ─── NEWS DETAIL ───
router.add("#/news/:id", (p)=>{
  const article = DB.news.find(n=>n.id===parseInt(p.id));
  if(!article) return `<div class="page"><div class="error-state"><div class="error-title">Article not found</div></div></div>`;
  const club = article.clubId ? getClub(article.clubId) : null;
  const paragraphs = article.content.split('\\n\\n').map(p=>`<p style="margin-bottom:16px;line-height:1.8;font-size:15px;color:var(--text);">${p}</p>`).join("");

  return `<div class="page" style="max-width:800px;">
    <a href="#/news" style="display:inline-flex;align-items:center;gap:6px;color:var(--accent);font-size:14px;font-weight:600;margin-bottom:24px;"><i class="fas fa-arrow-left"></i> Back to News</a>
    
    <div style="height:260px;background:${article.gradient};border-radius:var(--radius-lg);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;margin-bottom:32px;">
      ${club ? `<img src="${club.crest}" style="width:100px;height:100px;object-fit:contain;opacity:0.25;position:absolute;right:40px;bottom:30px;">` : ""}
      <i class="fas ${article.icon}" style="font-size:72px;color:rgba(255,255,255,0.2);"></i>
    </div>

    <span class="news-card-tag" style="margin-bottom:12px;display:inline-block;">${article.tag}</span>
    <h1 style="font-size:28px;font-weight:900;line-height:1.3;margin-bottom:12px;">${article.title}</h1>
    <div style="display:flex;align-items:center;gap:16px;margin-bottom:32px;color:var(--text-2);font-size:13px;">
      <span><i class="fas fa-clock"></i> ${article.date}</span>
      ${club ? `<span><i class="fas fa-shield-alt"></i> ${club.name}</span>` : ""}
      <span><i class="fas fa-book-reader"></i> 4 min read</span>
    </div>

    <div style="border-top:1px solid var(--border);padding-top:24px;">
      ${paragraphs}
    </div>

    ${club ? `<div style="margin-top:32px;padding:20px;background:var(--card);border:1px solid var(--border);border-radius:var(--radius);display:flex;align-items:center;gap:16px;cursor:pointer;" data-href="#/team/${club.id}">
      <img src="${club.crest}" style="width:48px;height:48px;object-fit:contain;">
      <div><div style="font-weight:700;">${club.name}</div><div style="font-size:12px;color:var(--text-2);">View Club Profile →</div></div>
    </div>` : ""}
  </div>`;
});

// ─── FAVORITES ───
router.add("#/favorites", ()=>{
  return `<div class="page">
    <h2 class="section-title mb-24"><i class="fas fa-heart"></i> ${T("nav_favorites")}</h2>
    <div class="empty-state">
      <div class="empty-state-icon"><i class="fas fa-heart"></i></div>
      <div class="empty-state-title">${T("no_favorites")}</div>
      <div class="empty-state-text">Browse leagues and clubs to add favorites.</div>
      <a href="#/" class="btn-primary" style="display:inline-block;margin-top:12px;">Explore</a>
    </div>
  </div>`;
});

// ─── PROFILE ───
router.add("#/profile", ()=>{
  return `<div class="page">
    <div class="profile-header">
      <div class="profile-avatar">${state.user?state.user.username[0].toUpperCase():"U"}</div>
      <div>
        <h1 class="profile-name">${state.user?state.user.username:"User"}</h1>
        <p class="profile-email">${state.user?state.user.email:""}</p>
        <button class="btn-secondary mt-16" id="logout-btn">${T("profile_logout")}</button>
      </div>
    </div>
    <div class="settings-section">
      <div class="settings-title"><i class="fas fa-cogs"></i> API Configuration</div>
      <div class="form-group">
        <label class="form-label">Football-Data.org API Token</label>
        <input type="text" class="form-input" id="token-input" value="${state.apiToken}" placeholder="Paste your API token here">
        <button class="btn-primary mt-16" id="save-token-btn">${T("save_changes")}</button>
      </div>
    </div>
  </div>`;
});

// ─── LOGIN ───
router.add("#/login", ()=>{
  return `<div class="page flex-center" style="min-height:70vh;">
    <div class="auth-modal-box card" style="padding:40px;max-width:440px;width:100%;">
      <div class="auth-header">
        <div class="logo-icon" style="margin:0 auto 12px;"><i class="fas fa-futbol"></i></div>
        <h2 class="auth-title">${T("auth_sign_in")}</h2>
        <p class="auth-subtitle">Access your KickZone account</p>
      </div>
      <form id="login-form">
        <div class="form-group">
          <label class="form-label">${T("auth_email")}</label>
          <input type="text" class="form-input" id="login-id" required placeholder="Enter email or username">
        </div>
        <div class="form-group">
          <label class="form-label">${T("auth_password")}</label>
          <div class="form-input-wrap">
            <input type="password" class="form-input" id="login-pass" required placeholder="Enter password">
            <button type="button" class="password-toggle" id="toggle-login-pw"><i class="fas fa-eye"></i></button>
          </div>
        </div>
        <div class="form-row">
          <label class="checkbox-label"><input type="checkbox"> ${T("auth_remember_me")}</label>
          <a href="#/forgot" class="form-link">${T("auth_forgot")}</a>
        </div>
        <button class="btn-full" type="submit">${T("auth_sign_in")}</button>
        <div class="auth-divider">OR</div>
        <button type="button" class="btn-google" id="google-login-btn"><i class="fab fa-google"></i> ${T("auth_google")}</button>
        <div class="auth-switch">${T("auth_no_account")} <a href="#/register" class="form-link">${T("auth_sign_up")}</a></div>
      </form>
    </div>
  </div>`;
});

// ─── REGISTER ───
router.add("#/register", ()=>{
  return `<div class="page flex-center" style="min-height:70vh;">
    <div class="auth-modal-box card" style="padding:40px;max-width:440px;width:100%;">
      <div class="auth-header">
        <div class="logo-icon" style="margin:0 auto 12px;"><i class="fas fa-futbol"></i></div>
        <h2 class="auth-title">${T("auth_sign_up")}</h2>
        <p class="auth-subtitle">Create your KickZone account</p>
      </div>
      <form id="register-form">
        <div class="form-group">
          <label class="form-label">Username</label>
          <input type="text" class="form-input" id="reg-name" required placeholder="Choose a username">
        </div>
        <div class="form-group">
          <label class="form-label">Email Address</label>
          <input type="email" class="form-input" id="reg-email" required placeholder="your@email.com">
        </div>
        <div class="form-group">
          <label class="form-label">${T("auth_password")}</label>
          <div class="form-input-wrap">
            <input type="password" class="form-input" id="reg-pass" required placeholder="Create a password">
            <button type="button" class="password-toggle" id="toggle-reg-pw"><i class="fas fa-eye"></i></button>
          </div>
        </div>
        <button class="btn-full" type="submit">${T("auth_sign_up")}</button>
        <div class="auth-switch">${T("auth_have_account")} <a href="#/login" class="form-link">${T("auth_sign_in")}</a></div>
      </form>
    </div>
  </div>`;
});

// ─── FORGOT PASSWORD ───
router.add("#/forgot", ()=>{
  return `<div class="page flex-center" style="min-height:70vh;">
    <div class="auth-modal-box card" style="padding:40px;max-width:440px;width:100%;">
      <div class="auth-header">
        <div class="logo-icon" style="margin:0 auto 12px;"><i class="fas fa-futbol"></i></div>
        <h2 class="auth-title">${T("auth_forgot")}</h2>
        <p class="auth-subtitle">Enter your email to reset your password</p>
      </div>
      <form id="forgot-form">
        <div class="form-group">
          <label class="form-label">Email Address</label>
          <input type="email" class="form-input" id="forgot-email" required placeholder="your@email.com">
        </div>
        <button class="btn-full" type="submit">Send Reset Link</button>
        <div class="auth-switch"><a href="#/login" class="form-link">Back to Sign In</a></div>
      </form>
    </div>
  </div>`;
});

/* ═══════════════════════════════════════════════
   GLOBAL EVENT DELEGATION
   ═══════════════════════════════════════════════ */
document.addEventListener("click", e=>{
  // data-href navigation
  const hrefEl = e.target.closest("[data-href]");
  if(hrefEl) { location.hash = hrefEl.dataset.href; return; }

  // data-match click → open match modal
  const matchEl = e.target.closest("[data-match]");
  if(matchEl) {
    const m = DB.matches.find(x=>x.id===parseInt(matchEl.dataset.match));
    if(m) openMatchModal(m);
    return;
  }

  // Login button
  if(e.target.closest("#login-btn")) { location.hash="#/login"; return; }
  if(e.target.closest("#nav-avatar-btn")) { location.hash="#/profile"; return; }

  // Logout
  if(e.target.closest("#logout-btn")) { auth.logout(); return; }

  // Save token
  if(e.target.closest("#save-token-btn")) {
    const val = document.getElementById("token-input");
    if(val) { state.apiToken=val.value.trim(); localStorage.setItem("kz_token",state.apiToken); toast.show("API Token saved!","success"); }
    return;
  }

  // Password toggles
  if(e.target.closest("#toggle-login-pw")) { togglePwField("login-pass", e.target.closest("#toggle-login-pw")); return; }
  if(e.target.closest("#toggle-reg-pw"))   { togglePwField("reg-pass",   e.target.closest("#toggle-reg-pw"));   return; }

  // Google login mock
  if(e.target.closest("#google-login-btn")) {
    const mockUser = { username:"GoogleUser", email:"user@gmail.com", password:"google-auth" };
    let users = JSON.parse(localStorage.getItem("kz_users")||"[]");
    if(!users.find(u=>u.email===mockUser.email)) { users.push(mockUser); localStorage.setItem("kz_users",JSON.stringify(users)); }
    auth.setSession(mockUser);
    return;
  }

  // Theme toggles
  if(e.target.closest("#theme-toggle") || e.target.closest("#mobile-theme-toggle")) { toggleTheme(); return; }

  // Lang toggles
  if(e.target.closest("#lang-toggle") || e.target.closest("#mobile-lang-toggle")) { toggleLang(); return; }

  // Match modal close
  if(e.target.closest("#match-modal-close") || e.target.id==="match-modal") {
    document.getElementById("match-modal").classList.remove("open");
    return;
  }
});

// Form submissions
document.addEventListener("submit", e=>{
  e.preventDefault();
  if(e.target.id==="login-form") {
    const id = document.getElementById("login-id").value;
    const pw = document.getElementById("login-pass").value;
    const res = auth.login(id,pw);
    if(!res.ok) toast.show(res.msg,"error");
  }
  if(e.target.id==="register-form") {
    const name  = document.getElementById("reg-name").value;
    const email = document.getElementById("reg-email").value;
    const pw    = document.getElementById("reg-pass").value;
    const res = auth.register(name,email,pw);
    if(!res.ok) toast.show(res.msg,"error");
  }
  if(e.target.id==="forgot-form") {
    toast.show("If this email exists, a reset link has been sent.","info");
  }
});

// Password toggle helper
function togglePwField(inputId, btn) {
  const inp = document.getElementById(inputId);
  if(!inp) return;
  if(inp.type==="password") { inp.type="text"; btn.innerHTML=`<i class="fas fa-eye-slash"></i>`; }
  else { inp.type="password"; btn.innerHTML=`<i class="fas fa-eye"></i>`; }
}

// ─── DEFAULTS FOR DISCUSSION & POLLS ───
const defaultComments = {
  101: [
    { username: "LiverpoolFan99", comment: "Perfect performance from Salah! But that referee decision on the penalty was absolute robbery! ❌", date: "Just now" },
    { username: "UnitedUnited", comment: "Ref was blind today. Clearly a handball in the box, should have been a penalty! 😡", date: "5 mins ago" }
  ],
  102: [
    { username: "Cityzen", comment: "Draw is fair. Arsenal's low block is so frustrating to play against.", date: "10 mins ago" },
    { username: "GunnersRule", comment: "Incredible defensive masterclass from Gabriel and Saliba today! 🛡️", date: "12 mins ago" }
  ],
  104: [
    { username: "MiaSanMia", comment: "Going to penalties! My heart can't take this anymore! ⏱️", date: "2 mins ago" },
    { username: "HalaMadrid", comment: "Ancelotti's magic will save us in the shootout. Real Madrid never dies!", date: "1 min ago" }
  ]
};

const defaultPolls = {
  101: { fair: 45, robbery: 35, controversy: 20 },
  102: { fair: 80, robbery: 10, controversy: 10 },
  103: { fair: 70, robbery: 15, controversy: 15 },
  104: { fair: 60, robbery: 20, controversy: 20 },
  105: { fair: 90, robbery: 5, controversy: 5 }
};

function getMatchPoll(matchId) {
  let stored = sessionStorage.getItem(`kz_poll_${matchId}`);
  if (stored) return JSON.parse(stored);
  return defaultPolls[matchId] || { fair: 50, robbery: 25, controversy: 25 };
}

function getMatchComments(matchId) {
  let stored = sessionStorage.getItem(`kz_comments_${matchId}`);
  if (stored) return JSON.parse(stored);
  return defaultComments[matchId] || [
    { username: "FootballLover", comment: "What a match! Highly competitive game.", date: "10 mins ago" }
  ];
}

window.submitMatchVote = function(matchId, option) {
  let poll = getMatchPoll(matchId);
  poll[option]++;
  sessionStorage.setItem(`kz_poll_${matchId}`, JSON.stringify(poll));
  toast.show("Your vote has been counted / تم تسجيل تصويتك بنجاح!", "success");
  const match = DB.matches.find(x=>x.id===matchId);
  if(match) openMatchModal(match);
};

window.addMatchComment = function(matchId) {
  const input = document.getElementById("match-comment-input");
  if(!input) return;
  const val = input.value.trim();
  if(!val) return;
  
  const username = state.user ? state.user.username : "GuestFan";
  let comments = getMatchComments(matchId);
  comments.unshift({ username, comment: val, date: "Just now" });
  sessionStorage.setItem(`kz_comments_${matchId}`, JSON.stringify(comments));
  
  input.value = "";
  toast.show("Comment posted / تم نشر تعليقك!", "success");
  const match = DB.matches.find(x=>x.id===matchId);
  if(match) openMatchModal(match);
};

// Match modal with full statistics and fan zone
function openMatchModal(m) {
  const hc = getClub(m.home) || {name:m.home, crest:""};
  const ac = getClub(m.away) || {name:m.away, crest:""};
  const league = getLeague(m.comp);
  const hs = m.extraTime ? m.etScore.h : m.homeScore;
  const as = m.extraTime ? m.etScore.a : m.awayScore;

  // Build stats bars
  let statsHTML = "";
  if(m.stats) {
    const statLabels = [
      ["possession",    "Possession",       "%"],
      ["shots",         "Total Shots",      ""],
      ["shotsOnTarget", "Shots on Target",  ""],
      ["corners",       "Corners",          ""],
      ["offsides",      "Offsides",         ""],
      ["fouls",         "Fouls",            ""],
      ["yellowCards",   "Yellow Cards",     ""],
      ["redCards",      "Red Cards",        ""],
      ["passes",        "Passes",           ""],
      ["passAccuracy",  "Pass Accuracy",    "%"]
    ];
    statsHTML = `<div style="border-top:1px solid var(--border);margin-top:24px;padding-top:20px;">
      <div style="font-size:16px;font-weight:700;text-align:center;margin-bottom:20px;"><i class="fas fa-chart-bar" style="color:var(--accent);"></i> Match Statistics</div>
      ${statLabels.map(([key, label, suffix])=>{
        const hv = m.stats[key][0];
        const av = m.stats[key][1];
        const total = hv + av || 1;
        const hPct = Math.round((hv / total) * 100);
        const aPct = 100 - hPct;
        const hColor = hv > av ? "var(--accent)" : "var(--text-3)";
        const aColor = av > hv ? "var(--accent)" : "var(--text-3)";
        return `<div style="margin-bottom:14px;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
            <span style="font-size:14px;font-weight:700;color:${hColor};min-width:40px;">${hv}${suffix}</span>
            <span style="font-size:12px;color:var(--text-2);font-weight:500;">${label}</span>
            <span style="font-size:14px;font-weight:700;color:${aColor};min-width:40px;text-align:right;">${av}${suffix}</span>
          </div>
          <div style="display:flex;gap:4px;height:6px;">
            <div style="flex:${hPct};background:${hColor};border-radius:3px 0 0 3px;transition:flex 0.6s ease;"></div>
            <div style="flex:${aPct};background:${aColor};border-radius:0 3px 3px 0;transition:flex 0.6s ease;"></div>
          </div>
        </div>`;
      }).join("")}
    </div>`;
  } else if(m.status === "SCHEDULED") {
    statsHTML = `<div style="text-align:center;padding:24px 0;color:var(--text-2);font-size:14px;"><i class="fas fa-clock" style="font-size:24px;margin-bottom:8px;display:block;color:var(--text-3);"></i>Match statistics will be available once the match begins.</div>`;
  }

  // Build Poll HTML
  const poll = getMatchPoll(m.id);
  const comments = getMatchComments(m.id);
  const totalVotes = poll.fair + poll.robbery + poll.controversy || 1;
  const fPct = Math.round((poll.fair / totalVotes) * 100);
  const rPct = Math.round((poll.robbery / totalVotes) * 100);
  const cPct = 100 - fPct - rPct;

  let pollHTML = `
    <div style="border-top:1px solid var(--border);margin-top:24px;padding-top:20px;text-align:left;">
      <div style="font-size:16px;font-weight:700;text-align:center;margin-bottom:16px;"><i class="fas fa-poll" style="color:var(--accent);"></i> Fan Poll / رأي الجماهير</div>
      <div style="font-size:12px;color:var(--text-2);text-align:center;margin-bottom:16px;">What is your opinion on the referee's decisions in this match? / ما رأيك في القرارات التحكيمية؟</div>
      
      <div style="display:flex;flex-direction:column;gap:10px;">
        <button class="btn-secondary" style="width:100%;display:flex;justify-content:space-between;padding:12px 16px;font-size:13px;border-radius:var(--radius-sm);" onclick="submitMatchVote(${m.id}, 'fair')">
          <span>⚖️ Fair Decisions / عادل</span>
          <strong>${fPct}%</strong>
        </button>
        <button class="btn-secondary" style="width:100%;display:flex;justify-content:space-between;padding:12px 16px;font-size:13px;border-radius:var(--radius-sm);" onclick="submitMatchVote(${m.id}, 'robbery')">
          <span>❌ Injustice / ظلم تحكيمي</span>
          <strong>${rPct}%</strong>
        </button>
        <button class="btn-secondary" style="width:100%;display:flex;justify-content:space-between;padding:12px 16px;font-size:13px;border-radius:var(--radius-sm);" onclick="submitMatchVote(${m.id}, 'controversy')">
          <span>🧐 Controversial Call / ركلة جزاء مشكوك فيها</span>
          <strong>${cPct}%</strong>
        </button>
      </div>
    </div>
  `;

  let commentsHTML = `
    <div style="border-top:1px solid var(--border);margin-top:24px;padding-top:20px;text-align:left;">
      <div style="font-size:16px;font-weight:700;text-align:center;margin-bottom:16px;"><i class="fas fa-comments" style="color:var(--accent);"></i> Discussion Arena / ساحة نقاش الجماهير</div>
      
      <div style="display:flex;gap:10px;margin-bottom:16px;">
        <input type="text" class="form-input" id="match-comment-input" placeholder="${state.lang === 'ar' ? 'اكتب رأيك في المباراة هنا...' : 'Write your opinion on the match...'}" style="flex:1;font-size:13px;height:38px;">
        <button class="btn-primary" onclick="addMatchComment(${m.id})" style="height:38px;padding:0 16px;">${state.lang === 'ar' ? 'إرسال' : 'Send'}</button>
      </div>

      <div id="match-comments-list" style="display:flex;flex-direction:column;gap:10px;max-height:220px;overflow-y:auto;padding-right:4px;">
        ${comments.map(c=>`
          <div style="background:var(--card);border:1px solid var(--border);padding:10px 14px;border-radius:var(--radius-sm);">
            <div style="display:flex;justify-content:space-between;margin-bottom:6px;font-size:11px;">
              <strong style="color:var(--accent);">@${c.username}</strong>
              <span class="text-muted">${c.date}</span>
            </div>
            <div style="font-size:13px;line-height:1.4;">${c.comment}</div>
          </div>
        `).join("")}
      </div>
    </div>
  `;

  document.getElementById("match-modal-content").innerHTML = `
    <div style="text-align:center;">
      ${league ? `<div style="margin-bottom:16px;"><img src="${league.emblem}" style="width:28px;height:28px;display:inline;vertical-align:middle;"> <span style="font-size:14px;font-weight:600;color:var(--text-2);">${league.name}</span></div>` : ""}
      <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:20px;padding:20px 0;">
        <div style="text-align:center;">
          <img src="${hc.crest}" style="width:72px;height:72px;margin:0 auto 10px;object-fit:contain;">
          <div style="font-weight:700;font-size:16px;">${hc.name}</div>
        </div>
        <div>
          <div style="font-size:36px;font-weight:900;">${m.status!=="SCHEDULED" ? `${hs} - ${as}` : "vs"}</div>
          <div style="font-size:13px;color:var(--text-2);margin-top:4px;">${m.status=="LIVE" ? `<span class="match-minute">${m.minute}'</span>` : m.status}</div>
          ${m.extraTime ? `<div style="color:var(--accent-draw);font-size:12px;margin-top:4px;">Extra Time</div>` : ""}
          ${m.penalties ? `<div style="color:var(--accent-2);font-size:13px;font-weight:700;margin-top:4px;">Penalties: ${m.penScore.h} - ${m.penScore.a}</div>` : ""}
        </div>
        <div style="text-align:center;">
          <img src="${ac.crest}" style="width:72px;height:72px;margin:0 auto 10px;object-fit:contain;">
          <div style="font-weight:700;font-size:16px;">${ac.name}</div>
        </div>
      </div>
      ${statsHTML}
      ${pollHTML}
      ${commentsHTML}
    </div>
  `;
  document.getElementById("match-modal").classList.add("open");
}

/* ═══════════════════════════════════════════════
   INIT
   ═══════════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", ()=>{
  applyTheme();
  applyLang();
  renderNavUser();
  setupHamburger();
  setupSearch();
  router.init();
  startSimulation();
});
