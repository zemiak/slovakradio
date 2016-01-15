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

        if (pos > -1) {
            favs.splice(pos, 1);
        } else {
            favs.push(radioName);
        }

        Favorites.set(favs);
    },

    hasFavorites: function() {
        return Favorites.get().length > 0;
    }
};
