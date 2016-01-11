var resourceLoader;
var resourceLoaderLocal;
var LOG;

App.onLaunch = function(options) {
    resourceLoaderLocal = ResourceLoaderLocal.create();
    LOG = JavascriptLogger.create();

    var javascriptFiles = [
        resourceLoaderLocal.scriptUrl("Presenter.js"),
        resourceLoaderLocal.scriptUrl("RadioData.js"),
        resourceLoaderLocal.scriptUrl("RadioRepository.js"),
        resourceLoaderLocal.scriptUrl("ApplicationStorage.js"),
        resourceLoaderLocal.scriptUrl("RadioPlayer.js"),
        resourceLoaderLocal.scriptUrl("RadioPlaylist.js"),
        resourceLoaderLocal.scriptUrl("RadioPlaylistParser.js"),
        resourceLoaderLocal.scriptUrl("RtvsPlaylistParser.js"),
        resourceLoaderLocal.scriptUrl("RadiaSKPlaylistParser.js")
    ];

    evaluateScripts(javascriptFiles, function(success) {
        if(success) {
            Presenter.options = options;
            Presenter.loader = resourceLoaderLocal;
            Presenter.navigate("Main");
        } else {
            var errorDoc = createAlert("Evaluate Scripts Error", "Error attempting to evaluate external JavaScript files.");
            navigationDocument.presentModal(errorDoc);
        }
    });
}


var createAlert = function(title, description) {
    var alertString = `<?xml version="1.0" encoding="UTF-8" ?>
    <document>
    <alertTemplate>
    <title>${title}</title>
    <description>${description}</description>
    </alertTemplate>
    </document>`

    var parser = new DOMParser();

    var alertDoc = parser.parseFromString(alertString, "application/xml");

    return alertDoc
}
