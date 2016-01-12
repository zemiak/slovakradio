var RadioData = {
    "version": {
        "version": "2016-01-12 20:00",
        "motd": "Artwork enabled",
        "hasSeenMotd": true,
        "runScriptAfterUpgrade": null,
        "lastCheckedDay": 12
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
            "items": ["fm", "slovensko", "junior", "devin", "klasika", "regina-ba",
                "regina-bb", "regina-ke", "litera", "rsi", "patria"]
        },

        "fun": {
            "title": "FUN Rádio",
            "description": "FUN Rádio Streams",
            "items": ["fun-live", "fun-christmas", "fun-running", "fun-top20",
                "fun-dance", "fun-news", "fun-czsk", "fun-8090", "fun-hiphop",
                "fun-children", "fun-rock", "fun-love"]
        },

        "misc": {
            "title": "Ostatné",
            "description": "Slovenské rádiá nezaradené inde",
            "items": ["rockova-republika", "antena-rock", "jemne", "expres"]
        }
    },

    "relations": {
        "pop": ["fun-live", "expres", "fun-christmas", "fun-running", "fun-top20",
            "fun-dance", "fun-news", "fun-czsk", "fun-8090", "fun-hiphop"],
        "rock": ["fm", "rockova-republika", "antena-rock", "fun-rock"],
        "classic": ["devin", "klasika"],
        "news": ["slovensko", "regina-ba", "regina-bb", "regina-ke"],
        "children": ["junior", "fun-children"],
        "slow": ["jemne", "fun-love"]
    },

    "radios": {
        "expres": {
            "relation": "pop",
            "collection": "misc",
            "stream": "http://85.248.7.162:8000/128.mp3",
            "playlist": "http://www.radia.sk/radia/expres/playlist.html",
            "title": "Expres",
            "description": "Baví nás baviť vás",
            "artwork": "expres.png"
        },

        "jemne": {
            "relation": "slow",
            "collection": "misc",
            "stream": "http://stream.jemne.sk/jemne-hi.mp3",
            "playlist": "http://www.radia.sk/radia/jemne/playlist.html",
            "title": "Rádio Jemné",
            "description": "Hráme skvelú hudbu, ktorá sa vám páči, pohodovú, príjemnú, pri ktorej môžete pracovať, oddychovať, venovať sa rodine alebo len tak príjemne oddychovať",
            "artwork": "jemne.png"
        },

        "fun-love": {
            "relation": "slow",
            "collection": "fun",
            "stream": "http://stream.funradio.sk:8000/slow128.mp3",
            "playlist": "http://www.radia.sk/radia/fun-love-songs/playlist.html",
            "title": "Love Songs",
            "description": "Pesničky o láske",
            "artwork": "fun-love.png"
        },

        "fun-live": {
            "relation": "pop",
            "collection": "fun",
            "stream": "http://stream.funradio.sk:8000/fun128.mp3",
            "playlist": "http://www.radia.sk/radia/fun/playlist.html",
            "title": "Live",
            "description": "Živé vysielanie FUN rádia",
            "artwork": "fun-live.png"
        },

        "fun-christmas": {
            "relation": "pop",
            "collection": "fun",
            "stream": "http://stream.funradio.sk:8000/xmas128.mp3",
            "playlist": null,
            "title": "Christmas",
            "description": "Vianočná hudba FUN rádia",
            "artwork": "fun-christmas.png"
        },

        "fun-running": {
            "relation": "pop",
            "collection": "fun",
            "stream": "http://stream.funradio.sk:8000/running128.mp3",
            "playlist": "http://www.radia.sk/radia/fun-running/playlist.html",
            "title": "Running",
            "description": "Bežecká hudba FUN rádia",
            "artwork": "fun-running.png"
        },

        "fun-top20": {
            "relation": "pop",
            "collection": "fun",
            "stream": "http://stream.funradio.sk:8000/top20128.mp3",
            "playlist": "http://www.radia.sk/radia/fun-top-20/playlist.html",
            "title": "TOP 20",
            "description": "TOP 20 FUN rádia",
            "artwork": "fun-top20.png"
        },

        "fun-dance": {
            "relation": "pop",
            "collection": "fun",
            "stream": "http://stream.funradio.sk:8000/dance128.mp3",
            "playlist": "http://www.radia.sk/radia/fun-dance/playlist.html",
            "title": "Dance",
            "description": "Tanečná hudba FUN rádia",
            "artwork": "fun-dance.png"
        },

        "fun-news": {
            "relation": "pop",
            "collection": "fun",
            "stream": "http://stream.funradio.sk:8000/new128.mp3",
            "playlist": "http://www.radia.sk/radia/fun-novinky/playlist.html",
            "title": "Novinky",
            "description": "Novinky / TOP 20 FUN rádia",
            "artwork": "fun-news.png"
        },

        "fun-8090": {
            "relation": "pop",
            "collection": "fun",
            "stream": "http://stream.funradio.sk:8000/80-90-128.mp3",
            "playlist": "http://www.radia.sk/radia/fun-80-90-roky/playlist.html",
            "title": "80 - 90. Roky",
            "description": "80 - 90. ROKY FUN rádia",
            "artwork": "fun-8090.png"
        },

        "fun-hiphop": {
            "relation": "pop",
            "collection": "fun",
            "stream": "http://stream.funradio.sk:8000/hiphop128.mp3",
            "playlist": "http://www.radia.sk/radia/fun-hip-hop/playlist.html",
            "title": "HIP HOP",
            "description": "HIP - HOP FUN rádia",
            "artwork": "fun-hiphop.png"
        },

        "fun-children": {
            "relation": "pop",
            "collection": "fun",
            "stream": "http://stream.funradio.sk:8000/children128.mp3",
            "playlist": "http://www.radia.sk/radia/fun-pre-deti/playlist.html",
            "title": "Pre deti",
            "description": "Detský kanál FUN rádia",
            "artwork": "fun-children.png"
        },

        "fun-rock": {
            "relation": "rock",
            "collection": "fun",
            "stream": "http://stream.funradio.sk:8000/rock128.mp3",
            "playlist": "http://www.radia.sk/radia/fun-rock/playlist.html",
            "title": "ROCK",
            "description": "Rocková hudba FUN rádia",
            "artwork": "fun-rock.png"
        },

        "fun-czsk": {
            "relation": "pop",
            "collection": "fun",
            "stream": "http://stream.funradio.sk:8000/cs128.mp3",
            "playlist": "http://www.radia.sk/radia/fun-cz-sk/playlist.html",
            "title": "CZ-SK",
            "description": "Česko - Slovenská hudba FUN rádia",
            "artwork": "fun-czsk.png"
        },

        "rockova-republika": {
            "relation": "rock",
            "collection": "misc",
            "stream": "http://217.67.31.66:8000/republika128.mp3",
            "playlist": "http://www.radia.sk/radia/rockova-republika/playlist.html",
            "title": "Rocková republika",
            "description": "Rádio Rocková republika prináša rock z rockov sedemdesiatych až po súčasnosť",
            "artwork": "rockova-republika.png"
        },

        "antena-rock": {
            "relation": "rock",
            "collection": "misc",
            "stream": "http://stream.antenarock.sk/antena-hi.mp3",
            "playlist": "http://www.radia.sk/radia/antena-rock/playlist.html",
            "title": "Anténa Rock",
            "description": "Rádio Anténa Rock je rádio pre všetkých milovníkov rockovej hudby!",
            "artwork": "antena-rock.png"
        },

        "slovensko": {
            "relation": "news",
            "collection": "rtvs",
            "stream": "http://live.slovakradio.sk:8000/Slovensko_256.mp3",
            "playlist": "http://slovensko.rtvs.sk/json/radio_playlist.json?channel=12",
            "title": "Rádio Slovensko",
            "description": "Rádio Slovensko je prvá programová služba Slovenského rozhlasu. Dvadsaťštyri hodín denne prináša aktuálne spravodajstvo, nepretržité informácie o"
                + " doprave a počasí, množstvo publicistických programov, rozhovory so zaujímavými ľuďmi, priame prenosy zo športových a iných spoločenských podujatí."
                + " Hrá príjemnú hudbu a ponúka relax. Rádio Slovensko je v neustálom kontakte so svojimi poslucháčmi prostredníctvom interaktívneho vysielania a diskusných"
                + " relácií, v ktorých prezentuje široké spektrum názorov. Významnú pozornosť venuje dianiu v oblasti kultúry, vo večerných hodinách nájdete v programe"
                + " čítanie na pokračovanie, rozhlasovú hru, hudobnú a náboženskú publicistiku. Rádio Slovensko – vaše rádio, vaše Slovensko.",
            "artwork": "slovensko.png"
        },

        "regina-ba": {
            "relation": "news",
            "collection": "rtvs",
            "stream": "http://live.slovakradio.sk:8000/Regina_BA_256.mp3",
            "playlist": "http://slovensko.rtvs.sk/json/radio_playlist.json?channel=9",
            "title": "Rádio Regina Bratislava",
            "description": "V autonómnom vysielaní bratislavského štúdia Rádia Regina dominujú v pracovných dňoch relácie kontaktného charakteru s poslucháčmi."
                + " Je to Rádiobudík (5:05 – 8:00 hod.), Magazín Rádia Regina (9:05 – 12:00 hod.) a Mozaika regiónu (14:05 – 16.00 hod.). V reláciách si poslucháči"
                + " nájdu jednak informácie o dianí v obciach a mestách Bratislavského, Trnavského, Nitrianskeho a Trenčianskeho kraja, ale vo vysielaní sa striedajú"
                + " aj príspevky občianskej publicistiky, poradenstvo, vzdelávanie i osveta.",
            "artwork": "regina-ba.png"
        },

        "devin": {
            "relation": "classic",
            "collection": "rtvs",
            "stream": "http://live.slovakradio.sk:8000/Devin_256.mp3",
            "playlist": "http://slovensko.rtvs.sk/json/radio_playlist.json?channel=1",
            "title": "Rádio Devín",
            "description": "Rádio Devín, programová služba dávajúca priestor umeleckým, literárno-dramatickým, umeno-vedným rozhlasovým útvarom,"
                + " ako aj hudobným žánrom nekomerčného typu. Klasická hudba, jazz, alternatíva, art rock, folk, šansón, experimentálna hudba...",
            "artwork": "devin.png"
        },

        "fm": {
            "relation": "rock",
            "collection": "rtvs",
            "stream": "http://live.slovakradio.sk:8000/FM_256.mp3",
            "playlist": "http://slovensko.rtvs.sk/json/radio_playlist.json?channel=2",
            "title": "Rádio_FM",
            "description": "Rádio_FM je hudobné rádio s presahom do kultúrneho priestoru orientovaného na náročnejšieho, mlado zmýšľajúceho poslucháča."
                + " Sme súčasťou verejnoprávneho Rozhlasu a televízie Slovenska (RTVS). Už na prvé počutie sa líšime od zvyšku slovenského éteru hudbou i slovom."
                + " V playlistoch nájdete to najlepšie, čo na domácej i zahraničnej scéne vzniká, od indie rocku cez dubstep, hip-hop, world music, metal, až po"
                + " tanečnú elektronickú hudbu či džez. Nechýbajú exkluzívne živé koncerty z vlastných štúdií alebo z domácich a zahraničných festivalov."
                + " Rádio_FM však nie je iba o hudbe, ale aj o témach, ktoré rezonujú, o ktorých treba hovoriť nahlas. Otvárame kauzy, prinášame zaujímavý pohľad"
                + " na dianie okolo nás cez vlastnú publicistiku. Podporujeme novú slovenskú hudbu. Aj vďaka nej vznikli ocenenia Radio_Head Awards."
                + " Skrátka, nechceme byť najpočúvanejšie, ale najpočúvateľnejšie rádio na Slovensku.",
            "artwork": "fm.png"
        },

        "patria": {
            "relation": null,
            "collection": "rtvs",
            "stream": "http://live.slovakradio.sk:8000/Patria_256.mp3",
            "playlist": "http://slovensko.rtvs.sk/json/radio_playlist.json?channel=7",
            "title": "Rádio Patria",
            "description": "Közép-Európában a húszas évek derekán kezdődött a rendszeres rádiózás. Szlovákia esetében a gyökerek egészen 1926-ig nyúlnak vissza."
                + " Az adás Pozsonyban már az első Csehszlovák Köztársaság idején 1926 októberében megindult. Néhány hónappal később 1927 áprilisától már Kassáról"
                + " is sugározni kezdett a rádió.",
            "artwork": "patria.png"
        },

        "klasika": {
            "relation": "classic",
            "collection": "rtvs",
            "stream": "http://live.slovakradio.sk:8000/Klasika_256.mp3",
            "playlist": "http://slovensko.rtvs.sk/json/radio_playlist.json?channel=4",
            "title": "Rádio Klasika",
            "description": "Rádio Klasika, siedmy okruh Slovenského rozhlasu, je digitálna programová služba, venovaná klasickej hudbe všetkých období a foriem,"
                + " od renesancie cez romantizmus až po hudobnú modernu, od klavírnych miniatúr cez komorné skladby až po symfónie a opery.",
            "artwork": "klasika.png"
        },

        "litera": {
            "relation": null,
            "collection": "rtvs",
            "stream": "http://live.slovakradio.sk:8000/Litera_256.mp3",
            "playlist": "http://slovensko.rtvs.sk/json/radio_playlist.json?channel=5",
            "title": "Rádio Litera",
            "description": "Rádio Litera je ôsmy okruh Slovenského rozhlasu a spolu s Rádiom Klasika a Rádiom Junior patrí k novým digitálnym programovým službám."
                + " Je jediným projektom v slovenskom rádiovom priestore, ktorý ponúka 24-hodinové slovné, umelecké a literárno-dramatické programy. Vysiela poéziu,"
                + " prózu, drámu a publicistiku - programy zamerané na intelektuálnejších poslucháčov od 15 rokov, ktorí majú radi hovorené slovo."
                + " Svoje vysielanie spustilo 15. júla 2009.",
            "artwork": "litera.png"
        },

        "junior": {
            "relation": "children",
            "collection": "rtvs",
            "stream": "http://live.slovakradio.sk:8000/Junior_256.mp3",
            "playlist": "http://slovensko.rtvs.sk/json/radio_playlist.json?channel=3",
            "title": "Rádio Junior",
            "description": "Rádio Junior - Slovenský rozhlas 9 je digitálna programová služba Slovenského rozhlasu adresovaná najmladším poslucháčom.",
            "artwork": "junior.png"
        },

        "regina-bb": {
            "relation": "news",
            "collection": "rtvs",
            "stream": "http://live.slovakradio.sk:8000/Regina_BB_256.mp3",
            "playlist": "http://slovensko.rtvs.sk/json/radio_playlist.json?channel=10",
            "title": "Rádio Regina Banská Bystrica",
            "description": "Dňa 5. 9. 1957 sa po prvýkrát samostatnou spravodajskou a publicistickou  reláciou prihlásilo v rozhlasovom éteri banskobystrické štúdio"
                + " vtedajšieho Československého rozhlasu. Rozhlasové vysielanie z Banskej Bystrice malo v tom čase už za sebou krátku, ale dôstojnú kapitolu"
                + " v podobe Slobodného slovenského vysielača počas SNP, no po skončení 2. svetovej vojny ho neobnovili.",
            "artwork": "regina-bb.png"
        },

        "regina-ke": {
            "relation": "news",
            "collection": "rtvs",
            "stream": "http://live.slovakradio.sk:8000/Regina_KE_256.mp3",
            "playlist": "http://slovensko.rtvs.sk/json/radio_playlist.json?channel=11",
            "title": "Rádio Regina Košice",
            "description": "Rádio Regina - štúdio Košice zabezpečuje autonómne regionálne vysielanie na východnom Slovensku a participuje na príprave"
                + " spoločného vysielania Rádia Regina.",
            "artwork": "regina-ke.png"
        },

        "rsi": {
            "relation": "news",
            "collection": "rtvs",
            "stream": "http://live.slovakradio.sk:8000/RSI_256.mp3",
            "playlist": null,
            "title": "Rádio Slovensko International",
            "description": "We are RSI - Radio Slovakia International. We have been broadcasting since 1993, bringing you the juiciest info about our country in the heart"
                + " of Europe. We broadcast half hour shows 7 days a week, in English, French, German, Russian, Spanish and Slovak, via the internet and satellite.",
            "artwork": "rsi.png"
        }
    }
};
