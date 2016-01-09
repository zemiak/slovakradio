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
        request.onLoad = RadioPlaylist.playlistLoaded;
        request.data_radioName = radioName
        request.open("GET", RadioData.getPlaylistUrl(radioName));
        request.send();
    },

    playlistLoaded: function() {
        var radioName = this.data_radioName;
        var response = this.responseText;

        playlists[radioName] = RadioPlaylistParser.getParsedPlaylist(response);

        if (!RadioPlaylist.isRadioPage(radioName)) {
            return;
        }

        setTimeout(function(){RadioPlaylist.refreshPlaylist(radioName)}, 1000); // refresh the radio playlist again after 1 minute //
        RadioPlayer.setupDetailReplace(radioName);
    }
};
