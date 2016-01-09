var RadioPlaylist = {
    playlists: {},

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

        // parse playlist, store it to RadioPlaylist.playlists //

        if (!RadioPlaylist.isRadioPage(radioName)) {
            return;
        }

        // replace document with a new Detail //

        setTimeout(function(){RadioPlaylist.refreshPlaylist(radioName)}, 1000); // refresh the radio playlist again after 1 minute //
    },

    getPlaylistItemTemplate: function() {
        return Presenter.loader.loadBundleResource("PlaylistItem");
    },

    getRenderedPlaylist: function(radioName) {
        // take the playlist, render via template //
        return "";
    }
};
