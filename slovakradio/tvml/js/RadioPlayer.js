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

    setupDetail: function(radioName) {
        if (! RadioPlayer.player) {
            RadioPlayer.player = new Player();
            RadioPlayer.player.playlist = new Playlist();
        }

        RadioPlayer.player.playlist.pop(); // clear the playlist

        var mediaItem = new MediaItem("audio", RadioData.getStreamUrl(radioName));
        mediaItem.artworkImageURL = Presenter.loader.imageUrl(radioName + ".png");

        mediaItem.title = RadioData[radioName].title;
        mediaItem.description = RadioData[radioName].description;

        RadioPlayer.player.playlist.push(mediaItem);
        RadioPlayer.radioName = radioName;

        Presenter.navigate("Detail");
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
