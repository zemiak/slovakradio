var RadioPlayer = {
    player: null,
    radioName: null,
    playing: false,

    stop: function() {
        if (RadioPlayer.player) {
            RadioPlayer.player.stop();
            RadioPlayer.playing = false;
        }
    },

    isPlaying: function() {
        return RadioPlayer.playing;
    },

    setupDetailReplace: function(radioName) {
        RadioPlayer.setupDetailPageCore(radioName, true);
        Presenter.navigateReplace("Detail");
    },

    setupDetail: function(radioName) {
        RadioPlayer.setupDetailPageCore(radioName, false);
        Presenter.navigate("Detail");
    },

    setupDetailPageCore: function(radioName, replace) {
        if (! RadioPlayer.player) {
            RadioPlayer.player = new Player();
            RadioPlayer.player.playlist = new Playlist();
        }

        RadioPlayer.player.playlist.pop(); // clear the playlist

        var mediaItem = new MediaItem("audio", RadioRepository.getStreamUrl(radioName));
        mediaItem.artworkImageURL = Presenter.loader.imageUrl(radioName + ".png");

        var data = RadioRepository.getRadioData(radioName);
        mediaItem.title = data.title;
        mediaItem.description = data.description;

        RadioPlayer.player.playlist.push(mediaItem);
        RadioPlayer.radioName = radioName;

        RadioPlayer.player.addEventListener("stateDidChange", function(e) {
            LOG.log("RadioPlayer.setupDetailPageCore.stateDidChange: " + RadioPlayer.player.playbackState);
        }, false);
    },

    isMyRadioPlaying: function(radioName) {
        return RadioPlayer.radioName === radioName;
    },

    play: function() {
        if (RadioPlayer.player) {
            RadioPlayer.player.play();
            RadioPlayer.playing = true;
        }
    },

    getRadioName: function() {
        return RadioPlayer.radioName;
    }
};
