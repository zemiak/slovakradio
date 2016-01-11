var Template = function() {
    return `<document>
<descriptiveAlertTemplate id="template-data" data-template="Info">
    <title>Nastavenia</title>
    <description>
        Jednoduchý prehrávač rádií RTVS (C) zemiak, pozri https://github.com/zemiak/slovakradio. Licencia BSD. Artwork (C) RTVS, SITA.
        Verzia ${Presenter.options.Version}
    </description>

    <row>
    <button action="Presenter.navigate('Main')">
        <text>Naspäť</text>
    </button>
    </row>
</descriptiveAlertTemplate></document>
`;
}
