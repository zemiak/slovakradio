var resourceLoader;

App.onLaunch = function(options) {
    var javascriptFiles = [
        `${options.BaseUrl}js/Presenter.js`,
        `${options.BaseUrl}js/ResourceLoader.js`,
        `${options.BaseUrl}js/RadioData.js`,
        `${options.BaseUrl}js/Settings.js`,
        `${options.BaseUrl}js/RadioPlayer.js`,
    ];
    
    evaluateScripts(javascriptFiles, function(success) {
        if(success) {
            resourceLoader = new ResourceLoader(options.BaseUrl);
            resourceLoader.loadResource(`${options.BaseUrl}templates/Main.xml.js`, function(resource) {
                Presenter.BaseUrl = options.BaseUrl;
                Presenter.options = options;
                Presenter.settings = Settings;
                var doc = Presenter.makeDocument(resource);
                doc.addEventListener("select", Presenter.load.bind(Presenter));
                Presenter.pushDocument(doc);
            });
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
