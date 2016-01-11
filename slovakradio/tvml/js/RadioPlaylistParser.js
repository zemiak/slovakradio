var RadioPlaylistParser = {
    getParsedPlaylist: function(response) {
        if (response.contains("snippet-playlist")) {
            return RtvsPlaylistParser.getParsedPlaylist(response);
        }

        return RadiaSKPlaylistParser.getParsedPlaylist(response);
    },

    encode: function(text) {
        return text.replace("&", "&amp;");
    }
};
