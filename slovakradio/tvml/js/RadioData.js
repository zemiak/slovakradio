var RadioData = {
    "rtvs": {
        "streamUrl": "http://live.slovakradio.sk:8000/XXX_QQQ.mp3",
        "playlistUrl": "http://slovensko.rtvs.sk/json/radio_playlist.json?channel=XXX",
    },

    "collections": {
        "favorites": {
            "title": "Obľúbené",
            "description": "Rádiá označené ako obľúbené",
            "items": {}
        },
        "rtvs": {
            "title": "RTVS",
            "description": "Rádiá RTVS",
            "items": ["fm", "slovensko", "junior", "devin", "klasika", "regina-ba", "regina-bb", "regina-ke", "litera", "rsi", "patria"]
        },
    },

    "relations": {
        "rock": ["fm"],
        "classic": ["devin", "klasika"],
        "news": ["slovensko", "regina-ba", "regina-bb", "regina-ke"]
    },

    "radios": {
        "slovensko": {
            "relation": "news",
            "collection": "rtvs",
            "kind": "rtvs",
            "stream": "Slovensko",
            "id": 12,
            "title": "Rádio Slovensko",
            "description": "Rádio Slovensko je prvá programová služba Slovenského rozhlasu. Dvadsaťštyri hodín denne prináša aktuálne spravodajstvo, nepretržité informácie o"
                + " doprave a počasí, množstvo publicistických programov, rozhovory so zaujímavými ľuďmi, priame prenosy zo športových a iných spoločenských podujatí."
                + " Hrá príjemnú hudbu a ponúka relax. Rádio Slovensko je v neustálom kontakte so svojimi poslucháčmi prostredníctvom interaktívneho vysielania a diskusných"
                + " relácií, v ktorých prezentuje široké spektrum názorov. Významnú pozornosť venuje dianiu v oblasti kultúry, vo večerných hodinách nájdete v programe"
                + " čítanie na pokračovanie, rozhlasovú hru, hudobnú a náboženskú publicistiku. Rádio Slovensko – vaše rádio, vaše Slovensko."
        },

        "regina-ba": {
            "relation": "news",
            "collection": "rtvs",
            "kind": "rtvs",
            "stream": "Regina_BA",
            "id": 9,
            "title": "Rádio Regina Bratislava",
            "description": "V autonómnom vysielaní bratislavského štúdia Rádia Regina dominujú v pracovných dňoch relácie kontaktného charakteru s poslucháčmi."
                + " Je to Rádiobudík (5:05 – 8:00 hod.), Magazín Rádia Regina (9:05 – 12:00 hod.) a Mozaika regiónu (14:05 – 16.00 hod.). V reláciách si poslucháči"
                + " nájdu jednak informácie o dianí v obciach a mestách Bratislavského, Trnavského, Nitrianskeho a Trenčianskeho kraja, ale vo vysielaní sa striedajú"
                + " aj príspevky občianskej publicistiky, poradenstvo, vzdelávanie i osveta."
        },

        "devin": {
            "relation": "classic",
            "collection": "rtvs",
            "kind": "rtvs",
            "stream": "Devin",
            "id": 1,
            "title": "Rádio Devín",
            "description": "Rádio Devín, programová služba dávajúca priestor umeleckým, literárno-dramatickým, umeno-vedným rozhlasovým útvarom,"
                + " ako aj hudobným žánrom nekomerčného typu. Klasická hudba, jazz, alternatíva, art rock, folk, šansón, experimentálna hudba..."
        },

        "fm": {
            "relation": "rock",
            "collection": "rtvs",
            "kind": "rtvs",
            "stream": "FM",
            "id": 2,
            "title": "Rádio_FM",
            "description": "Rádio_FM je hudobné rádio s presahom do kultúrneho priestoru orientovaného na náročnejšieho, mlado zmýšľajúceho poslucháča."
                + " Sme súčasťou verejnoprávneho Rozhlasu a televízie Slovenska (RTVS). Už na prvé počutie sa líšime od zvyšku slovenského éteru hudbou i slovom."
                + " V playlistoch nájdete to najlepšie, čo na domácej i zahraničnej scéne vzniká, od indie rocku cez dubstep, hip-hop, world music, metal, až po"
                + " tanečnú elektronickú hudbu či džez. Nechýbajú exkluzívne živé koncerty z vlastných štúdií alebo z domácich a zahraničných festivalov."
                + " Rádio_FM však nie je iba o hudbe, ale aj o témach, ktoré rezonujú, o ktorých treba hovoriť nahlas. Otvárame kauzy, prinášame zaujímavý pohľad"
                + " na dianie okolo nás cez vlastnú publicistiku. Podporujeme novú slovenskú hudbu. Aj vďaka nej vznikli ocenenia Radio_Head Awards."
                + " Skrátka, nechceme byť najpočúvanejšie, ale najpočúvateľnejšie rádio na Slovensku."
        },

        "patria": {
            "relation": null,
            "collection": "rtvs",
            "kind": "rtvs",
            "stream": "Patria",
            "id": 7,
            "title": "Rádio Patria",
            "description": "Közép-Európában a húszas évek derekán kezdődött a rendszeres rádiózás. Szlovákia esetében a gyökerek egészen 1926-ig nyúlnak vissza."
                + " Az adás Pozsonyban már az első Csehszlovák Köztársaság idején 1926 októberében megindult. Néhány hónappal később 1927 áprilisától már Kassáról"
                + " is sugározni kezdett a rádió."
        },

        "klasika": {
            "relation": "classic",
            "collection": "rtvs",
            "kind": "rtvs",
            "stream": "Klasika",
            "id": 4,
            "title": "Rádio Klasika",
            "description": "Rádio Klasika, siedmy okruh Slovenského rozhlasu, je digitálna programová služba, venovaná klasickej hudbe všetkých období a foriem,"
                + " od renesancie cez romantizmus až po hudobnú modernu, od klavírnych miniatúr cez komorné skladby až po symfónie a opery."
        },

        "litera": {
            "relation": null,
            "collection": "rtvs",
            "kind": "rtvs",
            "stream": "Litera",
            "id": 5,
            "title": "Rádio Litera",
            "description": "Rádio Litera je ôsmy okruh Slovenského rozhlasu a spolu s Rádiom Klasika a Rádiom Junior patrí k novým digitálnym programovým službám."
                + " Je jediným projektom v slovenskom rádiovom priestore, ktorý ponúka 24-hodinové slovné, umelecké a literárno-dramatické programy. Vysiela poéziu,"
                + " prózu, drámu a publicistiku - programy zamerané na intelektuálnejších poslucháčov od 15 rokov, ktorí majú radi hovorené slovo."
                + " Svoje vysielanie spustilo 15. júla 2009."
        },

        "junior": {
            "relation": null,
            "collection": "rtvs",
            "kind": "rtvs",
            "stream": "Junior",
            "id": 3,
            "title": "Rádio Junior",
            "description": "Rádio Junior - Slovenský rozhlas 9 je digitálna programová služba Slovenského rozhlasu adresovaná najmladším poslucháčom."
        },

        "regina-bb": {
            "relation": "news",
            "collection": "rtvs",
            "kind": "rtvs",
            "stream": "Regina_BB",
            "id": 10,
            "title": "Rádio Regina Banská Bystrica",
            "description": "Dňa 5. 9. 1957 sa po prvýkrát samostatnou spravodajskou a publicistickou  reláciou prihlásilo v rozhlasovom éteri banskobystrické štúdio"
                + " vtedajšieho Československého rozhlasu. Rozhlasové vysielanie z Banskej Bystrice malo v tom čase už za sebou krátku, ale dôstojnú kapitolu"
                + " v podobe Slobodného slovenského vysielača počas SNP, no po skončení 2. svetovej vojny ho neobnovili."
        },

        "regina-ke": {
            "relation": "news",
            "collection": "rtvs",
            "kind": "rtvs",
            "stream": "Regina_KE",
            "id": 11,
            "title": "Rádio Regina Košice",
            "description": "Rádio Regina - štúdio Košice zabezpečuje autonómne regionálne vysielanie na východnom Slovensku a participuje na príprave"
                + " spoločného vysielania Rádia Regina."
        },

        "rsi": {
            "relation": null,
            "collection": "rtvs",
            "kind": "rtvs",
            "stream": "RSI",
            "id": null,
            "title": "Rádio Slovensko International",
            "description": ""
        },
    }
};
