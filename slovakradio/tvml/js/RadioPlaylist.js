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
        for (item of playlist) {
            i++;
            items += template.replace("OOO", i).replace("TTT", item.title).replace("DDD", item.time);
        }

        return items;
    },

    isRadioPage: function(radioName) {
        var name = Presenter.getDocumentName();
        var ele = Presenter.getDocumentDataElement();
        return null !== name && name === "Detail" && ele.getAttribute("data-radioName") === radioName;
    },

    refreshPlaylist: function(radioName) {
        if (!RadioPlaylist.isRadioPage(radioName)) {
            return;
        }

        var request = new XMLHttpRequest();
        request.responseType = "text";
        request.addEventListener("load", function(){RadioPlaylist.playlistLoaded(request)});
        request.data_radioName = radioName
        request.open("GET", RadioData.getPlaylistUrl(radioName));
        request.send();
    },

    playlistLoaded: function(that) {
        var radioName = that.data_radioName;
        var response = that.responseText;

        RadioPlaylist.playlists[radioName] = RadioPlaylistParser.getParsedPlaylist(response);

        if (!RadioPlaylist.isRadioPage(radioName)) {
            LOG.log("RadioPlaylist.playlistLoaded: not replaced the playlist on page, because we are not on the right page");
            return;
        }

        setTimeout(function(){RadioPlaylist.refreshPlaylist(radioName)}, 30000); // refresh the radio playlist again after 1 minute //

        var doc = Presenter.getCurrentDocument();
        var ele = doc.getElementById("playlist");
        ele.innerHTML = RadioPlaylist.getRenderedPlaylist(radioName);
        LOG.log("Replaced playlist content");
    }
};
