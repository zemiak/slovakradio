/* global RtvsPlaylistParser, RadiaSKPlaylistParser */

var RadioPlaylistParser = {
    getParsedPlaylist: function(response) {
        if (response.indexOf("snippet-playlist") > -1) {
            return RtvsPlaylistParser.getParsedPlaylist(response);
        }

        return RadiaSKPlaylistParser.getParsedPlaylist(response);
    },

    encode: function(text) {
        return text.replace("&", "&amp;");
    }
};
