var RadiaSKPlaylistParser = {
    getParsedPlaylist: function(response) {
        // <td class="cas">dnes<br /><b>07:48</b></td>
        // <td class="pesnicka"><b>Walk The Moon</b><br />Shut Up And Dance</td>

        var TIME_BREAK = "<br /><b>";
        var times = [];
        var titles = [];
        var pos;
        for (line of response.split("\n")) {
            line = line.trim();
            if (line.indexOf('<td class="cas">') > -1) {
                pos = line.indexOf(TIME_BREAK);
                times.push(RadioPlaylistParser.encode(line.substring(pos + TIME_BREAK.length, 5)));
            }

            if (line.indexOf('<td class="pesnicka">') > -1) {
                line = line.replace('<td class="pesnicka"><b>', "");
                line = line.replace('</b><br />', ": ");
                line = line.replace('</td>', "");
                titles.push(RadioPlaylistParser.encode(line));
            }
        }

        if (times.length !== titles.length) {
            return null;
        }

        var playlist = [];
        var i = 0;
        for (timestamp of times) {
            playlist.push({time: timestamp, title: titles[i]});
            i++;
        }

        return playlist;
    }
};