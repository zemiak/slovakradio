var Template = function() {
    var qualityText = Settings.isHighQuality() ? "vysoká" : "normálna";

    return `<document>
<descriptiveAlertTemplate id="template-data" data-template="Settings">
    <title>Nastavenia</title>
    <description>
        Jednoduchý prehrávač rádií RTVS (C) zemiak, pozri https://github.com/zemiak/slovakradio. Licencia BSD. Artwork (C) RTVS, SITA.
        Verzia ${Presenter.options.Version}
        Je nastavená: ${qualityText} kvalita.
    </description>

    <row>
    <button action="Settings.highQuality()">
        <text>Vysoká kvalita</text>
    </button>
    <button action="Settings.lowQuality()">
        <text>Normálna kvalita</text>
    </button>

    <button action="Presenter.navigate('Main')">
        <text>Naspäť</text>
    </button>
    </row>
</descriptiveAlertTemplate></document>
`;
}
