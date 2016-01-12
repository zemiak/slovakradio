/* global RadioPlaylistParser */

var RadiaSKPlaylistParser = {
    getParsedPlaylist: function(response) {
        var times = [];
        var titles = [];
        var lines = response.split("\n");
        for (var i in lines) {
            line = lines[i].trim();

            RadiaSKPlaylistParser.parseTime(line, times);
            RadiaSKPlaylistParser.parseTitle(line, titles);
        }

        var playlist = [];
        for (var i in times) {
            playlist.push({time: times[i], title: titles[i]});

            if (i > 9) {
                break;
            }
        }

        return playlist;
    },

    parseTime: function(line, times) {
        // <td class="cas">dnes<br /><b>07:48</b></td>
        var SEARCH = '<td class="cas">';
        var pos = line.indexOf(SEARCH);
        if (-1 === pos) {
            return;
        }
        pos = line.indexOf("<b>");

        times.push(RadioPlaylistParser.encode(line.substr(pos + 3, 5)));
    },

    parseTitle: function(line, titles) {
        // <td class="pesnicka"><b>Walk The Moon</b><br />Shut Up And Dance</td>
        var SEARCH = '<td class="pesnicka">';
        var pos = line.indexOf(SEARCH);
        if (-1 === pos) {
            return;
        }
        pos = line.indexOf("<b>");

        var title = line.substr(pos + 3);
        title = title.substr(0, title.length - 5);
        title = title.replace("</b>", "").replace("<br />", ": ");

        titles.push(RadioPlaylistParser.encode(title));
    }
};
