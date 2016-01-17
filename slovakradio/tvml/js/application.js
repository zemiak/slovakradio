/* global App, ResourceLoaderLocal, JavascriptLogger, Presenter, navigationDocument */

var resourceLoader;
var resourceLoaderLocal;
var LOG;

App.onLaunch = function(options) {
    resourceLoaderLocal = ResourceLoaderLocal.create();
    LOG = JavascriptLogger.create();

    var javascriptFiles = [
        resourceLoaderLocal.scriptUrl("service/Presenter.js"),
        resourceLoaderLocal.scriptUrl("data/RadioData.js"),
        resourceLoaderLocal.scriptUrl("service/RadioRepository.js"),
        resourceLoaderLocal.scriptUrl("service/ApplicationStorage.js"),
        resourceLoaderLocal.scriptUrl("service/RadioPlayer.js"),
        resourceLoaderLocal.scriptUrl("service/Favorites.js"),
        resourceLoaderLocal.scriptUrl("service/DataUpdater.js"),
        resourceLoaderLocal.scriptUrl("service/playlist/RadioPlaylist.js"),
        resourceLoaderLocal.scriptUrl("service/playlist/RadioPlaylistParser.js"),
        resourceLoaderLocal.scriptUrl("service/playlist/RtvsPlaylistParser.js"),
        resourceLoaderLocal.scriptUrl("service/playlist/RadiaSKPlaylistParser.js"),
        resourceLoaderLocal.scriptUrl("lib/mustache.min.js")
    ];

    evaluateScripts(javascriptFiles, function(success) {
        if(success) {
            DataUpdater.check();
            Presenter.options = options;
            Presenter.loader = resourceLoaderLocal;
            Presenter.navigate("Main");
        } else {
            var errorDoc = createAlert("Evaluate Scripts Error", "Error attempting to evaluate external JavaScript files.");
            navigationDocument.presentModal(errorDoc);
        }
    });
};


var createAlert = function(title, description) {
    var alertString = '<?xml version="1.0" encoding="UTF-8" ?>'
        + '<document><alertTemplate><title>' + title + '</title>'
        + '<description>' + description + '</description>'
        + '</alertTemplate></document>';

    var parser = new DOMParser();

    var alertDoc = parser.parseFromString(alertString, "application/xml");

    return alertDoc;
};
