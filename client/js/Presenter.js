var Presenter = {
    makeDocument: function(resource) {
        if (!Presenter.parser) {
            Presenter.parser = new DOMParser();
        }
        var doc = Presenter.parser.parseFromString(resource, "application/xml");
        return doc;
    },

    modalDialogPresenter: function(xml) {
        navigationDocument.presentModal(xml);
    },

    pushDocument: function(xml) {
        navigationDocument.pushDocument(xml);
    },

    load: function(event) {
        var self = this;
        var ele = event.target;

        var radioName = ele.getAttribute("radioName");
        if (radioName) {
            var player = new Player();
            var playlist = new Playlist();

            var mediaItem = new MediaItem("audio", RadioData.getStreamUrl(radioName));
            mediaItem.artworkImageURL = self.BaseUrl + "images/" + radioName + ".png";

            mediaItem.title = RadioData[radioName].title;
            mediaItem.description = RadioData[radioName].description;

            player.playlist = playlist;
            player.playlist.push(mediaItem);
            player.present();
        }

        var template = ele.getAttribute("template");
        if (template) {
            resourceLoader.loadResource(self.BaseUrl + "templates/" + template + ".xml.js", function(resource) {
                var doc = Presenter.makeDocument(resource);
                doc.addEventListener("select", Presenter.load.bind(Presenter));
                Presenter.pushDocument(doc);
            });
        }
    }
}