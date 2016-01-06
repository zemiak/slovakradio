var Template = function() {
    var qualityText = Settings.isHighQuality() ? "vysoká" : "normálna";

    return `<document>
<alertTemplate id="template-data" data-template="Settings">
    <title>Nastavenia</title>
    <description>
    Nastavenia prehrávania. Je nastavená ${qualityText} kvalita. Jednoduchý prehrávač rádií RTVS (C) zemiak, pozri https://github.com/zemiak/slovakradio. Licencia BSD. Artwork (C) RTVS, SITA.
    Verzia ${Presenter.options.Version}
    </description>

    <button action="Settings.highQuality()">
        <text>Vysoká kvalita</text>
    </button>
    <button action="Settings.lowQuality()">
        <text>Normálna kvalita</text>
    </button>

    <button action="Presenter.navigate('Main')">
        <text>Naspäť</text>
    </button>
</alertTemplate></document>
`;
}
