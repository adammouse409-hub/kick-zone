// ==========================================
// KICKZONE REAL FOOTBALL DATABASE FALLBACK
// ==========================================
const fallbackDB = {
    players: [
        { id: "salah", name: "Mohamed Salah", teamId: "liv", num: 11, pos: "FWD", rating: 89, value: "€55M", status: "Fit", age: 34, height: "175 cm", foot: "Left", nationality: "Egyptian", stats: { pace: 89, shot: 87, pass: 82, dribble: 88, def: 45, phys: 75 }, appearances: 32, goals: 25, assists: 14, yellow: 2, red: 0, minutes: 2680, history: [{ year: "2017-Present", club: "Liverpool", apps: 250, goals: 156 }, { year: "2015-2017", club: "AS Roma", apps: 65, goals: 29 }], awards: ["PFA Player of the Year", "CAF African Footballer of the Year"] },
        { id: "bellingham", name: "Jude Bellingham", teamId: "rm", num: 5, pos: "MID", rating: 90, value: "€180M", status: "Fit", age: 23, height: "186 cm", foot: "Right", nationality: "English", stats: { pace: 79, shot: 84, pass: 86, dribble: 87, def: 78, phys: 82 }, appearances: 30, goals: 19, assists: 11, yellow: 4, red: 0, minutes: 2520, history: [{ year: "2023-Present", club: "Real Madrid", apps: 42, goals: 23 }, { year: "2020-2023", club: "Borussia Dortmund", apps: 92, goals: 12 }], awards: ["La Liga Player of the Season 23/24", "Golden Boy 2023"] },
        { id: "mbappe", name: "Kylian Mbappé", teamId: "rm", num: 9, pos: "FWD", rating: 91, value: "€180M", status: "Fit", age: 27, height: "178 cm", foot: "Right", nationality: "French", stats: { pace: 97, shot: 90, pass: 80, dribble: 90, def: 36, phys: 78 }, appearances: 31, goals: 28, assists: 9, yellow: 1, red: 0, minutes: 2490, history: [{ year: "2024-Present", club: "Real Madrid", apps: 0, goals: 0 }, { year: "2017-2024", club: "PSG", apps: 205, goals: 175 }], awards: ["FIFA World Cup Golden Boot 2022", "Ligue 1 Player of the Year (5x)"] },
        { id: "haaland", name: "Erling Haaland", teamId: "mci", num: 9, pos: "FWD", rating: 91, value: "€180M", status: "Injured (Hamstring)", age: 25, height: "194 cm", foot: "Left", nationality: "Norwegian", stats: { pace: 89, shot: 93, pass: 66, dribble: 80, def: 45, phys: 88 }, appearances: 28, goals: 30, assists: 5, yellow: 3, red: 0, minutes: 2310, history: [{ year: "2022-Present", club: "Manchester City", apps: 66, goals: 63 }, { year: "2020-2022", club: "Borussia Dortmund", apps: 67, goals: 62 }], awards: ["European Golden Shoe 22/23", "Gerd Müller Trophy 2023"] },
        { id: "messi", name: "Lionel Messi", teamId: "mia", num: 10, pos: "FWD", rating: 90, value: "€30M", status: "Fit", age: 39, height: "170 cm", foot: "Left", nationality: "Argentine", stats: { pace: 78, shot: 88, pass: 91, dribble: 92, def: 35, phys: 64 }, appearances: 22, goals: 18, assists: 15, yellow: 0, red: 0, minutes: 1910, history: [{ year: "2023-Present", club: "Inter Miami", apps: 35, goals: 28 }, { year: "2021-2023", club: "PSG", apps: 58, goals: 22 }], awards: ["Ballon d'Or (8x)", "FIFA World Cup Golden Ball (2x)"] },
        { id: "ronaldo", name: "Cristiano Ronaldo", teamId: "nas", num: 7, pos: "FWD", rating: 88, value: "€15M", status: "Fit", age: 41, height: "187 cm", foot: "Right", nationality: "Portuguese", stats: { pace: 77, shot: 89, pass: 78, dribble: 80, def: 34, phys: 78 }, appearances: 27, goals: 29, assists: 7, yellow: 3, red: 0, minutes: 2410, history: [{ year: "2023-Present", club: "Al Nassr", apps: 62, goals: 58 }, { year: "2021-2022", club: "Manchester United", apps: 38, goals: 19 }], awards: ["Ballon d'Or (5x)", "UEFA Champions League Top Scorer (7x)"] },
        { id: "ashour", name: "Emam Ashour", teamId: "ahly", num: 22, pos: "MID", rating: 78, value: "€3M", status: "Fit", age: 28, height: "182 cm", foot: "Right", nationality: "Egyptian", stats: { pace: 82, shot: 79, pass: 78, dribble: 80, def: 68, phys: 76 }, appearances: 26, goals: 8, assists: 11, yellow: 2, red: 0, minutes: 2110, history: [{ year: "2023-Present", club: "Al Ahly SC", apps: 35, goals: 9 }], awards: ["CAF Champions League Best Player 23/24"] },
        { id: "dawsari", name: "Salem Al-Dawsari", teamId: "hil", num: 29, pos: "MID", rating: 79, value: "€2M", status: "Fit", age: 34, height: "174 cm", foot: "Right", nationality: "Saudi", stats: { pace: 83, shot: 77, pass: 76, dribble: 81, def: 54, phys: 70 }, appearances: 29, goals: 14, assists: 9, yellow: 1, red: 0, minutes: 2210, history: [{ year: "2011-Present", club: "Al Hilal", apps: 245, goals: 64 }], awards: ["AFC Asian Footballer of the Year 2022"] },
        { id: "lewandowski", name: "Robert Lewandowski", teamId: "bar", num: 9, pos: "FWD", rating: 87, value: "€15M", status: "Fit", age: 37, height: "185 cm", foot: "Right", nationality: "Polish", stats: { pace: 75, shot: 88, pass: 72, dribble: 80, def: 40, phys: 82 }, appearances: 30, goals: 19, assists: 8, yellow: 2, red: 0, minutes: 2350, history: [{ year: "2022-Present", club: "FC Barcelona", apps: 72, goals: 42 }], awards: ["La Liga Top Scorer 22/23", "The Best FIFA Men's Player (2x)"] },
        { id: "reus", name: "Marco Reus", teamId: "lag", num: 18, pos: "MID", rating: 80, value: "€5M", status: "Fit", age: 37, height: "180 cm", foot: "Right", nationality: "German", stats: { pace: 72, shot: 80, pass: 82, dribble: 81, def: 42, phys: 65 }, appearances: 20, goals: 8, assists: 9, yellow: 1, red: 0, minutes: 1450, history: [{ year: "2024-Present", club: "LA Galaxy", apps: 15, goals: 6 }, { year: "2012-2024", club: "Borussia Dortmund", apps: 294, goals: 120 }], awards: ["German Footballer of the Year (2x)"] }
    ],
    teams: [
        { id: "rm", name: "Real Madrid", logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg", manager: "Carlo Ancelotti", stadium: "Santiago Bernabéu", city: "Madrid, Spain", founded: 1902, points: 87, pos: 1, gp: 38, w: 27, d: 6, l: 5, gf: 87, ga: 26, squad: ["bellingham", "mbappe"], trophies: ["La Liga (36)", "UEFA Champions League (15)", "Copa del Rey (20)"], transfers: [{ name: "Kylian Mbappé", from: "PSG", to: "Real Madrid", fee: "Free" }], leagueId: "LL", isQualifiedCL: true },
        { id: "bar", name: "FC Barcelona", logo: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona.svg", manager: "Hansi Flick", stadium: "Camp Nou", city: "Barcelona, Spain", founded: 1899, points: 85, pos: 2, gp: 38, w: 26, d: 7, l: 5, gf: 79, ga: 44, squad: ["lewandowski"], trophies: ["La Liga (27)", "Champions League (5)"], transfers: [], leagueId: "LL", isQualifiedCL: true },
        { id: "liv", name: "Liverpool", logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC_logo.svg", manager: "Arne Slot", stadium: "Anfield", city: "Liverpool, England", founded: 1892, points: 82, pos: 3, gp: 38, w: 24, d: 10, l: 4, gf: 86, ga: 41, squad: ["salah"], trophies: ["Premier League (19)", "Champions League (6)", "FA Cup (8)"], transfers: [{ name: "Federico Chiesa", from: "Juventus", to: "Liverpool", fee: "€12M" }], leagueId: "PL", isQualifiedCL: true },
        { id: "mci", name: "Manchester City", logo: "https://upload.wikimedia.org/wikipedia/en/eb/eb/Manchester_City_FC_badge.svg", manager: "Pep Guardiola", stadium: "Etihad Stadium", city: "Manchester, England", founded: 1880, points: 91, pos: 1, gp: 38, w: 28, d: 7, l: 3, gf: 96, ga: 34, squad: ["haaland"], trophies: ["Premier League (10)", "Champions League (1)", "FA Cup (7)"], transfers: [], leagueId: "PL", isQualifiedCL: true },
        { id: "ahly", name: "Al Ahly SC", logo: "https://upload.wikimedia.org/wikipedia/en/8/8c/Al_Ahly_SC_logo.svg", manager: "Marcel Koller", stadium: "Cairo International Stadium", city: "Cairo, Egypt", founded: 1907, points: 85, pos: 1, gp: 34, w: 27, d: 4, l: 3, gf: 75, ga: 28, squad: ["ashour"], trophies: ["Egyptian League (44)", "CAF Champions League (12)"], transfers: [], leagueId: "EGY", isQualifiedCL: false },
        { id: "zam", name: "Zamalek SC", logo: "https://upload.wikimedia.org/wikipedia/en/0/04/ZamalekSC.png", manager: "José Gomes", stadium: "Cairo International Stadium", city: "Giza, Egypt", founded: 1911, points: 56, pos: 3, gp: 34, w: 17, d: 8, l: 9, gf: 53, ga: 37, squad: [], trophies: ["Egyptian League (14)", "CAF Champions League (5)"], transfers: [], leagueId: "EGY", isQualifiedCL: false },
        { id: "hil", name: "Al Hilal SFC", logo: "https://upload.wikimedia.org/wikipedia/en/f/fa/Al-Hilal_Saudi_FC_Logo.svg", manager: "Jorge Jesus", stadium: "Kingdom Arena", city: "Riyadh, Saudi Arabia", founded: 1957, points: 96, pos: 1, gp: 34, w: 31, d: 3, l: 0, gf: 101, ga: 23, squad: ["dawsari"], trophies: ["Saudi League (19)", "AFC Champions League (4)"], transfers: [{ name: "João Cancelo", from: "Man City", to: "Al Hilal", fee: "€25M" }], leagueId: "SPL", isQualifiedCL: false },
        { id: "nas", name: "Al Nassr FC", logo: "https://upload.wikimedia.org/wikipedia/en/b/b3/Al-Nassr_Logo.svg", manager: "Stefano Pioli", stadium: "Al-Awwal Park", city: "Riyadh, Saudi Arabia", founded: 1955, points: 82, pos: 2, gp: 34, w: 26, d: 4, l: 4, gf: 100, ga: 35, squad: ["ronaldo"], trophies: ["Saudi League (9)", "Arab Club Champions Cup (1)"], transfers: [{ name: "Mohamed Simakan", from: "RB Leipzig", to: "Al Nassr", fee: "€45M" }], leagueId: "SPL", isQualifiedCL: false },
        { id: "mia", name: "Inter Miami CF", logo: "https://upload.wikimedia.org/wikipedia/en/a/a4/Inter_Miami_CF_badge.svg", manager: "Gerardo Martino", stadium: "Chase Stadium", city: "Fort Lauderdale, USA", founded: 2018, points: 68, pos: 1, gp: 30, w: 20, d: 8, l: 2, gf: 69, ga: 40, squad: ["messi"], trophies: ["Leagues Cup (1)"], transfers: [{ name: "Luis Suárez", from: "Gremio", to: "Inter Miami", fee: "Free" }], leagueId: "MLS", isQualifiedCL: false },
        { id: "lag", name: "LA Galaxy", logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/LA_Galaxy_logo.svg", manager: "Greg Vanney", stadium: "Dignity Health Sports Park", city: "Carson, USA", founded: 1994, points: 64, pos: 2, gp: 34, w: 19, d: 7, l: 8, gf: 69, ga: 50, squad: ["reus"], trophies: ["MLS Cup (5)"], transfers: [], leagueId: "MLS", isQualifiedCL: false }
    ],
    competitions: [
        { id: "PL", name: "Premier League", logo: "https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg", country: "England" },
        { id: "LL", name: "La Liga", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0f/LaLiga_logo_2023.svg", country: "Spain" },
        { id: "SPL", name: "Saudi Pro League", logo: "https://upload.wikimedia.org/wikipedia/en/a/a2/Saudi_Pro_League_logo.svg", country: "Saudi Arabia" },
        { id: "MLS", name: "MLS", logo: "https://upload.wikimedia.org/wikipedia/commons/7/76/MLS_crest_logo_RGB_gradient.svg", country: "USA" },
        { id: "EGY", name: "Egyptian Premier League", logo: "https://upload.wikimedia.org/wikipedia/en/c/c9/Egyptian_Premier_League_Logo.png", country: "Egypt" },
        { id: "CL", name: "UEFA Champions League", logo: "https://upload.wikimedia.org/wikipedia/en/b/bf/UEFA_Champions_League_logo_2021.svg", country: "Europe" }
    ],
    matches: [
        {
            id: "m1",
            leagueId: "PL",
            leagueName: "Premier League",
            leagueLogo: "https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg",
            homeTeam: "liv",
            awayTeam: "mci",
            homeScore: 2,
            awayScore: 2,
            status: "live",
            time: "78'",
            liveTimer: 78,
            referee: "Michael Oliver",
            stadium: "Anfield",
            possession: [54, 46],
            shots: [15, 12],
            xg: [1.89, 1.45],
            corners: [7, 4],
            fouls: [9, 11],
            offsides: [2, 3],
            cards: { homeY: 1, homeR: 0, awayY: 2, awayR: 0 },
            scorers: [
                { team: "home", player: "Mohamed Salah", minute: "14" },
                { team: "away", player: "Erling Haaland", minute: "32" },
                { team: "away", player: "Kevin De Bruyne", minute: "59" },
                { team: "home", player: "Luis Díaz", minute: "71" }
            ],
            lineups: {
                homeForm: "4-3-3",
                awayForm: "4-1-4-1",
                homePlayers: [
                    { name: "Alisson", num: 1, x: 50, y: 88, nodeClass: "team1-node" },
                    { name: "Alexander-Arnold", num: 66, x: 20, y: 72, nodeClass: "team1-node" },
                    { name: "Konaté", num: 5, x: 40, y: 76, nodeClass: "team1-node" },
                    { name: "Van Dijk", num: 4, x: 60, y: 76, nodeClass: "team1-node" },
                    { name: "Robertson", num: 26, x: 80, y: 72, nodeClass: "team1-node" },
                    { name: "Mac Allister", num: 10, x: 35, y: 60, nodeClass: "team1-node" },
                    { name: "Gravenberch", num: 38, x: 50, y: 52, nodeClass: "team1-node" },
                    { name: "Szoboszlai", num: 8, x: 65, y: 60, nodeClass: "team1-node" },
                    { name: "Mohamed Salah", num: 11, x: 20, y: 40, nodeClass: "team1-node", id: "salah" },
                    { name: "Luis Díaz", num: 7, x: 80, y: 40, nodeClass: "team1-node" },
                    { name: "Diogo Jota", num: 20, x: 50, y: 35, nodeClass: "team1-node" }
                ],
                awayPlayers: [
                    { name: "Ederson", num: 31, x: 50, y: 12, nodeClass: "team2-node" },
                    { name: "Walker", num: 2, x: 20, y: 24, nodeClass: "team2-node" },
                    { name: "Akanji", num: 25, x: 40, y: 20, nodeClass: "team2-node" },
                    { name: "Dias", num: 3, x: 60, y: 20, nodeClass: "team2-node" },
                    { name: "Gvardiol", num: 24, x: 80, y: 24, nodeClass: "team2-node" },
                    { name: "Rodri", num: 16, x: 50, y: 32, nodeClass: "team2-node" },
                    { name: "Bernardo Silva", num: 20, x: 30, y: 42, nodeClass: "team2-node" },
                    { name: "Kevin De Bruyne", num: 17, x: 50, y: 45, nodeClass: "team2-node" },
                    { name: "Foden", num: 47, x: 70, y: 42, nodeClass: "team2-node" },
                    { name: "Grealish", num: 10, x: 85, y: 45, nodeClass: "team2-node" },
                    { name: "Erling Haaland", num: 9, x: 50, y: 55, nodeClass: "team2-node", id: "haaland" }
                ]
            },
            timeline: [
                { type: "goal", minute: "14'", text: "Goal! Mohamed Salah scores with a brilliant curling effort from the edge of the box.", team: "home" },
                { type: "yellow", minute: "28'", text: "Yellow Card! Rúben Dias (Man City) gets booked for a sliding tackle on Salah.", team: "away" },
                { type: "goal", minute: "32'", text: "Goal! Erling Haaland heads home a perfect cross from Bernardo Silva.", team: "away" },
                { type: "goal", minute: "59'", text: "Goal! Kevin De Bruyne scores an incredible direct free-kick.", team: "away" },
                { type: "goal", minute: "71'", text: "Goal! Luis Díaz sweeps in from close range.", team: "home" }
            ],
            commentary: [
                { time: "76'", text: "VAR Check complete. Luis Diaz was in an onside position. The goal stands!" },
                { time: "71'", text: "GOAL!!! LIVERPOOL 2-2 MAN CITY! Luis Diaz fires the Kop into raptures!" }
            ]
        },
        {
            id: "m2",
            leagueId: "LL",
            leagueName: "La Liga",
            leagueLogo: "https://upload.wikimedia.org/wikipedia/commons/0/0f/LaLiga_logo_2023.svg",
            homeTeam: "rm",
            awayTeam: "bar",
            homeScore: 3,
            awayScore: 2,
            status: "live",
            time: "65'",
            liveTimer: 65,
            referee: "Soto Grado",
            stadium: "Santiago Bernabéu",
            possession: [52, 48],
            shots: [12, 10],
            xg: [1.65, 1.22],
            corners: [5, 5],
            fouls: [10, 12],
            offsides: [2, 1],
            cards: { homeY: 1, homeR: 0, awayY: 2, awayR: 0 },
            scorers: [
                { team: "home", player: "Vinícius Júnior", minute: "18" },
                { team: "away", player: "Andreas Christensen", minute: "6" },
                { team: "away", player: "Fermín López", minute: "69" },
                { team: "home", player: "Lucas Vázquez", minute: "73" },
                { team: "home", player: "Jude Bellingham", minute: "91" }
            ],
            lineups: {},
            timeline: [],
            commentary: []
        },
        {
            id: "m3",
            leagueId: "SPL",
            leagueName: "Saudi Pro League",
            leagueLogo: "https://upload.wikimedia.org/wikipedia/en/a/a2/Saudi_Pro_League_logo.svg",
            homeTeam: "hil",
            awayTeam: "nas",
            homeScore: 1,
            awayScore: 1,
            status: "live",
            time: "40'",
            liveTimer: 40,
            referee: "Slavko Vinčić",
            stadium: "Kingdom Arena",
            possession: [55, 45],
            shots: [6, 5],
            xg: [0.85, 0.72],
            corners: [3, 2],
            fouls: [8, 9],
            offsides: [1, 3],
            cards: { homeY: 1, homeR: 0, awayY: 1, awayR: 0 },
            scorers: [
                { team: "away", player: "Otávio", minute: "1" },
                { team: "home", player: "Aleksandar Mitrović", minute: "90" }
            ],
            lineups: {},
            timeline: [],
            commentary: []
        },
        {
            id: "m4",
            leagueId: "EGY",
            leagueName: "Egyptian Premier League",
            leagueLogo: "https://upload.wikimedia.org/wikipedia/en/c/c9/Egyptian_Premier_League_Logo.png",
            homeTeam: "ahly",
            awayTeam: "zam",
            homeScore: 2,
            awayScore: 1,
            status: "live",
            time: "82'",
            liveTimer: 82,
            referee: "Ibrahim Nour El Din",
            stadium: "Cairo International Stadium",
            possession: [56, 44],
            shots: [14, 8],
            xg: [1.72, 0.95],
            corners: [6, 3],
            fouls: [12, 14],
            offsides: [2, 2],
            cards: { homeY: 2, homeR: 0, awayY: 3, awayR: 0 },
            scorers: [
                { team: "home", player: "Emam Ashour", minute: "22" },
                { team: "away", player: "Seifeddine Jaziri", minute: "44" },
                { team: "home", player: "Mohamed Magdy Afsha", minute: "84" }
            ],
            lineups: {},
            timeline: [],
            commentary: []
        },
        {
            id: "m5",
            leagueId: "MLS",
            leagueName: "MLS",
            leagueLogo: "https://upload.wikimedia.org/wikipedia/commons/7/76/MLS_crest_logo_RGB_gradient.svg",
            homeTeam: "mia",
            awayTeam: "lag",
            homeScore: 1,
            awayScore: 1,
            status: "live",
            time: "90'",
            liveTimer: 90,
            referee: "Ismail Elfath",
            stadium: "Chase Stadium",
            possession: [58, 42],
            shots: [11, 10],
            xg: [1.32, 1.15],
            corners: [4, 5],
            fouls: [7, 10],
            offsides: [3, 2],
            cards: { homeY: 1, homeR: 0, awayY: 2, awayR: 0 },
            scorers: [
                { team: "away", player: "Dejan Joveljić", minute: "75" },
                { team: "home", player: "Lionel Messi", minute: "92" }
            ],
            lineups: {},
            timeline: [],
            commentary: []
        },
        {
            id: "m6",
            leagueId: "CL",
            leagueName: "UEFA Champions League",
            leagueLogo: "https://upload.wikimedia.org/wikipedia/en/b/bf/UEFA_Champions_League_logo_2021.svg",
            homeTeam: "rm",
            awayTeam: "mci",
            homeScore: 3,
            awayScore: 3,
            status: "upcoming",
            time: "21:00",
            referee: "François Letexier",
            stadium: "Santiago Bernabéu",
            possession: [48, 52],
            shots: [14, 12],
            xg: [1.82, 1.65],
            corners: [6, 5],
            fouls: [11, 9],
            offsides: [2, 1],
            cards: { homeY: 2, homeR: 0, awayY: 1, awayR: 0 },
            scorers: [
                { team: "home", player: "Ruben Dias (OG)", minute: "12" },
                { team: "away", player: "Bernardo Silva", minute: "2" },
                { team: "home", player: "Rodrygo", minute: "14" },
                { team: "away", player: "Phil Foden", minute: "66" },
                { team: "away", player: "Josko Gvardiol", minute: "71" },
                { team: "home", player: "Federico Valverde", minute: "79" }
            ],
            lineups: {},
            timeline: [],
            commentary: []
        }
    ],
    transfers: [
        { name: "Kylian Mbappé", from: "PSG", to: "Real Madrid", fee: "Free Transfer", date: "Jul 1", type: "Permanent" },
        { name: "Federico Chiesa", from: "Juventus", to: "Liverpool", fee: "€12M", date: "Aug 29", type: "Permanent" },
        { name: "João Cancelo", from: "Manchester City", to: "Al Hilal", fee: "€25M", date: "Aug 27", type: "Permanent" }
    ],
    injuries: [
        { name: "Erling Haaland", team: "Manchester City", injury: "Hamstring Strain", duration: "Expected mid-August", progress: 65 },
        { name: "Neymar Jr", team: "Al Hilal", injury: "ACL Tear", duration: "Expected September", progress: 85 }
    ],
    highlights: [
        { id: "h1", title: "Liverpool vs Manchester City 2-2 Highlights", league: "Premier League", img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80", duration: "12:30" }
    ],
    polls: [
        { id: "p1", question: "Who will win the 2026 Ballon d'Or?", options: ["Vinícius Júnior", "Jude Bellingham", "Kylian Mbappé", "Erling Haaland"], votes: [420, 310, 215, 120] }
    ],
    news: [
        { id: "n1", title: "Real Madrid celebrate historic 15th UEFA Champions League title", desc: "Los Blancos defeat Borussia Dortmund 2-0 at Wembley Stadium to secure European glory once again.", tag: "Champions League", img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80" },
        { id: "n2", title: "Mohamed Salah commits to Liverpool for upcoming season", desc: "The Egyptian winger outlines his ambitions to lead Arne Slot's side to Premier League contention.", tag: "Premier League", img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80" }
    ]
};

// ==========================================
// BILINGUAL LOCALIZATION DICTIONARY
// ==========================================
const i18n = {
    en: {
        nav_home: "Home", nav_live: "Live Matches", nav_competitions: "Competitions", nav_transfers: "Transfer Center",
        nav_highlights: "Highlights", nav_injuries: "Injury Tracker", nav_favorites: "Favorites", nav_community: "Community",
        nav_search: "Search", nav_profile: "User Profile", login: "Login", share_match: "Share Match",
        footer_desc: "The ultimate platform for football fans. Real-time stats, AI match predictions, squad building, and fan discussions.",
        footer_leagues: "Top Leagues", footer_features: "Features", footer_newsletter: "Newsletter", subscribe: "Subscribe",
        designed_by: "Designed for football fanatics worldwide.", notifications_settings: "Notifications Settings",
        match_alerts: "Match Alerts", match_start: "Match Start", goals: "Goals", red_cards: "Red Cards", full_time: "Full Time",
        news_alerts: "News Alerts", transfer_news: "Transfer News", breaking_news: "Breaking News", recent_activity: "Recent Activity",
        compare_players: "Compare Players", hero_banner_title: "FEATURED MATCH", live_scores: "Live Scores", upcoming_matches: "Upcoming Matches",
        latest_news: "Latest Football News", trending: "Trending Topics", popular_leagues: "Popular Leagues", featured_players: "Featured Players",
        recommended_for_you: "Recommended For You", predict_title: "AI Prediction Model",
        predict_desc: "Cast your vote below to earn points! KickZone's engine aggregates global fan polls with machine learning indicators.",
        predict_home: "Home Win", predict_draw: "Draw", predict_away: "Away Win", possession: "Possession", shots: "Total Shots",
        corners: "Corners", fouls: "Fouls", cards: "Yellow/Red Cards", lineup_tab: "Lineups", stats_tab: "Statistics",
        timeline_tab: "Timeline", commentary_tab: "Commentary", community_tab: "Fan Chat", motm_title: "Vote Man of the Match",
        cast_vote: "Cast Vote", standings: "Standings", fixtures: "Fixtures", top_scorers: "Top Scorers", squad: "Squad",
        transfers: "Transfers", manager: "Manager", stadium: "Stadium", city: "City", market_value: "Market Value",
        rating: "Rating", age: "Age", nationality: "Nationality", injury: "Injury Status", history: "Career History",
        apps: "Apps", pts: "Pts", points: "Points", form: "Form", fav_teams: "Favorite Teams", fav_players: "Favorite Players",
        dashboard: "Personalized Feed", fantasy_title: "KickZone Mini Fantasy",
        fantasy_desc: "Assemble your 5-a-side dream squad! Points are updated in real-time based on active match ratings.",
        save_changes: "Save Settings", fav_club: "Favorite Club", fav_player: "Favorite Player", lang_pref: "Language",
        theme_pref: "Theme", dark: "Dark", light: "Light", motm_voted: "Voted!", voted_success: "Your vote has been submitted successfully!",
        points_earned: "Points earned!", no_favorites: "You haven't added any favorites yet. Go to Teams or Players to follow them!",
        followed: "Following", follow: "Follow", highlights_tab: "Match Highlights", top_transfers: "Latest Transfers",
        injured_players: "Injury Ledger", api_token_label: "Football-Data.org API Token", save_token_btn: "Save Token"
    },
    ar: {
        nav_home: "الرئيسية", nav_live: "مباشر", nav_competitions: "البطولات", nav_transfers: "سوق الانتقالات",
        nav_highlights: "ملخصات المباريات", nav_injuries: "تقرير الإصابات", nav_favorites: "المفضلة", nav_community: "المجتمع",
        nav_search: "البحث", nav_profile: "الملف الشخصي", login: "تسجيل الدخول", share_match: "مشاركة المباراة",
        footer_desc: "المنصة الرائدة لعشاق كرة القدم. إحصائيات فورية، توقعات ذكية، بناء التشكيلات ومناقشات الجماهير.",
        footer_leagues: "أقوى الدوريات", footer_features: "المميزات", footer_newsletter: "النشرة الإخبارية", subscribe: "اشترك الآن",
        designed_by: "صمم لعشاق الساحرة المستديرة حول العالم.", notifications_settings: "إعدادات الإشعارات",
        match_alerts: "تنبيهات المباريات", match_start: "بداية المباراة", goals: "الأهداف", red_cards: "الكروت الحمراء", full_time: "نهاية المباراة",
        news_alerts: "تنبيهات الأخبار", transfer_news: "سوق الانتقالات", breaking_news: "الأخبار العاجلة", recent_activity: "النشاط الأخير",
        compare_players: "مقارنة اللاعبين", hero_banner_title: "أبرز مباريات الأسبوع", live_scores: "المباريات المباشرة", upcoming_matches: "المباريات القادمة",
        latest_news: "أحدث الأخبار الرياضية", trending: "الموضوعات الرائجة", popular_leagues: "دوريات شعبية", featured_players: "أبرز اللاعبين",
        recommended_for_you: "مقترحات لك", predict_title: "توقعات الذكاء الاصطناعي",
        predict_desc: "صوّت الآن لتجميع النقاط! يقوم محرك كيك زون بدمج استطلاعات رأي الجماهير مع تحليلات الذكاء الاصطناعي.",
        predict_home: "فوز صاحب الأرض", predict_draw: "تعادل", predict_away: "فوز الضيف", possession: "الاستحواذ", shots: "إجمالي التسديدات",
        corners: "الضربات الركنية", fouls: "الأخطاء", cards: "الكروت الملونة", lineup_tab: "التشكيلة", stats_tab: "الإحصائيات",
        timeline_tab: "الأحداث", commentary_tab: "التعليق المباشر", community_tab: "دردشة الجماهير", motm_title: "صوّت لرجل المباراة",
        cast_vote: "تصويت", standings: "جدول الترتيب", fixtures: "المباريات", top_scorers: "الهدافون", squad: "التشكيلة",
        transfers: "الانتقالات", manager: "المدرب", stadium: "الملعب", city: "المدينة", market_value: "القيمة السوقية",
        rating: "التقييم", age: "العمر", nationality: "الجنسية", injury: "حالة الإصابة", history: "المسيرة المهنية",
        apps: "المشاركات", pts: "نقطة", points: "النقاط", form: "النتائج الأخيرة", fav_teams: "الأندية المفضلة", fav_players: "اللاعبون المفضلون",
        dashboard: "لوحتك المخصصة", fantasy_title: "فانتازي كيك زون المصغر",
        fantasy_desc: "ابنِ تشكيلة أحلامك المكونة من 5 لاعبين! يتم تحديث النقاط لحظياً بناءً على تقييمات اللاعبين في المباريات الجارية.",
        save_changes: "حفظ الإعدادات", fav_club: "النادي المفضل", fav_player: "اللاعب المفضل", lang_pref: "اللغة المفضلة",
        theme_pref: "المظهر", dark: "داكن", light: "فاتح", motm_voted: "تم التصويت!", voted_success: "تم تسجيل صوتك بنجاح!",
        points_earned: "تم إضافة النقاط!", no_favorites: "لم تقم بإضافة عناصر مفضلة بعد. تصفح الفرق أو اللاعبين لمتابعتهم!",
        followed: "متابع", follow: "متابعة", highlights_tab: "الملخصات", top_transfers: "أحدث الصفقات",
        injured_players: "قائمة المصابين", api_token_label: "رمز وصول Football-Data.org", save_token_btn: "حفظ الرمز"
    }
};

let appState = {
    lang: "en",
    theme: "dark",
    activePage: "home",
    activeParam: null,
    activeLiveMatchMap: "heatmap", 
    watchlistMatches: [],
    apiToken: "", 
    user: {
        username: "Adam G.",
        points: 420,
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
        favoriteClub: "liv",
        favoritePlayer: "salah",
        predictions: {},
        isLoggedIn: false
    },
    favorites: {
        teams: ["liv", "rm", "hil"],
        players: ["salah", "ronaldo"],
        leagues: ["PL"]
    },
    fantasyTeam: [null, null, null, null, null],
    notifications: { matchStart: true, goals: true, redCards: true, fullTime: true, transfers: true, breaking: true },
    activityLog: [
        { icon: "fa-circle-play", text: "Premier League: Liverpool vs Man City is active now." },
        { icon: "fa-futbol", text: "Goal! Emam Ashour scored for Al Ahly SC vs Zamalek (22')." }
    ],
    chatMessages: [
        { sender: "Hamza88", text: "What a strike by Emam Ashour! Classic!", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" },
        { sender: "Kareem_E", text: "Zamalek defense was sleeping during the shot.", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" }
    ],
    pollsVoted: []
};

// ==========================================
// DYNAMIC LIVE API FETCH & INTEGRATION ENGINE
// ==========================================
const API_BASE = "https://api.football-data.org/v4";
const CORS_PROXY = "https://corsproxy.io/?";

async function fetchAPI(endpoint) {
    if (!appState.apiToken) {
        throw new Error("No API token provided, falling back to local dataset.");
    }
    
    const url = `${CORS_PROXY}${API_BASE}${endpoint}`;
    try {
        const res = await fetch(url, {
            headers: {
                "X-Auth-Token": appState.apiToken
            }
        });
        if (res.status === 429) {
            throw new Error("API Rate Limit exceeded (429).");
        }
        if (res.status === 403) {
            throw new Error("Competitions/Leagues not included in current subscription (403).");
        }
        if (!res.ok) {
            throw new Error(`API returned HTTP ${res.status}`);
        }
        return await res.json();
    } catch(err) {
        console.warn("API request failed. Falling back to local data source. Error:", err.message);
        throw err;
    }
}

// Helper: load local datasets matching endpoints
function getFallbackData(endpoint) {
    if (endpoint.includes("/standings")) {
        const parts = endpoint.split("/");
        const compIdx = parts.indexOf("competitions");
        let leagueId = "PL";
        if (compIdx !== -1 && parts[compIdx + 1]) {
            leagueId = parts[compIdx + 1];
        }
        
        // Filter teams belonging strictly to requested competition
        let filteredTeams = [];
        if (leagueId === "CL") {
            filteredTeams = fallbackDB.teams.filter(t => t.isQualifiedCL === true);
        } else {
            filteredTeams = fallbackDB.teams.filter(t => t.leagueId === leagueId);
        }
        
        filteredTeams.sort((a, b) => b.points - a.points);
        
        return {
            standings: [
                {
                    table: fallbackDB.teams.map((t, idx) => ({
                        position: idx + 1,
                        team: { id: t.id, name: t.name, crest: t.logo },
                        playedGames: t.gp,
                        won: t.w,
                        draw: t.d,
                        lost: t.l,
                        points: t.points,
                        goalsFor: t.gf,
                        goalsAgainst: t.ga
                    }))
                }
            ]
        };
    }
    return null;
}

// ==========================================
// CORE APP ROUTER & TRANSLATION ENGINE
// ==========================================
function initApp() {
    const savedState = localStorage.getItem("kickzone_api_state");
    if (savedState) {
        try {
            const parsed = JSON.parse(savedState);
            appState.lang = parsed.lang || "en";
            appState.theme = parsed.theme || "dark";
            appState.favorites = parsed.favorites || appState.favorites;
            appState.user = parsed.user || appState.user;
            appState.fantasyTeam = parsed.fantasyTeam || appState.fantasyTeam;
            appState.watchlistMatches = parsed.watchlistMatches || appState.watchlistMatches;
            appState.apiToken = parsed.apiToken || "";
        } catch(e) {}
    }
    
    document.documentElement.setAttribute("data-theme", appState.theme);
    document.documentElement.setAttribute("lang", appState.lang);
    document.documentElement.setAttribute("dir", appState.lang === "ar" ? "rtl" : "ltr");
    
    navigateTo("home");
    translateUI();
    renderActivityLog();
    updateThemeIcon();
    updateLoginHeaderBtn();
    
    setInterval(updateMockMatches, 15000);
}

function saveState() {
    localStorage.setItem("kickzone_api_state", JSON.stringify({
        lang: appState.lang,
        theme: appState.theme,
        favorites: appState.favorites,
        user: appState.user,
        fantasyTeam: appState.fantasyTeam,
        watchlistMatches: appState.watchlistMatches,
        apiToken: appState.apiToken
    }));
}

function translateUI() {
    const dict = i18n[appState.lang];
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });
    
    const searchInput = document.getElementById("global-search-input");
    if (searchInput) {
        searchInput.placeholder = appState.lang === "ar" ? "ابحث عن لاعبين، أندية، مباريات..." : "Search matches, players, teams...";
    }
    
    const newsletterInput = document.getElementById("newsletter-email");
    if (newsletterInput) {
        newsletterInput.placeholder = appState.lang === "ar" ? "البريد الإلكتروني" : "your@email.com";
    }

    const langBtn = document.getElementById("lang-toggle-btn").querySelector("span");
    langBtn.textContent = appState.lang === "en" ? "العربية" : "English";
}

function toggleLanguage() {
    appState.lang = appState.lang === "en" ? "ar" : "en";
    document.documentElement.setAttribute("lang", appState.lang);
    document.documentElement.setAttribute("dir", appState.lang === "ar" ? "rtl" : "ltr");
    
    translateUI();
    saveState();
    navigateTo(appState.activePage, appState.activeParam);
}

function toggleTheme() {
    appState.theme = appState.theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", appState.theme);
    updateThemeIcon();
    saveState();
}

function updateThemeIcon() {
    const btn = document.getElementById("theme-toggle-btn");
    btn.innerHTML = appState.theme === "dark" ? `<i class="fa-solid fa-sun"></i>` : `<i class="fa-solid fa-moon"></i>`;
}

function navigateTo(page, param = null) {
    appState.activePage = page;
    appState.activeParam = param;
    
    document.querySelectorAll(".nav-item").forEach(item => {
        item.classList.toggle("active", item.getAttribute("data-page") === page);
    });
    
    document.querySelectorAll(".mobile-nav-item").forEach(item => {
        item.classList.toggle("active", item.getAttribute("data-mobile-page") === page);
    });
    
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.getElementById("notifications-drawer").style.display = "none";
    
    const container = document.getElementById("main-content");
    container.innerHTML = "";
    
    switch(page) {
        case "home": renderHome(container); break;
        case "live": renderLive(container); break;
        case "competitions": renderCompetitions(container, param); break;
        case "transfers": renderTransfers(container); break;
        case "highlights": renderHighlights(container); break;
        case "injuries": renderInjuries(container); break;
        case "favorites": renderFavorites(container); break;
        case "community": renderCommunity(container); break;
        case "search": renderSearch(container, param); break;
        case "profile": renderProfile(container); break;
        case "match-details": renderMatchDetails(container, param); break;
        case "team-details": renderTeamDetails(container, param); break;
        case "player-details": renderPlayerDetails(container, param); break;
        default: renderHome(container);
    }
    
    document.getElementById("sidebar-username").textContent = appState.user.username;
    document.getElementById("sidebar-points").textContent = `${appState.user.points} ${appState.lang === 'ar' ? i18n.ar.pts : i18n.en.pts}`;
    document.getElementById("sidebar-avatar").src = appState.user.avatar;
    document.getElementById("live-sidebar-badge").textContent = fallbackDB.matches.filter(m => m.status === 'live').length;
    
    translateUI();
}

function handleGlobalSearch(val) {
    if (val.trim().length > 1) {
        navigateTo("search", val);
    }
}

// ==========================================
// RENDER VIEW: HOME PAGE
// ==========================================
function renderHome(container) {
    const isAr = appState.lang === "ar";
    
    const featuredMatch = fallbackDB.matches.find(m => m.status === "live") || fallbackDB.matches[0];
    const t1 = getTeam(featuredMatch.homeTeam);
    const t2 = getTeam(featuredMatch.awayTeam);
    
    const heroHTML = `
        <div class="hero-slider">
            <div class="hero-slide" style="background-image: url('images/stadium_hero.jpg');">
                <div class="hero-overlay"></div>
                <div class="hero-content">
                    <span class="hero-match-badge"><i class="fa-solid fa-star"></i> ${isAr ? i18n.ar.hero_banner_title : i18n.en.hero_banner_title}</span>
                    <h2 class="hero-match-teams">${t1.name} vs ${t2.name}</h2>
                    <p class="hero-match-details">${featuredMatch.leagueName} &bull; ${featuredMatch.time}</p>
                    <button class="hero-btn" onclick="navigateTo('match-details', '${featuredMatch.id}')">
                        <span>${isAr ? "مشاهدة الإحصائيات" : "View Live Stats"}</span>
                        <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
    
    const liveMatches = fallbackDB.matches.filter(m => m.status === "live");
    let liveHTML = `
        <section class="live-section">
            <div class="card-title-bar">
                <h3 class="card-title"><i class="fa-solid fa-tower-broadcast"></i> ${isAr ? i18n.ar.live_scores : i18n.en.live_scores}</h3>
            </div>
            <div class="horizontal-scroll-container">
    `;
    
    liveMatches.forEach(m => {
        const ht = getTeam(m.homeTeam);
        const at = getTeam(m.awayTeam);
        liveHTML += `
            <div class="glass-card live-match-card" onclick="navigateTo('match-details', '${m.id}')">
                <div class="match-card-header">
                    <span>${m.leagueName}</span>
                    <span class="live-badge"><span class="live-dot"></span>${m.time}</span>
                </div>
                <div class="match-card-teams">
                    <div class="match-team-row">
                        <div class="match-team-info">
                            <img src="${ht.logo}" alt="Logo" class="team-logo">
                            <span class="team-name">${ht.name}</span>
                        </div>
                        <span class="team-score">${m.homeScore}</span>
                    </div>
                    <div class="match-team-row">
                        <div class="match-team-info">
                            <img src="${at.logo}" alt="Logo" class="team-logo">
                            <span class="team-name">${at.name}</span>
                        </div>
                        <span class="team-score">${m.awayScore}</span>
                    </div>
                </div>
                <div class="match-card-footer">
                    <span>Possession: ${m.possession[0]}% - ${m.possession[1]}%</span>
                    <span class="match-card-action">${isAr ? "التفاصيل" : "View"} <i class="fa-solid fa-chevron-right"></i></span>
                </div>
            </div>
        `;
    });
    liveHTML += `</div></section>`;
    
    let calendarHTML = `
        <section>
            <div class="calendar-strip">
                <button class="calendar-day-btn" onclick="filterMatchesByDate('Jul 18')">
                    <span class="calendar-day-name">TODAY</span>
                    <span class="calendar-day-num">18</span>
                </button>
                <button class="calendar-day-btn active" onclick="filterMatchesByDate('Jul 19')">
                    <span class="calendar-day-name">SUN</span>
                    <span class="calendar-day-num">19</span>
                </button>
                <button class="calendar-day-btn" onclick="filterMatchesByDate('Jul 20')">
                    <span class="calendar-day-name">MON</span>
                    <span class="calendar-day-num">20</span>
                </button>
            </div>
        </section>
    `;
    
    const upcomingMatches = fallbackDB.matches.filter(m => m.status === "upcoming");
    let leftColumnHTML = `
        <div class="home-main-left" style="display:flex; flex-direction:column; gap:32px;">
            <section class="glass-card">
                <div class="card-title-bar">
                    <h3 class="card-title"><i class="fa-solid fa-calendar"></i> ${isAr ? i18n.ar.upcoming_matches : i18n.en.upcoming_matches}</h3>
                </div>
                <div style="display:flex; flex-direction:column; gap:16px;">
    `;
    
    upcomingMatches.forEach(m => {
        const ht = getTeam(m.homeTeam);
        const at = getTeam(m.awayTeam);
        leftColumnHTML += `
            <div style="display:flex; align-items:center; justify-content:space-between; padding:12px 16px; border-bottom:1px solid var(--border-color); cursor:pointer;" onclick="navigateTo('match-details', '${m.id}')">
                <div style="display:flex; align-items:center; gap:12px; width:35%;">
                    <img src="${ht.logo}" class="team-logo">
                    <span style="font-weight:600;">${ht.name}</span>
                </div>
                <div style="text-align:center; font-size:13px; font-weight:700; color:var(--primary); background-color:rgba(239, 68, 68, 0.1); padding:4px 12px; border-radius:20px; width:100px;">
                    ${m.time}
                </div>
                <div style="display:flex; align-items:center; gap:12px; width:35%; justify-content:flex-end;">
                    <span style="font-weight:600;">${at.name}</span>
                    <img src="${at.logo}" class="team-logo">
                </div>
            </div>
        `;
    });
    leftColumnHTML += `</div></section>`;
    
    // News list
    leftColumnHTML += `
        <section>
            <div class="card-title-bar">
                <h3 class="card-title"><i class="fa-regular fa-newspaper"></i> ${isAr ? i18n.ar.latest_news : i18n.en.latest_news}</h3>
            </div>
            <div class="news-grid">
    `;
    fallbackDB.news.forEach(n => {
        leftColumnHTML += `
            <div class="glass-card news-card">
                <div class="news-img" style="background-image: url('${n.img}')"></div>
                <div class="news-content">
                    <span class="news-tag">${n.tag}</span>
                    <h4 class="news-title">${n.title}</h4>
                    <p style="font-size:13px; color:var(--text-secondary);">${n.desc}</p>
                </div>
            </div>
        `;
    });
    leftColumnHTML += `</div></section></div>`;
    
    let rightColumnHTML = `
        <div class="home-main-right" style="display:flex; flex-direction:column; gap:32px;">
            <section class="glass-card">
                <div class="card-title-bar">
                    <h3 class="card-title"><i class="fa-solid fa-trophy"></i> ${isAr ? i18n.ar.popular_leagues : i18n.en.popular_leagues}</h3>
                </div>
                <div class="sidebar-list">
                    ${fallbackDB.competitions.map(c => `
                        <div class="popular-league-item" onclick="navigateTo('competitions', '${c.id}')">
                            <div class="league-info">
                                <img src="${c.logo}" class="league-logo">
                                <span class="league-name">${c.name}</span>
                            </div>
                            <i class="fa-solid fa-chevron-right" style="font-size:12px; color:var(--text-muted);"></i>
                        </div>
                    `).join('')}
                </div>
            </section>
        </div>
    `;
    
    let playersHTML = `
        <section class="glass-card">
            <div class="card-title-bar">
                <h3 class="card-title"><i class="fa-solid fa-star"></i> ${isAr ? i18n.ar.featured_players : i18n.en.featured_players}</h3>
            </div>
            <div class="players-track">
                ${fallbackDB.players.map(p => `
                    <div class="player-small-card" onclick="navigateTo('player-details', '${p.id}')">
                        <img src="https://images.unsplash.com/photo-1540747737956-37872404a82a?auto=format&fit=crop&w=120&q=80" class="player-small-avatar">
                        <span class="player-small-name">${p.name}</span>
                        <span class="player-small-rating">${p.rating}</span>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
    
    container.innerHTML = `
        ${heroHTML}
        ${liveHTML}
        ${calendarHTML}
        <div class="home-grid">
            ${leftColumnHTML}
            ${rightColumnHTML}
        </div>
        ${playersHTML}
    `;
}

// ==========================================
// RENDER VIEW: LIVE MATCHES LIST
// ==========================================
function renderLive(container) {
    const isAr = appState.lang === "ar";
    let html = `
        <div class="glass-card">
            <div class="card-title-bar">
                <h2 class="card-title"><i class="fa-solid fa-tower-broadcast"></i> ${isAr ? i18n.ar.live_scores : i18n.en.live_scores}</h2>
            </div>
            <div style="display:flex; flex-direction:column; gap:20px;">
    `;
    
    fallbackDB.matches.forEach(m => {
        const ht = getTeam(m.homeTeam);
        const at = getTeam(m.awayTeam);
        html += `
            <div style="display:grid; grid-template-columns: 1fr 140px 1fr; align-items:center; padding:20px; border-radius:var(--border-radius-md); border:1px solid var(--border-color); background-color:rgba(255, 255, 255, 0.01); cursor:pointer;" onclick="navigateTo('match-details', '${m.id}')">
                <div style="display:flex; align-items:center; gap:16px;">
                    <img src="${ht.logo}" style="width:40px; height:40px; object-fit:contain;">
                    <span style="font-size:18px; font-weight:700;">${ht.name}</span>
                </div>
                <div style="text-align:center;">
                    <div style="font-size:12px; color:var(--text-muted);">${m.leagueName}</div>
                    <div style="font-size:28px; font-weight:900; color:var(--primary);">${m.homeScore} - ${m.awayScore}</div>
                    <div style="margin-top:6px;"><span style="font-size:12px; font-weight:700; background-color:var(--primary); color:#FFFFFF; padding:2px 8px; border-radius:10px;">${m.time}</span></div>
                </div>
                <div style="display:flex; align-items:center; gap:16px; justify-content:flex-end;">
                    <span style="font-size:18px; font-weight:700;">${at.name}</span>
                    <img src="${at.logo}" style="width:40px; height:40px; object-fit:contain;">
                </div>
            </div>
        `;
    });
    
    html += `</div></div>`;
    container.innerHTML = html;
}

// ==========================================
// RENDER VIEW: LIVE MATCH DETAILS
// ==========================================
function renderMatchDetails(container, matchId) {
    const isAr = appState.lang === "ar";
    const m = getMatch(matchId) || fallbackDB.matches[0];
    const ht = getTeam(m.homeTeam);
    const at = getTeam(m.awayTeam);
    const isLive = m.status === "live";
    
    let headerHTML = `
        <div class="live-match-header">
            <div class="header-team" onclick="navigateTo('team-details', '${ht.id}')" style="cursor:pointer;">
                <img src="${ht.logo}" class="header-team-logo">
                <h3 class="header-team-name">${ht.name}</h3>
            </div>
            
            <div class="header-score-area">
                <span style="font-size:12px; color:var(--text-muted); font-weight:700;">${m.leagueName}</span>
                <h1 class="header-score">${m.homeScore} - ${m.awayScore}</h1>
                <span class="header-timer">
                    <i class="fa-solid fa-clock pulse"></i> ${m.time}
                </span>
                
                <div style="display:flex; gap:12px; margin-top:16px; font-size:13px; color:var(--text-secondary);">
                    <span><i class="fa-solid fa-user-tie"></i> Ref: ${m.referee}</span>
                    <span><i class="fa-solid fa-location-dot"></i> ${m.stadium}</span>
                </div>
            </div>
            
            <div class="header-team" onclick="navigateTo('team-details', '${at.id}')" style="cursor:pointer;">
                <img src="${at.logo}" class="header-team-logo">
                <h3 class="header-team-name">${at.name}</h3>
            </div>
        </div>
    `;
    
    let tabsHTML = `
        <div class="tabs-container" style="margin-top:24px;">
            <button class="tab-btn ${activeMatchTab === 'stats' ? 'active' : ''}" onclick="switchMatchTab('stats', '${m.id}')">${isAr ? i18n.ar.stats_tab : i18n.en.stats_tab}</button>
            <button class="tab-btn ${activeMatchTab === 'lineups' ? 'active' : ''}" onclick="switchMatchTab('lineups', '${m.id}')">${isAr ? i18n.ar.lineup_tab : i18n.en.lineup_tab}</button>
            <button class="tab-btn ${activeMatchTab === 'timeline' ? 'active' : ''}" onclick="switchMatchTab('timeline', '${m.id}')">${isAr ? i18n.ar.timeline_tab : i18n.en.timeline_tab}</button>
            <button class="tab-btn ${activeMatchTab === 'commentary' ? 'active' : ''}" onclick="switchMatchTab('commentary', '${m.id}')">${isAr ? i18n.ar.commentary_tab : i18n.en.commentary_tab}</button>
        </div>
    `;
    
    let tabContent = "";
    if (activeMatchTab === "stats") {
        tabContent = `
            <div class="lineups-container">
                <div class="glass-card" style="grid-column: span 2;">
                    <div class="stats-grid">
                        ${renderStatRow("Expected Goals (xG)", m.xg[0], m.xg[1])}
                        ${renderStatRow("Possession", m.possession[0], m.possession[1], "%")}
                        ${renderStatRow("Total Shots", m.shots[0], m.shots[1])}
                        ${renderStatRow("Corners", m.corners[0], m.corners[1])}
                        ${renderStatRow("Fouls", m.fouls[0], m.fouls[1])}
                    </div>
                </div>
                
                <div class="glass-card" style="grid-column: span 2;">
                    <div class="card-title-bar">
                        <h3 class="card-title"><i class="fa-solid fa-map-location-dot"></i> Interactive Visual maps</h3>
                        <div style="display:flex; gap:8px;">
                            <button class="league-tab ${appState.activeLiveMatchMap === 'heatmap' ? 'active' : ''}" onclick="switchMatchMap('heatmap', '${m.id}')">Heat Map</button>
                            <button class="league-tab ${appState.activeLiveMatchMap === 'passmap' ? 'active' : ''}" onclick="switchMatchMap('passmap', '${m.id}')">Pass Map</button>
                            <button class="league-tab ${appState.activeLiveMatchMap === 'shotmap' ? 'active' : ''}" onclick="switchMatchMap('shotmap', '${m.id}')">Shot Map</button>
                        </div>
                    </div>
                    <div style="display:flex; justify-content:center; align-items:center;">
                        <canvas id="match-canvas-map" width="600" height="350" style="max-width:100%; background-color:#142e1d; border-radius:12px; border:2px solid rgba(255,255,255,0.1);"></canvas>
                    </div>
                    <div style="font-size:12px; color:var(--text-secondary); text-align:center; margin-top:10px;" id="canvas-map-description"></div>
                </div>
            </div>
        `;
        setTimeout(() => renderMatchCanvasMap(), 50);
    } 
    else if (activeMatchTab === "lineups") {
        if (!m.lineups || !m.lineups.homePlayers) {
            tabContent = `<div class="glass-card" style="grid-column:span 2;text-align:center;padding:40px;">Lineups will be announced 1 hour before kickoff.</div>`;
        } else {
            tabContent = `
                <div class="pitch-container">
                    <div class="pitch-line-center"></div>
                    <div class="pitch-circle"></div>
                    <div class="pitch-row">${m.lineups.awayPlayers.filter(p => p.y < 30).map(renderPlayerNode).join('')}</div>
                    <div class="pitch-row">${m.lineups.awayPlayers.filter(p => p.y >= 30 && p.y < 45).map(renderPlayerNode).join('')}</div>
                    <div class="pitch-row">${m.lineups.awayPlayers.filter(p => p.y >= 45 && p.y < 58).map(renderPlayerNode).join('')}</div>
                    
                    <div class="pitch-row">${m.lineups.homePlayers.filter(p => p.y >= 30 && p.y < 58).map(renderPlayerNode).join('')}</div>
                    <div class="pitch-row">${m.lineups.homePlayers.filter(p => p.y >= 58 && p.y < 75).map(renderPlayerNode).join('')}</div>
                    <div class="pitch-row">${m.lineups.homePlayers.filter(p => p.y >= 75).map(renderPlayerNode).join('')}</div>
                </div>
            `;
        }
    } 
    else if (activeMatchTab === "timeline") {
        tabContent = `
            <div class="glass-card" style="grid-column: span 2;">
                <div class="timeline-vertical">
                    ${m.timeline.map(e => `
                        <div class="timeline-event">
                            <div class="timeline-icon" style="border-color:${e.type === 'goal' ? 'var(--secondary)' : 'var(--warning)'}">
                                <i class="fa-solid ${e.type === 'goal' ? 'fa-futbol' : 'fa-square'}" style="font-size:8px; color:${e.type === 'goal' ? 'var(--secondary)' : 'var(--warning)'}"></i>
                            </div>
                            <div class="timeline-content">
                                <span class="timeline-time">${e.minute}</span>
                                <span class="timeline-desc">${e.text}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    } 
    else if (activeMatchTab === "commentary") {
        tabContent = `
            <div class="glass-card" style="grid-column: span 2;">
                <div style="display:flex; flex-direction:column; gap:16px;">
                    ${m.commentary.map(c => `
                        <div style="display:flex; gap:16px; border-bottom:1px solid var(--border-color); padding-bottom:12px;">
                            <span style="font-weight:800; color:var(--primary); min-width:40px;">${c.time}</span>
                            <span style="font-size:14px; line-height:1.4;">${c.text}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    container.innerHTML = `
        ${headerHTML}
        ${tabsHTML}
        <div class="lineups-container">
            ${tabContent}
        </div>
    `;
}

function switchMatchTab(tab, matchId) {
    activeMatchTab = tab;
    navigateTo("match-details", matchId);
}

function switchMatchMap(map, matchId) {
    appState.activeLiveMatchMap = map;
    navigateTo("match-details", matchId);
}

function renderMatchCanvasMap() {
    const canvas = document.getElementById("match-canvas-map");
    const desc = document.getElementById("canvas-map-description");
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 600, 350);
    
    ctx.strokeStyle = "rgba(255,255,255,0.15)";
    ctx.lineWidth = 2;
    ctx.strokeRect(20, 20, 560, 310);
    ctx.beginPath();
    ctx.moveTo(300, 20); ctx.lineTo(300, 330); ctx.stroke();
    ctx.beginPath();
    ctx.arc(300, 175, 50, 0, 2*Math.PI); ctx.stroke();
    
    ctx.strokeRect(20, 75, 80, 200);
    ctx.strokeRect(500, 75, 80, 200);
    
    if (appState.activeLiveMatchMap === "heatmap") {
        desc.textContent = "Heat Map: Mohamed Salah. High activity recorded in the opponent's final third, primarily operating from the right half-space.";
        const grad = ctx.createRadialGradient(490, 120, 5, 490, 120, 50);
        grad.addColorStop(0, "rgba(239, 68, 68, 0.75)");
        grad.addColorStop(1, "rgba(239, 68, 68, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath(); ctx.arc(490, 120, 50, 0, 2*Math.PI); ctx.fill();
    } 
    else if (appState.activeLiveMatchMap === "passmap") {
        desc.textContent = "Pass Map: Connected passing lane density. Highlights high-value combinations in the midfield.";
        drawArrow(ctx, 250, 175, 380, 100, "var(--secondary)");
        drawArrow(ctx, 380, 100, 480, 80, "var(--secondary)");
    } 
    else if (appState.activeLiveMatchMap === "shotmap") {
        desc.textContent = "Shot Map: Shot accuracy frame overlay. Circles = Goals, Crosses = Missed attempts.";
        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth = 4;
        ctx.strokeRect(150, 80, 300, 180);
        drawTarget(ctx, 180, 110, true);
        drawTarget(ctx, 400, 230, true);
    }
}

// ==========================================
// RENDER VIEW: COMPETITIONS
// ==========================================
let activeLeague = "PL";
let activeLeagueSubTab = "table";
async function renderCompetitions(container, leagueId = null) {
    const isAr = appState.lang === "ar";
    if (leagueId && fallbackDB.competitions.some(c => c.id === leagueId)) {
        activeLeague = leagueId;
    }
    
    let html = `
        <div class="league-selector">
            ${fallbackDB.competitions.map(c => `
                <button class="league-tab ${activeLeague === c.id ? 'active' : ''}" onclick="switchLeague('${c.id}')">
                    <img src="${c.logo}" class="league-logo">
                    ${c.name}
                </button>
            `).join('')}
        </div>
        
        <div class="tabs-container" style="margin-top:20px;">
            <button class="tab-btn ${activeLeagueSubTab === 'table' ? 'active' : ''}" onclick="switchLeagueSubTab('table')">${isAr ? i18n.ar.standings : i18n.en.standings}</button>
            <button class="tab-btn ${activeLeagueSubTab === 'fixtures' ? 'active' : ''}" onclick="switchLeagueSubTab('fixtures')">${isAr ? i18n.ar.fixtures : i18n.en.fixtures}</button>
        </div>
        
        <div id="league-data-mount">
            <div style="text-align:center; padding:32px;"><i class="fa-solid fa-spinner fa-spin"></i> Loading...</div>
        </div>
    `;
    
    container.innerHTML = html;
    
    const mount = document.getElementById("league-data-mount");
    
    try {
        // Attempt to fetch from Football-Data.org API
        const data = await fetchAPI(`/competitions/${activeLeague}/standings`);
        renderAPIStandings(mount, data);
    } catch(err) {
        // Fallback to local accurate database
        console.log("Using fallback standings database.");
        const fbData = getFallbackData(`/competitions/${activeLeague}/standings`);
        renderAPIStandings(mount, fbData);
    }
}

function renderAPIStandings(mount, data) {
    const isAr = appState.lang === "ar";
    if (!data || !data.standings || !data.standings[0]) {
        mount.innerHTML = `<div style="text-align:center; padding:32px; color:var(--text-secondary);">No standings data available.</div>`;
        return;
    }
    
    let html = `
        <div class="glass-card standings-table-container">
            <table class="standings-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Team</th>
                        <th>GP</th>
                        <th>W</th>
                        <th>D</th>
                        <th>L</th>
                        <th>GF</th>
                        <th>GA</th>
                        <th>GD</th>
                        <th>PTS</th>
                    </tr>
                </thead>
                <tbody>
    `;
    
    const table = data.standings[0].table;
    table.forEach(row => {
        html += `
            <tr style="cursor:pointer;" onclick="navigateTo('team-details', '${row.team.id}')">
                <td class="standings-pos">${row.position}</td>
                <td>
                    <div class="standings-team-cell">
                        <img src="${row.team.crest || row.team.logo}" class="standings-team-logo" onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_crest.svg'">
                        <span style="font-weight:700;">${row.team.name}</span>
                    </div>
                </td>
                <td>${row.playedGames}</td>
                <td>${row.won}</td>
                <td>${row.draw}</td>
                <td>${row.lost}</td>
                <td>${row.goalsFor}</td>
                <td>${row.goalsAgainst}</td>
                <td>${row.goalsFor - row.goalsAgainst}</td>
                <td style="font-weight:800; color:var(--primary);">${row.points}</td>
            </tr>
        `;
    });
    
    html += `</tbody></table></div>`;
    mount.innerHTML = html;
}

function switchLeague(leagueId) {
    activeLeague = leagueId;
    navigateTo("competitions");
}

function switchLeagueSubTab(sub) {
    activeLeagueSubTab = sub;
    navigateTo("competitions");
}

// ==========================================
// RENDER VIEW: TEAM DETAILS
// ==========================================
function renderTeamDetails(container, teamId) {
    const isAr = appState.lang === "ar";
    const team = getTeam(teamId) || fallbackDB.teams[0];
    const isFollowed = appState.favorites.teams.includes(team.id);
    
    const bannerHTML = `
        <div class="profile-banner">
            <img src="${team.logo}" class="profile-avatar-big" style="border-radius:12px; border:none; padding:10px; background-color:rgba(255,255,255,0.05); object-fit:contain;">
            <div class="profile-info">
                <h1 class="profile-name">${team.name}</h1>
                <p class="profile-subtext">Founded: ${team.founded} &bull; Stadium: ${team.stadium} &bull; Manager: ${team.manager}</p>
                <div style="display:flex; gap:8px;">
                    <button class="follow-btn ${isFollowed ? 'following' : ''}" onclick="toggleFollowTeam('${team.id}')">
                        <i class="fa-solid ${isFollowed ? 'fa-check' : 'fa-star'}"></i>
                        <span>${isFollowed ? (isAr ? i18n.ar.followed : i18n.en.followed) : (isAr ? i18n.ar.follow : i18n.en.follow)}</span>
                    </button>
                    <button class="follow-btn following" onclick="openTeamCompare('${team.id}')">
                        <i class="fa-solid fa-right-left"></i>
                        <span>Compare Team</span>
                    </button>
                </div>
            </div>
        </div>
    `;
    
    const squad = getTeamPlayers(team.id);
    const tabHTML = `
        <div class="glass-card" style="margin-top:24px;">
            <div class="card-title-bar"><h3 class="card-title"><i class="fa-solid fa-users"></i> Real Squad Roster</h3></div>
            <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap:16px;">
                ${squad.map(p => `
                    <div class="glass-card" style="display:flex; flex-direction:column; align-items:center; text-align:center; padding:16px; cursor:pointer;" onclick="navigateTo('player-details', '${p.id}')">
                        <img src="https://images.unsplash.com/photo-1540747737956-37872404a82a?auto=format&fit=crop&w=150&q=80" style="width:60px; height:60px; border-radius:50%; object-fit:cover; border:2px solid var(--border-color); margin-bottom:12px;">
                        <span style="font-weight:700;">${p.name}</span>
                        <span style="font-size:12px; color:var(--text-muted); margin-top:2px;">#${p.num} &bull; ${p.pos}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    container.innerHTML = bannerHTML + tabHTML;
}

// ==========================================
// RENDER VIEW: PLAYER DETAILS
// ==========================================
function renderPlayerDetails(container, playerId) {
    const isAr = appState.lang === "ar";
    const p = getPlayer(playerId) || fallbackDB.players[0];
    const team = getTeam(p.teamId);
    
    const bannerHTML = `
        <div class="profile-banner">
            <img src="https://images.unsplash.com/photo-1540747737956-37872404a82a?auto=format&fit=crop&w=150&q=80" class="profile-avatar-big">
            <div class="profile-info">
                <h1 class="profile-name">${p.name}</h1>
                <p class="profile-subtext">#${p.num} &bull; ${p.pos} &bull; ${team.name} (${p.nationality})</p>
            </div>
        </div>
    `;
    
    const detailsHTML = `
        <div class="lineups-container" style="margin-top:24px;">
            <div class="glass-card">
                <div class="card-title-bar"><h3 class="card-title"><i class="fa-solid fa-chart-bar"></i> Career & Season Statistics</h3></div>
                <div class="stats-grid-cards">
                    <div class="stat-card-micro"><div class="stat-card-value">${p.appearances}</div><div class="stat-card-label">Apps</div></div>
                    <div class="stat-card-micro"><div class="stat-card-value">${p.goals}</div><div class="stat-card-label">Goals</div></div>
                    <div class="stat-card-micro"><div class="stat-card-value">${p.assists}</div><div class="stat-card-label">Assists</div></div>
                    <div class="stat-card-micro"><div class="stat-card-value">${p.value}</div><div class="stat-card-label">Value</div></div>
                </div>
                <hr style="border:0; border-top:1px solid var(--border-color); margin:20px 0;">
                <div style="display:flex; flex-direction:column; gap:12px; font-size:14px;">
                    <div><strong>Height:</strong> ${p.height}</div>
                    <div><strong>Preferred Foot:</strong> ${p.foot}</div>
                    <div><strong>Awards:</strong> ${p.awards.join(', ')}</div>
                </div>
            </div>
            
            <div class="glass-card" style="display:flex; flex-direction:column; align-items:center;">
                <h3 class="card-title"><i class="fa-solid fa-hexagon-nodes"></i> Skill Radar</h3>
                <div class="radar-wrapper">
                    <canvas id="player-radar-canvas" width="200" height="200"></canvas>
                </div>
            </div>
        </div>
    `;
    
    container.innerHTML = bannerHTML + detailsHTML;
    setTimeout(() => {
        drawHexagon("player-radar-canvas", [p.stats.pace, p.stats.shot, p.stats.pass, p.stats.dribble, p.stats.def, p.stats.phys]);
    }, 50);
}

// ==========================================
// RENDER VIEW: USER PROFILE & SETTINGS
// ==========================================
function renderProfile(container) {
    const isAr = appState.lang === "ar";
    
    const bannerHTML = `
        <div class="profile-banner">
            <img src="${appState.user.avatar}" class="profile-avatar-big">
            <div class="profile-info">
                <h1 class="profile-name">${appState.user.username}</h1>
                <p class="profile-subtext">${appState.user.points} Prediction Points</p>
            </div>
        </div>
    `;
    
    const settingsHTML = `
        <div class="glass-card" style="margin-top:24px;">
            <div class="card-title-bar"><h3 class="card-title"><i class="fa-solid fa-gears"></i> Platform Settings</h3></div>
            <div class="settings-list">
                <div class="settings-group">
                    <span class="settings-label">${isAr ? i18n.ar.api_token_label : i18n.en.api_token_label}</span>
                    <div style="display:flex; gap:12px;">
                        <input type="text" id="api-token-input" class="compare-item-select" placeholder="Enter X-Auth-Token..." value="${appState.apiToken}" style="flex:1;">
                        <button class="follow-btn" onclick="saveApiToken()" style="align-self:stretch;">${isAr ? i18n.ar.save_token_btn : i18n.en.save_token_btn}</button>
                    </div>
                    <span style="font-size:11px; color:var(--text-muted); margin-top:4px; display:block;">Enter your private Football-Data.org token to retrieve live stats directly. Leave empty to use the localized fallback database.</span>
                </div>
            </div>
        </div>
    `;
    
    container.innerHTML = bannerHTML + settingsHTML;
}

function saveApiToken() {
    const val = document.getElementById("api-token-input").value;
    appState.apiToken = val.trim();
    saveState();
    alert(appState.lang === "ar" ? "تم حفظ الرمز بنجاح!" : "API Token saved successfully!");
}

// ==========================================
// RENDER VIEW: TRANSFERS
// ==========================================
function renderTransfers(container) {
    const isAr = appState.lang === "ar";
    
    let html = `
        <div class="glass-card">
            <div class="card-title-bar">
                <h2 class="card-title"><i class="fa-solid fa-right-left"></i> ${isAr ? i18n.ar.top_transfers : i18n.en.top_transfers}</h2>
            </div>
            <div class="transfer-ledger">
                ${fallbackDB.transfers.map(tr => `
                    <div class="transfer-row">
                        <div class="transfer-team-side">
                            <i class="fa-solid fa-user" style="font-size:20px; color:var(--text-muted);"></i>
                            <div>
                                <strong style="font-size:16px;">${tr.name}</strong>
                                <div style="font-size:12px; color:var(--text-secondary);">From: ${tr.from}</div>
                            </div>
                        </div>
                        <div class="transfer-arrow"><i class="fa-solid fa-arrow-right-long"></i></div>
                        <div class="transfer-team-side">
                            <div>
                                <strong style="font-size:15px; color:var(--secondary);">${tr.to}</strong>
                                <div style="font-size:11px; color:var(--text-muted);">${tr.type} &bull; ${tr.date}</div>
                            </div>
                        </div>
                        <div class="transfer-fee-badge">${tr.fee}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    container.innerHTML = html;
}

// ==========================================
// RENDER VIEW: INJURIES
// ==========================================
function renderInjuries(container) {
    const isAr = appState.lang === "ar";
    let html = `
        <div class="glass-card">
            <div class="card-title-bar">
                <h2 class="card-title"><i class="fa-solid fa-crutch"></i> ${isAr ? i18n.ar.injured_players : i18n.en.injured_players}</h2>
            </div>
            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:20px;">
                ${fallbackDB.injuries.map(injp => `
                    <div class="glass-card" style="background-color:rgba(255,255,255,0.01); border-color:var(--border-color)">
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                            <strong style="font-size:16px;">${injp.name}</strong>
                            <span style="font-size:11px; background-color:rgba(245,158,11,0.1); color:var(--warning); font-weight:700; padding:2px 8px; border-radius:4px;">${injp.injury}</span>
                        </div>
                        <div style="font-size:13px; color:var(--text-secondary); margin-top:8px;">Club: ${injp.team}</div>
                        <div style="font-size:12px; color:var(--text-muted); margin-top:4px;">Estimated Return: ${injp.duration}</div>
                        <div class="injury-progress-track"><div class="injury-progress-fill" style="width: ${injp.progress}%;"></div></div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    container.innerHTML = html;
}

// ==========================================
// RENDER VIEW: HIGHLIGHTS
// ==========================================
function renderHighlights(container) {
    const isAr = appState.lang === "ar";
    let html = `
        <div>
            <div class="card-title-bar" style="margin-bottom:24px;">
                <h2 class="card-title"><i class="fa-solid fa-circle-play"></i> ${isAr ? i18n.ar.highlights_tab : i18n.en.highlights_tab}</h2>
            </div>
            <div class="highlights-grid">
                ${fallbackDB.highlights.map(h => `
                    <div class="glass-card highlight-card" onclick="alert('Playing highlights: ${h.title}')">
                        <div class="highlight-video-mock" style="background-image: url('${h.img}');">
                            <div class="play-overlay"><div class="play-btn-circle"><i class="fa-solid fa-play"></i></div></div>
                            <span class="highlight-duration">${h.duration}</span>
                        </div>
                        <h4 style="font-size:15px; font-weight:700; margin-bottom:4px;">${h.title}</h4>
                        <span style="font-size:11px; background-color:rgba(255,255,255,0.05); border:1px solid var(--border-color); color:var(--text-secondary); padding:2px 8px; border-radius:12px;">${h.league}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    container.innerHTML = html;
}

// ==========================================
// RENDER VIEW: FAVORITES
// ==========================================
function renderFavorites(container) {
    let html = `
        <div style="display:flex; flex-direction:column; gap:32px;">
            <div class="glass-card">
                <div class="card-title-bar"><h2 class="card-title"><i class="fa-solid fa-star" style="color:var(--warning);"></i> Favorites Feed</h2></div>
                <p style="font-size:13px; color:var(--text-secondary);">Your personalized workspace combining favorited clubs and leagues.</p>
            </div>
        </div>
    `;
    container.innerHTML = html;
}

// ==========================================
// RENDER VIEW: COMMUNITY
// ==========================================
function renderCommunity(container) {
    let html = `
        <div class="lineups-container">
            <div class="glass-card" style="grid-column: span 2;">
                <div class="card-title-bar"><h3 class="card-title"><i class="fa-solid fa-comments"></i> Community Fan Chat</h3></div>
                ${renderMatchChat()}
            </div>
            <div class="glass-card">
                <div class="card-title-bar"><h3 class="card-title"><i class="fa-solid fa-chart-pie"></i> Interactive Polls</h3></div>
                ${fallbackDB.polls.map(renderCommunityPoll).join('')}
            </div>
        </div>
    `;
    container.innerHTML = html;
}

// ==========================================
// RENDER VIEW: SEARCH
// ==========================================
function renderSearch(container, keyword = "") {
    let html = `
        <div class="glass-card">
            <div class="card-title-bar"><h2 class="card-title"><i class="fa-solid fa-magnifying-glass"></i> KickZone Search</h2></div>
            <input type="text" class="compare-item-select" style="padding:14px; border-radius:30px; margin-bottom:20px; background-color:rgba(255,255,255,0.03)" placeholder="Search clubs, players, stadiums..." oninput="triggerSearchQuery(this.value)" value="${keyword}">
            <div id="search-results-mount"></div>
        </div>
    `;
    container.innerHTML = html;
    triggerSearchQuery(keyword);
}

function triggerSearchQuery(val) {
    const mount = document.getElementById("search-results-mount");
    if (!mount) return;
    if (!val || val.trim().length < 2) {
        mount.innerHTML = `<div style="text-align:center; padding:32px; color:var(--text-muted);">Please type keyword to start searching.</div>`;
        return;
    }
    const key = val.toLowerCase().trim();
    const matchedP = fallbackDB.players.filter(p => p.name.toLowerCase().includes(key));
    const matchedT = fallbackDB.teams.filter(t => t.name.toLowerCase().includes(key));
    
    let html = "";
    if (matchedP.length > 0) {
        html += `<h4 style="margin-bottom:8px; color:var(--primary)">Players</h4>`;
        matchedP.forEach(p => { html += `<div class="popular-league-item" onclick="navigateTo('player-details', '${p.id}')">${p.name}</div>`; });
    }
    if (matchedT.length > 0) {
        html += `<h4 style="margin:16px 0 8px 0; color:var(--primary)">Teams</h4>`;
        matchedT.forEach(t => { html += `<div class="popular-league-item" onclick="navigateTo('team-details', '${t.id}')">${t.name}</div>`; });
    }
    mount.innerHTML = html || `<div style="text-align:center; padding:32px; color:var(--text-muted);">No results found.</div>`;
}

// ==========================================
// COMPARISON MODALS: TEAM & PLAYER COMPARER
// ==========================================
let activeCompareTeam1 = "rm";
let activeCompareTeam2 = "liv";
function openTeamCompare(teamId = null) {
    if (teamId) activeCompareTeam1 = teamId;
    const modal = document.getElementById("compare-modal");
    modal.style.display = "flex";
    renderTeamCompareInterface();
}

function renderTeamCompareInterface() {
    const body = document.getElementById("compare-modal-body");
    const header = document.querySelector(".compare-modal-header h2 span");
    header.textContent = "Compare Football Teams";
    
    const t1 = getTeam(activeCompareTeam1);
    const t2 = getTeam(activeCompareTeam2);
    
    let html = `
        <div class="compare-container">
            <div class="compare-head-card">
                <img src="${t1.logo}" style="width:70px; height:70px; object-fit:contain; margin-bottom:12px;">
                <select class="compare-item-select" onchange="changeTeamCompareSelection(1, this.value)">
                    ${fallbackDB.teams.map(t => `<option value="${t.id}" ${t.id === t1.id ? 'selected' : ''}>${t.name}</option>`).join('')}
                </select>
            </div>
            <div class="compare-vs">VS</div>
            <div class="compare-head-card">
                <img src="${t2.logo}" style="width:70px; height:70px; object-fit:contain; margin-bottom:12px;">
                <select class="compare-item-select" onchange="changeTeamCompareSelection(2, this.value)">
                    ${fallbackDB.teams.map(t => `<option value="${t.id}" ${t.id === t2.id ? 'selected' : ''}>${t.name}</option>`).join('')}
                </select>
            </div>
            <div class="compare-stats-rows">
                ${renderCompareStatRow("Standing Position", t1.pos, t2.pos)}
                ${renderCompareStatRow("Total Points", t1.points, t2.points)}
                ${renderCompareStatRow("Matches Played (GP)", t1.gp, t2.gp)}
                ${renderCompareStatRow("Wins", t1.w, t2.w)}
            </div>
        </div>
    `;
    body.innerHTML = html;
}

function changeTeamCompareSelection(slotNum, teamId) {
    if (slotNum === 1) activeCompareTeam1 = teamId;
    else activeCompareTeam2 = teamId;
    renderTeamCompareInterface();
}

let activeComparePlayer1 = "salah";
let activeComparePlayer2 = "bellingham";
function openCompareModal(preselectedP1 = null) {
    if (preselectedP1) activeComparePlayer1 = preselectedP1;
    const modal = document.getElementById("compare-modal");
    modal.style.display = "flex";
    renderCompareInterface();
}

function closeCompareModal() {
    document.getElementById("compare-modal").style.display = "none";
}

function renderCompareInterface() {
    const body = document.getElementById("compare-modal-body");
    const header = document.querySelector(".compare-modal-header h2 span");
    header.textContent = "Compare Players";
    
    const p1 = getPlayer(activeComparePlayer1);
    const p2 = getPlayer(activeComparePlayer2);
    
    let html = `
        <div class="compare-container">
            <div class="compare-head-card">
                <img src="https://images.unsplash.com/photo-1540747737956-37872404a82a?auto=format&fit=crop&w=100&q=80" class="compare-head-avatar">
                <select class="compare-item-select" onchange="changeCompareSelection(1, this.value)">
                    ${fallbackDB.players.map(p => `<option value="${p.id}" ${p.id === p1.id ? 'selected' : ''}>${p.name}</option>`).join('')}
                </select>
            </div>
            <div class="compare-vs">VS</div>
            <div class="compare-head-card">
                <img src="https://images.unsplash.com/photo-1540747737956-37872404a82a?auto=format&fit=crop&w=100&q=80" class="compare-head-avatar">
                <select class="compare-item-select" onchange="changeCompareSelection(2, this.value)">
                    ${fallbackDB.players.map(p => `<option value="${p.id}" ${p.id === p2.id ? 'selected' : ''}>${p.name}</option>`).join('')}
                </select>
            </div>
            <div class="compare-stats-rows">
                ${renderCompareStatRow("Rating", p1.rating, p2.rating)}
                ${renderCompareStatRow("Goals", p1.goals, p2.goals)}
                ${renderCompareStatRow("Assists", p1.assists, p2.assists)}
                ${renderCompareStatRow("Pace", p1.stats.pace, p2.stats.pace)}
                ${renderCompareStatRow("Passing", p1.stats.pass, p2.stats.pass)}
            </div>
        </div>
    `;
    body.innerHTML = html;
}

function changeCompareSelection(slotNum, playerId) {
    if (slotNum === 1) activeComparePlayer1 = playerId;
    else activeComparePlayer2 = playerId;
    renderCompareInterface();
}

function renderCompareStatRow(label, v1, v2) {
    const isNum = typeof v1 === "number";
    const w1 = isNum && v1 > v2 ? "winner" : "";
    const w2 = isNum && v2 > v1 ? "winner" : "";
    return `
        <div class="compare-stat-row">
            <span class="compare-val ${w1}">${v1}</span>
            <span class="compare-label">${label}</span>
            <span class="compare-val ${w2}">${v2}</span>
        </div>
    `;
}

// ==========================================
// SOCIAL LOGINS & LINK SHARING
// ==========================================
function openLoginModal() {
    document.getElementById("login-modal").style.display = "flex";
}

function closeLoginModal() {
    document.getElementById("login-modal").style.display = "none";
}

function simulateLogin(provider) {
    appState.user.username = "Adam (Logged in)";
    appState.user.isLoggedIn = true;
    saveState();
    closeLoginModal();
    updateLoginHeaderBtn();
    navigateTo("profile");
    pushNotification("fa-user-check", `Logged in successfully via ${provider}!`);
}

function updateLoginHeaderBtn() {
    const btn = document.getElementById("login-header-btn");
    btn.style.display = appState.user.isLoggedIn ? "none" : "flex";
}

let activeShareMatchId = "";
function openShareModal(matchId) {
    activeShareMatchId = matchId;
    document.getElementById("share-modal").style.display = "flex";
    document.getElementById("share-link-input").value = `http://kickzone.io/match/${matchId}`;
}

function closeShareModal() {
    document.getElementById("share-modal").style.display = "none";
}

function copyShareLink() {
    const input = document.getElementById("share-link-input");
    input.select();
    navigator.clipboard.writeText(input.value);
    alert("Match share link copied to clipboard!");
    closeShareModal();
}

// ==========================================
// HELPERS & MOCK MATCH TICKS
// ==========================================
function getPlayer(id) { return fallbackDB.players.find(p => p.id === id); }
function getTeam(id) { return fallbackDB.teams.find(t => t.id === id); }
function getTeamPlayers(teamId) { return fallbackDB.players.filter(p => p.teamId === teamId); }
function getMatch(id) { return fallbackDB.matches.find(m => m.id === id); }

function renderPlayerNode(p) {
    const hasDetails = p.id ? `onclick="event.stopPropagation(); navigateTo('player-details', '${p.id}')"` : "";
    return `
        <div class="player-node ${p.nodeClass}" style="position:absolute; left:${p.x}%; top:${p.y}%;" ${hasDetails}>
            <div class="player-node-number">${p.num}</div>
            <div class="player-node-name">${p.name}</div>
        </div>
    `;
}

function renderStatRow(title, val1, val2, suffix = "") {
    const num1 = parseFloat(val1);
    const num2 = parseFloat(val2);
    const total = num1 + num2;
    const w1 = total > 0 ? (num1 / total) * 100 : 50;
    const w2 = total > 0 ? (num2 / total) * 100 : 50;
    return `
        <div class="stat-row">
            <div class="stat-info">
                <span>${val1}${suffix}</span>
                <span class="stat-title">${title}</span>
                <span>${val2}${suffix}</span>
            </div>
            <div class="stat-bar-container">
                <div class="stat-bar-team1" style="width: ${w1}%"></div>
                <div class="stat-bar-team2" style="width: ${w2}%"></div>
            </div>
        </div>
    `;
}

function renderMatchChat() {
    return `
        <div class="chat-box">
            <div class="chat-messages" id="match-chat-messages">
                ${appState.chatMessages.map(m => `
                    <div class="chat-message">
                        <img src="${m.avatar}" class="chat-message-avatar">
                        <div class="chat-message-body">
                            <div class="chat-message-user">${m.sender}</div>
                            <div>${m.text}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="chat-input-area">
                <input type="text" id="chat-msg-input" placeholder="${appState.lang === 'ar' ? 'اكتب تعليقك...' : 'Type your comment...'}" onkeypress="handleChatEnter(event)">
                <button onclick="sendChatMessage()"><i class="fa-solid fa-paper-plane"></i></button>
            </div>
        </div>
    `;
}

function handleChatEnter(e) { if (e.key === "Enter") sendChatMessage(); }

function sendChatMessage() {
    const input = document.getElementById("chat-msg-input");
    if (!input || !input.value.trim()) return;
    const msg = { sender: appState.user.username, text: input.value.trim(), avatar: appState.user.avatar };
    appState.chatMessages.push(msg);
    input.value = "";
    
    const log = document.getElementById("match-chat-messages");
    if (log) {
        const item = document.createElement("div");
        item.className = "chat-message";
        item.innerHTML = `<img src="${msg.avatar}" class="chat-message-avatar"><div class="chat-message-body"><div class="chat-message-user">${msg.sender}</div><div>${msg.text}</div></div>`;
        log.appendChild(item);
        log.scrollTop = log.scrollHeight;
    }
}

function drawHexagon(canvasId, values) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const center = 100;
    const maxRadius = 75;
    ctx.clearRect(0, 0, 200, 200);
    
    for (let r = 0.2; r <= 1.0; r += 0.2) {
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI) / 3 - Math.PI / 2;
            ctx.lineTo(center + maxRadius * r * Math.cos(angle), center + maxRadius * r * Math.sin(angle));
        }
        ctx.closePath();
        ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
        ctx.stroke();
    }
    
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
        const score = (values[i] || 70) / 100;
        const angle = (i * Math.PI) / 3 - Math.PI / 2;
        ctx.lineTo(center + maxRadius * score * Math.cos(angle), center + maxRadius * score * Math.sin(angle));
    }
    ctx.closePath();
    ctx.fillStyle = "rgba(239, 68, 68, 0.45)";
    ctx.fill();
    ctx.strokeStyle = "var(--primary)";
    ctx.lineWidth = 2;
    ctx.stroke();
}

function renderCommunityPoll(p) {
    const totalVotes = p.votes.reduce((a,b) => a+b, 0);
    const hasVoted = appState.pollsVoted.includes(p.id);
    
    let html = `
        <div class="poll-container" style="margin-bottom:24px;">
            <h4 style="margin-bottom:8px;">${p.question}</h4>
            <div style="display:flex; flex-direction:column; gap:8px;">
    `;
    p.options.forEach((opt, idx) => {
        const percent = totalVotes > 0 ? Math.round((p.votes[idx] / totalVotes) * 100) : 0;
        html += `
            <div class="poll-option-row" onclick="submitPollVote('${p.id}', ${idx})">
                <div class="poll-bg" style="width:${hasVoted ? percent : 0}%"></div>
                <div class="poll-option-text">
                    <span>${opt}</span>
                    <span>${hasVoted ? `${percent}%` : ''}</span>
                </div>
            </div>
        `;
    });
    html += `</div></div>`;
    return html;
}

function submitPollVote(pollId, idx) {
    if (appState.pollsVoted.includes(pollId)) return;
    const poll = fallbackDB.polls.find(p => p.id === pollId);
    poll.votes[idx]++;
    appState.pollsVoted.push(pollId);
    navigateTo("community");
}

function renderFantasySlot(slotIdx, pos) {
    const pId = appState.fantasyTeam[slotIdx];
    if (pId) {
        const player = getPlayer(pId);
        return `
            <div class="fantasy-player-slot" onclick="openFantasySelector(${slotIdx}, '${pos}')">
                <div class="fantasy-slot-circle filled">
                    <img src="https://images.unsplash.com/photo-1540747737956-37872404a82a?auto=format&fit=crop&w=80&q=80" class="fantasy-slot-image">
                </div>
                <span class="fantasy-slot-name">${player.name}</span>
            </div>
        `;
    } else {
        return `
            <div class="fantasy-player-slot" onclick="openFantasySelector(${slotIdx}, '${pos}')">
                <div class="fantasy-slot-circle"><i class="fa-solid fa-plus"></i></div>
                <span class="fantasy-slot-name" style="color:var(--text-muted)">${pos}</span>
            </div>
        `;
    }
}

function openFantasySelector(slotIdx, pos) {
    const candidates = fallbackDB.players.filter(p => pos === "GK" ? p.pos === "GK" || p.rating < 80 : p.pos === pos);
    let html = `<div style="display:flex; flex-direction:column; gap:8px; padding:16px;">`;
    candidates.forEach(p => {
        html += `
            <button class="popular-league-item" style="text-align:left; width:100%" onclick="selectFantasyPlayer(${slotIdx}, '${p.id}')">
                <span>${p.name} (Rating ${p.rating})</span>
                <span style="font-weight:700; color:var(--primary);">${p.value}</span>
            </button>
        `;
    });
    html += `</div>`;
    openModalCustomHTML(`Choose player for Slot ${pos}`, html);
}

function selectFantasyPlayer(slotIdx, playerId) {
    appState.fantasyTeam[slotIdx] = playerId;
    saveState();
    closeCompareModal();
    navigateTo("profile");
}

function openModalCustomHTML(title, bodyHTML) {
    const modal = document.getElementById("compare-modal");
    modal.style.display = "flex";
    const body = document.getElementById("compare-modal-body");
    body.innerHTML = bodyHTML;
    const header = modal.querySelector(".compare-modal-header h2 span");
    header.textContent = title;
}

function autofillFantasy() {
    appState.fantasyTeam = ["ashour", "bellingham", "neymar", "ronaldo", "salah"];
    saveState();
    navigateTo("profile");
}

function updateMockMatches() {
    fallbackDB.matches.forEach(m => {
        if (m.status === "live") {
            m.liveTimer++;
            m.time = `${m.liveTimer}'`;
            if (m.liveTimer % 11 === 0) {
                m.homeScore++;
                pushNotification("fa-futbol", `Goal! Home team scored in ${m.leagueName}!`);
            }
        }
    });
    if (appState.activePage === "match-details" || appState.activePage === "home" || appState.activePage === "live") {
        navigateTo(appState.activePage, appState.activeParam);
    }
}

function pushNotification(icon, text) {
    appState.activityLog.unshift({ icon, text });
    renderActivityLog();
}

function renderActivityLog() {
    const log = document.getElementById("activity-log");
    if (!log) return;
    log.innerHTML = "";
    appState.activityLog.forEach(act => {
        const item = document.createElement("div");
        item.className = "activity-item";
        item.innerHTML = `<i class="fa-solid ${act.icon}"></i><div>${act.text}</div>`;
        log.appendChild(item);
    });
}

function toggleNotificationsDrawer() {
    const drawer = document.getElementById("notifications-drawer");
    drawer.style.display = drawer.style.display === "none" ? "flex" : "none";
}

function toggleNotifSetting(key) {
    appState.notifications[key] = !appState.notifications[key];
    saveState();
}

let activeMatchTab = "stats";
window.onload = initApp;
function toggleFollowTeam(teamId) {
    const list = appState.favorites.teams;
    if (list.includes(teamId)) {
        appState.favorites.teams = list.filter(id => id !== teamId);
    } else {
        list.push(teamId);
    }
    saveState();
    navigateTo("team-details", teamId);
}
function toggleFollowPlayer(playerId) {
    const list = appState.favorites.players;
    if (list.includes(playerId)) {
        appState.favorites.players = list.filter(id => id !== playerId);
    } else {
        list.push(playerId);
    }
    saveState();
    navigateTo("player-details", playerId);
}
function simulateShareMatch(matchId) {
    openShareModal(matchId);
}
function closeShareModal() {
    document.getElementById("share-modal").style.display = "none";
}
function shareToSocial(channel) {
    alert(`Shared successfully to ${channel.toUpperCase()}`);
    closeShareModal();
}
function simulateWatchHighlight(title) {
    alert(`Watching video highlights: ${title}`);
}
function filterMatchesByDate(date) {
    alert(`Filtering matches for date: ${date}`);
}
function closeLoginModal() {
    document.getElementById("login-modal").style.display = "none";
}
function openLoginModal() {
    document.getElementById("login-modal").style.display = "flex";
}
function simulateLogin(provider) {
    appState.user.username = "Adam (Logged in)";
    appState.user.isLoggedIn = true;
    saveState();
    closeLoginModal();
    updateLoginHeaderBtn();
    navigateTo("profile");
    pushNotification("fa-user-check", `Logged in via ${provider}!`);
}
