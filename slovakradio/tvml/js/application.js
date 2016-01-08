var resourceLoader;
var resourceLoaderLocal;

App.onLaunch = function(options) {
    resourceLoaderLocal = ResourceLoaderLocal.create();

    var javascriptFiles = [
        resourceLoaderLocal.scriptUrl("Presenter.js"),
        resourceLoaderLocal.scriptUrl("RadioData.js"),
        resourceLoaderLocal.scriptUrl("Settings.js"),
        resourceLoaderLocal.scriptUrl("RadioPlayer.js")
    ];
    
    evaluateScripts(javascriptFiles, function(success) {
        if(success) {
            Presenter.options = options;
            Presenter.settings = Settings;
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
