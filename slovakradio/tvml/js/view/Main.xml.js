/* global Presenter, resourceLoaderLocal, Mustache */

var Template = function() {
    var data = {collections: []};

    // favorites
    var items = [];
    var favorites = Favorites.get();
    var favoritesData = RadioRepository.getCollectionData("favorites");
    for (var j in favorites) {
        var key = favorites[j];
        var radioData = RadioRepository.getRadioData(key);
        items.push({"key": key,
                   "action": "RadioPlayer.setupDetail('" + key + "')",
                   "title": radioData.title, "width": Presenter.width, "height": Presenter.height,
                   "artwork": RadioRepository.getArtworkUrl(key)});
    }

    data.collections.push({"title": favoritesData.title, "itemsLength": items.length, "items": items, "key": "favorites"});

    // regular collections
    var collections = RadioRepository.getCollections();
    for (var i in collections) {
        var name = collections[i];
        if ("favorites" == name) {
            continue;
        }

        var items = [];
        var collectionData = RadioRepository.getCollectionData(name);

        for (var j in collectionData.items) {
            var key = collectionData.items[j];
            var radioData = RadioRepository.getRadioData(key);

            items.push({"key": key,
                       "action": "RadioPlayer.setupDetail('" + key + "')",
                       "title": radioData.title, "width": Presenter.width, "height": Presenter.height,
                       "artwork": RadioRepository.getArtworkUrl(key)});
        }

        data.collections.push({"title": collectionData.title, "itemsLength": items.length, "items": items, "key": name});
    }

    var items = [
        {"key": "info", "action": "Presenter.navigate('Info')", "title": "Informácie",
                 "width": Presenter.width, "height": Presenter.height, "artwork": Presenter.loader.imageUrl("info.png")},
        {"key": "stop", "action": "RadioPlayer.stop()", "title": "Stop",
                 "width": Presenter.width, "height": Presenter.height, "artwork": Presenter.loader.imageUrl("stop.png")}
    ];
    data.collections.push({"key": "actions", "title": "Akcie", "itemsLength": items.length, "items": items});

    var template = resourceLoaderLocal.loadBundleResource("templates/Main.mustache");
    return Mustache.render(template, data);
}
