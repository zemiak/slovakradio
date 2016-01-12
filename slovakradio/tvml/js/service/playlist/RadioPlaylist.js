/* global Presenter, RadioPlayer, RadioRepository, LOG, RadioPlaylistParser */

var RadioPlaylist = {
    playlists: {},

    getPlaylist: function(radioName) {
        var playlist = RadioPlaylist.playlists[radioName];
        if (!playlist) {
            LOG.log("getPlaylist() for " + radioName + " -- empty, not loaded yet");
            return []; // not loaded yet //
        }

        LOG.log("getPlaylist() for " + radioName + " -- " + playlist.length + " items");
        return playlist;
    },

    getRenderedPlaylist: function(radioName) {
        var template = Presenter.loader.loadBundleResource("templates/Playlist.mustache");
        var text = Mustache.render(template, {playlist: RadioPlaylist.getPlaylist(radioName)});
        LOG.log("Rendered playlist for " + radioName + " as '" + text + "'");
        return text;
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
        LOG.log("Playlist parsed for " + radioName + ": " + RadioPlaylist.playlists[radioName].length + " items");

        if (Presenter.getRadioNameFromPage() !== radioName) {
            LOG.log("RadioPlaylist.playlistLoaded: not replaced the playlist on page, because we are on " + Presenter.getRadioNameFromPage());
            return;
        }

        setTimeout(function(){RadioPlaylist.refreshPlaylist(radioName);}, 60000); // refresh the radio playlist again after 60 seconds //

        var doc = Presenter.getCurrentDocument();
        var ele = doc.getElementById("playlist");
        LOG.log("Playlist for " + radioName + " goes into " + ele);
        ele.innerHTML = RadioPlaylist.getRenderedPlaylist(radioName);
        LOG.log("RadioPlaylist.playlistLoaded: Replaced playlist content for " + radioName + ". Another refresh after 60s. " + ele.innerHTML);
    }
};
