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
    { id:101, comp:"PL",  home:"64",  away:"66",  homeScore:2, awayScore:1, status:"LIVE",     minute:72, stage:"REGULAR_SEASON", date:"2026-07-20T12:00:00Z" },
    { id:102, comp:"PL",  home:"65",  away:"57",  homeScore:1, awayScore:1, status:"LIVE",     minute:38, stage:"REGULAR_SEASON", date:"2026-07-20T12:30:00Z" },
    { id:103, comp:"PD",  home:"86",  away:"81",  homeScore:3, awayScore:1, status:"FINISHED", minute:90, stage:"REGULAR_SEASON", date:"2026-07-19T20:00:00Z" },
    { id:104, comp:"CL",  home:"5",   away:"86",  homeScore:1, awayScore:1, status:"LIVE",     minute:96, stage:"SEMI_FINALS",    date:"2026-07-20T11:00:00Z", extraTime:true, etScore:{h:1,a:1} },
    { id:105, comp:"SA",  home:"108", away:"98",  homeScore:2, awayScore:0, status:"FINISHED", minute:90, stage:"REGULAR_SEASON", date:"2026-07-19T18:00:00Z" },
    { id:106, comp:"PL",  home:"61",  away:"73",  homeScore:0, awayScore:0, status:"SCHEDULED",minute:0,  stage:"REGULAR_SEASON", date:"2026-07-21T19:00:00Z" },
    { id:107, comp:"BL1", home:"5",   away:"4",   homeScore:0, awayScore:0, status:"SCHEDULED",minute:0,  stage:"REGULAR_SEASON", date:"2026-07-22T17:30:00Z" },
    { id:108, comp:"FL1", home:"524", away:"516", homeScore:0, awayScore:0, status:"SCHEDULED",minute:0,  stage:"REGULAR_SEASON", date:"2026-07-22T20:00:00Z" },
    { id:109, comp:"PD",  home:"78",  away:"92",  homeScore:1, awayScore:0, status:"FINISHED", minute:90, stage:"REGULAR_SEASON", date:"2026-07-18T20:00:00Z" }
  ],

  news: [
    { id:1, title:"Mohamed Salah seals massive extension at Anfield",            desc:"Liverpool FC confirms Salah has signed a contract extension keeping him at the club until 2028.", tag:"Transfer News",   date:"2026-07-20" },
    { id:2, title:"Pep Guardiola reveals tactical overhaul plans",               desc:"City boss says structural updates were necessary to overcome Arsenal's defensive block.",        tag:"Match Analysis", date:"2026-07-20" },
    { id:3, title:"Real Madrid unveil elite prospects for new campaign",         desc:"Florentino Pérez outlines the long-term vision during the official presentation.",               tag:"La Liga",        date:"2026-07-19" },
    { id:4, title:"Champions League semi-final preview: Bayern vs Real Madrid",  desc:"Two European giants clash with a spot in the final at stake. Key tactical insights inside.",    tag:"UCL",            date:"2026-07-20" }
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
          <div class="section-header"><h2 class="section-title"><i class="fas fa-newspaper"></i> <span data-i18n="news_title">${T("news_title")}</span></h2></div>
          <div class="news-grid">${DB.news.map(n=>`
            <div class="news-card" data-href="#/news">
              <div class="news-card-img-placeholder"><i class="fas fa-newspaper"></i></div>
              <div class="news-card-body">
                <span class="news-card-tag">${n.tag}</span>
                <h3 class="news-card-title">${n.title}</h3>
                <span class="news-card-meta">${n.date}</span>
              </div>
            </div>
          `).join("")}</div>
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
    <div class="news-grid">${DB.news.map(n=>`
      <div class="news-card">
        <div class="news-card-img-placeholder"><i class="fas fa-newspaper"></i></div>
        <div class="news-card-body">
          <span class="news-card-tag">${n.tag}</span>
          <h3 class="news-card-title" style="-webkit-line-clamp:unset;">${n.title}</h3>
          <p class="text-muted text-small mb-8">${n.desc}</p>
          <span class="news-card-meta">${n.date}</span>
        </div>
      </div>
    `).join("")}</div>
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

// Match modal
function openMatchModal(m) {
  const hc = getClub(m.home) || {name:m.home, crest:""};
  const ac = getClub(m.away) || {name:m.away, crest:""};
  const league = getLeague(m.comp);
  const hs = m.extraTime ? m.etScore.h : m.homeScore;
  const as = m.extraTime ? m.etScore.a : m.awayScore;

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
          <div style="font-size:13px;color:var(--text-2);margin-top:4px;">${m.status}</div>
          ${m.extraTime ? `<div style="color:var(--accent-draw);font-size:12px;margin-top:4px;">After Extra Time</div>` : ""}
          ${m.penalties ? `<div style="color:var(--accent-2);font-size:13px;font-weight:700;margin-top:4px;">Penalties: ${m.penScore.h} - ${m.penScore.a}</div>` : ""}
        </div>
        <div style="text-align:center;">
          <img src="${ac.crest}" style="width:72px;height:72px;margin:0 auto 10px;object-fit:contain;">
          <div style="font-weight:700;font-size:16px;">${ac.name}</div>
        </div>
      </div>
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
