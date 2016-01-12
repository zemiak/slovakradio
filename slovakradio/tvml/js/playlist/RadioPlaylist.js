/* global Presenter, RadioPlayer, RadioRepository, LOG, RadioPlaylistParser */

var RadioPlaylist = {
    playlists: {},

    getRenderedPlaylist: function(radioName) {
        var playlist = RadioPlaylist.playlists[radioName];
        if (!playlist) {
            return ""; // not loaded yet //
        }

        var template = Presenter.loader.loadBundleResource("PlaylistItem");
        var items = "";
        var i = 0;
        for (var item in playlist) {
            i++;
            items += template.replace("OOO", i).replace("TTT", item.title).replace("DDD", item.time);
        }

        return items;
    },

    refreshPlaylist: function(radioName) {
        if (!RadioPlayer.isMyRadioPlaying(radioName)) {
            return;
        }

        if (null === RadioRepository.getPlaylistUrl(radioName)) {
            return;
        }

        LOG.log("RadioPlaylist.refreshPlaylist: Refreshing playlist for " + radioName);
        var request = new XMLHttpRequest();
        request.responseType = "text";
        request.addEventListener("load", function(){RadioPlaylist.playlistLoaded(request);});
        request.data_radioName = radioName;
        request.open("GET", RadioRepository.getPlaylistUrl(radioName));
        request.send();
    },

    playlistLoaded: function(that) {
        var radioName = that.data_radioName;
        var response = that.responseText;

        RadioPlaylist.playlists[radioName] = RadioPlaylistParser.getParsedPlaylist(response);

        if (Presenter.getRadioNameFromPage() !== radioName) {
            LOG.log("RadioPlaylist.playlistLoaded: not replaced the playlist on page, because we are on " + Presenter.getRadioNameFromPage());
            return;
        }

        setTimeout(function(){RadioPlaylist.refreshPlaylist(radioName);}, 60000); // refresh the radio playlist again after 60 seconds //

        var doc = Presenter.getCurrentDocument();
        var ele = doc.getElementById("playlist");
        ele.innerHTML = RadioPlaylist.getRenderedPlaylist(radioName);
        LOG.log("RadioPlaylist.playlistLoaded: Replaced playlist content for " + radioName + ". Another refresh after 60s. " + ele.innerHTML);
    }
};
