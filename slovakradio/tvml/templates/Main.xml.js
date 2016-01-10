var MainTemplate = {
    width: 293,
    height: 161,

    renderCollections: function() {
        var text = "";
        var collections = RadioRepository.getCollections();
        for (collection of collections) {
            if ("favorites" === collection) {
                // render favorites //
            } else {
                text += MainTemplate.renderCollection(collection);
            }
        }

        return text;
    },

    renderCollection: function(name) {
        var data = RadioRepository.getCollectionData(name);
        var items = MainTemplate.renderItems(data);

        return `<listItemLockup><title>${data.title}</title><decorationLabel>${data.items.length}</decorationLabel>
            <relatedContent><grid><section>${items}</section></grid></relatedContent></listItemLockup>`;
    },

    renderItems: function(data) {
        var text = "";
        var items = data.items;
        for (key of items) {
            var data = RadioRepository.getRadioData(key);
            text += MainTemplate.renderItem(key, data);
        }

        return text;
    },

    renderItem: function(key, data) {
        return `<lockup action="RadioPlayer.setupDetail('${key}')">
        <img src="${Presenter.loader.imageUrl(key + ".png")}" width="${MainTemplate.width}" height="${MainTemplate.height}" />
        <title>${data.title}</title>
        </lockup>`;
    }
};

var Template = function() {
    var sections = MainTemplate.renderCollections();
    var items = `<lockup action="Presenter.navigate('Settings')">
    <img src="resource://button-checkmark" width="${MainTemplate.width}" height="${MainTemplate.height}" />
    <title>Nastavenia</title>
    </lockup>

    <lockup action="RadioPlayer.stop()">
    <img src="resource://button-more" width="${MainTemplate.width}" height="${MainTemplate.height}" />
    <title>Stop</title>
    </lockup>`;
    sections += `<listItemLockup><title>Nastavenia</title><decorationLabel>2</decorationLabel>
    <relatedContent><grid><section>${items}</section></grid></relatedContent></listItemLockup>`;

    var html = `<document>
<catalogTemplate mode="showcase" id="template-data" data-template="Main">
    <banner>
        <title>:RÁDIÁ SK</title>
    </banner>

    <list><section>
    ${sections}
    </section></list>
</catalogTemplate></document>
`;
    return html;
}
