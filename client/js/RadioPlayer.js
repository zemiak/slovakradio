var RadioPlayer = {
    player: null,

    stop: function() {
        if (RadioPlayer.player) {
            RadioPlayer.player.stop();
        }
    },

    play: function(radioName) {
        if (! RadioPlayer.player) {
            RadioPlayer.stop();
            RadioPlayer.player = new Player();
            RadioPlayer.player.playlist = new Playlist();
        }

        RadioPlayer.player.playlist.pop(); // clear the playlist

        var mediaItem = new MediaItem("audio", RadioData.getStreamUrl(radioName));
        mediaItem.artworkImageURL = Presenter.BaseUrl + "images/" + radioName + ".png";

        mediaItem.title = RadioData[radioName].title;
        mediaItem.description = RadioData[radioName].description;

        RadioPlayer.player.playlist.push(mediaItem);
        RadioPlayer.player.present();
        RadioPlayer.player.play();
    }
};
