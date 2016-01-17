var Favorites = {
    get: function() {
        return ApplicationStorage.get("favorites", []);
    },

    set: function(favs) {
        ApplicationStorage.set("favorites", favs);
    },

    isFavorite: function(radioName) {
        var favs = Favorites.get();
        return favs.indexOf(radioName) > -1;
    },

    toggle: function(radioName) {
        var favs = Favorites.get();
        var pos = favs.indexOf(radioName);
        var isFavorite = false;

        if (pos > -1) {
            favs.splice(pos, 1);
        } else {
            favs.push(radioName);
            isFavorite = true;
        }

        Favorites.set(favs);
        Favorites.refreshFavorites();
    },

    hasFavorites: function() {
        return Favorites.get().length > 0;
    },

    refreshFavorites: function() {
        var current = Presenter.getMainDocument();
        var replacement = Presenter.getDocumentFromTemplate("Main");
        Presenter.replaceDocument(replacement, current);

        var current = Presenter.getCurrentDocument();
        var replacement = Presenter.getDocumentFromTemplate("Detail");
        Presenter.replaceDocument(replacement, current);
    }
};
