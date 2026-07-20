/**
 * KICKZONE — CORE APPLICATION ENGINE
 */

// ==========================================
// i18n LOCALIZATION
// ==========================================
const i18n = {
  en: {
    nav_home: "Home",
    nav_live: "Live",
    nav_schedule: "Schedule",
    nav_news: "News",
    nav_ucl: "UCL",
    nav_favorites: "Favorites",
    nav_profile: "Profile",
    nav_login: "Login",
    toggle_theme: "Toggle Theme",
    home_title: "Explore the Football World",
    live_scores: "Live Matches",
    upcoming_matches: "Upcoming Fixtures",
    finished_matches: "Results",
    news_title: "Latest Football News",
    league_table: "Standings",
    form_pts: "PTS",
    form_w: "W",
    form_d: "D",
    form_l: "L",
    form_gd: "GD",
    form_gf: "GF",
    form_ga: "GA",
    form_mp: "MP",
    form_team: "Team",
    form_pos: "Pos",
    match_live: "Live",
    match_ft: "FT",
    match_et: "ET",
    match_pk: "Penalties",
    match_duration: "Duration",
    auth_sign_in: "Sign In",
    auth_sign_up: "Sign Up",
    auth_forgot: "Forgot Password",
    auth_email: "Email or Username",
    auth_password: "Password",
    auth_confirm_password: "Confirm Password",
    auth_remember_me: "Remember Me",
    auth_no_account: "Don't have an account?",
    auth_have_account: "Already have an account?",
    auth_google: "Continue with Google",
    profile_settings: "Profile Settings",
    profile_logout: "Logout",
    api_token: "API Personal Token",
    save_changes: "Save Changes",
    compare_title: "Compare Teams & Players",
    fantasy_title: "Fantasy Football Draft",
    error_loading: "Error loading content. Please try again.",
    no_favorites: "You haven't added any favorites yet.",
    search_placeholder: "Search clubs, players, leagues..."
  },
  ar: {
    nav_home: "الرئيسية",
    nav_live: "مباشر",
    nav_schedule: "المباريات",
    nav_news: "الأخبار",
    nav_ucl: "أبطال أوروبا",
    nav_favorites: "المفضلة",
    nav_profile: "الملف الشخصي",
    nav_login: "تسجيل الدخول",
    toggle_theme: "تغيير المظهر",
    home_title: "استكشف عالم كرة القدم",
    live_scores: "المباريات المباشرة",
    upcoming_matches: "المباريات القادمة",
    finished_matches: "النتائج الأخيرة",
    news_title: "آخر أخبار كرة القدم",
    league_table: "جدول الترتيب",
    form_pts: "نقاط",
    form_w: "ف",
    form_d: "ت",
    form_l: "خ",
    form_gd: "ف.أ",
    form_gf: "له",
    form_ga: "عليه",
    form_mp: "لعب",
    form_team: "الفريق",
    form_pos: "م",
    match_live: "مباشر",
    match_ft: "انتهت",
    match_et: "شوط إضافي",
    match_pk: "ركلات ترجيح",
    match_duration: "مدة المباراة",
    auth_sign_in: "تسجيل الدخول",
    auth_sign_up: "إنشاء حساب",
    auth_forgot: "نسيت كلمة المرور؟",
    auth_email: "البريد الإلكتروني أو اسم المستخدم",
    auth_password: "كلمة المرور",
    auth_confirm_password: "تأكيد كلمة المرور",
    auth_remember_me: "تذكرني",
    auth_no_account: "ليس لديك حساب؟",
    auth_have_account: "لديك حساب بالفعل؟",
    auth_google: "الدخول بواسطة جوجل",
    profile_settings: "إعدادات الحساب",
    profile_logout: "تسجيل الخروج",
    api_token: "رمز API الخاص بك",
    save_changes: "حفظ التغييرات",
    compare_title: "مقارنة الفرق واللاعبين",
    fantasy_title: "فانتازي كرة القدم",
    error_loading: "حدث خطأ أثناء تحميل المحتوى. يرجى المحاولة لاحقاً.",
    no_favorites: "لم تقم بإضافة أي عناصر للمفضلة بعد.",
    search_placeholder: "ابحث عن أندية، لاعبين، بطولات..."
  }
};

// ==========================================
// REAL DATA ENGINE FALLBACK
// ==========================================
const fallbackDB = {
  leagues: [],
  clubs: [],
  rules: {},
  players: [
    { "id": "salah", "name": "Mohamed Salah", "teamId": "liv", "num": 11, "pos": "FWD", "rating": 89, "value": "€55M", "status": "Fit", "age": 34, "height": "175 cm", "foot": "Left", "nationality": "Egyptian", "photo": "https://images.thefifadb.com/players/salah.png", "stats": { "goals": 18, "assists": 9, "minutes": 2450 } },
    { "id": "haaland", "name": "Erling Haaland", "teamId": "mci", "num": 9, "pos": "FWD", "rating": 91, "value": "€180M", "status": "Fit", "age": 25, "height": "194 cm", "foot": "Right", "nationality": "Norwegian", "photo": "https://images.thefifadb.com/players/haaland.png", "stats": { "goals": 27, "assists": 5, "minutes": 2310 } },
    { "id": "mbappe", "name": "Kylian Mbappé", "teamId": "rma", "num": 9, "pos": "FWD", "rating": 91, "value": "€180M", "status": "Fit", "age": 27, "height": "178 cm", "foot": "Right", "nationality": "French", "photo": "https://images.thefifadb.com/players/mbappe.png", "stats": { "goals": 21, "assists": 7, "minutes": 2100 } },
    { "id": "bellingham", "name": "Jude Bellingham", "teamId": "rma", "num": 5, "pos": "MID", "rating": 90, "value": "€180M", "status": "Fit", "age": 22, "height": "186 cm", "foot": "Right", "nationality": "English", "photo": "https://images.thefifadb.com/players/bellingham.png", "stats": { "goals": 14, "assists": 10, "minutes": 2240 } },
    { "id": "saka", "name": "Bukayo Saka", "teamId": "ars", "num": 7, "pos": "FWD", "rating": 87, "value": "€120M", "status": "Fit", "age": 24, "height": "178 cm", "foot": "Left", "nationality": "English", "photo": "https://images.thefifadb.com/players/saka.png", "stats": { "goals": 15, "assists": 11, "minutes": 2510 } }
  ],
  matches: [
    {
      "id": 101,
      "competitionId": "PL",
      "homeTeamId": "liv",
      "awayTeamId": "mun",
      "homeScore": 2,
      "awayScore": 2,
      "status": "LIVE",
      "minute": 78,
      "stage": "REGULAR_SEASON",
      "date": "2026-07-20T12:00:00Z"
    },
    {
      "id": 102,
      "competitionId": "PL",
      "homeTeamId": "mci",
      "awayTeamId": "ars",
      "homeScore": 1,
      "awayScore": 0,
      "status": "LIVE",
      "minute": 42,
      "stage": "REGULAR_SEASON",
      "date": "2026-07-20T12:30:00Z"
    },
    {
      "id": 103,
      "competitionId": "PD",
      "homeTeamId": "rma",
      "awayTeamId": "bar",
      "homeScore": 3,
      "awayScore": 1,
      "status": "FINISHED",
      "minute": 90,
      "stage": "REGULAR_SEASON",
      "date": "2026-07-19T20:00:00Z"
    },
    {
      "id": 104,
      "competitionId": "CL",
      "homeTeamId": "bay",
      "awayTeamId": "rma",
      "homeScore": 1,
      "awayScore": 1,
      "status": "LIVE",
      "minute": 112,
      "stage": "SEMI_FINALS",
      "extraTime": true,
      "extraTimeScore": { "home": 1, "away": 1 },
      "penalties": false,
      "date": "2026-07-20T11:00:00Z"
    },
    {
      "id": 105,
      "competitionId": "CL",
      "homeTeamId": "int",
      "awayTeamId": "mil",
      "homeScore": 0,
      "awayScore": 0,
      "status": "LIVE",
      "minute": 120,
      "stage": "QUARTER_FINALS",
      "extraTime": true,
      "extraTimeScore": { "home": 0, "away": 0 },
      "penalties": true,
      "penaltyScore": { "home": 4, "away": 3 },
      "date": "2026-07-20T10:45:00Z"
    },
    {
      "id": 106,
      "competitionId": "PL",
      "homeTeamId": "che",
      "awayTeamId": "tot",
      "status": "SCHEDULED",
      "date": "2026-07-21T19:00:00Z"
    }
  ],
  news: [
    { "id": 1, "title": "Mohamed Salah seals massive extension at Anfield", "desc": "Liverpool FC confirms Salah has signed a contract extension keeping him at the club until 2028.", "tag": "Transfer News", "date": "2026-07-20" },
    { "id": 2, "title": "Pep Guardiola talks tactical overhaul after match", "desc": "City boss says structural updates were necessary to overcome Arsenal's low defensive block.", "tag": "Match Analysis", "date": "2026-07-20" },
    { "id": 3, "title": "Real Madrid signs elite prospects for new campaign", "desc": "Florentino Perez outlines the long term vision of the club during the official presentation ceremony.", "tag": "La Liga", "date": "2026-07-19" }
  ]
};

// ==========================================
// CORE STATE MANAGER
// ==========================================
const state = {
  theme: localStorage.getItem("theme") || "dark",
  lang: localStorage.getItem("lang") || "en",
  user: JSON.parse(localStorage.getItem("user")) || null,
  favorites: JSON.parse(localStorage.getItem("favorites")) || { teams: [], players: [], leagues: [] },
  apiToken: localStorage.getItem("apiToken") || "",
  activePage: "home",
  pageParams: {}
};

// ==========================================
// API CLIENT WRAPPER
// ==========================================
const api = {
  async init() {
    try {
      const leaguesRes = await fetch("data/leagues.json");
      fallbackDB.leagues = await leaguesRes.json();
      const clubsRes = await fetch("data/clubs.json");
      fallbackDB.clubs = await clubsRes.json();
      const rulesRes = await fetch("data/rules.json");
      fallbackDB.rules = await rulesRes.json();
    } catch (e) {
      console.warn("Failed to load metadata json files, using internal objects", e);
    }
  },

  async fetchAPI(endpoint) {
    if (!state.apiToken) {
      return this.fallbackRequest(endpoint);
    }
    const proxy = "https://corsproxy.io/?";
    const target = `https://api.football-data.org/v4/${endpoint}`;
    try {
      const res = await fetch(proxy + encodeURIComponent(target), {
        headers: { "X-Auth-Token": state.apiToken }
      });
      if (res.status === 429) {
        toast.show("API rate limits exceeded! Showing fallback database.", "error");
        return this.fallbackRequest(endpoint);
      }
      if (!res.ok) throw new Error("API request failed");
      return await res.json();
    } catch (err) {
      console.error("API error, falling back", err);
      return this.fallbackRequest(endpoint);
    }
  },

  fallbackRequest(endpoint) {
    if (endpoint.startsWith("competitions/PL/standings")) {
      return { standings: [{ table: this.calculateStandings("PL") }] };
    }
    if (endpoint.startsWith("competitions/PD/standings")) {
      return { standings: [{ table: this.calculateStandings("PD") }] };
    }
    if (endpoint.startsWith("competitions/SA/standings")) {
      return { standings: [{ table: this.calculateStandings("SA") }] };
    }
    if (endpoint.startsWith("competitions/BL1/standings")) {
      return { standings: [{ table: this.calculateStandings("BL1") }] };
    }
    if (endpoint.startsWith("competitions/FL1/standings")) {
      return { standings: [{ table: this.calculateStandings("FL1") }] };
    }
    return null;
  },

  calculateStandings(leagueId) {
    const clubs = fallbackDB.clubs.filter(c => c.leagueId === leagueId);
    const matches = fallbackDB.matches.filter(m => m.competitionId === leagueId && m.status === "FINISHED");
    
    const table = clubs.map((club, idx) => ({
      position: idx + 1,
      team: { id: club.id, name: club.name, crest: club.crest },
      playedGames: 0,
      won: 0,
      draw: 0,
      lost: 0,
      points: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalDifference: 0
    }));

    matches.forEach(m => {
      const home = table.find(t => t.team.id === m.homeTeamId);
      const away = table.find(t => t.team.id === m.awayTeamId);
      if (home && away) {
        home.playedGames++;
        away.playedGames++;
        home.goalsFor += m.homeScore;
        home.goalsAgainst += m.awayScore;
        away.goalsFor += m.awayScore;
        away.goalsAgainst += m.homeScore;

        if (m.homeScore > m.awayScore) {
          home.won++; home.points += 3;
          away.lost++;
        } else if (m.homeScore < m.awayScore) {
          away.won++; away.points += 3;
          home.lost++;
        } else {
          home.draw++; home.points += 1;
          away.draw++; away.points += 1;
        }
      }
    });

    table.forEach(t => {
      t.goalDifference = t.goalsFor - t.goalsAgainst;
    });

    table.sort((a, b) => b.points - a.points || b.goalDifference - a.goalDifference || b.goalsFor - a.goalsFor);
    table.forEach((t, idx) => t.position = idx + 1);
    return table;
  }
};

// ==========================================
// TOAST NOTIFICATIONS
// ==========================================
const toast = {
  show(message, type = "info") {
    const container = document.getElementById("toast-container");
    if (!container) return;
    const item = document.createElement("div");
    item.className = `toast ${type}`;
    
    let iconClass = "fa-info-circle";
    if (type === "success") iconClass = "fa-check-circle";
    if (type === "error") iconClass = "fa-exclamation-circle";

    item.innerHTML = `
      <i class="fas ${iconClass} toast-icon"></i>
      <span>${message}</span>
    `;
    container.appendChild(item);
    setTimeout(() => {
      item.style.animation = "slideInRight 0.3s ease reverse forwards";
      setTimeout(() => item.remove(), 300);
    }, 4000);
  }
};

// ==========================================
// MAIN SIMULATION CLOCK (Match Duration)
// ==========================================
let matchInterval = null;
function startSimulationClock() {
  if (matchInterval) clearInterval(matchInterval);
  matchInterval = setInterval(() => {
    fallbackDB.matches.forEach(match => {
      if (match.status !== "LIVE") return;

      const isKnockout = fallbackDB.rules.knockouts && fallbackDB.rules.knockouts.includes(match.competitionId);

      // Half-time check & progression
      if (match.minute === 45) {
        if (Math.random() > 0.8) match.minute++; // Half-time ends
      } else if (match.minute === 90) {
        if (isKnockout && match.homeScore === match.awayScore) {
          match.extraTime = true;
          match.minute = 91;
          match.extraTimeScore = { home: match.homeScore, away: match.awayScore };
          toast.show(`${getTeamName(match.homeTeamId)} vs ${getTeamName(match.awayTeamId)} matches into Extra Time!`, "info");
        } else {
          match.status = "FINISHED";
          toast.show(`${getTeamName(match.homeTeamId)} vs ${getTeamName(match.awayTeamId)} match finished! Final score: ${match.homeScore}-${match.awayScore}`, "success");
        }
      } else if (match.minute === 120 && match.extraTime) {
        if (match.extraTimeScore.home === match.extraTimeScore.away) {
          match.penalties = true;
          match.penaltyScore = { home: 0, away: 0 };
          simulatePenaltyShootout(match);
        } else {
          match.status = "FINISHED";
          match.homeScore = match.extraTimeScore.home;
          match.awayScore = match.extraTimeScore.away;
          toast.show(`${getTeamName(match.homeTeamId)} vs ${getTeamName(match.awayTeamId)} match finished! Final score after ET: ${match.homeScore}-${match.awayScore}`, "success");
        }
      } else {
        match.minute++;
        // Random goals
        if (Math.random() > 0.96) {
          const scoringHome = Math.random() > 0.5;
          if (match.extraTime) {
            if (scoringHome) match.extraTimeScore.home++; else match.extraTimeScore.away++;
          } else {
            if (scoringHome) match.homeScore++; else match.awayScore++;
          }
          toast.show(`GOAL! ${getTeamName(match.homeTeamId)} ${match.extraTime ? match.extraTimeScore.home : match.homeScore} - ${match.extraTime ? match.extraTimeScore.away : match.awayScore} ${getTeamName(match.awayTeamId)}`, "success");
        }
      }
    });
    // Trigger dynamic render updates if looking at Live/Home
    if (state.activePage === "home" || state.activePage === "live") {
      router.resolvePage();
    }
  }, 12000); // 12 seconds = 1 minute simulation time
}

function getTeamName(teamId) {
  const club = fallbackDB.clubs.find(c => c.id === teamId);
  return club ? club.name : teamId;
}

function simulatePenaltyShootout(match) {
  let homePen = 0;
  let awayPen = 0;
  for (let i = 0; i < 5; i++) {
    if (Math.random() > 0.3) homePen++;
    if (Math.random() > 0.3) awayPen++;
  }
  while (homePen === awayPen) {
    if (Math.random() > 0.3) homePen++;
    if (Math.random() > 0.3) awayPen++;
  }
  match.penaltyScore.home = homePen;
  match.penaltyScore.away = awayPen;
  match.status = "FINISHED";
  match.homeScore = match.extraTimeScore.home;
  match.awayScore = match.extraTimeScore.away;
  toast.show(`MATCH ENDED ON PENALTIES! ${getTeamName(match.homeTeamId)} ${homePen} - ${awayPen} ${getTeamName(match.awayTeamId)}`, "success");
}

// ==========================================
// SEARCH ENGINE
// ==========================================
function setupSearch() {
  const toggleBtn = document.getElementById("search-toggle");
  const dropdown = document.getElementById("search-dropdown");
  const input = document.getElementById("search-input");
  const resultsDiv = document.getElementById("search-results");

  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("open");
    if (dropdown.classList.contains("open")) input.focus();
  });

  document.addEventListener("click", () => {
    dropdown.classList.remove("open");
  });

  dropdown.addEventListener("click", (e) => e.stopPropagation());

  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    if (!q) {
      resultsDiv.innerHTML = "";
      return;
    }
    const matchedClubs = fallbackDB.clubs.filter(c => c.name.toLowerCase().includes(q));
    const matchedPlayers = fallbackDB.players.filter(p => p.name.toLowerCase().includes(q));
    
    let html = "";
    matchedClubs.forEach(c => {
      html += `
        <div class="search-item" onclick="location.hash='#/team/${c.id}'">
          <img src="${c.crest}" alt="${c.name}">
          <div><strong>${c.name}</strong> <span class="text-muted">Club</span></div>
        </div>
      `;
    });
    matchedPlayers.forEach(p => {
      html += `
        <div class="search-item" onclick="location.hash='#/player/${p.id}'">
          <div class="player-avatar-placeholder" style="width:28px;height:28px;font-size:10px;">${p.name[0]}</div>
          <div><strong>${p.name}</strong> <span class="text-muted">${p.pos} - ${getTeamName(p.teamId)}</span></div>
        </div>
      `;
    });
    resultsDiv.innerHTML = html || `<div style="padding:16px;text-align:center;font-size:13px;" class="text-muted">No matches found</div>`;
  });
}

// ==========================================
// AUTHENTICATION SYSTEM (LOCAL STORAGE)
// ==========================================
const auth = {
  checkGuard(page) {
    const protectedPages = ["favorites", "profile"];
    if (protectedPages.includes(page) && !state.user) {
      toast.show("Please login to access this page.", "error");
      location.hash = "#/login";
      return false;
    }
    return true;
  },

  register(username, email, password) {
    let users = JSON.parse(localStorage.getItem("users_db")) || [];
    if (users.find(u => u.email === email || u.username === username)) {
      return { success: false, msg: "Username or Email already registered" };
    }
    const newUser = { username, email, password };
    users.push(newUser);
    localStorage.setItem("users_db", JSON.stringify(users));
    this.loginSession(newUser);
    return { success: true };
  },

  login(identifier, password) {
    let users = JSON.parse(localStorage.getItem("users_db")) || [];
    const foundUser = users.find(u => (u.email === identifier || u.username === identifier) && u.password === password);
    if (!foundUser) {
      return { success: false, msg: "Invalid identifier or password" };
    }
    this.loginSession(foundUser);
    return { success: true };
  },

  loginSession(user) {
    state.user = user;
    localStorage.setItem("user", JSON.stringify(user));
    document.getElementById("nav-user").innerHTML = `
      <button class="user-avatar-btn" onclick="location.hash='#/profile'">${user.username[0].toUpperCase()}</button>
    `;
    toast.show(`Welcome back, ${user.username}!`, "success");
    location.hash = "#/";
  },

  logout() {
    state.user = null;
    localStorage.removeItem("user");
    document.getElementById("nav-user").innerHTML = `
      <button class="btn-primary" id="login-btn" onclick="location.hash='#/login'">Login</button>
    `;
    toast.show("Successfully logged out.", "info");
    location.hash = "#/";
  }
};

// ==========================================
// MULTI-THEME & MULTI-LANGUAGE
// ==========================================
function setupTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  const mobileThemeToggle = document.getElementById("mobile-theme-toggle");
  
  const updateUI = () => {
    document.documentElement.setAttribute("data-theme", state.theme);
    const icon = state.theme === "dark" ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    if (themeToggle) themeToggle.innerHTML = icon;
    if (mobileThemeToggle) {
      mobileThemeToggle.innerHTML = `${icon} <span data-i18n="toggle_theme">${state.lang === "ar" ? "تغيير المظهر" : "Toggle Theme"}</span>`;
    }
  };

  const toggle = () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", state.theme);
    updateUI();
  };

  themeToggle?.addEventListener("click", toggle);
  mobileThemeToggle?.addEventListener("click", toggle);
  updateUI();
}

function setupLang() {
  const langToggle = document.getElementById("lang-toggle");
  const mobileLangToggle = document.getElementById("mobile-lang-toggle");

  const updateUI = () => {
    document.documentElement.setAttribute("data-lang", state.lang);
    document.documentElement.setAttribute("lang", state.lang);
    if (langToggle) langToggle.innerHTML = `<span id="lang-label">${state.lang === "en" ? "AR" : "EN"}</span>`;
    if (mobileLangToggle) {
      mobileLangToggle.innerHTML = `<i class="fas fa-globe"></i> <span>${state.lang === "en" ? "العربية" : "English"}</span>`;
    }
    translateDOM();
  };

  const toggle = () => {
    state.lang = state.lang === "en" ? "ar" : "en";
    localStorage.setItem("lang", state.lang);
    updateUI();
    router.resolvePage();
  };

  langToggle?.addEventListener("click", toggle);
  mobileLangToggle?.addEventListener("click", toggle);
  updateUI();
}

function translateDOM() {
  const dict = i18n[state.lang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      const span = el.querySelector("span");
      if (span) {
        span.textContent = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });
}

// ==========================================
// ROUTER ENGINE
// ==========================================
const router = {
  routes: {},
  
  register(path, renderFn) {
    this.routes[path] = renderFn;
  },

  init() {
    window.addEventListener("hashchange", () => this.resolvePage());
    this.resolvePage();
  },

  resolvePage() {
    const hash = location.hash || "#/";
    let match = null;
    let activeRoute = null;

    // Check matches
    for (const route in this.routes) {
      const routeRegex = new RegExp("^" + route.replace(/:[^\s/]+/g, "([^/]+)") + "$");
      const urlMatch = hash.match(routeRegex);
      if (urlMatch) {
        activeRoute = route;
        match = urlMatch;
        break;
      }
    }

    if (activeRoute) {
      const params = {};
      const paramNames = activeRoute.match(/:[^\s/]+/g) || [];
      paramNames.forEach((name, idx) => {
        params[name.substring(1)] = match[idx + 1];
      });
      
      const cleanRouteName = activeRoute.replace("#/", "").split("/")[0] || "home";
      if (!auth.checkGuard(cleanRouteName)) return;

      state.activePage = cleanRouteName;
      state.pageParams = params;
      
      document.querySelectorAll(".nav-link, .mobile-link").forEach(l => l.classList.remove("active"));
      const navL = document.querySelector(`.nav-link[href='${hash}']`) || document.querySelector(`.nav-link[href='${hash.split("/")[0] + "/" + hash.split("/")[1]}']`);
      if (navL) navL.classList.add("active");

      document.getElementById("page-loader").classList.add("show");
      
      // Execute page builder
      setTimeout(async () => {
        const root = document.getElementById("app-root");
        try {
          root.innerHTML = await this.routes[activeRoute](params);
          translateDOM();
        } catch (err) {
          root.innerHTML = `<div class="error-state"><i class="fas fa-exclamation-circle error-icon"></i><div class="error-title">Error loading content</div><div class="error-text">${err.message}</div></div>`;
        } finally {
          document.getElementById("page-loader").classList.remove("show");
          window.scrollTo(0,0);
        }
      }, 200);
    } else {
      location.hash = "#/";
    }
  }
};

// ==========================================
// PAGE TEMPLATE BUILDERS
// ==========================================

// 1. HOME PAGE
router.register("#/", async () => {
  const liveMatches = fallbackDB.matches.filter(m => m.status === "LIVE");
  const upcomingMatches = fallbackDB.matches.filter(m => m.status === "SCHEDULED");
  
  let liveHTML = "";
  if (liveMatches.length === 0) {
    liveHTML = `<div class="text-muted text-small" style="padding:12px;">No matches live currently.</div>`;
  } else {
    liveMatches.forEach(m => {
      liveHTML += renderMatchCard(m);
    });
  }

  let upcomingHTML = "";
  upcomingMatches.forEach(m => {
    upcomingHTML += renderMatchCard(m);
  });

  let featuredLeaguesHTML = "";
  fallbackDB.leagues.forEach(l => {
    featuredLeaguesHTML += `
      <div class="league-card" onclick="location.hash='#/league/${l.id}'">
        <img src="${l.emblem}" alt="${l.name}">
        <div class="league-card-name">${state.lang === "ar" && i18n.ar[l.id] ? i18n.ar[l.id] : l.name}</div>
        <div class="league-card-country">${l.country}</div>
      </div>
    `;
  });

  let newsHTML = "";
  fallbackDB.news.forEach(n => {
    newsHTML += `
      <div class="news-card" onclick="location.hash='#/news'">
        <div class="news-card-img-placeholder"><i class="fas fa-newspaper"></i></div>
        <div class="news-card-body">
          <span class="news-card-tag">${n.tag}</span>
          <h3 class="news-card-title">${n.title}</h3>
          <span class="news-card-meta">${n.date}</span>
        </div>
      </div>
    `;
  });

  return `
    <div class="page">
      <div class="hero">
        <div class="hero-glow"></div>
        <div class="hero-content">
          <div class="hero-badge"><i class="fas fa-bolt"></i> Real Football Logic Engines Enabled</div>
          <h1 data-i18n="home_title">Explore the Football World</h1>
          <p>SofaScore style glassmorphism UI built on top of accurate FIFA match models & live statistics wrappers.</p>
          <div class="hero-actions">
            <button class="btn-primary" onclick="location.hash='#/live'">View Live Scores</button>
            <button class="btn-secondary" onclick="location.hash='#/ucl'">Champions League</button>
          </div>
        </div>
      </div>

      <div class="sidebar-layout">
        <div class="main-column">
          <div class="section">
            <div class="section-header">
              <h2 class="section-title"><i class="fas fa-circle live-dot"></i> <span data-i18n="live_scores">Live Matches</span></h2>
              <a href="#/live" class="section-link">View All <i class="fas fa-chevron-right"></i></a>
            </div>
            <div class="matches-grid">
              ${liveHTML}
            </div>
          </div>

          <div class="section">
            <div class="section-header">
              <h2 class="section-title"><i class="fas fa-calendar"></i> <span data-i18n="upcoming_matches">Upcoming Fixtures</span></h2>
              <a href="#/schedule" class="section-link">View All <i class="fas fa-chevron-right"></i></a>
            </div>
            <div class="matches-grid">
              ${upcomingHTML}
            </div>
          </div>

          <div class="section">
            <div class="section-header">
              <h2 class="section-title"><i class="fas fa-newspaper"></i> <span data-i18n="news_title">Latest Football News</span></h2>
            </div>
            <div class="news-grid">
              ${newsHTML}
            </div>
          </div>
        </div>

        <div class="sidebar">
          <div class="sidebar-card">
            <div class="sidebar-card-header"><i class="fas fa-trophy"></i> Featured Competitions</div>
            <div class="sidebar-card-body">
              <div style="display:flex;flex-direction:column;gap:10px;">
                ${fallbackDB.leagues.slice(0, 4).map(l => `
                  <div style="display:flex;align-items:center;gap:12px;padding:8px;cursor:pointer;" onclick="location.hash='#/league/${l.id}'">
                    <img src="${l.emblem}" style="width:24px;height:24px;object-fit:contain;">
                    <div style="font-size:13px;font-weight:600;">${l.name}</div>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
});

// 2. LIVE scores page
router.register("#/live", async () => {
  const liveMatches = fallbackDB.matches.filter(m => m.status === "LIVE");
  let liveHTML = "";
  if (liveMatches.length === 0) {
    liveHTML = `<div style="text-align:center;padding:48px;" class="text-muted">No live matches being played currently.</div>`;
  } else {
    liveMatches.forEach(m => {
      liveHTML += renderMatchCard(m);
    });
  }

  return `
    <div class="page">
      <div class="section">
        <h2 class="section-title" style="margin-bottom:20px;"><i class="fas fa-circle live-dot"></i> Live Matches</h2>
        <div class="matches-grid">
          ${liveHTML}
        </div>
      </div>
    </div>
  `;
});

// 3. SCHEDULE calendar page
router.register("#/schedule", async () => {
  const scheduled = fallbackDB.matches.filter(m => m.status === "SCHEDULED");
  const finished = fallbackDB.matches.filter(m => m.status === "FINISHED");

  return `
    <div class="page">
      <div class="tabs">
        <button class="tab active" id="tab-upcoming">Upcoming Fixtures</button>
        <button class="tab" id="tab-results">Results</button>
      </div>

      <div class="matches-grid" id="schedule-container">
        ${scheduled.map(renderMatchCard).join("")}
      </div>
    </div>
  `;
});

// 4. LEAGUE table and details
router.register("#/league/:id", async (params) => {
  const league = fallbackDB.leagues.find(l => l.id === params.id);
  if (!league) return `<div class="page">League not found.</div>`;

  const standings = await api.fetchAPI(`competitions/${params.id}/standings`);
  const table = standings?.standings[0]?.table || [];
  
  let standingsHTML = "";
  table.forEach(row => {
    standingsHTML += `
      <tr>
        <td class="pos">${row.position}</td>
        <td class="team-col" onclick="location.hash='#/team/${row.team.id}'" style="cursor:pointer;">
          <img src="${row.team.crest}" alt="${row.team.name}">
          <span>${row.team.name}</span>
        </td>
        <td>${row.playedGames}</td>
        <td>${row.won}</td>
        <td>${row.draw}</td>
        <td>${row.lost}</td>
        <td>${row.goalsFor}</td>
        <td>${row.goalsAgainst}</td>
        <td>${row.goalDifference}</td>
        <td class="pts">${row.points}</td>
      </tr>
    `;
  });

  return `
    <div class="page">
      <div class="team-hero">
        <img src="${league.emblem}" alt="${league.name}" class="team-badge">
        <div class="team-hero-info">
          <h1 class="team-hero-name">${league.name}</h1>
          <div class="team-hero-meta">
            <span class="team-meta-item"><i class="fas fa-globe"></i> ${league.country}</span>
          </div>
        </div>
      </div>

      <div class="section">
        <h2 class="section-title mb-16"><i class="fas fa-list-ol"></i> Standings</h2>
        <div class="standings-wrap card">
          <table class="standings-table">
            <thead>
              <tr>
                <th class="pos">Pos</th>
                <th class="team-col">Team</th>
                <th>MP</th>
                <th>W</th>
                <th>D</th>
                <th>L</th>
                <th>GF</th>
                <th>GA</th>
                <th>GD</th>
                <th class="pts">PTS</th>
              </tr>
            </thead>
            <tbody>
              ${standingsHTML}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
});

// 5. TEAM PAGE
router.register("#/team/:id", async (params) => {
  const club = fallbackDB.clubs.find(c => c.id === params.id);
  if (!club) return `<div class="page">Club not found.</div>`;

  const squad = fallbackDB.players.filter(p => p.teamId === params.id);

  let squadHTML = "";
  squad.forEach(p => {
    squadHTML += `
      <div class="squad-card" onclick="location.hash='#/player/${p.id}'">
        <span class="squad-num">${p.num}</span>
        <div class="squad-info">
          <div class="squad-name">${p.name}</div>
          <div class="squad-pos">${p.pos}</div>
        </div>
        <span class="squad-flag">👤</span>
      </div>
    `;
  });

  return `
    <div class="page">
      <div class="team-hero">
        <img src="${club.crest}" alt="${club.name}" class="team-badge">
        <div class="team-hero-info">
          <h1 class="team-hero-name">${club.name}</h1>
          <div class="team-hero-meta">
            <span class="team-meta-item"><i class="fas fa-map-marker-alt"></i> ${club.stadium}</span>
            <span class="team-meta-item"><i class="fas fa-calendar-alt"></i> Founded ${club.founded}</span>
            <span class="team-meta-item"><i class="fas fa-user-tie"></i> Coach: ${club.coach}</span>
          </div>
        </div>
      </div>

      <div class="section">
        <h2 class="section-title mb-16"><i class="fas fa-users"></i> Current Squad</h2>
        <div class="squad-grid">
          ${squadHTML || `<div class="text-muted">No squad details compiled currently.</div>`}
        </div>
      </div>
    </div>
  `;
});

// 6. PLAYER PAGE
router.register("#/player/:id", async (params) => {
  const player = fallbackDB.players.find(p => p.id === params.id);
  if (!player) return `<div class="page">Player not found.</div>`;

  return `
    <div class="page">
      <div class="player-hero">
        <div class="player-avatar-placeholder" style="width:120px;height:120px;font-size:42px;margin-bottom:0;">${player.name[0]}</div>
        <div class="player-hero-info">
          <h1 class="player-hero-name">${player.name}</h1>
          <div class="player-hero-pos">${player.pos} | Number ${player.num}</div>
          <div class="player-hero-meta">
            <span class="player-meta-item"><i class="fas fa-shield-alt"></i> ${getTeamName(player.teamId)}</span>
            <span class="player-meta-item"><i class="fas fa-flag"></i> ${player.nationality}</span>
            <span class="player-meta-item"><i class="fas fa-birthday-cake"></i> ${player.age} Years Old</span>
            <span class="player-meta-item"><i class="fas fa-arrows-alt-v"></i> ${player.height}</span>
          </div>
        </div>
      </div>

      <div class="section">
        <h2 class="section-title mb-16"><i class="fas fa-chart-bar"></i> Career Performance Stats</h2>
        <div class="stats-grid-3">
          <div class="stat-card">
            <div class="stat-card-num">${player.stats.goals}</div>
            <div class="stat-card-lbl">Goals</div>
          </div>
          <div class="stat-card">
            <div class="stat-card-num">${player.stats.assists}</div>
            <div class="stat-card-lbl">Assists</div>
          </div>
          <div class="stat-card">
            <div class="stat-card-num">${player.stats.minutes}</div>
            <div class="stat-card-lbl">Minutes Played</div>
          </div>
        </div>
      </div>
    </div>
  `;
});

// 7. UCL Champions League page
router.register("#/ucl", async () => {
  return `
    <div class="page">
      <div class="ucl-hero">
        <div class="ucl-title">UEFA Champions League</div>
        <div class="ucl-subtitle">Group Stage & Knockout Simulation</div>
      </div>

      <div class="section">
        <h2 class="section-title mb-16"><i class="fas fa-sitemap"></i> Tournament Bracket</h2>
        <div class="bracket">
          <div class="bracket-round">
            <div class="bracket-round-title">Semi Finals</div>
            <div class="bracket-match">
              <div class="bracket-team winner"><img src="https://crests.thefifadb.com/crests/bay.png"> Bayern Munich <span class="bracket-team-score">3</span></div>
              <div class="bracket-team"><img src="https://crests.thefifadb.com/crests/rma.png"> Real Madrid <span class="bracket-team-score">2</span></div>
            </div>
            <div class="bracket-match">
              <div class="bracket-team"><img src="https://crests.thefifadb.com/crests/int.png"> Inter Milan <span class="bracket-team-score">1</span></div>
              <div class="bracket-team winner"><img src="https://crests.thefifadb.com/crests/mil.png"> AC Milan <span class="bracket-team-score">2</span></div>
            </div>
          </div>

          <div class="bracket-round">
            <div class="bracket-round-title">Final</div>
            <div class="bracket-match" style="margin-top:40px;">
              <div class="bracket-team"><img src="https://crests.thefifadb.com/crests/bay.png"> Bayern Munich <span class="bracket-team-score">0 (4)</span></div>
              <div class="bracket-team winner"><img src="https://crests.thefifadb.com/crests/mil.png"> AC Milan <span class="bracket-team-score">0 (5)</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
});

// 8. NEWS PAGE
router.register("#/news", async () => {
  let newsHTML = "";
  fallbackDB.news.forEach(n => {
    newsHTML += `
      <div class="news-card" style="cursor:default;">
        <div class="news-card-img-placeholder"><i class="fas fa-newspaper"></i></div>
        <div class="news-card-body">
          <span class="news-card-tag">${n.tag}</span>
          <h3 class="news-card-title" style="-webkit-line-clamp:none;">${n.title}</h3>
          <p class="text-muted text-small mb-16">${n.desc}</p>
          <span class="news-card-meta">${n.date}</span>
        </div>
      </div>
    `;
  });

  return `
    <div class="page">
      <h2 class="section-title mb-24"><i class="fas fa-newspaper"></i> Football News Center</h2>
      <div class="news-grid">
        ${newsHTML}
      </div>
    </div>
  `;
});

// 9. PROFILE & SETTINGS
router.register("#/profile", async () => {
  return `
    <div class="page">
      <div class="profile-header">
        <div class="profile-avatar">${state.user ? state.user.username[0].toUpperCase() : "U"}</div>
        <div>
          <h1 class="profile-name">${state.user ? state.user.username : "User Profile"}</h1>
          <p class="profile-email">${state.user ? state.user.email : ""}</p>
          <button class="btn-secondary mt-16" id="logout-btn" onclick="auth.logout()">Sign Out</button>
        </div>
      </div>

      <div class="settings-section">
        <div class="settings-title"><i class="fas fa-cogs"></i> Configuration Settings</div>
        <div class="form-group">
          <label class="form-label">Football-Data.org API Token (Classic v4)</label>
          <input type="text" class="form-input" id="token-input" value="${state.apiToken}" placeholder="Paste your X-Auth-Token">
          <button class="btn-primary mt-16" id="save-token-btn">Save Token</button>
        </div>
      </div>
    </div>
  `;
});

// 10. AUTHENTICATION PAGES
router.register("#/login", async () => {
  return `
    <div class="page flex-center" style="min-height:70vh;">
      <div class="auth-modal-box card">
        <div class="auth-header">
          <div class="logo-icon"><i class="fas fa-futbol"></i></div>
          <h2 class="auth-title">Sign In</h2>
          <p class="auth-subtitle">Access your favorites and settings</p>
        </div>
        <form id="login-form">
          <div class="form-group">
            <label class="form-label">Username or Email</label>
            <input type="text" class="form-input" id="login-id" required>
          </div>
          <div class="form-group">
            <label class="form-label">Password</label>
            <input type="password" class="form-input" id="login-pass" required>
          </div>
          <button class="btn-full" type="submit">Sign In</button>
          <div class="auth-switch">Don't have an account? <a href="#/register" class="form-link">Sign Up</a></div>
        </form>
      </div>
    </div>
  `;
});

router.register("#/register", async () => {
  return `
    <div class="page flex-center" style="min-height:70vh;">
      <div class="auth-modal-box card">
        <div class="auth-header">
          <div class="logo-icon"><i class="fas fa-futbol"></i></div>
          <h2 class="auth-title">Create Account</h2>
          <p class="auth-subtitle">Register to unlock premium features</p>
        </div>
        <form id="register-form">
          <div class="form-group">
            <label class="form-label">Username</label>
            <input type="text" class="form-input" id="reg-name" required>
          </div>
          <div class="form-group">
            <label class="form-label">Email Address</label>
            <input type="email" class="form-input" id="reg-email" required>
          </div>
          <div class="form-group">
            <label class="form-label">Password</label>
            <input type="password" class="form-input" id="reg-pass" required>
          </div>
          <button class="btn-full" type="submit">Register</button>
          <div class="auth-switch">Already have an account? <a href="#/login" class="form-link">Sign In</a></div>
        </form>
      </div>
    </div>
  `;
});

// Helper rendering match card
function renderMatchCard(m) {
  const home = fallbackDB.clubs.find(c => c.id === m.homeTeamId) || { name: m.homeTeamId, crest: "" };
  const away = fallbackDB.clubs.find(c => c.id === m.awayTeamId) || { name: m.awayTeamId, crest: "" };
  
  let scoreHTML = "-";
  let statusHTML = `<span class="match-status status-scheduled">Scheduled</span>`;

  if (m.status === "LIVE") {
    let scoreText = `${m.homeScore} - ${m.awayScore}`;
    if (m.extraTime) {
      scoreText = `${m.extraTimeScore.home} - ${m.extraTimeScore.away}`;
    }
    scoreHTML = `<div class="match-score">${scoreText}</div>`;
    
    let minuteLabel = `${m.minute}'`;
    let timeClass = "";
    if (m.extraTime) {
      minuteLabel = `ET ${m.minute}'`;
      timeClass = "et";
    }
    if (m.penalties) {
      minuteLabel = `PK (${m.penaltyScore.home}-${m.penaltyScore.away})`;
      timeClass = "pk";
    }
    statusHTML = `<span class="match-minute ${timeClass}">${minuteLabel}</span>`;
  } else if (m.status === "FINISHED") {
    scoreHTML = `<div class="match-score">${m.homeScore} - ${m.awayScore}</div>`;
    statusHTML = `<span class="match-status status-finished">FT</span>`;
  }

  return `
    <div class="match-card ${m.status === 'LIVE' ? 'live-card' : ''}" onclick="openMatchDetails(${m.id})">
      <div class="team-side">
        <img src="${home.crest}" class="team-logo">
        <span class="team-name">${home.name}</span>
      </div>
      <div class="match-center">
        ${scoreHTML}
        ${statusHTML}
      </div>
      <div class="team-side away">
        <img src="${away.crest}" class="team-logo">
        <span class="team-name">${away.name}</span>
      </div>
    </div>
  `;
}

// Open detail modal helper
window.openMatchDetails = function(matchId) {
  const m = fallbackDB.matches.find(match => match.id === matchId);
  if (!m) return;
  const home = fallbackDB.clubs.find(c => c.id === m.homeTeamId) || { name: m.homeTeamId, crest: "" };
  const away = fallbackDB.clubs.find(c => c.id === m.awayTeamId) || { name: m.awayTeamId, crest: "" };
  
  let content = `
    <div style="text-align:center;">
      <div style="font-size:18px;font-weight:700;margin-bottom:12px;">Match Details</div>
      <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:16px;">
        <div>
          <img src="${home.crest}" style="width:64px;height:64px;margin:0 auto 10px;">
          <div style="font-weight:600;">${home.name}</div>
        </div>
        <div style="font-size:32px;font-weight:800;">
          ${m.status !== 'SCHEDULED' ? (m.extraTime ? m.extraTimeScore.home : m.homeScore) : '-'} : ${m.status !== 'SCHEDULED' ? (m.extraTime ? m.extraTimeScore.away : m.awayScore) : '-'}
        </div>
        <div>
          <img src="${away.crest}" style="width:64px;height:64px;margin:0 auto 10px;">
          <div style="font-weight:600;">${away.name}</div>
        </div>
      </div>
      <div class="mt-24" style="font-size:13px;color:var(--text-2);">
        <p>Competition: ${m.competitionId}</p>
        <p>Status: ${m.status}</p>
        ${m.extraTime ? `<p style="color:var(--accent-draw);">Extra Time Played (30 Minutes)</p>` : ''}
        ${m.penalties ? `<p style="color:var(--accent-2);font-weight:700;">Penalties Shootout Score: ${m.penaltyScore.home} - ${m.penaltyScore.away}</p>` : ''}
      </div>
    </div>
  `;
  document.getElementById("match-modal-content").innerHTML = content;
  document.getElementById("match-modal").classList.add("open");
};

// ==========================================
// APPLICATION INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", async () => {
  await api.init();
  setupTheme();
  setupLang();
  setupSearch();
  router.init();
  startSimulationClock();

  // Handle forms submits
  document.addEventListener("submit", (e) => {
    if (e.target.id === "login-form") {
      e.preventDefault();
      const id = document.getElementById("login-id").value;
      const pass = document.getElementById("login-pass").value;
      const res = auth.login(id, pass);
      if (!res.success) toast.show(res.msg, "error");
    }
    if (e.target.id === "register-form") {
      e.preventDefault();
      const name = document.getElementById("reg-name").value;
      const email = document.getElementById("reg-email").value;
      const pass = document.getElementById("reg-pass").value;
      const res = auth.register(name, email, pass);
      if (!res.success) toast.show(res.msg, "error");
    }
  });

  // Handle settings token click
  document.addEventListener("click", (e) => {
    if (e.target.id === "save-token-btn") {
      const val = document.getElementById("token-input").value.trim();
      state.apiToken = val;
      localStorage.setItem("apiToken", val);
      toast.show("API Token saved successfully!", "success");
      router.resolvePage();
    }
    if (e.target.id === "auth-modal-close") {
      document.getElementById("auth-modal").classList.remove("open");
    }
    if (e.target.id === "match-modal-close" || e.target.id === "match-modal") {
      document.getElementById("match-modal").classList.remove("open");
    }
  });

  // Render initial user avatar if logged in
  if (state.user) {
    document.getElementById("nav-user").innerHTML = `
      <button class="user-avatar-btn" onclick="location.hash='#/profile'">${state.user.username[0].toUpperCase()}</button>
    `;
  }
});
