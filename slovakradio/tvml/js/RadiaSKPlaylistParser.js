var RadiaSKPlaylistParser = {
    getParsedPlaylist: function(response) {
        var times = [];
        var titles = [];
        for (line of response.split("\n")) {
            line = line.trim();

            RadiaSKPlaylistParser.parseTime(line, times);
            RadiaSKPlaylistParser.parseTitle(line, titles);
        }

        var playlist = [];
        var i = 0;
        for (timestamp of times) {
            playlist.push({time: timestamp, title: titles[i]});
            i++;

            if (i > 4) {
                break;
            }
        }

        return playlist;
    },

    parseTime: function(line, times) {
        // <td class="cas">dnes<br /><b>07:48</b></td>
        var SEARCH = '<td class="cas">';
        var TIME_BREAK = "<br /><b>";
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
    },
};