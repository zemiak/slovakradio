function ResourceLoader(baseurl) {
    this.BaseUrl = baseurl;
}

ResourceLoader.prototype.loadResource = function (resource, callback) {
    var self = this;
    
    evaluateScripts([resource], function (success) {
        if (success) {
            var res = Template.call(self);
            callback.call(self, res);
        } else {
            var title = "Resource Loader Error";
            var description = `Error loading resource '${resource}'.\n\n Try again later.`;
            var alert = createAlert(title, description);
                    
            navigationDocument.presentModal(alert);
        }
    });
}
