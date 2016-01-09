var RadioPlaylistParser = {
    getParsedPlaylist: function(response) {
        // parse the html from RTVS //
        // playlist: array of {"title": songTitle, "time": songPlayTime}
        /*
<ul class="stations nav">
    <li class="list"><div class="inset">
        <span class="programmeTime">11:00</span><span class="title">Autumnist</span><span class="song">Some Ground (analogrunner Remix)</span></div></li>
    <li class="list"><div class="inset">
        <span class="programmeTime">10:57</span><span class="title">David Bowie</span><span class="song">Dollar Days</span></div></li>
    <li class="list"><div class="inset">
        <span class="programmeTime">10:52</span><span class="title">Wiley</span><span class="song">Standby</span></div></li>
    <li class="list"><div class="inset">
        <span class="programmeTime">10:50</span><span class="title">Best Coast</span><span class="song">Crazy For You</span></div></li>
    <li class="list"><div class="inset">
        <span class="programmeTime">10:44</span><span class="title">Billy Barman</span><span class="song">Mladým Chýba Vojna</span></div></li>
</ul>
         */

        var data = eval(response);
        if (!data.snippets) {
            LOG.log("Error: playlist data changed. snippets missing");
            return "";
        }

        if (!data.snippets["snippet-playlist"]) {
            LOG.log("Error: playlist data changed. snippet-playlist missing");
            return "";
        }

        data = data.snippets["snippet-playlist"].replace("\\n", "").replace("\\t", "");

        data = data.replace("<ul class=\"stations nav\">", "").replace("</span></div></li></ul>", "");
        data = data.replace("<li class=\"list\"><div class=\"inset\"><span class=\"programmeTime\">", "");
        data = data.replace("</span><span class=\"title\">", ",");
        data = data.replace("</span><span class=\"song\">", ": ");
        data = data.replace("</span></div></li>", "||")

        /*
11:00,Interpreter: Song Name||12:00,Interpreter: Song Name
         */

        
        return "";
    }
};
