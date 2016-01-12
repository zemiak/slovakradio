/* global LOG, RadioPlaylistParser */

var RtvsPlaylistParser = {
    getParsedPlaylist: function(response) {
        // <span class="programmeTime">11:00</span><span class="title">Autumnist</span><span class="song">Some Ground (analogrunner Remix)</span></div></li>
        var data = JSON.parse(response);
        if (!data.snippets) {
            LOG.log("Error: playlist data changed. snippets missing");
            return "";
        }

        if (!data.snippets["snippet-playlist"]) {
            LOG.log("Error: playlist data changed. snippet-playlist missing");
            return "";
        }

        data = data.snippets["snippet-playlist"];
        var times = [];
        var artists = [];
        var titles = [];

        var lines = data.split("\n");
        for (var i in lines) {
            line = lines[i].trim();
            RtvsPlaylistParser.parseTime(line, times);
            RtvsPlaylistParser.parseArtist(line, artists);
            RtvsPlaylistParser.parseTitle(line, titles);
        }

        var playlist = [];
        for (var i in times) {
            playlist.push({time: times[i], title: artists[i] + ": " + titles[i]});
        }

        return playlist;
    },

    parseTime: function(line, times) {
        var SEARCH = '"programmeTime">';
        var pos = line.indexOf(SEARCH);
        if (-1 === pos) {
            return;
        }
        var endPos = line.indexOf("</span>");

        times.push(RadioPlaylistParser.encode(line.substring(pos + SEARCH.length, endPos)));
    },

    parseTitle: function(line, titles) {
        var SEARCH = '"song">';
        var pos = line.indexOf(SEARCH);
        if (-1 === pos) {
            return;
        }
        var endPos = line.indexOf("</span>");

        titles.push(RadioPlaylistParser.encode(line.substring(pos + SEARCH.length, endPos)));
    },

    parseArtist: function(line, artists) {
        var SEARCH = '"title">';
        var pos = line.indexOf(SEARCH);
        if (-1 === pos) {
            return;
        }
        var endPos = line.indexOf("</span>");

        artists.push(RadioPlaylistParser.encode(line.substring(pos + SEARCH.length, endPos)));
    }
};
