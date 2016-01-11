var RadioRepository = {
    getRadioData: function(radioName) {
        return RadioData.radios[radioName];
    },

    getRelationData: function(relationName) {
        return RadioData.relations[relationName];
    },

    getCollectionData: function(collectionName) {
        return RadioData.collections[collectionName];
    },

    getRadios: function() {
        var keys = []
        var obj = RadioData.radios;
        for (key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                keys.push(key);
            }
        }

        return keys;
    },

    getRelations: function() {
        var keys = []
        var obj = RadioData.relations;
        for (key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                keys.push(key);
            }
        }

        return keys;
    },

    getCollections: function() {
        var keys = []
        var obj = RadioData.collections;
        for (key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                keys.push(key);
            }
        }

        return keys;
    },

    getStreamUrl: function(radioName) {
        var data = RadioRepository.getRadioData(radioName);
        return data.stream;
    },

    getPlaylistUrl: function(radioName) {
        var data = RadioRepository.getRadioData(radioName);
        return data.playlist;
    },

    getArtworkUrl: function(radioName) {
        var data = RadioRepository.getRadioData(radioName);

        if (data.artwork.indexOf("http") === -1) {
            return Presenter.loader.imageUrl(data.artwork);
        }

        return data.artwork;
    }
};
