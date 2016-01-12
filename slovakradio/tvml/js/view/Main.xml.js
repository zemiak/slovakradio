/* global Presenter, resourceLoaderLocal, Mustache */

var Template = function() {
    var width = 293;
    var height = 161;

    var data = {collections: []};
    var collections = RadioRepository.getCollections();
    for (var i in collections) {
        var name = collections[i];
        if ("favorites" === name) {
            // render favorites //
        } else {
            var items = [];
            var collectionData = RadioRepository.getCollectionData(name);
            for (var j in collectionData.items) {
                var key = collectionData.items[j];
                var radioData = RadioRepository.getRadioData(key);
                items.push({"action": "RadioPlayer.setupDetail('" + key + "')",
                           "title": radioData.title, "width": width, "height": height,
                           "artwork": RadioRepository.getArtworkUrl(key)});
            }
            data.collections.push({"title": collectionData.title, "itemsLength": items.length, "items": items});
        }
    }

    var items = [
        {"action": "Presenter.navigate('Info')", "title": "Informácie",
                 "width": width, "height": height, "artwork": "resource://button-checkmark"},
        {"action": "RadioPlayer.stop()", "title": "Stop",
                 "width": width, "height": height, "artwork": "resource://button-more"}
    ];
    data.collections.push({"title": "Akcie", "itemsLength": items.length, "items": items});

    var template = resourceLoaderLocal.loadBundleResource("templates/Main.mustache");
    return Mustache.render(template, data);
}
